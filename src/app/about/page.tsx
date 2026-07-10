import { SplitHeadline } from "@/components/SplitHeadline";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { HeroMark } from "@/components/HeroMark";
import { profile } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Aliza Habib",
  description: profile.bio,
};

const timeline = [
  {
    tag: "Now",
    title: "Senior Product Designer, Ideate Innovation",
    detail: "Leading end-to-end product strategy across fintech and health products.",
  },
  {
    tag: "Now",
    title: "Communications Lead, DAI Pakistan",
    detail: "Engagement strategy for the Climate Finance Accelerator (UK Government / FCDO).",
  },
  {
    tag: "2022–24",
    title: "M.P.S., Interactive Telecommunications Program",
    detail: "New York University, as a Fulbright Scholar — thesis: What She Carried.",
  },
  {
    tag: "Earlier",
    title: "Creative Technologist, Jack Morton",
    detail: "Remote creative-technical role for the global brand-experience agency.",
  },
  {
    tag: "Earlier",
    title: "Product Designer, Productbox",
    detail: "Revamped the company's brand system and led design on two flagship products.",
  },
];

export default function About() {
  const [first, ...rest] = profile.longBio;

  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-20 sm:pt-28 pb-24 sm:pb-32">
      <p className="field-label text-ink-faint mb-6">About</p>

      <SplitHeadline
        text="A designer working where systems, services, and people meet."
        italicFrom={6}
        className="font-display text-[clamp(2rem,6vw,4.5rem)] leading-[1.05] max-w-4xl text-balance-pretty"
      />

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        <div className="lg:col-span-8">
          <Reveal>
            <p className="font-body text-lg sm:text-xl text-ink-soft leading-relaxed">{first}</p>
          </Reveal>

          <Reveal delay={0.1} className="my-12 border-l-2 border-accent pl-6 sm:pl-8">
            <p className="font-display italic text-2xl sm:text-3xl leading-snug text-balance-pretty">
              Designing not just interfaces, but the conditions under which
              people can actually use them.
            </p>
          </Reveal>

          <div className="space-y-6">
            {rest.map((para, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="font-body text-lg sm:text-xl text-ink-soft leading-relaxed">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4">
          <Reveal>
            <div className="mb-10 h-40 opacity-70">
              <HeroMark />
            </div>

            <div className="border-t hairline pt-6">
              <p className="field-label text-ink-faint mb-2">Based in</p>
              <p className="font-body text-ink mb-6">{profile.location}</p>

              <p className="field-label text-ink-faint mb-2">Education</p>
              <p className="font-body text-ink mb-6">{profile.education}</p>

              <p className="field-label text-ink-faint mb-2">Honors</p>
              <p className="font-body text-ink mb-6">Fulbright Scholar</p>

              <p className="field-label text-ink-faint mb-2">Contact</p>
              <a
                href={`mailto:${profile.email}`}
                className="font-body text-ink hover:text-accent transition-colors duration-200 break-all"
              >
                {profile.email}
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mt-24">
        <Reveal>
          <h2 className="field-label text-ink-faint mb-10">Timeline</h2>
        </Reveal>

        <RevealGroup className="space-y-0">
          {timeline.map((entry) => (
            <RevealItem
              key={entry.title}
              className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-8 border-t hairline py-6 items-baseline"
            >
              <span className="sm:col-span-2 field-label text-ink-faint">{entry.tag}</span>
              <span className="sm:col-span-4 font-display text-xl">{entry.title}</span>
              <span className="sm:col-span-6 font-body text-ink-soft">{entry.detail}</span>
            </RevealItem>
          ))}
          <div className="border-t hairline" />
        </RevealGroup>
      </div>
    </div>
  );
}
