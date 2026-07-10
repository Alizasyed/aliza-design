// Bold, single-colour brand marks per project — meant to sit as an overlay on
// top of a real photo. Linework uses currentColor (set by the parent, usually
// paper); the focal node is a fixed accent "pulse" that carries the colour.

function AccentNode({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g className="[fill:var(--proj,#2f5ef2)]">
      <circle cx={cx} cy={cy} r="10" opacity="0.28" />
      <circle cx={cx} cy={cy} r="6" />
    </g>
  );
}

const marks: Record<string, React.ReactNode> = {
  mmbl: (
    <g>
      <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="50" cy="50" r="17" fill="none" stroke="currentColor" strokeWidth="3" />
      <AccentNode cx={50} cy={50} />
    </g>
  ),
  healthops: (
    <g>
      <path
        d="M12 50 H30 L38 28 L50 70 L58 50 H88"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <AccentNode cx={50} cy={70} />
    </g>
  ),
  "climate-finance-accelerator": (
    <g>
      <path
        d="M14 76 C 36 74, 44 40, 60 40 S 80 24, 88 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <AccentNode cx={88} cy={18} />
    </g>
  ),
  "what-she-carried": (
    <g>
      <path
        d="M18 34 L42 60 L62 28 L84 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx="18" cy="34" r="4.5" fill="currentColor" />
      <circle cx="42" cy="60" r="4.5" fill="currentColor" />
      <circle cx="62" cy="28" r="4.5" fill="currentColor" />
      <AccentNode cx={84} cy={64} />
    </g>
  ),
  "maternal-health-research": (
    <g>
      <path d="M50 20 L76 66 L24 66 Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <circle cx="50" cy="20" r="4.5" fill="currentColor" />
      <circle cx="24" cy="66" r="4.5" fill="currentColor" />
      <AccentNode cx={76} cy={66} />
    </g>
  ),
};

export function CaseMark({ slug, className }: { slug: string; className?: string }) {
  const draw = marks[slug] ?? marks.mmbl;
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      {draw}
    </svg>
  );
}
