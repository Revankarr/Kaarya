import { Button, CtaBand, FeatureGrid, PageHero, Photo, Reveal, SectionHead } from '../components/ui.jsx';
import { meetingRooms, site } from '../content.js';

export default function MeetingRooms() {
  return (
    <>
      <PageHero eyebrow={meetingRooms.hero.eyebrow} title={meetingRooms.hero.title} image="nook" />

      <section className="section">
        <div className="container split">
          <Reveal>
            <SectionHead eyebrow="Need a space to brainstorm?" title="Meetings with a cultural twist" body={meetingRooms.hero.body} />
            <div className="btn-row">
              <Button to="/book">Book a Meeting Room</Button>
              <Button href={site.phoneHref} variant="outline" icon="phone">Call Now</Button>
            </div>
          </Reveal>
          <Reveal delay={120} className="split__media">
            <Photo name="tables" shape="arch" />
          </Reveal>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container">
          <SectionHead eyebrow="Every room includes" title="Designed for ideas to take flight" align="center" />
          <FeatureGrid items={meetingRooms.features} columns={3} />
        </div>
      </section>

      <CtaBand title={meetingRooms.cta.title} body={meetingRooms.cta.body} />
    </>
  );
}
