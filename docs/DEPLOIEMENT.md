# Déploiement

## Situation constatée en septembre 2026

Le projet contient **deux configurations d'hébergement concurrentes**, héritées
de son histoire. Comprendre ce point avant toute mise en ligne.

### Ce qui est réellement servi au public

Le dossier `docs/` de la branche `main` est publié par **GitHub Pages** à
l'adresse https://eddyphilippe.github.io/cabinet-jade/ (page active, HTTP 200).

Ce build date du **22 mars 2025** alors que le code a été modifié jusqu'au
**3 mai 2025**. Le site ainsi publié est donc obsolète de six mois : il affiche
l'email et le téléphone personnels du développeur, ne contient pas le bouton
Doctolib et présente l'ancienne page Équipements.

Aucun workflow GitHub Actions n'existe : GitHub Pages publie simplement le
contenu du dossier `docs/`, sans build automatique.

### Ce que le code prévoit aujourd'hui

L'historique montre une migration vers **Vercel** le 22 mars 2025 à 15h11
(commit `6843ddf`), confirmée le 3 mai (commit `4b64026`) :

- `vercel.json` renvoie toutes les routes vers `index.html` (nécessaire pour une
  application React à page unique) ;
- `public/_redirects` fait la même chose ;
- `src/App.tsx` utilise `BrowserRouter` (URL propres) et non plus `HashRouter`
  (URL en `#/`, qui était le contournement pour GitHub Pages).

À la date de l'audit, `https://cabinet-jade.vercel.app` répond **404** : le
projet Vercel porte un autre nom, ou n'a jamais été déployé.

### Domaine

**Domaine à confirmer.** Aucun domaine personnalisé n'est identifiable dans le
dépôt : pas de fichier `CNAME`, et `package.json` déclare `"homepage": "./"`
(chemin relatif, sans URL absolue). À renseigner ici dès que l'information est
connue, car elle conditionne les balises canonical et le `sitemap.xml`.

## Configuration de référence

| Élément | Valeur |
|---|---|
| Hébergeur cible | Vercel |
| Hébergeur historique | GitHub Pages (dossier `docs/`) — à neutraliser |
| Dépôt | https://github.com/eddyphilippe/cabinet-jade |
| Branche de production | `main` |
| Commande de build | `npm run build` |
| Dossier de sortie | `build/` |
| Framework détecté par Vercel | Create React App |
| Domaine | à confirmer |

## Mettre le site en ligne

Avec Vercel connecté au dépôt GitHub, le déploiement est automatique : **tout
`git push` sur `main` déclenche une mise en production**. Il n'y a aucune
commande de déploiement à taper.

```bash
npm run build          # 1. vérifier que le build passe AVANT de pousser
git add .
git commit -m "content: description de la modification"
git push
```

Puis surveiller le déploiement sur [vercel.com](https://vercel.com) : le projet
affiche « Building », puis « Ready ». Compter une à deux minutes.

> Ne pas utiliser `npm run deploy`. Ce script (`gh-pages -d build`) appartient à
> l'ancien hébergement GitHub Pages et republierait le site à une seconde adresse,
> ce qui nuit au référencement (deux sites identiques indexés par Google).

## Vérifier la production après publication

1. Ouvrir le site en **navigation privée** (sinon le cache du navigateur peut
   afficher l'ancienne version).
2. Vérifier la page d'accueil, puis naviguer vers chaque page du menu.
3. Recharger la page (`Cmd+R`) **en étant sur une page interne** comme `/contact` :
   si une erreur 404 apparaît, la règle de réécriture de `vercel.json` ne
   fonctionne pas.
4. Vérifier les coordonnées affichées : adresse, email, horaires.
5. Cliquer le bouton « Prendre rendez-vous » et confirmer l'arrivée sur Doctolib.
6. Refaire le tour sur un téléphone, pas seulement sur ordinateur.

## Revenir à la version précédente

### Méthode 1 — depuis Vercel (immédiat, recommandé en cas d'urgence)

Dans le tableau de bord Vercel, onglet **Deployments**, choisir le déploiement
précédent qui fonctionnait, puis **⋯ → Promote to Production** (ou
« Rollback »). Le site public revient en arrière en quelques secondes, sans
toucher au code.

Attention : c'est un retour en arrière **du site**, pas du code. Le dépôt
contient toujours la version fautive ; il faut ensuite corriger avec la méthode 2.

### Méthode 2 — depuis Git (corrige la source)

```bash
git log --oneline              # repérer le commit fautif
git revert <identifiant>       # créer un commit qui annule le précédent
npm run build                  # vérifier que ça compile
git push                       # redéploie automatiquement
```

Ne jamais utiliser `git push --force` pour revenir en arrière.

## Neutraliser l'ancien GitHub Pages

À faire quand le domaine et l'hébergement Vercel sont confirmés, afin d'éviter
que Google indexe deux sites identiques :

1. Sur GitHub : **Settings → Pages → Source → None** pour arrêter la publication.
2. Déplacer l'ancien build hors de `docs/` (par exemple vers `archives/`) avec
   `git mv`, pour conserver l'historique.
3. Retirer le script `deploy` et la dépendance `gh-pages` de `package.json`.

Ces trois étapes touchent à l'hébergement : **les valider avant exécution.**
