'use client';
import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import ArrowIcon from '@/icons/other/ArrowIcon';
import { useTranslations } from 'next-intl';

const ConsultingWhy = () => {
  const t = useTranslations('businessConsulting.why');

  return (
    <section className="consulting-why">
      <div className="_container">
        <div className="consulting-why__body">
          <h2>
            {t('title', { fallback: 'Why Choose Our Business Consultants?' })}
          </h2>
          <p>
            {t('text', {
              fallback:
                'Choosing the right business consultant is crucial to achieving your goals. Here’s why our consultants stand out:',
            })}
          </p>
          <Swiper
            spaceBetween={36}
            slidesPerView={2}
            autoplay={true}
            pagination={{ clickable: true }}
            loop={false}
            breakpoints={{
              // For mobile, show only 1 slide per view
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <div className="item">
                <span>01</span>
                <h3>
                  {t('slides.0.title', {
                    fallback: 'Expertise and Experience',
                  })}
                </h3>
                <p>
                  {t('slides.0.text', {
                    fallback:
                      'Our team comprises seasoned professionals with extensive industry experience. We bring a wealth of knowledge and proven strategies to address your unique business challenges.',
                  })}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <span>02</span>
                <h3>
                  {t('slides.1.title', { fallback: 'Tailored Solutions' })}
                </h3>
                <p>
                  {t('slides.1.text', {
                    fallback:
                      'We don’t believe in one-size-fits-all. Our consultants work closely with you to develop customised solutions that align with your specific needs, objectives, and industry dynamics.',
                  })}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <span>03</span>
                <h3>
                  {t('slides.2.title', { fallback: 'Innovative Approach' })}
                </h3>
                <p>
                  {t('slides.2.text', {
                    fallback:
                      'We stay ahead by embracing the latest trends and technologies. Our innovative approach ensures you receive cutting-edge solutions that drive sustainable growth and success.',
                  })}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <span>04</span>
                <h3>
                  {t('slides.3.title', {
                    fallback: 'Collaborative Partnership',
                  })}
                </h3>
                <p>
                  {t('slides.3.text', {
                    fallback:
                      'We view our clients as partners. Our collaborative approach fosters solid relationships and ensures we work together towards your business goals.',
                  })}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <span>05</span>
                <h3>
                  {t('slides.4.title', { fallback: 'Measurable Results' })}
                </h3>
                <p>
                  {t('slides.4.text', {
                    fallback:
                      'We are committed to delivering results. Our strategies are designed to provide measurable outcomes, helping you track progress and achieve your business objectives.',
                  })}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <span>06</span>
                <h3>
                  {t('slides.5.title', { fallback: 'Comprehensive Services' })}
                </h3>
                <p>
                  {t('slides.5.text', {
                    fallback:
                      'From strategic planning and operational improvement to financial consulting and leadership development, we offer various services to support all aspects of your business.',
                  })}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <span>07</span>
                <h3>
                  {t('slides.6.title', {
                    fallback: 'Commitment to Excellence',
                  })}
                </h3>
                <p>
                  {t('slides.6.text', {
                    fallback:
                      'We strive for excellence in everything we do. Our dedication to high standards and continuous improvement means receiving the best possible service.',
                  })}
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
          <Link href="/what-we-do">
            {t('button', { fallback: 'Learn more about our consultants' })}{' '}
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConsultingWhy;
