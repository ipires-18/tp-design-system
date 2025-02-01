import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'build',
  format: ['esm'],
  minify: true,
  sourcemap: true,
  clean: true,
  dts: true,
  tsconfig: './tsconfig.build.json',
});
