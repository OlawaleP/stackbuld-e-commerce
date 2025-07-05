import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { SearchBar } from '@/components/molecules/SearchBar';
import { useProducts } from '@/lib/queries/products';
import { useRouter } from 'next/navigation';
import { Product } from '@/lib/types/product';

jest.mock('@/lib/queries/products', () => ({
  useProducts: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('next/image', () => {
  const MockImage = ({ src, alt, width, height, className }: any) => (
    <img src={src} alt={alt} width={width} height={height} className={className} />
  );
  MockImage.displayName = 'MockImage';
  return MockImage;
});

jest.mock('use-debounce', () => ({
  useDebounce: jest.fn((value) => [value]),
}));

jest.mock('lucide-react', () => ({
  Search: () => <svg data-testid="search-icon" />,
  X: () => <svg data-testid="clear-icon" />,
}));

const mockProducts: Product[] = [
  {
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
  },
  {
    id: '2',
    slug: 'laptop',
    name: 'Laptop',
    description: 'Powerful laptop',
    price: 1299.99,
    image: '/images/laptop.jpg',
    category: 'Electronics',
    inStock: true,
    rating: 4.7,
    reviews: 85,
  },
];

describe('SearchBar', () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    (useProducts as jest.Mock).mockReturnValue({ data: mockProducts, isLoading: false });
  });

  it('filters products and navigates to product page on click', async () => {
    render(<SearchBar />);
    
    const input = screen.getByPlaceholderText('Search products...');
    fireEvent.change(input, { target: { value: 'smart' } });
    
    await waitFor(() => {
      expect(screen.getByText('Smartphone')).toBeInTheDocument();
      expect(screen.queryByText('Laptop')).not.toBeInTheDocument();
    });
    
    const productLink = screen.getByText('Smartphone').closest('a')!;
    expect(productLink).toHaveAttribute('href', '/product/smartphone');
    
    fireEvent.click(productLink);
    
    await waitFor(() => {
      expect(screen.queryByText('Smartphone')).not.toBeInTheDocument();
    });
  });
});