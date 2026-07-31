"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { CaseMark } from "@/components/CaseMark";

export function VideoCover({
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
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.preload = "auto";
          if (!reduceMotion) video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`relative overflow-hidden bg-panel ${className ?? ""}`}>
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
      <CaseMark
        slug={slug}
        className={`pointer-events-none absolute text-paper drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)] ${markClassName ?? "bottom-3 right-3 h-10 w-10 sm:bottom-5 sm:right-5 sm:h-16 sm:w-16"}`}
      />
      {children}
    </div>
  );
}
