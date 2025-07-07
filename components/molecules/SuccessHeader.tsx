import React from 'react';
import { SuccessIcon } from '@/components/atoms/SuccessIcon';
import { PageTitle } from '@/components/atoms/PageTitle';
import { PageDescription } from '@/components/atoms/PageDescription';

export const SuccessHeader: React.FC = () => {
  return (
    <div className="space-y-6">
      <SuccessIcon />
      
      <div className="space-y-4">
        <PageTitle>Order Confirmed!</PageTitle>
        <PageDescription>
          Thank you for your purchase. Your order has been successfully placed.
        </PageDescription>
      </div>
    </div>
  );
};