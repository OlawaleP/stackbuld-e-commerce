'use client';

import React from 'react';
import { MainLayout } from '@/components/templates/MainLayout';
import { HeroSection } from '@/components/organisms/HeroSection';
import { MissionSection } from '@/components/organisms/MissionSection';
import { FeaturesSection } from '@/components/organisms/FeaturesSection';
import { CTASection } from '@/components/organisms/CTASection';

export default function AboutPage(): JSX.Element {
  return (
    <MainLayout>
      <HeroSection
        title="About Stackbuild"
        description="Stackbuild is your one-stop shop for a seamless online shopping experience. We're dedicated to providing high-quality products, secure checkout, and a user-friendly platform to make your shopping effortless and enjoyable."
      />
      
      <MissionSection
        title="Our Mission"
        description="At Stackbuild, our mission is to simplify online shopping by offering a curated selection of products, transparent pricing, and exceptional customer service. We believe in making every purchase a delightful experience, from browsing to delivery."
      />
      
      <FeaturesSection
        title="Why Choose Us"
        features={[
          {
            title: "Quality Products",
            description: "We carefully select products to ensure they meet the highest standards of quality and reliability."
          },
          {
            title: "Secure Checkout", 
            description: "Shop with confidence knowing your payment information is protected with secure processing."
          },
          {
            title: "Fast Shipping",
            description: "Enjoy free and fast shipping on all orders, delivered straight to your door."
          }
        ]}
      />
      
      <CTASection
        title="Start Shopping Today"
        description="Discover our wide range of products and experience the Stackbuild difference."
        buttonText="Shop Now"
        buttonHref="/shop"
      />
    </MainLayout>
  );
}