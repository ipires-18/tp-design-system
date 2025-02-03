/// <reference types="vitest/config" />
import path from 'node:path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    css: true,
    coverage: {
      include: ['src/components/**/*.{ts,tsx}', 'src/libs/**/*.{ts,tsx}'],
      exclude: [
        'src/**/*.test.{ts,tsx}',
        'src/**/*.stories.{ts,tsx}',
        'src/**/*.spec.{ts,tsx}',
        'node_modules',
      ],
      reporter: ['text', 'json', 'html'],
    },
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
