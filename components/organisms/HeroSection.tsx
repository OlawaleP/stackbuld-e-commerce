import React from 'react';
import { Heading } from '@/components/atoms/Typography';
import { Text } from '@/components/atoms/Typography';

interface HeroSectionProps {
  title: string;
  description: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ title, description }) => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <Heading level={1} className="mb-6">
          {title}
        </Heading>
        <Text variant="lead" className="text-blue-100">
          {description}
        </Text>
      </div>
    </section>
  );
};