## Stackbuld-Commerce
## Project Overview
Stackbuld is a simple e-commerce app built with Next.js. It lets users:

- Search products with real-time filtering.
- View product details (name, price, image).
- Add items to a cart, shown in a header badge.
- Navigate pages like home, orders, and about.

The app is fast, user-friendly, and mobile-ready.

## Design Approach

- Layout: Clean design with a sticky header for navigation. Product pages show images and details in a simple grid.
- Colors: White background, gray text, blue buttons for clarity.
- Responsiveness: Works on phones, tablets, and desktops using Tailwind CSS (e.g., sm:, md: classes).
- Accessibility: Uses semantic HTML and ARIA labels (e.g., aria-label on logo).

## Tools & Techniques

- Framework: Next.js 14 for fast pages and dynamic routes (e.g., /products/[slug]).
- Styling: Tailwind CSS for easy, consistent styling.
- State: Zustand for cart management (client-side).
- Data: React Query for fetching products.
- Testing: Jest and React Testing Library for unit tests (search, product page, cart).
- Types: TypeScript for safe code.
- Deployment: Netlify for easy hosting.

## SEO Strategy

- Meta Tags: Dynamic titles and descriptions per page.
- Structured Data: Product schema (assumed JSON-LD) for search engines.
- Performance: Fast image loading with next/image and server-side rendering.

## Error-Handling Technique

- Display: Shows user-friendly messages (e.g., "Product not found") or loading spinners.
- Logging: Console logs in development; add Sentry for production (optional).
- Recovery: Fallback UI or retry options for failed data fetches. Error boundaries catch crashes.

## Getting Started

Install:npm install


Run:npm run dev

Open http://localhost:3000.
Test:npm run test


Deploy:netlify --prod



## Notes

Ensure public/images/logo.svg exists to avoid 404 errors.
Share modified files for custom features (e.g., checkout).
