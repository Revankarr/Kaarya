import Logo from '../components/Logo.jsx';
import { Button } from '../components/ui.jsx';

export default function NotFound() {
  return (
    <section className="page-hero page-hero--plain not-found">
      <div className="container page-hero__inner">
        <Logo variant="mark" className="not-found__mark" title="" />
        <h1 className="display display--xl">This room is empty</h1>
        <p className="lead">The page you’re looking for has moved, or never existed.</p>
        <div className="btn-row btn-row--center">
          <Button to="/">Back to Home</Button>
        </div>
      </div>
    </section>
  );
}
