import type { Metadata } from "next";
import type { Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { person, seoKeywords, site } from "@/data/portfolio";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  title: {
    default: "Vinayak Kumar - AI Full-Stack Engineer",
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
    title: "Vinayak Kumar - AI Full-Stack Engineer",
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
        alt: "Vinayak Kumar, AI full-stack engineer building Next.js, React Native, TypeScript, LangChain, RAG, and product analytics systems.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinayak Kumar - AI Full-Stack Engineer",
    description: site.description,
    images: ["/opengraph-image"],
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
  themeColor: "#F2EDE4",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
