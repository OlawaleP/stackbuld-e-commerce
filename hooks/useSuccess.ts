import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

interface UseSuccessPageReturn {
  orderId: string | null;
  hasOrderId: boolean;
  formattedOrderId: string;
}

export const useSuccessPage = (): UseSuccessPageReturn => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');
  
  const hasOrderId = Boolean(orderId);
  
  const formattedOrderId = useMemo(() => {
    if (!orderId) return '';
    return orderId.toUpperCase();
  }, [orderId]);
  
  return {
    orderId,
    hasOrderId,
    formattedOrderId,
  };
};