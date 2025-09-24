'use client';
import React, { useState, useEffect } from 'react';
import WhatTab1 from '../WhatTabs/WhatTab1';
import WhatTab2 from '../WhatTabs/WhatTab2';
import WhatTab3 from '../WhatTabs/WhatTab3';
import WhatTab4 from '../WhatTabs/WhatTab4';
import { useTranslations } from 'next-intl';

const WhatApproach = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [isMobile, setIsMobile] = useState(false);

  const t = useTranslations('whatWeDo.approach');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const tabChange = value => {
    setActiveTab(value);
  };

  return (
    <section className="what-approach">
      <div className="what-approach__container _container">
        <div className="what-approach__body">
          <h2 className="what-approach__title">
            {t('title', { fallback: 'Our Approach' })}
          </h2>
          <div className="what-approach__text">
            {t('text', {
              fallback:
                'Our approach is built on a foundation of collaboration, innovation, and client-centricity. We believe that the best results come from a partnership between our clients and our team, and we are committed to delivering the highest quality services to our clients.',
            })}
          </div>
          <div className="what-approach__tabs">
            <div className="tabs-approach">
              {!isMobile && (
                <div className="tabs-approach__nav">
                  <button
                    onClick={() => tabChange('tab1')}
                    className={`tabs-approach__button ${activeTab == 'tab1' ? 'active' : ''}`}
                  >
                    {t('initialConsultation', {
                      fallback: 'Initial Consultation',
                    })}
                  </button>
                  <button
                    onClick={() => tabChange('tab2')}
                    className={`tabs-approach__button ${activeTab == 'tab2' ? 'active' : ''}`}
                  >
                    {t('customisedSolutions', {
                      fallback: 'Customised Solutions',
                    })}
                  </button>
                  <button
                    onClick={() => tabChange('tab3')}
                    className={`tabs-approach__button ${activeTab == 'tab3' ? 'active' : ''}`}
                  >
                    {t('collaborativeExecution', {
                      fallback: 'Collaborative Execution',
                    })}
                  </button>
                  <button
                    onClick={() => tabChange('tab4')}
                    className={`tabs-approach__button ${activeTab == 'tab4' ? 'active' : ''}`}
                  >
                    {t('continuousSupport', {
                      fallback: 'Continuous Support',
                    })}
                  </button>
                </div>
              )}

              <div className="tabs-approach__content">
                {isMobile ? (
                  <>
                    <WhatTab1 />
                    <WhatTab2 />
                    <WhatTab3 />
                    <WhatTab4 />
                  </>
                ) : (
                  <>
                    {activeTab == 'tab1' && <WhatTab1 />}
                    {activeTab == 'tab2' && <WhatTab2 />}
                    {activeTab == 'tab3' && <WhatTab3 />}
                    {activeTab == 'tab4' && <WhatTab4 />}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatApproach;
