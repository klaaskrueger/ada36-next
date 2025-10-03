import { SectionData } from '@/types';
import ResponsiveImage from '@/components/ui/ResponsiveImage';

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
          {section.imagePath && (
            <ResponsiveImage
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

export default Section;
