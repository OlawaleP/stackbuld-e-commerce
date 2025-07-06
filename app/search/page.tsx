'use client';

import React, { Suspense } from 'react';
import { SearchTemplate } from '@/components/templates/SearchTemplate';
import { SearchContentLoader } from '@/components/organisms/SearchContentLoader';
import { LoadingSpinner } from '@/components/atoms/LoadingSpinner';

export default function SearchPage(): JSX.Element {
  return (
    <SearchTemplate>
      <Suspense fallback={<SearchPageFallback />}>
        <SearchContentLoader />
      </Suspense>
    </SearchTemplate>
  );
}

const SearchPageFallback: React.FC = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="flex justify-center py-8">
      <LoadingSpinner size="lg" />
    </div>
  </div>
);