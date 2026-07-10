import type { CSSProperties, ReactNode } from "react";
import { CaseMark } from "@/components/CaseMark";

export function ProjectVisual({
  image,
  alt,
  slug,
  accent,
  className,
  markClassName = "bottom-3 right-3 h-10 w-10 sm:bottom-5 sm:right-5 sm:h-16 sm:w-16",
  sizes = "100vw",
  eager = false,
  vivid = false,
  children,
}: {
  image: string;
  alt: string;
  slug: string;
  accent: string;
  className?: string;
  markClassName?: string;
  sizes?: string;
  eager?: boolean;
  vivid?: boolean;
  children?: ReactNode;
}) {
  return (
    <div
      className={`group/vis relative overflow-hidden bg-panel ${className ?? ""}`}
      style={{ "--proj": accent } as CSSProperties}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={alt}
        sizes={sizes}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className={`absolute inset-0 h-full w-full object-cover transition-[transform,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/vis:scale-[1.04] ${
          vivid ? "" : "grayscale group-hover/vis:grayscale-0"
        }`}
      />

      {!vivid && (
        <>
          {/* signature-colour duotone wash: lifts on hover to reveal the full-colour photo */}
          <div className="absolute inset-0 bg-[color:var(--proj)] opacity-60 mix-blend-multiply transition-opacity duration-500 group-hover/vis:opacity-0" />
          {/* subtle lift so shadows don't crush to black under the wash */}
          <div className="absolute inset-0 bg-paper/10 mix-blend-overlay transition-opacity duration-500 group-hover/vis:opacity-0" />
        </>
      )}
      {/* legibility floor for the overlaid mark / labels */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />

      {/* the project's brand mark, stamped over the photo */}
      <CaseMark
        slug={slug}
        className={`pointer-events-none absolute text-paper drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)] ${markClassName}`}
      />

      {children}
    </div>
  );
}
