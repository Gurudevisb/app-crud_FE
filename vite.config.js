import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';


// Log the TEST_URL environment variable
console.log('TEST_URL:', process.env.TEST_URL);

export default defineConfig({

    server: {
        host: '0.0.0.0',   // Bind to all interfaces
        port: 5173,         // Ensure the port is correctly set
      },


    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],


    build: {
        outDir: 'dist', // Ensure output directory is set
    },

    

});
