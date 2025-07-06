import React from 'react';
import { Input } from '@/components/atoms/Input';
import { CheckoutForm, FormErrors } from '@/lib/utils';

interface ShippingAddressProps {
  formData: CheckoutForm;
  formErrors: FormErrors;
  onInputChange: (field: keyof CheckoutForm, value: string) => void;
}

export const ShippingAddress: React.FC<ShippingAddressProps> = ({
  formData,
  formErrors,
  onInputChange,
}) => {
  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900">Shipping Address</h3>
      <div className="mt-4 space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Input
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={(e) => onInputChange('firstName', e.target.value)}
            required
            error={formErrors.firstName}
            placeholder="Ola"
          />
          <Input
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={(e) => onInputChange('lastName', e.target.value)}
            required
            error={formErrors.lastName}
            placeholder="Ojo"
          />
        </div>
        <Input
          label="Address"
          name="address"
          value={formData.address}
          onChange={(e) => onInputChange('address', e.target.value)}
          required
          error={formErrors.address}
          placeholder="123 Main Street"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Input
            label="City"
            name="city"
            value={formData.city}
            onChange={(e) => onInputChange('city', e.target.value)}
            required
            error={formErrors.city}
            placeholder="New York"
          />
          <Input
            label="Postal Code"
            name="postalCode"
            value={formData.postalCode}
            onChange={(e) => onInputChange('postalCode', e.target.value)}
            required
            error={formErrors.postalCode}
            placeholder="10001"
          />
        </div>
      </div>
    </div>
  );
};
