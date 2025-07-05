'use client';

import { Input } from '@/components/atoms/Input';
import { Button } from '@/components/atoms/Button';
import { Price } from '@/components/atoms/Price';
import { Search, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useProducts } from '@/lib/queries/products';
import Image from 'next/image';
import Link from 'next/link';
import { useDebounce } from 'use-debounce';
import { cn } from '@/lib/utils';

export const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm] = useDebounce(searchTerm, 300);
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { data: products = [], isLoading } = useProducts();

  const filteredProducts = debouncedSearchTerm.trim()
    ? products.filter((product) =>
        product.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      )
    : [];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen && filteredProducts.length > 0 && e.key !== 'Escape') {
      setIsOpen(true);
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusedIndex((prev) =>
        prev < filteredProducts.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusedIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === 'Enter' && focusedIndex >= 0) {
      e.preventDefault();
      router.push(`/product/${filteredProducts[focusedIndex].slug}`);
      setIsOpen(false);
      setSearchTerm('');
      setFocusedIndex(-1);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setFocusedIndex(-1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setIsOpen(false);
      setSearchTerm('');
      setFocusedIndex(-1);
    }
  };

  const handleClear = () => {
    setSearchTerm('');
    setIsOpen(false);
    setFocusedIndex(-1);
    inputRef.current?.focus();
  };

  return (
    <div className="relative w-full max-w-md" ref={searchRef}>
      <form onSubmit={handleSubmit} className="relative">
        <Input
          ref={inputRef}
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsOpen(true);
          }}
          onKeyDown={handleKeyDown}
          className="pl-10 pr-10"
          role="combobox"
          aria-expanded={isOpen}
          aria-controls="search-results"
          aria-autocomplete="list"
        />
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        {searchTerm && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            aria-label="Clear search"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </form>

      {isOpen && debouncedSearchTerm.trim() && (
        <div
          id="search-results"
          className="absolute z-10 mt-2 w-full max-h-96 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg"
          role="listbox"
        >
          {isLoading ? (
            <div className="p-4 text-center text-gray-600">Loading...</div>
          ) : filteredProducts.length > 0 ? (
            <>
              {filteredProducts.map((product, index) => (
                <Link
                  key={product.id}
                  href={`/product/${product.slug}`}
                  className={cn(
                    'flex items-center p-4 hover:bg-gray-100',
                    index === focusedIndex && 'bg-gray-100'
                  )}
                  role="option"
                  aria-selected={index === focusedIndex}
                  onClick={() => {
                    setIsOpen(false);
                    setSearchTerm('');
                    setFocusedIndex(-1);
                  }}
                >
                  <div className="h-12 w-12 flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={48}
                      height={48}
                      className="h-full w-full object-cover rounded"
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                    <Price amount={product.price} />
                  </div>
                </Link>
              ))}
              <div className="p-4 border-t border-gray-200">
                <Link href={`/search?q=${encodeURIComponent(debouncedSearchTerm.trim())}`}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => {
                      setIsOpen(false);
                      setSearchTerm('');
                      setFocusedIndex(-1);
                    }}
                  >
                    View All Results
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            <div className="p-4 text-center text-gray-600">No products found</div>
          )}
        </div>
      )}
    </div>
  );
};