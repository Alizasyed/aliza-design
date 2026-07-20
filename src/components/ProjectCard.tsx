"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import type { CaseStudy } from "@/lib/data";
import { ProjectVisual } from "@/components/ProjectVisual";

export function ProjectCard({ project }: { project: CaseStudy }) {
  const [hovered, setHovered] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <Link
      href={`/work/${project.slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      style={{ "--proj": project.accent } as CSSProperties}
      className="group relative block py-8 sm:py-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <span aria-hidden className="pointer-events-none absolute left-0 top-0 h-px w-full bg-line" />
      <span
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-px w-full origin-left scale-x-0 bg-[color:var(--proj)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
      />

      <motion.span
        aria-hidden
        className="field-label pointer-events-none absolute z-10 hidden items-center gap-1.5 whitespace-nowrap border border-ink bg-paper px-3 py-1.5 sm:flex"
        style={{ left: 0, top: 0 }}
        animate={{
          x: pos.x + 18,
          y: pos.y - 16,
          opacity: hovered ? 1 : 0,
          scale: hovered ? 1 : 0.85,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 30, mass: 0.6 }}
      >
        View <span aria-hidden>&rarr;</span>
      </motion.span>

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-8 items-center">
        <span className="hidden sm:block sm:col-span-1 field-label text-ink-faint transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
          {project.index}
        </span>

        <div className="sm:col-span-1 sm:hidden field-label text-ink-faint">
          {project.index}
        </div>

        <div className="sm:col-span-7 min-w-0">
          <h3 className="font-display text-2xl sm:text-3xl leading-tight text-balance-pretty transition-colors duration-200 group-hover:text-[color:var(--proj)]">
            {project.title}
          </h3>
          <p className="field-label text-ink-faint mt-3">{project.client}</p>
          <div className="mt-3 flex flex-wrap items-center gap-1.5">
            <span className="field-label rounded-full border border-[color:var(--proj)]/40 px-1.5 py-0.5 text-[0.625rem] text-[color:var(--proj)]">
              {project.sector}
            </span>
            <span className="field-label text-[0.625rem] text-ink-faint">{project.year}</span>
          </div>
        </div>

        <div className="sm:col-span-4 flex sm:justify-end">
          <ProjectVisual
            image={project.image}
            alt={project.imageAlt}
            slug={project.slug}
            accent={project.accent}
            vivid={project.vivid}
            sizes="224px"
            markClassName="bottom-2 right-2 h-9 w-9"
            className="h-32 w-56 border hairline"
          />
        </div>
      </div>
    </Link>
  );
}
