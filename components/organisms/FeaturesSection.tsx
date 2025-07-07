import React from 'react';
import { Heading } from '@/components/atoms/Typography';
import { FeatureCard } from '@/components/molecules/FeatureCard';

interface Feature {
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  title: string;
  features: Feature[];
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ title, features }) => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <Heading level={2} className="text-center mb-12">
          {title}
        </Heading>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
