import React from 'react';
import { Heading } from '@/components/atoms/Typography';
import { Text } from '@/components/atoms/Typography';

interface MissionSectionProps {
  title: string;
  description: string;
}

export const MissionSection: React.FC<MissionSectionProps> = ({ title, description }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <Heading level={2} className="mb-6">
          {title}
        </Heading>
        <Text variant="lead" className="text-gray-700">
          {description}
        </Text>
      </div>
    </section>
  );
};