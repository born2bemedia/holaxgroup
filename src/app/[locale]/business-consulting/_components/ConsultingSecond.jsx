import { useTranslations } from 'next-intl';
import React from 'react';

const ConsultingSecond = () => {
  const t = useTranslations('businessConsulting.second');

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
          poster="/images/business/poster.webp"
        >
          <source src="/videos/business.webm" type="video/mp4" />
        </video>
      </div>
      <div className="_container">
        <div className="consulting-second__body">
          {t('text.0', {
            fallback:
              'Our bespoke business consulting solutions are designed to address your unique challenges and drive success. From strategic planning and operational improvement to financial optimization and leadership development, our experts provide personalised guidance and innovative strategies to ensure your business thrives in today’s competitive landscape.',
          })}{' '}
          <span>
            {t('text.1', {
              fallback:
                'Let us help you turn your vision into reality and set your business on the path to sustained growth and success.',
            })}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ConsultingSecond;
