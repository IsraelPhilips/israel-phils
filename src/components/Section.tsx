import { motion } from "framer-motion";
import type { PropsWithChildren, ReactNode } from "react";

type SectionProps = PropsWithChildren<{
  eyebrow: string;
  title: string;
  copy: string;
  actions?: ReactNode;
}>;

export function Section({
  eyebrow,
  title,
  copy,
  actions,
  children,
}: SectionProps) {
  return (
    <motion.section
      className="section-shell"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="section-head">
        <div className="section-copy">
          <span className="section-eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          <p>{copy}</p>
        </div>
        {actions ? <div className="section-actions">{actions}</div> : null}
      </div>
      {children}
    </motion.section>
  );
}

