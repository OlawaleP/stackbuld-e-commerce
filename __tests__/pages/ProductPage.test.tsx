import { render, screen, fireEvent } from '@testing-library/react';
import { useProduct } from '@/lib/queries/products'; 
import { useCartStore } from '@/lib/store/cart-store';
import { Product } from '@/lib/types/product';
import ProductPage from '@/app/product/[slug]/page';

jest.mock('@/lib/queries/products', () => ({
  useProduct: jest.fn(), 
}));

jest.mock('@/lib/store/cart-store', () => ({
  useCartStore: jest.fn(),
}));

jest.mock('next/image', () => {
  const MockImage = ({ src, alt, width, height, className }: any) => (
    <img src={src} alt={alt} width={width} height={height} className={className} />
  );
  MockImage.displayName = 'MockImage';
  return MockImage;
});

jest.mock('@/components/atoms/LoadingSpinner', () => ({
  LoadingSpinner: () => <div data-testid="loading-spinner">Loading...</div>,
}));

jest.mock('@/components/atoms/Button', () => ({
  Button: ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => (
    <button onClick={onClick} role="button">
      {children}
    </button>
  ),
}));

jest.mock('@/components/atoms/Price', () => ({
  Price: ({ amount }: { amount: number }) => <span>${amount}</span>,
}));

jest.mock('@/components/atoms/Badge', () => ({
  Badge: ({ children }: { children: React.ReactNode }) => <span>{children}</span>,
}));

jest.mock('@/components/molecules/QuantitySelector', () => ({
  QuantitySelector: ({ quantity, onQuantityChange }: { quantity: number; onQuantityChange: (q: number) => void }) => (
    <div>
      <button onClick={() => onQuantityChange(quantity - 1)}>-</button>
      <span>{quantity}</span>
      <button onClick={() => onQuantityChange(quantity + 1)}>+</button>
    </div>
  ),
}));

jest.mock('@/components/templates/MainLayout', () => ({
  MainLayout: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

const mockProduct: Product = {
  id: '1',
  slug: 'smartphone',
  name: 'Smartphone',
  description: 'Latest model',
  price: 699.99,
  image: '/images/smartphone.jpg',
  category: 'Electronics',
  inStock: true,
  rating: 4.5,
  reviews: 120,
};

describe('ProductPage', () => {
  const mockAddItem = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useProduct as jest.Mock).mockReturnValue({ 
      data: mockProduct, 
      isLoading: false, 
      error: null 
    });
    (useCartStore as unknown as jest.Mock).mockReturnValue(mockAddItem);
  });

  it('adds product to cart on button click', () => {
    render(<ProductPage params={{ slug: 'smartphone' }} />);
    
    const addButton = screen.getByRole('button', { name: /add to cart/i });
    fireEvent.click(addButton);
    
    expect(mockAddItem).toHaveBeenCalledWith(mockProduct, 1);
  });
});