import React from 'react';
import Link from 'next/link';
import '@/styles/footer.scss';
import '@/styles/base.scss';
import Instagram from '@/icons/social/Instagram';
import Twitter from '@/icons/social/Twitter';
import Facebook from '@/icons/social/Facebook';
import Phone from '@/icons/other/Phone';
import Email from '@/icons/other/Email';
import Address from '@/icons/other/Address';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const t = useTranslations('footer');

  return (
    <footer className="footer">
      <div className="footer__container _container">
        <div className="footer__body">
          <div className="footer__row-01">
            <div className="footer__col-01">
              <Link href="#" className="footer__logo">
                <img src="/images/foot-logo.svg" width={100} />
              </Link>
              <div className="footer__text">
                {t('text', {
                  fallback:
                    'Optimise your operations and transform your strategy today.',
                })}
              </div>
              <ul className="footer__socials">
                <li className="footer__social">
                  <Link
                    href="https://x.com/Holaxgroup"
                    className="footer__social-link twitter"
                  >
                    <Twitter />
                  </Link>
                </li>
                <li className="footer__social">
                  <Link
                    href="https://www.facebook.com/holaxcom/"
                    className="footer__social-link facebook"
                  >
                    <Facebook />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__col-02">
              <h3 className="footer__title">
                {t('expertise', { fallback: 'Expertise' })}
              </h3>
              <ul className="footer__list">
                <li className="footer__item">
                  <Link href="/what-we-do" className="footer__link">
                    {t('whatWeDo', { fallback: 'What We Do' })}
                  </Link>
                </li>
                <li className="footer__item">
                  <Link href="/client-results" className="footer__link">
                    {t('clientResults', { fallback: 'Client Results' })}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__col-03">
              <h3 className="footer__title">
                {t('ourSolutions', { fallback: 'Our Solutions' })}
              </h3>
              <ul className="footer__list">
                <li className="footer__item">
                  <Link href="/business-consulting" className="footer__link">
                    {t('businessConsulting', {
                      fallback: 'Business Consulting',
                    })}
                  </Link>
                </li>
                <li className="footer__item">
                  <Link href="/marketing-consulting" className="footer__link">
                    {t('marketingConsulting', {
                      fallback: 'Marketing Consulting',
                    })}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__col-04">
              <h3 className="footer__title">
                {t('joinCommunity', { fallback: 'Join Community' })}
              </h3>
              <ul className="footer__list">
                <li className="footer__item">
                  <Link href="/careers" className="footer__link">
                    {t('careers', { fallback: 'Careers' })}
                  </Link>
                </li>
                <li className="footer__item">
                  <Link href="/industry-news" className="footer__link">
                    {t('industryNews', { fallback: 'Industry News' })}
                  </Link>
                </li>
                <li className="footer__item">
                  <Link href="/articles" className="footer__link">
                    {t('articles', { fallback: 'Articles' })}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__col-05">
              <h3 className="footer__title">
                {t('getInTouch', { fallback: 'Get in Touch' })}
              </h3>
              <ul className="footer__list">
                <li className="footer__item">
                  <Link href="tel:+447482749572" className="footer__link">
                    <span>
                      <Phone />
                      +447482749572
                    </span>
                  </Link>
                </li>
                <li className="footer__item">
                  <Link
                    href="mailto:info@holaxgroup.com"
                    className="footer__link"
                  >
                    <span>
                      <Email />
                      info@holaxgroup.com
                    </span>
                  </Link>
                </li>
                <li className="footer__item">
                  <Link href="#" className="footer__link">
                    <span>
                      <Address />
                      71-75 Shelton Street, Covent Garden, London, United
                      Kingdom, WC2H 9JQ
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__col-06">
              <h3 className="footer__title">Legal</h3>
              <ul className="footer__list">
                <li className="footer__item">
                  <Link href="/terms-and-conditions" className="footer__link">
                    {t('termsAndConditions', {
                      fallback: 'Terms and Conditions',
                    })}
                  </Link>
                </li>
                <li className="footer__item">
                  <Link href="/privacy-policy" className="footer__link">
                    {t('privacyPolicy', { fallback: 'Privacy Policy' })}
                  </Link>
                </li>
                <li className="footer__item">
                  <Link href="/refund-policy" className="footer__link">
                    {t('refundPolicy', { fallback: 'Refund Policy' })}
                  </Link>
                </li>
                <li className="footer__item">
                  <Link href="/cookie-policy" className="footer__link">
                    {t('cookiePolicy', { fallback: 'Cookie Policy' })}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__row-02">
            <div className="footer__copy">
              © {currentYear} Holax LTD.{' '}
              {t('copyright', { fallback: 'All Rights Reserved' })} |{' '}
              <Link href="/privacy-policy" className="footer__link-policy">
                {t('privacyPolicy', { fallback: 'Privacy Policy' })}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
