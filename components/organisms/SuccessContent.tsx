import React from 'react';
import { SuccessHeader } from '@/components/molecules/SuccessHeader';
import { OrderConfirmation } from '@/components/molecules/OrderConfirmation';
import { SuccessActions } from '@/components/molecules/SuccessActions';

interface SuccessContentProps {
  orderId: string | null;
  hasOrderId: boolean;
  formattedOrderId: string;
}

export const SuccessContent: React.FC<SuccessContentProps> = ({
  orderId,
  hasOrderId,
  formattedOrderId,
}) => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="mx-auto max-w-md space-y-8">
        <SuccessHeader />
        
        <OrderConfirmation
          orderId={orderId}
          hasOrderId={hasOrderId}
          formattedOrderId={formattedOrderId}
        />
        
        <SuccessActions />
      </div>
    </div>
  );
};