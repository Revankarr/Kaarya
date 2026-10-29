/**
 * Kaarya booking backend.
 *
 * Receives booking requests from the website's /book form, logs each one as a row
 * in this Google Sheet, emails the Kaarya team, and sends the visitor a confirmation.
 * Setup steps are in apps-script/README.md.
 */

const CONFIG = {
  SHEET_NAME: 'Bookings',
  // Who at Kaarya gets an email for every new booking request.
  NOTIFY_EMAILS: ['info@kaarya.co'],
  // Visitors' replies to the confirmation email go here.
  REPLY_TO: 'info@kaarya.co',
  SEND_CONFIRMATION: true,
  BRAND: 'Kaarya Coworking',
  // Same details as `site` in src/content.js.
  PHONE: '+91 99016 41122',
  PHONE_HREF: 'tel:+919901641122',
  WHATSAPP: 'https://wa.me/919901641122',
  SITE_URL: 'https://www.kaarya.co',
  MAPS_URL: 'https://share.google/sNoNhbz4NyQ3MdNZB',
  INSTAGRAM: 'https://www.instagram.com/kaarya.co/',
  ADDRESS: '2nd Floor, Eterna, 788, 15th Cross Rd, J. P. Nagar 1st Phase, Bengaluru 560078',
  HOURS: 'Mon – Fri · 9 AM – 9 PM',
};

// Site palette (src/styles.css), inlined because email clients ignore stylesheets.
const C = {
  brown: '#3b2316', ink: '#26170e', text: '#45311f', muted: '#7d6754',
  copper: '#b87333', gold: '#d9be8c', cream: '#fbf7f0', linen: '#f3ece1', sand: '#e9ddcb',
};
const SERIF = "Georgia,'Times New Roman',serif";
const SANS = "'Helvetica Neue',Helvetica,Arial,sans-serif";

const PLANS = ['Book a Tour', 'Day Pass', 'Monthly Membership', 'Meeting Room', 'Private Cabin', 'Event Space', 'Podcast Space'];
const TEAM_SIZES = ['Just me', '2 – 5', '6 – 10', '10+'];
// Only these can be booked on Saturdays and Sundays (matches book.weekendPlans in src/content.js).
const WEEKEND_PLANS = ['Event Space'];
const STATUSES = ['New', 'Contacted', 'Confirmed', 'Cancelled'];
const HEADERS = ['Received', 'Status', 'Plan', 'Name', 'Phone', 'Email', 'Preferred date', 'Team size', 'Message', 'Page'];

/** Run once from the editor: creates the Bookings tab with headers and a Status dropdown. */
function setup() {
  const sheet = getSheet_();
  sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]).setFontWeight('bold').setBackground('#3b2316').setFontColor('#fbf7f0');
  sheet.setFrozenRows(1);
  sheet.getRange('A:A').setNumberFormat('dd mmm yyyy, h:mm am/pm');
  sheet.getRange(2, 2, sheet.getMaxRows() - 1, 1).setDataValidation(
    SpreadsheetApp.newDataValidation().requireValueInList(STATUSES, true).build()
  );
  sheet.setColumnWidths(1, HEADERS.length, 150);
  sheet.setColumnWidth(9, 320);
}

function doPost(e) {
  const p = (e && e.parameter) || {};

  // Honeypot: a hidden field real visitors never fill in. Pretend success to bots.
  if (p.website) return json_({ ok: true });

  const data = {
    plan: clean_(p.plan, 40),
    name: clean_(p.name, 100),
    phone: clean_(p.phone, 30),
    email: clean_(p.email, 120),
    date: clean_(p.date, 10),
    team: clean_(p.team, 20),
    message: clean_(p.message, 1500),
    page: clean_(p.page, 300),
  };

  const errors = validate_(data);
  if (errors.length) return json_({ ok: false, error: errors.join(' ') });

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    getSheet_().appendRow([
      new Date(), 'New', data.plan, data.name, data.phone, data.email,
      data.date, data.team, data.message, data.page,
    ].map(safeCell_));
  } finally {
    lock.releaseLock();
  }

  // Email failures (e.g. daily quota reached) must not lose the booking, which is already saved.
  try {
    notifyTeam_(data);
    if (CONFIG.SEND_CONFIRMATION) sendConfirmation_(data);
  } catch (err) {
    console.error('Booking saved but email failed: ' + err);
  }

  return json_({ ok: true });
}

/** Opening the web app URL in a browser shows this, which confirms the deployment works. */
function doGet() {
  return json_({ ok: true, service: 'kaarya-booking' });
}

function validate_(d) {
  const errors = [];
  if (!PLANS.includes(d.plan)) errors.push('Please choose what you would like to book.');
  if (!d.name) errors.push('Please enter your name.');
  if (!/^[+\d][\d\s-]{6,}$/.test(d.phone)) errors.push('Please enter a valid phone number.');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) errors.push('Please enter a valid email address.');
  if (d.date) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(d.date)) {
      errors.push('Please choose a valid date.');
    } else {
      const [y, m, day] = d.date.split('-').map(Number);
      const when = new Date(y, m - 1, day);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (when <= today) errors.push('Bookings need 24 hours’ notice. Please choose a later date.');
      else if ((when.getDay() === 0 || when.getDay() === 6) && !WEEKEND_PLANS.includes(d.plan)) {
        errors.push('Weekends are available for Event Space bookings only. Please choose a weekday.');
      }
    }
  }
  if (d.team && !TEAM_SIZES.includes(d.team)) errors.push('Please choose a team size.');
  return errors;
}

function notifyTeam_(d) {
  const sheetUrl = SpreadsheetApp.getActiveSpreadsheet().getUrl();
  const rows = [
    ['Name', d.name],
    ['Phone', `<a href="tel:${esc_(d.phone.replace(/[\s-]/g, ''))}" style="color:${C.copper};text-decoration:none">${esc_(d.phone)}</a>`, true],
    ['Email', `<a href="mailto:${esc_(d.email)}" style="color:${C.copper};text-decoration:none">${esc_(d.email)}</a>`, true],
    ['Preferred date', formatDate_(d.date) || 'Not specified'],
    ['Team size', d.team || '—'],
    ['Message', d.message || '—'],
  ];
  const body = `
    ${eyebrow_('New booking request')}
    ${heading_(`${esc_(d.plan)} · ${esc_(d.name)}`)}
    <p style="margin:0 0 24px;font-family:${SANS};font-size:15px;line-height:1.6;color:${C.text}">
      A new request just came in from the website. Hit reply to answer ${esc_(d.name)} directly.</p>
    ${detailsCard_(rows)}
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:28px"><tr>
      <td>${button_('Open bookings sheet', sheetUrl)}</td>
    </tr></table>`;
  MailApp.sendEmail({
    to: CONFIG.NOTIFY_EMAILS.join(','),
    replyTo: d.email,
    subject: `New booking request: ${d.plan} · ${d.name}`,
    htmlBody: layout_(`${d.plan} request from ${d.name}`, body),
  });
}

function sendConfirmation_(d) {
  const when = formatDate_(d.date);
  const rows = [
    ['Booking', d.plan],
    ['Preferred date', when || 'We’ll agree a date with you'],
  ];
  if (d.team) rows.push(['Team size', d.team]);
  if (d.message) rows.push(['Your note', d.message]);

  const steps = [
    ['Within a working day', 'Our team calls or emails you to confirm your booking.'],
    ['On the day', 'Come by at your confirmed time. We’re open Monday to Friday, 9 AM – 9 PM.'],
    ['Change of plans?', 'Cancel up to 12 hours before at no charge. Just reply to this email.'],
  ];
  const stepRows = steps.map(([title, text], i) => `
    <tr>
      <td valign="top" style="padding:0 16px 20px 0;width:36px">
        <div style="width:32px;height:32px;line-height:32px;border-radius:50%;background:${C.copper};color:${C.cream};text-align:center;font-family:${SERIF};font-size:15px">${i + 1}</div>
      </td>
      <td valign="top" style="padding:4px 0 20px;font-family:${SANS};font-size:15px;line-height:1.55;color:${C.text}">
        <b style="color:${C.ink}">${title}</b><br>${text}
      </td>
    </tr>`).join('');

  const body = `
    ${eyebrow_('Request received')}
    ${heading_(`Thank you, ${esc_(firstName_(d.name))}.`)}
    <p style="margin:0 0 28px;font-family:${SANS};font-size:16px;line-height:1.65;color:${C.text}">
      We’re delighted you chose Kaarya. Your request is with our team, and we’ll be in touch
      within a working day to confirm everything.</p>
    ${detailsCard_(rows)}
    <h2 style="margin:36px 0 18px;font-family:${SERIF};font-style:italic;font-weight:400;font-size:22px;color:${C.brown}">What happens next</h2>
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">${stepRows}</table>
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:8px"><tr>
      <td style="padding:0 10px 10px 0">${button_('Get directions', CONFIG.MAPS_URL)}</td>
      <td style="padding:0 0 10px">${button_('WhatsApp us', CONFIG.WHATSAPP, true)}</td>
    </tr></table>
    <p style="margin:28px 0 0;font-family:${SANS};font-size:15px;line-height:1.6;color:${C.text}">
      Warmly,<br><span style="font-family:${SERIF};font-style:italic;font-size:20px;color:${C.brown}">Team Kaarya</span></p>`;

  MailApp.sendEmail({
    to: d.email,
    replyTo: CONFIG.REPLY_TO,
    name: CONFIG.BRAND,
    subject: `We’ve received your ${d.plan} request · Kaarya`,
    htmlBody: layout_(`Your ${d.plan} request is in. We’ll confirm within a working day.`, body),
    body: `Hi ${firstName_(d.name)},\n\nThank you for choosing Kaarya. We’ve received your request for a ${d.plan}` +
      `${when ? ` on ${when}` : ''}. Our team will confirm within a working day.\n\n` +
      `You can cancel up to 12 hours before at no charge. Questions? Reply to this email or call ${CONFIG.PHONE}.\n\n` +
      `Warmly,\nTeam Kaarya\n${CONFIG.ADDRESS}\n${CONFIG.HOURS}`,
  });
}

/* ───────── Email building blocks ───────── */

/** Branded shell shared by both emails: brown masthead, cream card, footer with contact details. */
function layout_(preheader, inner) {
  return `<!doctype html><html><body style="margin:0;padding:0;background:${C.linen}">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0">${esc_(preheader)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.linen}">
    <tr><td align="center" style="padding:32px 12px">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;border-radius:18px;overflow:hidden;background:${C.cream};box-shadow:0 20px 40px -24px rgba(59,35,22,0.35)">
        <tr><td align="center" style="background:${C.brown};padding:36px 24px 30px">
          <div style="font-family:${SERIF};font-style:italic;font-size:40px;line-height:1;color:${C.cream};letter-spacing:0.5px">Kaarya</div>
          <div style="margin-top:10px;font-family:${SANS};font-size:11px;letter-spacing:3px;text-transform:uppercase;color:${C.gold}">Work is worship</div>
        </td></tr>
        <tr><td style="height:4px;background:${C.copper};font-size:0;line-height:0">&nbsp;</td></tr>
        <tr><td style="padding:40px 36px 36px">${inner}</td></tr>
        <tr><td style="background:${C.sand};padding:28px 36px;font-family:${SANS};font-size:13px;line-height:1.7;color:${C.muted}">
          <b style="color:${C.brown}">Kaarya Shared Workspaces</b><br>
          ${esc_(CONFIG.ADDRESS)}<br>
          ${esc_(CONFIG.HOURS)} · <a href="${CONFIG.PHONE_HREF}" style="color:${C.copper};text-decoration:none">${esc_(CONFIG.PHONE)}</a><br>
          <a href="${CONFIG.SITE_URL}" style="color:${C.copper};text-decoration:none">kaarya.co</a> ·
          <a href="${CONFIG.INSTAGRAM}" style="color:${C.copper};text-decoration:none">Instagram</a>
        </td></tr>
      </table>
    </td></tr>
  </table></body></html>`;
}

function eyebrow_(text) {
  return `<div style="margin:0 0 10px;font-family:${SANS};font-size:12px;font-weight:bold;letter-spacing:2.5px;text-transform:uppercase;color:${C.copper}">${text}</div>`;
}

function heading_(html) {
  return `<h1 style="margin:0 0 16px;font-family:${SERIF};font-style:italic;font-weight:400;font-size:32px;line-height:1.2;color:${C.brown}">${html}</h1>`;
}

/** Label/value rows on a linen card. Pass a third `true` to insert the value as trusted HTML. */
function detailsCard_(rows) {
  const trs = rows.map(([k, v, isHtml], i) => `
    <tr>
      <td valign="top" style="padding:12px 16px 12px 0;${i ? `border-top:1px solid ${C.sand};` : ''}font-family:${SANS};font-size:12px;letter-spacing:1.5px;text-transform:uppercase;color:${C.muted};white-space:nowrap">${k}</td>
      <td valign="top" style="padding:12px 0;${i ? `border-top:1px solid ${C.sand};` : ''}font-family:${SANS};font-size:15px;font-weight:bold;color:${C.ink}">${isHtml ? v : esc_(v).replace(/\n/g, '<br>')}</td>
    </tr>`).join('');
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.linen};border-left:4px solid ${C.copper};border-radius:12px">
    <tr><td style="padding:10px 24px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0">${trs}</table></td></tr>
  </table>`;
}

function button_(label, href, outline) {
  const style = outline
    ? `border:2px solid ${C.copper};color:${C.copper};background:transparent`
    : `border:2px solid ${C.copper};color:${C.cream};background:${C.copper}`;
  return `<a href="${href}" style="display:inline-block;padding:12px 24px;border-radius:999px;font-family:${SANS};font-size:14px;font-weight:bold;text-decoration:none;${style}">${label}</a>`;
}

function firstName_(name) {
  return name.split(/\s+/)[0];
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  return ss.getSheetByName(CONFIG.SHEET_NAME) || ss.insertSheet(CONFIG.SHEET_NAME);
}

function clean_(v, max) {
  return String(v || '').trim().slice(0, max);
}

// Stops values like "=HYPERLINK(...)" or "+91 98..." being read as formulas or numbers.
function safeCell_(v) {
  return typeof v === 'string' && /^[=+\-@]/.test(v) ? "'" + v : v;
}

function formatDate_(iso) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-').map(Number);
  return Utilities.formatDate(new Date(y, m - 1, d), 'Asia/Kolkata', 'EEE, d MMM yyyy');
}

function esc_(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
