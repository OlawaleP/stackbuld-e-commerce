import React from 'react';
import { Button } from '@/components/atoms/Button';
import { ContactInformation } from './ContactInformation';
import { ShippingAddress } from './ShippingAddress';
import { PaymentInformation } from './PaymentInformation';
import { CheckoutForm as CheckoutFormType, FormErrors } from '@/lib/utils';

interface CheckoutFormProps {
  formData: CheckoutFormType;
  formErrors: FormErrors;
  displayCvv: string;
  isProcessing: boolean;
  grandTotal: number;
  onSubmit: (e: React.FormEvent) => void;
  onInputChange: (field: keyof CheckoutFormType, value: string) => void;
  onCvvChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckoutForm: React.FC<CheckoutFormProps> = ({
  formData,
  formErrors,
  displayCvv,
  isProcessing,
  grandTotal,
  onSubmit,
  onInputChange,
  onCvvChange,
}) => {
  return (
    <div className="space-y-8">
      <form onSubmit={onSubmit} className="space-y-6">
        <ContactInformation
          formData={formData}
          formErrors={formErrors}
          onInputChange={onInputChange}
        />

        <ShippingAddress
          formData={formData}
          formErrors={formErrors}
          onInputChange={onInputChange}
        />

        <PaymentInformation
          formData={formData}
          formErrors={formErrors}
          displayCvv={displayCvv}
          onInputChange={onInputChange}
          onCvvChange={onCvvChange}
        />

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
  );
};