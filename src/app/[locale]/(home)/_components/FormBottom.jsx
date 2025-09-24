'use client';
import React, { useState, useEffect } from 'react';
import '@/styles/base.scss';
import { fadeInUp } from '@/utils/animations';
import { motion } from 'framer-motion';
import FormMain from '@/components/FormMain';
import { useTranslations } from 'next-intl';

const FormBottom = () => {
  const t = useTranslations('home.formBottom');

  return (
    <section className="form-bottom" id="form-connect">
      <div className="form-bottom__container _container">
        <div className="form-bottom__body">
          <div className="form-bottom__col-01">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="form-bottom__title"
            >
              {t('title', { fallback: 'Connect with' })} <br /> Holax Group
              <img src="/images/arrow-white.svg" alt="arrow" />
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="form-bottom__text"
            >
              {t('description', {
                fallback:
                  'Start your path to success with our expert guidance. Fill out the',
              })}
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="form-bottom__col-02"
          >
            <FormMain />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FormBottom;
