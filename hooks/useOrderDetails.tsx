import { useParams } from 'next/navigation';
import { useOrder } from '@/lib/queries/orders';

export const useOrderDetails = () => {
  const params = useParams();
  const orderId = params.orderId as string;
  const { data: order, isLoading, error } = useOrder(orderId);

  return {
    order,
    isLoading,
    error,
    orderId,
  };
};