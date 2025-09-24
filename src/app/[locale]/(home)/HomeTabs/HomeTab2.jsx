'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Оставляем только один импорт
import Link from 'next/link';
import { fadeInUp } from '@/utils/animations';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import ArrowIcon from '@/icons/other/ArrowIcon';
import { useTranslations } from 'next-intl';

const HomeTab2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const t = useTranslations('home.services.marketingConsulting');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Слайды
  const slides = [
    {
      number: '01.',
      title: t('slides.0.title', { fallback: 'Brand Strategy Development' }),
      text: t('slides.0.text', {
        fallback:
          'Craft a powerful brand identity that resonates with your target audience. We help you define your brand’s mission, vision, and values, creating a cohesive strategy differentiating you in the marketplace.',
      }),
    },
    {
      number: '02.',
      title: t('slides.1.title', { fallback: 'Digital Marketing Strategy' }),
      text: t('slides.1.text', {
        fallback:
          'Maximise your online impact with a comprehensive digital marketing strategy. We provide insights and tactics across SEO, SEM, social media, and email marketing to boost your online presence and engagement.',
      }),
    },
    {
      number: '03.',
      title: t('slides.2.title', { fallback: 'Content Marketing' }),
      text: t('slides.2.text', {
        fallback:
          'Engage your audience with compelling, high-quality content. Our content marketing services include content creation, strategy development, and distribution to ensure your message reaches and resonates with your target audience.',
      }),
    },
    {
      number: '04.',
      title: t('slides.3.title', { fallback: 'Social Media Management' }),
      text: t('slides.3.text', {
        fallback:
          'Build a solid social media presence that drives engagement and growth. We manage your social media channels, creating and executing campaigns that connect with your audience and enhance your brand’s visibility.',
      }),
    },
    {
      number: '05.',
      title: t('slides.4.title', { fallback: 'SEO & SEM' }),
      text: t('slides.4.text', {
        fallback:
          'Improve your website’s visibility and attract more traffic through expert SEO and SEM strategies. We optimise your website and manage paid search campaigns to ensure you rank higher and reach the right audience.',
      }),
    },
    {
      number: '06.',
      title: t('slides.5.title', { fallback: 'Email Marketing' }),
      text: t('slides.5.text', {
        fallback:
          'Develop and execute effective email marketing campaigns that convert. From crafting compelling newsletters to automated email sequences, we ensure your email marketing efforts drive results.',
      }),
    },
    {
      number: '07.',
      title: t('slides.6.title', { fallback: 'Market Research & Analysis' }),
      text: t('slides.6.text', {
        fallback:
          'Understand your market and stay ahead of the competition with in-depth market research. We provide actionable insights into market trends, customer behaviour, and competitive landscape to inform your marketing strategies.',
      }),
    },
    {
      number: '08.',
      title: t('slides.7.title', { fallback: 'Campaign Management' }),
      text: t('slides.7.text', {
        fallback:
          'Plan and execute targeted marketing campaigns that deliver results. Our campaign management services cover everything from strategy development to execution and analysis, ensuring your campaigns achieve their objectives.',
      }),
    },
    {
      number: '09.',
      title: t('slides.8.title', { fallback: 'Influencer Marketing' }),
      text: t('slides.8.text', {
        fallback:
          'Leverage the power of influencers to amplify your brand’s reach. We connect you with the right influencers and manage partnerships to create authentic and impactful marketing campaigns.',
      }),
    },
    {
      number: '10.',
      title: t('slides.9.title', { fallback: 'Public Relations' }),
      text: t('slides.9.text', {
        fallback:
          'Build and maintain a positive public image with our strategic public relations services. We help you craft press releases, manage media relations, and handle crisis communication to keep your brand in a favourable light.',
      }),
    },
  ];

  return (
    <div className="tabs-home__wrapper tab2">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="tabs-home__label"
      >
        {t('title', { fallback: 'Marketing Consulting' })}
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text"
      >
        {t('description', {
          fallback:
            'Elevate your brand and connect with your audience through our dynamic marketing consulting services. Whether you want to enhance your digital presence, create compelling content, or drive targeted campaigns, our tailored solutions deliver measurable results and propel your brand forward.',
        })}
      </motion.div>
      <div className="home-services__slider">
        {isMobile ? (
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            spaceBetween={15}
            loop={true}
            className="home-services-slider"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="home-services-slider__item">
                  <div className="home-services-slider__wrapper">
                    <div className="home-services-slider__top">
                      <div className="home-services-slider__number">
                        {slide.number}
                      </div>
                      <h3
                        className="home-services-slider__title"
                        dangerouslySetInnerHTML={{ __html: slide.title }}
                      />
                    </div>
                    <div className="home-services-slider__text">
                      {slide.text}
                    </div>
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
            custom={0.2}
            className="home-services-slider"
          >
            {slides.map((slide, index) => (
              <div className="home-services-slider__item" key={index}>
                <div className="home-services-slider__wrapper">
                  <div className="home-services-slider__top">
                    <div className="home-services-slider__number">
                      {slide.number}
                    </div>
                    <h3
                      className="home-services-slider__title"
                      dangerouslySetInnerHTML={{ __html: slide.title }}
                    />
                  </div>
                  <div className="home-services-slider__text">{slide.text}</div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      <div className="tabs-home__bottom">
        <div className="tabs-home__arrow">
          <img src="/images/home/arrow-long-01.svg" alt="arrow" />
        </div>
        <Link href="/business-consulting" className="tabs-home__link">
          {t('button', { fallback: 'Improve operations now' })}
          <ArrowIcon />
        </Link>
      </div>
    </div>
  );
};

export default HomeTab2;
