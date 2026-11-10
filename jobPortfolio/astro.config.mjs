import { defineConfig } from 'astro/config';

export default defineConfig({
  // Repo "portfolio" -> served at https://jibinp.github.io/portfolio
  site: 'https://jibinp.github.io',
  base: '/portfolio',
  trailingSlash: 'ignore',
});
