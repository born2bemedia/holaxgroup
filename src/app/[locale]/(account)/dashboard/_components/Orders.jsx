import React, { useState, useEffect } from 'react';
import useOrderStore from '@/stores/orderStore'; // Import the order store
import useAuthStore from '@/stores/authStore';
import Link from 'next/link'; // Use the standard Next.js Link component
import { useTranslations } from 'next-intl';

function Orders() {
  const { currentUser, fetchCurrentUser } = useAuthStore();
  const { getOrdersByUser } = useOrderStore(); // Use getOrdersByUser from the Zustand store
  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const t = useTranslations('dashboard.orders');

  const formatDate = dateString => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(date);
  };

  useEffect(() => {
    if (!currentUser) return;

    const fetchOrders = async () => {
      setLoading(true);
      try {
        const ordersData = await getOrdersByUser(currentUser.email); // Fetch orders using Zustand
        setOrders(ordersData);
        console.log('ordersData', ordersData);
      } catch (error) {
        console.error('Failed to fetch orders:', error);
        setError('Failed to load orders.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
    console.log('orders', orders);
  }, [currentUser, getOrdersByUser]);

  return (
    <div>
      {loading && <p>{t('loading', { fallback: 'Loading orders...' })}</p>}
      {error && <p>{error}</p>}
      {orders ? (
        <div className="orders-wrap">
          <table className="orders">
            <thead>
              <tr>
                <th>{t('orderId', { fallback: 'Order ID' })}</th>
                <th>{t('date', { fallback: 'Date' })}</th>

                <th>{t('service', { fallback: 'Service' })}</th>

                <th>{t('cost', { fallback: 'Cost' })}</th>
                <th>{t('status', { fallback: 'Status' })}</th>
                <th>{t('invoice', { fallback: 'Invoice' })}</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id}>
                  <td>
                    <span className="id">#{order.id}</span>
                  </td>
                  <td>
                    <span>{formatDate(order.createdAt)}</span>
                  </td>

                  <td>
                    <span>
                      {order.products.map(product => (
                        <span
                          key={product.id}
                          target="_blank"
                          href={'#'}
                          className=""
                        >
                          {product.title}
                          <br />
                        </span>
                      ))}
                    </span>
                  </td>

                  <td>
                    <span>€{order.amount}</span>
                  </td>
                  <td>
                    <span>
                      {order.order_status === 'cancelled' ? (
                        <div className="cancelled">
                          {t('cancelled', { fallback: 'Cancelled' })}
                        </div>
                      ) : (
                        <div className="completed">
                          {t('completed', { fallback: 'Completed' })}
                        </div>
                      )}
                    </span>
                  </td>
                  <td>
                    <span>
                      {order.invoice?.url ? (
                        <Link href={`${order.invoice.url}`} target="_blank">
                          <img src="/images/download.svg" />
                        </Link>
                      ) : (
                        <Link href="#" target="_blank">
                          <img
                            className="inactive"
                            src="/images/download.svg"
                          />
                        </Link>
                      )}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="empty">
          {t('noOrders', { fallback: 'There are currently no orders placed.' })}
        </div>
      )}
    </div>
  );
}

export default Orders;
