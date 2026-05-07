import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Israel Philips</title>
      </Helmet>
      <section className="page-hero page-hero-small">
        <div className="page-copy">
          <span className="section-eyebrow">404</span>
          <h1>This page does not exist.</h1>
          <p>Let’s get you back to the main experience.</p>
          <Link className="button" to="/">
            Return home
          </Link>
        </div>
      </section>
    </>
  );
}

