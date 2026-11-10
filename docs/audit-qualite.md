# Outils et procédure d'audit — Portfolio

## Outils installés

Dépendances de développement uniquement (aucune dépendance d'exécution ajoutée au site statique) :

- html-validate : validation statique des six documents HTML.
- Playwright : automatisation du navigateur Brave installé sur la machine.
- @axe-core/playwright : contrôles automatisés d'accessibilité axe-core.
- Lighthouse : audits de performance, accessibilité, bonnes pratiques et SEO.

Version Node utilisée pour les validations initiales : 24.22.1. Le dépôt conserve package.json et package-lock.json pour reproduire l'installation.

## Commandes

Depuis la racine du dépôt :

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

L'audit axe teste les six pages à 390 × 844 et 1440 × 1000. Lighthouse utilise Brave en mode headless et simule son profil mobile par défaut. Les rapports JSON sont écrits dans /tmp et ne sont pas versionnés.

## Résultats vérifiés le 8 novembre 2026 — révision Palette V2

- Palette V2 terre cuite/pierre/ivoire intégrée aux six pages, aux illustrations SVG et au favicon.
- Hiérarchie typographique réduite : H1 desktop 52 px maximum, H2 36 px maximum ; mobile 32 px et environ 26 px à 390 px.
- html-validate : six pages valides.
- axe-core : 12 combinaisons page/viewport (390 × 844 et 1440 × 1000) ; zéro violation après correction des contrastes.
- Débordement horizontal : aucun sur les 12 combinaisons.
- `git diff --check` : aucune erreur après nettoyage documentaire.

## Résultats vérifiés le 8 novembre 2026 — révision précédente

- html-validate : six pages valides après la refonte visuelle.
- axe-core : 12 combinaisons page/viewport exécutées après la refonte ; zéro violation sur les six pages.
- Débordement horizontal : aucun sur les 12 combinaisons.
- Ressources visuelles : toutes les images et illustrations intégrées chargent correctement sur les pages qui les utilisent ; aucune erreur JavaScript détectée.
- Lighthouse (profil mobile simulé, six pages) : accueil 98/100/100/100 ; création de sites 98/100/100/100 ; IA utile 98/100/100/100 ; contact 97/100/100/100 ; mentions légales 91/100/100/60 ; confidentialité 90/100/100/60 (performance/accessibilité/bonnes pratiques/SEO).
- Les scores SEO à 60 sur les deux pages légales proviennent de leur directive `noindex`, conservée volontairement tant que les informations ne sont pas finalisées. Ils ne signalent pas une anomalie à corriger avant validation juridique.
- Les photographies proviennent de pages Unsplash identifiées et sont documentées dans `assets/images/credits.md`. Elles illustrent des métiers et environnements génériques, pas des clients ou des locaux personnels.
- Les animations d'apparition respectent `prefers-reduced-motion`.
- Les audits performance restent indicatifs et peuvent varier selon le réseau et la machine. L'auto-hébergement des polices reste une piste à évaluer avec les licences.

Les scores Lighthouse locaux sont indicatifs : ils dépendent de la machine, du réseau, du navigateur et de l'environnement de test. Ils ne préjugent pas des résultats sur l'hébergement public.

## Limites

- axe-core et Lighthouse ne remplacent pas les tests manuels au clavier, avec lecteur d'écran, zoom, préférences utilisateur et contenus réels.
- L'audit Lighthouse doit être rejoué après les modifications de contenu et sur l'URL publique, après autorisation de publication.
- Les pages légales restent des trames non publiables tant que les informations réelles ne sont pas complétées.

## Résultats vérifiés le 9 novembre 2026 — variantes WebP

- `npm run audit:html` : six pages valides.
- `npm run audit:a11y` : 12 combinaisons page/viewport (390 × 844 et 1440 × 1000), toutes HTTP 200, aucun débordement horizontal et zéro violation axe-core.
- `npm run audit:lighthouse` : six pages auditées en profil mobile simulé après génération des variantes WebP.

| Page | Performance | Accessibilité | Bonnes pratiques | SEO |
|---|---:|---:|---:|---:|
| Accueil | 98 | 100 | 100 | 100 |
| Création de sites | 90 | 100 | 100 | 100 |
| IA utile | 89 | 100 | 100 | 100 |
| Contact | 96 | 100 | 100 | 100 |
| Mentions légales | 90 | 100 | 100 | 60 |
| Confidentialité | 96 | 100 | 100 | 60 |

- `npm audit --omit=dev` : aucune vulnérabilité signalée dans les dépendances de production.
- Trois photographies ont reçu une variante WebP de mêmes dimensions, qualité 82, en conservant les originaux JPEG et les crédits : espace de travail −68 %, artisanat du bois −46 %, céramique −44 % en taille de fichier.
- Les deux scores SEO à 60 restent attendus : les pages légales conservent volontairement `noindex` tant qu'elles ne sont pas validées.
- Les scores Lighthouse restent indicatifs ; rejouer sur l'hébergement réellement retenu avant publication.
