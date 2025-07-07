import React from 'react';
import { MainLayout } from '@/components/templates/MainLayout';

interface SuccessTemplateProps {
  children: React.ReactNode;
}

export const SuccessTemplate: React.FC<SuccessTemplateProps> = ({ children }) => {
  return (
    <MainLayout
      title="Order Confirmation"
      description="Thank you for your purchase at Stackbuild"
    >
      {children}
    </MainLayout>
  );
};