import Logo from '../components/Logo.jsx';
import { Button, CtaBand, Divider, Eyebrow, PageHero, Photo, Reveal, SectionHead } from '../components/ui.jsx';
import { about, home } from '../content.js';

export default function About() {
  const { meaning, story, founder, mission } = about;
  return (
    <>
      <PageHero {...about.hero} image="lounge-wide" />

      <section className="section meaning">
        <div className="container meaning__grid">
          <Reveal className="meaning__word">
            <Logo variant="kannada" title="ಕಾರ್ಯ, Kaarya" />
            <span className="meaning__devanagari" lang="sa">{meaning.script}</span>
            <span className="meaning__phonetic">kaar·ya &nbsp;/&nbsp; noun &nbsp;/&nbsp; action, work</span>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>The Name</Eyebrow>
            <h2 className="display">{meaning.word}</h2>
            <p className="body-lg">{meaning.body}</p>
          </Reveal>
        </div>
      </section>

      <section className="section story">
        <div className="container story__grid">
          <Reveal>
            <SectionHead eyebrow={story.eyebrow} title={story.title} />
            {story.body.map((p) => <p key={p} className="body-lg">{p}</p>)}
          </Reveal>
          <Reveal delay={120}><Photo name="hall" shape="arch" /></Reveal>
        </div>
      </section>

      <section className="section section--dark founder">
        <div className="kolam" aria-hidden="true" />
        <div className="container founder__grid">
          <Reveal className="founder__portrait">
            <Photo name="nook" shape="arch" />
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow light>{founder.eyebrow}</Eyebrow>
            <h2 className="display">{founder.name}</h2>
            {founder.body.map((p) => <p key={p} className="body-lg">{p}</p>)}
            <blockquote className="pull-quote pull-quote--light">“{founder.quote}”</blockquote>
          </Reveal>
        </div>
      </section>

      <section className="section mission">
        <div className="container mission__inner">
          <Reveal>
            <SectionHead eyebrow={mission.eyebrow} title={mission.title} body={mission.body} align="center" />
            <Divider />
            <div className="btn-row btn-row--center">
              <Button to="/spaces">Explore the Space</Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand title={home.cta.title} body={home.cta.body} />
    </>
  );
}
