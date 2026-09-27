/**
 * Source unique de vérité pour les informations du cabinet.
 *
 * Toute coordonnée affichée sur le site doit venir de ce fichier. Ne jamais
 * écrire une adresse, un email, un téléphone ou un lien de rendez-vous
 * directement dans une page ou un composant.
 *
 * Ne jamais inventer une information manquante : la laisser à `null` et la
 * signaler dans le README.
 */

/** Une plage horaire d'ouverture. `days` suit le format des données structurées Google. */
export interface OpeningHours {
  label: string;
  days: string[];
  opens: string;
  closes: string;
}

export interface Phone {
  /** Format international, pour les liens `tel:` et les données structurées. */
  e164: string;
  /** Format lisible, pour l'affichage à l'écran. */
  display: string;
}

export interface Cabinet {
  name: string;
  shortName: string;
  practitioner: string;
  profession: string;
  address: string;
  postalCode: string;
  city: string;
  department: string;
  region: string;
  country: string;
  countryCode: string;
  email: string;
  /** `null` tant qu'aucun numéro n'a été validé : voir la note ci-dessous. */
  phone: Phone | null;
  doctolib: string;
  maps: { place: string; directions: string; embed: string };
  website: string;
  openingHours: OpeningHours[];
}

export const cabinet: Cabinet = {
  /** Nom officiel, utilisé dans le pied de page et les données structurées. */
  name: 'Centre de Chiropraxie Jade Philippe',

  /**
   * Libellé court affiché dans l'en-tête du site, où la place manque.
   * Dans une phrase ou un titre de page, utiliser `name` plutôt que celui-ci :
   * il ne contient pas le nom de la praticienne.
   */
  shortName: 'Centre de Chiropraxie',

  practitioner: 'Jade Philippe',
  profession: 'Chiropracteur',

  address: '63 Rue de Caen',
  postalCode: '14480',
  city: 'Creully-sur-Seulles',
  department: 'Calvados',
  region: 'Normandie',
  country: 'France',
  countryCode: 'FR',

  email: 'jadephilippe.chiropraxie@gmail.com',

  /**
   * Téléphone. ⚠️ À VALIDER — volontairement laissé à `null`.
   *
   * Aucun numéro n'est renseigné ici pour deux raisons. D'abord, le numéro
   * `06 12 34 56 78` présent sur le site jusqu'au 27/09/2026 était factice.
   * Ensuite, le numéro `0695112755` figurait sur le site avant le 01/04/2025
   * (commit 7a8ef64) associé à l'adresse email personnelle du développeur : son
   * appartenance au cabinet doit être confirmée avant publication.
   *
   * Ce dépôt est public : un numéro écrit ici est lisible de tous, même s'il
   * n'est pas affiché à l'écran. Ne le renseigner qu'une fois vérifié.
   *
   * Pour l'activer, remplacer `null` par :
   *   { e164: '+33XXXXXXXXX', display: '0X XX XX XX XX' }
   * L'en-tête, le pied de page, la page Contact et les données structurées
   * l'afficheront alors automatiquement.
   */
  phone: null,

  /** Prise de rendez-vous en ligne (lien vérifié le 27/09/2026). */
  doctolib:
    'https://www.doctolib.fr/chiropracteur/creully-sur-seulles/jade-philippe',

  maps: {
    /** Fiche du cabinet sur Google Maps. */
    place:
      'https://www.google.com/maps/search/?api=1&query=63+Rue+de+Caen%2C+14480+Creully-sur-Seulles',
    /** Itinéraire vers le cabinet depuis la position du visiteur. */
    directions:
      'https://www.google.com/maps/dir/?api=1&destination=63+Rue+de+Caen%2C+14480+Creully-sur-Seulles',
    /** Carte intégrée dans la page (iframe). */
    embed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.0633173599486!2d-0.5394614842061502!3d49.28914207933026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480a66dbf8b7f579%3A0x32ddab656ecaa68c!2s63%20Rue%20de%20Caen%2C%2014480%20Creully%20sur%20Seulles!5e0!3m2!1sfr!2sfr!4v1654321987654!5m2!1sfr!2sfr',
  },

  /**
   * Adresse publique officielle du site, sans barre oblique finale.
   *
   * Domaine enregistré chez OVH le 27/09/2026, DNS géré sur Cloudflare.
   * La version `www` redirige en 301 vers celle-ci : ne jamais publier de lien
   * vers `www`, sous peine de faire indexer deux adresses concurrentes.
   *
   * Cette valeur alimente les balises canonical et le sitemap.
   */
  website: 'https://jadephilippe-chiropraxie.fr',

  /** ⚠️ À VALIDER auprès de Jade — repris de la page Contact existante. */
  openingHours: [
    {
      label: 'Du lundi au vendredi',
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
    {
      label: 'Samedi',
      days: ['Saturday'],
      opens: '09:00',
      closes: '13:00',
    },
  ],
};

/** Adresse sur une seule ligne : « 63 Rue de Caen, 14480 Creully-sur-Seulles ». */
export const fullAddress = `${cabinet.address}, ${cabinet.postalCode} ${cabinet.city}`;

/** Horaires résumés : « Du lundi au vendredi : 9h-19h | Samedi : 9h-13h ». */
export const openingHoursSummary = cabinet.openingHours
  .map((h) => `${h.label} : ${formatHour(h.opens)}-${formatHour(h.closes)}`)
  .join(' | ');

/** Horaires en prose : « du lundi au vendredi de 9h à 19h et le samedi de 9h à 13h ». */
export const openingHoursSentence = cabinet.openingHours
  .map((h, i) => {
    const label = i === 0 ? lowerFirst(h.label) : `le ${lowerFirst(h.label)}`;
    return `${label} de ${formatHour(h.opens)} à ${formatHour(h.closes)}`;
  })
  .join(' et ');

/** Convertit « 09:00 » en « 9h » et « 09:30 » en « 9h30 ». */
function formatHour(time: string): string {
  const [hours, minutes] = time.split(':');
  const h = Number(hours);
  return minutes === '00' ? `${h}h` : `${h}h${minutes}`;
}

/** Met la première lettre en minuscule, pour insérer un libellé dans une phrase. */
function lowerFirst(text: string): string {
  return text.charAt(0).toLowerCase() + text.slice(1);
}

export default cabinet;
