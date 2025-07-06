'use client';

import React from 'react';
import { OrdersTemplate } from '@/components/templates/OrdersTemplate';
import { useOrdersPage } from '@/hooks/useOrdersPage';

export default function OrdersPage(): JSX.Element {
  const {
    orders,
    isLoading,
    error,
    hasOrders,
    handleRetry,
  } = useOrdersPage();

  return (
    <OrdersTemplate
      orders={orders}
      isLoading={isLoading}
      error={error}
      hasOrders={hasOrders ?? false}
      onRetry={handleRetry}
    />
  );
}
