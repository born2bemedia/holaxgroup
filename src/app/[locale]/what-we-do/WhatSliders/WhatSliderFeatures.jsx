'use client';
import React, { useState, useEffect } from 'react';
import { fadeInUp } from '@/utils/animations';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useTranslations } from 'next-intl';

const WhatSliderFeatudes = () => {
  const [isMobile, setIsMobile] = useState(false);

  const t = useTranslations('whatWeDo.sliders.features');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slides = [
    {
      number: '01',
      title: `${t('0.title.0', { fallback: 'Comprehensive' })} <br/> ${t(
        '0.title.1',
        {
          fallback: 'Solutions',
        },
      )}`,
      list: `<span>${t('0.list.0', { fallback: 'End-to-End Services:' })}</span> ${t(
        '0.list.1',
        {
          fallback:
            'From strategic planning to execution, we provide a complete suite of consulting services.',
        },
      )}; <span>${t('0.list.2', { fallback: 'Holistic Approach:' })}</span> ${t(
        '0.list.3',
        {
          fallback:
            'Addressing all aspects of your business, including operations, finance, marketing, and human resources.',
        },
      )}`,
    },
    {
      number: '02',
      title: `${t('1.title.0', { fallback: 'Industry' })} <br/> ${t(
        '1.title.1',
        {
          fallback: 'Expertise',
        },
      )}`,
      list: '<span>Diverse Experience:</span> Our consultants have extensive experience across various industries, bringing valuable insights and expertise. ; <span>Specialised Knowledge:</span> Leveraging industry-specific knowledge to provide tailored solutions.',
    },
    {
      number: '03',
      title: `${t('2.title.0', { fallback: 'Personalised' })} <br/> ${t(
        '2.title.1',
        {
          fallback: 'Attention',
        },
      )}`,
      list: `<span>${t('2.list.0', { fallback: 'Tailored Solutions:' })}</span> ${t(
        '2.list.1',
        {
          fallback:
            'We treat each client as unique, offering customised solutions that address specific challenges and goals.',
        },
      )}; <span>${t('2.list.2', { fallback: 'Dedicated Support:' })}</span> ${t(
        '2.list.3',
        {
          fallback:
            'Providing one-on-one support ensures your needs are met and exceeded.',
        },
      )}`,
    },
    {
      number: '04',
      title: `${t('3.title.0', { fallback: 'Innovative' })} <br/> ${t(
        '3.title.1',
        {
          fallback: 'Tools',
        },
      )}`,
      list: `<span>${t('3.list.0', { fallback: 'Cutting-Edge Technology:' })}</span> ${t(
        '3.list.1',
        {
          fallback:
            'Leveraging the latest tools and technologies to deliver effective and efficient solutions.',
        },
      )}; <span>${t('3.list.2', { fallback: 'Digital Transformation:' })}</span> ${t(
        '3.list.3',
        {
          fallback:
            'Helping businesses embrace digital transformation to stay competitive in the digital age.',
        },
      )}`,
    },
  ];

  return (
    <section className="what-features__slider">
      {isMobile ? (
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          spaceBetween={15}
          loop={true}
          className="what-features-slider"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="what-features-slider__item">
              <div className="what-features-slider__wrapper">
                <div className="what-features-slider__col-01">
                  <div className="what-features-slider__number">
                    {slide.number}
                  </div>
                  <h3
                    className="what-features-slider__title"
                    dangerouslySetInnerHTML={{ __html: slide.title }}
                  />
                </div>
                <div className="what-features-slider__col-02">
                  <ul className="what-features-slider__list">
                    {slide.list.split(';').map((item, idx) => (
                      <li
                        key={idx}
                        className="what-features-slider__list-item"
                        dangerouslySetInnerHTML={{ __html: item.trim() }}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="what-features-slider"
        >
          {slides.map((slide, index) => (
            <div key={index} className="what-features-slider__wrapper">
              <div className="what-features-slider__col-01">
                <div className="what-features-slider__number">
                  {slide.number}
                </div>
                <h3
                  className="what-features-slider__title"
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                />
              </div>
              <div className="what-features-slider__col-02">
                <ul className="what-features-slider__list">
                  {slide.list.split(';').map((item, idx) => (
                    <li
                      key={idx}
                      className="what-features-slider__list-item"
                      dangerouslySetInnerHTML={{ __html: item.trim() }}
                    />
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default WhatSliderFeatudes;
