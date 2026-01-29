# Architettura

Panoramica delle tecnologie e del flusso dell'app.

- Frontend: Next.js (App Router)
  - UI costruita con componenti React e Tailwind CSS.
  - `app/` contiene layout, route e pagine. Alcune API possono essere server components.

- Backend / API: Hono + serverless/Node
  - File `server/hono.ts` contiene l'app Hono per endpoint custom (es. eventi, webhook).
  - `app/api/[[...route]]/route.ts` è un entrypoint API dentro il progetto Next.

- Autenticazione: `better-auth`
  - Configurata in `lib/auth-server.ts` con plugin `admin()` e adapter Prisma.
  - Email verification / reset sono implementate sfruttando `lib/resend.ts`.

- Database: PostgreSQL + Prisma
  - Modello dati in `prisma/schema.prisma` e migrazioni in `prisma/migrations/`.
  - `lib/prisma-client.ts` espone il client Prisma per query centralizzate.

- Email: Resend service
  - Wrapper in `lib/resend.ts` e template HTML in `email/`.

- Deployment e containerizzazione
  - `docker/docker-compose.yaml` contiene una configurazione rapida per DB e servizi di sviluppo.

Flusso tipico (es. registrazione utente):
1. L'utente si registra tramite `app/(auth)/sign-up`.
2. `better-auth` crea l'utente tramite l'adapter Prisma.
3. Viene inviata email di verifica via `resend` usando i template in `email/`.
4. Dopo verifica l'utente può accedere alla `dashboard`.

Suggerimenti di progetto:
- Centralizza le chiamate ai servizi esterni (Resend, DB) in `lib/` per facilitare il mocking nei test.
- Se hai esigenze di scalabilità, separa l'API Hono in un microservizio dedicato.
