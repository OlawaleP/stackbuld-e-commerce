import React from 'react';
import { Star } from 'lucide-react';

interface ProductRatingProps {
  rating: number;
  reviews: number;
  className?: string;
}

export const ProductRating: React.FC<ProductRatingProps> = ({ 
  rating, 
  reviews, 
  className = '' 
}) => {
  return (
    <div className={`flex items-center gap-2 text-sm ${className}`}>
      <div className="flex items-center">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            size={16}
            className={`${
              i < Math.floor(rating) 
                ? 'fill-yellow-400 text-yellow-400' 
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <span className="text-gray-700 font-medium">
        {rating.toFixed(1)}
      </span>
      <span className="text-gray-500">
        ({reviews.toLocaleString()} review{reviews !== 1 ? 's' : ''})
      </span>
    </div>
  );
};