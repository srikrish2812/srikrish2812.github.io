# Abhay Nandiraju — Research Website

Personal research website built with Next.js, React, TypeScript, and Tailwind CSS, based on [research-website-template](https://github.com/tovacinni/research-website-template).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit content

Portfolio content is stored in `src/data/`:

- `aboutme.ts` — profile and social links
- `news.ts` — announcements
- `publication.ts` — publications
- `experience.ts` — research and work experience
- `portfolio.ts` — selected projects
- `education.ts` — education
- `section-order.ts` — homepage section order

Static files such as the profile image and résumé are in `public/`.

## Validate

```bash
npm run lint
npm run build
```

Pushing to `main` or `master` runs `.github/workflows/deploy.yml` and publishes the static export to GitHub Pages. Configure the repository's Pages source as **GitHub Actions**.
