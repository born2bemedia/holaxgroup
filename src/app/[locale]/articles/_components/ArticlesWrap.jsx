'use client';
import React, { useEffect } from 'react';
import { fadeInUp } from '@/utils/animations';
import { motion } from 'framer-motion';
import useArticlesStore from '@/stores/articlesStore';
import Link from 'next/link';
import OrderIcon from '@/icons/OrderIcon';
import { useTranslations } from 'next-intl';

const ArticlesWrap = () => {
  const articles = useArticlesStore(state => state.articles);
  const fetchArticles = useArticlesStore(state => state.fetchArticles);

  const t = useTranslations('articles.wrap');

  useEffect(() => {
    fetchArticles()
      .then(() => console.log('Articles loaded:', articles))
      .catch(error => console.error('Error loading articles:', error));
  }, [fetchArticles]);

  return (
    <section className="articles-wrap">
      <div className="_container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {t('title', { fallback: 'Articles' })}
        </motion.h2>
        <div className="articles-wrap__body">
          {articles.length > 0 ? (
            articles.map(caseItem => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                key={caseItem.id}
                className="case"
              >
                <div className="top">
                  <img src={caseItem.image.url} alt={caseItem.title} />
                  <h3>{caseItem.title}</h3>
                </div>
                <Link href={`/articles/${caseItem.slug}`} className="more">
                  <span>{t('readMore', { fallback: 'Read more' })}</span>
                  <OrderIcon />
                </Link>
              </motion.div>
            ))
          ) : (
            <p>{t('loading', { fallback: 'Loading articles...' })}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ArticlesWrap;
