# Testing

Questo progetto usa Jest con `ts-jest` per i test unitari e `@testing-library/react` per i componenti.

Configurazione utile:
- `jest.config.ts` — impostazioni `ts-jest` e `jsdom`.
- `jest.setup.ts` — setup di `@testing-library/jest-dom`.

Buone pratiche:
- Metti i test in `tests/` o accanto al file (`__tests__` o `file.test.tsx`).
- Mocka servizi esterni (Resend, Prisma) per evitare chiamate di rete:

```ts
// esempio di mock per resend
jest.mock('@/lib/resend', () => ({
  resend: { emails: { send: jest.fn().mockResolvedValue({ data: null }) } },
  FROM_EMAIL: 'onboarding@resend.dev'
}))
```

- Per testare componenti UI, usa `render()` da `@testing-library/react` e preferisci selettori accessibili (`getByRole`, `getByLabelText`).

Esempio test componente:

```tsx
import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/button'

test('Button shows label', () => {
  render(<Button>Click</Button>)
  expect(screen.getByRole('button')).toHaveTextContent('Click')
})
```

Coverage:
- Abilita copertura con `jest --coverage` o aggiungi passo di coverage in CI.

Integrazione con CI:
- Run `npx prisma generate` prima dei test se alcuni test importano il client Prisma.
- Esegui i test in un ambiente isolato e non usare DB reale (mock oppure DB di test isolato).
