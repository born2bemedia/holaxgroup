'use client';
import React, { useState, useEffect } from 'react';
import { fadeInUp } from '@/utils/animations';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const ContactsHero = () => {
  const t = useTranslations('contacts.hero');

  return (
    <section className="contacts-hero">
      <div className="contacts-hero__container _container">
        <div className="contacts-hero__body">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="contacts-hero__title"
          >
            {t('title.0', { fallback: 'Connect with' })}{' '}
            <span>{t('title.1', { fallback: 'Holax Group' })}</span>
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="contacts-hero__text"
          >
            <img src="/images/contacts/contacts-arrow.svg" alt="arrow" />
            {t('text', {
              fallback:
                'We value your interest in Holax Group and are here to assist you. We’re eager to hear from you if you have a question, need more information about our services, or want to discuss a potential collaboration. Use the contact form below to get in touch, or reach out to us directly through our contact details and social media channels.',
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactsHero;
