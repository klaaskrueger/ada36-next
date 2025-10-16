'use client';

import { SectionData } from '@/types';
import Image from 'next/image';
import { getImageConfig, getOptimizedSizes } from '@/data/imageConfig';
import { useTranslation } from '@/hooks/useTranslation';

type TranslationValue = string | { [key: string]: string | TranslationValue };
type TranslationsObject = Record<string, TranslationValue>;

interface SectionI18nProps {
  section: SectionData;
  translations: { de: TranslationsObject; en: TranslationsObject };
  className?: string;
  showTitle?: boolean;
}

const SectionI18n: React.FC<SectionI18nProps> = ({ section, translations, className = '', showTitle = true }) => {
  const { t } = useTranslation(translations);

  // Get translation key based on section title and sorting number
  const getTranslationKey = (title: string, sortingNumber: number) => {
    const keyMap: { [key: string]: string } = {
      // German titles for images page
      'Wohnbereich': 'sections.Wohnbereich',
      'Küche': 'sections.Küche',
      'Schlafbereich': 'sections.Schlafbereich',
      'Badezimmer': 'sections.Badezimmer',
      'Balkon': 'sections.Balkon',
      'Arbeitsbereich': 'sections.Arbeitsbereich',
      'Eingang': 'sections.Eingang',
      'Details': 'sections.Details',
      'Grundriss': 'sections.Grundriss',
      'Außenansicht': 'sections.Außenansicht',
      'Fahrstuhl': 'sections.Fahrstuhl',
      'Garten': 'sections.Garten',
      'Hausflur': 'sections.Hausflur',
      // English titles (fallback)
      'Living Area': 'sections.livingArea',
      'Living Area Night': 'sections.livingAreaNight',
      'Kitchen': 'sections.kitchen',
      'Sleeping Area': 'sections.sleepingArea',
      'Bathroom': 'sections.bathroom',
      'Bathroom Entrance': 'sections.bathroomEntrance',
      'Balcony': 'sections.balcony',
      'Working Area': 'sections.workingArea',
      'Entrance': 'sections.entrance',
      'Shelf Detail': 'sections.shelfDetail',
      'Cupboard': 'sections.cupboard',
      'Cat Statue': 'sections.catStatue',
      'Mirror': 'sections.mirror',
      'Floorplan': 'sections.floorplan',
      'Exterior View': 'sections.Außenansicht',
      'Elevator': 'sections.Fahrstuhl',
      'Garden': 'sections.Garten',
      'Hallway': 'sections.Hausflur',
      // Homepage sections
      'The Loft': 'sections.theLoft',
      'Living': 'sections.living',
      'Sleeping': 'sections.sleeping',
      'Working': 'sections.working',
      'Connector Doors': 'sections.connectorDoors',
      'Wardrobe': 'sections.wardrobe',
      'Connector': 'sections.connector',
      // Neighbourhood sections
      'Engelbecken': 'sections.engelbecken',
      'St. Michael Church': 'sections.stMichaelChurch',
      'Kunsthaus Bethanien': 'sections.kunsthausBethanien',
      'Markthalle 9': sortingNumber === 1 ? 'sections.markthalle9Innen' : 'sections.markthalle9Aussen',
      'Spree Strand': 'sections.spreeStrand',
      'Nebenstraße': 'sections.nebenstrasse',
      'Cold War History': 'sections.coldWarHistory',
      'Cold War History Text': 'sections.coldWarHistoryText',
      'Alexanderplatz': 'sections.alexanderplatz',
      '3 Schwestern': 'sections.dreiSchwestern',
      'Art Space': 'sections.kunstRaum',
      'Café in Köpenicker Straße': 'sections.cafeKoepenickerStr',
      'Church Bethanien': sortingNumber === 12 ? 'sections.kircheBethanien' : 'sections.kircheBethanien2',
    };

    return keyMap[title] || `sections.${title.toLowerCase().replace(/\s+/g, '')}`;
  };

  const translationKey = getTranslationKey(section.title, section.sortingNumber);
  const translatedTitle = t(`${translationKey}.title`) || section.title;
  const translatedText = t(`${translationKey}.text`) || section.text;

  return (
    <section className={`section ${className}`}>
      <div className="sect-anchor" id={`section-${section.sortingNumber}`}></div>
      <div className="columns">
        <div className="content">
          <div className="port-text">
            {showTitle && translatedTitle && <h1 className="title">{translatedTitle}</h1>}
            {translatedText && (
              <p 
                className="text" 
                dangerouslySetInnerHTML={{ __html: translatedText }} 
              />
            )}
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="content-image">
          {section.imagePath && (() => {
            const imageConfig = getImageConfig(section.imagePath);
            return (
              <Image
                src={section.imagePath}
                alt={section.imageText}
                className="section-image"
                width={imageConfig.width}
                height={imageConfig.height}
                priority={imageConfig.priority}
                sizes={getOptimizedSizes(imageConfig.aspectRatio)}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            );
          })()}
        </div>
      </div>
    </section>
  );
};

export default SectionI18n;
