'use client';

import React, { Suspense } from 'react';
import { SuccessTemplate } from '@/components/templates/SuccessTemplate';
import { SuccessContentLoader } from '@/components/organisms/SuccessContentLoader';
import { LoadingSpinner } from '@/components/atoms/LoadingSpinner';

export default function SuccessPage(): JSX.Element {
  return (
    <SuccessTemplate>
      <Suspense fallback={<SuccessPageFallback />}>
        <SuccessContentLoader />
      </Suspense>
    </SuccessTemplate>
  );
}

const SuccessPageFallback: React.FC = () => (
  <div className="container mx-auto px-4 py-16 text-center">
    <div className="flex justify-center">
      <LoadingSpinner size="md" />
    </div>
  </div>
);