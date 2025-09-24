'use client';
import '@/styles/cart.scss';
import React, { useState, useEffect } from 'react';
import DeleteIcon from '@/icons/DeleteIcon';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import useCartStore from '@/stores/cartStore'; // Імпорт Zustend Store
import { useTranslations } from 'next-intl';

const Cart = () => {
  const {
    cart,
    deleteFromCart,
    clearCart,
    totalAmount,
    increaseQuantity,
    decreaseQuantity,
  } = useCartStore();
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  const t = useTranslations('cart');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted ? (
        <>
          {cart.length > 0 ? (
            <div>
              <section className="cart-wrap">
                <div className="_container">
                  <div className="cart">
                    <h1>{t('title', { fallback: 'Cart' })}</h1>
                    <div className="cart-head">
                      <div>
                        {t('serviceName', { fallback: 'Service Name' })}
                      </div>
                      <div>{t('price', { fallback: 'Price' })}</div>
                      <div>{t('quantity', { fallback: 'Quantity' })}</div>
                      <div>{t('subtotal', { fallback: 'Subtotal' })}</div>
                    </div>
                    <div className="cart-content">
                      {cart.map(item => (
                        <div key={item.id} className="cart-item">
                          <div>
                            <button onClick={() => deleteFromCart(item.id)}>
                              <DeleteIcon />
                            </button>
                            <span>{item.name}</span>
                          </div>
                          <div>€{item.attributes.price}</div>
                          <div>
                            <div className="qt">
                              <img
                                src="/images/cart/minus.svg"
                                className="quantity-minus"
                                onClick={() => decreaseQuantity(item.id)} // Зменшення кількості
                              />
                              <span>{item.quantity}</span>
                              <img
                                src="/images/cart/plus.svg"
                                className="quantity-plus"
                                onClick={() => increaseQuantity(item.id)} // Збільшення кількості
                              />
                            </div>
                          </div>

                          <div>€{item.quantity * item.attributes.price}</div>
                        </div>
                      ))}
                    </div>

                    <div className="total">
                      {t('total', { fallback: 'Total' })}:{' '}
                      <span>€{totalAmount}</span>
                    </div>
                    <div className="button-wrap">
                      <Link className="main-button" href="/checkout">
                        <span>{t('checkout', { fallback: 'Checkout' })}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          ) : (
            <div>
              <section className="cart-wrap empty">
                <div className="_container">
                  <h1>
                    {t('empty.title', { fallback: 'Your cart is empty.' })}
                  </h1>
                  <p>
                    {t('empty.text', {
                      fallback:
                        'Discover our wide array of business and marketing consulting services!',
                    })}
                  </p>
                  <Link href="/">
                    <span>{t('goHome', { fallback: 'Go home' })}</span>
                  </Link>
                </div>
              </section>
            </div>
          )}
        </>
      ) : (
        <section className="cart-wrap">
          <div className="_container"></div>
        </section>
      )}
    </>
  );
};

export default Cart;
