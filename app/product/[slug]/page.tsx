'use client';

import React from 'react';
import { ProductTemplate } from '@/components/templates/ProductTemplate';
import { useProductPage } from '@/hooks/useProductPage';
import { ProductPageProps } from '@/lib/utils';

export default function ProductPage({ params }: ProductPageProps): JSX.Element {
  const productPageData = useProductPage(params.slug);
  
  return <ProductTemplate {...productPageData} />;
}