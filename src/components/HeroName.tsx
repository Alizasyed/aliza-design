"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { EASE_SIGNATURE } from "@/lib/motion";

const segments = [
  { text: "Aliza", className: "font-display font-medium tracking-[-0.015em]" },
  { text: "Habib", className: "font-display font-medium italic tracking-[-0.015em]" },
];

export function HeroName({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  const word: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : "0.5em" },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: EASE_SIGNATURE },
    },
  };

  return (
    <h1 className={className}>
      <span className="sr-only">Aliza Habib</span>
      <motion.span
        aria-hidden
        initial="hidden"
        animate="show"
        variants={container}
        className="flex flex-wrap items-baseline gap-x-[0.28em] gap-y-0"
      >
        {segments.map((seg) => (
          <span key={seg.text} className="inline-block overflow-hidden pb-[0.08em]">
            <motion.span variants={word} className={`inline-block ${seg.className}`}>
              {seg.text}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </h1>
  );
}
