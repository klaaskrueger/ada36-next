import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/navigation";
import { generateMetadata, defaultSEOConfig, accommodationStructuredData, websiteStructuredData } from "@/lib/seo";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = generateMetadata(defaultSEOConfig, siteConfig.url);

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(accommodationStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
