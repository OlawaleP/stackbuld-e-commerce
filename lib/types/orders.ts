import { Product } from './product';

export interface Order {
  id: string;
  date: string; 
  total: number;
  status: 'Pending' | 'Confirmed' | 'Shipped' | 'Delivered';
  items: { product: Product; quantity: number }[];
}