import { getCollection } from 'astro:content';

export const LANGS = ['en', 'fr'];

/** Build a link for a language. path is the English path, e.g. "/projects". */
export function href(lang, path = '/') {
  if (lang !== 'fr') return path;
  return path === '/' ? '/fr/' : '/fr' + path;
}

/** Projects for one language, sorted by order. Each gets a plain slug. */
export async function getProjects(lang) {
  const all = await getCollection('projects', (e) => e.id.startsWith(lang + '/'));
  return all
    .map((e) => ({ ...e, slug: e.id.slice(lang.length + 1) }))
    .sort((a, b) => a.data.order - b.data.order);
}
