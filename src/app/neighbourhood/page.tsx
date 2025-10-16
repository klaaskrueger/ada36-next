import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionI18n from '@/components/sections/SectionI18n';
import { navigationItems } from '@/data/navigation';
import { neighbourhoodSections } from '@/data/sections';
import { useTranslation } from '@/hooks/useTranslation';
import neighbourhoodTranslations from '@/data/translations/neighbourhood.json';
import { generateMetadata, neighbourhoodSEOConfig } from '@/lib/seo';

export const metadata: Metadata = generateMetadata(neighbourhoodSEOConfig);


export default function NeighbourhoodPage() {
  const { t } = useTranslation(neighbourhoodTranslations);

  return (
    <>
      <Header navigationItems={navigationItems} currentPath="/neighbourhood" />
      <main className="page-content">
        <div className="container">
          {neighbourhoodSections.map((section) => (
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
