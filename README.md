# Udharo Website

Single-page Next.js landing page for **Udharo (उधारो)** — a Nepali-first, offline-first ledger app for shopkeepers.

## Highlights
- Offline-first SQLite storage
- Customers, credits, payments with due dates
- Reports with Today/Week/Month/Year filters
- PDF exports for customers and reports
- Backup/restore (SQL)
- App lock (PIN + biometric)
- Daily reminder notifications
- Nepali-first UI with English optional

## Tech
- Next.js 16
- React 19

## Getting Started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

## Customize
- Update Play Store and App Store URLs in `app/page.jsx`.
- Update text and sections directly in `app/page.jsx`.
- Global styles live in `app/globals.css`.

## Notes
- This is a single-page marketing site using the Next.js App Router.
