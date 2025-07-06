import React from 'react';
import Image from 'next/image';

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const ProductImage: React.FC<ProductImageProps> = ({
  src,
  alt,
  className,
}) => {
  return (
    <div className={className}>
      <Image
        src={src}
        alt={alt}
        width={600}
        height={600}
        className="h-full w-full object-cover"
        priority
      />
    </div>
  );
};