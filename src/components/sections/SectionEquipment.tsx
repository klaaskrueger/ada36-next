'use client';

import { SectionData } from '@/types';
import Image from 'next/image';
import { getImageConfig, getOptimizedSizes } from '@/data/imageConfig';
import { useTranslation } from '@/hooks/useTranslation';
import { useEffect, useState } from 'react';

type TranslationValue = string | { [key: string]: string | TranslationValue };
type TranslationsObject = Record<string, TranslationValue>;

interface SectionEquipmentProps {
  section: SectionData;
  translations: { de: TranslationsObject; en: TranslationsObject };
  className?: string;
  showTitle?: boolean;
}

const SectionEquipment: React.FC<SectionEquipmentProps> = ({ section, translations, className = '', showTitle = true }) => {
  const { t } = useTranslation(translations);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // EQUIPMENT-SPECIFIC translation key mapping
  const getEquipmentTranslationKey = (title: string, sortingNumber: number) => {
    const equipmentKeyMap: { [key: string]: string } = {
      // Equipment-specific sections with equipment prefix
      'Küche': 'sections.equipmentKüche',
      'Ausstattung': 'sections.equipmentAusstattung',
      'Schlafzimmer Kleiderschrank': 'sections.equipmentSchlafzimmerKleiderschrank',
      'Bad': 'sections.equipmentBad',
      'Außenansicht': 'sections.equipmentAußenansicht',
      'Fahrstuhl': 'sections.equipmentFahrstuhl',
      'Hausflur': 'sections.equipmentHausflur',
      'Garten': 'sections.equipmentGarten',
      // Equipment-specific mappings
      'Wohnbereich': 'sections.equipmentWohnbereich',
      'Schlafbereich': 'sections.equipmentSchlafbereich',
      'Badezimmer': 'sections.equipmentBadezimmer',
      'Balkon': 'sections.equipmentBalkon',
      'Arbeitsbereich': 'sections.equipmentArbeitsbereich',
      'Eingang': 'sections.equipmentEingang',
      'Details': 'sections.equipmentDetails',
      'Grundriss': 'sections.equipmentGrundriss',
      'Garten Detail': 'sections.equipmentGartenDetail',
      'Garten von oben': 'sections.equipmentGartenVonOben',
      'Gartenausblick': 'sections.equipmentGartenausblick',
      'Im Garten': 'sections.equipmentImGarten',
      'Ausblick Balkon': 'sections.equipmentAusblickBalkon',
      // Investment and condition sections
      'Investment': 'sections.equipmentInvestment',
      'Zustand': 'sections.equipmentZustand',
    };

    return equipmentKeyMap[title] || `sections.equipment${title.toLowerCase().replace(/\s+/g, '')}`;
  };

  const translationKey = getEquipmentTranslationKey(section.title, section.sortingNumber);
  const translatedTitle = isMounted ? t(`${translationKey}.title`) : '';
  const translatedText = isMounted ? t(`${translationKey}.text`) : '';

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

export default SectionEquipment;
