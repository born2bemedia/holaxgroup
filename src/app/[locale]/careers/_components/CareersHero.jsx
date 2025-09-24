'use client';
import ArrowIcon from '@/icons/other/ArrowIcon';
import ArrowLine2 from '@/icons/other/ArrowLine2';
import Link from 'next/link';
import React from 'react';
import { fadeInUp } from '@/utils/animations';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const CareersHero = () => {
  const t = useTranslations('careers.hero');

  return (
    <section className="careers-hero">
      <div className="careers-hero__container _container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="careers-hero__body"
        >
          <h1 className="careers-hero__title">
            {t('title', { fallback: 'Join Our Team at' })}
            <span>Holax Group</span>
          </h1>
          <div className="bottom">
            <ArrowLine2 />
            <p>
              {t('description', {
                fallback:
                  'We believe in fostering a dynamic and inclusive workplace where innovation thrives and talent flourishes. Join a team dedicated to driving growth, delivering excellence, and making a positive impact. Explore our current job openings and discover how you can contribute to our mission and grow your career with us.',
              })}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareersHero;
