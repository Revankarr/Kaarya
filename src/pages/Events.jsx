import Icon from '../components/Icon.jsx';
import { Button, CtaBand, PageHero, Reveal, SectionHead } from '../components/ui.jsx';
import { events } from '../content.js';

export default function Events() {
  return (
    <>
      <PageHero {...events.hero} image="happening-event-2" />

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Every week at Kaarya" title={events.intro} align="center" />
          <div className="event-list">
            {events.items.map((e, i) => (
              <Reveal className="event" key={e.title} delay={i * 80}>
                <span className="event__num">0{i + 1}</span>
                <span className="event__icon"><Icon name={e.icon} size={40} /></span>
                <div>
                  <h3>{e.title}</h3>
                  <p>{e.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={events.cta.title}
        body={events.cta.body}
        primary={<Button to="/book">Get In Touch</Button>}
        secondary={<Button to="/book" variant="outline" icon="calendar">Host an Event</Button>}
      />
    </>
  );
}
