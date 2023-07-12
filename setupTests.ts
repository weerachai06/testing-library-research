// import { jest } from '@jest/globals'
import { server } from '@/helpers/test/server'
import '@testing-library/jest-dom'
import matchers from '@testing-library/jest-dom/matchers'
import { cleanup } from '@testing-library/react'
import dotEnv from 'dotenv'
import { afterAll, afterEach, beforeAll, expect } from 'vitest'

// Setup config env.
dotEnv.config()
expect.extend(matchers)

global.IS_REACT_ACT_ENVIRONMENT = true;

beforeAll(() => {
  server.listen()
})

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup()
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})
