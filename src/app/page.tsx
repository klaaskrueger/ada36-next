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
                src="https://player.vimeo.com/video/1128258021?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1" 
                width="1920" 
                height="1080" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                title="Ada36"
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
