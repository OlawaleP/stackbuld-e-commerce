'use client';

import React from 'react';
import { useOrderDetails } from '@/hooks/useOrderDetails';
import { OrderDetailsTemplate } from '@/components/templates/OrderDetailsTemplate';

export default function OrderDetailsPage(): JSX.Element {
  const { order, isLoading, error, orderId } = useOrderDetails();

  return (
    <OrderDetailsTemplate
      order={order}
      isLoading={isLoading}
      error={error}
      orderId={orderId}
    />
  );
}