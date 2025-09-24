'use client';
import ChevronDown from '@/icons/other/ChevronDown';
import Link from 'next/link';
import React, { useState } from 'react';
import useAuthStore from '@/stores/authStore';
import { LangSwitcher } from './LangSwitcher';
import { useTranslations } from 'next-intl';

const MobileMenu = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { currentUser, fetchCurrentUser } = useAuthStore();

  const t = useTranslations('header');

  const toggleAccordion = index => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <div className="mobile-menu">
      <ul className="menu">
        <li>
          <Link href="/">{t('home', { fallback: 'Home' })}</Link>
        </li>
        <li className={`with-sub-menu ${activeIndex === 1 ? 'active' : ''} `}>
          <Link href="/our-solutions" onClick={() => toggleAccordion(1)}>
            {t('ourSolutions', { fallback: 'Our Solutions' })} <ChevronDown />
          </Link>
          {activeIndex === 1 && (
            <ul className="submenu">
              <li className="header__subitem">
                <Link href="/business-consulting">
                  {t('businessConsulting', { fallback: 'Business Consulting' })}
                </Link>
              </li>
              <li className="header__subitem">
                <Link href="/marketing-consulting">
                  {t('marketingConsulting', {
                    fallback: 'Marketing Consulting',
                  })}
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className={`with-sub-menu ${activeIndex === 2 ? 'active' : ''} `}>
          <Link href="#" onClick={() => toggleAccordion(2)}>
            {t('company', { fallback: 'Company' })} <ChevronDown />
          </Link>
          {activeIndex === 2 && (
            <ul className="submenu">
              <li className="header__subitem">
                <Link href="/what-we-do">
                  {t('whatWeDo', { fallback: 'What We Do' })}
                </Link>
              </li>
              <li className="header__subitem">
                <Link href="/client-results">
                  {t('clientResults', { fallback: 'Client Results' })}
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className={`with-sub-menu ${activeIndex === 3 ? 'active' : ''} `}>
          <Link href="#" onClick={() => toggleAccordion(3)}>
            {t('insights', { fallback: 'Insights' })} <ChevronDown />
          </Link>
          {activeIndex === 3 && (
            <ul className="submenu">
              <li className="header__subitem">
                <Link href="/industry-news">
                  {t('industryNews', { fallback: 'Industry News' })}
                </Link>
              </li>
              <li className="header__subitem">
                <Link href="/articles">
                  {t('articles', { fallback: 'Articles' })}
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link href="/careers">{t('careers', { fallback: 'Careers' })}</Link>
        </li>
        <li>
          <Link href="/contacts">
            {t('contacts', { fallback: 'Contacts' })}
          </Link>
        </li>
      </ul>
      <ul className="mobile-account">
        {!currentUser ? (
          <>
            <li className="header__account-item">
              <Link href="/log-in" className="header__account-link">
                {t('login', { fallback: 'Login' })}
              </Link>
            </li>
            <li className="separator">|</li>
            <li className="header__account-item">
              <Link href="/sign-up" className="header__account-link">
                {t('signUp', { fallback: 'Sign up' })}
              </Link>
            </li>
            <li className="separator">|</li>
            <LangSwitcher />
          </>
        ) : (
          <>
            <li className="separator">|</li>
            <li className="header__account-item">
              <Link href="/dashboard" className="header__account-link">
                {t('account', { fallback: 'Account' })}
              </Link>
            </li>
            <li className="separator">|</li>
            <LangSwitcher />
          </>
        )}
      </ul>
    </div>
  );
};

export default MobileMenu;
