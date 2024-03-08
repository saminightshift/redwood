import { vi } from 'vitest'

// @ts-expect-error - fix this later
globalThis.jest = vi

process.env = Object.assign(process.env, {
  WEBHOOK_SECRET: 'MY_VOICE_IS_MY_PASSPORT_VERIFY_ME',
})
