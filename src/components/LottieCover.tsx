"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import lottie, { type AnimationItem } from "lottie-web";
import { CaseMark } from "@/components/CaseMark";

export function LottieCover({
  src,
  slug,
  className,
  markClassName,
  children,
}: {
  src: string;
  slug: string;
  className?: string;
  markClassName?: string;
  children?: ReactNode;
}) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let anim: AnimationItem | undefined;

    fetch(src)
      .then((res) => res.json())
      .then((animationData) => {
        if (!container.current) return;
        anim = lottie.loadAnimation({
          container: container.current,
          renderer: "svg",
          loop: !reduceMotion,
          autoplay: !reduceMotion,
          animationData,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        });
        if (reduceMotion) anim.goToAndStop(0, true);
      });

    return () => anim?.destroy();
  }, [src]);

  return (
    <div className={`relative overflow-hidden bg-panel ${className ?? ""}`}>
      <div ref={container} className="absolute inset-0 h-full w-full [&_svg]:h-full [&_svg]:w-full" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
      <CaseMark
        slug={slug}
        className={`pointer-events-none absolute text-paper drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)] ${markClassName ?? "bottom-3 right-3 h-10 w-10 sm:bottom-5 sm:right-5 sm:h-16 sm:w-16"}`}
      />
      {children}
    </div>
  );
}
