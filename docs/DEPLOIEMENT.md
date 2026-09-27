# Déploiement

## Configuration de référence

| Élément | Valeur |
|---|---|
| Hébergeur | Cloudflare Pages |
| Adresse officielle | https://jadephilippe-chiropraxie.fr |
| Redirection | `www.jadephilippe-chiropraxie.fr` → 301 vers l'adresse officielle |
| Registrar du domaine | OVH (enregistré le 27/09/2026) |
| DNS | Cloudflare (serveurs `augustus.ns.cloudflare.com` et `celine.ns.cloudflare.com`) |
| Dépôt | https://github.com/eddyphilippe/cabinet-jade |
| Branche de production | `main` |
| Commande de build | `npm run build` |
| Dossier de sortie | `build` |
| Version de Node | 22, fixée par le fichier `.node-version` |
| Routage | `public/_redirects` (`/* /index.html 200`) |

## Mettre le site en ligne

Cloudflare Pages étant connecté au dépôt GitHub, le déploiement est
automatique : **tout `git push` sur `main` déclenche une mise en production**.
Il n'y a aucune commande de déploiement à taper.

```bash
CI=true npm run build     # 1. vérifier AVANT de pousser (voir ci-dessous)
git add .
git commit -m "content: description de la modification"
git push
```

Puis surveiller le déploiement dans le tableau de bord Cloudflare, section
**Workers & Pages → cabinet-jade → Deployments**. Compter une à deux minutes.

### Le `CI=true` n'est pas optionnel

C'est le piège qui a paralysé ce projet pendant six mois. Les plateformes
d'hébergement définissent `CI=true`, et dans ce mode Create React App
**transforme les avertissements ESLint en erreurs** :

```
Treating warnings as errors because process.env.CI = true.
Failed to compile.
```

Un simple import oublié en haut d'un fichier suffit donc à bloquer toute mise
en ligne, alors que `npm run build` sans `CI=true` passerait sans broncher en
local. Vérifiez toujours avec `CI=true` : la commande doit se terminer par
« Compiled successfully ».

> **Historique.** Le projet contenait un import `Divider` inutilisé depuis le
> commit initial `a0dfb13` (22/03/2025, 10h40), antérieur à la première
> tentative de déploiement. Aucun build hébergé n'a donc jamais abouti, ce qui
> explique que le site public soit resté figé sur un ancien build GitHub Pages.
> Corrigé au commit `2e19daa`.

## Créer ou recréer le projet Cloudflare Pages

1. **Workers & Pages → Create → Pages → Connect to Git**
2. Sélectionner le dépôt `cabinet-jade`, branche de production `main`
3. Réglages de build :
   - Framework preset : **Create React App**
   - Build command : **`npm run build`**
   - Build output directory : **`build`**
4. Déployer.

Le fichier `.node-version` à la racine impose Node 22. Il est indispensable :
`react-scripts` 5.0.1 n'est plus maintenu et échoue sur les versions récentes
de Node. Ne pas le supprimer.

### Rattacher le domaine

1. **Custom domains → Set up a domain**, ajouter `jadephilippe-chiropraxie.fr`
2. Ajouter également `www.jadephilippe-chiropraxie.fr`
3. **Rules → Redirect Rules → Create** : si le nom d'hôte est
   `www.jadephilippe-chiropraxie.fr`, rediriger en **301** vers
   `https://jadephilippe-chiropraxie.fr`, en conservant le chemin.

Cette redirection n'est pas cosmétique : sans elle, les deux adresses servent
le même contenu et Google les indexe comme deux sites distincts, ce qui divise
le référencement du cabinet.

Si un enregistrement `A` pointant vers `213.186.33.5` subsiste dans la zone
DNS, c'est la page de parking OVH : le supprimer, Cloudflare Pages crée
lui-même le bon enregistrement.

## Vérifier la production après publication

1. Ouvrir le site en **navigation privée**, sinon le cache du navigateur peut
   afficher l'ancienne version.
2. Parcourir chaque page depuis le menu.
3. Recharger la page (`Cmd+R`) **en étant sur une page interne** comme
   `/contact` : une erreur 404 signifierait que `public/_redirects` n'est pas
   pris en compte.
4. Vérifier que `www.jadephilippe-chiropraxie.fr` redirige bien vers l'adresse
   sans `www`.
5. Contrôler les coordonnées : adresse, email, horaires.
6. Cliquer « Prendre rendez-vous » et confirmer l'arrivée sur Doctolib.
7. Refaire le tour sur un téléphone, pas seulement sur ordinateur.
8. Contrôler les données structurées avec le
   [test des résultats enrichis](https://search.google.com/test/rich-results).

## Revenir à la version précédente

### Méthode 1 — depuis Cloudflare (immédiat, à privilégier en urgence)

**Deployments**, choisir le déploiement précédent qui fonctionnait, puis
**Rollback to this deployment**. Le site public revient en arrière en quelques
secondes, sans toucher au code.

C'est un retour en arrière **du site**, pas du code : le dépôt contient
toujours la version fautive, à corriger ensuite avec la méthode 2.

### Méthode 2 — depuis Git (corrige la source)

```bash
git log --oneline          # repérer le commit fautif
git revert <identifiant>   # créer un commit qui annule le précédent
CI=true npm run build      # vérifier que ça compile
git push                   # redéploie automatiquement
```

Ne jamais utiliser `git push --force` pour revenir en arrière.

## L'ancien hébergement GitHub Pages

Le dossier `docs/` de la branche `main` est encore publié par GitHub Pages à
l'adresse https://eddyphilippe.github.io/cabinet-jade/. Il sert un build du
**22 mars 2025**, qui affiche l'email et le téléphone personnels du
développeur et ne contient pas le bouton Doctolib.

**À neutraliser dès que Cloudflare Pages sert le site**, pour éviter que Google
n'indexe deux sites concurrents :

1. Sur GitHub : **Settings → Pages → Source → None**.
2. Déplacer l'ancien build hors de `docs/` avec `git mv` (par exemple vers
   `archives/`), afin d'en conserver l'historique.
3. Retirer le script `deploy` et la dépendance `gh-pages` de `package.json`.

Ces trois étapes touchent à l'hébergement : **à valider avant exécution**.

> `npm run deploy` (`gh-pages -d build`) appartient à cet ancien montage. Ne
> pas l'utiliser : il republierait le site à une seconde adresse.
