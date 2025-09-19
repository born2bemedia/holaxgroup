'use client';
import ArrowIcon from '@/icons/other/ArrowIcon';
import ArrowLine2 from '@/icons/other/ArrowLine2';
import Link from 'next/link';
import React from 'react';
import { fadeInUp } from '@/utils/animations';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const ArticlesHero = () => {
  const t = useTranslations('industryNews.hero');

  return (
    <section className="news-hero">
      <div className="news-hero__container _container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="news-hero__body"
        >
          <h1 className="news-hero__title">
            {t('title.0', { fallback: 'Stay Updated With the Latest in' })}{' '}
            <br />
            <span>{t('title.1', { fallback: 'the Industry' })}</span>
          </h1>
          <div className="bottom">
            <ArrowLine2 />
            <p>
              {t('text.0', {
                fallback:
                  'Welcome to our Industry News page, where we inform you',
              })}{' '}
              <br />
              {t('text.1', {
                fallback:
                  'about the latest trends, insights, and developments in the',
              })}{' '}
              <br />
              {t('text.2', {
                fallback:
                  'business and marketing consulting industry. Stay ahead of',
              })}{' '}
              <br />
              {t('text.3', {
                fallback:
                  'the curve with our curated news articles and expert analyses.',
              })}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticlesHero;
