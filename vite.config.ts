import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Production optimizations
    minify: 'terser',
    terserOptions: {
      compress: {
        // Remove console.* statements in production
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Code splitting and chunk optimization
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk for common dependencies
          vendor: ['react', 'react-dom', 'react-router'],
          // UI components chunk
          ui: ['axios'],
        },
      },
    },
  },
})
