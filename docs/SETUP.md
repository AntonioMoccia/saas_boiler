# Setup rapido

Prerequisiti:

- Node.js 18+ (consigliato Node 20)
- PostgreSQL in locale o un'istanza remota
- `npm`/`pnpm`/`yarn`

1) Clona il repository

```bash
git clone <repo-url>
cd saas_boiler
```

2) Copia il file di esempio delle variabili d'ambiente e modifica i valori

```bash
cp .env.example .env
# edit .env and set DATABASE_URL and RESEND_API_KEY
```

3) Installa dipendenze

```bash
npm install
```

4) Setup Prisma (migrazioni)

In sviluppo esegui:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

Per eseguire le migrazioni in produzione:

```bash
npx prisma migrate deploy
```

5) Esegui il progetto in sviluppo

```bash
npm run dev
```

6) Test

```bash
npm run test
```

7) Docker (opzionale)

Se vuoi usare il docker-compose incluso, trova i file in `docker/`.

```bash
docker-compose up -d
```

Suggerimenti:

- Non caricare mai `.env` su repository pubblico.
- Usa `pgcli` o `psql` per controllare il DB direttamente.
- Per sviluppo rapido, puoi usare Docker Postgres e puntare `DATABASE_URL` a quel container.
