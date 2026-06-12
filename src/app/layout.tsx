import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: {
    default: "Ascella Studios | Apps that elevate",
    template: "%s | Ascella Studios",
  },
  description:
    "Ascella Studios is an independent app studio making small, carefully built apps for everyday life—software that solves real problems, loads fast, and respects your time.",
  keywords: [
    "indie app studio",
    "app development",
    "mobile apps",
    "web apps",
    "software studio",
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
      "Ascella Studios is an independent app studio making small, carefully built apps for everyday life—software that solves real problems, loads fast, and respects your time.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ascella Studios | Apps that elevate",
    description:
      "Ascella Studios is an independent app studio making small, carefully built apps for everyday life—software that solves real problems, loads fast, and respects your time.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
