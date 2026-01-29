# Struttura del progetto

Panoramica rapida delle cartelle e dei file principali del repository.

- `app/` — Applicazione Next.js (App Router): pagine, layout e route lato client/server.
  - `app/layout.tsx`, `app/page.tsx` — entry point e layout principale.
  - `app/(auth)/` — pagine di autenticazione (sign-in, sign-up, reset-password).
  - `app/(dashboard)/` — area protetta / dashboard e componenti correlati.
- `components/` — Componenti UI riutilizzabili, suddivisi in `ui/`.
- `lib/` — Librerie interne e helper condivisi (client auth, prisma client, utils, integrazioni email).
- `features/` — Raggruppamento per funzionalità (es. `auth`, `billing`, `organizations`) con componenti locali.
- `server/` — Codice backend non-Next (Hono server, middlewares, logica server-side standalone).
- `app/api/[[...route]]/route.ts` — Route API dinamica (entry per API custom).
- `prisma/` — Schema Prisma e cartella `migrations/` con script di migrazione.
- `docker/` — File `docker-compose.yaml` e script utili per avvio container di sviluppo/DB.
- `public/` — Asset pubblici (img, favicon, ecc.).
- `tests/` — Test unitari e di integrazione (Jest) — aggiungi qui i test.
- `docs/` — Documentazione di progetto (questa cartella).
- Config: `package.json`, `tsconfig.json`, `next.config.ts`, `jest.config.ts`, `postcss.config.mjs`.

Consigli:
- Mantieni `lib/` per logica puramente applicativa e `features/` per UI/UX specifiche di dominio.
- Aggiungi README per ogni cartella se la complessità cresce.
