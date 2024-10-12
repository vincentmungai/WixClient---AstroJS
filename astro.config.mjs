import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'hybrid',  // You're using hybrid mode, which allows a mix of static and server-rendered pages.
  adapter: vercel(), // Use the Vercel adapter for serverless deployments.
});
