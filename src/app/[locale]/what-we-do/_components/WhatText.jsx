'use client';
import React, { useState, useEffect } from 'react';
import { fadeInUp } from '@/utils/animations';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const WhatText = () => {
  const t = useTranslations('whatWeDo.text');

  return (
    <section className="what-text">
      <div className="what-text__container _container">
        <div className="what-text__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="what-text__text"
          >
            {t('0', {
              fallback:
                'We go beyond traditional consulting to provide a holistic and innovative approach tailored to your needs. Our comprehensive range of services, cutting-edge methodologies, and client-centric values set us apart from the competition. Discover how our collaborative approach and advanced techniques work and why clients choose us for sustainable growth and success.',
            })}{' '}
            <span>
              {t('1', {
                fallback:
                  'Choose Holax Group and embark on a journey towards excellence and lasting impact.',
              })}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatText;
