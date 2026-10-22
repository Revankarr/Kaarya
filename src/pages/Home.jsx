import { useEffect, useState } from 'react';
import Icon from '../components/Icon.jsx';
import Logo from '../components/Logo.jsx';
import { Button, CtaBand, Divider, Eyebrow, FeatureGrid, Photo, Reveal, SectionHead } from '../components/ui.jsx';
import { home, offeringsTicker } from '../content.js';

function Hero() {
  const h = home.hero;
  return (
    <section className="hero">
      <video
        className="hero__video"
        src="/media/kaarya-tour.mp4"
        poster="/media/poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="hero__veil" />
      <div className="container hero__inner">
        <h1 className="hero__title">
          <span className="eyebrow eyebrow--light">{h.eyebrow}</span>
          <span className="display display--hero">{h.title}</span>
        </h1>
        <p className="lead lead--light hero__body">{h.body}</p>
        <div className="btn-row">
          <Button to="/spaces" size="lg">Explore Our Spaces</Button>
          <Button to="/book" variant="outline-light">Book a Tour</Button>
        </div>
      </div>
      <dl className="hero__facts container">
        <div><dt>10,000</dt><dd>sq. ft. workspace</dd></div>
        <div><dt>8 – 8</dt><dd>Monday to Saturday</dd></div>
        <div><dt>JP Nagar</dt><dd>Bangalore</dd></div>
      </dl>
    </section>
  );
}

function Ticker() {
  const row = offeringsTicker.map((t) => (
    <span key={t} className="ticker__item">{t}<Logo variant="mark" title="" /></span>
  ));
  return (
    <div className="ticker" aria-label="Offerings">
      <div className="ticker__track">
        <div className="ticker__row">{row}</div>
        <div className="ticker__row" aria-hidden="true">{row}</div>
      </div>
    </div>
  );
}

function Rooted() {
  const r = home.rooted;
  return (
    <section className="section rooted">
      <div className="container rooted__grid">
        <Reveal className="rooted__text">
          <Eyebrow>{r.eyebrow}</Eyebrow>
          <blockquote className="pull-quote">“{r.quote}”</blockquote>
          <p className="body-lg">{r.body}</p>
          <Button to="/about" variant="link">Learn More</Button>
        </Reveal>
        <Reveal className="rooted__media" delay={120}>
          <Photo name="signage" shape="arch" />
          <span className="rooted__badge" aria-hidden="true">
            <span className="script">Kaarya</span>
            <span>Sanskrit for<br />action &amp; work</span>
          </span>
        </Reveal>
      </div>
    </section>
  );
}

function WhoWeAre() {
  const w = home.who;
  return (
    <section className="section who">
      <div className="container who__grid">
        <Reveal className="who__collage">
          <Photo name="lounge" shape="arch" className="who__a" />
          <Photo name="counter" shape="round" className="who__b" />
        </Reveal>
        <Reveal className="who__text" delay={120}>
          <SectionHead eyebrow={w.eyebrow} title={w.title} />
          {w.body.map((p) => <p key={p} className="body-lg">{p}</p>)}
          <ul className="chips">
            {['High-speed Wi-Fi', 'Equipped offices', 'Parking', 'Meeting rooms', 'Chai & coffee kitchen'].map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <div className="btn-row">
            <Button to="/spaces">Browse Our Spaces</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Plans() {
  const p = home.plans;
  return (
    <section className="section plans" id="plans">
      <div className="container">
        <SectionHead eyebrow={p.eyebrow} title={p.title} body={p.body} align="center" />
        <div className="plans__grid">
          {p.items.map((plan, i) => (
            <Reveal className={`plan-card${i === 0 ? ' plan-card--featured' : ''}`} key={plan.name} delay={i * 120}>
              <span className="plan-card__icon"><Icon name={plan.icon} size={36} /></span>
              <h3>{plan.name}</h3>
              <p className="plan-card__for"><strong>Perfect for</strong>{plan.perfectFor}</p>
              <ul>
                {plan.points.map((pt) => <li key={pt}><Icon name="check" size={18} />{pt}</li>)}
              </ul>
              <Button to="/book" variant={i === 0 ? 'solid' : 'outline'}>Find Your Perfect Fit</Button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  const w = home.why;
  return (
    <section className="section section--dark why">
      <div className="kolam" aria-hidden="true" />
      <div className="container">
        <div className="why__head">
          <SectionHead eyebrow={w.eyebrow} title={w.title} light />
          <Logo variant="kannada" className="why__kannada" title="" />
        </div>
        <FeatureGrid items={w.items} columns={3} light>
          <Reveal className="feature why__cta" delay={180}>
            <p className="display">Come see it for yourself.</p>
            <div className="btn-row">
              <Button to="/book" variant="solid">Book a Tour</Button>
              <Button to="/spaces" variant="outline-light">See the Space</Button>
            </div>
          </Reveal>
        </FeatureGrid>
      </div>
    </section>
  );
}

function Testimonials() {
  const t = home.testimonials;
  const [i, setI] = useState(0);
  const n = t.items.length;
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setI((x) => (x + 1) % n), 7000);
    return () => clearInterval(id);
  }, [n]);
  return (
    <section className="section testimonials">
      <div className="container testimonials__grid">
        <SectionHead eyebrow={t.eyebrow} title={t.title} body={t.body} />
        <div className="quotes" aria-live="polite">
          <span className="quotes__mark" aria-hidden="true">“</span>
          {t.items.map((q, k) => (
            <figure key={k} className={`quote${k === i ? ' is-active' : ''}`} aria-hidden={k !== i}>
              <blockquote>{q.quote}</blockquote>
              <figcaption><strong>{q.name}</strong> · {q.role}</figcaption>
            </figure>
          ))}
          <div className="quotes__dots">
            {t.items.map((_, k) => (
              <button key={k} className={k === i ? 'is-active' : ''} onClick={() => setI(k)} aria-label={`Show testimonial ${k + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Rooted />
      <div className="container"><Divider /></div>
      <WhoWeAre />
      <Plans />
      <Why />
      <Testimonials />
      <CtaBand title={home.cta.title} body={home.cta.body} />
    </>
  );
}

