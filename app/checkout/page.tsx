'use client';

import React from 'react';
import { useCartStore } from '@/lib/store/cart-store';
import { Button } from '@/components/atoms/Button';
import { Price } from '@/components/atoms/Price';
import { Input } from '@/components/atoms/Input';
import { CheckoutLayout } from '@/components/templates/CheckoutLayout';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { handleInputChange, validateForm } from '@/lib/utils/helpers';
import { setToStorage } from '@/lib/utils/storage';
import { Order } from '@/lib/types/order';
import { CheckoutForm, FormErrors } from '@/lib/utils';

export default function CheckoutPage() {
  const { items, getTotal, clearCart } = useCartStore();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState<CheckoutForm>({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [displayCvv, setDisplayCvv] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setFormErrors({});
    
    const errors = validateForm(formData);
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      const firstErrorField = Object.keys(errors)[0];
      const errorElement = document.querySelector(`[name="${firstErrorField}"]`) as HTMLElement;
      if (errorElement) {
        errorElement.focus();
      }
      return;
    }

    setIsProcessing(true);
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      const orderId = Math.random().toString(36).substr(2, 9).toUpperCase();
      
      const order: Order = {
        id: orderId,
        date: new Date().toISOString(),
        total: getTotal() * 1.08, 
        status: 'Confirmed',
        items: items.map((item) => ({
          product: item.product,
          quantity: item.quantity,
        })),
      };
      
      const existingOrders = JSON.parse(localStorage.getItem('stackbuild-orders') || '[]');
      setToStorage('stackbuild-orders', [...existingOrders, order]);
      
      clearCart();
      router.push(`/success?orderId=${orderId}`);
    } catch (error) {
      console.error('Payment processing error:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleFormInputChange = (field: keyof CheckoutForm, value: string) => {
    handleInputChange(field, value, formData, setFormData, setFormErrors, setDisplayCvv);
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    let actualValue = formData.cvv;
    
    if (inputValue.length > displayCvv.length) {
      const newChar = inputValue.slice(-1);
      if (/\d/.test(newChar)) {
        actualValue = (formData.cvv + newChar).slice(0, 3);
      }
    } else if (inputValue.length < displayCvv.length) {
      actualValue = formData.cvv.slice(0, inputValue.length);
    }
    
    setFormData({ ...formData, cvv: actualValue });
    setDisplayCvv(actualValue ? '*'.repeat(actualValue.length) : '');
    
    setFormErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors.cvv;
      return newErrors;
    });
  };

  const total = getTotal();
  const tax = total * 0.08;
  const grandTotal = total + tax;

  if (items.length === 0) {
    return (
      <CheckoutLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Your cart is empty</h2>
          <p className="mt-2 text-gray-600">Add some items to checkout</p>
        </div>
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
          <div className="space-y-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
                <div className="mt-4 space-y-4">
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleFormInputChange('email', e.target.value)}
                    required
                    error={formErrors.email}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900">Shipping Address</h3>
                <div className="mt-4 space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Input
                      label="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleFormInputChange('firstName', e.target.value)}
                      required
                      error={formErrors.firstName}
                      placeholder="Ola"
                    />
                    <Input
                      label="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleFormInputChange('lastName', e.target.value)}
                      required
                      error={formErrors.lastName}
                      placeholder="Ojo"
                    />
                  </div>
                  <Input
                    label="Address"
                    name="address"
                    value={formData.address}
                    onChange={(e) => handleFormInputChange('address', e.target.value)}
                    required
                    error={formErrors.address}
                    placeholder="123 Main Street"
                  />
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Input
                      label="City"
                      name="city"
                      value={formData.city}
                      onChange={(e) => handleFormInputChange('city', e.target.value)}
                      required
                      error={formErrors.city}
                      placeholder="New York"
                    />
                    <Input
                      label="Postal Code"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={(e) => handleFormInputChange('postalCode', e.target.value)}
                      required
                      error={formErrors.postalCode}
                      placeholder="10001"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900">Payment Information</h3>
                <div className="mt-4 space-y-4">
                  <Input
                    label="Card Number"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={(e) => handleFormInputChange('cardNumber', e.target.value)}
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    required
                    error={formErrors.cardNumber}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      label="Expiry Date"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={(e) => handleFormInputChange('expiryDate', e.target.value)}
                      placeholder="MM/YY"
                      maxLength={5}
                      required
                      error={formErrors.expiryDate}
                    />
                    <Input
                      label="CVV"
                      name="cvv"
                      value={displayCvv}
                      onChange={handleCvvChange}
                      placeholder="123"
                      maxLength={3}
                      required
                      error={formErrors.cvv}
                    />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                isLoading={isProcessing}
                disabled={isProcessing}
              >
                {isProcessing ? 'Processing...' : `Place Order - $${grandTotal.toFixed(2)}`}
              </Button>
            </form>
          </div>

          <div className="lg:sticky lg:top-8">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
              <h3 className="text-lg font-medium text-gray-900">Order Summary</h3>
              
              <div className="mt-4 space-y-4">
                {items.map((item) => (
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
                      <h4 className="text-sm font-medium text-gray-900">
                        {item.product.name}
                      </h4>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <Price amount={item.product.price * item.quantity} />
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-3 border-t border-gray-200 pt-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <Price amount={total} />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-900">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax</span>
                  <Price amount={tax} />
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between text-base font-medium">
                    <span className="text-gray-900">Total</span>
                    <Price amount={grandTotal} size="lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CheckoutLayout>
  );
}