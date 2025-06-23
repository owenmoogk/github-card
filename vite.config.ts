import react from '@vitejs/plugin-react';
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
  server: {
    port: 3000,
  },
});
