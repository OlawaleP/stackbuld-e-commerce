import React from 'react';
import { Button } from '@/components/atoms/Button';
import Link from 'next/link';

interface SearchEmptyStateProps {
  query: string;
}

export const SearchEmptyState: React.FC<SearchEmptyStateProps> = ({ query }) => {
  return (
    <div className="text-center py-12">
      <div className="text-gray-400 mb-4">
        <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <h2 className="text-2xl font-bold text-gray-900">No Results Found</h2>
        <p className="mt-2 text-gray-600">
          {query ? `No products found for "${query}"` : 'No products available at the moment'}
        </p>
      </div>
      <div className="space-y-4">
        <p className="text-gray-500">Try adjusting your search terms or browse our categories</p>
        <Link href="/">
          <Button variant="outline">
            Browse All Products
          </Button>
        </Link>
      </div>
    </div>
  );
};