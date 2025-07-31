'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const WhatTab2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const t = useTranslations('whatWeDo.approach.tabs.tab2');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    /* Это состояние при загрузке!!! */
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleAccordion = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="tabs-approach__tab tab2">
      <div className="tabs-approach__wrapper">
        <button
          className={`tabs-approach__btn ${isOpen && isMobile ? '_open' : ''}`}
          onClick={toggleAccordion}
        >
          <span className="title">
            {t('title', { fallback: 'Customised Solutions' })}
          </span>
        </button>
        <motion.div
          className="tabs-approach__content"
          initial={{ height: isMobile ? 0 : 'auto', opacity: isMobile ? 0 : 1 }}
          animate={{
            height: isMobile ? (isOpen ? 'auto' : 0) : 'auto',
            opacity: isMobile ? (isOpen ? 1 : 0) : 1,
          }}
          transition={{ duration: 0.5 }}
          style={{ overflow: 'hidden' }}
        >
          <div className="wrapper">
            <div className="col-01">
              <ul className="list">
                <li className="item">
                  <span>
                    {t('list.0.0', { fallback: 'Strategic Planning:' })}
                  </span>
                  {t('list.0.1', {
                    fallback:
                      'We craft bespoke strategies that align with your business objectives, focusing on long-term growth and sustainability.',
                  })}
                </li>
                <li className="item">
                  <span>
                    {t('list.1.0', { fallback: 'Tailored Recommendations:' })}
                  </span>
                  {t('list.1.1', {
                    fallback:
                      'Our recommendations are specific, actionable, and designed to address your unique challenges and opportunities.',
                  })}
                </li>
              </ul>
            </div>
            <div className="col-02">
              <img src="/images/what/what-tab-02.jpg" alt="image" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatTab2;
