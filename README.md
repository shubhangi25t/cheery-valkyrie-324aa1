# Study Sessions

Study Sessions is a professional educational website for students in Classes 8–12, JEE and NEET aspirants, graduates, corporate employees, and working professionals. The site explains the learning programmes, complete material package, test series, and two clear pricing options: a ₹4,000 starter trial and a ₹10,000 premium complete plan.

## Pages

- Home
- Courses
- Classes 8–12
- JEE & NEET
- Resources
- Test Series
- Pricing
- About

## Technology

- TanStack Start and TanStack Router
- React 19 and TypeScript
- Tailwind CSS v4 with a custom CSS design system
- Lucide React icons
- Netlify deployment adapter

## Local Development

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

The standard local server runs on the port configured in `package.json`. For Netlify platform emulation, use:

```bash
netlify dev --port 8889
```

## Production

Netlify builds the TanStack Start application using the configuration in `netlify.toml` and `vite.config.ts`.
