# Maintenance du site

Procédure à suivre pour toute modification, même minime. Elle est volontairement
répétitive : c'est ce qui évite les mauvaises surprises en production.

## La procédure complète, étape par étape

### 1. Ouvrir le dossier dans Cursor

Fichier → Open Folder → `Desktop/Cabinet Jade site web/cabinet-jade`.

### 2. Vérifier Git

Dans le terminal (Terminal → New Terminal) :

```bash
git status
```

Attendre `working tree clean`. Si des modifications traînent, les comprendre
avant de continuer (voir `SAUVEGARDE.md`).

```bash
git pull
```

Récupère ce qui aurait été modifié depuis un autre ordinateur.

### 3. Lancer le site en local

```bash
npm start
```

Le navigateur s'ouvre sur http://localhost:3000. Laisser tourner pendant tout le
travail : chaque fichier enregistré recharge la page automatiquement.

### 4. Effectuer la modification

Voir la section « Modifications courantes » ci-dessous.

### 5. Tester sur ordinateur et sur mobile

Sur ordinateur, vérifier la page modifiée puis les pages voisines.

Pour le mobile, ouvrir les outils de développement du navigateur
(`Cmd+Option+I` dans Chrome), cliquer l'icône de téléphone en haut à gauche et
choisir un iPhone. Vérifier que rien ne dépasse, que le menu hamburger s'ouvre et
que les boutons restent cliquables.

### 6. Vérifier les liens

Cliquer tous les liens de la zone modifiée : menu, pied de page, bouton
« Prendre rendez-vous » (doit mener à Doctolib), carte Google Maps.

### 7. Réaliser le build

```bash
npm run build
```

**Ne jamais pousser sans avoir fait cette étape.** Le serveur de développement
est plus tolérant que le build de production : une erreur peut n'apparaître
qu'ici. Un *warning* est acceptable, une *error* non.

### 8. Créer un commit

```bash
git add .
git commit -m "content: correction des horaires du samedi"
```

Préfixes utilisés dans ce projet : `content:` (textes, photos), `fix:`
(correction de bug), `refactor:` (réorganisation du code), `seo:`, `docs:`,
`style:` (apparence).

### 9. Pousser sur GitHub

```bash
git push
```

Le code est maintenant sauvegardé (voir `SAUVEGARDE.md`).

### 10. Vérifier l'hébergement

Le `git push` déclenche automatiquement la mise en production sur Vercel.
Surveiller le passage de « Building » à « Ready » sur vercel.com. En cas
d'échec, le journal indique la ligne fautive.

### 11. Contrôler le site public

Ouvrir le site **en navigation privée** et refaire le tour de l'étape 5. Voir
`DEPLOIEMENT.md` pour la liste de contrôle détaillée et la marche à suivre en cas
de problème.

---

## Modification simple avec Cursor

Dans chaque cas, décrire l'objectif à Cursor plutôt que de chercher le fichier
soi-même. Exemples de demandes qui fonctionnent bien.

### Changer un texte

> « Sur la page d'accueil, remplace le texte de la section Bienvenue par : … »

Cursor trouve le fichier concerné (`src/pages/Home.tsx`). Vérifier ensuite dans
le navigateur que seul ce texte a bougé.

### Changer une photo

Déposer la nouvelle image dans `src/assets/images/` avec un nom descriptif en
minuscules et sans accent (par exemple `cabinet-salle-soins.jpg`), puis :

> « Utilise `cabinet-salle-soins.jpg` comme photo de la salle de soins sur la page Le Cabinet. »

Prévoir une image d'au moins 1200 pixels de large, mais **pas** une photo de
plusieurs mégaoctets sortie d'un appareil photo : demander à Cursor de
l'optimiser si elle dépasse 500 Ko.

### Modifier les horaires, l'adresse, le téléphone, le lien Doctolib

Toutes ces informations vivent dans **un seul fichier** : `src/config/cabinet.ts`.

> « Change les horaires du samedi en 9h-12h dans la configuration du cabinet. »

Elles se mettent alors à jour partout à la fois : pied de page, page Contact,
données structurées Google. Ne jamais les modifier directement dans une page.

### Ajouter une nouvelle page

> « Crée une page Questions fréquentes accessible depuis le menu. »

Cursor doit créer `src/pages/Faq.tsx`, déclarer la route dans `src/App.tsx` et
ajouter l'entrée dans `src/components/Header.tsx` et `src/components/Footer.tsx`.
Penser ensuite à ajouter l'URL au `sitemap.xml` (voir `SEO_LOCAL.md`).

### Revenir en arrière après une erreur

Si le site n'est pas encore poussé :

> « Annule mes modifications sur la page Contact. »

ou, en ligne de commande, `git restore src/pages/Contact.tsx`.

Si le site est déjà en ligne et cassé : d'abord rétablir la version précédente
depuis Vercel (effet immédiat), puis corriger le code. La procédure complète est
dans `DEPLOIEMENT.md`.

---

## À ne pas faire

- `npm run eject` — irréversible, casse définitivement l'outillage du projet.
- `npm audit fix --force` — met à jour `react-scripts` de force et casse le build.
- `git push --force` — peut effacer l'historique sur GitHub.
- `npm run deploy` — republie le site à une ancienne adresse GitHub Pages.
- Modifier `package-lock.json` à la main.
- Écrire une adresse, un email ou un téléphone directement dans une page.
- Inventer une information sur le cabinet, une qualification ou un bénéfice
  thérapeutique. En cas de doute : demander à Jade, laisser la mention `À VALIDER`.

## Après une modification importante

Ajouter une entrée dans `MODIFICATIONS.md` : dans deux ans, c'est le seul endroit
qui expliquera *pourquoi* le changement a été fait.
