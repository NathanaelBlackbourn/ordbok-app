/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/tests/setup.ts',
    },
    resolve: {
        alias: {
            // '~/*': resolve(__dirname, 'src'),
            src: resolve(__dirname, 'src'),
            // '*': resolve(__dirname, 'src'),
        },
    },
})
