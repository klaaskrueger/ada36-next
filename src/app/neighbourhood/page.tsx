'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionI18n from '@/components/sections/SectionI18n';
import { navigationItems } from '@/data/navigation';
import { neighbourhoodSections } from '@/data/sections';
import { useTranslation } from '@/hooks/useTranslation';
import neighbourhoodTranslations from '@/data/translations/neighbourhood.json';


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
          
          {/* Google Maps Integration */}
          <div className="columns">
            <div className="content">
              <div className="port-text">
                <h1 className="title" id="google-map">{t('areaMap.title')}</h1>
                <p className="text">{t('areaMap.text')}</p>
                
                <iframe
                  src="https://www.google.com/maps/d/u/1/embed?mid=1-luuAvMrHfUhcdHFqkipzHM5d2c"
                  width="100%"
                  height="600"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Area Map - Ada36 Studio Neighbourhood"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
