import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/sections/Section';
import { navigationItems } from '@/data/navigation';
import { homepageSections } from '@/data/sections';

export const metadata: Metadata = {
  title: 'Ada 36',
  description: 'Minimalist design 2-room-apartment at the center of Kreuzberg',
};

export default function HomePage() {
  return (
    <>
      <Header navigationItems={navigationItems} currentPath="/" />
      <main className="page-content">
        <div className="container">
          {homepageSections.map((section) => (
            <Section key={section.sortingNumber} section={section} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
