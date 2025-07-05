// __tests__/components/ProductCard.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { ProductCard } from '@/components/molecules/ProductCard';
import { Product } from '@/lib/types/product';

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

const mockAddItem = jest.fn();
jest.mock('@/lib/store/cart-store', () => ({
  useCartStore: () => ({
    addItem: mockAddItem,
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
  
  it('calls addItem when Add to Cart button is clicked', () => {
    render(<ProductCard product={mockProduct} />);
    
    const addButton = screen.getByText('Add to Cart');
    fireEvent.click(addButton);
    
    expect(mockAddItem).toHaveBeenCalledWith(mockProduct);
  });
});