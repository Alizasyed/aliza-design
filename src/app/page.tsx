import { HeroName } from "@/components/HeroName";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { TrustedBy } from "@/components/TrustedBy";
import { Testimonials } from "@/components/Testimonials";
import { caseStudies, services, profile } from "@/lib/data";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative -mt-16 flex min-h-screen w-full flex-col justify-between overflow-hidden bg-ink px-5 pb-8 pt-28 text-paper sm:px-8 sm:pb-10 lg:px-12">
        {/* single moody gradient glow */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute right-[6%] top-[8%] h-[70%] w-[60%] rounded-full bg-[#4b2e6b] opacity-[0.38] blur-[150px]" />
          <div className="absolute right-[24%] top-[26%] h-[45%] w-[40%] rounded-full bg-[#8a3357] opacity-[0.28] blur-[130px]" />
          <div className="absolute -bottom-[12%] left-[2%] h-[55%] w-[45%] rounded-full bg-[#241640] opacity-[0.45] blur-[150px]" />
        </div>

        {/* top: one-line positioning */}
        <Reveal className="relative max-w-2xl">
          <p className="font-display text-2xl sm:text-3xl lg:text-4xl leading-snug text-paper text-balance-pretty">
            {profile.title}
          </p>
          <p className="mt-5 max-w-lg font-body text-lg sm:text-xl text-paper/80 leading-relaxed">
            Shaping systems, services, and{" "}
            <span className="italic text-paper">speculative futures</span>, for the people
            existing systems tend to leave out.
          </p>
        </Reveal>

        {/* bottom: monumental name + link bar */}
        <div className="relative">
          <HeroName className="font-display text-[clamp(3.75rem,15vw,12rem)] leading-[0.86] text-paper" />

          <Reveal delay={0.9}>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-t border-white/15 pt-6">
              <p className="field-label text-paper/50">
                {profile.location}
                {" "}&middot; Available for select work
              </p>
              <div className="flex items-center gap-6">
                <a
                  href={profile.behance}
                  target="_blank"
                  rel="noreferrer"
                  className="field-label text-paper/60 transition-colors duration-200 hover:text-paper"
                >
                  Behance
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="field-label text-paper/60 transition-colors duration-200 hover:text-paper"
                >
                  LinkedIn
                </a>
                <Link
                  href="#work"
                  className="field-label text-paper transition-colors duration-200 hover:text-paper/70"
                >
                  Selected work &darr;
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-5 sm:px-8 pt-12 sm:pt-16 pb-20 sm:pb-28 scroll-mt-16">
        <Reveal>
          <div className="flex items-baseline justify-between gap-4 mb-2">
            <h2 className="field-label text-ink-faint">Selected Work</h2>
            <span className="field-label text-ink-faint">
              {String(caseStudies.length).padStart(2, "0")} projects
            </span>
          </div>
        </Reveal>

        <div>
          {caseStudies.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
          <div className="border-t hairline" />
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink text-paper">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-[10%] top-[-20%] h-[75%] w-[55%] rounded-full bg-[#241640] opacity-[0.55] blur-[140px]" />
          <div className="absolute right-[4%] bottom-[-25%] h-[65%] w-[45%] rounded-full bg-[#6a3f8f] opacity-[0.3] blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 sm:px-8 py-24 sm:py-32">
          <span
            aria-hidden
            className="ghost-numeral pointer-events-none absolute -top-6 right-0 sm:right-4 text-[clamp(6rem,18vw,13rem)] text-paper opacity-[0.06]"
          >
            03
          </span>

          <div className="relative max-w-2xl">
            <Reveal>
              <h2 className="field-label text-paper/50 mb-6">Philosophy</h2>
              <p className="font-display text-2xl sm:text-3xl leading-snug text-balance-pretty">
                Design that treats comprehension, trust, and access as constraints,
                not features to add later.
              </p>
            </Reveal>

            <Reveal delay={0.15} className="mt-10">
              <Link
                href="/about"
                className="group inline-flex items-baseline gap-3 font-body text-xl sm:text-2xl border-b border-paper/40 pb-1 text-paper hover:text-paper/70 hover:border-paper/70 transition-colors duration-200"
              >
                More about Aliza
                <span
                  aria-hidden
                  className="font-mono text-sm transition-transform duration-200 group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-panel border-t border-b hairline">
        <div className="dot-grid absolute inset-0" aria-hidden />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-8 py-24 sm:py-32">
          <span
            aria-hidden
            className="ghost-numeral pointer-events-none absolute -top-10 left-0 sm:left-4 text-[clamp(5rem,15vw,11rem)] text-ink opacity-[0.05]"
          >
            04
          </span>

          <div className="relative">
            <Reveal>
              <h2 className="field-label text-ink-faint mb-10">What Aliza Does</h2>
            </Reveal>

            <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {services.map((service, i) => (
                <RevealItem key={service.tag} className="border-t-2 border-ink pt-6">
                  <span className="field-label text-ink-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl sm:text-[1.75rem] leading-tight mt-3 mb-5 text-balance-pretty">
                    {service.tag}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.items.map((item) => (
                      <span
                        key={item}
                        className="field-label rounded-full border border-line px-3 py-1.5 text-ink-soft"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      <div className="border-t hairline">
        <Testimonials />
      </div>

      <TrustedBy />
    </>
  );
}
