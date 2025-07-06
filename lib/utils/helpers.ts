interface CheckoutForm {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postalCode: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

interface FormErrors {
  email?: string;
  firstName?: string;
  lastName?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
}

export const formatCardNumber = (value: string): string => {
  const digits = value.replace(/\D/g, '').slice(0, 16);
  const formatted = digits.match(/.{1,4}/g)?.join(' ').trim() || digits;
  return formatted;
};

export const formatExpiryDate = (value: string): string => {
  const cleaned = value.replace(/\D/g, '').slice(0, 4);
  if (cleaned.length >= 2) {
    return `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
  }
  return cleaned;
};

export const validateForm = (formData: CheckoutForm): FormErrors => {
  const errors: FormErrors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const currentYear = new Date().getFullYear() % 100;
  const currentMonth = new Date().getMonth() + 1;

  if (!formData.email || !emailRegex.test(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!formData.firstName.trim()) {
    errors.firstName = 'First name is required';
  }
  if (!formData.lastName.trim()) {
    errors.lastName = 'Last name is required';
  }
  if (!formData.address.trim()) {
    errors.address = 'Address is required';
  }
  if (!formData.city.trim()) {
    errors.city = 'City is required';
  }
  if (!formData.postalCode.trim()) {
    errors.postalCode = 'Postal code is required';
  }

  const cardNumberDigits = formData.cardNumber.replace(/\D/g, '');
  if (!cardNumberDigits || cardNumberDigits.length !== 16) {
    errors.cardNumber = 'Card number must be 16 digits';
  }

  const expiryParts = formData.expiryDate.split('/');
  if (!formData.expiryDate || expiryParts.length !== 2) {
    errors.expiryDate = 'Expiry date must be in MM/YY format';
  } else {
    const month = parseInt(expiryParts[0], 10);
    const year = parseInt(expiryParts[1], 10);
    
    if (month < 1 || month > 12) {
      errors.expiryDate = 'Month must be between 01 and 12';
    } else if (year < currentYear || year > currentYear + 10) {
      errors.expiryDate = 'Year must be between current year and 10 years in the future';
    } else if (year === currentYear && month < currentMonth) {
      errors.expiryDate = 'Card has expired';
    }
  }

  if (!formData.cvv || !/^\d{3}$/.test(formData.cvv)) {
    errors.cvv = 'CVV must be 3 digits';
  }

  return errors;
};

export const handleInputChange = (
  field: keyof CheckoutForm,
  value: string,
  formData: CheckoutForm,
  setFormData: (data: CheckoutForm) => void,
  setFormErrors: (errors: FormErrors | ((prevErrors: FormErrors) => FormErrors)) => void,
  setDisplayCvv: (value: string) => void
) => {
  const updatedFormData = { ...formData };

  if (field === 'cardNumber') {
    const formatted = formatCardNumber(value);
    updatedFormData[field] = formatted;
  } else if (field === 'expiryDate') {
    const formatted = formatExpiryDate(value);
    updatedFormData[field] = formatted;
  } else if (field === 'cvv') {
    const cleanedValue = value.replace(/\*+/g, '').replace(/\D/g, '').slice(0, 3);
    updatedFormData[field] = cleanedValue;
    setDisplayCvv(cleanedValue ? '*'.repeat(cleanedValue.length) : '');
  } else {
    updatedFormData[field] = value;
  }

  setFormData(updatedFormData);

  setFormErrors((prevErrors: FormErrors) => {
    const newErrors = { ...prevErrors };
    delete newErrors[field];
    return newErrors;
  });
};