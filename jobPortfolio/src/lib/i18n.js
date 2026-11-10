import { getCollection } from 'astro:content';

export const LANGS = ['en', 'fr'];

/** Build a link for a language. path is the English path, e.g. "/projects". */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export function href(lang, path = '/') {
  if (lang !== 'fr') return BASE + path;
  return BASE + (path === '/' ? '/fr/' : '/fr' + path);
}

/** Link to a file in public/, e.g. "/favicon.svg". */
export const asset = (path) => BASE + path;

/** Articles (English only), sorted by order. */
export async function getArticles() {
  const all = await getCollection('articles');
  return all.map((e) => ({ ...e, slug: e.id })).sort((a, b) => a.data.order - b.data.order);
}

/** Projects for one language, sorted by order. Each gets a plain slug. */
export async function getProjects(lang) {
  const all = await getCollection('projects', (e) => e.id.startsWith(lang + '/'));
  return all
    .map((e) => ({ ...e, slug: e.id.slice(lang.length + 1) }))
    .sort((a, b) => a.data.order - b.data.order);
}
