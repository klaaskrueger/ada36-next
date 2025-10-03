import { SectionData } from '@/types';
import Image from 'next/image';
import { getImageConfig, getOptimizedSizes } from '@/data/imageConfig';

interface SectionProps {
  section: SectionData;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ section, className = '' }) => {
  return (
    <section className={`section ${className}`}>
      <div className="sect-anchor" id={`section-${section.sortingNumber}`}></div>
      <div className="columns">
        <div className="content">
          <div className="port-text">
            {section.title && <h1 className="title">{section.title}</h1>}
            {section.text && (
              <p 
                className="text" 
                dangerouslySetInnerHTML={{ __html: section.text }} 
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

export default Section;
