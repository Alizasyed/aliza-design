"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { caseStudies, clients } from "@/lib/data";
import { ProjectVisual } from "@/components/ProjectVisual";

export function TrustedBy() {
  const reduce = useReducedMotion();
  const [activeName, setActiveName] = useState<string | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const client = activeName ? clients.find((c) => c.name === activeName) : null;
  const projects =
    client?.slugs
      ?.map((s) => caseStudies.find((p) => p.slug === s))
      .filter((p): p is NonNullable<typeof p> => Boolean(p)) ?? [];

  return (
    <section
      className="relative mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28"
      onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
    >
      <div className="flex items-baseline justify-between gap-4 mb-10">
        <h2 className="field-label text-ink-faint">Trusted by</h2>
        <span className="field-label text-ink-faint hidden sm:block">
          Hover to see the work
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-x-8 gap-y-5 sm:gap-x-12">
        {clients.map((c) => {
          const hasProjects = Boolean(c.slugs && c.slugs.length > 0);
          const first = hasProjects
            ? caseStudies.find((p) => p.slug === c.slugs![0])
            : undefined;

          const content = (
            <>
              {c.logo ? (
                <span
                  role="img"
                  aria-label={c.name}
                  className="inline-block h-7 bg-current align-middle sm:h-8"
                  style={{
                    aspectRatio: c.logoAspect ?? 3,
                    maskImage: `url(${c.logo})`,
                    WebkitMaskImage: `url(${c.logo})`,
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "left center",
                    WebkitMaskPosition: "left center",
                  }}
                />
              ) : (
                c.name
              )}
              {hasProjects && c.slugs!.length > 1 && (
                <sup className="ml-1 align-super font-mono text-[0.6em] text-ink-faint">
                  {c.slugs!.length}
                </sup>
              )}
            </>
          );

          if (!hasProjects) {
            return (
              <span
                key={c.name}
                className="group/client relative font-display text-2xl sm:text-4xl leading-none text-ink-faint"
              >
                {content}
              </span>
            );
          }

          return (
            <Link
              key={c.name}
              href={`/work/${c.slugs![0]}`}
              onMouseEnter={() => setActiveName(c.name)}
              onMouseLeave={() =>
                setActiveName((n) => (n === c.name ? null : n))
              }
              onFocus={() => setActiveName(c.name)}
              onBlur={() => setActiveName((n) => (n === c.name ? null : n))}
              style={{ "--proj": first?.accent } as CSSProperties}
              className="group/client relative font-display text-2xl sm:text-4xl leading-none text-ink-faint transition-colors duration-200 hover:text-[color:var(--proj)] focus-visible:text-[color:var(--proj)] focus-visible:outline-none"
            >
              {content}
            </Link>
          );
        })}
      </div>

      {/* cursor-following preview — a fan of every project done with this client */}
      <AnimatePresence>
        {client && projects.length > 0 && !reduce && (
          <motion.div
            key={client.name}
            aria-hidden
            className="pointer-events-none fixed z-40 hidden md:block"
            style={{ left: 0, top: 0 }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1, x: pos.x + 28, y: pos.y - 90 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{
              opacity: { duration: 0.18 },
              scale: { duration: 0.18 },
              x: { type: "spring", stiffness: 500, damping: 40, mass: 0.5 },
              y: { type: "spring", stiffness: 500, damping: 40, mass: 0.5 },
            }}
          >
            <div className="relative h-44 w-60">
              {projects.slice(0, 3).map((p, i) => (
                <div
                  key={p.slug}
                  className="absolute left-0 top-0 h-40 w-56 origin-top-left"
                  style={{
                    transform: `translate(${i * 16}px, ${i * 14}px) rotate(${i * 3}deg)`,
                    zIndex: 10 - i,
                  }}
                >
                  <ProjectVisual
                    image={p.image}
                    alt={p.imageAlt}
                    slug={p.slug}
                    accent={p.accent}
                    vivid
                    sizes="224px"
                    markClassName="bottom-2 right-2 h-5 w-5"
                    className="h-full w-full rounded-lg border hairline shadow-2xl"
                  />
                </div>
              ))}
            </div>
            <p className="field-label mt-3 text-ink-soft">
              {projects.length > 1
                ? `${projects.length} projects with ${client.name}`
                : projects[0].title}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
