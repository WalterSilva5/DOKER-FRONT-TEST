import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
const path = require('path');

export default defineConfig({
  plugins: [
    react({
      removeDevtoolsInProd: true,
      injectReact: true,
    }),
  ],
  server: {
    host: true,
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, '/src') }],
  },
});