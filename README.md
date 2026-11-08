# Jonathan Secher — Site web & IA

Dépôt public du site professionnel de Jonathan Secher.

**État :** première intégration statique réalisée sur la branche `feat/portfolio-mvp`. Le canal de contact par email est confirmé et intégré. Le site reste une version de travail non publiable tant que les mentions légales, informations de confidentialité et validations de contenu ne sont pas finalisées.

**Technologies :** HTML5, CSS3 et JavaScript natif uniquement si nécessaire (aucun JavaScript requis actuellement).

**Hébergement cible :** GitHub Pages. Configuration et publication non vérifiées.

## Objectif

Présenter clairement les services de création de sites web et les usages concrets de l'intelligence artificielle pour les indépendants, artisans et petites entreprises, avec un discours accessible, crédible et sans promesse non vérifiée.

## Pages

- `index.html` : accueil et présentation.
- `creation-sites-web/index.html` : création de sites web.
- `ia-utile/index.html` : usages de l'IA adaptés aux métiers.
- `contact/index.html` : contact et demande de projet (adresse email confirmée, lien `mailto:`).
- `mentions-legales/index.html` : trame non finalisée.
- `confidentialite/index.html` : trame non finalisée.

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

Aucune dépendance npm ni étape de compilation n'est nécessaire.

## Gouvernance et publication

Les décisions non confirmées sont identifiées comme hypothèses ou points à compléter. Aucun témoignage, client, résultat, certification ou gain chiffré ne doit être inventé. Aucun secret, identifiant privé ou donnée personnelle de prospect/client ne doit être ajouté à ce dépôt public.

Le dépôt stratégique interne conserve les informations commerciales et les décisions confidentielles. Ce dépôt contient uniquement les éléments nécessaires au site public et à sa maintenance.

La publication reste bloquée jusqu'à validation des informations légales, de la confidentialité, du rendu final et des tests. Aucun push ni déploiement n'est effectué sans autorisation explicite.
