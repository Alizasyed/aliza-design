import { profile } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t hairline">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
        <Reveal>
          <p className="field-label text-ink-faint mb-6">Get in touch</p>
          <h2 className="font-display text-[clamp(2rem,6vw,4rem)] leading-[1.05] max-w-3xl text-balance-pretty">
            Working on something that needs a systems view? Let&rsquo;s talk.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            href={`mailto:${profile.email}`}
            className="group mt-10 inline-flex items-baseline gap-3 font-body text-xl sm:text-2xl border-b border-ink pb-1 hover:text-accent hover:border-accent transition-colors duration-200"
          >
            {profile.email}
            <span
              aria-hidden
              className="font-mono text-sm transition-transform duration-200 group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </a>
        </Reveal>

        <div className="mt-20 flex flex-col sm:flex-row sm:items-end justify-between gap-8">
          <div className="flex gap-8">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="field-label text-ink-soft hover:text-ink transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href={profile.behance}
              target="_blank"
              rel="noreferrer"
              className="field-label text-ink-soft hover:text-ink transition-colors duration-200"
            >
              Behance
            </a>
          </div>
          <p className="field-label text-ink-faint">
            {profile.location} &middot; &copy; {year}
          </p>
        </div>
      </div>
    </footer>
  );
}
