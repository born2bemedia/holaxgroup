import AddToCartButton from '@/components/AddToCartButton';
import OrderIcon from '@/icons/OrderIcon';
import PackageIcon1 from '@/icons/PackageIcon1';
import PackageIcon2 from '@/icons/PackageIcon2';
import PackageIcon3 from '@/icons/PackageIcon3';
import PackageIcon4 from '@/icons/PackageIcon4';
import useProductStore from '@/stores/productsStore';
import Link from 'next/link';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import PackagesSlider from './PackagesSlider';
import OrderButton from '@/components/OrderButton';
import { getTranslations } from 'next-intl/server';

const PackagesWrap = async ({ locale }) => {
  const { fetchProducts, getProductByCategory } = useProductStore.getState();
  await fetchProducts(locale);
  const products = getProductByCategory(
    'marketing-consulting-complete-packages',
  );

  const t = await getTranslations('marketingConsulting.packages');

  return (
    <section className="packages-wrap">
      <div className="_container">
        <div className="packages-wrap__body">
          <h2>
            {t('title', { fallback: 'Marketing Consulting Complete Packages' })}
          </h2>
          <p>
            {t('description', {
              fallback:
                'Transform your marketing efforts with Holax Group comprehensive consulting packages. Our packages are designed to offer a step-by-step enhancement of your marketing capabilities, starting with foundational brand strategies and advancing to full-scale market research and public relations. Whether you’re looking to boost your online presence, engage your audience through compelling content, or leverage influencer partnerships, our packages provide the perfect blend of services to propel your brand forward. Select the package that best fits your marketing objectives and watch your brand soar.',
            })}
          </p>
          <PackagesSlider products={products} />
          <div className="row">
            {products.map((product, index) => (
              <div className="product" key={index}>
                <div className="top">
                  {index == 0 && <PackageIcon1 />}
                  {index == 1 && <PackageIcon2 />}
                  {index == 2 && <PackageIcon3 />}
                  {index == 3 && <PackageIcon4 />}
                  <h3>{product.title}</h3>
                  <div>
                    <ReactMarkdown>{product.description}</ReactMarkdown>
                  </div>
                </div>
                <div className="bottom">
                  <div className="price">
                    <span>{product.for_request && 'From '}</span> €
                    {product.price}{' '}
                    <span>{product.suffix && product.suffix}</span>
                  </div>
                  {product.for_request ? (
                    <OrderButton service={product.title} type="package" />
                  ) : (
                    <AddToCartButton product={product} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesWrap;
