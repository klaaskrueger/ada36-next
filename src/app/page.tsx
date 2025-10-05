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
                  const imageConfig = getImageConfig("/assets/images/fullsize/living-01.webp");
                  return (
                    <Image
                      src="/assets/images/fullsize/living-01.webp"
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
                  const imageConfig = getImageConfig("/assets/images/fullsize/kitchen-03.webp");
                  return (
                    <Image
                      src="/assets/images/fullsize/kitchen-03.webp"
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

          {/* Living */}
          <section className="section">
            <div className="sect-anchor" id="section-3"></div>
            <div className="columns">
              <div className="content">
                <div className="port-text">
                  <h1 className="title">{t('sections.living.title')}</h1>
                  <p className="text" dangerouslySetInnerHTML={{ __html: t('sections.living.text') }} />
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="content-image">
                {(() => {
                  const imageConfig = getImageConfig("/assets/images/fullsize/living-05.webp");
                  return (
                    <Image
                      src="/assets/images/fullsize/living-05.webp"
                      alt="ADA36 Studio - Wohnbereich mit Schlafsofa und Entertainment-System im minimalistischen Design, Kreuzberg Berlin"
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

          {/* Floorplan */}
          <section className="section">
            <div className="sect-anchor" id="section-6"></div>
            <div className="columns">
              <div className="content">
                <div className="port-text">
                  <h1 className="title">{t('sections.floorplan.title')}</h1>
                  <p className="text">{t('sections.floorplan.text')}</p>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="content-image">
                {(() => {
                  const imageConfig = getImageConfig("/assets/images/fullsize/floorplan.webp");
                  return (
                    <Image
                      src="/assets/images/fullsize/floorplan.webp"
                      alt="ADA36 Studio - Grundriss der 72m² Wohnung in Kreuzberg, Berlin"
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

          {/* Connector Doors */}
          <section className="section">
            <div className="sect-anchor" id="section-7"></div>
            <div className="columns">
              <div className="content">
                <div className="port-text">
                  <h1 className="title">{t('sections.connectorDoors.title')}</h1>
                  <p className="text">{t('sections.connectorDoors.text')}</p>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="content-image">
                {(() => {
                  const imageConfig = getImageConfig("/assets/images/fullsize/connector-doors-sleeping.webp");
                  return (
                    <Image
                      src="/assets/images/fullsize/connector-doors-sleeping.webp"
                      alt="ADA36 Studio - Verbindungstüren zwischen Schlaf- und Hauptbereich im minimalistischen Design, Kreuzberg Berlin"
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

          {/* Mirror */}
          <section className="section">
            <div className="sect-anchor" id="section-8"></div>
            <div className="columns">
              <div className="content">
                <div className="port-text">
                  <h1 className="title">{t('sections.mirror.title')}</h1>
                  <p className="text">{t('sections.mirror.text')}</p>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="content-image">
                {(() => {
                  const imageConfig = getImageConfig("/assets/images/fullsize/mirror.webp");
                  return (
                    <Image
                      src="/assets/images/fullsize/mirror.webp"
                      alt="ADA36 Studio - Spiegel am Eingang mit elegantem Design in Kreuzberg, Berlin"
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

          {/* Sleeping */}
          <section className="section">
            <div className="sect-anchor" id="section-10"></div>
            <div className="columns">
              <div className="content">
                <div className="port-text">
                  <h1 className="title">{t('sections.sleeping.title')}</h1>
                  <p className="text">{t('sections.sleeping.text')}</p>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="content-image">
                {(() => {
                  const imageConfig = getImageConfig("/assets/images/fullsize/sleeping-cupboard.webp");
                  return (
                    <Image
                      src="/assets/images/fullsize/sleeping-cupboard.webp"
                      alt="ADA36 Studio - Schlafzimmer mit großem Kleiderschrank und Zugang zum Walk-in Closet in Kreuzberg, Berlin"
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
            <div className="sect-anchor" id="section-11"></div>
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
                  const imageConfig = getImageConfig("/assets/images/fullsize/bathroom-entrance.webp");
                  return (
                    <Image
                      src="/assets/images/fullsize/bathroom-entrance.webp"
                      alt="ADA36 Studio - Badezimmer mit Waschmaschine und modernem Design in Kreuzberg, Berlin"
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
