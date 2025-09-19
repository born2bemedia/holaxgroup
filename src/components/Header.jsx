'use client';
import React, { useEffect, useState } from 'react';
import '@/styles/header.scss';
import '@/styles/base.scss';
import Link from 'next/link';
import useAuthStore from '@/stores/authStore';
import ChevronDown from '@/icons/other/ChevronDown';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';
import { useLocale, useTranslations } from 'next-intl';
import { LangSwitcher } from './LangSwitcher';

const Header = () => {
  const { currentUser, fetchCurrentUser } = useAuthStore();
  const [menuOpened, setMenuOpened] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({});
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState(null);

  const t = useTranslations('header');

  const menuOpen = () => {
    setMenuOpened(prev => !prev);
    setButtonActive(prev => !prev);
    //document.body.classList.toggle("no-scroll", !menuOpened);
  };

  const closeMenu = () => {
    setMenuOpened(false);
    setButtonActive(false);
    document.body.classList.remove('no-scroll');
  };

  useEffect(() => {
    setMenuOpened(false);
    document.body.classList.remove('no-scroll');
  }, [pathname]);

  const handleMouseEnter = index => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <>
      <header className="header">
        <div className="header__container _container">
          <div className="header__body">
            <div className="header__col-01">
              <Link href="/" className="header__logo" onClick={closeMenu}>
                <img src="/images/logo.svg" alt="logo" />
              </Link>
            </div>
            <div className="header__col-02">
              <div className={`header__menu`}>
                <nav className="header__nav _container">
                  <ul className="header__list">
                    <li className="header__item-menu">
                      <Link href="/" onClick={closeMenu}>
                        {t('home', { fallback: 'Home' })}
                      </Link>
                    </li>
                    <li
                      className={`header__item-menu _submenu ${
                        submenuOpen['solutions'] || hoveredItem === 'solutions'
                          ? '_open'
                          : ''
                      }`}
                      onMouseEnter={() => handleMouseEnter('solutions')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="wrapper">
                        <Link href="#" onClick={closeMenu}>
                          {t('ourSolutions', { fallback: 'Our Solutions' })}
                          <ChevronDown />
                        </Link>
                        {/* <button type="button" className="btn">
                        {!submenuOpen["solutions"] ? (
                          <img src="/images/menu-right.svg" alt="expand" />
                        ) : (
                          <img src="/images/menu-left.svg" alt="collapse" />
                        )}
                      </button> */}
                      </div>
                      <ul
                        className={`header__submenu ${
                          submenuOpen['solutions'] ||
                          hoveredItem === 'solutions'
                            ? '_active'
                            : ''
                        }`}
                        style={{
                          maxHeight:
                            submenuOpen['solutions'] ||
                            hoveredItem === 'solutions'
                              ? '1000px'
                              : '0',
                          overflow: 'hidden',
                          transition: 'all 0.3s ease 0s',
                          paddingTop:
                            submenuOpen['solutions'] ||
                            hoveredItem === 'solutions'
                              ? '20px'
                              : '0',
                        }}
                      >
                        <li className="header__subitem">
                          <Link href="/business-consulting" onClick={closeMenu}>
                            {t('businessConsulting', {
                              fallback: 'Business Consulting',
                            })}
                          </Link>
                        </li>
                        <li className="header__subitem">
                          <Link
                            href="/marketing-consulting"
                            onClick={closeMenu}
                          >
                            {t('marketingConsulting', {
                              fallback: 'Marketing Consulting',
                            })}
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className={`header__item-menu _submenu ${
                        submenuOpen['company'] || hoveredItem === 'company'
                          ? '_open'
                          : ''
                      }`}
                      onMouseEnter={() => handleMouseEnter('company')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="wrapper">
                        <Link href="#" onClick={closeMenu}>
                          {t('company', { fallback: 'Company' })}{' '}
                          <ChevronDown />
                        </Link>
                        {/* <button type="button" className="btn">
                        {!submenuOpen["company"] ? (
                          <img src="/images/menu-right.svg" alt="expand" />
                        ) : (
                          <img src="/images/menu-left.svg" alt="collapse" />
                        )}
                      </button> */}
                      </div>
                      <ul
                        className={`header__submenu ${
                          submenuOpen['company'] || hoveredItem === 'company'
                            ? '_active'
                            : ''
                        }`}
                        style={{
                          maxHeight:
                            submenuOpen['company'] || hoveredItem === 'company'
                              ? '1000px'
                              : '0',
                          overflow: 'hidden',
                          transition: 'all 0.3s ease 0s',
                        }}
                      >
                        <li className="header__subitem">
                          <Link href="/what-we-do" onClick={closeMenu}>
                            {t('whatWeDo', { fallback: 'What We Do' })}
                          </Link>
                        </li>
                        <li className="header__subitem">
                          <Link href="/client-results" onClick={closeMenu}>
                            {t('clientResults', { fallback: 'Client Results' })}
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li
                      className={`header__item-menu _submenu ${
                        submenuOpen['insights'] || hoveredItem === 'insights'
                          ? '_open'
                          : ''
                      }`}
                      onMouseEnter={() => handleMouseEnter('insights')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="wrapper">
                        <Link href="#" onClick={closeMenu}>
                          {t('insights', { fallback: 'Insights' })}{' '}
                          <ChevronDown />
                        </Link>
                        <button type="button" className="btn">
                          {/*  {!submenuOpen["insights"] ? (
                          <img src="/images/menu-right.svg" alt="expand" />
                        ) : (
                          <img src="/images/menu-left.svg" alt="collapse" />
                        )} */}
                        </button>
                      </div>
                      <ul
                        className={`header__submenu ${
                          submenuOpen['insights'] || hoveredItem === 'insights'
                            ? '_active'
                            : ''
                        }`}
                        style={{
                          maxHeight:
                            submenuOpen['insights'] ||
                            hoveredItem === 'insights'
                              ? '1000px'
                              : '0',
                          overflow: 'hidden',
                          transition: 'all 0.3s ease 0s',
                        }}
                      >
                        <li className="header__subitem">
                          <Link href="/industry-news" onClick={closeMenu}>
                            {t('industryNews', { fallback: 'Industry News' })}
                          </Link>
                        </li>
                        <li className="header__subitem">
                          <Link href="/articles" onClick={closeMenu}>
                            {t('articles', { fallback: 'Articles' })}
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="header__item-menu">
                      <Link href="/careers" onClick={closeMenu}>
                        {t('careers', { fallback: 'Careers' })}
                      </Link>
                    </li>
                    <li className="header__item-menu">
                      <Link href="/contacts" onClick={closeMenu}>
                        {t('contacts', { fallback: 'Contacts' })}
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="header__col-03">
              <nav className="header__nav">
                <ul className="header__account">
                  <li className="header__account-item">
                    <Link href="/cart" className="header__account-link">
                      <img src="/images/cart.svg" alt="cart" />
                    </Link>
                  </li>
                  {!currentUser ? (
                    <>
                      <li className="separator">|</li>
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
                        <Link
                          href="/dashboard"
                          className="header__account-link"
                        >
                          {t('account', { fallback: 'Account' })}
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </nav>
            </div>
            <div className="header__col-04">
              <Link href="/cart" className="cart-link">
                <img src="/images/cart.svg" alt="cart" />
              </Link>
              <button
                onClick={menuOpen}
                className={`header__menu-btn ${menuOpened ? '_active' : ''}`}
              >
                {!menuOpened ? (
                  <img src="/images/menu-open.svg" alt="menu-burger" />
                ) : (
                  <img alt="logo" src="/images/menu-close.svg" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
      {menuOpened && <MobileMenu />}
    </>
  );
};

export default Header;
