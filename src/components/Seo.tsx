import { useEffect } from 'react';

import { canonicalUrl, PageSeo } from '../config/seo';

/**
 * Applique le titre, la description et l'URL canonique d'une page.
 *
 * Le site est une application React rendue côté navigateur : les balises sont
 * donc mises à jour au moment de l'affichage. Google exécute le JavaScript et
 * les prend en compte.
 *
 * Les balises Open Graph, elles, restent écrites en dur dans
 * `public/index.html` : les robots des messageries et des réseaux sociaux
 * n'exécutent pas le JavaScript et ne liraient pas une version modifiée ici.
 *
 * Usage, en première ligne du rendu d'une page :
 *   <Seo page={seo.pages.contact} />
 */
const Seo = ({ page }: { page: PageSeo }) => {
  useEffect(() => {
    document.title = page.title;
    setMetaByName('description', page.description);
    setCanonical(canonicalUrl(page.path));

    if (page.noIndex) {
      setMetaByName('robots', 'noindex, follow');
    } else {
      removeMetaByName('robots');
    }
  }, [page]);

  return null;
};

function setMetaByName(name: string, content: string): void {
  let tag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
}

function removeMetaByName(name: string): void {
  document.querySelector(`meta[name="${name}"]`)?.remove();
}

function setCanonical(url: string): void {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }

  link.setAttribute('href', url);
}

export default Seo;
