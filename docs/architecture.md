# Architecture technique

## Décision

Site statique sans backend : HTML5, CSS3 et JavaScript natif si nécessaire.

## Hébergement

GitHub Pages est la cible. Sa configuration et sa publication ne sont pas encore vérifiées.

## Structure implémentée

- `index.html` : accueil et présentation.
- `creation-sites-web/index.html` : page de création de sites.
- `ia-utile/index.html` : page des usages IA.
- `contact/index.html` : page contact.
- `mentions-legales/index.html` : trame légale non finalisée.
- `confidentialite/index.html` : trame confidentialité non finalisée.
- `css/tokens.css` : variables de marque.
- `css/site.css` : styles globaux et responsive.
- `assets/icons/favicon.svg` : favicon initial.
- `brand/` : références de marque.
- `docs/` : documentation du projet.

## Principes

- Pas de Symfony, PHP, base de données ou serveur applicatif.
- Pas de framework frontend dans le MVP.
- Pas de secrets dans le dépôt ou dans le JavaScript livré au navigateur.
- Dépendances externes limitées et justifiées.
- Liens et chemins compatibles avec GitHub Pages.
- Aucun formulaire simulé sans service de transmission réel.
- Toute fonctionnalité nécessitant un traitement serveur sera confiée à un service externe évalué, ou différée.

## Typographie

Manrope pour les titres et Inter pour les textes. Le chargement actuel utilise Google Fonts à distance ; cette dépendance doit être prise en compte dans la validation de confidentialité ou remplacée par un hébergement local des polices après vérification des licences.

## Évolution

Un générateur statique pourra être évalué si le volume de pages ou les besoins de composants le justifient. Aucun framework ne sera ajouté sans besoin concret.
