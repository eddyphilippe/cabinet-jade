# Référencement local

Objectif : permettre à une personne qui cherche un chiropracteur autour de
Creully-sur-Seulles de trouver le cabinet de Jade Philippe. Rien d'autre.

Aucune technique visant à manipuler le classement n'est employée ici : pas de
bourrage de mots-clés, pas de pages locales dupliquées en série, pas de faux
avis. Google indique que le classement local dépend de la **pertinence**, de la
**distance** et de la **notoriété** : les deux premières se travaillent sur le
site, la troisième se gagne hors du site.

## Audit technique — relevé du 27 septembre 2026

Les cases cochées ont été traitées le jour même. Celles qui restent ouvertes
sont le programme de travail.

### Base HTML

- [x] `public/index.html` déclarait `lang="en"` → corrigé en `fr`
- [x] Titre « React App » → titre réel, et un titre propre à chaque page
- [x] Description « Web site created using create-react-app » → description réelle
- [x] `manifest.json` « Create React App Sample » → nom du cabinet
- [x] Titres et descriptions par page, via `src/config/seo.ts` et le composant `Seo`
- [x] Balise canonical, mise à jour à chaque changement de page
- [x] Open Graph et Twitter Card, avec une image de partage en 1200×630
- [x] Données structurées JSON-LD de type `Chiropractic`
- [x] `sitemap.xml` limité aux six pages publiques
- [x] `robots.txt` référençant le sitemap

### Contenu local

- [ ] Le H1 de l'accueil est « Centre de Chiropraxie » : **la ville n'y figure pas**
- [ ] « Calvados » et « Normandie » n'apparaissent que dans les métadonnées, pas dans le contenu visible
- [ ] Le lien Doctolib n'apparaît qu'une seule fois (page d'accueil), et **pas sur la page Contact**
- [ ] La page Contact n'a ni carte, ni lien d'itinéraire, ni email cliquable
- [x] Coordonnées centralisées dans `src/config/cabinet.ts`

### Structure et liens

- [x] Une balise H1 par page (fournie par `HeroBanner`)
- [x] URL lisibles (`/about`, `/contact`, `/pricing`…)
- [x] Site indexable, aucun blocage involontaire
- [x] Lien Doctolib fonctionnel (vérifié, HTTP 200)
- [x] Ancres internes réparées : `Section` n'appliquait pas son `id` au DOM,
      aucune ancre ne pouvait donc fonctionner
- [x] Lien du pied de page vers une section inexistante (`#chiropratique-generale`)
- [x] Remise à zéro du défilement au changement de page (`ScrollManager`)

### Images

- [ ] Servies en pleine résolution (1200×1600 et 1500×2000), 250 à 314 Ko, sans WebP ni `srcset`
- [ ] Sur 6 fichiers, seuls 2 sont distincts ; `jade-philippe.jpg`,
      `jade-philippe-new.jpg` et `jade-philippe-current.jpg` sont en réalité des
      copies de la **photo du cabinet**, mal nommées
- [ ] La photo du cabinet, au format portrait, sert de fond de bannière
      panoramique : elle est donc fortement recadrée
- [ ] Texte alternatif de la photo sur la page Le Cabinet : « Dr. Jade Philippe »
      (mention à valider, voir plus bas)

### Limite structurelle

Le site est une application React rendue côté navigateur (Create React App) :
aucune page n'est pré-générée en HTML. Google sait exécuter le JavaScript et
indexera le site, mais c'est un handicap par rapport à un site pré-rendu. Ce
n'est pas bloquant pour un site vitrine de cette taille ; une migration vers un
outil pré-rendu (Vite + pré-rendu, ou Next.js) serait un chantier séparé, à
n'envisager que si l'indexation pose réellement problème.

### Risque de double indexation

Trois adresses pourraient servir le même contenu : l'ancienne page GitHub Pages,
l'adresse technique en `.pages.dev` de Cloudflare, et le domaine officiel. Google
risque de les traiter comme des sites distincts, ce qui dilue le référencement.

L'adresse officielle est **https://jadephilippe-chiropraxie.fr**, sans `www`.
C'est elle que déclarent les balises canonical et le sitemap. Restent à traiter :
la redirection 301 depuis `www`, et la neutralisation de GitHub Pages — voir la
fin de `DEPLOIEMENT.md`.

## Titres et descriptions

Un titre unique par page, lisible par un humain avant tout, la ville présente
sans être répétée mécaniquement. Longueurs habituelles d'affichage : environ
60 caractères pour le titre, 155 pour la description.

| Page | Titre |
|---|---|
| Accueil | Chiropracteur à Creully-sur-Seulles \| Jade Philippe |
| Le Cabinet | Cabinet de chiropraxie à Creully-sur-Seulles \| Jade Philippe |
| Soins proposés | Soins de chiropraxie \| Cabinet Jade Philippe |
| Équipement | Équipement du cabinet \| Jade Philippe, chiropracteur |
| Tarifs | Tarifs des consultations \| Jade Philippe, chiropracteur |
| Contact | Contact et rendez-vous \| Jade Philippe, chiropracteur à Creully |

Les descriptions doivent être informatives et différentes d'une page à l'autre.
**Aucune promesse thérapeutique** : décrire ce qui est proposé, jamais un
résultat garanti.

## Zones géographiques

À centraliser dans `src/config/seo.ts` pour être modifiables sans toucher au code
des pages.

> **À définir avec Jade.** Aucune liste de communes prioritaires n'existe dans le
> dépôt ni dans son historique (vérifié). Elle ne doit pas être inventée : la
> bonne source est Jade elle-même, qui sait d'où viennent ses patients.

Seules deux informations sont établies avec certitude et peuvent être utilisées
dès maintenant : la commune du cabinet, **Creully-sur-Seulles**, ainsi que son
département, le **Calvados**, et sa région, la **Normandie**.

Une commune ne doit être mentionnée que si cela apporte une information utile au
patient (« à quinze minutes de … »), jamais sous forme de liste décorative.

## Données structurées

En place dans `public/index.html`, type `Chiropractic` — le sous-type de
`LocalBusiness` le plus précis pour cette activité.

Champs renseignés : `name`, `url`, `image`, `email`, `address` complète,
`openingHoursSpecification`, et `sameAs` limité au profil Doctolib officiel.

Le champ `telephone` est **absent tant que le numéro n'est pas validé** : un
faux numéro dans des données structurées est bien plus nuisible qu'un champ
manquant. Ne jamais ajouter `aggregateRating` ni `review` : inventer une note ou
un avis est une violation des règles de Google et une tromperie envers les
patients.

`geo` (latitude et longitude) n'est pas renseigné : les coordonnées trouvées
dans l'URL de la carte intégrée désignent le centre de la carte, pas
nécessairement l'entrée du cabinet. À ajouter seulement si un relevé exact est
disponible — une position erronée envoie les patients au mauvais endroit.

> Ce bloc est **statique** : il ne lit pas `src/config/cabinet.ts`. Ce choix
> privilégie une lecture fiable par Google, au prix d'une synchronisation
> manuelle. Toute modification d'adresse, d'email ou d'horaires doit être
> reportée aux deux endroits.

### Vérifier la syntaxe

1. Aller sur le [test des résultats enrichis](https://search.google.com/test/rich-results).
2. Coller l'URL du site, ou le code HTML pour un test avant mise en ligne.
3. Contrôler que le bloc est détecté sans erreur. Les *avertissements* portent
   souvent sur des champs facultatifs (comme `telephone`) : ils sont acceptables.
4. Refaire le test après chaque modification des coordonnées.

## Google Search Console

Outil gratuit de Google qui indique comment le site est vu et trouvé. À faire
une fois le site réellement en ligne sur son domaine.

### Ajouter le site

1. Ouvrir [search.google.com/search-console](https://search.google.com/search-console).
2. « Ajouter une propriété » → **Préfixe d'URL**, en saisissant exactement
   `https://jadephilippe-chiropraxie.fr` — l'adresse officielle, sans `www` et
   sans barre oblique finale.
3. Prouver la propriété du site. Deux méthodes simples : l'enregistrement DNS
   proposé (à ajouter chez le gestionnaire du domaine), ou la balise HTML à
   insérer dans `public/index.html` puis remettre le site en ligne.

### Vérifier l'indexation

Dans la barre de recherche Google, taper `site:ledomaine.fr` : les pages listées
sont celles que Google connaît. Dans la Search Console, le rapport
**Indexation → Pages** donne le détail et la raison des éventuelles exclusions.

### Envoyer le sitemap

Menu **Sitemaps**, saisir `sitemap.xml`, puis Envoyer. L'état doit passer à
« Réussite ». À refaire uniquement si le sitemap change d'adresse.

### Inspecter une URL et demander une réindexation

Coller une adresse dans la barre de recherche en haut de la Search Console pour
savoir si Google l'a indexée et ce qu'il y a vu. Après une modification
importante, cliquer **Demander une indexation**.

Compter quelques jours à quelques semaines. Demander une réindexation plusieurs
fois de suite n'accélère rien.

### Suivre les résultats

Le rapport **Performances** montre les recherches réelles ayant affiché le site
(impressions) et celles ayant amené un visiteur (clics). C'est la source la plus
fiable pour savoir quels mots employer sur le site : si des patients cherchent
« chiropracteur Creully » ou « mal de dos Bayeux », cela se lit ici.

Surveiller aussi **Indexation → Pages** une fois par trimestre pour détecter les
erreurs, et **Expérience → Ergonomie mobile** après toute modification visuelle.

## Fiche Google Business Profile

La fiche d'établissement Google pèse souvent plus lourd que le site lui-même pour
les recherches locales. **Les informations doivent être identiques entre le site
et la fiche** : toute divergence d'adresse, d'horaires ou de numéro nuit à la
crédibilité de l'établissement aux yeux de Google.

Liste de contrôle :

- [ ] Nom : Jade Philippe (nom exact, sans mots-clés ajoutés)
- [ ] Catégorie principale : exactement l'activité exercée, chiropracteur
- [ ] Adresse : 63 Rue de Caen, 14480 Creully-sur-Seulles
- [ ] Emplacement du repère vérifié sur la carte
- [ ] Téléphone : **uniquement après validation du numéro**
- [ ] Site internet : le domaine définitif
- [ ] Horaires d'ouverture, tenus à jour (congés inclus)
- [ ] Lien de prise de rendez-vous vers Doctolib
- [ ] Description : ce qui est proposé, sans promesse de résultat
- [ ] Photos réelles du cabinet et portrait de Jade
- [ ] Avis de patients authentiques

Sur les avis : il est permis d'inviter un patient satisfait à laisser un avis
spontané. Il est interdit d'en rédiger, d'en acheter, d'en échanger ou d'en
filtrer. Répondre aux avis, y compris négatifs, de manière brève et courtoise, en
veillant à ne jamais révéler d'information de santé.

Aucun classement Google ne peut être garanti, par quiconque.
