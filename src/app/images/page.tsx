import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/sections/Section';
import { navigationItems } from '@/data/navigation';
import { imageSections } from '@/data/sections';

export const metadata: Metadata = {
  title: 'Images',
  description: 'Gallery of Ada36 Studio - Images of the loft apartment in Kreuzberg, Berlin',
};

export default function ImagesPage() {
  return (
    <>
      <Header navigationItems={navigationItems} currentPath="/images" />
      <main className="page-content">
        <div className="container">
          {imageSections.map((section) => (
            <Section key={section.sortingNumber} section={section} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
