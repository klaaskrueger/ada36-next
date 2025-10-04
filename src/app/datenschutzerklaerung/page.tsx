'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { navigationItems } from '@/data/navigation';
import { useTranslation } from '@/hooks/useTranslation';
import legalTranslations from '@/data/translations/legal.json';


export default function DatenschutzerklaerungPage() {
  const { t } = useTranslation(legalTranslations);

  return (
    <>
      <Header navigationItems={navigationItems} currentPath="/datenschutzerklaerung" />
      <main className="page-content legal-page">
        <div className="container">
          <div className="content">
            <div className="port-text">
              <h1 className="title">{t('datenschutz.title')}</h1>
              <div className="text">
                <p>{t('datenschutz.content.intro')}</p>

                <p>{t('datenschutz.content.processing')}</p>

                <p>{t('datenschutz.content.security')}</p>

                <h4>{t('datenschutz.content.definitions.title')}</h4>

                <p>{t('datenschutz.content.definitions.text')}</p>

                <p>{t('datenschutz.content.definitions.subtitle')}</p>

                <h4>{t('datenschutz.content.definitions.personalData.title')}</h4>

                <p>{t('datenschutz.content.definitions.personalData.text')}</p>

                <h4>{t('datenschutz.content.definitions.dataSubject.title')}</h4>

                <p>{t('datenschutz.content.definitions.dataSubject.text')}</p>

                <h4>{t('datenschutz.content.definitions.processing.title')}</h4>

                <p>{t('datenschutz.content.definitions.processing.text')}</p>

                <h4>{t('datenschutz.content.controller.title')}</h4>

                <p>{t('datenschutz.content.controller.text')}</p>

                <p>{t('datenschutz.content.controller.details.name')}</p>

                <p>{t('datenschutz.content.controller.details.address')}</p>

                <p>{t('datenschutz.content.controller.details.city')}</p>

                <p>{t('datenschutz.content.controller.details.country')}</p>

                <p>{t('datenschutz.content.controller.details.phone')}</p>

                <p>{t('datenschutz.content.controller.details.email')}</p>

                <p>{t('datenschutz.content.controller.details.website')}</p>

                <h4>{t('datenschutz.content.cookies.title')}</h4>

                <p>{t('datenschutz.content.cookies.text1')}</p>

                <p>{t('datenschutz.content.cookies.text2')}</p>

                <p>{t('datenschutz.content.cookies.text3')}</p>

                <p>{t('datenschutz.content.cookies.text4')}</p>

                <p>{t('datenschutz.content.cookies.text5')}</p>

                <p><em>Weitere Abschnitte der Datenschutzerklärung sind verfügbar und werden bei Bedarf ergänzt.</em></p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}