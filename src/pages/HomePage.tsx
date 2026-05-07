import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { AnimatedRole } from "../components/AnimatedRole";
import { Section } from "../components/Section";
import {
  authorityPillars,
  expertSeoDescription,
  homeStats,
  images,
  rotatingRoles,
  siteTitle,
} from "../content/siteContent";
import { getMailtoLink, links } from "../utils/env";

export function HomePage() {
  const speakingMail = getMailtoLink("Speaking engagement");

  return (
    <>
      <Helmet>
        <title>{siteTitle} | Founder, Speaker, AI Specialist</title>
        <meta name="description" content={expertSeoDescription} />
      </Helmet>

      <section className="hero-shell">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="hero-kicker">Personal brand portfolio</span>
          <h1>
            Israel Philips is a{" "}
            <AnimatedRole roles={rotatingRoles} />
          </h1>
          <p className="hero-description">
            I help businesses, teams, and audiences understand what useful AI looks like in
            practice. My work sits at the intersection of engineering, product thinking, and
            business clarity.
          </p>
          <div className="hero-actions">
            {links.calendly ? (
              <a className="button" href={links.calendly} target="_blank" rel="noreferrer">
                Book a consultation
              </a>
            ) : null}
            {speakingMail ? (
              <a className="button button-secondary" href={speakingMail}>
                Book me to speak
              </a>
            ) : null}
            {links.linkedIn ? (
              <a
                className="text-link"
                href={links.linkedIn}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            ) : null}
          </div>
          <div className="hero-stat-grid">
            {homeStats.map((item) => (
              <article key={item.value} className="stat-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </motion.div>

        <motion.aside
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12 }}
        >
          <div className="photo-stack">
            <img className="photo-main" src={images.speaking} alt="Israel Philips speaking to an audience" />
            <img className="photo-accent" src={images.editorial} alt="Israel Philips at an event" />
          </div>
          <div className="hero-badge-card">
            <span className="section-eyebrow">What I focus on</span>
            <ul>
              {authorityPillars.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.aside>
      </section>

      <Section
        eyebrow="Why this matters"
        title="Practical AI. Strong execution. A founder’s perspective."
        copy="I am not interested in AI theater. I care about what helps a business move faster, operate better, and make smarter product decisions."
      >
        <div className="highlight-grid">
          <article className="highlight-card">
            <h3>For founders</h3>
            <p>
              I understand the pressure of building something real, making it useful, and finding
              the path between ambition and execution.
            </p>
          </article>
          <article className="highlight-card">
            <h3>For teams</h3>
            <p>
              I help simplify AI adoption so your product or workflow becomes sharper, not noisier.
            </p>
          </article>
          <article className="highlight-card">
            <h3>For audiences</h3>
            <p>
              I speak with clarity about building, experimenting, and creating useful systems from
              Africa for a global market.
            </p>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="Ways to work with me"
        title="Consulting, speaking, and founder-level product perspective"
        copy="Whether you need a strategic conversation, a speaker for your audience, or a practical voice on AI adoption, the goal is the same: make the next move clearer."
      >
        <div className="service-preview-grid">
          <Link className="preview-card" to="/consulting">
            <span className="section-eyebrow">Consulting</span>
            <h3>Book one-on-one AI and product advisory</h3>
            <p>Get practical clarity on what to build, automate, or simplify next.</p>
          </Link>
          <Link className="preview-card" to="/speaking">
            <span className="section-eyebrow">Speaking</span>
            <h3>Bring me in for conversations that cut through the AI noise</h3>
            <p>Sessions designed to leave founders, teams, and audiences with something useful.</p>
          </Link>
        </div>
      </Section>
    </>
  );
}

