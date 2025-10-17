'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionEquipment from '@/components/sections/SectionEquipment';
import { navigationItems } from '@/data/navigation';
import { equipmentPageSections } from '@/data/sections';
import equipmentTranslations from '@/data/translations/equipment.json';

export default function ImagesPage() {
  // Track which titles we've already shown to avoid duplicates
  const shownTitles = new Set<string>();

  return (
    <>
      <Header navigationItems={navigationItems} currentPath="/equipment" />
      <main className="page-content">
        <div className="container">
          {equipmentPageSections.map((section) => {
            const shouldShowTitle = !shownTitles.has(section.title);
            if (shouldShowTitle) {
              shownTitles.add(section.title);
            }
            
            return (
              <SectionEquipment 
                key={section.sortingNumber} 
                section={section} 
                translations={equipmentTranslations}
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
