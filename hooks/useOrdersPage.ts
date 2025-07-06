import { useOrders } from '@/lib/queries/orders';

export const useOrdersPage = () => {
  const { data: orders, isLoading, error } = useOrders();

  const hasOrders = orders && orders.length > 0;

  return {
    orders: orders || [],
    isLoading,
    error,
    hasOrders,
  };
};