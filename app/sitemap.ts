import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [{
    url: 'https://kush11casino.vercel.app/',
    lastModified: new Date('2026-09-27'),
    changeFrequency: 'weekly',
    priority: 1,
  }]
}
