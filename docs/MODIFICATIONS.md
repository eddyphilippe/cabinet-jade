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
