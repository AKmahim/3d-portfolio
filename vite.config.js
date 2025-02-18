import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // GitHub repository name
  root: '.',                // Set project root directory
  build: {
    outDir: 'dist',         // Output directory for production files
    rollupOptions: {
      input: './index.html', // Entry point
    },
  },
});
