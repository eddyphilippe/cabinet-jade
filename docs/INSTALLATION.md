# Installation du projet

Comment installer le site du cabinet de Jade Philippe sur un ordinateur neuf.

## Prérequis

| Outil | Version utilisée | Vérifier avec |
|---|---|---|
| Node.js | 22.23.3 (LTS) | `node -v` |
| npm | 10.9.9 | `npm -v` |
| Git | fourni avec macOS | `git --version` |

Le projet utilise `react-scripts` 5.0.1, qui n'est plus maintenu. Il fonctionne
avec Node 22 mais peut échouer sur des versions de Node beaucoup plus récentes.
**Installer Node 22, pas la dernière version disponible.**

### Installer Node 22 sur macOS

Avec [Homebrew](https://brew.sh) :

```bash
brew install node@22
```

Cette formule est *keg-only* : Homebrew ne la met pas automatiquement dans le
PATH. Il faut l'ajouter une fois pour toutes :

```bash
echo 'export PATH="/opt/homebrew/opt/node@22/bin:$PATH"' >> ~/.zprofile
```

Puis ouvrir un nouveau terminal et vérifier :

```bash
node -v   # doit afficher v22.x
npm -v
```

> Si `node: command not found` revient dans un terminal, c'est presque toujours
> cette ligne de PATH qui manque.

## Récupérer le projet

```bash
cd ~/Desktop
mkdir -p "Cabinet Jade site web"
cd "Cabinet Jade site web"
git clone https://github.com/eddyphilippe/cabinet-jade.git
cd cabinet-jade
```

## Installer les dépendances

```bash
npm install
```

Environ 1400 paquets, une dizaine de secondes. `npm install` signale une
soixantaine de vulnérabilités : elles proviennent des dépendances internes de
`react-scripts`. **Ne pas lancer `npm audit fix --force`** : cela casserait la
chaîne de build sans bénéfice réel, le site étant un site vitrine statique sans
formulaire ni base de données.

## Lancer le site en local

```bash
npm start
```

Le site s'ouvre sur [http://localhost:3000](http://localhost:3000) et se
recharge automatiquement à chaque fichier enregistré. `Ctrl+C` pour arrêter.

## Construire la version de production

```bash
npm run build
```

Génère le dossier `build/` (non versionné). Le build actuel produit un
avertissement ESLint sans gravité (`'Divider' is defined but never used` dans
`src/pages/SoinsProposés.tsx`). Un avertissement n'empêche pas le déploiement,
une **erreur** oui.

## Commandes disponibles

Ces quatre commandes sont celles réellement déclarées dans `package.json` :

| Commande | Effet |
|---|---|
| `npm start` | serveur de développement sur le port 3000 |
| `npm run build` | build de production dans `build/` |
| `npm test` | lance les tests (un seul test de démonstration existe) |
| `npm run deploy` | publie `build/` sur la branche `gh-pages` — **obsolète**, voir `DEPLOIEMENT.md` |

`npm run eject` existe aussi : **ne jamais l'exécuter**, l'opération est
irréversible.
