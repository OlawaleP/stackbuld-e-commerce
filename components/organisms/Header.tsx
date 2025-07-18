'use client';

import React from 'react';
import Link from 'next/link';
import { useCartStore } from '@/lib/store/cart-store';
import { Badge } from '@/components/atoms/Badge';
import { SearchBar } from '@/components/molecules/SearchBar';
import Image from 'next/image';

export const Header: React.FC = () => {
  const itemCount = useCartStore((state) => state.getItemCount());

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-gray-900" aria-label="Stackbuld Home">
            <Image
              src="/images/logo.svg"
              alt="Stackbuld Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span>Stackbuld</span>
          </Link>
          
          <div className="flex-1 mx-4">
            <SearchBar />
          </div>
          
          <nav className="flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Products
            </Link>
            <Link href="/cart" className="relative text-gray-600 hover:text-gray-900">
              Cart
              {itemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full text-xs">
                  {itemCount}
                </Badge>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};