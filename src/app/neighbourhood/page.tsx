import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Section from '@/components/sections/Section';
import { navigationItems } from '@/data/navigation';
import { neighbourhoodSections } from '@/data/sections';

export const metadata: Metadata = {
  title: 'Neighbourhood',
  description: 'Area Map and nearby locations around Ada36 Studio in Kreuzberg, Berlin',
};

export default function NeighbourhoodPage() {
  return (
    <>
      <Header navigationItems={navigationItems} currentPath="/neighbourhood" />
      <main className="page-content">
        <div className="container">
          {neighbourhoodSections.map((section) => (
            <Section key={section.sortingNumber} section={section} />
          ))}
          
          {/* Google Maps Integration */}
          <div className="columns">
            <div className="content">
              <div className="port-text">
                <h1 className="title" id="google-map">Area Map</h1>
                <p className="text">Nearby Locations and Biking Trails</p>
                
                <iframe
                  src="https://www.google.com/maps/d/u/1/embed?mid=1-luuAvMrHfUhcdHFqkipzHM5d2c"
                  width="100%"
                  height="600"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Area Map - Ada36 Studio Neighbourhood"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
