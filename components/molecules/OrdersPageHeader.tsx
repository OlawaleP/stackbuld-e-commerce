import React from 'react';

interface OrdersPageHeaderProps {
  title: string;
  description: string;
  orderCount?: number;
}

export const OrdersPageHeader: React.FC<OrdersPageHeaderProps> = ({
  title,
  description,
  orderCount,
}) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>
        {orderCount !== undefined && (
          <div className="text-right">
            <p className="text-sm text-gray-500">Total Orders</p>
            <p className="text-2xl font-bold text-gray-900">{orderCount}</p>
          </div>
        )}
      </div>
    </div>
  );
};