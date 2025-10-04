'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionI18n from '@/components/sections/SectionI18n';
import { navigationItems } from '@/data/navigation';
import { imageSections } from '@/data/sections';
import imagesTranslations from '@/data/translations/images.json';

export default function ImagesPage() {

  return (
    <>
      <Header navigationItems={navigationItems} currentPath="/images" />
      <main className="page-content">
        <div className="container">
          {imageSections.map((section) => (
            <SectionI18n 
              key={section.sortingNumber} 
              section={section} 
              translations={imagesTranslations}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
