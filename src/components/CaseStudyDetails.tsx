import type { CSSProperties } from "react";
import type { CaseStudy } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function CaseStudyDetails({ project }: { project: CaseStudy }) {
  return (
    <div style={{ "--proj": project.accent } as CSSProperties} className="space-y-16">
      <Reveal>
        <p className="field-label text-ink-faint mb-4">The Problem</p>
        <p className="font-body text-lg text-ink-soft leading-relaxed">{project.problem}</p>
      </Reveal>

      {project.pullQuote && (
        <Reveal className="border-l-2 border-[color:var(--proj)] pl-6 sm:pl-8">
          <p className="font-display italic text-2xl sm:text-3xl leading-snug text-balance-pretty">
            {project.pullQuote}
          </p>
          {project.pullQuoteAttribution && (
            <p className="field-label text-ink-faint mt-4">{project.pullQuoteAttribution}</p>
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
                {section.callouts ? (
                  <ol className="mt-6 space-y-5">
                    {section.callouts.map((c, i) => (
                      <li key={i} className="flex gap-4">
                        <span
                          aria-hidden
                          className="field-label mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--proj)] text-paper"
                        >
                          {i + 1}
                        </span>
                        <div>
                          <p className="font-body text-lg text-ink-soft leading-relaxed">
                            {c.text}
                          </p>
                          <span className="field-label mt-2 inline-block rounded-full border border-[color:var(--proj)]/40 px-2.5 py-1 text-[color:var(--proj)]">
                            {c.tag}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ol>
                ) : (
                  section.items && (
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
                  )
                )}
              </div>
              <figure>
                <div className="relative overflow-hidden border hairline bg-panel">
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
                  {section.callouts?.map((c, i) => (
                    <span
                      key={i}
                      aria-hidden
                      className="field-label absolute flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[color:var(--proj)] text-paper shadow-[0_1px_6px_rgba(0,0,0,0.35)] ring-2 ring-paper"
                      style={{ left: `${c.x}%`, top: `${c.y}%` }}
                    >
                      {i + 1}
                    </span>
                  ))}
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
              <p className="font-body text-lg text-ink-soft leading-relaxed">{section.body}</p>
            )}
            {section.items && (
              <ul className="mt-5 space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span
                      aria-hidden
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--proj)]"
                    />
                    <p className="font-body text-lg text-ink-soft leading-relaxed">{item}</p>
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
        <p className="font-body text-lg text-ink-soft leading-relaxed">{project.outcome}</p>
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
    </div>
  );
}
