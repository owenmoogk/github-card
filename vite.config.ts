import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';

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
  root: path.resolve(__dirname, 'src/dev-website'),
  build: {
    outDir: path.resolve(__dirname, 'dist-demo'),
    emptyOutDir: true
  },
  resolve: {
    alias: {
      '@my-component': path.resolve(__dirname, 'src/component'),
    }    
  },
  server: {
    port: 3000,
  },
});
