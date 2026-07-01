import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "./components/Header";

const acuminPro = localFont({
  variable: "--font-sans",
  display: "swap",
  src: [
    { path: "./fonts/AcuminPro-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/AcuminPro-Medium.woff2", weight: "500", style: "normal" },
  ],
});

const siteUrl = "https://monk.haus";
const siteName = "Monk Haus";
const siteTitle = "Monk Haus — Website & Brand Identity Studio";
const siteDescription =
  "Monk Haus is a boutique creative studio building custom websites and brand identities for fashion, art, and creative clients — built with Next.js, Shopify, and Sanity.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s — Monk Haus",
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "Monk Haus",
    "web design studio",
    "brand identity",
    "website design",
    "Next.js development",
    "Shopify",
    "Sanity",
    "creative studio",
    "art direction",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 653,
        alt: "Monk Haus — Website & Brand Identity Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      url: siteUrl,
      description: siteDescription,
      email: "hello@monk.haus",
      sameAs: ["https://www.instagram.com/_monk.haus_/"],
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/android-chrome-512x512.png`,
        width: 512,
        height: 512,
      },
      image: `${siteUrl}/og-image.jpg`,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={acuminPro.variable}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark')}}catch(e){}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
