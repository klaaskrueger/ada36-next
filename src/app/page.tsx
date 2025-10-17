'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHomepage from '@/components/sections/SectionHomepage';
import { navigationItems } from '@/data/navigation';
import { homepageLoftSections } from '@/data/sections';
import homepageTranslations from '@/data/translations/homepage.json';

export default function HomePage() {
  return (
    <>
      <Header navigationItems={navigationItems} currentPath="/" />
      <main className="page-content">
        <div className="container">
          {/* Hero Video */}
          <section className="section hero-video">
            <div className="video-container">
              <iframe 
                src="https://player.vimeo.com/video/1127898937?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                width="1920" 
                height="1080" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                title="adalbertstr-movie"
                className="hero-video-iframe"
              ></iframe>
            </div>
          </section>

          {/* Homepage Loft Sections */}
          {homepageLoftSections.map((section) => (
            <SectionHomepage 
              key={section.sortingNumber} 
              section={section} 
              translations={homepageTranslations}
              showTitle={true}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
