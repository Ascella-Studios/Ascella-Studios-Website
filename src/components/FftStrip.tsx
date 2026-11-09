import Image from 'next/image';
import Container from '@/components/Container';
import { Icon } from '@/components/icons';
import { FFT_URL } from '@/data/solutions';

/** "Part of Frontier Forge Technologies" band. */
export default function FftStrip() {
  return (
    <section className="py-16 lg:py-20 border-y border-border bg-card/50" aria-labelledby="fft-title">
      <Container size="md">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left">
          <Image
            src="/fft-anvil-mark.webp"
            alt=""
            width={520}
            height={267}
            className="w-40 md:w-48 h-auto shrink-0 invert dark:invert-0 opacity-90"
          />
          <div className="flex-1">
            <h2 id="fft-title" className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              Part of Frontier Forge Technologies
            </h2>
            <p className="mt-3 text-foreground/70 leading-relaxed max-w-xl">
              Ascella is the consumer side of Frontier Forge. The rest of Frontier Forge builds AI
              agents, automation and custom software for businesses. If that&rsquo;s what you need,
              they&rsquo;re the people to talk to.
            </p>
          </div>
          <a
            href={FFT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline shrink-0"
          >
            frontierforge.tech
            <Icon name="arrowUpRight" className="w-4 h-4" />
          </a>
        </div>
      </Container>
    </section>
  );
}
