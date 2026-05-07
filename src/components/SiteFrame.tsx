import { AnimatePresence, motion } from "framer-motion";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { navItems } from "../content/siteContent";
import { links } from "../utils/env";

export function SiteFrame() {
  const location = useLocation();

  return (
    <div className="app-shell">
      <div className="background-grid" />
      <div className="background-glow background-glow-left" />
      <div className="background-glow background-glow-right" />

      <header className="site-header">
        <NavLink className="brand-mark" to="/">
          <span className="brand-seal">IP</span>
          Israel Philips
        </NavLink>
        <nav className="site-nav" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        {links.linkedIn ? (
          <a
            className="button button-secondary header-cta"
            href={links.linkedIn}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        ) : null}
      </header>

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <footer className="site-footer">
        <p>Founder, speaker, AI specialist, and software engineer building practical systems with global ambition.</p>
        <div className="footer-links">
          {links.linkedIn ? (
            <a href={links.linkedIn} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          ) : null}
          <NavLink to="/consulting">Consulting</NavLink>
        </div>
      </footer>
    </div>
  );
}

