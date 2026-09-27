# Cabinet de chiropraxie Jade Philippe — site internet

Site vitrine du cabinet de **Jade Philippe**, chiropracteur à
**Creully-sur-Seulles** (Calvados, Normandie). Prise de rendez-vous via Doctolib.

> **Nouveau sur ce projet ?** Lire `docs/INSTALLATION.md` pour installer, puis
> `docs/MAINTENANCE.md` pour modifier quoi que ce soit. Les deux se lisent en dix
> minutes et évitent les erreurs coûteuses.

## Technologie

React 18 + TypeScript 4.9, Material UI 5, React Router 6, Framer Motion.
Outillage Create React App (`react-scripts` 5.0.1), npm. Node 22 LTS requis.

## Installation

```bash
git clone https://github.com/eddyphilippe/cabinet-jade.git
cd cabinet-jade
npm install
```

Détails et installation de Node : `docs/INSTALLATION.md`.

## Développement local

```bash
npm start     # http://localhost:3000, rechargement automatique
```

## Build

```bash
CI=true npm run build     # génère build/
```

À exécuter systématiquement **avant** de pousser du code, et toujours avec
`CI=true` : c'est ainsi que l'hébergeur construit le site, et dans ce mode un
simple avertissement devient une erreur bloquante. Doit afficher
« Compiled successfully ».

## Déploiement

Hébergeur **Cloudflare Pages**, branche `main` : tout `git push` déclenche la
mise en production. Adresse officielle : **https://jadephilippe-chiropraxie.fr**
(sans `www`, la version `www` redirige en 301).

Ne pas utiliser `npm run deploy`, hérité de l'ancien hébergement.

⚠️ Une ancienne page **GitHub Pages** sert encore un build du 22 mars 2025 à
l'adresse `eddyphilippe.github.io/cabinet-jade`, avec des coordonnées erronées.
Procédure de neutralisation dans `docs/DEPLOIEMENT.md`.

Aucun build hébergé n'avait jamais abouti, à cause d'un import inutilisé combiné
au `CI=true` des plateformes d'hébergement. Corrigé le 27/09/2026, explication
dans `docs/DEPLOIEMENT.md`.

## Documentation

| Fichier | Contenu |
|---|---|
| `docs/INSTALLATION.md` | prérequis, installation, commandes du projet |
| `docs/DEPLOIEMENT.md` | hébergement, mise en ligne, retour arrière |
| `docs/MAINTENANCE.md` | procédure de modification pas à pas |
| `docs/SEO_LOCAL.md` | audit SEO, Search Console, fiche Google |
| `docs/MODIFICATIONS.md` | journal des changements et de leurs raisons |
| `docs/SAUVEGARDE.md` | sauvegarde, restauration, anciennes versions |
| `.cursor/rules/` | règles permanentes pour l'assistant Cursor |

## Structure du projet

```
src/
  config/       cabinet.ts et seo.ts — source unique de vérité
  pages/        une page par route, déclarées dans App.tsx
  components/   Header, Footer, HeroBanner, Section, Seo, ScrollManager
  assets/       images
  styles/       thème et styles globaux
public/         index.html, robots.txt, sitemap.xml, manifest.json, _redirects
docs/           documentation *.md + ancien build GitHub Pages (à archiver)
```

Ajouter une page implique trois fichiers : `src/App.tsx` pour la route,
`src/config/seo.ts` pour son titre et sa description, `public/sitemap.xml` pour
son indexation.

Routes : `/` · `/about` (Le Cabinet) · `/services` (Soins proposés) ·
`/equipment` · `/pricing` (Tarifs) · `/contact`

## GitHub

https://github.com/eddyphilippe/cabinet-jade — branche de production : `main`.

## Maintenance

Toute modification suit la procédure de `docs/MAINTENANCE.md` : vérifier Git,
tester en local sur ordinateur **et** mobile, builder, committer, pousser,
contrôler le site public.

Coordonnées, horaires et lien Doctolib se modifient dans **un seul fichier** :
`src/config/cabinet.ts`. Ne jamais les écrire en dur dans une page.

## SEO

Voir `docs/SEO_LOCAL.md`. Principe : du contenu utile et lisible pour les
patients, pas de bourrage de mots-clés, pas de pages locales dupliquées, pas de
faux avis. Aucun classement Google ne peut être garanti.

Ce site est celui d'un professionnel de santé : ne jamais inventer d'indication
médicale, de bénéfice thérapeutique, de résultat, de témoignage ni de diplôme.

## Informations nécessitant encore validation

| Information | État |
|---|---|
| **Graphie de la commune** | ❔ Le site écrivait « Creully sur Seulles », la configuration utilise « Creully-sur-Seulles ». À aligner sur la fiche Google Business Profile. |
| Tarifs (60 € / 50 € / 60 €) | ❔ À confirmer auprès de Jade. |
| Communes de la zone desservie | ❔ `areas.nearbyTowns` est vide dans `src/config/seo.ts`. À définir avec Jade ; ne pas inventer. |
| Favicon et icônes | ❔ `favicon.ico`, `logo192.png` et `logo512.png` sont encore ceux de Create React App. À remplacer si Jade a un logo. |
| Phrase sur l'auto-guérison (`/about`) | ❔ Formulation affirmant un mécanisme thérapeutique, laissée inchangée dans l'attente d'un arbitrage. |

## Informations vérifiées

- **Adresse** : 63 Rue de Caen, 14480 Creully-sur-Seulles, France
- **Téléphone** : 06 95 11 27 55 — ligne professionnelle du cabinet, confirmée le 27/09/2026
- **Horaires** : du lundi au vendredi 10h-19h, samedi 10h-13h — confirmés le 27/09/2026
- **Email** : jadephilippe.chiropraxie@gmail.com (affiché dans le pied de page,
  retiré de l'encart de la page Contact à la demande de l'utilisateur)
- **Doctolib** : https://www.doctolib.fr/chiropracteur/creully-sur-seulles/jade-philippe (lien testé)
- **Formation** : diplômée de l'IFEC (Institut Franco-Européen de Chiropraxie),
  formations complémentaires en prise en charge du sportif et en Dry Needling
