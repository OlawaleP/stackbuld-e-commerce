'use client';

import React from 'react';
import { useOrders } from '@/lib/queries/orders';
import { MainLayout } from '@/components/templates/MainLayout';
import { Price } from '@/components/atoms/Price';
import { Button } from '@/components/atoms/Button';
import { LoadingSpinner } from '@/components/atoms/LoadingSpinner';
import Link from 'next/link';
import { format } from 'date-fns';

export default function OrdersPage() {
  const { data: orders, isLoading, error } = useOrders();

  if (isLoading) {
    return (
      <MainLayout title="Order History" description="View your past orders at Mini-Commerce">
        <div className="flex min-h-[400px] items-center justify-center">
          <LoadingSpinner size="lg" />
        </div>
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout title="Order History" description="View your past orders at Mini-Commerce">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600">Error Loading Orders</h2>
          <p className="mt-2 text-gray-600">Unable to fetch orders. Please try again later.</p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout title="Order History" description="View your past orders at Mini-Commerce">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Order History</h1>
          <p className="mt-2 text-gray-600">View your past orders and their details</p>
        </div>

        {orders && orders.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse rounded-lg border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Order ID</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Date</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Total</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-t border-gray-200">
                    <td className="px-6 py-4 text-sm text-gray-900">{order.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {format(new Date(order.date), 'MMM dd, yyyy')}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <Price amount={order.total} />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{order.status}</td>
                    <td className="px-6 py-4">
                      <Link href={`/orders/${order.id}`}>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-xl font-medium text-gray-900">No Orders Found</h2>
            <p className="mt-2 text-gray-600">You haven&apos;t placed any orders yet.</p>
            <Link href="/" className="mt-4 inline-block">
              <Button>Shop Now</Button>
            </Link>
          </div>
        )}
      </div>
    </MainLayout>
  );
}