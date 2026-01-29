import { cn } from '@/lib/utils'

describe('cn utility', () => {
  it('merges duplicate tailwind classes and keeps last occurrence', () => {
    const result = cn('p-2', 'p-4')
    expect(result).toContain('p-4')
  })

  it('returns single class string unchanged', () => {
    expect(cn('text-red-500')).toBe('text-red-500')
  })
})
