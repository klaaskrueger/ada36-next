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
}

const SectionI18n: React.FC<SectionI18nProps> = ({ section, translations, className = '' }) => {
  const { t } = useTranslation(translations);

  // Get translation key based on section title
  const getTranslationKey = (title: string) => {
    const keyMap: { [key: string]: string } = {
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
      'Engelbecken': 'sections.engelbecken',
      'St. Michael Church': 'sections.stMichaelChurch',
      'Cold War History': 'sections.coldWarHistory',
      'Cold War History Text': 'sections.coldWarHistoryText',
    };

    return keyMap[title] || `sections.${title.toLowerCase().replace(/\s+/g, '')}`;
  };

  const translationKey = getTranslationKey(section.title);
  const translatedTitle = t(`${translationKey}.title`) || section.title;
  const translatedText = t(`${translationKey}.text`) || section.text;

  return (
    <section className={`section ${className}`}>
      <div className="sect-anchor" id={`section-${section.sortingNumber}`}></div>
      <div className="columns">
        <div className="content">
          <div className="port-text">
            {translatedTitle && <h1 className="title">{translatedTitle}</h1>}
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
