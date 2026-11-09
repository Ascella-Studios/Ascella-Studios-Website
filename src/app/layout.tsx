import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const DESCRIPTION =
  'Ascella Studios is the consumer apps studio of Frontier Forge Technologies. We build and run StreamerGames and HomeHelpersCo, and help small businesses with websites and consulting through Ascella Solutions.';

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ascella Studios',
  url: 'https://ascellastudios.com',
  email: 'hello@ascellastudios.com',
  slogan: 'Apps that elevate',
  description: DESCRIPTION,
  parentOrganization: {
    '@type': 'Organization',
    name: 'Frontier Forge Technologies',
    url: 'https://frontierforge.tech',
  },
  sameAs: [
    'https://x.com/ascellastudios',
    'https://github.com/Ascella-Studios',
    'https://linkedin.com/company/ascellastudios',
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Ascella Studios | Apps that elevate",
    template: "%s | Ascella Studios",
  },
  description:
    DESCRIPTION,
  keywords: [
    "consumer app studio",
    "small business websites",
    "website design Wisconsin",
    "tech consulting",
    "StreamerGames",
    "HomeHelpersCo",
    "Ascella Solutions",
    "Frontier Forge Technologies",
    "Ascella Studios",
  ],
  authors: [{ name: "Ascella Studios" }],
  creator: "Ascella Studios",
  metadataBase: new URL("https://ascellastudios.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ascellastudios.com",
    siteName: "Ascella Studios",
    title: "Ascella Studios | Apps that elevate",
    description:
      DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ascella Studios | Apps that elevate",
    description:
      DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0F1E",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
