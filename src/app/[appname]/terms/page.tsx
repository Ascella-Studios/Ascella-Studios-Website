import { notFound } from 'next/navigation';
import fs from 'fs/promises';
import path from 'path';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ appname: string }>;
};

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function extractBodyContent(html: string): string {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return bodyMatch ? bodyMatch[1].trim() : html;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { appname } = await params;
  return {
    title: `${capitalize(appname)} - Terms of Service`,
    robots: { index: false, follow: false },
  };
}

export default async function AppTermsPage({ params }: Props) {
  const { appname } = await params;
  const filePath = path.join(process.cwd(), 'legal', appname, 'terms.html');

  let html: string;
  try {
    html = await fs.readFile(filePath, 'utf-8');
  } catch {
    notFound();
  }

  const content = extractBodyContent(html);

  return (
    <div className="bg-background">
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div
            className="text-foreground/70 leading-relaxed [&_h1]:text-4xl [&_h1]:md:text-5xl [&_h1]:font-bold [&_h1]:text-foreground [&_h1]:mb-6 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_ol]:space-y-2 [&_li]:mb-0 [&_a]:text-sky [&_a]:underline [&_.updated]:text-foreground/50 [&_.updated]:text-sm"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </section>
    </div>
  );
}
