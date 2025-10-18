import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/', '/documents-ada36/'],
    },
    sitemap: 'https://ada36.de/sitemap.xml',
  }
}
