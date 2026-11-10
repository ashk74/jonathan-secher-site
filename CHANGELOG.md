## [Non publié] — Hero mobile en deux écrans successifs — 2026-11-10

### Modifié
- Sur Accueil, Sites web, IA utile et Tarifs, le premier écran mobile présente uniquement le texte et les actions.
- Le bandeau de repères et la photo/illustration sont regroupés dans un second panneau de hauteur écran, dans l'ordre bandeau puis visuel.
- Les deux panneaux restent dans une seule section HTML ; le défilement est naturel et les éléments du second panneau ne sont plus positionnés indépendamment.
- La composition desktop conserve le texte à gauche, le visuel à droite et le bandeau en dessous.
- Les pages sans visuel conservent le texte au premier écran et le bandeau dans le panneau suivant.

### Validation
- `npm run build` réussi ; sept pages HTML valides.
- `git diff --check` réussi.
- Structure des quatre pages avec visuel vérifiée ; quatre routes HTTP 200.
- Vérification visuelle réelle sur téléphone et desktop restant à effectuer.
- Aucun commit, push ni déploiement.

## [Non publié] — Suppression du décalage du bandeau au scroll mobile — 2026-11-10

### Modifié
- Le bandeau de repères n'est plus positionné en absolu dans la première section mobile.
- Il revient dans le flux normal et utilise `margin-top: auto` pour rester au bas de la section lorsque l'espace disponible le permet.
- Le bandeau et le contenu défilent désormais ensemble, sans ancrage indépendant susceptible de modifier leur écart pendant le scroll.
- Suppression de la réserve inférieure artificielle de 8 rem.

### Validation
- `npm run build` réussi ; sept pages HTML valides.
- `git diff --check` réussi.
- Sept routes HTTP 200.
- Contrôle CSS statique effectué ; validation visuelle mobile à confirmer.
- Aucun commit, push ni déploiement.

## [Non publié] — Correction de la hauteur mobile du premier écran — 2026-11-10

### Modifié
- Suppression de la hauteur minimale mobile trop courte appliquée sous 600 px.
- Harmonisation de la hauteur minimale des sections d'ouverture mobiles autour du header commun.
- Objectif : réserver la hauteur du premier écran au texte, aux actions et au bandeau avant le début de la photo.

### Validation
- `npm run build` réussi ; synchronisation des sept pages et validation HTML.
- `git diff --check` réussi.
- Sept routes HTTP 200 ; CSS corrigé servi par le serveur.
- Validation visuelle sur téléphone encore nécessaire : le navigateur mobile réel et sa hauteur visible ne sont pas simulés ici.
- Aucun commit, push ni déploiement.

## [Non publié] — Ancrage du bandeau de repères sur mobile — 2026-11-10

### Modifié
- Le bandeau de repères est positionné au bas de la première section sur mobile, indépendamment du flux vertical du contenu.
- Réservation d'un espace inférieur pour éviter le chevauchement avec le texte et les boutons.
- Conservation de son positionnement dans la section : il défile avec la page et n'est pas fixé à l'écran.

### Validation
- `npm run build` réussi ; sept pages HTML valides.
- `git diff --check` réussi.
- Sept routes HTTP 200 et CSS servi.
- Vérification visuelle sur téléphone restant à effectuer.
- Aucun commit, push ni déploiement.

## [Non publié] — Premier écran mobile pleine hauteur — 2026-11-10

### Modifié
- Les sections d'ouverture occupent la hauteur visible sous le header sur mobile et tablette.
- Le contenu textuel, les actions et le bandeau de repères sont organisés dans le premier écran.
- Les photos et illustrations des pages Accueil, Sites web, IA utile et Tarifs sont déplacées visuellement sous le premier écran, sans modifier leur ordre HTML ni leur affichage desktop.
- Les sections d'ouverture sans image (Contact, Mentions légales, Confidentialité) conservent le même principe de hauteur.
- Ajustement responsive des titres, textes, boutons et bandeaux sur petits écrans pour limiter les débordements.

### Validation
- `npm run build` réussi ; shell synchronisé et sept pages HTML valides.
- `git diff --check` réussi.
- Sept routes de prévisualisation en HTTP 200.
- Règles CSS contrôlées statiquement ; vérification visuelle navigateur mobile restant à effectuer.
- Aucun commit, push ni déploiement.

## [Non publié] — Ajout d’une photo à la page Tarifs — 2026-11-10

### Modifié
- Passage du premier bloc de la page Tarifs à la grille éditoriale commune des pages internes.
- Ajout de la photographie `artisan-clay.webp`, déjà présente dans les ressources et créditée dans `assets/images/credits.md`.
- Ajout d’un texte alternatif descriptif et d’une légende cohérente avec le contenu de la page.
- Conservation de l’avertissement de travail et du bandeau de repères.

### Validation
- `npm run build` réussi ; sept pages HTML valides.
- `git diff --check` réussi.
- Page Tarifs HTTP 200 et image WebP HTTP 200.
- Aucun commit, push ni déploiement.

# Journal des modifications

Les changements notables sont consignés ici, du plus récent au plus ancien.

## [Non publié] — Harmonisation des visuels et repères des premières sections — 2026-11-10

### Modifié
- Alignement vertical des visuels avec la hauteur exacte du bloc de texte dans les héros desktop.
- Le contenu texte définit la hauteur de la ligne de grille ; les images la remplissent sans imposer leur propre ratio.
- Déplacement de la bande de principes de l'accueil à l'intérieur de sa première section.
- Ajout d'une bande de trois repères adaptée au contenu de chacune des six autres pages.
- Les bandes de repères sont intégrées à la grille du premier écran desktop, sous le contenu principal.

### Validation
- Synchronisation des composants du site exécutée.
- Validation HTML initiale : cinq erreurs d'espaces finaux créés lors de l'insertion ; corrigées sur les sept fichiers.
- Contrôles HTML, structure CSS et diff à relancer après correction.
- Aucun commit, push ni déploiement.

## [Non publié] — Ajustement des premières sections et photo Sites web — 2026-11-10

### Modifié
- Réduction du padding vertical des sections d'ouverture accueil et pages internes.
- Sur desktop, la grille de la page Sites web prend la hauteur de sa colonne de texte ; la photo remplit cette hauteur sans imposer sa propre hauteur.
- Conservation du centrage vertical du premier écran et des règles tablette/mobile.
- Illustration de la page IA utile exclue de la règle photographique.

### Validation
- `npm run build` réussi ; synchronisation du shell et validation des sept pages HTML.
- `git diff --check` réussi.
- Sept routes de prévisualisation en HTTP 200.
- Contrôle visuel navigateur après modification restant à effectuer.
- Aucun commit, push ni déploiement.

## [Non publié] — Centrage vertical des premiers écrans desktop — 2026-11-10

### Modifié
- Les sections d'ouverture `.hero` et `.page-hero` occupent au minimum la hauteur visible sous le header sticky sur les écrans de plus de 850 px.
- Leur contenu est centré verticalement avec `align-items: center`.
- Le calcul tient compte de la hauteur du header (5,25 rem) et utilise `100svh` pour tenir compte de la hauteur visible du viewport.
- Les règles ne s'appliquent pas aux tablettes et mobiles.

### Validation
- `npm run build` réussi ; synchronisation des composants et validation des sept pages.
- `git diff --check` réussi.
- Règle CSS servie et sept routes HTTP 200.
- Contrôle visuel réel dans un navigateur desktop restant à effectuer.
- Aucun commit, push ni déploiement.

## [Non publié] — Réduction des espacements de sections — 2026-11-10

### Modifié
- Réduction des espacements verticaux des sections standard, compactes, héros et en-têtes de pages.
- Réduction de l'espace sous les titres de section.
- Harmonisation des fonds `soft-section` et footer avec le token `--color-stone`.
- Suppression des surcharges de fond redondantes pour ces deux composants.

### Validation
- `npm run build` réussi ; sept pages HTML valides.
- `git diff --check` réussi.
- Contrôle statique des règles d'espacement et du CSS servi par le serveur.
- Contrôle visuel navigateur restant à effectuer.
- Aucun commit, push ni déploiement.

## [Non publié] — Consolidation cartes, listes et encadrés CSS — 2026-11-10

### Modifié
- Regroupement des états de base et de survol des cartes dans leur définition principale.
- Centralisation de la couleur finale des coches de listes dans leur règle initiale.
- Consolidation de la couleur de fond finale des badges.
- Suppression des surcharges redondantes des cartes, badges, encadrés et étapes de méthode.
- Conservation des styles spécifiques des cartes de démonstration, cartes de contact et formules tarifaires.

### Validation
- `npm run build` réussi ; synchronisation et validation HTML des sept pages.
- Vérifications statiques des règles CSS et équilibre des accolades/commentaires.
- `git diff --check` réussi après suppression d'un espace final.
- Pas de comparaison visuelle navigateur dans cette passe.
- Aucun commit, push ni déploiement.

## [Non publié] — Consolidation typographique CSS — 2026-11-10

### Modifié
- Regroupement des styles de base `h1`, `h2` et `h3` dans un bloc typographique unique.
- Centralisation des tailles desktop, tablette et mobile en conservant les valeurs finales précédemment appliquées.
- Conservation des largeurs spécifiques des titres dans les héros.
- Suppression des anciennes déclarations typographiques qui étaient remplacées par les couches ultérieures.

### Validation
- `npm run build` réussi ; les sept pages HTML restent valides.
- Vérification statique : une règle de base autonome par niveau de titre, accolades CSS équilibrées.
- `git diff --check` réussi.
- Aucun commit, push ni déploiement.

## [Non publié] — Harmonisation des boutons Tarifs et nettoyage CSS — 2026-11-10

### Modifié
- Les deux appels à l'action des formules tarifaires utilisent désormais le même composant principal `.button` et la même apparence terracotta.
- Suppression des anciennes déclarations de variantes de boutons qui étaient intégralement remplacées par les règles Palette V2.
- Fusion de la règle de survol du bouton principal pour conserver le déplacement visuel et centraliser sa couleur finale.

### Validation
- `npm run build` réussi ; sept pages HTML valides.
- `git diff --check` réussi.
- Vérification du HTML et du CSS servis par le serveur de prévisualisation.
- Aucun commit, push ni déploiement.

## [Non publié] — Consolidation CSS et audits — 2026-11-10

### Modifié
- Consolidation des règles du header mobile dans le bloc responsive principal ; suppression du bloc correctif devenu redondant.
- Regroupement des styles du lien de carte d'accueil dans son composant dédié.
- Fusion de valeurs identiques du header et du focus clavier dans leurs règles principales.
- Ajout de la page Tarifs aux matrices des audits automatisés d'accessibilité et Lighthouse.

### Validation
- `npm run build` réussi : synchronisation des composants et validation HTML des sept pages.
- `git diff --check` réussi ; équilibre des accolades et commentaires CSS vérifié.
- Vérification visuelle navigateur non exécutée : aucun binaire Chromium/Brave disponible sur l'environnement distant.

### Limites
- Les règles CSS restantes qui se répètent correspondent en partie à des états, variantes ou breakpoints distincts ; elles ne sont pas fusionnées sans comparaison visuelle.
- Aucun commit, push ni déploiement.

## [0.5.1] - 2026-11-08

### Modifié
- Palette V2 terre cuite, ivoire chaud, pierre et anthracite doux ; remplacement de l'orange vif et des fonds V1 sur les pages, composants et illustrations.
- Hiérarchie typographique réduite : H1 plafonné à 3,25 rem sur desktop, H2 à 2,25 rem, H3 à 1,12 rem ; graisses allégées.
- Contraste des boutons principaux renforcé par l'emploi de la terre cuite profonde et de texte blanc.
- Métadonnées de couleur du navigateur et favicon harmonisés avec la palette V2.
- Brand Board mise à jour avec la révision V2 et les tailles typographiques.

### Validation
- Six pages valides avec `html-validate`.
- Douze combinaisons axe-core (six pages, deux formats) sans violation ni débordement horizontal.
- H1 desktop plafonné à 52 px et H2 à 36 px ; sur mobile, H1 32 px et H2 environ 26 px à 390 px de largeur.
- Vérification navigateur : les six pages chargent, sans débordement horizontal ; aucun changement des contenus fonctionnels.
- `git diff --check` réussi après nettoyage documentaire.

### Limites
- Aucun commit, push ni déploiement.

## [0.5.0] - 2026-11-08

### Modifié
- Retour à la Brand Board V1 sur l'ensemble des pages : Manrope, Inter, anthracite, orange, pêche et ivoire.
- Reprise des styles de base du site avant les expérimentations éditoriales précédentes.
- Harmonisation des boutons, cartes, liens, navigation, pieds de page et mises en page responsives.

### Ajouté
- Photographies Unsplash illustratives pour l'espace de travail et les métiers artisanaux ; crédits et sources archivés dans `assets/images/credits.md`.
- Illustrations SVG originales pour la structure web, un workflow IA supervisé et un tableau de bord.
- Animations d'apparition progressives, désactivées avec `prefers-reduced-motion`.
- Adaptations visuelles pour l'accueil, les pages Sites web, IA utile et Contact ; cohérence de marque appliquée aussi aux pages légales.

### Validation
- Six pages valides avec `html-validate`.
- Douze combinaisons axe-core (six pages, deux formats) sans violation ni débordement horizontal.
- Ressources visuelles vérifiées en navigateur ; aucune erreur JavaScript.
- Lighthouse mobile simulé : accueil 98, sites web 98, IA utile 98, contact 97, mentions légales 91, confidentialité 90 en performance ; accessibilité et bonnes pratiques à 100 sur les six pages.
- Aucun push ni déploiement.

### Limites
- Les photographies sont des illustrations sous licence Unsplash, pas des clients ni des locaux personnels.
- Les portraits personnels approuvés ne sont pas intégrés : leurs fichiers binaires ne sont pas archivés dans le dépôt.
- Les pages légales restent non publiables jusqu'à validation des informations réelles.


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


## 2026-11-08 — Préparation de la création d'activité

- Clarification des mentions légales : la nouvelle activité n'est pas encore immatriculée.
- Conservation de l'ancien SIREN uniquement comme référence historique, sans le présenter comme identifiant actif.
- Préparation d’un dossier administratif local, conservé hors du dépôt public.
- Mentions légales et politique de confidentialité maintenues en brouillon non publiable.


## 2026-11-09 — Optimisation des images du site
- Génération de variantes WebP des trois photographies utilisées, en conservant les originaux JPEG.
- Mise à jour des références HTML vers les variantes WebP ; crédits et sources conservés.
- Réduction mesurée : espace de travail 68 %, artisanat du bois 46 %, céramique 44 % (qualité WebP 82, dimensions conservées).
- Audits à rejouer avant de conclure sur le gain Lighthouse.
