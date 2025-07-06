import React from 'react';

interface SearchHeaderProps {
  query: string;
  resultsCount: number;
}

export const SearchHeader: React.FC<SearchHeaderProps> = ({ query, resultsCount }) => {
  const getTitle = (): string => {
    if (!query) return 'All Products';
    return `Search Results for "${query}"`;
  };
  
  const getSubtitle = (): string => {
    if (!query) return `Showing ${resultsCount} products`;
    return `Found ${resultsCount} ${resultsCount === 1 ? 'result' : 'results'}`;
  };
  
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        {getTitle()}
      </h1>
      <p className="text-gray-600">{getSubtitle()}</p>
    </div>
  );
};