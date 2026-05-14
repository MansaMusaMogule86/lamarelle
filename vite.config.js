import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        facilities: resolve(__dirname, 'facilities.html'),
        progress: resolve(__dirname, 'progress.html'),
      },
    },
  },
})
