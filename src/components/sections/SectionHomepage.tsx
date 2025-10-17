'use client';

import { SectionData } from '@/types';
import Image from 'next/image';
import { getImageConfig, getOptimizedSizes } from '@/data/imageConfig';
import { useTranslation } from '@/hooks/useTranslation';
import { useEffect, useState } from 'react';

type TranslationValue = string | { [key: string]: string | TranslationValue };
type TranslationsObject = Record<string, TranslationValue>;

interface SectionHomepageProps {
  section: SectionData;
  translations: { de: TranslationsObject; en: TranslationsObject };
  className?: string;
  showTitle?: boolean;
}

const SectionHomepage: React.FC<SectionHomepageProps> = ({ section, translations, className = '', showTitle = true }) => {
  const { t } = useTranslation(translations);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // HOMEPAGE-SPECIFIC translation key mapping
  const getHomepageTranslationKey = (title: string, sortingNumber: number) => {
    const homepageKeyMap: { [key: string]: string } = {
      // Homepage-specific sections
      'The Loft': 'sections.theLoft',
      'Ausführliche Beschreibung': 'sections.Ausführliche Beschreibung',
      'Wohnzimmer': 'sections.wohnzimmer',
      'Wohnzimmer Sofa': 'sections.wohnzimmersofa',
      'Wohnzimmer Esstisch': 'sections.wohnzimmeresstisch',
      'Wohnzimmer Ausblick': 'sections.wohnzimmerausblick',
      'Amerikanische Küche': 'sections.amerikanischeküche',
      'Schlafzimmer': 'sections.schlafzimmer',
      'Schlafzimmer Ausblick': 'sections.schlafzimmerausblick',
      'Begehbarer Kleiderschrank': 'sections.begehbarerkleiderschrank',
      'Schlafzimmer Kleiderschrank': 'sections.schlafzimmerkleiderschrank',
      'Flügeltüren': 'sections.flügeltüren',
      'Schlafzimmer Flügeltüren': 'sections.schlafzimmerflügeltüren',
      'Wohnzimmer Geschlossene Flügeltüren': 'sections.wohnzimmergeschlosseneflügeltüren',
      'Balkon': 'sections.Balkon',
      'Ausblick Balkon': 'sections.Ausblick Balkon',
      'Bad': 'sections.bad',
      'Grundriss 2025': 'sections.grundriss2025',
      'Garten': 'sections.Garten',
      'Garten Detail': 'sections.gartendetail',
      'Garten von oben': 'sections.gartenvonoben',
      'Gartenausblick': 'sections.gartenausblick',
      // Legacy mappings for backward compatibility
      'kitchen': 'sections.kitchen',
      'living': 'sections.living',
      'sleeping': 'sections.sleeping',
      'working': 'sections.working',
      'connectorDoors': 'sections.connectorDoors',
      'wardrobe': 'sections.wardrobe',
      'connector': 'sections.connector',
      'floorplan': 'sections.floorplan',
      'bathroom': 'sections.bathroom',
      'garden': 'sections.garden',
      'availability': 'sections.availability',
      'investment': 'sections.investment',
      'condition': 'sections.condition',
      'viewing': 'sections.viewing',
    };

    return homepageKeyMap[title] || `sections.${title.toLowerCase().replace(/\s+/g, '')}`;
  };

  const translationKey = getHomepageTranslationKey(section.title, section.sortingNumber);
  const translatedTitle = isMounted && section.title ? t(`${translationKey}.title`) : '';
  const translatedText = isMounted && section.text ? t(`${translationKey}.text`) : '';

  return (
    <section className={`section ${className}`}>
      <div className="sect-anchor" id={`section-${section.sortingNumber}`}></div>
      <div className="columns">
        <div className="content">
          <div className="port-text">
            {isMounted && showTitle && translatedTitle && <h3 className="title">{translatedTitle}</h3>}
            {isMounted && translatedText && typeof translatedText === 'string' && translatedText.trim() && (
              <div 
                className="text" 
                dangerouslySetInnerHTML={{ __html: translatedText }} 
              />
            )}
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="content-image">
          {section.imagePath && (
            <img
              src={section.imagePath}
              alt={section.imageText}
              className="section-image"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default SectionHomepage;
