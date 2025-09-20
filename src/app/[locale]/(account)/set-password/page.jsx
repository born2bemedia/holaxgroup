'use client';
import React, { useEffect } from 'react';
import { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import '@/styles/login.scss';
import ChangePasswordReset from '../dashboard/_components/ChangePasswordReset';
import { useTranslations } from 'next-intl';

function SetPasswordContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get('code');
  const router = useRouter();

  const t = useTranslations('setPassword');

  useEffect(() => {
    if (token) {
      localStorage.setItem('resetToken', token);
    }
  }, [token]);

  if (!token) {
    return (
      <section className="change-password log-in">
        <div className="_container">
          <div className="log-in__body">
            <h1>{t('invalid', { fallback: 'Invalid or expired link.' })}</h1>
          </div>
        </div>
      </section>
    );
  }

  return <ChangePasswordReset token={token} />;
}

export default function SetPassword() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SetPasswordContent />
    </Suspense>
  );
}
