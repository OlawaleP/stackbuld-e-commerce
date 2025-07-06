import React from 'react';
import { Input } from '@/components/atoms/Input';
import { CheckoutForm, FormErrors } from '@/lib/utils';

interface PaymentInformationProps {
  formData: CheckoutForm;
  formErrors: FormErrors;
  displayCvv: string;
  onInputChange: (field: keyof CheckoutForm, value: string) => void;
  onCvvChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PaymentInformation: React.FC<PaymentInformationProps> = ({
  formData,
  formErrors,
  displayCvv,
  onInputChange,
  onCvvChange,
}) => {
  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900">Payment Information</h3>
      <div className="mt-4 space-y-4">
        <Input
          label="Card Number"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={(e) => onInputChange('cardNumber', e.target.value)}
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
            onChange={(e) => onInputChange('expiryDate', e.target.value)}
            placeholder="MM/YY"
            maxLength={5}
            required
            error={formErrors.expiryDate}
          />
          <Input
            label="CVV"
            name="cvv"
            value={displayCvv}
            onChange={onCvvChange}
            placeholder="123"
            maxLength={3}
            required
            error={formErrors.cvv}
          />
        </div>
      </div>
    </div>
  );
};