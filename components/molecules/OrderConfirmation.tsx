import React from 'react';
import { ConfirmationNotice } from '@/components/atoms/ConfirmationNotice';
import { OrderIdDisplay } from '../atoms/OrderId';

interface OrderConfirmationProps {
  orderId: string | null;
  hasOrderId: boolean;
  formattedOrderId: string;
}

export const OrderConfirmation: React.FC<OrderConfirmationProps> = ({
  orderId,
  hasOrderId,
  formattedOrderId,
}) => {
  return (
    <div className="space-y-6">
      {hasOrderId && (
        <OrderIdDisplay
          orderId={orderId}
          formattedOrderId={formattedOrderId}
        />
      )}
      
      <ConfirmationNotice />
    </div>
  );
};