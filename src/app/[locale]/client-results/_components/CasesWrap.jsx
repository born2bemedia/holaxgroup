'use client';
import React, { useEffect } from 'react';
import { fadeInUp } from '@/utils/animations';
import { motion } from 'framer-motion';
import useCasesStore from '@/stores/casesStore';
import Link from 'next/link';
import OrderIcon from '@/icons/OrderIcon';
import { useTranslations } from 'next-intl';

const CasesWrap = () => {
  const cases = useCasesStore(state => state.cases);
  const fetchCases = useCasesStore(state => state.fetchCases);

  const t = useTranslations('clientResults.wrap');

  useEffect(() => {
    fetchCases()
      .then(() => console.log('Cases loaded:', cases))
      .catch(error => console.error('Error loading cases:', error));
  }, [fetchCases]);

  return (
    <section className="cases-wrap">
      <div className="_container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {t('title', { fallback: 'Case Study' })}
        </motion.h2>
        <div className="cases-wrap__body">
          {cases.length > 0 ? (
            cases.map(caseItem => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                key={caseItem.id}
                className="case"
              >
                <div className="top">
                  <h3>{caseItem.title}</h3>
                  <div className="client">
                    <span>{t('client', { fallback: 'Client:' })}</span>
                    {caseItem.client}
                  </div>
                  <div className="challenge">
                    <span>{t('challenge', { fallback: 'Challenge:' })}</span>{' '}
                    {caseItem.challenge}
                  </div>
                </div>
                <Link
                  href={`/client-results/${caseItem.slug}`}
                  className="more"
                >
                  <span>{t('readMore', { fallback: 'Read more' })}</span>
                  <OrderIcon />
                </Link>
              </motion.div>
            ))
          ) : (
            <p>{t('loading', { fallback: 'Loading cases...' })}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CasesWrap;
