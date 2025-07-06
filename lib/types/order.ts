import { Product } from './product';

export interface Order {
  id: string;
  date: string; 
  total: number;
  status: 'Pending' | 'Confirmed' | 'Shipped' | 'Delivered';
  items: { product: Product; quantity: number }[];
}

export interface OrderDetailsProps {
  orderId: string;
  date: string;
  status: string;
  total: number;
}

export interface OrderItemProps {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export interface OrderItemsListProps {
  items: Array<{
    product: {
      id: string;
      name: string;
      image: string;
      price: number;
    };
    quantity: number;
  }>;
}
