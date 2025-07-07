import React from 'react';
import { Button } from '@/components/atoms/Button';
import { ActionLink } from '@/components/atoms/ActionLink';

export const SuccessActions: React.FC = () => {
  return (
    <div className="space-y-4">
      <ActionLink href="/">
        <Button size="lg" className="w-full">
          Continue Shopping
        </Button>
      </ActionLink>
      
      <ActionLink href="/orders">
        <Button variant="outline" size="lg" className="w-full">
          View Order History
        </Button>
      </ActionLink>
    </div>
  );
};