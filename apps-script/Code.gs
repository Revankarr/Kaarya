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
  // Same phone number as site.phone in src/content.js.
  PHONE: '+91 99016 41122',
};

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
  const rows = [
    ['Booking', d.plan], ['Name', d.name], ['Phone', d.phone], ['Email', d.email],
    ['Preferred date', formatDate_(d.date) || 'Not specified'], ['Team size', d.team],
    ['Message', d.message || '—'],
  ];
  const table = rows
    .map(([k, v]) => `<tr><td style="padding:6px 16px 6px 0;color:#7d6754">${k}</td><td style="padding:6px 0"><b>${esc_(v)}</b></td></tr>`)
    .join('');
  MailApp.sendEmail({
    to: CONFIG.NOTIFY_EMAILS.join(','),
    replyTo: d.email,
    subject: `New booking request: ${d.plan} · ${d.name}`,
    htmlBody: `<div style="font-family:Arial,sans-serif;color:#26170e">
      <p>A new booking request came in from the website.</p>
      <table>${table}</table>
      <p><a href="${SpreadsheetApp.getActiveSpreadsheet().getUrl()}">Open the bookings sheet</a> · Reply to this email to answer ${esc_(d.name)} directly.</p>
    </div>`,
  });
}

function sendConfirmation_(d) {
  const when = formatDate_(d.date);
  MailApp.sendEmail({
    to: d.email,
    replyTo: CONFIG.REPLY_TO,
    name: CONFIG.BRAND,
    subject: `We’ve received your ${d.plan} request · Kaarya`,
    htmlBody: `<div style="font-family:Arial,sans-serif;color:#26170e;line-height:1.6;max-width:560px">
      <p>Hi ${esc_(d.name)},</p>
      <p>Thank you for choosing Kaarya. We’ve received your request for a <b>${esc_(d.plan)}</b>${when ? ` on <b>${when}</b>` : ''}.
      Our team will confirm within a working day.</p>
      <p>Bookings are made at least 24 hours in advance, and you can cancel up to 12 hours before at no charge.</p>
      <p>Questions? Reply to this email or call us at ${esc_(CONFIG.PHONE)}.</p>
      <p>Warmly,<br>Team Kaarya<br><span style="color:#7d6754">JP Nagar, Bangalore · Mon – Fri, 9 AM – 9 PM</span></p>
    </div>`,
  });
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
