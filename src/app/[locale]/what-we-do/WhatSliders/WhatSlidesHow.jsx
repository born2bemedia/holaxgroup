'use client';
import React, { useState, useEffect } from 'react';
import { fadeInUp } from '@/utils/animations';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useTranslations } from 'next-intl';

const WhatSlidesHow = () => {
  const [isMobile, setIsMobile] = useState(false);

  const t = useTranslations('whatWeDo.sliders.how');

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
      title: `${t('0.title.0', { fallback: 'Customised' })} <br/> ${t(
        '0.title.1',
        {
          fallback: 'Strategies',
        },
      )}`,
      list: `<span>${t('0.list.0', { fallback: 'Tailored Approach:' })}</span> ${t(
        '0.list.1',
        {
          fallback:
            'Unlike cookie-cutter solutions, we tailor our strategies to fit your needs.',
        },
      )} ; <span>${t('0.list.2', { fallback: 'Bespoke Solutions:' })}</span> ${t(
        '0.list.3',
        {
          fallback:
            'Creating bespoke solutions that align with your unique goals and challenges.',
        },
      )}`,
    },
    {
      number: '02',
      title: `${t('1.title.0', { fallback: 'Holistic' })} <br/> ${t(
        '1.title.1',
        {
          fallback: 'Approach',
        },
      )}`,
      list: `<span>${t('1.list.0', { fallback: 'Comprehensive Services:' })}</span> ${t(
        '1.list.1',
        {
          fallback:
            'We address all aspects of your business, from strategy and operations to marketing and finance.',
        },
      )} ; <span>${t('1.list.2', { fallback: 'Integrated Solutions:' })}</span> ${t(
        '1.list.3',
        {
          fallback:
            'Providing integrated solutions that ensure all parts of your business work harmoniously.',
        },
      )}`,
    },
    {
      number: '03',
      title: `${t('2.title.0', { fallback: 'Transparent' })} <br/> ${t(
        '2.title.1',
        {
          fallback: 'Communication',
        },
      )}`,
      list: `<span>${t('2.list.0', { fallback: 'Open Dialogue:' })}</span> ${t(
        '2.list.1',
        {
          fallback:
            'We maintain open and honest communication, ensuring you are informed immediately.',
        },
      )} ; <span>${t('2.list.2', { fallback: 'Regular Updates:' })}</span> ${t(
        '2.list.3',
        {
          fallback:
            'Providing regular updates and reports to keep you apprised of progress and results.',
        },
      )}`,
    },
    {
      number: '04',
      title: `${t('3.title.0', { fallback: 'Result-Oriented' })} <br/> ${t(
        '3.title.1',
        {
          fallback: 'Focus',
        },
      )}`,
      list: `<span>${t('3.list.0', { fallback: 'Measurable Outcomes:' })}</span> ${t(
        '3.list.1',
        {
          fallback:
            'Our primary goal is to deliver tangible, measurable results that drive your success.',
        },
      )} ; <span>${t('3.list.2', { fallback: 'Performance Tracking:' })}</span> ${t(
        '3.list.3',
        {
          fallback:
            'Using performance tracking to measure success and make data-driven decisions.',
        },
      )}`,
    },
  ];

  return (
    <section className="what-how__slider">
      {isMobile ? (
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          spaceBetween={15}
          loop={true}
          /*  slidesPerView={1.5} */
          className="what-how-slider"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="what-how-slider__item">
              <div className="what-how-slider__wrapper">
                <div className="what-how-slider__col-01">
                  <div className="what-how-slider__number">{slide.number}</div>
                  <h3
                    className="what-how-slider__title"
                    dangerouslySetInnerHTML={{ __html: slide.title }}
                  />
                </div>
                <div className="what-how-slider__col-02">
                  <ul className="what-how-slider__list">
                    {slide.list.split(';').map((item, idx) => (
                      <li
                        key={idx}
                        className="what-how-slider__list-item"
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
          className="what-how-slider"
        >
          {slides.map((slide, index) => (
            <div key={index} className="what-how-slider__wrapper">
              <div className="what-how-slider__col-01">
                <div className="what-how-slider__number">{slide.number}</div>
                <h3
                  className="what-how-slider__title"
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                />
              </div>
              <div className="what-how-slider__col-02">
                <ul className="what-how-slider__list">
                  {slide.list.split(';').map((item, idx) => (
                    <li
                      key={idx}
                      className="what-how-slider__list-item"
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

export default WhatSlidesHow;
