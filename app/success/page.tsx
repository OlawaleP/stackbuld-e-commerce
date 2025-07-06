'use client';

import React, { Suspense } from 'react';
import { Button } from '@/components/atoms/Button';
import { MainLayout } from '@/components/templates/MainLayout';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="mx-auto max-w-md">
        <div className="mb-6 flex justify-center">
          <CheckCircle className="h-16 w-16 text-green-600" />
        </div>
        
        <h1 className="mb-4 text-3xl font-bold text-gray-900">
          Order Confirmed!
        </h1>
        
        <p className="mb-2 text-gray-600">
          Thank you for your purchase. Your order has been successfully placed.
        </p>
        
        {orderId && (
          <div className="mb-8 rounded-lg bg-gray-50 p-4">
            <p className="text-sm text-gray-600">Order ID</p>
            <p className="text-lg font-mono font-semibold text-gray-900">
              {orderId}
            </p>
          </div>
        )}
        
        <p className="mb-8 text-sm text-gray-500">
          A confirmation email has been sent to your email address.
        </p>
        
        <div className="space-y-4">
          <Link href="/">
            <Button size="lg" className="w-full">
              Continue Shopping
            </Button>
          </Link>
          
          <Link href="/orders" className="block">
            <Button variant="outline" size="lg" className="w-full">
              View Order History
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <MainLayout
      title="Order Confirmation"
      description="Thank you for your purchase at Mini-Commerce"
    >
      <Suspense fallback={
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        </div>
      }>
        <SuccessContent />
      </Suspense>
    </MainLayout>
  );
}