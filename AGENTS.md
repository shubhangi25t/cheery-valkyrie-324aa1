# Study Sessions Architecture

## Overview

Study Sessions is an eight-page educational marketing site built with TanStack Start, React, TypeScript, and Tailwind CSS v4's Vite integration. It presents school, JEE/NEET, resource, testing, pricing, and company information without requiring a backend.

## Key Directories

- `src/routes/` contains the eight file-based pages and the root document shell.
- `src/components/` contains shared structural components such as the site navigation, footer, and page introduction.
- `src/data/education.ts` contains reusable programme, subject, resource, test-series, and testimonial content.
- `src/styles.css` contains the complete visual system, layouts, animations, and responsive rules.
- `public/` contains static browser assets.

## Conventions

- Use PascalCase for React components and camelCase for data or helpers.
- Keep route files focused on page composition; move repeated UI into `src/components/`.
- Reuse content from `src/data/education.ts` rather than duplicating programme details.
- Use the established CSS variables for colors and typography.
- Preserve the warm editorial direction: yellow, paper neutrals, ink, serif display type, offset borders, and poster-like details.
- Use Lucide icons rather than emoji or hand-drawn icon substitutes.
- Add descriptive alt text to meaningful images.

## Routing

TanStack Start generates the route tree from files in `src/routes/`. The intended public routes are `/`, `/courses`, `/school`, `/exams`, `/resources`, `/test-series`, `/pricing`, and `/about`.

## Non-Obvious Decisions

- The site uses fixed Unsplash image URLs for editorial classroom photography and CSS-built posters for branded visual assets.
- Admission calls to action use email links because the requested site does not collect or persist user data.
- Pricing is presented as a one-time programme fee and avoids rank or marks guarantees to maintain responsible educational messaging.
