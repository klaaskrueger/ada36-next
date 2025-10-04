import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    images?: string[];
    type?: string;
  };
  structuredData?: Record<string, unknown>;
}

export const defaultSEOConfig: SEOConfig = {
  title: "ADA36 Studio - Minimalistisches Loft in Kreuzberg, Berlin",
  description: "Entdecken Sie das ADA36 Studio - ein minimalistisches 2-Zimmer-Loft im Herzen von Kreuzberg, Berlin. Perfekt für Touristen, Geschäftsreisende und digitale Nomaden. Moderne Ausstattung, zentrale Lage, authentisches Berlin-Erlebnis.",
  keywords: [
    "Berlin",
    "Kreuzberg",
    "Loft",
    "Apartment",
    "Ferienwohnung",
    "Unterkunft",
    "Tourist",
    "Geschäftsreise",
    "Digitale Nomaden",
    "ADA36",
    "Studio",
    "Adalbertstraße",
    "Minimalistisch",
    "Modern",
    "Zentral",
    "Berlin Mitte",
    "Kreuzberg 36",
    "Kurzzeitmiete",
    "Wohnung mieten",
    "Berlin Unterkunft",
    "Kreuzberg Apartment",
    "Berlin Loft",
    "Ferienwohnung Berlin",
    "Kurzzeitmiete Berlin",
    "Business Trip Berlin",
    "Tourist Berlin",
    "Berlin Accommodation",
    "Kreuzberg Accommodation"
  ],
  openGraph: {
    type: "website",
    images: ["/assets/images/fullsize/living-01.jpg"]
  }
};

export function generateMetadata(config: SEOConfig, baseUrl: string = "https://ada36.de"): Metadata {
  const title = config.title || defaultSEOConfig.title;
  const description = config.description || defaultSEOConfig.description;
  const keywords = config.keywords || defaultSEOConfig.keywords;
  const canonical = config.canonical || baseUrl;

  return {
    title,
    description,
    keywords,
    authors: [{ name: "Klaas Krüger" }],
    creator: "Klaas Krüger",
    publisher: "ADA36 Studio",
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
      locale: "de_DE",
      url: canonical,
      title,
      description,
      siteName: "ADA36 Studio",
      images: config.openGraph?.images || defaultSEOConfig.openGraph?.images || [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: config.openGraph?.images || defaultSEOConfig.openGraph?.images || [],
    },
    alternates: {
      canonical,
    },
    verification: {
      google: process.env.GOOGLE_VERIFICATION,
    },
  };
}

export const accommodationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Accommodation",
  "name": "ADA36 Studio",
  "description": "Minimalistisches 2-Zimmer-Loft im Herzen von Kreuzberg, Berlin. Perfekt für Touristen, Geschäftsreisende und digitale Nomaden.",
  "url": "https://ada36.de",
  "image": [
    "https://ada36.de/assets/images/fullsize/living-01.jpg",
    "https://ada36.de/assets/images/fullsize/kitchen-03.jpg",
    "https://ada36.de/assets/images/fullsize/sleeping-01.jpg"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Adalbertstraße 36",
    "addressLocality": "Berlin",
    "addressRegion": "Berlin",
    "postalCode": "10999",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "52.5025",
    "longitude": "13.4147"
  },
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "WiFi",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification", 
      "name": "Kitchen",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Bathroom",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Balcony",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Double Bed",
      "value": true
    }
  ],
  "numberOfRooms": 2,
  "floorSize": {
    "@type": "QuantitativeValue",
    "value": "65",
    "unitCode": "MTK"
  },
  "occupancy": {
    "@type": "QuantitativeValue",
    "maxValue": 4
  },
  "petsAllowed": false,
  "smokingAllowed": false,
  "checkinTime": "15:00",
  "checkoutTime": "11:00"
};

export const breadcrumbStructuredData = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://ada36.de${item.url}`
  }))
});

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "ADA36 Studio",
  "description": "Minimalistisches Loft in Kreuzberg, Berlin - Perfekte Unterkunft für Touristen und Geschäftsreisende",
  "url": "https://ada36.de",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://ada36.de/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};
