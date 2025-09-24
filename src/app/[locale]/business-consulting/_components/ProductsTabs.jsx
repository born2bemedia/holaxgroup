'use client';
import React, { useEffect, useState } from 'react';
import ProductRow from './ProductRow';
import { useTranslations } from 'next-intl';

const ProductsTabs = ({ products }) => {
  const [productObject, setProductObject] = useState({});
  const [activeTab, setActiveTab] = useState('tab1');

  const t = useTranslations('businessConsulting.tabs');

  useEffect(() => {
    setProductObject(products);
    console.log(products);
  }, [products]);

  const tabChange = value => {
    setActiveTab(value);
  };

  const categories = [
    {
      key: 'tab1',
      label: t('categories.0', {
        fallback: 'Strategic Planning & Development',
      }),
      id: 'strategic-planning-development',
    },
    {
      key: 'tab2',
      label: t('categories.1', { fallback: 'Operational Excellence' }),
      id: 'operational-excellence',
    },
    {
      key: 'tab3',
      label: t('categories.2', { fallback: 'Financial Optimization' }),
      id: 'financial-optimization',
    },
    {
      key: 'tab4',
      label: t('categories.3', {
        fallback: 'Customer & Experience Management',
      }),
      id: 'customer-experience-management',
    },
    {
      key: 'tab5',
      label: t('categories.4', {
        fallback: 'Technology & Digital Transformation',
      }),
      id: 'technology-digital-transformation',
    },
  ];

  return (
    <section className="products">
      <div className="_container">
        <h2>{t('title', { fallback: 'How We Can Help' })}</h2>
        <div className="products__body">
          <div className="tabs">
            <div className="tabs-nav">
              {categories.map(category => (
                <div key={category.key}>
                  <button
                    className={`${activeTab === category.key ? 'active' : ''}`}
                    onClick={() => tabChange(category.key)}
                  >
                    {category.label}
                  </button>
                  <div className="mob-prod">
                    <div
                      className={`${
                        activeTab === category.key ? 'active' : 'hidden'
                      }`}
                    >
                      <ProductRow category={category.id} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="tabs-content">
              {categories.map(category => (
                <div
                  key={category.key}
                  className={`${
                    activeTab === category.key ? 'active' : 'hidden'
                  }`}
                >
                  <ProductRow category={category.id} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsTabs;
