import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
    }),
    // eslint({
    //   include: ['src/**/*.ts', 'src/**/*.tsx'],
    //   emitWarning: true,
    //   emitError: false, // error doesn't block compilation
    //   failOnWarning: false,
    //   failOnError: false, // error doesn't block compilation
    // })
  ],
  base: 'github-repo-card',
  root: path.resolve(__dirname, 'src/website'),
  build: {
    outDir: path.resolve(__dirname, 'dist-demo'),
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@component': path.resolve(__dirname, 'src/component'),
    },
  },
  server: {
    port: 3000,
  },
});
