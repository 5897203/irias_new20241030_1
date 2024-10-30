import { Helmet } from 'react-helmet-async';

interface SEOHelmetProps {
  title: string;
  description: string;
}

export function SEOHelmet({ title, description }: SEOHelmetProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}