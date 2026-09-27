# Journal des modifications

Une entrée par changement important, la plus récente en haut. Le but n'est pas de
répéter ce que dit `git log`, mais d'expliquer **pourquoi** un changement a été
fait, afin que ce soit compréhensible dans plusieurs années.

Modèle à copier :

```
## AAAA-MM-JJ — Titre court

**Objectif :**
**Fichiers modifiés :**
**Résultat :**
**Commit :**
```

---

## 2026-09-27 — Retrait de la page Équipement

**Objectif :** retirer la page Équipement du site, en conservant la
possibilité de la remettre en ligne.

**Fichiers modifiés :** `src/App.tsx` (route supprimée),
`src/components/Header.tsx` et `src/components/Footer.tsx` (entrées de menu),
`public/sitemap.xml`, `src/config/seo.ts` et `src/pages/Equipment.tsx`
(commentaires), `README.md`.

**Résultat :** le site compte désormais cinq pages. Le composant
`src/pages/Equipment.tsx` **n'a pas été supprimé** : n'étant importé nulle
part, il n'alourdit pas le site construit, et son en-tête décrit les quatre
endroits à modifier pour le remettre en service. Le titre et la description
de la page restent dans `src/config/seo.ts`, prêts à resservir.

Cette prudence n'est pas théorique : la page avait déjà été supprimée puis
restaurée en mai 2025, aux commits `e9a7cc0` et `0751976`.

L'information la plus utile de cette page n'est pas perdue pour autant :
l'appareil à onde de choc figure désormais parmi les soins proposés, et la
page Le Cabinet continue de mentionner le matériel du cabinet.

**Commit :** voir `git log` du 27/09/2026.

---

## 2026-09-27 — Cloudflare Pages, domaine, et socle SEO

**Objectif :** choisir un hébergeur définitif, enregistrer le domaine du
cabinet, et doter le site du socle de référencement qui lui manquait
entièrement.

**Fichiers modifiés :** `.node-version` (nouveau), suppression de
`vercel.json`, `src/config/cabinet.ts`, `src/config/seo.ts` (nouveau),
`src/components/Seo.tsx` et `src/components/ScrollManager.tsx` (nouveaux),
`src/components/Section.tsx`, `src/components/Footer.tsx`, `src/App.tsx`, les
sept pages, `public/index.html`, `public/manifest.json`, `public/robots.txt`,
`public/sitemap.xml` et `public/og-image.jpg` (nouveaux), `src/App.test.tsx`,
`src/setupTests.ts`, et la documentation.

**Résultat :**

*Hébergement.* Cloudflare Pages retenu plutôt que Vercel, parce que le
développeur y héberge déjà un autre site et en maîtrise l'interface. Le domaine
`jadephilippe-chiropraxie.fr` a été enregistré chez OVH et sa zone déléguée à
Cloudflare. L'adresse officielle est **sans `www`**. `vercel.json` a été
supprimé : `public/_redirects` assure déjà le routage sur Cloudflare. Un fichier
`.node-version` fixe Node 22, Cloudflare Pages ne lisant pas le champ `engines`
de `package.json`.

*SEO technique.* Le site déclarait `lang="en"`, s'intitulait « React App » et
portait la description par défaut de Create React App. Désormais : langue
française, titre et description propres à chaque page via `src/config/seo.ts` et
le composant `Seo`, balises canonical, Open Graph avec une image de partage
recadrée depuis la photo du cabinet, `sitemap.xml`, `robots.txt` renvoyant vers
le sitemap, et données structurées JSON-LD de type `Chiropractic`.

Le JSON-LD ne contient ni `telephone`, ni `aggregateRating`, ni `review` : un
faux numéro ou un faux avis nuirait davantage qu'un champ manquant. Il est
statique dans `public/index.html` et doit être tenu synchronisé à la main avec
`src/config/cabinet.ts` — ce choix privilégie la fiabilité de lecture par Google
sur l'élégance de la source unique, et il est signalé dans le fichier.

*Liens internes.* Les ancres de la page Soins n'avaient jamais pu fonctionner :
le composant `Section` acceptait une prop `id` sans jamais l'appliquer au DOM,
donc l'élément cible n'existait pas. Corrigé, avec un `ScrollManager` qui gère le
défilement au changement de page et le saut vers les ancres. Le pied de page
pointait par ailleurs vers `#chiropratique-generale`, section inexistante.

*Orthographe.* « Dry Needing » corrigé en « Dry Needling » sur les pages Soins et
Tarifs. Le développeur avait déjà fait cette correction dans le pied de page au
commit `5700b63` ; le reste du site était resté incohérent. L'ancre a suivi.

*Tests.* `App.test.tsx` contenait encore le test de démonstration de Create React
App, qui cherchait un lien « learn react » inexistant : il échouait depuis le
premier jour. Remplacé par cinq tests utiles, dont un filet de sécurité qui
échoue si le faux numéro `06 12 34 56 78` ou le numéro personnel du développeur
réapparaissait dans le rendu.

**Commits :** voir `git log` du 27/09/2026.

---

## 2026-09-27 — Cause du blocage de déploiement identifiée et corrigée

**Objectif :** comprendre pourquoi le site publié restait celui de mars 2025
alors que le code avait été corrigé jusqu'en mai 2025.

**Fichiers modifiés :** `src/pages/SoinsProposés.tsx` (un import retiré),
`docs/DEPLOIEMENT.md`, `docs/MAINTENANCE.md`.

**Résultat :** Vercel définit `CI=true`, réglage dans lequel Create React App
transforme les avertissements ESLint en erreurs de compilation. Le projet
contenait un import `Divider` inutilisé depuis le commit initial `a0dfb13`
(22 mars 2025, 10h40), antérieur à la migration vers Vercel `6843ddf` (même jour,
15h11) : **le build Vercel n'a donc jamais abouti une seule fois.** GitHub Pages
est resté le seul site en ligne, avec un build figé au 22 mars 2025.

Vérifié en reconstruisant le dépôt à l'état du tag
`etat-initial-avant-reorganisation` : `CI=true npm run build` y échoue avec
« Failed to compile ». Après correction, la même commande affiche « Compiled
successfully ». La procédure de maintenance impose désormais `CI=true` lors du
build de vérification.

**Commit :** `2e19daa`

---

## 2026-09-27 — Centralisation des informations du cabinet

**Objectif :** supprimer la dispersion des coordonnées, écrites en dur dans une
demi-douzaine de fichiers, et faire disparaître le numéro de téléphone factice
affiché sur la page Contact.

**Fichiers modifiés :** création de `src/config/cabinet.ts` ; branchement de
`src/components/Header.tsx`, `src/components/Footer.tsx`, `src/pages/Contact.tsx`,
`src/pages/Home.tsx`, `src/pages/About.tsx` et `src/pages/SoinsProposés.tsx`.

**Résultat :** toutes les coordonnées proviennent d'un seul fichier. Les horaires
existent en deux formats générés depuis la même source (encart et phrase), ce qui
supprime le risque de les voir diverger. Le champ `phone` vaut `null` : le dépôt
étant public, aucun numéro non vérifié n'y est écrit, même masqué à l'affichage,
car il resterait lisible dans le bundle JavaScript. Les composants n'affichent la
ligne « Téléphone » que lorsque le champ est renseigné.

Le faux numéro `06 12 34 56 78` ne figure plus ni dans le code ni dans le build.

Suppression par ailleurs des fichiers orphelins : `Navbar.tsx`, `Services.tsx`,
`ServiceCard.tsx`, les dossiers `cabinet-jade-new/` et `cabinet-jade/`, et quatre
images en doublon sur six. Trois de ces images portaient un nom de portrait alors
qu'elles étaient en réalité des copies de la photo du cabinet.

**Commits :** `701769f`, `a5d58e2`

---

## 2026-09-27 — Reprise du projet : audit, documentation et règles

**Objectif :** reprendre la maintenance du site sur un nouvel ordinateur, après
seize mois sans intervention (dernier commit : 3 mai 2025). Établir un état des
lieux avant toute modification, puis doter le projet de la documentation qui lui
manquait pour être repris facilement.

**Fichiers modifiés :** ajout de `.cursor/rules/projet-cabinet-jade.mdc`,
`docs/INSTALLATION.md`, `docs/DEPLOIEMENT.md`, `docs/MAINTENANCE.md`,
`docs/SEO_LOCAL.md`, `docs/SAUVEGARDE.md`, `docs/MODIFICATIONS.md`. Réécriture de
`README.md`. **Aucune modification du code du site.**

**Résultat :** le projet a été cloné depuis GitHub (il n'existait pas sur cette
machine), Node 22 LTS installé, et `npm run build` vérifié comme fonctionnel. Un
tag Git `etat-initial-avant-reorganisation` marque l'état d'origine. L'audit a mis
au jour cinq points importants :

1. **Le site public est obsolète.** Le dossier `docs/` est publié par GitHub Pages
   à l'adresse `eddyphilippe.github.io/cabinet-jade`, mais ce build date du
   22 mars 2025 alors que le code va jusqu'au 3 mai 2025. Le site ainsi visible
   affiche l'email et le téléphone personnels du développeur, et ne contient pas
   le bouton Doctolib. Détail dans `DEPLOIEMENT.md`.
2. **Deux hébergements se concurrencent** : GitHub Pages (historique, actif) et
   Vercel (ce que le code prévoit, mais introuvable en ligne à cette date).
3. **Aucun téléphone valide n'existe.** Le commit `7a8ef64` du 1er avril 2025
   montre que l'ancien numéro `0695112755`, associé à l'email personnel du
   développeur, a été remplacé par le numéro factice `06 12 34 56 78`. Aucun
   numéro appartenant à Jade n'a jamais figuré dans ce dépôt.
4. **Des mentions professionnelles sont non vérifiées** sur la page Le Cabinet :
   « Dr. Jade Philippe », « Chiropracteure D.C. » et « pratique depuis plus de
   12 ans », vraisemblablement hérités du contenu de démonstration initial. Le nom
   de l'école y est également mal orthographié (« Chiropratique » au lieu de
   « Chiropraxie »).
5. **Le socle SEO est absent** : langue déclarée en anglais, titre « React App »,
   ni titres par page, ni canonical, ni sitemap, ni données structurées. Relevé
   complet dans `SEO_LOCAL.md`.

Fichiers morts identifiés, conservés pour l'instant : `cabinet-jade-new/`
(squelette Create React App jamais utilisé), `cabinet-jade/src/pages/Equipment.tsx`
(fichier vide committé par erreur), `src/components/Navbar.tsx`,
`src/pages/Services.tsx` et `src/components/ServiceCard.tsx` (non importés), ainsi
que quatre images en doublon sur six.

**Commit :** `docs: ajout documentation maintenance et regles Cursor`
