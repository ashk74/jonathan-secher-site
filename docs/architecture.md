# Architecture technique

## Décision

Site statique sans backend : HTML5, CSS3 et JavaScript natif. Les pages HTML générées restent directement publiables sur un hébergement statique (GitHub Pages visé, non encore vérifié).

## Pages

- `index.html` : accueil.
- `creation-sites-web/index.html` : Sites web.
- `ia-utile/index.html` : IA utile.
- `tarifs/index.html` : repères tarifaires, page de travail non publiable tant que les conditions commerciales ne sont pas confirmées.
- `contact/index.html` : contact.
- `mentions-legales/index.html` : trame légale non finalisée.
- `confidentialite/index.html` : trame confidentialité non finalisée.

## Sources communes

- `components/site-navigation.json` : source unique des libellés, chemins, ordre des liens, identité de marque et notes de footer.
- `scripts/sync-site-shell.mjs` : génère les headers et footers de toutes les pages à partir de cette configuration.
- `css/tokens.css` : source unique des variables de design (couleurs, typographies, rayons, largeur et ombres).
- `css/site.css` : composants et règles de présentation globales/responsive.
- `brand/` : références de marque.
- `assets/` : médias et icônes.
- `docs/` : documentation du projet.

Ne pas modifier manuellement les headers/footers générés dans les pages. Modifier `components/site-navigation.json`, puis exécuter `npm run build`. Les contenus et sections propres à chaque page restent dans leur fichier HTML : ne pas créer une abstraction pour un bloc qui n'est utilisé qu'une seule fois ou dont la structure diffère réellement.

## Principes

- Pas de Symfony, PHP, base de données ou serveur applicatif pour ce site.
- Pas de framework frontend dans le MVP.
- Pas de secrets dans le dépôt ou dans le JavaScript livré au navigateur.
- Dépendances externes limitées et justifiées.
- Liens et chemins compatibles avec GitHub Pages.
- Aucun formulaire simulé sans service de transmission réel.
- Toute fonctionnalité nécessitant un traitement serveur sera confiée à un service externe évalué, ou différée.

## Typographie

Manrope pour les titres et Inter pour les textes. Le chargement actuel utilise Google Fonts à distance ; cette dépendance doit être prise en compte dans la validation de confidentialité ou remplacée par un hébergement local des polices après vérification des licences.

## Évolution

Rester sur la génération statique légère tant qu'elle répond au besoin. Évaluer un générateur statique complet uniquement si les pages, les collections de contenu ou les besoins de composants deviennent nettement plus nombreux.
