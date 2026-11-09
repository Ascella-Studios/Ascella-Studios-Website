import type { Metadata } from 'next';
import { Suspense } from 'react';
import ContactForm from './ContactForm';
import Container from '@/components/Container';
import { Icon, type IconName } from '@/components/icons';
import { EMAIL, PHONE_DISPLAY, PHONE_HREF } from '@/data/solutions';

const description =
  'Get in touch with Ascella Studios about our apps, a website or consult through Ascella Solutions, or a partnership.';

export const metadata: Metadata = {
  title: 'Contact',
  description,
  openGraph: {
    title: 'Contact Ascella Studios',
    description,
    url: 'https://ascellastudios.com/contact',
  },
  alternates: { canonical: '/contact' },
};

const contactInfo: { label: string; icon: IconName; content: React.ReactNode }[] = [
  {
    label: 'Phone',
    icon: 'phone',
    content: (
      <a href={PHONE_HREF} className="text-foreground/70 hover:text-accent transition-colors">
        {PHONE_DISPLAY}
      </a>
    ),
  },
  {
    label: 'Email',
    icon: 'mail',
    content: (
      <a href={`mailto:${EMAIL}`} className="text-foreground/70 hover:text-accent transition-colors">
        {EMAIL}
      </a>
    ),
  },
  {
    label: 'Based in',
    icon: 'pin',
    content: <p className="text-foreground/70">Watertown, Wisconsin</p>,
  },
];

export default function ContactPage() {
  return (
    <div className="bg-background py-16 sm:py-24">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Get in touch
            </h1>
            <p className="text-lg text-foreground/70 mb-10">
              About a website for your business, one of our apps, or anything else. Jared reads
              and answers these himself. If it&rsquo;s easier, just call.
            </p>

            <h2 className="sr-only">Contact information</h2>
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="size-10 rounded-lg border border-border bg-card text-accent flex items-center justify-center shrink-0">
                    <Icon name={item.icon} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.label}</h3>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>

          </div>

          <Suspense fallback={<div className="rounded-2xl border border-border bg-card p-8 min-h-[32rem]" />}>
            <ContactForm />
          </Suspense>
        </div>
      </Container>
    </div>
  );
}
