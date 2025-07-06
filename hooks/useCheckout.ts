import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/lib/store/cart-store';
import { handleInputChange, validateForm } from '@/lib/utils/helpers';
import { setToStorage } from '@/lib/utils/storage';
import { Order } from '@/lib/types/order';
import { CheckoutForm, FormErrors } from '@/lib/utils';

export const useCheckout = () => {
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

  return {
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
  };
};
