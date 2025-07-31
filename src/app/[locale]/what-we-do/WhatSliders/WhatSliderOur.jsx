'use client';
import React, { useState, useEffect } from 'react';
import { fadeInUp, fadeInDown } from '@/utils/animations';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useTranslations } from 'next-intl';

const WhatSliderOur = () => {
  const [isMobile, setIsMobile] = useState(false);

  const t = useTranslations('whatWeDo.sliders.our');

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
      title: t('0.title', { fallback: 'Advanced Analytics' }),
      text: t('0.text', {
        fallback:
          'Utilising sophisticated data analytics tools to gather insights on market trends, customer behaviours, and business performance.',
      }),
    },
    {
      title: t('1.title', { fallback: 'Predictive Modelling' }),
      text: t('1.text', {
        fallback:
          'Employing predictive modelling to forecast future trends and inform strategic decisions.',
      }),
    },
    {
      title: t('2.title', { fallback: 'Flexible Project Management' }),
      text: t('2.text', {
        fallback:
          'Adopting agile practices to ensure flexibility and rapid adaptation to changing market conditions.',
      }),
    },
    {
      title: t('3.title', { fallback: 'Iterative Development' }),
      text: t('3.text', {
        fallback:
          'Implementing solutions in iterative cycles to improve and adapt based on feedback and results continuously.',
      }),
    },
    {
      title: t('4.title', { fallback: 'User-Centric Approach' }),
      text: t('4.text', {
        fallback:
          'Focusing on the needs and experiences of end-users to drive innovative solutions.',
      }),
    },
    {
      title: t('5.title', { fallback: 'Prototyping and Testing' }),
      text: t('5.text', {
        fallback:
          'Rapid prototyping and testing of ideas to identify the most effective solutions.',
      }),
    },
    {
      title: t('6.title', { fallback: 'Efficiency and Value Creation' }),
      text: t('6.text', {
        fallback:
          'Focusing on eliminating waste and optimising processes to deliver maximum value.',
      }),
    },
    {
      title: t('7.title', { fallback: 'Continuous Improvement' }),
      text: t('7.text', {
        fallback:
          'Embracing a culture of continuous improvement to enhance efficiency and effectiveness.',
      }),
    },
    {
      title: t('8.title', { fallback: 'Industry Comparisons' }),
      text: t('8.text', {
        fallback:
          'Comparing your performance with industry standards to identify best practices and areas for improvement.',
      }),
    },
    {
      title: t('9.title', { fallback: 'Goal Setting' }),
      text: t('9.text', {
        fallback:
          'Setting ambitious yet achievable goals based on benchmark data.',
      }),
    },
  ];

  return (
    <section className="what-our__slider">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        spaceBetween={30}
        loop={true}
        breakpoints={{
          575: { slidesPerView: 1 },
          767: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
        /* slidesPerView={1.5} */
        className="what-our-slider"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="what-our-slider__item">
            <div className="what-our-slider__wrapper">
              <h3 className="what-our-slider__title">{slide.title}</h3>
              <div className="what-our-slider__text">{slide.text}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default WhatSliderOur;
