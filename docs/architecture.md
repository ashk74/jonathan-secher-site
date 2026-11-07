# Architecture technique

## Décision de départ
Site statique sans backend : HTML5, CSS3 et JavaScript natif.

## Hébergement
GitHub Pages, avec publication depuis une branche ou un workflow GitHub Actions après configuration et vérification.

## Principes
- Pas de Symfony, PHP, base de données ou serveur applicatif pour ce site.
- Pas de framework frontend dans le MVP.
- Pas de secrets dans le dépôt ou dans le JavaScript livré au navigateur.
- Dépendances externes limitées et justifiées.
- Liens et chemins compatibles avec le chemin de publication GitHub Pages.
- Toute fonctionnalité nécessitant un traitement serveur sera confiée à un service externe évalué, ou différée.

## Structure
- `index.html` : point d'entrée du site (à créer).
- `css/` : tokens et styles.
- `js/` : interactions progressives.
- `assets/` : ressources optimisées.
- `brand/` : règles et sources de l'identité.
- `docs/` : documentation de conception, qualité et exploitation.

## Évolution
Un générateur statique pourra être évalué si le volume de pages ou les besoins de composants le justifient. Aucun framework ne sera ajouté sans besoin concret.
