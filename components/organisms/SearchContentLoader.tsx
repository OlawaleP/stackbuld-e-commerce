'use client';

import React from 'react';
import { SearchContent } from '@/components/organisms/SearchContent';
import { useSearchPage } from '@/hooks/useSearchPage';

export const SearchContentLoader: React.FC = () => {
  const searchPageData = useSearchPage();
  
  return <SearchContent {...searchPageData} />;
};