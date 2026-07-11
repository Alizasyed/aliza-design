"use client";

import { useState, type FormEvent } from "react";
import type { CaseStudy } from "@/lib/data";
import { CaseStudyDetails } from "@/components/CaseStudyDetails";

export function CaseStudyGate({ slug }: { slug: string }) {
  const [project, setProject] = useState<CaseStudy | null>(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  if (project) return <CaseStudyDetails project={project} />;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(`/api/case-study/${slug}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        setError(true);
        return;
      }
      const data = await res.json();
      setProject(data.project);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative overflow-hidden border hairline">
      <div aria-hidden className="pointer-events-none select-none space-y-10 p-8 opacity-40 blur-md sm:p-12">
        <div className="h-4 w-1/4 rounded bg-ink-faint/50" />
        <div className="space-y-3">
          <div className="h-4 w-full rounded bg-ink-faint/40" />
          <div className="h-4 w-5/6 rounded bg-ink-faint/40" />
          <div className="h-4 w-2/3 rounded bg-ink-faint/40" />
        </div>
        <div className="h-48 w-full rounded bg-ink-faint/25" />
        <div className="space-y-3">
          <div className="h-4 w-full rounded bg-ink-faint/40" />
          <div className="h-4 w-3/4 rounded bg-ink-faint/40" />
        </div>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-paper/85 px-6 py-16 text-center">
        <p className="field-label text-ink-faint">Under confidentiality hold</p>
        <p className="max-w-sm font-body text-ink-soft leading-relaxed">
          The rest of this case study is password protected while I confirm sharing terms with
          the client. Get in touch if you&rsquo;d like access.
        </p>
        <form onSubmit={handleSubmit} className="mt-2 flex items-center gap-2">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoComplete="off"
            className="border hairline bg-paper px-3 py-2 font-body text-sm text-ink focus:outline-none focus-visible:border-[color:var(--proj)]"
          />
          <button
            type="submit"
            disabled={loading || !password}
            className="field-label border hairline px-4 py-2 transition-colors duration-200 hover:bg-ink hover:text-paper disabled:opacity-50"
          >
            {loading ? "Checking…" : "Unlock"}
          </button>
        </form>
        {error && (
          <p className="font-body text-sm text-red-600">That password didn&rsquo;t work.</p>
        )}
      </div>
    </div>
  );
}
