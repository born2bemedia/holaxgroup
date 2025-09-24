'use client';
import ArrowIcon from '@/icons/other/ArrowIcon';
import ChevronDown from '@/icons/other/ChevronDown';
import ChevronRight from '@/icons/other/ChevronRight';
import { fadeInUp } from '@/utils/animations';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';

const CasesCta = () => {
  const t = useTranslations('clientResults.cta');

  return (
    <section className="cases-cta">
      <div className="_container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="cases-cta__body"
        >
          <h2>
            {t('title.0', { fallback: 'Ready to Achieve Your' })} <br />
            {t('title.1', { fallback: 'Success Story?' })}
          </h2>
          <div className="arrow">
            <span></span>
            <span></span>
          </div>
          <Link href="/contacts">
            {t('text', { fallback: 'Start your journey with Holax Group' })}{' '}
            <ArrowIcon />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CasesCta;
