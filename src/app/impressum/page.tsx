'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { navigationItems } from '@/data/navigation';
import { useTranslation } from '@/hooks/useTranslation';
import legalTranslations from '@/data/translations/legal.json';


export default function ImpressumPage() {
  const { t } = useTranslation(legalTranslations);

  return (
    <>
      <Header navigationItems={navigationItems} currentPath="/impressum" />
      <main className="page-content legal-page">
        <div className="container">
          <div className="content">
            <div className="port-text">
              <h1 className="title">{t('impressum.title')}</h1>
              <div className="text">
                <p>{t('impressum.content.name')} <br />
                {t('impressum.content.address')} <br />
                {t('impressum.content.city')}</p>

                <h4>{t('impressum.content.contact')}</h4>

                <p>{t('impressum.content.phone')} <br />
                {t('impressum.content.email')} <a href="mailto:ada36loft@gmail.com">ada36loft@gmail.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
