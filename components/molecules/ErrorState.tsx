import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button';

interface ErrorStateProps {
  title: string;
  message: string;
  actionText?: string;
  actionHref?: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title,
  message,
  actionText = 'Go Back',
  actionHref = '/orders',
}) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-red-600">{title}</h2>
      <p className="mt-2 text-gray-600">{message}</p>
      <Link href={actionHref} className="mt-4 inline-block">
        <Button>{actionText}</Button>
      </Link>
    </div>
  );
};