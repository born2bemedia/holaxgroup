'use client';
import React, { useEffect, useState } from 'react';
import ProductRow from './ProductRow';
import { useTranslations } from 'next-intl';

const ProductsTabs = ({ products }) => {
  const [productObject, setProductObject] = useState({});
  const [activeTab, setActiveTab] = useState('tab1');

  const t = useTranslations('marketingConsulting.products');

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
      label: t('categories.0', { fallback: 'Brand Strategy & Development' }),
      id: 'brand-strategy-development',
    },
    {
      key: 'tab2',
      label: t('categories.1', {
        fallback: 'Digital Marketing & Online Presence',
      }),
      id: 'digital-marketing-online-presence',
    },
    {
      key: 'tab3',
      label: t('categories.2', { fallback: 'Content & Communication' }),
      id: 'content-communication',
    },
    {
      key: 'tab4',
      label: t('categories.3', { fallback: 'Market Research & Analysis' }),
      id: 'market-research-analysis',
    },
    {
      key: 'tab5',
      label: t('categories.4', { fallback: 'Campaign Management & Execution' }),
      id: 'campaign-management-execution',
    },
  ];

  return (
    <section className="products">
      <div className="_container">
        <h2>{t('howWeCanHelp', { fallback: 'How We Can Help' })}</h2>
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
