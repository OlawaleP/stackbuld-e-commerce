import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Stackbuld</h3>
            <p className="mt-2 text-sm text-gray-600">
              Your one-stop shop for amazing products at unbeatable prices. Get the best offer now!!!
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-gray-600 hover:text-gray-900">
                  Cart
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="text-gray-600">Email: support@stackbuldcommerce.com</li>
              <li className="text-gray-600">Phone: (234) 991-390-7890</li>
              <li className="text-gray-600">123 Stackbuld St, Shop City</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Stackbuld-Commerce. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};