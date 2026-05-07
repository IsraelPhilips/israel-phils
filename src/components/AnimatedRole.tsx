import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type AnimatedRoleProps = {
  roles: string[];
};

export function AnimatedRole({ roles }: AnimatedRoleProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % roles.length);
    }, 2400);

    return () => window.clearInterval(timer);
  }, [roles.length]);

  return (
    <span className="role-cycler" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          className="role-word"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.36, ease: "easeOut" }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

