'use client';
import React, { useState, useEffect } from 'react';
import '@/styles/home/home.scss';
import { fadeInUp } from '@/utils/animations';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const HomeAbout = () => {
  const t = useTranslations('home.about');

  return (
    <section className="home-about">
      <div className="home-about__container _container">
        <div className="home-about__body">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="home-about__title"
          >
            {t('title', { fallback: 'About Us' })}
          </motion.h2>
          <div className="home-about__row-01">
            <div className="home-about__col-01">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="home-about__image"
              >
                <img src="/images/home/home-img-05.png" alt="image" />
              </motion.div>
            </div>
            <div className="home-about__col-02">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="home-about__block"
              >
                <div className="home-about__text">
                  {t('description', {
                    fallback:
                      'At Holax Group, we specialise in offering bespoke business and marketing consulting solutions. Our seasoned experts are dedicated to providing personalised guidance and innovative strategies to help our clients navigate the competitive landscape. We are committed to building lasting relationships through a collaborative approach, ensuring measurable success and growth for our clients.',
                  })}
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="home-about__block"
              >
                <h3 className="home-about__label">
                  {t('ourMission', { fallback: 'Our Mission' })}
                </h3>
                <div className="home-about__text">
                  {t('mission', {
                    fallback:
                      'Our mission is to empower entrepreneurs with the insights, strategies, and tools necessary to achieve their marketing and operational goals. We are dedicated to driving growth, enhancing market presence, and fostering innovation. By leveraging our expertise, we aim to create sustainable value and help our clients realise their fullest potential in their respective industries.',
                  })}
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="home-about__block"
              >
                <h3 className="home-about__label">
                  {t('ourStory', { fallback: 'Our Story' })}
                </h3>
                <div className="home-about__text">
                  {t('story', {
                    fallback:
                      'Holax Group was founded to provide individuals with access to top-tier consulting services that truly understand their unique challenges. Our story concerns passion, dedication, and a relentless quest for excellence. From humble beginnings, we have evolved into a trusted partner for businesses across various industries, known for our ability to adapt to the ever-changing market landscape. Our narrative is woven with tales of transformation, success, and a shared commitment to making a meaningful impact on the businesses we serve.',
                  })}
                </div>
              </motion.div>
            </div>
          </div>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="home-about__subtitle"
          >
            {t('ourValues', { fallback: 'Our Values' })}
          </motion.h3>
          <div className="home-about__row-02">
            <div className="home-about__items">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={0.1}
                className="home-about__item"
              >
                <div className="home-about__wrapper">
                  <img
                    src="/images/home/home-icon-01.svg"
                    alt="image"
                    className="icon"
                  />
                  <h3 className="label">
                    {t('values.0', { fallback: 'Integrity in Action' })}
                  </h3>
                  <div className="text">
                    {t('values.1', {
                      fallback:
                        'We believe in authenticity and transparency, ensuring that our actions always align with our words.',
                    })}
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={0.2}
                className="home-about__item"
              >
                <div className="home-about__wrapper">
                  <img
                    src="/images/home/home-icon-02.svg"
                    alt="image"
                    className="icon"
                  />
                  <h3 className="label">
                    {t('pursuitOfExcellence', {
                      fallback: 'Pursuit of Excellence',
                    })}
                  </h3>
                  <div className="text">
                    {t('pursuitOfExcellenceText', {
                      fallback:
                        'We strive for brilliance in everything we do, constantly raising the bar to exceed expectations.',
                    })}
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={0.3}
                className="home-about__item"
              >
                <div className="home-about__wrapper">
                  <img
                    src="/images/home/home-icon-03.svg"
                    alt="image"
                    className="icon"
                  />
                  <h3 className="label">
                    {t('creativeInnovation', {
                      fallback: 'Creative Innovation',
                    })}
                  </h3>
                  <div className="text">
                    {t('creativeInnovationText', {
                      fallback:
                        'We thrive on creativity and originality, finding unique solutions to the most complex challenges.',
                    })}
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={0.4}
                className="home-about__item"
              >
                <div className="home-about__wrapper">
                  <img
                    src="/images/home/home-icon-04.svg"
                    alt="image"
                    className="icon"
                  />
                  <h3 className="label">
                    {t('empoweringPartnerships', {
                      fallback: 'Empowering Partnerships',
                    })}
                  </h3>
                  <div className="text">
                    {t('empoweringPartnershipsText', {
                      fallback:
                        'We build empowering relationships that celebrate collaboration and mutual growth.',
                    })}
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                custom={0.5}
                className="home-about__item"
              >
                <div className="home-about__wrapper">
                  <img
                    src="/images/home/home-icon-05.svg"
                    alt="image"
                    className="icon"
                  />
                  <h3 className="label">
                    {t('clientCentredExcellence', {
                      fallback: 'Client-Centred Excellence',
                    })}
                  </h3>
                  <div className="text">
                    {t('clientCentredText', {
                      fallback:
                        'Our clients are the core of our universe, and their success defines our own.',
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
