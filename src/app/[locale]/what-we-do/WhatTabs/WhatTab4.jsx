'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const WhatTab4 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const t = useTranslations('whatWeDo.approach.tabs.tab4');

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
    <div className="tabs-approach__tab tab4">
      <div className="tabs-approach__wrapper">
        <button
          className={`tabs-approach__btn ${isOpen && isMobile ? '_open' : ''}`}
          onClick={toggleAccordion}
        >
          <span className="title">
            {t('title', { fallback: 'Continuous Support' })}
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
                    {t('list.0.0', { fallback: 'Performance Monitoring:' })}
                  </span>
                  {t('list.0.1', {
                    fallback:
                      'We monitor the performance of implemented strategies to ensure they are delivering the expected results.',
                  })}
                </li>
                <li className="item">
                  <span>
                    {t('list.1.0', {
                      fallback: 'Adaptation and Improvement:',
                    })}
                  </span>
                  {t('list.1.1', {
                    fallback:
                      'Continuous feedback loops and performance reviews allow us to adapt strategy and improve as needed.',
                  })}
                </li>
              </ul>
            </div>
            <div className="col-02">
              <img src="/images/what/what-tab-04.jpg" alt="image" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatTab4;
