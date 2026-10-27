import Icon from '../components/Icon.jsx';
import { Button, CtaBand, Eyebrow, PageHero, Photo, Reveal, SectionHead } from '../components/ui.jsx';
import { site, spaces } from '../content.js';

// One photo shows as an arch; three become a mosaic (tall photo + two stacked).
function GroupMedia({ images }) {
  if (images.length === 1) return <Photo name={images[0]} shape="arch" className="group__single" />;
  const [tall, ...rest] = images;
  return (
    <div className="group__mosaic">
      <Photo name={tall} shape="arch" className="group__tall" />
      {rest.map((name) => <Photo key={name} name={name} shape="round" />)}
    </div>
  );
}

function SpaceGroups() {
  const g = spaces.groups;
  return (
    <section className="section groups" id="our-spaces">
      <div className="container">
        <SectionHead eyebrow={g.eyebrow} title={g.title} body={g.body} align="center" />
        <nav className="group-nav" aria-label="Spaces">
          {g.items.map((item) => (
            <a key={item.id} href={`#${item.id}`}>{item.name}</a>
          ))}
        </nav>

        {g.items.map((item, i) => (
          <article key={item.id} id={item.id} className={`group${i % 2 ? ' group--flip' : ''}`}>
            <Reveal className="group__media">
              <GroupMedia images={item.images} />
            </Reveal>
            <Reveal className="group__text" delay={120}>
              <p className="eyebrow"><span className="group__num">0{i + 1}</span>{item.name}</p>
              <h2 className="display">{item.title}</h2>
              <p className="body-lg">{item.body}</p>
              <ul className="group__points">
                {item.points.map((pt) => (
                  <li key={pt.label}><span><Icon name={pt.icon} size={22} /></span>{pt.label}</li>
                ))}
              </ul>
              <div className="btn-row">
                <Button to={`/book?plan=${encodeURIComponent(item.plan)}`}>{item.cta}</Button>
                <Button href={site.phoneHref} variant="outline" icon="phone">Call Now</Button>
              </div>
            </Reveal>
          </article>
        ))}
      </div>
    </section>
  );
}

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

      <SpaceGroups />

      <section className="section section--sand">
        <div className="container">
          <SectionHead eyebrow="Everyday at Kaarya" title="Everything you need to do your best work" align="center" />
          <div className="rows">
            {spaces.features.map((f, i) => (
              <Reveal key={f.title} className={`row${i % 2 ? ' row--flip' : ''}`}>
                <Photo name={f.image} shape={i % 2 ? 'round' : 'arch'} />
                <div className="row__text">
                  <span className="row__num">0{i + 1}</span>
                  <span className="feature__icon"><Icon name={f.icon} /></span>
                  <h3 className="h3">{f.title}</h3>
                  <p className="body-lg">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section offerings">
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
            {spaces.gallery.map((g, i) => (
              <Reveal key={g} className="gallery__item" delay={(i % 3) * 80}>
                <Photo name={g} shape="natural" />
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
