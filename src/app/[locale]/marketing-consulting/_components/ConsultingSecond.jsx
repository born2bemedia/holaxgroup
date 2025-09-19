import { useTranslations } from 'next-intl';
import React from 'react';

const ConsultingSecond = () => {
  const t = useTranslations('marketingConsulting.second');

  return (
    <section className="consulting-second">
      <div className="video">
        <video
          width="2000"
          height="440"
          autoPlay={true}
          muted
          loop
          preload="none"
          playsInline
          poster="/images/marketing/poster.webp"
        >
          <source src="/videos/marketing.webm" type="video/mp4" />
        </video>
      </div>
      <div className="_container">
        <div className="consulting-second__body">
          {t('text1', {
            fallback:
              'Our tailored marketing consulting services are crafted to elevate your brand and connect with your audience meaningfully. Whether you aim to enhance your digital presence, create compelling content, or execute targeted campaigns, our marketing experts offer the insights and strategies you need to stand out in a crowded marketplace.',
          })}
          <span>
            {t('text2', {
              fallback:
                'Let us partner with you to amplify your brand’s impact and achieve measurable results that propel your business forward.',
            })}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ConsultingSecond;
