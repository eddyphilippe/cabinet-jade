/**
 * Paramètres de référencement, centralisés pour être modifiables sans toucher
 * au code des pages.
 *
 * Deux règles à respecter en modifiant ce fichier :
 *
 * 1. Un titre et une description propres à chaque page, rédigés pour un
 *    patient et non pour un moteur de recherche. Pas de répétition mécanique
 *    de mots-clés.
 * 2. Aucune promesse thérapeutique, aucun résultat garanti. Le site est celui
 *    d'un professionnel de santé : décrire ce qui est proposé, jamais ce qui
 *    est censé être obtenu.
 *
 * Longueurs d'affichage habituelles dans Google : environ 60 caractères pour
 * le titre, 155 pour la description. Au-delà, le texte est tronqué.
 */

import { addressInSentence, cabinet } from './cabinet';

export interface PageSeo {
  /** Chemin de la route, tel que déclaré dans App.tsx. */
  path: string;
  title: string;
  description: string;
  /** `true` pour demander à Google de ne pas indexer la page. */
  noIndex?: boolean;
  /** `false` pour exclure la page du sitemap.xml. */
  inSitemap?: boolean;
}

/**
 * Zones géographiques du cabinet.
 *
 * `nearbyTowns` est volontairement vide. ⚠️ À DÉFINIR AVEC JADE : aucune liste
 * de communes n'existe dans le projet ni dans son historique, et une telle
 * liste ne doit pas être inventée — la bonne source est Jade, qui sait d'où
 * viennent ses patients.
 *
 * Une commune n'a sa place ici que si la mentionner apporte une information
 * utile au patient. Ne jamais générer une page par commune : Google considère
 * ces pages quasi identiques comme du contenu de faible valeur.
 */
export const areas = {
  city: cabinet.city,
  department: cabinet.department,
  region: cabinet.region,
  nearbyTowns: [] as string[],
};

export const seo = {
  siteName: cabinet.name,
  locale: 'fr_FR',
  lang: 'fr',

  /** Image utilisée lors d'un partage sur une messagerie ou un réseau social. */
  ogImage: '/og-image.jpg',

  pages: {
    home: {
      path: '/',
      title: `Chiropracteur à ${areas.city} | ${cabinet.practitioner}`,
      description: `${cabinet.practitioner}, chiropracteur à ${areas.city} dans le ${areas.department}. Cabinet en rez-de-chaussée sans marche, parking, rendez-vous en ligne.`,
    },
    about: {
      path: '/about',
      title: `Cabinet de chiropraxie à ${areas.city} | ${cabinet.practitioner}`,
      description: `Le cabinet de chiropraxie de ${cabinet.practitioner} à ${areas.city} : accès sans marche, parking dédié, et le parcours de votre chiropracteure.`,
    },
    services: {
      path: '/services',
      title: `Soins de chiropraxie | ${cabinet.practitioner}, chiropracteur`,
      description: `Chiropraxie générale, thérapie des tissus mous, Dry Needling, ondes de choc et réhabilitation au cabinet de ${cabinet.practitioner} à ${areas.city}.`,
    },
    equipment: {
      path: '/equipment',
      title: `Équipement du cabinet | ${cabinet.practitioner}, chiropracteur`,
      description: `Table d'ajustement et appareil à onde de choc : l'équipement du cabinet de chiropraxie de ${cabinet.practitioner} à ${areas.city}.`,
    },
    pricing: {
      path: '/pricing',
      title: `Tarifs des consultations | ${cabinet.practitioner}, chiropracteur`,
      description: `Tarifs des consultations de chiropraxie à ${areas.city} : première consultation, séance de suivi et Dry Needling. Carte, espèces ou chèque.`,
    },
    contact: {
      path: '/contact',
      title: `Contact et rendez-vous | ${cabinet.practitioner}, chiropracteur`,
      description: `Adresse, horaires et prise de rendez-vous en ligne du cabinet de chiropraxie de ${cabinet.practitioner}, ${addressInSentence} à ${areas.city}.`,
    },
    notFound: {
      path: '*',
      title: `Page introuvable | ${cabinet.name}`,
      description: 'Cette page n’existe pas ou a été déplacée.',
      noIndex: true,
      inSitemap: false,
    },
  } satisfies Record<string, PageSeo>,
};

/**
 * Construit l'URL canonique d'une page.
 *
 * Toujours sans barre oblique finale, à l'exception de la racine, afin que
 * Google ne voie qu'une seule adresse par page.
 */
export function canonicalUrl(path: string): string {
  if (path === '/' || path === '*') return cabinet.website;
  return `${cabinet.website}${path}`;
}

export default seo;
