import React from 'react';

interface ProductRatingProps {
  rating: number;
  reviews: number;
}

export const ProductRating: React.FC<ProductRatingProps> = ({ rating, reviews }) => {
  return (
    <div className="mt-2 flex items-center text-sm text-gray-500">
      <span className="mr-1">⭐</span>
      <span>{rating}</span>
      <span className="ml-1">({reviews} reviews)</span>
    </div>
  );
};