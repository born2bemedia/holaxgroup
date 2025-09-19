'use client';
import '@/styles/home.scss';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeInUp } from '@/utils/animations';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import ArrowIcon from '@/icons/other/ArrowIcon';
import { useTranslations } from 'next-intl';

const HomeTab1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const t = useTranslations('home.services.businessConsulting');

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
      title: t('slides.0.title', { fallback: 'Strategic Planning' }),
      text: t('slides.0.text', {
        fallback:
          'Develop a clear, actionable roadmap to achieve your business goals. Our strategic planning services help you define your vision, set realistic targets, and outline the steps needed to reach them.',
      }),
    },
    {
      number: '02.',
      title: t('slides.1.title', { fallback: 'Operational Improvement' }),
      text: t('slides.1.text', {
        fallback:
          'Optimise your business processes for maximum efficiency and effectiveness. We identify bottlenecks, streamline workflows, and implement best practices to enhance your operations.',
      }),
    },
    {
      number: '03.',
      title: t('slides.2.title', { fallback: 'Financial Consulting' }),
      text: t('slides.2.text', {
        fallback:
          'Strengthen your financial health with our expert advice. From budgeting and forecasting to financial analysis and risk management, we provide the insights you need to make informed decisions.',
      }),
    },
    {
      number: '04.',
      title: t('slides.3.title', { fallback: 'Market Analysis' }),
      text: t('slides.3.text', {
        fallback:
          'Gain a competitive edge with in-depth market research and analysis. We help you understand market trends, identify opportunities, and develop strategies to capture new markets.',
      }),
    },
    {
      number: '05.',
      title: t('slides.4.title', {
        fallback: 'Business Process Reengineering',
      }),
      text: t('slides.4.text', {
        fallback:
          'Transform your business processes to achieve significant performance improvements. We help you redesign workflows, eliminate inefficiencies, and leverage technology to drive growth.',
      }),
    },
    {
      number: '06.',
      title: t('slides.5.title', { fallback: 'Change Management' }),
      text: t('slides.5.text', {
        fallback:
          'Our change management services help you navigate organisational changes smoothly and effectively. They also ensure your team is aligned and engaged.',
      }),
    },
    {
      number: '07.',
      title: t('slides.6.title', { fallback: 'Performance Management' }),
      text: t('slides.6.text', {
        fallback:
          'Enhance your team’s performance with our comprehensive management solutions. We provide tools and strategies to set goals, measure progress, and improve productivity.',
      }),
    },
    {
      number: '08.',
      title: t('slides.7.title', { fallback: 'Risk Management' }),
      text: t('slides.7.text', {
        fallback:
          'Identify, assess, and mitigate risks to protect your business. Our risk management services help you develop robust strategies to manage potential threats and ensure business continuity.',
      }),
    },
    {
      number: '09.',
      title: t('slides.8.title', { fallback: 'Leadership Development' }),
      text: t('slides.8.text', {
        fallback:
          'Cultivate strong leaders within your organisation. We offer customised leadership development programs that equip your team with the skills and confidence to lead effectively.',
      }),
    },
    {
      number: '10.',
      title: t('slides.9.title', { fallback: 'Innovation & Growth Strategy' }),
      text: t('slides.9.text', {
        fallback:
          'Foster a culture of innovation and drive sustainable growth. Our experts work with you to identify new opportunities, create innovative solutions, and implement growth strategies that keep you ahead of the competition.',
      }),
    },
  ];

  return (
    <div className="tabs-home__wrapper tab1">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="tabs-home__label"
      >
        {t('title', { fallback: 'Business Consulting' })}
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

export default HomeTab1;
