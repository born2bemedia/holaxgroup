'use client';
import React, { useState, useEffect } from 'react';
import { fadeInUp } from '@/utils/animations';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const WhatHero = () => {
  const t = useTranslations('whatWeDo.hero');

  return (
    <section className="what-hero">
      <div className="what-hero__container _container">
        <div className="what-hero__body">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="what-hero__title"
          >
            {t('title.0', { fallback: 'Elevate Your Project with' })} <br />
            <span>{t('title.1', { fallback: 'Holax Group' })}</span>
          </motion.h1>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.1}
            className="what-hero__icon"
          >
            <img src="/images/what/what-arrow-01.svg" alt="image" />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.2}
            className="what-hero__text"
          >
            {t('text.0', {
              fallback:
                'We go beyond traditional consulting to provide a holistic',
            })}{' '}
            <br />{' '}
            {t('text.1', {
              fallback: 'and innovative approach tailored to your needs.',
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatHero;
