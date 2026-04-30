# Lyvena

Lyvena is a Next.js marketing site for an applied AI and product engineering studio. The site is
positioned around three things:

- Applied AI systems and internal tooling
- Customer-facing AI product engineering
- Responsible delivery, rollout, and evaluation

## Stack

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- React Icons
- HubSpot Forms API for contact submissions (with email fallback)

## Local Development

This repo uses `bun`.

```bash
bun install
bun run dev
```

Useful commands:

```bash
bun run lint
bun run build
```

## Important Routes

- `/` - Homepage
- `/about` - Company and delivery positioning
- `/products` - All products overview
- `/products/intelekt` - Intelekt product page
- `/products/prospera-havens` - Prospera Havens product page
- `/products/mojoflow` - Mojoflow product page
- `/products/seerist` - Seerist product page
- `/products/kiews` - Kiews product page
- `/clients/superworld` - SuperWorld client project
- `/clients/remotely` - Remotely client project
- `/case-study` - Kiews case study
- `/stories` - Notes and long-form thinking
- `/privacy` - Privacy policy
- `/terms` - Terms of service
## Repository Notes

- SEO helpers live in `app/robots.ts` and `app/sitemap.ts`
- Shared story content lives in `lib/stories.ts`
- Site-wide header and metadata live in `app/layout.tsx`
- Contact form handling lives in `components/Contact.tsx`

## Contact

Lyvena  
Beta Building, Oficina 6  
Próspera ZEDE, St. John's Bay  
Roatán, Islas de Bahia 34101  
Honduras
