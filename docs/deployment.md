# Déploiement GitHub Pages

**Statut :** GitHub Pages reste la cible ; aucun déploiement n'a été configuré ou vérifié.

## Préconditions obligatoires

- Pages activé pour ce dépôt et méthode de publication confirmée.
- Pages principales finalisées.
- Coordonnées de contact confirmées et testées.
- Mentions légales et confidentialité complétées selon la situation et les services réels.
- Contenus publics relus et validés.
- Liens, chemins, métadonnées et ressources vérifiés.
- Contrôles responsive, accessibilité et performance réalisés.
- Absence de secrets et de données privées.
- Autorisation explicite de publication reçue.

## Procédure cible

1. Développer et tester localement sur la branche de travail.
2. Vérifier les changements avec `git diff` et les contrôles disponibles.
3. Commiter sur la branche de travail après revue.
4. Faire valider la fusion et le push vers la branche de publication.
5. Configurer GitHub Pages selon la méthode retenue.
6. Vérifier l'URL publique, les pages, les ressources et la console navigateur.

## État actuel

- Branche de travail : `feat/portfolio-mvp`.
- Commit de base : `93a6319990524650bd2e37580dc5fed62cb4a67f`.
- Commit local de réalisation : `61a8dcf50cbaa7f4cc388b58e8daff2c0449d5bb` (`feat: add initial static portfolio MVP pages`).
- Branche de travail non poussée ; aucun push effectué.
- Aucun workflow GitHub Actions configuré.
- Aucune URL publique vérifiée.

## Sécurité

Ne jamais injecter de clé API, mot de passe ou secret dans les fichiers servis au navigateur. Un site statique ne peut pas protéger un secret embarqué dans son JavaScript.
