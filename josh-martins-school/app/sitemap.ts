import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://example.com';
  const routes = [
    '/', '/about','/admissions','/admissions/fees','/admissions/faqs','/admissions/apply',
    '/academics','/student-life','/facilities','/staff','/parents','/students',
    '/news','/events','/contact','/payments','/alumni','/faqs','/gallery'
  ];
  return routes.map((r) => ({ url: `${baseUrl}${r}`, lastModified: new Date() }));
}