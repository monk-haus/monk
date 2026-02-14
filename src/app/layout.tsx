import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "./lenis-provider";
import Navigation from "@/components/Navigation";
import PageTransition from "@/components/PageTransition";
import Preloader from "@/components/Preloader";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-alpina",
});

const uncutSans = localFont({
  src: "../fonts/UncutSans-Variable.woff2",
  variable: "--font-mono",
});

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://monk.haus"),
  title: {
    default: "MONK | HAUS",
    template: "%s | MONK HAUS",
  },
  description: "Digital artifact foundry based in Craiova. We build raw, friction-heavy web experiences. No templates. No cookies. Pure signal.",
  keywords: [
    "Monk Haus",
    "Web Design Craiova",
    "Digital Agency Romania",
    "Brutalist Web Design",
    "Next.js Developers",
    "WebGL",
    "Creative Studio",
    "Anti-Template",
    "web design agency Romania",
    "custom website development",
    "creative web agency",
    "web development Craiova",
    "brand identity design",
  ],
  authors: [{ name: "Monk Haus", url: "https://monk.haus" }],
  creator: "Monk Haus",
  publisher: "Monk Haus",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://monk.haus",
    title: "MONK | HAUS",
    description: "Digital artifact foundry. We ship code.",
    siteName: "MONK HAUS",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Monk Haus Digital Debris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MONK | HAUS",
    description: "Digital artifact foundry. We ship code.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://monk.haus",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${uncutSans.variable} antialiased`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Monk Haus",
              url: "https://monk.haus",
              logo: "https://monk.haus/og-image.jpg",
              description: "Digital artifact foundry based in Craiova. We build raw, friction-heavy web experiences.",
              sameAs: ["https://instagram.com/_monk.haus_"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Craiova",
                addressCountry: "RO",
              },
            }),
          }}
        />
        <div className="noise-overlay" />
        <Preloader />
        <ReactLenis root>
          <div>
            <Navigation />
            <PageTransition>
              {children}
            </PageTransition>
          </div>
        </ReactLenis>
      </body>
    </html>
  );
}