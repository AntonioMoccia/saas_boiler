# Migrazioni Prisma

Questo progetto usa Prisma. Qui le operazioni più comuni.

- Genera client dopo modifiche allo schema:

```bash
npx prisma generate
```

- Crea una nuova migrazione in sviluppo e applicala al DB:

```bash
npx prisma migrate dev --name descriptive_name
```

- Applica le migrazioni in produzione (CI / deploy):

```bash
npx prisma migrate deploy
```

- Controlla lo stato delle migrazioni:

```bash
npx prisma migrate status
```

Suggerimenti:

- Usa backup del DB prima di eseguire migrazioni in produzione.
- Se usi CI, esegui `prisma generate` prima di buildare l'app.
