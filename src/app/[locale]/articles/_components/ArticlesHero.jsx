'use client';
import ArrowIcon from '@/icons/other/ArrowIcon';
import ArrowLine2 from '@/icons/other/ArrowLine2';
import Link from 'next/link';
import React from 'react';
import { fadeInUp } from '@/utils/animations';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const ArticlesHero = () => {
  const t = useTranslations('articles.hero');

  return (
    <section className="articles-hero">
      <div className="articles-hero__container _container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="articles-hero__body"
        >
          <h1 className="articles-hero__title">
            <span>{t('title.0', { fallback: 'Insights and Expertise' })}</span>{' '}
            {t('title.1', { fallback: 'in Business and Marketing' })}
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticlesHero;
