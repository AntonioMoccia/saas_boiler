describe('resend defaults', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  it('uses default FROM_EMAIL when RESEND_FROM_EMAIL not set', () => {
    // Ensure environment variable is not set
    delete process.env.RESEND_FROM_EMAIL

    const mod = require('@/lib/resend')
    expect(mod.FROM_EMAIL).toBe('onboarding@resend.dev')
  })
})
