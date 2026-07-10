import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { testimonials } from "@/lib/data";

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
          {testimonials.map((t) => (
            <RevealItem
              key={t.name}
              className="border border-white/10 bg-white/[0.03] p-6 sm:p-7"
            >
              <span
                aria-hidden
                className="mb-4 block h-2 w-2 rounded-full"
                style={{ background: t.accent }}
              />
              <blockquote className="font-body text-base text-paper/80 leading-relaxed line-clamp-4">
                {t.quote}
              </blockquote>
              <p className="mt-5 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="field-label text-paper">{t.name}</span>
                <span className="field-label text-paper/45">
                  {t.role}
                  {t.company ? ` · ${t.company}` : ""}
                </span>
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
