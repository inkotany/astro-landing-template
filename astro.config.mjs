// @ts-check
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'

const site = process.env.PUBLIC_SITE_URL || 'http://localhost:4321'
const base = process.env.PUBLIC_SITE_BASE_URL || '/'

// https://astro.build/config
export default defineConfig({
   site,
   base,
   integrations: [react()],

   vite: {
      plugins: [tailwindcss()],
   },
})
