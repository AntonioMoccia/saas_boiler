This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Testing

This project uses Jest + ts-jest for unit tests.

- Run tests:

```bash
npm install
npm run test
```

- Run tests in watch mode:

```bash
npm run test:watch
```

Notes:
- Tests are located in the `tests/` folder.
- Imports using the `@/` alias are mapped in `jest.config.ts`.

Suggestions:
- Keep secrets like `RESEND_API_KEY` out of tests — mock network calls when needed.
- Add more unit tests for critical logic in `lib/` and for UI components using `@testing-library/react`.

## Documentation

Ho aggiunto una documentazione più completa sotto la cartella `docs/`:

- `docs/SETUP.md`: guida di setup e comandi di sviluppo.
- `docs/ENV.md`: descrizione delle variabili d'ambiente.
- `docs/MIGRATIONS.md`: comandi e suggerimenti per le migrazioni Prisma.

Trovi anche un file di esempio `.env.example` nella root del repository; copialo in `.env` e aggiorna i valori prima di avviare l'app.
