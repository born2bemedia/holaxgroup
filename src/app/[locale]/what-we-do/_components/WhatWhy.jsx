'use client';
import React, { useState, useEffect } from 'react';
import { fadeInUp } from '@/utils/animations';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const WhatWhy = () => {
  const t = useTranslations('whatWeDo.why');

  return (
    <section className="what-why">
      <div className="what-why__container _container">
        <div className="what-why__body">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="what-why__title"
          >
            {t('title', { fallback: 'Why Choose Holax Group?' })}
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="what-why__desc"
          >
            {t('text', {
              fallback:
                'Clients choose us because of our commitment to excellence and track record of delivering measurable results. Here’s why you should partner with us:',
            })}
          </motion.div>
          <div className="what-why__items">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="what-why__item"
            >
              <div className="what-why__number">01</div>
              <h3 className="what-why__label">
                {t('list.0.title', { fallback: 'Proven Success' })}
              </h3>
              <ul className="what-why__list">
                <li className="what-why__list-item">
                  <span>{t('list.0.0.0', { fallback: 'Track Record:' })}</span>
                  {t('list.0.0.1', {
                    fallback:
                      'We have a history of helping customers achieve their goals and drive growth.',
                  })}
                </li>
                <li className="what-why__list-item">
                  <span>{t('list.0.1.0', { fallback: 'Case Studies:' })}</span>
                  {t('list.0.1.1', {
                    fallback:
                      'Showcasing success stories and testimonials from satisfied clients.',
                  })}
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="what-why__item"
            ></motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="what-why__item"
            >
              <div className="what-why__number">02</div>
              <h3 className="what-why__label">
                {t('list.1.title', { fallback: 'Expert Team' })}
              </h3>
              <ul className="what-why__list">
                <li className="what-why__list-item">
                  <span>
                    {t('list.1.0.0', { fallback: 'Seasoned Professionals:' })}
                  </span>
                  {t('list.1.0.1', {
                    fallback:
                      'Our team comprises professionals with deep industry knowledge and expertise.',
                  })}
                </li>
                <li className="what-why__list-item">
                  <span>
                    {t('list.1.1.0', { fallback: 'Continuous Learning:' })}
                  </span>
                  {t('list.1.1.1', {
                    fallback:
                      'Commitment to continuous learning and professional development to stay ahead of industry trends.',
                  })}
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="what-why__item"
            >
              <div className="what-why__number">03</div>
              <h3 className="what-why__label">
                {t('list.2.title', { fallback: 'Client-Centric Approach' })}
              </h3>
              <ul className="what-why__list">
                <li className="what-why__list-item">
                  <span>
                    {t('list.2.0.0', {
                      fallback: 'Collaborative Partnership:',
                    })}
                  </span>
                  {t('list.2.0.1', {
                    fallback:
                      'We prioritise your needs and work collaboratively to achieve your objectives.',
                  })}
                </li>
                <li className="what-why__list-item">
                  <span>
                    {t('list.2.1.0', { fallback: 'Responsive Service:' })}
                  </span>
                  {t('list.2.1.1', {
                    fallback:
                      'Providing timely and responsive service to address your concerns and needs.',
                  })}
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="what-why__item"
            >
              <div className="what-why__number">04</div>
              <h3 className="what-why__label">
                {t('list.3.title', { fallback: 'Innovative Solutions' })}
              </h3>
              <ul className="what-why__list">
                <li className="what-why__list-item">
                  <span>
                    {t('list.3.0.0', { fallback: 'Forward-Thinking:' })}
                  </span>
                  {t('list.3.0.1', {
                    fallback:
                      'We stay ahead of industry trends, offering innovative solutions that give you a competitive edge.',
                  })}
                </li>
                <li className="what-why__list-item">
                  <span>
                    {t('list.3.1.0', { fallback: 'Creative Problem-Solving:' })}
                  </span>
                  {t('list.3.1.1', {
                    fallback:
                      'Employing creative problem-solving techniques to address complex challenges.',
                  })}
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="what-why__item"
            >
              <div className="what-why__number">05</div>
              <h3 className="what-why__label">
                {t('list.4.title', { fallback: 'Sustainable Results' })}
              </h3>
              <ul className="what-why__list">
                <li className="what-why__list-item">
                  <span>
                    {t('list.4.0.0', { fallback: 'Long-Term Value:' })}
                  </span>
                  {t('list.4.0.1', {
                    fallback:
                      'We focus on delivering solutions that provide long-term value and sustainable success.',
                  })}
                </li>
                <li className="what-why__list-item">
                  <span>
                    {t('list.4.1.0', { fallback: 'Performance Metrics:' })}
                  </span>
                  {t('list.4.1.1', {
                    fallback:
                      'Using performance metrics to measure success and ensure continuous improvement.',
                  })}
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWhy;
