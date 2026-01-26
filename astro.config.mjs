// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap'; // 👇 NEW: Import sitemap

// https://astro.build/config
export default defineConfig({
  // 👇 IMPORTANT: Replace this with your actual domain when you launch!
  // If you don't have one yet, leave it as localhost or a placeholder.
  site: 'https://jloglobalresources.com/', 
  
  integrations: [sitemap()], // 👇 NEW: Add integration
  
  vite: {
    plugins: [tailwindcss()],
    server: {
      fs: {
        allow: ['..']
      }
    }
  }
});