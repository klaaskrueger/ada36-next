'use client';

import { useTranslation } from '@/hooks/useTranslation';
import documentsTranslations from '@/data/translations/documents.json';

export default function PropertySummary() {
  const { t } = useTranslation(documentsTranslations);

  return (
    <div className="property-summary">
      <div className="summary-header">
        <h2 className="summary-title">{t('summary.title')}</h2>
      </div>
      
      <div className="detail-section">
        <h3 className="section-title">{t('summary.title')}</h3>
        <div className="detail-grid">
          <div className="detail-item">
            <span className="detail-label">{t('summary.price')}</span>
            <span className="detail-value">560.000 €</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">{t('summary.size')}</span>
            <span className="detail-value">72 m²</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">{t('summary.rooms')}</span>
            <span className="detail-value">2</span>
          </div>
        </div>
      </div>

      <div className="property-details">
        <div className="contact-address-section">
          <div className="detail-section contact-section">
            <h3 className="section-title">{t('summary.contact')}</h3>
            <p className="contact-info">Klaas Krüger / Eva Münchrath</p>
            <p className="contact-info">+49 1578 1616520</p>
            <p className="contact-info">klaas@klaaskrueger.de</p>
          </div>

          <div className="detail-section address-section">
            <h3 className="section-title">{t('summary.address')}</h3>
            <p className="contact-info">Adalbertstraße 36, 10999 Berlin</p>
          </div>
        </div>

        <div className="rooms-monthly-section">
          <div className="detail-section rooms-section">
            <h3 className="section-title">{t('summary.rooms')}</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <span className="detail-label">{t('summary.bedrooms')}</span>
                <span className="detail-value">1</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">{t('summary.bathrooms')}</span>
                <span className="detail-value">1</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">{t('summary.floor')}</span>
                <span className="detail-value">3. OG</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">{t('summary.condition')}</span>
                <span className="detail-value">{t('summary.modernized')}</span>
              </div>
            </div>
          </div>

          <div className="detail-section monthly-section">
            <h3 className="section-title">{t('summary.monthlyFee')}</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <span className="detail-label"></span>
                <span className="detail-value">427 €</span>
              </div>
            </div>
          </div>
        </div>

        <div className="detail-section">
          <h3 className="section-title">{t('summary.featuresTitle')}</h3>
          <div className="features-list">
            <span className="feature-tag">{t('summary.features.parkett')}</span>
            <span className="feature-tag">{t('summary.features.balcony')}</span>
            <span className="feature-tag">{t('summary.features.cellar')}</span>
            <span className="feature-tag">{t('summary.features.elevator')}</span>
            <span className="feature-tag">{t('summary.features.barrierFree')}</span>
            <span className="feature-tag">{t('summary.features.garden')}</span>
            <span className="feature-tag">{t('summary.features.fullBath')}</span>
            <span className="feature-tag">{t('summary.features.fittedKitchen')}</span>
          </div>
        </div>

        <div className="detail-section">
          <h3 className="section-title">{t('summary.infrastructureTitle')}</h3>
          <div className="features-list">
            <span className="feature-tag">{t('summary.infrastructure.pharmacy')}</span>
            <span className="feature-tag">{t('summary.infrastructure.generalPractitioner')}</span>
            <span className="feature-tag">{t('summary.infrastructure.primarySchool')}</span>
            <span className="feature-tag">{t('summary.infrastructure.realschule')}</span>
            <span className="feature-tag">{t('summary.infrastructure.comprehensiveSchool')}</span>
            <span className="feature-tag">{t('summary.infrastructure.groceryDiscount')}</span>
            <span className="feature-tag">{t('summary.infrastructure.kindergarten')}</span>
            <span className="feature-tag">{t('summary.infrastructure.hauptschule')}</span>
            <span className="feature-tag">{t('summary.infrastructure.gymnasium')}</span>
            <span className="feature-tag">{t('summary.infrastructure.publicTransport')}</span>
          </div>
        </div>

        <div className="detail-section">
          <h3 className="section-title">{t('summary.energy')}</h3>
          <div className="energy-details">
            <div className="energy-item">
              <span className="energy-label">{t('summary.energyClass')}</span>
              <span className="energy-value energy-class-d">D</span>
            </div>
            <div className="energy-item">
              <span className="energy-label">{t('summary.energyConsumption')}</span>
              <span className="energy-value">89,00 kWh/(m²a)</span>
            </div>
            <div className="energy-item">
              <span className="energy-label">{t('summary.heating')}</span>
              <span className="energy-value">{t('summary.centralHeating')}</span>
            </div>
            <div className="energy-item">
              <span className="energy-label">{t('summary.energySource')}</span>
              <span className="energy-value">{t('summary.gas')}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
