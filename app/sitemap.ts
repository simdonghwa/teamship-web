import type { MetadataRoute } from 'next';
import { FOUNDERS } from '@/lib/content';

const BASE = 'https://axteamship.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const founderRoutes = FOUNDERS
    .filter((f) => f.name !== 'TBD')
    .map((f) => ({
      url: `${BASE}/about/${f.slug}`,
      lastModified: new Date(),
      priority: 0.6,
    }));

  return [
    { url: BASE,                            lastModified: new Date(), priority: 1.0 },
    { url: `${BASE}/method`,                lastModified: new Date(), priority: 0.9 },
    { url: `${BASE}/programs/workshop`,     lastModified: new Date(), priority: 0.9 },
    { url: `${BASE}/programs/bootcamp`,     lastModified: new Date(), priority: 0.9 },
    { url: `${BASE}/programs/keynote`,      lastModified: new Date(), priority: 0.9 },
    { url: `${BASE}/cases`,                 lastModified: new Date(), priority: 0.8 },
    { url: `${BASE}/about`,                 lastModified: new Date(), priority: 0.7 },
    { url: `${BASE}/contact`,               lastModified: new Date(), priority: 0.8 },
    ...founderRoutes,
  ];
}
