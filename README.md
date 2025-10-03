# Patient Claim Table Management System

## Project Overview

This project is a Next.js application that implements a responsive patient claim data table with filtering, sorting, and
pagination.

## Tech Stack

- Next.js 15.5.4 (App Router)
- React & React DOM 19.1.0
- TypeScript 5.9.3
- TailwindCSS 3.4.1
- Faker.js (for data generation)

## Features

- Patient claim data table with responsive layout
- Insurance Type and PMS Sync Status badges
- Loading spinner to simulate data fetching
- Client-side pagination with first/last/next/previous navigation
- Adjustable rows per page
- Column sorting (all except PMS Sync Status and avatar)
- Filters: patient name (contains) and status (single select)
- Animated filter toggle for a smoother UX
- 250 dummy patient records, regenerated on refresh

## Key Trade-offs and Decisions

- **Time vs Pixel Perfection**: Focused on functionality and reusability first. Some spacing, line heights, and font
  details differ slightly from Figma due to the time limit.

- **Font (PolySans)**: Figma uses PolySans, which is a commercial font. I found conflicting claims online about its
  availability. To avoid potential licensing or security issues (and because PolySans was not provided with the brief),
  I used the default Next.js fonts (Inter / system sans) as a licensed fallback. If you provide the licensed PolySans
  files, I will swap them in and update the styles to exactly match the design.

- **Sorting exclusions**: PMS Sync Status is filterable instead of sortable, and avatar sorting was skipped
  since it has no meaningful order.

- **Client side only**: All data handling is done on the client for simplicity; a production version would use
  server-side pagination and filtering.

## Next Steps (with more time)

- Apply PolySans (licensed font) instead of Inter
- Fine-tune spacing and line heights to match Figma pixel-perfectly
- Add status color coding (for example: Pending, Rejected)
- Implement server-side pagination and filtering
- Add unit and integration tests
- Add dark mode support
- Improve accessibility (semantic table markup, keyboard navigation, screen reader support)

## Notes on Time Spent

- Suggested timebox: 4 hours.
- Actual time spent: around 6 hours (core functionality completed within the 4-hour window; extra time used to add
  filter
  animation and additional polish).

## Getting Started

Install dependencies:

```bash
npm i
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the app.

## Submission

- Live demo (Vercel) : https://dntel-home-assignment.vercel.app/
