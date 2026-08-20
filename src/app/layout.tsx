import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { person, seoKeywords, site } from "@/constants/portfolio";
import "./globals.css";
import "./restyle-v2.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const atlasDisplay = localFont({
  src: "./fonts/gambarino-regular.woff2",
  variable: "--font-instrument-serif",
  weight: "400",
  style: "normal",
  display: "swap",
});

const enableVercelTelemetry = process.env.VERCEL === "1";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  title: {
    default: site.name,
    template: "%s | Vinayak Kumar",
  },
  description: site.description,
  keywords: seoKeywords,
  authors: [{ name: person.name, url: site.url }],
  creator: person.name,
  publisher: person.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.name,
    description: site.description,
    url: "/",
    siteName: site.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Portfolio cover for Vinayak Kumar, a Full-Stack Engineer building React, React Native, and applied AI products.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/twitter-image"],
  },
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
  themeColor: "#dfe5d8",
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${atlasDisplay.variable} h-full antialiased`}
    >
      <body>
        {children}
        {enableVercelTelemetry ? (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        ) : null}
      </body>
    </html>
  );
}
