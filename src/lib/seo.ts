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
  title: "ADA36 Studio - Minimalistisches Loft in Kreuzberg, Berlin | Zum Verkauf",
  description: "ADA36 Studio - Minimalistisches 2-Zimmer-Loft im Herzen von Kreuzberg, Berlin zum Verkauf. Perfekte Investment-Immobilie oder Traumwohnung. Moderne Ausstattung, zentrale Lage, authentisches Berlin-Erlebnis.",
  keywords: [
    "Berlin",
    "Kreuzberg",
    "Loft",
    "Apartment",
    "Immobilie kaufen",
    "Loft kaufen",
    "Berlin Immobilie",
    "Kreuzberg Immobilie",
    "ADA36",
    "Studio",
    "Adalbertstraße",
    "Minimalistisch",
    "Modern",
    "Zentral",
    "Berlin Mitte",
    "Kreuzberg 36",
    "Immobilie verkaufen",
    "Wohnung kaufen",
    "Berlin Loft kaufen",
    "Kreuzberg Apartment kaufen",
    "Berlin Loft verkaufen",
    "Immobilie Berlin",
    "Kreuzberg Loft kaufen",
    "Berlin Investment",
    "Kreuzberg Investment",
    "Eigentumswohnung Berlin",
    "Loft Berlin kaufen"
  ],
  openGraph: {
    type: "website",
    images: ["https://ada36.de/assets/images/fullsize/Wohnzimmer-IMG_4759-whatsapp.jpg?v=3"]
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

export const realEstateStructuredData = {
  "@context": "https://schema.org",
  "@type": "RealEstate",
  "name": "ADA36 Studio - Loft zum Verkauf",
  "description": "Minimalistisches 2-Zimmer-Loft im Herzen von Kreuzberg, Berlin zum Verkauf. Perfekte Investment-Immobilie oder Traumwohnung.",
  "url": "https://ada36.de",
  "image": [
    "https://ada36.de/assets/images/fullsize/Wohnzimmer-IMG_4759-whatsapp.jpg?v=3",
    "https://ada36.de/assets/images/fullsize/amerikanische-Kueche-IMG_4737.webp",
    "https://ada36.de/assets/images/fullsize/Schlafzimmer_IMG_4722.webp"
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
  "propertyType": "Apartment",
  "amenityFeature": [
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
    "value": "70",
    "unitCode": "MTK"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "EUR",
    "description": "Loft zum Verkauf"
  }
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
  "description": "Minimalistisches Loft in Kreuzberg, Berlin zum Verkauf - Perfekte Investment-Immobilie oder Traumwohnung",
  "url": "https://ada36.de",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://ada36.de/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// Funktion um SEO-Konfiguration basierend auf der Route zu erhalten
export function getSEOConfigForRoute(pathname: string): SEOConfig {
  switch (pathname) {
    case '/equipment':
      return imagesSEOConfig;
    case '/neighbourhood':
      return neighbourhoodSEOConfig;
    case '/guides':
      return guidesSEOConfig;
    default:
      return defaultSEOConfig;
  }
}

// Spezifische SEO-Konfigurationen für einzelne Seiten
export const imagesSEOConfig: SEOConfig = {
  title: "Bildergalerie - ADA36 Studio Kreuzberg Berlin | Loft Fotos zum Verkauf",
  description: "Bildergalerie des ADA36 Studio Lofts in Kreuzberg, Berlin zum Verkauf. Professionelle Fotos aller Räume, Ausstattung und Details der Immobilie.",
  keywords: [
    "ADA36 Studio",
    "Loft Bilder",
    "Immobilienfotos",
    "Verkaufsgalerie",
    "Berlin Kreuzberg",
    "Loft Fotos",
    "Immobilie Bilder",
    "Kreuzberg Loft",
    "Berlin Apartment",
    "Verkauf Bilder"
  ],
  canonical: "https://ada36.de/equipment"
};

export const neighbourhoodSEOConfig: SEOConfig = {
  title: "Lage & Umgebung - ADA36 Studio Kreuzberg Berlin | Immobilie zum Verkauf",
  description: "Perfekte Lage des ADA36 Studio Lofts in Kreuzberg, Berlin. Zentrale Position, Infrastruktur, Sehenswürdigkeiten und Investmentpotenzial.",
  keywords: [
    "ADA36 Studio",
    "Kreuzberg Lage",
    "Immobilienlage",
    "Investment Berlin",
    "Kreuzberg Umgebung",
    "Berlin Mitte",
    "Zentrale Lage",
    "Infrastruktur",
    "Sehenswürdigkeiten",
    "Transport"
  ],
  canonical: "https://ada36.de/neighbourhood"
};

export const guidesSEOConfig: SEOConfig = {
  title: "Objektinformationen - ADA36 Studio Kreuzberg Berlin | Details zum Verkauf",
  description: "Detaillierte Objektinformationen des ADA36 Studio Lofts in Kreuzberg, Berlin. Ausstattung, technische Daten und Verkaufsdetails.",
  keywords: [
    "ADA36 Studio",
    "Objektdetails",
    "Ausstattung",
    "Technische Daten",
    "Verkaufsinfos",
    "Berlin Kreuzberg",
    "Loft Ausstattung",
    "Immobilie Details",
    "Verkauf Details"
  ],
  canonical: "https://ada36.de/guides"
};
