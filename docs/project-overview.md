# Vue d'ensemble du projet

## Objectif

Créer un site professionnel statique pour présenter l'activité de Jonathan Secher autour de la création de sites web, de l'accompagnement numérique et des usages utiles de l'IA.

## Périmètre MVP

- Accueil et présentation.
- Création de sites web.
- « L'IA utile à votre métier ».
- Contact / demande de projet.
- Mentions légales et informations de confidentialité adaptées aux services réellement utilisés.

## Hors périmètre initial

- Blog / actualités.
- Espace client, authentification et paiement.
- CRM ou base de données intégrée.
- Backend propriétaire.
- Animations complexes sans bénéfice démontré.

## État de réalisation au 8 novembre 2026

- Première intégration HTML/CSS réalisée sur la branche `feat/portfolio-mvp`.
- Les quatre pages principales et deux pages légales de travail existent.
- Tokens de marque réutilisés depuis `css/tokens.css`.
- Favicon SVG initial ajouté.
- Contrôles statiques des pages et liens internes réalisés.
- Tests navigateur réussis sur les six pages à 390, 768 et 1440 px (18 combinaisons) : réponses HTTP 200, un seul H1, titre et description présents, polices CSS appliquées, aucune barre de défilement horizontale, aucune erreur JavaScript ni ressource en échec.
- Contrôle clavier : le lien d'évitement « Aller au contenu » reçoit le premier focus et devient visible.
- Contrôle `prefers-reduced-motion` : défilement fluide désactivé et transitions fortement réduites.
- Contrastes calculés : texte anthracite/ivoire 14,15:1 ; anthracite/orange 5,24:1 ; orange foncé texte/ivoire 4,99:1 ; texte secondaire/ivoire 5,92:1.
- Revue visuelle des captures desktop et mobile réalisée.
- `html-validate` installé ; les six pages passent la validation HTML.
- `Playwright` et `axe-core` installés ; 12 combinaisons des six pages à 390 et 1440 px testées : zéro violation axe après corrections, aucun débordement horizontal.
- Lighthouse installé ; premier audit local de l'accueil : performance 98, accessibilité 100, bonnes pratiques 100, SEO 100. Audit des six pages en cours de finalisation ; les scores locaux restent indicatifs.
- `npm audit` : aucune vulnérabilité signalée lors du contrôle initial des dépendances de développement.
- Canal de contact par email confirmé : `jonathansecher.digital@gmail.com`, intégré à la page contact avec lien `mailto:`.
- Situation administrative actuelle : aucune nouvelle activité immatriculée à ce jour. L'ancienne entreprise individuelle est cessée depuis le 27/08/2024 ; les détails administratifs sont conservés hors de ce dépôt public.
- Page des mentions légales adaptée à une EI : nom/prénom civils, adresse de domiciliation, téléphone, identifiant administratif, TVA éventuelle, directeur de publication et hébergeur restent à compléter et vérifier. La page reste en noindex et non publiable.
- Préparation juridique documentée dans docs/legal-validation.md à partir des références Service Public vérifiées le 8 novembre 2026.
- Politique de confidentialité incomplète ; chargement des polices via Google Fonts et modalités de traitement des emails à finaliser.
- GitHub Pages non configuré ou vérifié ; aucune publication effectuée.

## Critères d'acceptation

- Message et offre compréhensibles rapidement.
- Navigation et contact utilisables sur mobile et desktop.
- Contenu exact, sans allégation non démontrée.
- Responsive, accessible, performant et indexable.
- Liens, métadonnées et ressources vérifiés.
- Mentions légales et confidentialité complétées et adaptées.
- Publication reproductible et documentée.

## Blocages avant publication

1. Compléter et vérifier les informations légales applicables à l'éditeur ; ne pas publier d'adresse personnelle privée.
2. Confirmer l'hébergement réellement retenu et renseigner les coordonnées légales du fournisseur.
3. Finaliser la politique de confidentialité, notamment le chargement Google Fonts et les modalités de traitement des emails.
4. Terminer les audits Lighthouse des six pages et effectuer les contrôles manuels d'accessibilité.
5. Vérifier la configuration GitHub Pages et l'URL publique uniquement après autorisation explicite.

## Mise à jour qualité — 9 novembre 2026

- Les six pages passent `html-validate`.
- Les 12 contrôles axe-core (six pages en 390 px et 1440 px) ne signalent aucune violation ni débordement horizontal.
- Lighthouse mobile simulé après optimisation WebP : performance 89 à 98, accessibilité 100, bonnes pratiques 100 sur les six pages ; SEO 100 sur les quatre pages principales et 60 sur les pages légales conservées en `noindex`.
- `npm audit --omit=dev` : zéro vulnérabilité signalée.
- Trois variantes WebP optimisées sont utilisées ; les originaux JPEG sont conservés et les crédits inchangés.
- Ces résultats ne lèvent pas les blocages de publication : mentions légales, confidentialité et hébergement restent à finaliser.
