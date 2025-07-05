'use client';

import { MainLayout } from '@/components/templates/MainLayout';
import { Button } from '@/components/atoms/Button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <MainLayout
      title="About Mini-Commerce"
      description="Learn about Mini-Commerce, your go-to platform for simple and secure online shopping."
    >
      <div className="container mx-auto px-4 py-12">
        <section className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Stackbuild-Commerce</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stackbuild-Commerce is your one-stop shop for a seamless online shopping experience. We’re dedicated to providing high-quality products, secure checkout, and a user-friendly platform to make your shopping effortless and enjoyable.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Our Mission</h2>
          <div className="bg-gray-50 rounded-lg p-6 max-w-3xl mx-auto">
            <p className="text-gray-600">
              At Mini-Commerce, our mission is to simplify online shopping by offering a curated selection of products, transparent pricing, and exceptional customer service. We believe in making every purchase a delightful experience, from browsing to delivery.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Quality Products</h3>
              <p className="text-gray-600">
                We carefully select products to ensure they meet the highest standards of quality and reliability.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Secure Checkout</h3>
              <p className="text-gray-600">
                Shop with confidence knowing your payment information is protected with secure processing.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Fast Shipping</h3>
              <p className="text-gray-600">
                Enjoy free and fast shipping on all orders, delivered straight to your door.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Start Shopping Today</h2>
          <p className="text-gray-600 mb-6">
            Discover our wide range of products and experience the Mini-Commerce difference.
          </p>
          <Link href="/">
            <Button size="lg">Shop Now</Button>
          </Link>
        </section>
      </div>
    </MainLayout>
  );
}