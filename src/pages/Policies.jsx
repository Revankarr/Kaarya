import { Link } from 'react-router-dom';
import { Eyebrow } from '../components/ui.jsx';
import { policies } from '../content.js';

export default function Policies() {
  return (
    <>
      <section className="page-hero page-hero--plain">
        <div className="container page-hero__inner">
          <Eyebrow>Member Handbook</Eyebrow>
          <h1 className="display display--xl">Policies</h1>
          <p className="lead">Clear expectations for a calm, considerate and smoothly-run space.</p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container policies">
          <nav className="policies__toc" aria-label="Policy sections">
            {policies.map((p) => <a key={p.id} href={`#${p.id}`}>{p.title}</a>)}
            <Link to="/book" className="btn btn--solid btn--sm"><span>Book a Space</span></Link>
          </nav>
          <div className="policies__body">
            {policies.map((p, i) => (
              <section key={p.id} id={p.id} className="policy">
                <h2 className="h3"><span>0{i + 1}</span>{p.title}</h2>
                <dl>
                  {p.items.map(([term, desc]) => (
                    <div key={term}>
                      <dt>{term}</dt>
                      <dd>{desc}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
