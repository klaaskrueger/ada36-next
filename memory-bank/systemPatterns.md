# System Patterns: ADA36 Next.js Architecture

## Design Patterns

### 1. Component Composition
```typescript
// Atomic Design Structure
interface ComponentHierarchy {
  atoms: ['Button', 'Input', 'Image', 'Text'];
  molecules: ['Card', 'Navigation', 'ImageGallery'];
  organisms: ['Header', 'Section', 'Footer'];
  templates: ['PageLayout', 'SectionLayout'];
  pages: ['HomePage', 'ImagesPage', 'GuidesPage'];
}
```

### 2. Data Flow Pattern
```typescript
// Content-driven Architecture
interface SectionData {
  title: string;
  sortingNumber: number;
  label: 'homepage' | 'images' | 'neighbourhood';
  text: string;
  imagePath: string;
  imageText: string;
}
```

### 3. Layout System
```typescript
// Responsive Layout Pattern
interface LayoutConfig {
  breakpoints: {
    mobile: '425px';
    smallTablet: '600px';
    largeTablet: '768px';
    smallLaptop: '992px';
    laptop: '1400px';
  };
  containers: {
    maxWidth: '1200px';
    padding: '1rem';
  };
}
```

## Key Components

### 1. Section Component
```typescript
interface SectionProps {
  section: SectionData;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ section, className }) => {
  return (
    <section className={`section ${className}`}>
      <div className="sect-anchor" id={`section-${section.sortingNumber}`} />
      <div className="columns">
        <div className="content">
          <div className="port-text">
            {section.title && <h1 className="title">{section.title}</h1>}
            {section.text && (
              <p className="text" dangerouslySetInnerHTML={{ __html: section.text }} />
            )}
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="content-image">
          {section.imagePath && (
            <ResponsiveImage
              src={section.imagePath}
              alt={section.imageText}
              className="section-image"
            />
          )}
        </div>
      </div>
    </section>
  );
};
```

### 2. Navigation Component
```typescript
interface NavigationItem {
  name: string;
  url: string;
  pages?: string[];
}

interface NavigationProps {
  items: NavigationItem[];
  currentPath: string;
  isMobile?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ items, currentPath, isMobile }) => {
  return (
    <nav className={`site-nav ${isMobile ? 'pop-site-nav' : ''}`}>
      {items.map((item) => (
        <a
          key={item.url}
          href={item.url}
          className={`nav-links ${currentPath === item.url ? 'current' : ''}`}
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
};
```

### 3. Responsive Image Component
```typescript
interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      priority={priority}
      sizes={sizes}
      width={1400}
      height={800}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
    />
  );
};
```

## Content Management

### 1. Section Data Structure
```typescript
// Content wird als TypeScript-Objekte definiert
const sections = {
  homepage: [
    {
      title: "The Loft",
      sortingNumber: 1,
      label: "homepage" as const,
      text: "<b>Minimalist design 2-room-apartment at the center of Kreuzberg.</b> <br><br>Floor-plan as open kitchen with dining table for 4 persons and access to the balcony, living area with a sleeping sofa and a desk. Bedroom with a double bed (160x200 cm) and a big wardrobe. Walk-in closet.<br> Bath with tub.",
      imagePath: "/assets/images/fullsize/living-01.jpg",
      imageText: "Ada 36 Studio"
    },
    // ... weitere Sections
  ]
};
```

### 2. Navigation Configuration
```typescript
const navigationItems = [
  { name: "Loft", url: "/" },
  { name: "Images", url: "/images" },
  { name: "Neighbourhood", url: "/neighbourhood" },
  { name: "Guides", url: "/guides" }
];
```

## Styling Patterns

### 1. Tailwind CSS Integration
```typescript
// Custom CSS für spezifische Designs
const customStyles = `
  .section {
    position: relative;
    padding-top: 40px;
  }
  
  .port-text {
    margin-bottom: 2rem;
  }
  
  .title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  
  .text {
    line-height: 1.6;
    color: #333;
  }
`;
```

### 2. Responsive Design Classes
```typescript
// Responsive Utilities
const responsiveClasses = {
  container: "container mx-auto px-4 max-w-6xl",
  section: "py-10 lg:py-20",
  grid: "grid grid-cols-1 lg:grid-cols-2 gap-8",
  text: "text-base lg:text-lg leading-relaxed"
};
```

## Performance Patterns

### 1. Image Optimization
```typescript
// Next.js Image Optimization
const imageConfig = {
  domains: ['ada36.de'],
  formats: ['image/webp', 'image/avif'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
};
```

### 2. Code Splitting
```typescript
// Dynamic Imports für große Komponenten
const LazyMapComponent = dynamic(() => import('./MapComponent'), {
  loading: () => <div>Loading map...</div>,
  ssr: false
});
```

## SEO Patterns

### 1. Metadata Generation
```typescript
interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
  openGraph: {
    title: string;
    description: string;
    images: string[];
  };
}

const generateMetadata = (page: string): Metadata => ({
  title: `ADA36 Loft - ${page}`,
  description: "Minimalist design 2-room-apartment at the center of Kreuzberg",
  openGraph: {
    title: `ADA36 Loft - ${page}`,
    description: "Minimalist design 2-room-apartment at the center of Kreuzberg",
    images: ['/assets/images/header.jpg']
  }
});
```

### 2. Structured Data
```typescript
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Accommodation",
  "name": "ADA36 Loft",
  "description": "Minimalist design 2-room-apartment at the center of Kreuzberg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Adalbertstr 36",
    "addressLocality": "Berlin",
    "postalCode": "10179",
    "addressCountry": "DE"
  }
};
```
