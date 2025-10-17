'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionI18n from '@/components/sections/SectionI18n';
import { navigationItems } from '@/data/navigation';
import { gardenPageSections } from '@/data/sections';
import gardenTranslations from '@/data/translations/garden.json';

export default function GardenPage() {
  // Track which titles we've already shown to avoid duplicates
  const shownTitles = new Set<string>();

  return (
    <>
      <Header navigationItems={navigationItems} currentPath="/garden" />
      <main className="page-content">
        <div className="container">
          {gardenPageSections.map((section) => {
            const shouldShowTitle = !shownTitles.has(section.title);
            if (shouldShowTitle) {
              shownTitles.add(section.title);
            }
            
            return (
              <SectionI18n 
                key={section.sortingNumber} 
                section={section} 
                translations={gardenTranslations}
                showTitle={shouldShowTitle}
              />
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
