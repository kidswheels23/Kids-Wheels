import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Rutas relativas para que los recursos funcionen en GitHub Pages.
export default defineConfig({
  base: './',
  plugins: [react()],
});
