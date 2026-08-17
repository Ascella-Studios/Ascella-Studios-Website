interface AuroraBackgroundProps {
  variant?: 'hero' | 'subtle';
}

export default function AuroraBackground({ variant = 'hero' }: AuroraBackgroundProps) {
  return (
    <div
      aria-hidden
      className={`aurora pointer-events-none absolute inset-0 overflow-hidden ${
        variant === 'subtle' ? 'aurora-subtle' : ''
      }`}
    >
      <div className="aurora-blob aurora-1" />
      <div className="aurora-blob aurora-2" />
      <div className="aurora-blob aurora-3" />
      <div className="aurora-grain" />
    </div>
  );
}
