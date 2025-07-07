import React from 'react';
import Link from 'next/link';
import { ShoppingCart, Plus } from 'lucide-react';
import { Button } from '@/components/atoms/Button';

export const EmptyCart: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-md text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-full flex items-center justify-center shadow-lg">
              <ShoppingCart 
                size={56} 
                className="text-indigo-400"
                aria-hidden="true"
              />
            </div>
            
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center shadow-md">
              <Link href="/" className="block">
              <Plus 
                size={24} 
                className="text-white"
                aria-hidden="true"
              />
              </Link>
            </div>
          </div>
        </div>
        
        <h2 className="mb-4 text-3xl font-bold text-gray-900">
          Your cart is empty
        </h2>
        <p className="mb-8 text-lg text-gray-600 leading-relaxed">
          Ready to start shopping? Browse our collection and add your favorite items to get started.
        </p>
        
        <div className="space-y-4">
          <Link href="/" className="block">
            <Button size="lg" className="w-full sm:w-auto px-8">
              Start Shopping
            </Button>
          </Link>
          
          <Link href="/" className="block">
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto px-8"
            >
              Browse Categories
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};