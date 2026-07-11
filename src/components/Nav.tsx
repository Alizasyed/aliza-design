"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE_SIGNATURE } from "@/lib/motion";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight - 140);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Over the dark home hero, the bar is transparent with light text.
  const overHero = pathname === "/" && !scrolled && !open;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        overHero ? "bg-transparent" : "border-b hairline bg-paper/90 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12 h-16 lg:h-20 flex items-center justify-between">
        <Link
          href="/"
          className={`font-mono uppercase tracking-[0.1em] text-sm lg:text-base transition-colors duration-200 ${
            overHero ? "text-paper hover:text-paper/70" : "text-ink hover:text-accent"
          }`}
        >
          Aliza Habib
        </Link>

        <nav className="hidden sm:flex items-center gap-8 lg:gap-12">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`group/navlink font-mono uppercase tracking-[0.14em] text-sm lg:text-base relative transition-colors duration-200 ${
                overHero ? "text-paper/70 hover:text-paper" : "text-ink-soft hover:text-ink"
              }`}
            >
              {l.label}
              <span
                className={`pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/navlink:scale-x-100 ${
                  overHero ? "bg-paper" : "bg-ink"
                }`}
              />
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="sm:hidden field-label flex h-11 w-11 items-center justify-center"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-5 transition-transform duration-300 ${
                overHero ? "bg-paper" : "bg-ink"
              } ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 bottom-0 h-px w-5 transition-transform duration-300 ${
                overHero ? "bg-paper" : "bg-ink"
              } ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE_SIGNATURE }}
            className="sm:hidden overflow-hidden border-b hairline bg-paper"
          >
            <div className="flex flex-col px-5 py-4 gap-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="field-label py-3 text-ink-soft hover:text-ink transition-colors duration-200"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
