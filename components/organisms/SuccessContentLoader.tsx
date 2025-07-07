'use client';

import React from 'react';
import { SuccessContent } from '@/components/organisms/SuccessContent';
import { useSuccessPage } from '@/hooks/useSuccess';

export const SuccessContentLoader: React.FC = () => {
  const successPageData = useSuccessPage();
  
  return <SuccessContent {...successPageData} />;
};