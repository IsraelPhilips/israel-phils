import { Helmet } from "react-helmet-async";
import { Section } from "../components/Section";
import {
  audienceGroups,
  consultingSteps,
  serviceOffers,
  siteTitle,
} from "../content/siteContent";
import { links } from "../utils/env";

export function ConsultingPage() {
  return (
    <>
      <Helmet>
        <title>Consulting | {siteTitle}</title>
        <meta
          name="description"
          content="Book Israel Philips for practical AI strategy, product advisory, and founder-focused technical consultation."
        />
      </Helmet>

      <section className="page-hero page-hero-consulting">
        <div className="page-copy">
          <span className="section-eyebrow">Consulting</span>
          <h1>Practical AI and product guidance for teams that want clarity before complexity.</h1>
          <p>
            If you want a calm, strategic conversation about AI, product decisions, or what to
            build next, this is designed to help you cut through noise quickly.
          </p>
          <div className="hero-actions">
            {links.calendly ? (
              <a className="button" href={links.calendly} target="_blank" rel="noreferrer">
                Book a consultation
              </a>
            ) : null}
            {links.linkedIn ? (
              <a
                className="button button-secondary"
                href={links.linkedIn}
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn
              </a>
            ) : null}
          </div>
        </div>
        <div className="consulting-side-panel">
          <span className="section-eyebrow">Best fit</span>
          <ul>
            {audienceGroups.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <Section
        eyebrow="Offers"
        title="Ways I can help"
        copy="These conversations are designed to simplify decisions, sharpen direction, and help you focus on changes that create real value."
      >
        <div className="offer-grid">
          {serviceOffers.map((offer) => (
            <article key={offer.title} className="offer-card">
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
              <ul>
                {offer.outcomes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="How it works"
        title="A simple engagement flow"
        copy="The process is intentionally straightforward so you can get clarity quickly and move with more confidence."
      >
        <div className="steps-grid">
          {consultingSteps.map((step, index) => (
            <article key={step} className="step-card">
              <span>{`0${index + 1}`}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}

