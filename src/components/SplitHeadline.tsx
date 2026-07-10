"use client";

import { Fragment } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { EASE_SIGNATURE } from "@/lib/motion";

export function SplitHeadline({
  text,
  as: Tag = "h1",
  className,
  delay = 0,
  italicFrom,
  emphasisClassName,
}: {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  delay?: number;
  /** Word index (0-based) from which the rest of the headline renders in italic. */
  italicFrom?: number;
  /** Extra classes applied to the emphasized (italicFrom) words, e.g. a color. */
  emphasisClassName?: string;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.06, delayChildren: delay },
    },
  };

  const word: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : "0.6em" },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE_SIGNATURE },
    },
  };

  return (
    <Tag className={className}>
      <motion.span
        initial="hidden"
        animate="show"
        variants={container}
        className="inline"
      >
        {words.map((w, i) => (
          <Fragment key={i}>
            <span className="inline-block overflow-hidden align-top pb-[0.1em]">
              <motion.span
                variants={word}
                className={`inline-block ${italicFrom !== undefined && i >= italicFrom ? `italic ${emphasisClassName ?? ""}` : ""}`}
              >
                {w}
              </motion.span>
            </span>
            {i < words.length - 1 ? " " : ""}
          </Fragment>
        ))}
      </motion.span>
    </Tag>
  );
}
