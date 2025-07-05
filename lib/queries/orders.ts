import { useQuery } from '@tanstack/react-query';
import { Order } from '../types/order';
import { getFromStorage } from '../utils/storage';

const ORDERS_KEY = 'mini-commerce-orders';

const fetchOrders = async (): Promise<Order[]> => {
  const orders = getFromStorage<Order[]>(ORDERS_KEY, []);
  return orders;
};

export const useOrders = () => {
  return useQuery<Order[], Error>({
    queryKey: ['orders'],
    queryFn: fetchOrders,
  });
};

export const useOrder = (orderId: string) => {
  return useQuery<Order, Error>({
    queryKey: ['order', orderId],
    queryFn: async () => {
      const orders = await fetchOrders();
      const order = orders.find((o) => o.id === orderId);
      if (!order) {
        throw new Error('Order not found');
      }
      return order;
    },
  });
};