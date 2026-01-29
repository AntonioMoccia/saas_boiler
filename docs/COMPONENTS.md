# Componenti e dove trovarli

Questo file elenca i componenti riutilizzabili principali e come usarli velocemente.

- `components/ui/` — primitive UI:
  - `avatar.tsx` — avatar image + fallback.
  - `button.tsx` — pulsanti stilizzati con varianti.
  - `card.tsx` — container grafico per contenuti.
  - `dropdown-menu.tsx` — menu a tendina (Radix wrapper).
  - `field.tsx`, `input.tsx`, `label.tsx` — elementi di form riutilizzabili.
  - `separator.tsx` — separatore orizzontale/verticale.
  - `sonner.tsx` — integrazione per notifiche.

- `app/(dashboard)/components/` — componenti specifici della dashboard:
  - `NavBar.tsx` — barra di navigazione.
  - `UserButton.tsx` — bottone/menù utente.

- `features/auth/components/` — form e flow di autenticazione:
  - `sign-in-form.tsx`, `sign-up-form.tsx`, `forgot-password-form.tsx`, `reset-password-form.tsx`.

Linee guida di riuso:
- Usa i componenti in `components/ui/` per mantenere consistenza visiva.
- I componenti devono essere piccoli, testabili e privi di effetto collaterale.
- Preferisci props chiare (`variant`, `size`, `onClick`) e forwardRef quando necessario.
- Usa l'helper `lib/utils.ts` (`cn`) per combinare classi Tailwind.

Esempio di import:

```tsx
import { Button } from '@/components/ui/button'

<Button variant="primary">Salva</Button>
```
