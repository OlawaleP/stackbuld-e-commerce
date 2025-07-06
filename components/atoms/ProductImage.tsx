import React from 'react';
import Image from 'next/image';

interface ProductImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export const ProductImage: React.FC<ProductImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
}) => {
  return (
    <div className={className}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-full w-full object-cover"
        priority={priority}
      />
    </div>
  );
};