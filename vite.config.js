import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/portfolio-etka/", // Replace 'portfolio-etka' with your repo name
  plugins: [react()],
});