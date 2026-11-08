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
- Revue visuelle des captures desktop et mobile réalisée. Aucun audit automatisé axe/WCAG n'est installé ; ces contrôles ne constituent pas une certification de conformité.
- Coordonnées professionnelles non confirmées ; la page contact contient un bloc de validation.
- Mentions légales et confidentialité incomplètes ; pages explicitement marquées comme versions de travail.
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

1. Confirmer l'adresse email ou le canal de contact public.
2. Compléter les informations de l'éditeur et de l'hébergeur.
3. Vérifier et finaliser la politique de confidentialité, notamment les polices Google Fonts chargées à distance.
4. Effectuer une revue visuelle et des contrôles d'accessibilité plus complets.
5. Vérifier GitHub Pages et l'URL publique après autorisation.
