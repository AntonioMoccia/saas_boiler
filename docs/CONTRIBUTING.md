# Contributing

Linee guida per contribuire al progetto.

- Branching:
  - Crea branch con prefisso descrittivo: `feat/`, `fix/`, `chore/` (es. `feat/auth-send-email`).
- Commit messages:
  - Segui lo stile `Conventional Commits` (es. `feat(auth): add email verification`).
- Pull Request:
  - Apri una PR descrittiva, linka issue correlata, aggiungi screenshot se necessario.
  - Assicurati che i test passino e che ESLint non segnali errori prima di richiedere la review.
- Test e lint:
  - Esegui `npm run lint` e `npm run test` prima di aprire la PR.
- Code style:
  - TypeScript, preferisci tipi espliciti per le API pubbliche delle funzioni.
  - Mantieni componenti React piccoli e testabili.
- Sicurezza:
  - Non includere segreti nei commit. Usa `.env` e `.env.example`.

Se vuoi aggiungere automazioni (CI), suggerisco GitHub Actions con step:
1. Install dependencies
2. Run `npx prisma generate`
3. Run lint
4. Run tests
