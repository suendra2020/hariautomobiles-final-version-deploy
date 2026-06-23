import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEO_DATA } from '../data';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, canonical }) => {
  const siteTitle = title ? `${title} | ${SEO_DATA.title}` : SEO_DATA.title;
  const siteDescription = description || SEO_DATA.description;
  const siteKeywords = keywords || SEO_DATA.keywords;
  const url = canonical || window.location.origin + window.location.pathname;

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={siteDescription} />
    </Helmet>
  );
};

export default SEO;
