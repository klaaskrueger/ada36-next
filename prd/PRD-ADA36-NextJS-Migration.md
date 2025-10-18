# Product Requirements Document (PRD)
## ADA36 Loft - Jekyll zu Next.js Migration

**Version:** 1.0  
**Datum:** Januar 2025  
**Projekt:** ADA36 Next.js Migration  
**Status:** In Planung  

---

## 1. Executive Summary

### Projektübersicht
Migration der bestehenden ADA36 Loft Website von Jekyll zu Next.js. Das Ziel ist eine exakte Replikation der aktuellen Website mit modernen Web-Technologien, verbesserter Performance und besserer Wartbarkeit.

### Geschäftsziel
- **Hauptziel**: Exakte Replikation der bestehenden Jekyll-Website
- **Sekundärziele**: Verbesserte Performance, moderne Technologie, bessere Wartbarkeit
- **Erfolgskriterien**: 100% visuelle Übereinstimmung, alle Funktionen funktional, verbesserte Core Web Vitals

---

## 2. Projektkontext

### Aktuelle Situation
- **Bestehende Website**: Jekyll-basierte statische Website
- **Domain**: ada36.de
- **Zweck**: Präsentation und Vermietung eines Lofts in Berlin-Kreuzberg
- **Zielgruppe**: Touristen, Geschäftsreisende, digitale Nomaden

### Geschäftliche Motivation
- **Technologie-Modernisierung**: Von Ruby/Jekyll zu JavaScript/React
- **Performance-Verbesserung**: Schnellere Ladezeiten und bessere User Experience
- **Wartbarkeit**: Einfachere Updates und Erweiterungen
- **SEO-Optimierung**: Bessere Suchmaschinenoptimierung

---

## 3. Funktionale Anforderungen

### 3.1 Seiten-Struktur

#### 3.1.1 Homepage (`/`)
**Zweck**: Hauptpräsentation des Lofts
**Inhalte**:
- Loft-Übersicht (Section 1)
- Küche (Section 2) 
- Wohnbereich (Section 3)
- Schlafbereich (Section 4)
- Badezimmer (Section 5)
- Arbeitsbereich (Section 6)
- Spiegeldetails (Section 7)
- Balkon (Section 8)
- Garten (Section 9)
- Grundriss (Section 10)
- Schrank (Section 11)
- Verbindungstüren (Section 12)

**Funktionen**:
- Responsive Bildanzeige
- Smooth Scrolling Navigation
- Mobile-optimierte Darstellung

#### 3.1.2 Images Page (`/images`)
**Zweck**: Bildergalerie des Lofts
**Inhalte**:
- Alle Loft-Bilder in responsiver Galerie
- Kategorisierte Darstellung
- Lightbox-Funktionalität

#### 3.1.3 Neighbourhood Page (`/neighbourhood`)
**Zweck**: Umgebungsinformationen
**Inhalte**:
- Google Maps Integration
- Wichtige Orte in der Umgebung
- Fahrradwege und Sehenswürdigkeiten

#### 3.1.4 Guides Page (`/guides`)
**Zweck**: Gästeanleitung
**Inhalte**:
- Adresse und Kontakt
- Rauchverbot und Sicherheit
- Banken und Geldautomaten
- Nachbarn und Ruhezeiten
- Lüftung und Heizung
- Reinigung
- Notfälle
- Eingang und Schlüssel
- Essen und Einkaufen
- Parkausweis
- Möbel
- Internet WLAN
- Jogging
- Handbücher
- Haustiere
- Öffentlicher Verkehr
- Restaurants
- Mülltrennung
- Taxi
- Wäsche

#### 3.1.5 Rechtliche Seiten
- **Impressum** (`/impressum`)
- **Datenschutzerklärung** (`/datenschutzerklaerung`)

### 3.2 Navigation

#### 3.2.1 Header Navigation
- **Desktop**: Horizontale Navigation mit Logo und Menü
- **Mobile**: Hamburger-Menü mit Overlay
- **Menüpunkte**: Loft, Images, Neighbourhood, Guides

#### 3.2.2 Footer
- **Scroll-Button**: Nach unten scrollen
- **Minimale Gestaltung**: Fokus auf Content

### 3.3 Responsive Design

#### 3.3.1 Breakpoints
- **Mobile**: < 425px
- **Small Tablet**: 425px - 600px
- **Large Tablet**: 600px - 768px
- **Small Laptop**: 768px - 992px
- **Laptop**: 992px - 1400px
- **Desktop**: > 1400px

#### 3.3.2 Mobile Optimierung
- Touch-freundliche Navigation
- Optimierte Bildgrößen
- Lesbare Schriftgrößen
- Schnelle Ladezeiten

---

## 4. Technische Anforderungen

### 4.1 Technologie-Stack

#### 4.1.1 Frontend
- **Framework**: Next.js 14+ mit App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Icons**: Lucide React

#### 4.1.2 Build & Development
- **Package Manager**: npm
- **Linting**: ESLint
- **Formatting**: Prettier
- **Type Checking**: TypeScript

#### 4.1.3 Images & Assets
- **Image Optimization**: Next.js Image Component
- **Formats**: WebP, AVIF
- **Responsive Images**: Automatische Größenanpassung
- **Lazy Loading**: Automatisches Lazy Loading

### 4.2 Performance-Anforderungen

#### 4.2.1 Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

#### 4.2.2 Ladezeiten
- **Initial Load**: < 3s
- **Image Loading**: < 2s
- **Navigation**: < 500ms

#### 4.2.3 Optimierungen
- **Code Splitting**: Automatische Code-Aufteilung
- **Image Optimization**: Automatische WebP-Konvertierung
- **Caching**: Optimierte Caching-Strategien
- **Minification**: CSS und JavaScript minifiziert

### 4.3 SEO-Anforderungen

#### 4.3.1 Meta Tags
- **Title**: Dynamische, seiten-spezifische Titel
- **Description**: SEO-optimierte Beschreibungen
- **Keywords**: Relevante Keywords für jede Seite
- **Open Graph**: Social Media Optimierung

#### 4.3.2 Strukturierte Daten
- **Schema.org**: Accommodation Schema
- **JSON-LD**: Strukturierte Daten für Rich Snippets
- **Sitemap**: Automatische Sitemap-Generierung

#### 4.3.3 Technische SEO
- **URLs**: SEO-freundliche URLs
- **Canonical Tags**: Vermeidung von Duplicate Content
- **Robots.txt**: Suchmaschinen-optimiert

---

## 5. Design-Anforderungen

### 5.1 Visuelle Übereinstimmung

#### 5.1.1 Exakte Replikation
- **100% visuelle Übereinstimmung** mit dem Original
- **Pixel-genaue** Darstellung auf allen Geräten
- **Identische Farben**, Schriftarten und Abstände

#### 5.1.2 Typografie
- **Schriftart**: Lato (Google Fonts)
- **Gewichtungen**: 400 (Regular), 700 (Bold)
- **Größen**: Responsive Schriftgrößen

#### 5.1.3 Farben
- **Hauptfarbe**: #221F3D (Dunkelgrau)
- **Textfarbe**: #333333
- **Hintergrund**: #ffffff
- **Akzentfarben**: Wie im Original

### 5.2 Layout-System

#### 5.2.1 Grid System
- **Container**: Max-width 1200px
- **Padding**: 1rem auf Mobile, 2rem auf Desktop
- **Columns**: Flexbox-basierte Spalten

#### 5.2.2 Spacing
- **Sektionen**: 40px Padding-Top
- **Elemente**: Konsistente Abstände
- **Responsive**: Angepasste Abstände für verschiedene Bildschirmgrößen

### 5.3 Animationen und Interaktionen

#### 5.3.1 Smooth Scrolling
- **Navigation**: Smooth Scrolling zu Ankern
- **Performance**: Optimierte Animationen

#### 5.3.2 Parallax Effects
- **Header-Bild**: Parallax-Effekt (falls gewünscht)
- **Performance**: Hardware-beschleunigte Animationen

#### 5.3.3 Hover-Effekte
- **Buttons**: Subtile Hover-Effekte
- **Links**: Konsistente Link-Styles

---

## 6. Content-Anforderungen

### 6.1 Text-Content

#### 6.1.1 Sprachen
- **Primär**: Deutsch
- **Zielgruppe**: Deutsche und internationale Gäste

#### 6.1.2 Content-Struktur
- **Sektionen**: Modulare Content-Blöcke
- **Wiederverwendbarkeit**: Komponenten-basierte Architektur
- **Wartbarkeit**: Zentrale Content-Verwaltung

### 6.2 Bilder und Medien

#### 6.2.1 Bildformate
- **Quelle**: JPG (aus Jekyll-Projekt)
- **Optimiert**: WebP, AVIF
- **Responsive**: Verschiedene Größen für verschiedene Geräte

#### 6.2.2 Bildkategorien
- **Loft-Bilder**: Wohnbereich, Küche, Schlafzimmer, Bad
- **Umgebung**: Kreuzberg, Engelbecken, St. Michael
- **Details**: Möbel, Einrichtung, Accessoires

### 6.3 Externe Integrationen

#### 6.3.1 Google Maps
- **Embedded Map**: Umgebungskarte
- **Responsive**: Mobile-optimierte Darstellung
- **Performance**: Lazy Loading

#### 6.3.2 Analytics
- **Google Analytics**: Tracking (falls vorhanden)
- **Performance Monitoring**: Core Web Vitals

---

## 7. Browser-Unterstützung

### 7.1 Unterstützte Browser
- **Chrome**: Letzte 2 Versionen
- **Firefox**: Letzte 2 Versionen
- **Safari**: Letzte 2 Versionen
- **Edge**: Letzte 2 Versionen

### 7.2 Mobile Browser
- **iOS Safari**: iOS 14+
- **Chrome Mobile**: Letzte 2 Versionen
- **Samsung Internet**: Letzte 2 Versionen

### 7.3 Progressive Enhancement
- **Basis-Funktionalität**: Funktioniert ohne JavaScript
- **Enhanced Features**: JavaScript für erweiterte Funktionen
- **Graceful Degradation**: Fallback für ältere Browser

---

## 8. Sicherheitsanforderungen

### 8.1 Content Security
- **HTTPS**: SSL-Verschlüsselung
- **CSP**: Content Security Policy
- **XSS Protection**: Cross-Site Scripting Schutz

### 8.2 Performance Security
- **Rate Limiting**: Schutz vor Missbrauch
- **DDoS Protection**: Schutz vor Angriffen
- **CDN**: Content Delivery Network

---

## 9. Deployment-Anforderungen

### 9.1 Hosting
- **Platform**: Vercel (empfohlen)
- **Domain**: ada36.de
- **SSL**: Automatische SSL-Zertifikate
- **CDN**: Global Edge Network

### 9.2 Build Process
- **Automatic Builds**: Bei Git-Push
- **Preview Deployments**: Für Testing
- **Production Deployments**: Manuelle Freigabe

### 9.3 Monitoring
- **Uptime Monitoring**: 99.9% Verfügbarkeit
- **Performance Monitoring**: Core Web Vitals
- **Error Tracking**: Automatische Fehlerbehandlung

---

## 10. Testing-Anforderungen

### 10.1 Funktional Testing
- **Navigation**: Alle Links funktional
- **Responsive Design**: Alle Breakpoints getestet
- **Images**: Alle Bilder laden korrekt
- **Forms**: Kontaktformulare funktional

### 10.2 Performance Testing
- **Ladezeiten**: Alle Seiten unter 3s
- **Core Web Vitals**: Alle Metriken im grünen Bereich
- **Mobile Performance**: Optimierte mobile Erfahrung

### 10.3 Cross-Browser Testing
- **Desktop**: Chrome, Firefox, Safari, Edge
- **Mobile**: iOS Safari, Chrome Mobile
- **Tablet**: iPad, Android Tablet

### 10.4 Accessibility Testing
- **WCAG 2.1**: Level AA Compliance
- **Keyboard Navigation**: Vollständige Tastatur-Navigation
- **Screen Reader**: Kompatibel mit Screen Readern

---

## 11. Wartungsanforderungen

### 11.1 Content Updates
- **Einfache Updates**: Content ohne Code-Änderungen
- **Bild-Uploads**: Einfache Bild-Uploads
- **Text-Änderungen**: Einfache Text-Bearbeitung

### 11.2 Technische Wartung
- **Dependency Updates**: Regelmäßige Updates
- **Security Patches**: Automatische Sicherheits-Updates
- **Performance Monitoring**: Kontinuierliche Überwachung

### 11.3 Backup und Recovery
- **Automatic Backups**: Tägliche Backups
- **Version Control**: Git-basierte Versionskontrolle
- **Disaster Recovery**: Wiederherstellungspläne

---

## 12. Erfolgsmessung

### 12.1 Performance-Metriken
- **Ladezeiten**: < 3s für alle Seiten
- **Core Web Vitals**: Alle Metriken im grünen Bereich
- **Mobile Performance**: Optimierte mobile Erfahrung

### 12.2 Qualitätsmetriken
- **Visuelle Übereinstimmung**: 100% mit Original
- **Funktionalität**: Alle Features funktional
- **Cross-Browser**: Funktioniert in allen unterstützten Browsern

### 12.3 Geschäftsmetriken
- **SEO-Ranking**: Beibehaltung oder Verbesserung
- **User Experience**: Verbesserte Benutzerfreundlichkeit
- **Wartbarkeit**: Einfachere Updates und Erweiterungen

---

## 13. Risiken und Mitigation

### 13.1 Technische Risiken
- **Komplexität der Migration**: Detaillierte Planung und schrittweise Umsetzung
- **Performance-Probleme**: Kontinuierliche Optimierung und Monitoring
- **Browser-Kompatibilität**: Umfassende Tests auf verschiedenen Browsern

### 13.2 Projektrisiken
- **Zeitplan**: Pufferzeiten einplanen
- **Qualität**: Kontinuierliche Qualitätskontrolle
- **Kommunikation**: Regelmäßige Updates und Feedback

### 13.3 Geschäftsrisiken
- **Downtime**: Minimale Downtime durch sorgfältige Planung
- **SEO-Impact**: SEO-Monitoring und Anpassungen
- **User Experience**: Umfassende Tests vor Go-Live

---

## 14. Timeline und Meilensteine

### 14.1 Phase 1: Setup und Planung (Woche 1)
- **Tag 1-2**: Next.js Setup und Konfiguration
- **Tag 3-4**: Grundlegende Projektstruktur
- **Tag 5**: Entwicklungsumgebung und Tools

### 14.2 Phase 2: Core Development (Woche 2-3)
- **Woche 2**: Komponenten-Entwicklung und Content-Migration
- **Woche 3**: Styling und Responsive Design

### 14.3 Phase 3: Testing und Optimization (Woche 4)
- **Tag 1-3**: Funktional Testing und Bug-Fixes
- **Tag 4-5**: Performance Optimization
- **Tag 6-7**: Cross-Browser Testing und Finale Anpassungen

### 14.4 Phase 4: Deployment (Woche 5)
- **Tag 1-2**: Deployment-Setup und Testing
- **Tag 3**: Go-Live und Monitoring
- **Tag 4-5**: Post-Launch Support und Optimierung

---

## 15. Erfolgskriterien

### 15.1 Technische Kriterien
- ✅ 100% visuelle Übereinstimmung mit Original
- ✅ Alle Funktionen funktional identisch
- ✅ Core Web Vitals im grünen Bereich
- ✅ Mobile-optimierte Darstellung
- ✅ Cross-Browser Kompatibilität

### 15.2 Geschäftliche Kriterien
- ✅ Beibehaltung der SEO-Rankings
- ✅ Verbesserte User Experience
- ✅ Einfachere Wartung und Updates
- ✅ Moderne Technologie-Basis für zukünftige Erweiterungen

---

**Dokument-Ende**

*Dieses PRD dient als Grundlage für die Entwicklung der ADA36 Next.js Website. Alle Anforderungen sind verbindlich und müssen bei der Umsetzung berücksichtigt werden.*
