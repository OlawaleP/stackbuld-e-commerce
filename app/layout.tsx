import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mini-Commerce - Your One-Stop Shop',
  description: 'Discover amazing products at unbeatable prices. Shop electronics, fashion, home goods, and more.',
  keywords: 'e-commerce, shopping, electronics, fashion, home goods',
  openGraph: {
    title: 'Mini-Commerce - Your One-Stop Shop',
    description: 'Discover amazing products at unbeatable prices.',
    url: 'https://mini-commerce.vercel.app',
    siteName: 'Mini-Commerce',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mini-Commerce',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mini-Commerce - Your One-Stop Shop',
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