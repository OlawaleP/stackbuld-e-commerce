import React from 'react';
import { MainLayout } from '@/components/templates/MainLayout';

interface SearchTemplateProps {
  children: React.ReactNode;
}

export const SearchTemplate: React.FC<SearchTemplateProps> = ({ children }) => {
  return (
    <MainLayout
      title="Search Results"
      description="Find products at Stackbuild"
    >
      {children}
    </MainLayout>
  );
};