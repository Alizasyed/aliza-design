import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12 py-32 sm:py-40">
      <p className="field-label text-ink-faint mb-6">404</p>
      <h1 className="font-display text-4xl sm:text-6xl leading-tight text-balance-pretty">
        Page not found.
      </h1>
      <p className="mt-5 max-w-lg font-body text-lg text-ink-soft leading-relaxed">
        That page doesn&rsquo;t exist, or it&rsquo;s moved.
      </p>
      <Link
        href="/"
        className="field-label mt-10 inline-block border-b border-ink pb-1 hover:text-accent hover:border-accent transition-colors duration-200"
      >
        Back to home &rarr;
      </Link>
    </div>
  );
}
