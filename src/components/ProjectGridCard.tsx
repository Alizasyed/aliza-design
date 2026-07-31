"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import type { CaseStudy } from "@/lib/data";
import { ProjectVisual } from "@/components/ProjectVisual";
import { LottieCover } from "@/components/LottieCover";
import { VideoCover } from "@/components/VideoCover";

export function ProjectGridCard({ project }: { project: CaseStudy }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      style={{ "--proj": project.accent } as CSSProperties}
      className="group block focus-visible:outline-none"
    >
      {project.coverVideo ? (
        <VideoCover
          src={project.coverVideo}
          slug={project.slug}
          markClassName="bottom-3 right-3 h-8 w-8 sm:bottom-4 sm:right-4 sm:h-10 sm:w-10"
          className="aspect-[3/2] border hairline"
        />
      ) : project.coverAnimation ? (
        <LottieCover
          src={project.coverAnimation}
          slug={project.slug}
          markClassName="bottom-3 right-3 h-8 w-8 sm:bottom-4 sm:right-4 sm:h-10 sm:w-10"
          className="aspect-[3/2] border hairline"
        />
      ) : (
        <ProjectVisual
          image={project.image}
          alt={project.imageAlt}
          slug={project.slug}
          accent={project.accent}
          vivid={project.vivid}
          sizes="(min-width: 640px) 50vw, 100vw"
          markClassName="bottom-3 right-3 h-8 w-8 sm:bottom-4 sm:right-4 sm:h-10 sm:w-10"
          className="aspect-[3/2] border hairline"
        />
      )}

      <div className="mt-5 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <span className="field-label text-ink-faint">{project.index}</span>
          <h3 className="font-display text-2xl leading-tight mt-1.5 text-balance-pretty transition-colors duration-200 group-hover:text-[color:var(--proj)]">
            {project.title}
          </h3>
          <p className="field-label text-ink-faint mt-2.5">{project.client}</p>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <span className="field-label rounded-full border border-[color:var(--proj)]/40 px-2 py-0.5 text-[color:var(--proj)]">
          {project.sector}
        </span>
        <span className="field-label text-ink-faint">{project.year}</span>
      </div>
    </Link>
  );
}
