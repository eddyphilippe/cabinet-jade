# Sauvegarde et restauration

Tout le projet est sauvegardé dans un seul endroit : le dépôt GitHub. Tant que
le code y est poussé, rien ne peut être définitivement perdu.

**Dépôt :** https://github.com/eddyphilippe/cabinet-jade

## Vérifier que la sauvegarde est à jour

```bash
git status
```

- `nothing to commit, working tree clean` + `Your branch is up to date with 'origin/main'`
  → tout est sauvegardé.
- des fichiers listés en rouge → des modifications ne sont pas encore
  enregistrées, voir `MAINTENANCE.md`.
- `Your branch is ahead of 'origin/main' by N commits` → des commits ne sont pas
  encore envoyés sur GitHub, il faut faire `git push`.

## Récupérer le projet sur un autre ordinateur

```bash
git clone https://github.com/eddyphilippe/cabinet-jade.git
cd cabinet-jade
npm install
```

Voir `INSTALLATION.md` pour les prérequis.

## Points de reprise

Un **tag** est une étiquette posée sur un état précis du projet, pour pouvoir y
revenir facilement des années plus tard.

```bash
git tag                                     # lister les points de reprise
git tag -a mon-point-de-reprise -m "avant refonte de la page Contact"
git push origin --tags                      # les envoyer sur GitHub
```

Tag existant : `etat-initial-avant-reorganisation` — état du dépôt avant les
travaux de documentation et de réorganisation de septembre 2026.

## Restauration après une erreur

### Annuler des modifications non encore enregistrées

```bash
git diff                        # voir ce qui a changé
git restore src/pages/Home.tsx  # annuler un seul fichier
git restore .                   # annuler tout (attention, sans retour possible)
```

### Annuler le dernier commit en gardant les modifications

```bash
git reset --soft HEAD~1
```

Le commit disparaît, les modifications restent dans les fichiers. Utile quand on
s'est trompé de message ou qu'on a oublié un fichier.

### Annuler un commit déjà envoyé sur GitHub

```bash
git revert <identifiant-du-commit>
git push
```

`revert` crée un **nouveau** commit qui défait l'ancien. C'est la méthode sûre :
l'historique est conservé et il n'y a jamais besoin de `git push --force`.

## Consulter et récupérer une ancienne version

```bash
git log --oneline              # liste des commits, du plus récent au plus ancien
git log --oneline -- src/pages/Contact.tsx   # historique d'un seul fichier
git show <identifiant>         # voir tout ce qu'un commit a changé
```

### Récupérer un seul fichier tel qu'il était avant

```bash
git checkout <identifiant> -- src/pages/Contact.tsx
```

Le fichier revient à son ancienne version, le reste du site n'est pas touché.

### Visiter tout le site tel qu'il était

```bash
git checkout <identifiant>     # on regarde l'ancienne version
git switch main                # on revient au présent
```

Entre les deux, Git affiche « detached HEAD » : c'est normal, cela signifie
simplement qu'on est en lecture dans le passé. Ne rien modifier pendant ce
temps ; faire `git switch main` avant de reprendre le travail.

## Filet de sécurité : revenir en arrière sans rien perdre

Avant toute manipulation risquée, créer une branche de secours. Elle garde une
copie complète de l'état actuel :

```bash
git switch -c secours-avant-essai
git switch main
```

Si l'essai tourne mal, l'état d'origine est intact dans `secours-avant-essai`.

## Ce qui n'est PAS sauvegardé par Git

- `node_modules/` — reconstruit par `npm install`
- `build/` — reconstruit par `npm run build`
- les fichiers `.env.local` — ce projet n'en utilise aucun

Aucune donnée de patient ne circule dans ce dépôt : le site est une vitrine, les
rendez-vous passent par Doctolib.
