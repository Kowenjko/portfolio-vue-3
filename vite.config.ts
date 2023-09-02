import { fileURLToPath, URL } from 'node:url'
import path from 'path'
import EnvironmentPlugin from 'vite-plugin-environment'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), EnvironmentPlugin('all')],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
