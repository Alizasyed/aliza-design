import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { testimonials } from "@/lib/data";

function QuoteText({ quote, highlight }: { quote: string; highlight?: string }) {
  if (!highlight || !quote.includes(highlight)) return <>{quote}</>;
  const [before, after] = quote.split(highlight);
  return (
    <>
      {before}
      <strong className="font-semibold text-paper">{highlight}</strong>
      {after}
    </>
  );
}

function Initials({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return <>{initials}</>;
}

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[6%] top-[-15%] h-[70%] w-[45%] rounded-full bg-[#2f5ef2] opacity-[0.22] blur-[130px]" />
        <div className="absolute right-[8%] bottom-[-20%] h-[60%] w-[40%] rounded-full bg-[#cf3d73] opacity-[0.18] blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
        <Reveal>
          <div className="mb-10 flex items-baseline justify-between gap-4">
            <h2 className="field-label text-paper/50">What people say</h2>
            <span className="field-label text-paper/40 hidden sm:block">References</span>
          </div>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {testimonials.map((t) => {
            const cardClassName =
              "group/testimonial relative block h-full border border-white/10 bg-white/[0.03] p-6 sm:p-7 transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.05]";
            const cardContent = (
              <>
                {t.linkedin && (
                  <span className="field-label absolute right-6 top-6 text-paper/0 transition-colors duration-300 group-hover/testimonial:text-paper/50 sm:right-7 sm:top-7">
                    View on LinkedIn &#8599;
                  </span>
                )}

                <blockquote className="font-body text-lg text-paper/90 leading-relaxed line-clamp-5 pr-0 sm:pr-16">
                  &ldquo;<QuoteText quote={t.quote} highlight={t.highlight} />&rdquo;
                </blockquote>

                <div className="mt-6 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full font-mono text-xs text-paper"
                    style={{ background: t.accent }}
                  >
                    {t.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={t.image}
                        alt={t.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <Initials name={t.name} />
                    )}
                  </div>
                  <p className="flex flex-col">
                    <span className="font-body text-paper">{t.name}</span>
                    <span className="font-body text-sm text-paper/65">
                      {t.role}
                      {t.company ? ` · ${t.company}` : ""}
                    </span>
                  </p>
                </div>
              </>
            );

            return (
              <RevealItem key={t.name}>
                {t.linkedin ? (
                  <a
                    href={t.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className={cardClassName}
                  >
                    {cardContent}
                  </a>
                ) : (
                  <div className={cardClassName}>{cardContent}</div>
                )}
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
