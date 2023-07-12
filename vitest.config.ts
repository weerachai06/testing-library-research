/// <reference types="vitest" />

import react from '@vitejs/plugin-react'
import ViteTsConfigPath from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ViteTsConfigPath(), react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./setupTests.ts'],
    css: true,
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
  base: './',
})
