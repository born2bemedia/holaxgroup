'use client';
import React, { useState, useEffect } from 'react';
import { fadeInUp } from '@/utils/animations';
import { motion } from 'framer-motion';
import WhatSliderFeatudes from '../WhatSliders/WhatSliderFeatures';
import { useTranslations } from 'next-intl';

const WhatFeatures = () => {
  const t = useTranslations('whatWeDo.features');

  return (
    <section className="what-features">
      <div className="what-features__container _container">
        <div className="what-features__body">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="what-features__title"
          >
            {t('title', { fallback: 'Features of Our Services' })}
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="what-features__desc"
          >
            {t('text', {
              fallback:
                'Holax Group offers a wide range of features that set our services apart. These include:',
            })}
          </motion.div>
          <WhatSliderFeatudes />
        </div>
      </div>
    </section>
  );
};

export default WhatFeatures;
