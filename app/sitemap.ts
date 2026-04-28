import type { MetadataRoute } from 'next'
import { stories } from '@/lib/stories'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lyvena.xyz'

  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/about',
    '/case-study',
    '/stories',
    '/privacy',
    '/terms',
    '/products',
    '/products/intelekt',
    '/products/prospera-havens',
    '/products/mojoflow',
    '/products/seerist',
    '/products/kiews',
    '/clients/superworld',
    '/clients/remotely',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/products' ? 0.9 : 0.7,
  }))

  const storyRoutes: MetadataRoute.Sitemap = stories.map((story) => ({
    url: `${baseUrl}/stories/${story.slug}`,
    lastModified: new Date(story.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...storyRoutes]
}
