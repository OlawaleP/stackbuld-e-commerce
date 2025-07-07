import React from 'react';
import { Heading } from '@/components/atoms/Typography';
import { Text } from '@/components/atoms/Typography';

interface FeatureCardProps {
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <Heading level={3} className="mb-3">
        {title}
      </Heading>
      <Text variant="body" className="text-gray-600">
        {description}
      </Text>
    </div>
  );
};