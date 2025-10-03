import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { navigationItems } from '@/data/navigation';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum - Legal information for Ada36 Studio',
};

export default function ImpressumPage() {
  return (
    <>
      <Header navigationItems={navigationItems} currentPath="/impressum" />
      <main className="page-content legal-page">
        <div className="container">
          <div className="content">
            <div className="port-text">
              <h1 className="title">Impressum</h1>
              <div className="text">
                <p>Klaas Krüger <br />
                Adalbertstr. 36 <br />
                10997 Berlin</p>

                <h4>Contact</h4>

                <p>Phone: +49 173 1654797 <br />
                E-Mail: <a href="mailto:klaas@klaaskrueger.de">klaas@klaaskrueger.de</a></p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
