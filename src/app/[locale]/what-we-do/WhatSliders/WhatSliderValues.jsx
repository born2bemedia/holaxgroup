'use client';
import React, { useState, useEffect } from 'react';
import { fadeInUp, fadeInDown } from '@/utils/animations';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useTranslations } from 'next-intl';

const WhatSliderValues = () => {
  const [isMobile, setIsMobile] = useState(false);

  const t = useTranslations('whatWeDo.sliders.values');

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
      image: '/images/what/what-icon-01.svg',
      title: t('0.title', { fallback: 'Honesty and Transparency' }),
      text: t('0.text', {
        fallback:
          'We uphold the highest standards of honesty and transparency in all our dealings.',
      }),
    },
    {
      image: '/images/what/what-icon-02.svg',
      title: t('1.title', { fallback: 'Ethical Practices' }),
      text: t('1.text', {
        fallback: 'Commitment to ethical practices in everything we do.',
      }),
    },
    {
      image: '/images/what/what-icon-03.svg',
      title: t('2.title', { fallback: 'High Standards' }),
      text: t('2.text', {
        fallback:
          'We strive for excellence in everything we do, consistently delivering high-quality services.',
      }),
    },
    {
      image: '/images/what/what-icon-04.svg',
      title: t('3.title', { fallback: 'Continuous Improvement' }),
      text: t('3.text', {
        fallback:
          'Embracing a culture of continuous improvement to enhance our services.',
      }),
    },
    {
      image: '/images/what/what-icon-05.svg',
      title: t('4.title', { fallback: 'Creativity' }),
      text: t('4.text', {
        fallback:
          'We embrace creativity and constant improvement to stay ahead in the industry.',
      }),
    },
    {
      image: '/images/what/what-icon-06.svg',
      title: t('5.title', { fallback: 'Forward-Thinking' }),
      text: t('5.text', {
        fallback: 'Commitment to forward-thinking and innovative solutions.',
      }),
    },
    {
      image: '/images/what/what-icon-07.svg',
      title: t('6.title', { fallback: 'Teamwork' }),
      text: t('6.text', {
        fallback:
          'We believe in the power of teamwork and building strong, cooperative relationships.',
      }),
    },
    {
      image: '/images/what/what-icon-08.svg',
      title: t('7.title', { fallback: 'Partnership' }),
      text: t('7.text', {
        fallback:
          'Fostering partnerships with clients to achieve mutual success.',
      }),
    },
    {
      image: '/images/what/what-icon-09.svg',
      title: t('8.title', { fallback: 'Client-Centric Focus' }),
      text: t('8.text', {
        fallback:
          'Our clients’ success is our success. We are dedicated to helping you achieve your business goals.',
      }),
    },
    {
      image: '/images/what/what-icon-10.svg',
      title: t('9.title', { fallback: 'Value Creation' }),
      text: t('9.text', {
        fallback:
          'Creating value for clients through our expertise and dedication.',
      }),
    },
  ];

  return (
    <section className="what-values__slider">
      {isMobile ? (
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          spaceBetween={15}
          loop={true}
          slidesPerView={1.5}
          className="what-values-slider"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="what-values-slider__item">
              <div className="what-values-slider__wrapper">
                <img
                  src={slide.image}
                  alt="icon"
                  className="what-values-slider__icon"
                />
                <h3 className="what-values-slider__title">{slide.title}</h3>
                <div className="what-values-slider__text">{slide.text}</div>
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
          className="what-values-slider"
        >
          {slides.map((slide, index) => (
            <div className="what-values-slider__item" key={index}>
              <div className="what-values-slider__wrapper">
                <img
                  src={slide.image}
                  alt="icon"
                  className="what-values-slider__icon"
                />
                <h3 className="what-values-slider__title">{slide.title}</h3>
                <div className="what-values-slider__text">{slide.text}</div>
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default WhatSliderValues;
