import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.js'],
      refresh: true,
    }),
  ],
  server: {
    host: true, // Allows external access
    port: 5173, // Vite default port
    hmr: {
      protocol: 'wss', // WebSocket Secure for HTTPS
      host: 'app-crud-fe-9.onrender.com', // Your custom URL
      clientPort: 443, // HTTPS uses port 443
    },
  },
  build: {
    outDir: 'dist', // Default output directory for production build
  },
});
