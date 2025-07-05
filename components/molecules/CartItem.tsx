import Image from 'next/image';
import { Price } from '@/components/atoms/Price';
import { Button } from '@/components/atoms/Button';
import { QuantitySelector } from '@/components/molecules/QuantitySelector';
import { CartItem as CartItemType } from '@/lib/types/product';
import { Trash2 } from 'lucide-react';

interface CartItemProps {
  item: CartItemType;
  onRemove: (id: string) => void;
  onQuantityChange: (id: string, quantity: number) => void;
}

export const CartItem: React.FC<CartItemProps> = ({
  item,
  onRemove,
  onQuantityChange,
}) => {
  return (
    <div className="flex items-center space-x-4 rounded-lg border border-gray-200 p-4">
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
        <Image
          src={item.product.image}
          alt={item.product.name}
          width={80}
          height={80}
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{item.product.name}</h3>
        <p className="text-sm text-gray-500">{item.product.category}</p>
        <div className="mt-2">
          <Price amount={item.product.price} />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <QuantitySelector
          quantity={item.quantity}
          onQuantityChange={(quantity) => onQuantityChange(item.product.id, quantity)}
        />
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onRemove(item.product.id)}
          className="text-red-600 hover:text-red-700"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};