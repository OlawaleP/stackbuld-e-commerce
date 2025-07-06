'use client';

import React from 'react';
import { useOrder } from '@/lib/queries/orders';
import { MainLayout } from '@/components/templates/MainLayout';
import { Price } from '@/components/atoms/Price';
import { LoadingSpinner } from '@/components/atoms/LoadingSpinner';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { format } from 'date-fns';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button';

export default function OrderDetailsPage() {
  const params = useParams();
  const orderId = params.orderId as string;
  const { data: order, isLoading, error } = useOrder(orderId);

  if (isLoading) {
    return (
      <MainLayout
        title="Order Details"
        description="View details of your order at Mini-Commerce"
      >
        <div className="flex min-h-[400px] items-center justify-center">
          <LoadingSpinner size="lg" />
        </div>
      </MainLayout>
    );
  }

  if (error || !order) {
    return (
      <MainLayout
        title="Order Not Found"
        description="View details of your order at Mini-Commerce"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600">Order Not Found</h2>
          <p className="mt-2 text-gray-600">The order you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/orders" className="mt-4 inline-block">
            <Button>Back to Orders</Button>
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout
      title={`Order ${order.id}`}
      description={`Details for order ${order.id} at Mini-Commerce`}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Order {order.id}</h1>
          <p className="mt-2 text-gray-600">
            Placed on {format(new Date(order.date), 'MMM dd, yyyy')}
          </p>
        </div>

        <div className="space-y-8">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-lg font-medium text-gray-900">Order Details</h2>
            <div className="mt-4 space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Order ID</span>
                <span className="text-sm font-medium text-gray-900">{order.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Date</span>
                <span className="text-sm font-medium text-gray-900">
                  {format(new Date(order.date), 'MMM dd, yyyy')}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Status</span>
                <span className="text-sm font-medium text-gray-900">{order.status}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total</span>
                <Price amount={order.total} size="md" />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-lg font-medium text-gray-900">Items</h2>
            <div className="mt-4 space-y-4">
              {order.items.map((item) => (
                <div key={item.product.id} className="flex items-center space-x-3">
                  <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900">{item.product.name}</h3>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <Price amount={item.product.price * item.quantity} />
                </div>
              ))}
            </div>
          </div>

          <Link href="/orders">
            <Button variant="outline" className="mt-4">Back to Orders</Button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}