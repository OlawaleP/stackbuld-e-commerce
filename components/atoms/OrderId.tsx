import React from 'react';

interface OrderIdDisplayProps {
  orderId: string | null;
  formattedOrderId: string;
  className?: string;
}

export const OrderIdDisplay: React.FC<OrderIdDisplayProps> = ({
  orderId,
  formattedOrderId,
  className = "rounded-lg bg-gray-50 p-4",
}) => {
  if (!orderId) return null;
  
  return (
    <div className={className}>
      <p className="text-sm text-gray-600">Order ID</p>
      <p className="text-lg font-mono font-semibold text-gray-900">
        {formattedOrderId}
      </p>
    </div>
  );
};