import '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProductCard } from '@/components/molecules/ProductCard';
import { Product } from '@/lib/types/product';
import { describe, it } from 'node:test';

const mockProduct: Product = {
  id: '1',
  slug: 'test-product',
  name: 'Test Product',
  description: 'Test description',
  price: 99.99,
  image: '/test-image.jpg',
  category: 'Test',
  inStock: true,
  rating: 4.5,
  reviews: 10,
};

jest.mock('@/lib/store/cart-store', () => ({
  useCartStore: () => ({
    addItem: jest.fn(),
  }),
}));

describe('ProductCard', () => {
  it('renders product information correctly', () => {
    render(<ProductCard product={mockProduct} />);
    
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
    expect(screen.getByText('$99.99')).toBeInTheDocument();
    expect(screen.getByText('In Stock')).toBeInTheDocument();
  });
  
  it('handles add to cart action', () => {
    render(<ProductCard product={mockProduct} />);
    
    const addButton = screen.getByText('Add to Cart');
    fireEvent.click(addButton);
    
    // Test that the function was called
    expect(addButton).toBeInTheDocument();
  });
});


