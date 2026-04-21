# Tameka Wills — Portfolio

Personal portfolio site for Tameka Wills, built with Next.js 14 and Tailwind CSS.

**Live:** [tamekawills.com](https://tamekawills.com)

## Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + CSS custom properties
- **Fonts:** Cormorant Garamond + Jost (Google Fonts)
- **Animations:** CSS transitions + IntersectionObserver
- **Deploy:** Vercel

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

### First deploy

1. Push this repo to GitHub: `git push origin main`
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the `portfolio` repo from your GitHub account
4. Leave all settings at defaults — Vercel auto-detects Next.js
5. Click **Deploy**

### Connect tamekawills.com

1. In the Vercel project → **Settings → Domains**
2. Add `tamekawills.com` and `www.tamekawills.com`
3. Vercel will show DNS records to add at your registrar:
   - `A` record pointing to `76.76.21.21` (apex domain)
   - `CNAME` record pointing to `cname.vercel-dns.com` (www)
4. DNS propagates in 1–48 hours

### Subsequent deploys

```bash
git add .
git commit -m "your message"
git push origin main
```

Vercel auto-deploys on every push to `main`.

## Customization

| File | What to change |
|---|---|
| `src/components/Hero.tsx` | Name, tagline, metrics, status pill |
| `src/components/FeaturedProject.tsx` | Project details, GitHub link |
| `src/components/Ventures.tsx` | Venture cards |
| `src/components/Contact.tsx` | Email, LinkedIn, GitHub, resume link |
| `src/app/globals.css` | Color palette CSS variables |
| `tailwind.config.ts` | Tailwind color tokens |

## Adding resume

Place your resume PDF at `public/resume.pdf` — the Resume link in the footer will automatically work.
