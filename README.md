# Aperture Safety

Marketing site for one firearms safety course, **Firearms Safety Essentials**. Next.js, Tailwind CSS, ready for Vercel. Enrolment lives on a separate platform; this site only links there.

## Local

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL (set to the Vercel domain in production) |
| `NEXT_PUBLIC_COURSES_URL` | External training platform (Start the course) |
| `CONTACT_WEBHOOK_URL` | Optional. Enquiry form POSTs JSON here (Formspree, Zapier, Make, etc.) |

Company copy, course name, and contact details live in `src/lib/site.ts`.

## Deploy on Vercel

1. Push this repo and import it in [Vercel](https://vercel.com/new).
2. Framework preset: Next.js (detected automatically).
3. Set `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_COURSES_URL`.
4. Optionally set `CONTACT_WEBHOOK_URL` so the contact form delivers somewhere.

Without a webhook, enquiries are validated and logged on the server; the visitor still sees a success state.
