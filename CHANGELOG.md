# Journal des modifications

Les changements notables sont consignés ici, du plus récent au plus ancien.

## [0.4.1] - 2026-11-08

### Modifié
- Trame des mentions légales adaptée au statut d'entreprise individuelle (EI) confirmé par le porteur.
- Distinction explicite entre identité civile de l'éditeur et nom de marque.
- Terminologie corrigée : adresse de domiciliation pour une EI, et non siège social.
- Préparation juridique enrichie avec les exigences d'identification, de contact, de TVA éventuelle, de directeur de publication et d'hébergeur.

### Limites
- Informations civiles et administratives non fournies ; page maintenue en noindex et non publiable.
- Aucune donnée personnelle privée ajoutée au dépôt.
- Aucun push ni déploiement.

## [0.4.0] - 2026-11-08

### Ajouté
- Outils de validation de développement : html-validate, Playwright, axe-core et Lighthouse.
- Scripts reproductibles d'audit HTML, accessibilité et Lighthouse sur les six pages.
- Documentation des procédures d'audit et de la préparation juridique.

### Corrigé
- Contrastes insuffisants et nom accessible du lien de marque détectés par axe-core.
- Sémantique HTML et attributs ARIA détectés par html-validate.
- Informations de contact et d'hébergement dans les pages de travail juridique actualisées sans inventer les données manquantes.

### Validation
- Six pages valides avec html-validate.
- Douze combinaisons axe-core (six pages, deux formats) sans violation.
- Lighthouse exécuté sur les six pages ; scores consignés dans docs/audit-qualite.md.
- npm audit : aucune vulnérabilité signalée.

### Limites restantes
- Informations légales de l'éditeur et de l'hébergeur à confirmer.
- Confidentialité à finaliser, notamment les polices Google Fonts et les traitements liés aux emails.
- Tests manuels d'accessibilité à poursuivre.
- Aucun push ni déploiement.

## [0.3.1] - 2026-11-08

### Modifié
- Canal de contact public confirmé et intégré à la page Contact via un lien `mailto:`.
- Documentation du projet mise à jour pour retirer ce point de blocage.

### Limites restantes
- Mentions légales et confidentialité à compléter.
- Chargement des polices via Google Fonts à valider au regard de la confidentialité ou à remplacer par des fichiers locaux.
- Tests d'accessibilité approfondis et audits SEO/performance à poursuivre.
- GitHub Pages non configuré ou vérifié ; aucun déploiement effectué.

## [0.3.0] - 2026-11-08

### Ajouté
- Première intégration des quatre pages principales : accueil, création de sites web, IA utile et contact.
- Pages de travail pour les mentions légales et la confidentialité, non finalisées et non publiables en l'état.
- Feuille de styles globale responsive, avec états de focus visibles et réduction des animations.
- Favicon SVG initial basé sur le monogramme JS.
- Métadonnées SEO de base et métadonnées Open Graph sur les pages principales.
- Documentation de l'état d'implémentation, de l'architecture et des blocages avant publication.

### Modifié
- Réutilisation des tokens de la Brand Board V1.
- Contraste de la couleur accent foncée utilisé pour les textes et le focus, tout en conservant l'orange officiel pour les éléments de marque et les CTA.
- Démonstrations conservées comme concepts fictifs explicitement signalés.

### Limites connues
- Coordonnées publiques à confirmer ; aucun formulaire opérationnel.
- Mentions légales et confidentialité à compléter.
- Chargement des polices via Google Fonts à valider au regard de la confidentialité ou à remplacer par des fichiers locaux.
- Tests d'accessibilité approfondis et revue visuelle à poursuivre.
- GitHub Pages non configuré ou vérifié ; aucun déploiement effectué.

## [0.2.0] - 2026-11-07

### Ajouté
- Brand Board V1 documentée à partir de la proposition 2 sélectionnée.
- Palette de travail, typographies, règles photo et composants de base formalisés.
- Premiers tokens CSS de la direction graphique.

### À finaliser
- Logo vectoriel et déclinaisons vérifiées.
- Vérification des contrastes et des états d'interface.
- Portrait et photographies authentiques du poste de travail.
- Maquette réelle responsive et intégration au site.

## [0.1.0] - 2026-11-07

### Ajouté
- Création du dépôt public et de son socle documentaire.
- Définition de l'architecture cible statique HTML/CSS/JavaScript.
- Mise en place de l'arborescence pour la marque, les ressources, le code et la documentation.

### Non réalisé
- Pages fonctionnelles du site.
- Tests, workflow de déploiement et publication GitHub Pages.
