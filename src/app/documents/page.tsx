'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PropertySummary from '@/components/documents/PropertySummary';
import { navigationItems } from '@/data/navigation';
import { documents, DocumentData } from '@/data/documents';
import { useTranslation } from '@/hooks/useTranslation';
import documentsTranslations from '@/data/translations/documents.json';

export default function DocumentsPage() {
  const { t } = useTranslation(documentsTranslations);

  const handleDocumentClick = (document: DocumentData) => {
    const filePath = `/assets/documents/${document.filename}`;
    window.open(filePath, '_blank');
  };


  return (
    <>
      <Header navigationItems={navigationItems} currentPath="/documents" />
      <main className="page-content documents-page">
        <div className="container">
          <div className="columns">
            <div className="content">
              <div className="port-text">
                <h1 className="title">{t('pageTitle')}</h1>
              </div>
            </div>
          </div>

          {/* Property Summary */}
          <PropertySummary />

          {/* Documents List */}
          <div className="documents-list">
            {documents.map((document) => (
              <div key={document.id} className="document-card">
                <div className="document-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2V8H20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 13H8" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 17H8" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 9H8" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="document-info">
                  <div className="document-title-row">
                    <h3 className="document-title">{document.title}</h3>
                    <span className="document-category">{t(`categories.${document.category}`)}</span>
                  </div>
                </div>
                <div className="document-actions">
                  <button 
                    className="document-button"
                    onClick={() => handleDocumentClick(document)}
                    title={t('documentInfo.view')}
                  >
                    {t('documentInfo.view')}
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
