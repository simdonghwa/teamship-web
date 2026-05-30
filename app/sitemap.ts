import type { MetadataRoute } from 'next';

const BASE = 'https://teamship.co.kr';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                        lastModified: new Date(), priority: 1.0 },
    { url: `${BASE}/corporate`,         lastModified: new Date(), priority: 0.9 },
    { url: `${BASE}/family`,            lastModified: new Date(), priority: 0.9 },
    { url: `${BASE}/diagnosis`,         lastModified: new Date(), priority: 0.8 },
    { url: `${BASE}/diagnosis/parent`,  lastModified: new Date(), priority: 0.8 },
    { url: `${BASE}/diagnosis/teen`,    lastModified: new Date(), priority: 0.8 },
    { url: `${BASE}/about`,             lastModified: new Date(), priority: 0.7 },
    { url: `${BASE}/contact`,           lastModified: new Date(), priority: 0.7 },
    { url: `${BASE}/education`,         lastModified: new Date(), priority: 0.5 },
  ];
}
