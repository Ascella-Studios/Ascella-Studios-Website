import Image from 'next/image';

/** The Ascella "A" mark beside the wordmark. */
export default function Logo({ size = 28, className = '' }: { size?: number; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image src="/brand/ascella-mark.png" alt="" width={size} height={size} priority style={{ width: size, height: size }} />
      <span className="text-lg sm:text-xl font-semibold tracking-tight text-foreground">Ascella Studios</span>
    </span>
  );
}
