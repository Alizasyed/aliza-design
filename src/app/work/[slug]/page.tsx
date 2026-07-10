import { notFound } from "next/navigation";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { caseStudies } from "@/lib/data";
import { ProjectVisual } from "@/components/ProjectVisual";
import { Reveal } from "@/components/Reveal";
import { SplitHeadline } from "@/components/SplitHeadline";
import { ScrollProgress } from "@/components/ScrollProgress";

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
    title: `${project.title} — Aliza Habib`,
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

            <Reveal>
              <p className="field-label text-ink-faint mb-4">The Problem</p>
              <p className="font-body text-lg text-ink-soft leading-relaxed">
                {project.problem}
              </p>
            </Reveal>

            {project.pullQuote && (
              <Reveal className="border-l-2 border-[color:var(--proj)] pl-6 sm:pl-8">
                <p className="font-display italic text-2xl sm:text-3xl leading-snug text-balance-pretty">
                  {project.pullQuote}
                </p>
                {project.pullQuoteAttribution && (
                  <p className="field-label text-ink-faint mt-4">
                    {project.pullQuoteAttribution}
                  </p>
                )}
              </Reveal>
            )}

            <Reveal>
              <p className="field-label text-ink-faint mb-4">Approach</p>
              <ol className="space-y-6">
                {project.approach.map((step, i) => (
                  <li key={i} className="flex gap-5">
                    <span className="field-label text-ink-faint shrink-0 pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="font-body text-lg text-ink-soft leading-relaxed">{step}</p>
                  </li>
                ))}
              </ol>
            </Reveal>

            {project.sections?.map((section) =>
              section.media?.sideBySide ? (
                <Reveal key={section.heading}>
                  <div className="section-split grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    <div>
                      <p className="field-label text-ink-faint mb-4">{section.heading}</p>
                      {section.body && (
                        <p className="font-body text-lg text-ink-soft leading-relaxed">
                          {section.body}
                        </p>
                      )}
                      {section.items && (
                        <ul className="mt-5 space-y-3">
                          {section.items.map((item, i) => (
                            <li key={i} className="flex gap-4">
                              <span
                                aria-hidden
                                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--proj)]"
                              />
                              <p className="font-body text-lg text-ink-soft leading-relaxed">
                                {item}
                              </p>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <figure>
                      <div className="overflow-hidden border hairline bg-panel">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={section.media.images[0].src}
                          alt={section.media.images[0].alt}
                          width={section.media.images[0].w}
                          height={section.media.images[0].h}
                          loading="lazy"
                          decoding="async"
                          className="h-auto w-full"
                        />
                      </div>
                      {section.media.caption && (
                        <figcaption className="mt-3 font-body text-sm text-ink-faint leading-relaxed">
                          {section.media.caption}
                        </figcaption>
                      )}
                    </figure>
                  </div>
                </Reveal>
              ) : (
              <Reveal key={section.heading}>
                <p className="field-label text-ink-faint mb-4">{section.heading}</p>
                {section.body && (
                  <p className="font-body text-lg text-ink-soft leading-relaxed">
                    {section.body}
                  </p>
                )}
                {section.items && (
                  <ul className="mt-5 space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex gap-4">
                        <span
                          aria-hidden
                          className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--proj)]"
                        />
                        <p className="font-body text-lg text-ink-soft leading-relaxed">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}

                {section.personas && (
                  <div className="persona-grid mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
                    {section.personas.map((p) => (
                      <div key={p.name} className="flex flex-col">
                        <div
                          className="overflow-hidden border hairline bg-panel"
                          style={{ aspectRatio: "4 / 5" }}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={p.image}
                            alt={p.imageAlt}
                            width={p.w}
                            height={p.h}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover"
                          />
                        </div>

                        <p className="font-display text-xl italic mt-5">{p.name}</p>
                        {p.subtitle && (
                          <p className="font-body text-ink-soft mt-1">{p.subtitle}</p>
                        )}

                        <blockquote className="border-l-2 border-[color:var(--proj)] pl-4 mt-4">
                          <p className="font-body text-base italic text-ink-soft leading-relaxed">
                            “{p.quote}”
                          </p>
                        </blockquote>

                        <div className="mt-5">
                          <p className="field-label text-ink-faint mb-2">Pains</p>
                          <ul className="space-y-1.5">
                            {p.pains.map((pain, i) => (
                              <li key={i} className="flex gap-2.5">
                                <span
                                  aria-hidden
                                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-faint"
                                />
                                <p className="font-body text-sm text-ink-soft leading-relaxed">
                                  {pain}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-4">
                          <p className="field-label text-ink-faint mb-2">Gains</p>
                          <ul className="space-y-1.5">
                            {p.gains.map((gain, i) => (
                              <li key={i} className="flex gap-2.5">
                                <span
                                  aria-hidden
                                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color:var(--proj)]"
                                />
                                <p className="font-body text-sm text-ink-soft leading-relaxed">
                                  {gain}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {section.media && (
                  <figure className="mt-8">
                    <div
                      className={
                        section.media.images.length === 3
                          ? "media-wide grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
                          : section.media.images.length >= 4
                            ? "media-wide grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
                            : section.media.images.length > 1
                              ? "grid grid-cols-2 gap-4 sm:gap-6"
                              : section.media.images[0].full
                                ? "media-full"
                                : section.media.images[0].h > section.media.images[0].w
                                  ? "max-w-[300px]"
                                  : ""
                      }
                    >
                      {(() => {
                        // When a row holds more than one image, lock every
                        // image in it to a shared ratio so mismatched source
                        // images still line up into an even row. Designed
                        // graphics (contain: true) fit uncropped instead,
                        // since cropping would cut off text/content.
                        const multi = section.media!.images.length > 1;
                        const contain = section.media!.contain;
                        const ratio = section.media!.images[0];
                        return section.media!.images.map((img) => (
                        <div key={img.src}>
                          {img.label && (
                            <p className="field-label mb-3 flex items-center gap-2 text-ink-faint">
                              <span
                                aria-hidden
                                className="h-1.5 w-1.5 rounded-full bg-[color:var(--proj)]"
                              />
                              {img.label}
                            </p>
                          )}
                          <div
                            className="overflow-hidden border hairline bg-panel"
                            style={
                              multi
                                ? { aspectRatio: contain ? "1 / 1" : `${ratio.w} / ${ratio.h}` }
                                : undefined
                            }
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={img.src}
                              alt={img.alt}
                              width={img.w}
                              height={img.h}
                              loading="lazy"
                              decoding="async"
                              className={
                                !multi
                                  ? "h-auto w-full"
                                  : contain
                                    ? "h-full w-full object-contain"
                                    : "h-full w-full object-cover"
                              }
                            />
                          </div>
                        </div>
                        ));
                      })()}
                    </div>
                    {section.media.caption && (
                      <figcaption className="mt-3 font-body text-sm text-ink-faint leading-relaxed">
                        {section.media.caption}
                      </figcaption>
                    )}
                  </figure>
                )}
              </Reveal>
              )
            )}

            <Reveal>
              <p className="field-label text-ink-faint mb-4">Outcome</p>
              <p className="font-body text-lg text-ink-soft leading-relaxed">
                {project.outcome}
              </p>
            </Reveal>

            {project.metrics && (
              <Reveal>
                <div className="grid grid-cols-3 gap-6 border-t hairline pt-8">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="font-display text-3xl sm:text-4xl text-[color:var(--proj)]">
                        {metric.value}
                      </p>
                      <p className="field-label text-ink-faint mt-2">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
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
