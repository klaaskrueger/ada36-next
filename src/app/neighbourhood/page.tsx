'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionI18n from '@/components/sections/SectionI18n';
import { navigationItems } from '@/data/navigation';
import { neighbourhoodPageSections } from '@/data/sections';
import neighbourhoodTranslations from '@/data/translations/neighbourhood.json';

export default function NeighbourhoodPage() {
  return (
    <>
      <Header navigationItems={navigationItems} currentPath="/neighbourhood" />
      <main className="page-content">
        <div className="container">
          {neighbourhoodPageSections.map((section) => (
            <SectionI18n 
              key={section.sortingNumber} 
              section={section} 
              translations={neighbourhoodTranslations}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}