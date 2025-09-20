import React from 'react';
import '@/styles/thankyou.scss';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const Thankyou = () => {
  const t = useTranslations('thankyou');

  return (
    <section className="thankyou">
      <div className="_container">
        <div className="thankyou__body">
          <h1>{t('title', { fallback: 'Thank you for your order!' })}</h1>
          <p>
            {t('text', {
              fallback:
                'We appreciate your decision to choose Holax Group. One of our representatives will contact you soon to confirm the details of your order.',
            })}
            <br />
            {t('text2', {
              fallback:
                'One of our representatives will contact you soon to confirm the details of your order.',
            })}
          </p>
          <Link href="/">{t('goHome', { fallback: 'Go home' })}</Link>
        </div>
      </div>
    </section>
  );
};

export default Thankyou;
