'use client';
import React, { useEffect } from 'react';
import { fadeInUp } from '@/utils/animations';
import { motion } from 'framer-motion';
import useArticlesStore from '@/stores/articlesStore';
import Link from 'next/link';
import OrderIcon from '@/icons/OrderIcon';
import usePostsStore from '@/stores/postsStore';
import { useTranslations } from 'next-intl';

const ArticlesWrap = () => {
  const posts = usePostsStore(state => state.posts);
  const fetchPosts = usePostsStore(state => state.fetchPosts);

  const t = useTranslations('industryNews.wrap');

  useEffect(() => {
    fetchPosts()
      .then(() => console.log('Articles loaded:', posts))
      .catch(error => console.error('Error loading articles:', error));
  }, [fetchPosts]);

  return (
    <section className="news-wrap">
      <div className="_container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {t('title', { fallback: 'News' })}
        </motion.h2>
        <div className="news-wrap__body">
          {posts.length > 0 ? (
            posts.map(post => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                key={post.id}
                className="case"
              >
                <div className="top">
                  <img src={post.image.url} alt={post.title} />
                  <h3>{post.title}</h3>
                </div>
                <Link href={`/industry-news/${post.slug}`} className="more">
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
