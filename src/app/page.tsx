'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { getImageConfig, getOptimizedSizes } from '@/data/imageConfig';
import { navigationItems } from '@/data/navigation';
import { useTranslation } from '@/hooks/useTranslation';
import homepageTranslations from '@/data/translations/homepage.json';

export default function HomePage() {
  const { t } = useTranslation(homepageTranslations);

  return (
    <>
      <Header navigationItems={navigationItems} currentPath="/" />
      <main className="page-content">
        <div className="container">
          {/* The Loft */}
          <section className="section">
            <div className="sect-anchor" id="section-1"></div>
            <div className="columns">
              <div className="content">
                <div className="port-text">
                  <h1 className="title">{t('sections.theLoft.title')}</h1>
                  <p className="text" dangerouslySetInnerHTML={{ __html: t('sections.theLoft.text') }} />
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="content-image">
                {(() => {
                  const imageConfig = getImageConfig("/assets/images/fullsize/living-01.jpg");
                  return (
                    <Image
                      src="/assets/images/fullsize/living-01.jpg"
                      alt="ADA36 Studio - Minimalistisches Loft Wohnbereich mit modernem Design in Kreuzberg, Berlin"
                      className="section-image"
                      width={imageConfig.width}
                      height={imageConfig.height}
                      priority={imageConfig.priority}
                      sizes={getOptimizedSizes(imageConfig.aspectRatio)}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                  );
                })()}
              </div>
            </div>
          </section>

          {/* Kitchen */}
          <section className="section">
            <div className="sect-anchor" id="section-2"></div>
            <div className="columns">
              <div className="content">
                <div className="port-text">
                  <h1 className="title">{t('sections.kitchen.title')}</h1>
                  <p className="text" dangerouslySetInnerHTML={{ __html: t('sections.kitchen.text') }} />
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="content-image">
                {(() => {
                  const imageConfig = getImageConfig("/assets/images/fullsize/kitchen-03.jpg");
                  return (
                    <Image
                      src="/assets/images/fullsize/kitchen-03.jpg"
                      alt="ADA36 Studio - Moderne Küche mit offenem Grundriss und Esstisch für 4 Personen in Kreuzberg, Berlin"
                      className="section-image"
                      width={imageConfig.width}
                      height={imageConfig.height}
                      priority={imageConfig.priority}
                      sizes={getOptimizedSizes(imageConfig.aspectRatio)}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                  );
                })()}
              </div>
            </div>
          </section>

          {/* Living Area */}
          <section className="section">
            <div className="sect-anchor" id="section-3"></div>
            <div className="columns">
              <div className="content">
                <div className="port-text">
                  <h1 className="title">{t('sections.livingArea.title')}</h1>
                  <p className="text">{t('sections.livingArea.text')}</p>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="content-image">
                {(() => {
                  const imageConfig = getImageConfig("/assets/images/fullsize/living-02.jpg");
                  return (
                    <Image
                      src="/assets/images/fullsize/living-02.jpg"
                      alt="ADA36 Studio - Wohnbereich mit Schlafsofa und Arbeitsplatz im minimalistischen Design, Kreuzberg Berlin"
                      className="section-image"
                      width={imageConfig.width}
                      height={imageConfig.height}
                      priority={imageConfig.priority}
                      sizes={getOptimizedSizes(imageConfig.aspectRatio)}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                  );
                })()}
              </div>
            </div>
          </section>

          {/* Sleeping Area */}
          <section className="section">
            <div className="sect-anchor" id="section-4"></div>
            <div className="columns">
              <div className="content">
                <div className="port-text">
                  <h1 className="title">{t('sections.sleepingArea.title')}</h1>
                  <p className="text">{t('sections.sleepingArea.text')}</p>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="content-image">
                {(() => {
                  const imageConfig = getImageConfig("/assets/images/fullsize/sleeping-01.jpg");
                  return (
                    <Image
                      src="/assets/images/fullsize/sleeping-01.jpg"
                      alt="ADA36 Studio - Schlafbereich mit Doppelbett (160x200cm) und großem Kleiderschrank in Kreuzberg, Berlin"
                      className="section-image"
                      width={imageConfig.width}
                      height={imageConfig.height}
                      priority={imageConfig.priority}
                      sizes={getOptimizedSizes(imageConfig.aspectRatio)}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                  );
                })()}
              </div>
            </div>
          </section>

          {/* Bathroom */}
          <section className="section">
            <div className="sect-anchor" id="section-5"></div>
            <div className="columns">
              <div className="content">
                <div className="port-text">
                  <h1 className="title">{t('sections.bathroom.title')}</h1>
                  <p className="text">{t('sections.bathroom.text')}</p>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="content-image">
                {(() => {
                  const imageConfig = getImageConfig("/assets/images/fullsize/bathroom-01.jpg");
                  return (
                    <Image
                      src="/assets/images/fullsize/bathroom-01.jpg"
                      alt="ADA36 Studio - Modernes Badezimmer mit Badewanne und zeitgemäßem Design in Kreuzberg, Berlin"
                      className="section-image"
                      width={imageConfig.width}
                      height={imageConfig.height}
                      priority={imageConfig.priority}
                      sizes={getOptimizedSizes(imageConfig.aspectRatio)}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                  );
                })()}
              </div>
            </div>
          </section>

          {/* Balcony */}
          <section className="section">
            <div className="sect-anchor" id="section-6"></div>
            <div className="columns">
              <div className="content">
                <div className="port-text">
                  <h1 className="title">{t('sections.balcony.title')}</h1>
                  <p className="text">{t('sections.balcony.text')}</p>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="content-image">
                {(() => {
                  const imageConfig = getImageConfig("/assets/images/fullsize/balcony-01.jpg");
                  return (
                    <Image
                      src="/assets/images/fullsize/balcony-01.jpg"
                      alt="ADA36 Studio - Balkon mit Zugang von der Küche, perfekt für entspannte Momente in Kreuzberg, Berlin"
                      className="section-image"
                      width={imageConfig.width}
                      height={imageConfig.height}
                      priority={imageConfig.priority}
                      sizes={getOptimizedSizes(imageConfig.aspectRatio)}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                  );
                })()}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
