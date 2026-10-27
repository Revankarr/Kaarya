import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import { Eyebrow, PageHero, Reveal } from '../components/ui.jsx';
import { book, site } from '../content.js';

function BookingForm() {
  const [status, setStatus] = useState('idle');
  const [minDate, setMinDate] = useState('');
  const [searchParams] = useSearchParams();
  const [plan, setPlan] = useState(book.plans[0]);

  // Space pages link here with ?plan=…; applied after hydration so it matches the prerendered HTML.
  useEffect(() => {
    const requested = searchParams.get('plan');
    if (book.plans.includes(requested)) setPlan(requested);
  }, [searchParams]);

  // Computed on the client so the prerendered HTML never carries a stale date.
  useEffect(() => setMinDate(new Date(Date.now() + 864e5).toISOString().slice(0, 10)), []);

  async function onSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    if (site.formEndpoint) {
      setStatus('sending');
      try {
        const res = await fetch(site.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(data),
        });
        setStatus(res.ok ? 'sent' : 'error');
      } catch {
        setStatus('error');
      }
      return;
    }
    const body = Object.entries(data)
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}: ${v}`)
      .join('\n');
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Kaarya booking: ${data.plan}`)}&body=${encodeURIComponent(body)}`;
    setStatus('sent');
  }

  if (status === 'sent') {
    return (
      <div className="form-done">
        <span className="feature__icon"><Icon name="check" /></span>
        <h3 className="display">Thank you!</h3>
        <p>We’ve got your request and will confirm your booking within a working day.</p>
        <button className="btn btn--outline" onClick={() => setStatus('idle')}><span>Make another booking</span></button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <fieldset className="form__plans">
        <legend>What would you like to book?</legend>
        {book.plans.map((p) => (
          <label key={p} className="pill">
            <input type="radio" name="plan" value={p} checked={plan === p} onChange={() => setPlan(p)} />
            <span>{p}</span>
          </label>
        ))}
      </fieldset>
      <div className="form__row">
        <label className="field">
          <span>Full name</span>
          <input name="name" required autoComplete="name" />
        </label>
        <label className="field">
          <span>Phone</span>
          <input name="phone" type="tel" required autoComplete="tel" inputMode="tel" />
        </label>
      </div>
      <label className="field">
        <span>Email</span>
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <div className="form__row">
        <label className="field">
          <span>Preferred date</span>
          <input name="date" type="date" min={minDate || undefined} />
        </label>
        <label className="field">
          <span>Team size</span>
          <select name="team" defaultValue="Just me">
            <option>Just me</option>
            <option>2 – 5</option>
            <option>6 – 10</option>
            <option>10+</option>
          </select>
        </label>
      </div>
      <label className="field">
        <span>Anything we should know?</span>
        <textarea name="message" rows="4" />
      </label>
      <button className="btn btn--solid btn--lg btn--block" type="submit" disabled={status === 'sending'}>
        <span>{status === 'sending' ? 'Sending…' : 'Request Booking'}</span>
        <Icon name="arrow" size={18} />
      </button>
      {status === 'error' && <p className="form__error">Something went wrong. Please call us at {site.phone}.</p>}
      <p className="form__fine">By booking you agree to our <a href="/policies">booking &amp; refund policies</a>.</p>
    </form>
  );
}

export default function Book() {
  return (
    <>
      <PageHero {...book.hero} image="counter" />

      <section className="section">
        <div className="container book__grid">
          <Reveal className="book__form card">
            <BookingForm />
          </Reveal>
          <Reveal className="book__aside" delay={120}>
            <Eyebrow>Good to know</Eyebrow>
            <ul className="notes">
              {book.notes.map((n) => <li key={n}><Icon name="check" size={18} />{n}</li>)}
            </ul>
            <div className="contact-card">
              <a href={site.phoneHref}><Icon name="phone" size={22} /><span><small>Call</small>{site.phone}</span></a>
              <a href={`mailto:${site.email}`}><Icon name="mail" size={22} /><span><small>Email</small>{site.email}</span></a>
              <a href={site.googleBusiness} target="_blank" rel="noreferrer"><Icon name="pin" size={22} /><span><small>Visit</small>{site.address.slice(1).join(', ')}</span></a>
              <div><Icon name="clock" size={22} /><span><small>Hours</small>{site.hours}</span></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="map-section" aria-label="Map">
        <iframe
          title="Kaarya Coworking Space on Google Maps"
          src={site.mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
