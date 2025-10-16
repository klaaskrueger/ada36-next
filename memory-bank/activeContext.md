# Active Context: ADA36 Next.js Migration

## Aktueller Fokus
**Phase 6: Image Update 2025** - Vollständige Aktualisierung der Website-Bilder mit neuen, hochwertigen Fotos von 2025. Ersetzung aller veralteten Innenaufnahmen und Integration neuer Textinhalte.

## Letzte Aktivitäten
- ✅ Vollständige Analyse des ADA36 Jekyll-Projekts
- ✅ Identifizierung aller Seiten und Komponenten
- ✅ Analyse der bestehenden Struktur und Inhalte
- ✅ Erstellung der Memory Bank Dokumentation
- ✅ Erstellung des PRD-Dokuments
- ✅ Next.js Projekt Setup und Konfiguration
- ✅ Komponenten-Architektur implementiert
- ✅ Content-Migration abgeschlossen
- ✅ Styling-Migration (SCSS zu Tailwind CSS)
- ✅ Bilder und Assets migriert
- ✅ Navigation und Layout implementiert
- ✅ Alle Seiten erstellt (Homepage, Images, Neighbourhood, Guides, Impressum, Datenschutz)
- ✅ Build erfolgreich getestet
- ✅ Development Server läuft
- ✅ **SEO-Optimierung vollständig implementiert**
  - Meta-Tags für alle Seiten optimiert
  - Structured Data (JSON-LD) implementiert
  - Sitemap.xml und robots.txt erstellt
  - Alt-Texte für alle Bilder optimiert
  - Open Graph und Twitter Cards konfiguriert
  - Keyword-Strategie implementiert
  - SEO-Dokumentation erstellt
- ✅ **Internationalisierung (i18n) vollständig implementiert**
  - JSON-basierte Übersetzungen für alle Seiten erstellt
  - Language Context Provider für globale Sprachverwaltung
  - useTranslation Hook für einfache Übersetzungsverwendung
  - Automatische Browser-Spracherkennung implementiert
  - Language Switcher Komponente erstellt
  - Alle Seiten auf i18n umgestellt (Homepage, Images, Neighbourhood, Guides, Impressum, Datenschutz)
  - Navigation und Header mehrsprachig
  - Fallback-System für fehlende Übersetzungen

## Erkannte Projektstruktur
### Seiten
1. **Homepage** (`/`) - Loft-Übersicht mit Sektionen
2. **Images** (`/images`) - Bildergalerie
3. **Neighbourhood** (`/neighbourhood`) - Umgebungskarte
4. **Guides** (`/guides`) - Gästeanleitung
5. **Rechtliche Seiten** - Impressum, Datenschutz

### Jekyll Sections (zu migrieren)
- **Homepage Sections**: 22 Sektionen (loft, kitchen, living, etc.)
- **Image Sections**: 20+ Bildersektionen
- **Neighbourhood Sections**: 4 Umgebungssektionen
- **Assets**: 40+ Bilder, CSS, JavaScript

### Technische Erkenntnisse
- **Styling**: SCSS mit Custom CSS, Google Fonts (Lato)
- **JavaScript**: jQuery, Parallax, Smooth Scroll, Lazy Loading
- **Images**: Jekyll Responsive Images Plugin
- **Navigation**: Mobile-responsive mit Hamburger Menu
- **Layout**: Column-basierte Layout-Struktur

## Nächste Schritte
1. **Image Processing** - Neue 2025 Bilder analysieren und zu WebP konvertieren
2. **Image Replacement** - Veraltete Innenaufnahmen durch neue Fotos ersetzen
3. **Content Integration** - Neue Textinhalte in i18n-System integrieren
4. **Configuration Update** - imageConfig.ts mit neuen Bilddimensionen aktualisieren
5. **Testing & Optimization** - Performance und responsive Darstellung testen
6. **Deployment** - Aktualisierte Website deployen

## Aktive Entscheidungen
- **Framework**: Next.js 14+ mit App Router
- **Styling**: Tailwind CSS + Custom CSS
- **Language**: TypeScript
- **Images**: Next.js Image Component
- **Hosting**: Vercel (empfohlen)
- **Internationalisierung**: JSON-basierte Übersetzungen mit React Context
- **Spracherkennung**: Automatische Browser-Spracherkennung mit localStorage Persistierung
- **Fallback-System**: Deutsche Übersetzungen als Fallback für fehlende englische Texte
- **Deployment-Workflow**: Bei Deploy-Befehl automatisch Git Commit und Push ausführen

## Offene Fragen
- Welche neuen Bilder sollen als Priority-Loading markiert werden?
- Sollen alle neuen Haus-Außenaufnahmen integriert werden?
- Wie sollen die neuen Textinhalte in bestehende Sektionen integriert werden?

## Risiken und Herausforderungen
- **Komplexität**: Viele Jekyll-spezifische Features zu migrieren
- **Styling**: Exakte Replikation des aktuellen Designs
- **Images**: Responsive Image Handling
- **SEO**: Alle bestehenden SEO-Features beibehalten

## Erfolgsmessung
- 100% visuelle Übereinstimmung mit Original
- Alle Funktionen funktional identisch
- Verbesserte Performance-Metriken
- Mobile-optimierte Darstellung
