'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { navigationItems } from '@/data/navigation';
import { useTranslation } from '@/hooks/useTranslation';
import guidesTranslations from '@/data/translations/guides.json';


export default function GuidesPage() {
  const { t } = useTranslation(guidesTranslations);

  return (
    <>
      <Header navigationItems={navigationItems} currentPath="/guides" />
      <main className="page-content">
        <div className="container">
          <div className="content">
            <div className="port-text">
              <h1 className="title">{t('pageTitle')}</h1>
              
              <div className="text">
                <h2>{t('sections.address.title')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('sections.address.text') }} />

                <h2>{t('sections.smoking.title')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('sections.smoking.text') }} />

                <h2>{t('sections.bank.title')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('sections.bank.text') }} />

                <h2>{t('sections.neighbours.title')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('sections.neighbours.text') }} />

                <h2>{t('sections.ventilation.title')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('sections.ventilation.text') }} />

                <h2>{t('sections.cleaning.title')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('sections.cleaning.text') }} />

                <h2>{t('sections.emergency.title')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('sections.emergency.text') }} />

                <h2>{t('sections.entranceKeys.title')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('sections.entranceKeys.text') }} />

                <h2>{t('sections.food.title')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('sections.food.text') }} />

                <h2>{t('sections.parkingPermit.title')}</h2>
                <h3>{t('sections.parkingPermit.subtitle')}</h3>
                <p dangerouslySetInnerHTML={{ __html: t('sections.parkingPermit.text') }} />

                <h2>{t('sections.furniture.title')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('sections.furniture.text') }} />

                <h2>{t('sections.internetWifi.title')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('sections.internetWifi.text') }} />

                <h2>{t('sections.jogging.title')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('sections.jogging.text') }} />

                <h2>{t('sections.manuals.title')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('sections.manuals.text') }} />

                <h3>{t('sections.heatingSwitches.title')}</h3>
                <p dangerouslySetInnerHTML={{ __html: t('sections.heatingSwitches.text') }} />

                <h3>{t('sections.coffeeMachine.title')}</h3>
                <p dangerouslySetInnerHTML={{ __html: t('sections.coffeeMachine.text') }} />

                <h2>{t('sections.pets.title')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('sections.pets.text') }} />

                <h2>{t('sections.publicTransport.title')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('sections.publicTransport.text') }} />

                <h2>{t('sections.restaurants.title')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('sections.restaurants.text') }} />

                <h2>{t('sections.separationOfWaste.title')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('sections.separationOfWaste.text') }} />

                <h2>{t('sections.taxi.title')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('sections.taxi.text') }} />

                <h2>{t('sections.washing.title')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('sections.washing.text') }} />

                <p dangerouslySetInnerHTML={{ __html: t('sections.closing.text') }} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}