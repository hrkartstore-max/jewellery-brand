import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://jewellery-brand-4ajl-p6uueg39h-hepra1.vercel.app/sitemap.xml',
  };
}
