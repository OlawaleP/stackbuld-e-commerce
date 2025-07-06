'use client';

import React from 'react';
import { CheckoutLayout } from '@/components/templates/CheckoutLayout';
import { useCheckout } from '@/hooks/useCheckout';
import { CheckoutForm } from '@/components/organisms/CheckoutForm';
import { EmptyCart } from '@/components/molecules/EmptyCartCheckout';
import { OrderSummary } from '@/components/organisms/OrderSummaryCheckout';

export default function CheckoutPage() {
  const {
    items,
    formData,
    formErrors,
    displayCvv,
    isProcessing,
    total,
    tax,
    grandTotal,
    handleSubmit,
    handleFormInputChange,
    handleCvvChange,
  } = useCheckout();

  if (items.length === 0) {
    return (
      <CheckoutLayout>
        <EmptyCart />
      </CheckoutLayout>
    );
  }

  return (
    <CheckoutLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
          <p className="mt-2 text-gray-600">Complete your purchase</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <CheckoutForm
            formData={formData}
            formErrors={formErrors}
            displayCvv={displayCvv}
            isProcessing={isProcessing}
            grandTotal={grandTotal}
            onSubmit={handleSubmit}
            onInputChange={handleFormInputChange}
            onCvvChange={handleCvvChange}
          />

          <OrderSummary
            items={items}
            total={total}
            tax={tax}
            grandTotal={grandTotal}
          />
        </div>
      </div>
    </CheckoutLayout>
  );
}