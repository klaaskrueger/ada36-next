'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionI18n from '@/components/sections/SectionI18n';
import { navigationItems } from '@/data/navigation';
import { imageSections } from '@/data/sections';
import imagesTranslations from '@/data/translations/images.json';

export default function ImagesPage() {
  // Track which titles we've already shown to avoid duplicates
  const shownTitles = new Set<string>();

  return (
    <>
      <Header navigationItems={navigationItems} currentPath="/equipment" />
      <main className="page-content">
        <div className="container">
          {imageSections.map((section) => {
            const shouldShowTitle = !shownTitles.has(section.title);
            if (shouldShowTitle) {
              shownTitles.add(section.title);
            }
            
            return (
              <SectionI18n 
                key={section.sortingNumber} 
                section={section} 
                translations={imagesTranslations}
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
