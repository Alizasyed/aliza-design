"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_SIGNATURE } from "@/lib/motion";

const nodes = [
  { x: 60, y: 70 },
  { x: 150, y: 40 },
  { x: 230, y: 120 },
  { x: 190, y: 230 },
  { x: 90, y: 260 },
  { x: 40, y: 180 },
  { x: 260, y: 300 },
  { x: 150, y: 340 },
];

const paths = [
  "M60 70 C 100 55, 120 45, 150 40",
  "M150 40 C 190 60, 215 90, 230 120",
  "M230 120 C 215 165, 200 200, 190 230",
  "M190 230 C 150 245, 120 255, 90 260",
  "M90 260 C 60 245, 45 215, 40 180",
  "M40 180 C 45 130, 50 100, 60 70",
];

const highlightPath = "M190 230 C 225 255, 245 275, 260 300";
const tailPath = "M260 300 C 220 320, 185 332, 150 340";

export function HeroMark() {
  const reduce = useReducedMotion();

  return (
    <svg
      viewBox="0 0 300 380"
      className="h-full w-full"
      aria-hidden
      role="presentation"
    >
      <g className="text-ink" opacity="0.34" stroke="currentColor" strokeWidth="1.4" fill="none">
        {paths.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            initial={reduce ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.5 + i * 0.08, ease: EASE_SIGNATURE }}
          />
        ))}
        <motion.path
          d={tailPath}
          initial={reduce ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.98, ease: EASE_SIGNATURE }}
        />
      </g>

      <motion.path
        d={highlightPath}
        className="text-accent"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        opacity="0.85"
        initial={reduce ? { pathLength: 1, opacity: 0.85 } : { pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.85 }}
        transition={{ duration: 0.9, delay: 0.9, ease: EASE_SIGNATURE }}
      />

      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={i === 6 ? 6.5 : i === 3 ? 4 : 3}
          className={i === 6 ? "fill-accent" : "text-ink"}
          fill={i === 6 ? undefined : "currentColor"}
          opacity={i === 6 ? 1 : i === 3 ? 0.7 : 0.5}
          initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          animate={{ opacity: i === 6 ? 1 : i === 3 ? 0.7 : 0.5, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 + i * 0.06, ease: EASE_SIGNATURE }}
        />
      ))}

      <motion.circle
        cx={190}
        cy={230}
        r={9}
        className="text-accent"
        stroke="currentColor"
        strokeWidth="1.25"
        fill="none"
        initial={reduce ? { opacity: 0.5, scale: 1 } : { opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.5, ease: EASE_SIGNATURE }}
      />

      <motion.circle
        cx={260}
        cy={300}
        r={14}
        className="text-accent"
        stroke="currentColor"
        strokeWidth="1.25"
        fill="none"
        initial={reduce ? { opacity: 0.55, scale: 1 } : { opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.55, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.65, ease: EASE_SIGNATURE }}
      />
    </svg>
  );
}
