/**
 * FoldDivider — the site's signature element.
 * A soft, undulating contour lifted from the "sleep cloud" curve in the
 * MattressWala mark. It recurs at full width between sections, and at
 * smaller scale as heading underlines and the journey timeline's spine.
 */
export default function FoldDivider({ from = 'var(--linen)', to = 'var(--cloud)', flip = false, id }) {
  const gradId = `fold-${id || Math.random().toString(36).slice(2, 8)}`
  return (
    <div className="fold-divider" style={{ transform: flip ? 'scaleY(-1)' : 'none' }} aria-hidden="true">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" width="100%" height="90">
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--teal)" />
            <stop offset="100%" stopColor="var(--blue)" />
          </linearGradient>
        </defs>
        <path d="M0,64 C240,110 360,10 600,40 C840,70 960,10 1200,48 C1320,66 1380,70 1440,58 L1440,0 L0,0 Z" fill={from} />
        <path
          d="M0,64 C240,110 360,10 600,40 C840,70 960,10 1200,48 C1320,66 1380,70 1440,58"
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path d="M0,120 L0,64 C240,110 360,10 600,40 C840,70 960,10 1200,48 C1320,66 1380,70 1440,58 L1440,120 Z" fill={to} />
      </svg>
    </div>
  )
}
