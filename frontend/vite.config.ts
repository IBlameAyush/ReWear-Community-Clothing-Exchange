<<<<<<< HEAD
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
>>>>>>> b9f3a4b2d29d82dacd218e2c0283cd0fd5c818ac

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
=======
  server: {
    port: 5173,
    host: true
  }
})
>>>>>>> b9f3a4b2d29d82dacd218e2c0283cd0fd5c818ac
