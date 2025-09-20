'use client';
import React, { useEffect, useState } from 'react';
import usePopupStore from '@/stores/popupStore';
import OrderIcon from '@/icons/OrderIcon';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslations } from 'next-intl';

const JobButton = ({ job }) => {
  const { setJobsPopupDisplay, setJobValue } = usePopupStore();

  const t = useTranslations('careers.jobs');

  const handlePopup = () => {
    setJobValue(job);
    setJobsPopupDisplay(true);
  };

  return (
    <>
      <button className="add-to-cart" onClick={handlePopup}>
        {t('button', { fallback: 'Apply for a position' })}
      </button>
    </>
  );
};

export default JobButton;
