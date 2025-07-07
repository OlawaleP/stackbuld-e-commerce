import React from 'react';
import { Heading } from '@/components/atoms/Typography';
import { Text } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';
import Link from 'next/link';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export const CTASection: React.FC<CTASectionProps> = ({ 
  title, 
  description, 
  buttonText, 
  buttonHref 
}) => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <Heading level={2} className="mb-6">
          {title}
        </Heading>
        <Text variant="lead" className="mb-8 text-blue-100">
          {description}
        </Text>
        <Link href={buttonHref}>
          <Button variant="secondary" size="lg">
            {buttonText}
          </Button>
        </Link>
      </div>
    </section>
  );
};