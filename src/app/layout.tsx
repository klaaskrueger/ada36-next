import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/navigation";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: [
    "Berlin",
    "Kreuzberg",
    "Loft",
    "Apartment",
    "Rental",
    "Tourist",
    "Accommodation",
    "Ada36",
    "Studio"
  ],
  authors: [{ name: "Klaas Krüger" }],
  creator: "Klaas Krüger",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [
      {
        url: "/assets/images/fullsize/living-01.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/assets/images/fullsize/living-01.jpg"],
  },
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
  verification: {
    google: process.env.GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href={siteConfig.favicon} />
        <link rel="canonical" href={siteConfig.url} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
