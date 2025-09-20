import ArrowIcon from '@/icons/other/ArrowIcon';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';

const CareersLast = () => {
  const t = useTranslations('careers.last');

  return (
    <section className="careers-last">
      <div className="_container">
        <div className="careers-last__body">
          <img src="/images/careers/last.png" alt="image" />
          <div>
            <h2>{t('title', { fallback: 'Ready to Make an Impact?' })}</h2>
            <p>
              {t('text', {
                fallback:
                  'At Holax Group, we value diversity, creativity, and dedication. If you are passionate about making a difference and want to be part of a forward-thinking team, we invite you to apply for one of our open positions. Join us on our mission to deliver exceptional consulting services and drive meaningful change.',
              })}
            </p>
            <Link href="#jobs">
              {t('button', { fallback: 'Apply now and join our team' })}{' '}
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersLast;
