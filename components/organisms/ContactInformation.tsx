import React from 'react';
import { Input } from '@/components/atoms/Input';
import { CheckoutForm, FormErrors } from '@/lib/utils';

interface ContactInformationProps {
  formData: CheckoutForm;
  formErrors: FormErrors;
  onInputChange: (field: keyof CheckoutForm, value: string) => void;
}

export const ContactInformation: React.FC<ContactInformationProps> = ({
  formData,
  formErrors,
  onInputChange,
}) => {
  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
      <div className="mt-4 space-y-4">
        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={(e) => onInputChange('email', e.target.value)}
          required
          error={formErrors.email}
          placeholder="your@email.com"
        />
      </div>
    </div>
  );
};