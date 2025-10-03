import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { getImageConfig, getOptimizedSizes } from '@/data/imageConfig';
import { navigationItems } from '@/data/navigation';

export const metadata: Metadata = {
  title: 'Ada 36',
  description: 'Minimalist design 2-room-apartment at the center of Kreuzberg',
};

export default function HomePage() {
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
                  <h1 className="title">The Loft</h1>
                  <p className="text">
                    <b>Minimalist design 2-room-apartment at the center of Kreuzberg.</b><br /><br />
                    Floor-plan as open kitchen with dining table for 4 persons and access to the balcony, living area with a sleeping sofa and a desk. Bedroom with a double bed (160x200 cm) and a big wardrobe. Walk-in closet.<br />
                    Bath with tub.
                  </p>
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
                      alt="Ada 36 Studio"
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
                  <h1 className="title">Kitchen</h1>
                  <p className="text">
                    Floor-plan as open kitchen with dining table for 4 persons. Fitted kitchen in open plan kitchen.<br /><br />
                    Inventory: Oven, fridge, deep fridge, microwave, dish washer<br />
                    Secondary tub for filtered drinking water
                  </p>
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
                      alt="Ada 36 Studio - Kitchen"
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
                  <h1 className="title">Living Area</h1>
                  <p className="text">
                    Various views of the living area
                  </p>
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
                      alt="Ada 36 Studio - Living Area"
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
                  <h1 className="title">Sleeping Area</h1>
                  <p className="text">
                    Details of the sleeping area with double bed and wardrobe
                  </p>
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
                      alt="Ada 36 Studio - Sleeping Area"
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
                  <h1 className="title">Bathroom</h1>
                  <p className="text">
                    Modern bathroom with bathtub and contemporary design
                  </p>
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
                      alt="Ada 36 Studio - Bathroom"
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
                  <h1 className="title">Balcony</h1>
                  <p className="text">
                    Access to the balcony from the kitchen area
                  </p>
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
                      alt="Ada 36 Studio - Balcony"
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
