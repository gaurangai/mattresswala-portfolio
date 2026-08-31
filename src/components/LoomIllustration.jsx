/**
 * An original line-illustration representing the loom / machine-knit
 * process — used in place of a factory photograph, since none was
 * supplied among the uploaded assets. Kept abstract and clearly
 * illustrative rather than a fabricated "photo" of a facility.
 */
export default function LoomIllustration() {
  return (
    <svg viewBox="0 0 520 420" className="loom-illustration" role="img" aria-label="Illustration of thread spools feeding into a weaving loom">
      <defs>
        <linearGradient id="loomGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--teal)" />
          <stop offset="100%" stopColor="var(--blue)" />
        </linearGradient>
      </defs>

      {/* frame */}
      <rect x="40" y="60" width="440" height="300" rx="14" fill="none" stroke="var(--ink)" strokeOpacity="0.15" strokeWidth="2" />

      {/* spools */}
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i} transform={`translate(${75 + i * 82}, 90)`}>
          <circle r="22" fill="none" stroke="url(#loomGrad)" strokeWidth="3" className="loom-spool" style={{ animationDelay: `${i * 0.3}s` }} />
          <circle r="6" fill="var(--rust)" />
        </g>
      ))}

      {/* threads flowing down into weave */}
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d={`M${75 + i * 82},112 C ${75 + i * 82},200 ${100 + i * 70},240 260,280`}
          fill="none"
          stroke="var(--teal-deep)"
          strokeOpacity="0.35"
          strokeWidth="1.5"
        />
      ))}

      {/* woven fabric grid */}
      <g transform="translate(80,290)" className="loom-weave">
        {Array.from({ length: 7 }).map((_, r) => (
          <line key={`h${r}`} x1="0" y1={r * 10} x2="360" y2={r * 10} stroke="var(--ink)" strokeOpacity="0.18" strokeWidth="2" />
        ))}
        {Array.from({ length: 19 }).map((_, c) => (
          <line key={`v${c}`} x1={c * 20} y1="0" x2={c * 20} y2="60" stroke="url(#loomGrad)" strokeOpacity="0.5" strokeWidth="2" />
        ))}
      </g>
    </svg>
  )
}
