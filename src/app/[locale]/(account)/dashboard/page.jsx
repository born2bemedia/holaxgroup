'use client';
import '@/styles/account.scss';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useAuthStore from '@/stores/authStore';
import LogoutButton from './_components/LogoutButton';
import Orders from './_components/Orders';
import PersonalData from './_components/PersonalData';
import AvailableFiles from './_components/AvailableFiles';
import { useTranslations } from 'next-intl';

const Dashboard = () => {
  const router = useRouter();
  const { currentUser, fetchCurrentUser } = useAuthStore();
  const [openIndex, setOpenIndex] = useState(1);

  const t = useTranslations('dashboard');

  useEffect(() => {
    if (!currentUser) {
      fetchCurrentUser();
      router.push('/log-in');
    }
  }, [currentUser]);

  useEffect(() => {
    setOpenIndex(1);
  }, []);

  const toggleItem = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {currentUser ? (
        <>
          <section className="account-wrap">
            <div className="_container">
              <div className="account-wrap__body">
                <ul className="account-nav">
                  <li
                    data-id={openIndex}
                    aria-current="page"
                    onClick={() => toggleItem(1)}
                    className={`${openIndex === 1 && 'active'}`}
                  >
                    <span>{t('myAccount', { fallback: 'My Account' })}</span>
                  </li>
                  <li
                    data-id={openIndex}
                    aria-current="page"
                    onClick={() => toggleItem(2)}
                    className={`${openIndex === 2 && 'active'}`}
                  >
                    <span>
                      {t('recentOrders', { fallback: 'Recent Orders' })}
                    </span>
                  </li>
                  <li
                    data-id={openIndex}
                    aria-current="page"
                    onClick={() => toggleItem(3)}
                    className={`${openIndex === 3 && 'active'}`}
                  >
                    <span>{t('downloads', { fallback: 'Downloads' })}</span>
                  </li>
                  <li
                    data-id={openIndex}
                    aria-current="page"
                    onClick={() => toggleItem(4)}
                    className={`${openIndex === 4 && 'active'}`}
                  >
                    <span>
                      {t('myAddresses', { fallback: 'My Addresses' })}
                    </span>
                  </li>
                  <LogoutButton />
                </ul>

                <div className="account-content">
                  <div className={openIndex === 1 ? 'block' : 'hidden'}>
                    <h2>
                      {t('welcome', {
                        fallback: 'Welcome to your personal control centre.',
                      })}
                    </h2>
                    <p>
                      {t('brief.0', {
                        fallback: 'Here, you can manage your',
                      })}{' '}
                      <span onClick={() => toggleItem(4)}>
                        {t('brief.1', {
                          fallback: 'account details',
                        })}
                      </span>
                      ,{' '}
                      {t('brief.2', {
                        fallback: 'monitor',
                      })}{' '}
                      <span onClick={() => toggleItem(2)}>
                        {t('brief.3', {
                          fallback: 'recent orders',
                        })}
                      </span>{' '}
                      {t('brief.4', {
                        fallback:
                          'in one convenient place. Stay organised and in control with everything you need at your fingertips.',
                      })}
                    </p>
                  </div>
                  <div className={openIndex === 2 ? 'block' : 'hidden'}>
                    <Orders />
                  </div>
                  <div className={openIndex === 3 ? 'block' : 'hidden'}>
                    <AvailableFiles />
                  </div>
                  <div className={openIndex === 4 ? 'block' : 'hidden'}>
                    <PersonalData />
                  </div>
                  <div className={openIndex === 5 ? 'block' : 'hidden'}></div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <section className="account-wrap">
          <div className="_container">
            <p>{t('loading', { fallback: 'Loading...' })}</p>

            <div className="account-wrap__body"></div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Dashboard;
