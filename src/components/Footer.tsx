import Link from 'next/link';
import { apps } from '@/data/apps';
import { FFT_URL } from '@/data/solutions';
import { SocialIcon, socialLinks } from '@/components/icons';

const columns = [
  {
    title: 'Apps',
    links: [
      { name: 'All apps', href: '/apps' },
      ...apps.map((app) => ({ name: app.name, href: `/apps/${app.id}` })),
    ],
  },
  {
    title: 'Studio',
    links: [
      { name: 'Ascella Solutions', href: '/solutions' },
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-14" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <span className="text-xl font-bold tracking-tight text-gradient">Ascella Studios</span>
            <p className="text-foreground/60 mt-2 text-sm">Apps that elevate.</p>
            <p className="text-foreground/60 mt-4 text-sm">
              A{' '}
              <a
                href={FFT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 underline decoration-border underline-offset-4 hover:text-accent hover:decoration-current transition-colors"
              >
                Frontier Forge Technologies
              </a>{' '}
              company
            </p>
            <div className="flex gap-4 mt-5">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-accent transition-colors"
                  aria-label={item.name}
                >
                  <SocialIcon path={item.path} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={`${column.title} links`}>
              <p className="text-sm font-semibold text-foreground mb-4">{column.title}</p>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/60 hover:text-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between gap-2 text-foreground/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Ascella Studios. All rights reserved.</p>
          <p>Watertown, Wisconsin</p>
        </div>
      </div>
    </footer>
  );
}
