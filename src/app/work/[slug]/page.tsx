import { notFound } from "next/navigation";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { caseStudies } from "@/lib/data";
import { ProjectVisual } from "@/components/ProjectVisual";
import { Reveal } from "@/components/Reveal";
import { SplitHeadline } from "@/components/SplitHeadline";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CaseStudyDetails } from "@/components/CaseStudyDetails";
import { CaseStudyGate } from "@/components/CaseStudyGate";

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudies.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} · Aliza Habib`,
    description: project.tagline,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = caseStudies.find((p) => p.slug === slug);
  if (!project) notFound();

  const index = caseStudies.findIndex((p) => p.slug === slug);
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <article style={{ "--proj": project.accent } as CSSProperties}>
      <ScrollProgress />

      <header className="mx-auto max-w-6xl px-5 sm:px-8 pt-20 sm:pt-28 pb-14 sm:pb-20">
        <Link
          href="/#work"
          className="field-label text-ink-faint hover:text-ink transition-colors duration-200"
        >
          &larr; Selected Work
        </Link>

        <p className="field-label mt-8 mb-6 flex items-center gap-2.5 text-ink-faint">
          <span
            aria-hidden
            className="inline-block h-2 w-2 rounded-full bg-[color:var(--proj)]"
          />
          {project.index} &middot; {project.client}
        </p>

        <SplitHeadline
          as="h1"
          text={project.title}
          className="font-display text-[clamp(2rem,6vw,4.5rem)] leading-[1.05] max-w-4xl text-balance-pretty"
        />

        <Reveal delay={0.4} className="mt-6 max-w-2xl">
          <p className="font-body text-xl text-ink-soft leading-relaxed">{project.tagline}</p>
        </Reveal>

        <Reveal delay={0.5}>
          <dl className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t hairline pt-6">
            {[
              { label: "Sector", value: project.sector },
              { label: "Role", value: project.role },
              { label: "Type", value: project.type },
              { label: "Year", value: project.year },
              ...(project.tools ? [{ label: "Tools", value: project.tools }] : []),
            ].map((m) => (
              <div key={m.label}>
                <dt className="field-label text-ink-faint mb-2">{m.label}</dt>
                <dd className="font-body text-ink">{m.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {project.confidentialityNote && (
          <Reveal delay={0.55}>
            <p className="mt-6 max-w-2xl font-body text-sm italic text-ink-faint leading-relaxed">
              {project.confidentialityNote}
            </p>
          </Reveal>
        )}
      </header>

      <Reveal>
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <ProjectVisual
            image={project.image}
            alt={project.imageAlt}
            slug={project.slug}
            accent={project.accent}
            vivid={project.vivid}
            eager
            sizes="(min-width: 1152px) 1088px, 100vw"
            markClassName="top-5 right-5 h-16 w-16 sm:top-7 sm:right-7 sm:h-24 sm:w-24"
            className="relative aspect-[16/9] sm:aspect-[16/7] border hairline"
          >
            <span className="field-label absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10 bg-paper/85 px-2 py-1 text-ink-faint">
              Fig. {project.index} &middot; {project.sector}
            </span>
          </ProjectVisual>
        </div>
      </Reveal>

      <div className="mx-auto max-w-3xl px-5 sm:px-8 py-20 sm:py-28 space-y-16 [&:has(.persona-grid)]:max-w-4xl [&:has(.media-full)]:max-w-5xl [&:has(.media-wide)]:max-w-5xl [&:has(.section-split)]:max-w-5xl">
        {project.nda ? (
          <Reveal>
            <p className="field-label text-ink-faint mb-4">Note</p>
            <p className="font-body text-lg text-ink-soft leading-relaxed">{project.summary}</p>
          </Reveal>
        ) : (
          <>
            <Reveal>
              <p className="field-label text-ink-faint mb-4">Overview</p>
              <p className="font-body text-lg sm:text-xl text-ink-soft leading-relaxed">
                {project.summary}
              </p>
            </Reveal>

            {project.locked ? (
              <CaseStudyGate slug={project.slug} />
            ) : (
              <CaseStudyDetails project={project} />
            )}
          </>
        )}
      </div>

      <div className="border-t hairline">
        <Link
          href={`/work/${next.slug}`}
          style={{ "--proj": next.accent } as CSSProperties}
          className="group mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 sm:px-8 py-14 sm:py-20"
        >
          <div className="flex items-center gap-6 sm:gap-8 min-w-0">
            <ProjectVisual
              image={next.image}
              alt={next.imageAlt}
              slug={next.slug}
              accent={next.accent}
              vivid={next.vivid}
              sizes="96px"
              markClassName="bottom-1.5 right-1.5 h-6 w-6"
              className="hidden sm:block h-16 w-24 shrink-0 border hairline"
            />
            <div className="min-w-0">
              <p className="field-label text-ink-faint mb-4">Next Project</p>
              <p className="font-display text-2xl sm:text-4xl transition-colors duration-200 text-balance-pretty group-hover:text-[color:var(--proj)]">
                {next.title}
              </p>
            </div>
          </div>
          <span
            aria-hidden
            className="font-mono text-2xl shrink-0 ml-6 transition-transform duration-200 group-hover:translate-x-2"
          >
            &rarr;
          </span>
        </Link>
      </div>
    </article>
  );
}
