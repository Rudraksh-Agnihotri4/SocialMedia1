import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
    base: '/SocialMedia1/',
  server: { port: 5173, proxy: { '/api': 'http://localhost:5050' } }
});
