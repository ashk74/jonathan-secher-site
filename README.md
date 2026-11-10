# Jonathan Secher — Site web & IA

Dépôt public du site professionnel de Jonathan Secher.

**État :** première intégration statique réalisée sur la branche `feat/portfolio-mvp`. Le canal de contact par email est confirmé et intégré. Le site reste une version de travail non publiable tant que les mentions légales, informations de confidentialité et validations de contenu ne sont pas finalisées.

**Technologies :** HTML5, CSS3 et JavaScript natif uniquement si nécessaire (aucun JavaScript requis actuellement).

**Hébergement cible :** GitHub Pages. Configuration et publication non vérifiées.

## Synchronisation des éléments communs

La configuration commune du header et du footer est maintenue dans `components/site-navigation.json`. Elle définit les libellés, l'ordre, les chemins, l'identité de marque et les notes de pied de page. Le script `scripts/sync-site-shell.mjs` génère ces deux blocs dans les sept pages, en conservant le lien actif dans le header et en excluant la page courante du footer.

Les variables de design sont centralisées dans `css/tokens.css`. Les règles de composants et de mise en page sont dans `css/site.css`. Ne pas dupliquer les variables dans les feuilles de style des pages.

Après une modification des composants communs, exécuter `npm run build`. Ne pas modifier manuellement les headers ou footers générés dans les pages.

## Objectif

Présenter clairement les services de création de sites web et les usages concrets de l'intelligence artificielle pour les indépendants, artisans et petites entreprises, avec un discours accessible, crédible et sans promesse non vérifiée.

## Pages

- `index.html` : accueil et présentation.
- `creation-sites-web/index.html` : création de sites web.
- `ia-utile/index.html` : usages de l'IA adaptés aux métiers.
- `contact/index.html` : contact et demande de projet (adresse email confirmée, lien `mailto:`).
- `mentions-legales/index.html` : trame non finalisée.
- `confidentialite/index.html` : trame non finalisée.
- `docs/demo-projects-roadmap.md` : feuille de route des trois démonstrations fictives avant le projet réel de l'institut de beauté à Cluses.

## Structure technique

- `css/tokens.css` : tokens issus de la Brand Board V1.
- `css/site.css` : styles du site.
- `assets/icons/favicon.svg` : favicon initial.
- `brand/` : identité, charte graphique et références.
- `docs/` : architecture, contenu, qualité et exploitation.
- `.github/workflows/` : emplacement réservé aux workflows éventuels.

## Prévisualisation locale

Depuis la racine du dépôt :

```bash
python3 -m http.server 8000
```

Ouvrir ensuite `http://localhost:8000/`.

Aucune dépendance npm d'exécution ni étape de compilation n'est nécessaire pour le site. Les outils de contrôle qualité sont des dépendances de développement séparées.

## Outils de validation

Prérequis : Node.js 22.12 ou supérieur et Brave Browser installé sur la machine d'audit.

```bash
npm ci
npm run audit:html
python3 -m http.server 8765
```

Dans un second terminal :

```bash
npm run audit:a11y
npm run audit:lighthouse
```

Les scripts vérifient les six pages ; les rapports Lighthouse sont conservés temporairement dans `/tmp`. Détails et limites : `docs/audit-qualite.md`.

## Gouvernance et publication

Les décisions non confirmées sont identifiées comme hypothèses ou points à compléter. Aucun témoignage, client, résultat, certification ou gain chiffré ne doit être inventé. Aucun secret, identifiant privé ou donnée personnelle de prospect/client ne doit être ajouté à ce dépôt public.

Le dépôt stratégique interne conserve les informations commerciales et les décisions confidentielles. Ce dépôt contient uniquement les éléments nécessaires au site public et à sa maintenance.

La publication reste bloquée jusqu'à validation des informations légales, de la confidentialité, du rendu final et des tests. Aucun push ni déploiement n'est effectué sans autorisation explicite.

## État qualité — 9 novembre 2026

Les six pages passent la validation HTML ; les 12 combinaisons axe-core mobile/desktop ne présentent aucune violation ni débordement. Lighthouse mobile simulé après optimisation WebP : performance 89–98, accessibilité et bonnes pratiques 100 sur les six pages. Les pages légales restent en noindex et non publiables tant que les informations et traitements réels ne sont pas validés. Voir `docs/audit-qualite.md`.
