import Icon from '../components/Icon.jsx';
import { Button, CtaBand, Eyebrow, PageHero, Photo, Reveal, SectionHead } from '../components/ui.jsx';
import { spaces } from '../content.js';

export default function Spaces() {
  const { offerings } = spaces;
  return (
    <>
      <PageHero {...spaces.hero} image="hall" />

      <section className="stats">
        <div className="container stats__grid">
          {spaces.stats.map((s, i) => (
            <Reveal key={s.label} className="stat" delay={i * 100}>
              <span className="stat__value">{s.value}<small>{s.unit}</small></span>
              <span className="stat__label">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="rows">
            {spaces.features.map((f, i) => (
              <Reveal key={f.title} className={`row${i % 2 ? ' row--flip' : ''}`}>
                <Photo name={f.image} shape={i % 2 ? 'round' : 'arch'} />
                <div className="row__text">
                  <span className="row__num">0{i + 1}</span>
                  <span className="feature__icon"><Icon name={f.icon} /></span>
                  <h2 className="h3">{f.title}</h2>
                  <p className="body-lg">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--sand offerings">
        <div className="container">
          <SectionHead eyebrow={offerings.eyebrow} title={offerings.title} align="center" />
          <div className="offer-grid">
            {offerings.items.map((o, i) => (
              <Reveal className="offer" key={o.title} delay={i * 100}>
                <span className="offer__num">0{i + 1}</span>
                <h3>{o.title}</h3>
                <p>{o.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="also">
            <span className="script also__title">Also</span>
            <ul>
              {offerings.also.map((a) => <li key={a}><Icon name="check" size={18} />{a}</li>)}
            </ul>
          </Reveal>
          <div className="btn-row btn-row--center">
            <Button to="/book">Reserve Your Desk</Button>
          </div>
        </div>
      </section>

      <section className="section gallery-section">
        <div className="container">
          <Eyebrow>Inside Kaarya</Eyebrow>
          <div className="gallery">
            {['signage', 'lounge', 'bar', 'nook', 'tables'].map((g, i) => (
              <Reveal key={g} className={`gallery__item gallery__item--${i}`} delay={i * 80}>
                <Photo name={g} shape="soft" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={spaces.cta.title}
        body={spaces.cta.body}
        primary={<Button to="/book">Visit Kaarya</Button>}
      />
    </>
  );
}
