# Variabili d'ambiente

Elenco delle variabili principali usate nel progetto e il loro scopo.

- `DATABASE_URL` (required): URL di connessione a PostgreSQL usato da Prisma.
- `RESEND_API_KEY` (optional for local dev): API key per il servizio Resend (invio email).
- `RESEND_FROM_EMAIL` (optional): email mittente verificata su Resend.
- `NEXT_PUBLIC_APP_URL`: URL pubblico dell'app (es. `http://localhost:3003`).
- `PORT`: porta del server (default 3000).
- `NODE_ENV`: `development`|`production`.
- `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`: se si attiva l'autenticazione Google.
- `SHADOW_DATABASE_URL`: usato da Prisma per alcune operazioni di migrazione.

Note:

- In produzione, impostare `RESEND_API_KEY` e `RESEND_FROM_EMAIL` a valori reali e protetti.
- Evitare valori sensibili nel codice; usa il provider di secrets della tua piattaforma (Vercel, AWS, etc.).
