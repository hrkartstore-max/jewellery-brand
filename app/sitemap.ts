import type { MetadataRoute } from 'next';
import { products } from '@/data/products';

const base = 'https://jewellery-brand-4ajl-p6uueg39h-hepra1.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', 'shop', 'about', 'contact', 'journal', 'size-guide', 'jewellery-care', 'faq', 'cart', 'wishlist', 'account', 'search', 'checkout'].map((path) => ({
    url: path ? `${base}/${path}` : base,
    lastModified: new Date(),
  }));

  const collections = ['rings', 'earrings', 'necklaces', 'bracelets', 'pendants', 'chains', 'jewellery-sets'].map((slug) => ({
    url: `${base}/collections/${slug}`,
    lastModified: new Date(),
  }));

  const productRoutes = products.map((product) => ({
    url: `${base}/products/${product.slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...collections, ...productRoutes];
}
