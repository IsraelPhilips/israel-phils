import { Helmet } from "react-helmet-async";
import { Section } from "../components/Section";
import { aboutNarrative, images, siteTitle } from "../content/siteContent";

export function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About | {siteTitle}</title>
        <meta
          name="description"
          content="Learn about Israel Philips, a Nigerian software engineer, AI developer, founder, and speaker building useful products for a global market."
        />
      </Helmet>

      <section className="page-hero">
        <div className="page-copy">
          <span className="section-eyebrow">About Israel</span>
          <h1>Engineering discipline with founder-level product instinct.</h1>
          <p>
            I build for teams that want quality, clarity, and AI that actually improves how the
            business works.
          </p>
        </div>
        <div className="about-photo-grid">
          <img src={images.portrait} alt="Portrait of Israel Philips" />
          <img src={images.editorial} alt="Israel Philips at an event backdrop" />
        </div>
      </section>

      <Section
        eyebrow="Story"
        title="Built in Nigeria, aimed at the world"
        copy="My work sits at the edge of software, AI, and business usefulness. I care about making that intersection simple and effective for the people who rely on it."
      >
        <div className="story-grid">
          {aboutNarrative.map((paragraph) => (
            <article key={paragraph} className="story-card">
              <p>{paragraph}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}

