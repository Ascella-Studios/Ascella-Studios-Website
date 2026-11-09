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
          <div className="shrink-0 rounded-2xl bg-[#0A0F1E] p-5 dark:bg-transparent dark:p-0">
            <Image src="/fft-anvil-mark.webp" alt="" width={520} height={267} className="w-36 md:w-44 h-auto opacity-90" />
          </div>
          <div className="flex-1">
            <h2 id="fft-title" className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              Part of Frontier Forge Technologies
            </h2>
            <p className="mt-3 text-foreground/70 leading-relaxed max-w-xl">
              Ascella builds the software people use. The rest of Frontier Forge builds the systems
              that run a business: AI agents, automation and internal tools. If that&rsquo;s what
              you need, they&rsquo;re the people to talk to.
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
