'use client';

import '@/styles/header.scss';
import { useLocale } from 'next-intl';
import { useCallback, useEffect, useRef, useState } from 'react';

import styles from './LangSwitcher.module.css';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { Gb } from '@/icons/countries/gb';
import { De } from '@/icons/countries/de';
import { It } from '@/icons/countries/it';

export const LangSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', name: 'English', icon: Gb },
    { code: 'de', name: 'German', icon: De },
    { code: 'it', name: 'Italian', icon: It },
  ];

  const onChangeLanguage = useCallback(
    value => {
      const pathWithoutLocale = pathname.replace(/^\/(en|de|it)/, '');
      const newPath = `/${value}${pathWithoutLocale}`;
      router.replace(newPath);
    },
    [pathname, router],
  );

  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const { name, icon: Icon } = languages.find(
    language => language.code === locale,
  );

  return (
    <li
      ref={dropdownRef}
      className="header__account-item"
      style={{ position: 'relative' }}
    >
      <button
        className="header__account-link"
        onClick={() => setIsOpen(prev => !prev)}
      >
        <Icon />
        {name}
        <ChevronDown />
      </button>
      <ul className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}>
        {languages.map(language => (
          <li key={language.code}>
            <button
              className={styles.dropdownItem}
              onClick={() => {
                onChangeLanguage(language.code);
                setIsOpen(false);
              }}
            >
              <language.icon />
              {language.name}
            </button>
          </li>
        ))}
      </ul>
    </li>
  );
};

const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
  >
    <path
      d="M3.99416 4.40395L0.186157 0.595947H7.80216L3.99416 4.40395Z"
      fill="#134CB2"
    />
  </svg>
);
