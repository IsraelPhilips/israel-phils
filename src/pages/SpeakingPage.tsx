import { Helmet } from "react-helmet-async";
import { Section } from "../components/Section";
import {
  images,
  siteTitle,
  speakingOutcomes,
  speakingTopics,
} from "../content/siteContent";
import { getMailtoLink } from "../utils/env";

export function SpeakingPage() {
  const speakingMail = getMailtoLink("Speaking engagement");

  return (
    <>
      <Helmet>
        <title>Speaking | {siteTitle}</title>
        <meta
          name="description"
          content="Book Israel Philips to speak on practical AI, founder lessons, and product-minded engineering."
        />
      </Helmet>

      <section className="page-hero page-hero-wide">
        <div className="page-copy">
          <span className="section-eyebrow">Speaking</span>
          <h1>Talks that make AI and building feel more useful, grounded, and actionable.</h1>
          <p>
            I speak to founders, teams, developers, and communities about practical AI adoption,
            building products with purpose, and creating globally relevant work from Africa.
          </p>
          {speakingMail ? (
            <a className="button" href={speakingMail}>
              Book a speaking engagement
            </a>
          ) : null}
        </div>
        <div className="feature-photo-card">
          <img src={images.speaking} alt="Israel Philips presenting to an audience" />
        </div>
      </section>

      <Section
        eyebrow="Topics"
        title="Sessions I can speak on"
        copy="The themes below are strong starting points, but I can tailor the conversation to your audience, industry, or event context."
      >
        <div className="topic-grid">
          {speakingTopics.map((topic) => (
            <article key={topic.title} className="topic-card">
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
              <span>{topic.audience}</span>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Audience takeaways"
        title="What people should leave with"
        copy="I aim for clarity, relevance, and usefulness. The goal is not to impress people with jargon. It is to leave them with better judgment and practical next steps."
      >
        <div className="outcome-panel">
          <ul>
            {speakingOutcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}

