import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/react-jobs/',  // Make sure this matches your GitHub repository name
  plugins: [react()],
  server: {
    port: 3000, // This is for local development; it won't affect the deployed app
  }
});
