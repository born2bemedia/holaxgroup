'use client';
import ArrowIcon from '@/icons/other/ArrowIcon';
import ArrowLine2 from '@/icons/other/ArrowLine2';
import Link from 'next/link';
import React from 'react';
import { fadeInUp } from '@/utils/animations';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const CasesHero = () => {
  const t = useTranslations('clientResults.hero');

  return (
    <section className="cases-hero">
      <div className="cases-hero__container _container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="cases-hero__body"
        >
          <h1 className="cases-hero__title">
            {t('title', { fallback: 'Transformative Success' })}
          </h1>
          <div className="bottom marketing">
            <h2>{t('subtitle', { fallback: 'Stories' })}</h2>
            <ArrowLine2 />
            <p>
              {t('text', {
                fallback:
                  'At Holax Group, we take pride in the success of our clients.',
              })}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CasesHero;
