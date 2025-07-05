import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Mini-Commerce',
  description = 'Your one-stop shop for amazing products',
  keywords = 'e-commerce, shopping, products',
  image = '/og-image.jpg',
  url = 'https://mini-commerce.vercel.app',
}) => {
  const fullTitle = title.includes('Mini-Commerce') ? title : `${title} | Mini-Commerce`;
  
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Mini-Commerce',
            description,
            url,
          }),
        }}
      />
    </Head>
  );
};