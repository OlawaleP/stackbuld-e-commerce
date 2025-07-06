import React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://stackbuild.netlify.app'),
  title: 'Stackbuild - Your One-Stop Shop',
  description: 'Discover amazing products at unbeatable prices. Shop electronics, fashion, home goods, and more.',
  keywords: 'e-commerce, shopping, electronics, fashion, home goods',
  openGraph: {
    title: 'Stackbuild - Your One-Stop Shop',
    description: 'Discover amazing products at unbeatable prices.',
    url: 'https://stackbuild.netlify.app',
    siteName: 'Stackbuild',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Stackbuild',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stackbuild - Your One-Stop Shop',
    description: 'Discover amazing products at unbeatable prices.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}