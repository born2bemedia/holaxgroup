import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import useOrderStore from '@/stores/orderStore'; // Import the Zustand store
import useAuthStore from '@/stores/authStore'; // Import Auth Zustand store
import { useTranslations } from 'next-intl';

function AvailableFiles() {
  const { currentUser } = useAuthStore(); // Access currentUser from Zustand
  const { getOrdersByUser } = useOrderStore(); // Access orders and actions from Zustand
  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const t = useTranslations('dashboard.availableFiles');

  const formatDate = dateString => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      day: '2-digit',
      month: 'long',
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
      } catch (error) {
        console.error('Failed to fetch orders:', error);
        setError('Failed to load orders.');
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [currentUser, getOrdersByUser]);

  const hasInvoice = orders?.some(order => order.invoice?.url); // Check if any order has an invoice

  return (
    <div>
      {loading && (
        <p className="">{t('loading', { fallback: 'Loading orders...' })}</p>
      )}
      {error && <p className="">{error}</p>}
      <div className="downloads-wrap">
        {hasInvoice ? (
          <div>
            {orders.map(
              (order, index) =>
                order.invoice?.url && ( // Render only orders with an invoice
                  <div className="download" key={order.id}>
                    <div>
                      <div>
                        <span>{String(index + 1).padStart(2, '0')}.</span>
                      </div>
                      <div>
                        <span>
                          {t('invoiceDate', { fallback: 'Invoice date:' })}
                        </span>{' '}
                        {formatDate(order.createdAt)}
                      </div>
                      <div>
                        <span>
                          {t('invoiceNum', { fallback: 'Invoice num:' })}
                        </span>{' '}
                        #{order.id}
                      </div>
                    </div>
                    <Link href={`${order.invoice.url}`} target="_blank">
                      <span>
                        {t('downloadInvoice', { fallback: 'Download Invoice' })}
                      </span>
                      <img src="/images/download.svg" />
                    </Link>
                  </div>
                ),
            )}
          </div>
        ) : (
          <div className="empty">
            {t('noDownloads', {
              fallback: 'There are no downloads available yet.',
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default AvailableFiles;
