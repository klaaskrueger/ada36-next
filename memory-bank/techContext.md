# Technical Context: ADA36 Next.js Migration

## Aktuelle Technologie (Jekyll)
- **Framework**: Jekyll (Ruby-basiert)
- **Styling**: SCSS mit Custom CSS
- **JavaScript**: jQuery, Parallax.js, Smooth Scroll
- **Images**: Jekyll Responsive Images Plugin
- **Hosting**: Statische Website
- **Build**: Jekyll Build Process

## Ziel-Technologie (Next.js)
- **Framework**: Next.js 14+ mit App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **JavaScript**: React, moderne ES6+ Features
- **Images**: Next.js Image Component mit Optimierung
- **Hosting**: Vercel (empfohlen) oder andere Next.js-kompatible Plattformen
- **Build**: Next.js Build Process

## Technische Anforderungen
### Performance
- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Image Optimization**: Automatische WebP-Konvertierung
- **Code Splitting**: Automatische Code-Aufteilung
- **Caching**: Optimierte Caching-Strategien

### SEO
- **Meta Tags**: Dynamische SEO-Tags
- **Sitemap**: Automatische Sitemap-Generierung
- **Structured Data**: JSON-LD für Rich Snippets
- **Open Graph**: Social Media Optimierung

### Responsive Design
- **Mobile First**: Mobile-optimierte Darstellung
- **Breakpoints**: 425px, 600px, 768px, 992px, 1400px
- **Touch Friendly**: Touch-optimierte Navigation
- **Performance**: Optimierte Bilder für verschiedene Bildschirmgrößen

## Dependencies
### Core
- `next`: ^14.0.0
- `react`: ^18.0.0
- `typescript`: ^5.0.0

### Styling
- `tailwindcss`: ^3.4.0
- `@tailwindcss/typography`: ^0.5.0
- `autoprefixer`: ^10.4.0

### Development
- `@types/node`: ^20.0.0
- `@types/react`: ^18.0.0
- `eslint`: ^8.0.0
- `prettier`: ^3.0.0

### Images & Assets
- `sharp`: ^0.33.0 (für Image Optimization)
- `lucide-react`: ^0.300.0 (für Icons)

## Architektur
### File Structure
```
src/
├── app/                 # App Router Pages
│   ├── page.tsx        # Homepage
│   ├── images/         # Images Page
│   ├── neighbourhood/  # Neighbourhood Page
│   ├── guides/         # Guides Page
│   └── layout.tsx      # Root Layout
├── components/         # React Components
│   ├── ui/            # UI Components
│   ├── sections/      # Page Sections
│   └── layout/        # Layout Components
├── lib/               # Utilities
├── styles/            # Global Styles
└── types/             # TypeScript Types
```

### Component Architecture
- **Atomic Design**: Atoms, Molecules, Organisms
- **Composition**: Komponenten-basierte Architektur
- **Reusability**: Wiederverwendbare UI-Komponenten
- **Type Safety**: Vollständige TypeScript-Integration

## Migration Strategy
### Phase 1: Setup
1. Next.js Projekt initialisieren
2. TypeScript konfigurieren
3. Tailwind CSS einrichten
4. Grundlegende Projektstruktur erstellen

### Phase 2: Content Migration
1. Jekyll Sections zu React Components
2. Bilder und Assets migrieren
3. Texte und Content übertragen
4. Navigation implementieren

### Phase 3: Styling
1. SCSS zu Tailwind CSS konvertieren
2. Responsive Design implementieren
3. Animationen und Interaktionen
4. Cross-browser Testing

### Phase 4: Optimization
1. Performance-Optimierung
2. SEO-Implementierung
3. Image-Optimierung
4. Final Testing

## Deployment
- **Platform**: Vercel (empfohlen)
- **Domain**: ada36.de (bestehend)
- **SSL**: Automatisch über Vercel
- **CDN**: Global Edge Network
- **Analytics**: Vercel Analytics oder Google Analytics
