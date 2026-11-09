/**
 * Frontier Forge wireframe anvil, from the FFT brand assets
 * (brand/logo/fft-symbol-only.svg), drawn in currentColor so it reads in
 * both themes.
 */
export default function FftMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="16 30 98 74" fill="none" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth={1.5} strokeLinejoin="miter" strokeLinecap="square">
        <path d="M28 44 L48 36 L96 36 L108 44 L100 52 L36 52 Z" />
        <path d="M28 44 L28 50 L36 58 L100 58 L108 50 L108 44" />
        <path d="M36 52 L36 58 M100 52 L100 58" />
        <path d="M28 44 L22 48 L28 50" strokeOpacity={0.75} />
        <path d="M48 58 L52 72 L76 72 L80 58" />
        <path d="M40 72 L40 86 L88 86 L88 72" />
        <path d="M40 86 L36 94 L92 94 L88 86" />
        <path d="M36 94 L36 98 L92 98 L92 94" />
        <path d="M62 36 L62 52" strokeOpacity={0.45} />
        <path d="M52 72 L52 86 M76 72 L76 86" strokeOpacity={0.4} />
        <path d="M40 79 L88 79" strokeOpacity={0.35} />
      </g>
      <g fill="currentColor">
        <circle cx="48" cy="36" r="1.6" />
        <circle cx="96" cy="36" r="1.6" />
        <circle cx="28" cy="44" r="1.6" />
        <circle cx="108" cy="44" r="1.6" />
        <circle cx="52" cy="72" r="1.4" fillOpacity={0.85} />
        <circle cx="76" cy="72" r="1.4" fillOpacity={0.85} />
        <circle cx="40" cy="86" r="1.4" fillOpacity={0.8} />
        <circle cx="88" cy="86" r="1.4" fillOpacity={0.8} />
        <circle cx="64" cy="98" r="1.5" />
      </g>
    </svg>
  );
}
