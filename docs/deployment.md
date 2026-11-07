# Déploiement GitHub Pages

**Statut :** cible documentée ; déploiement non configuré et non vérifié.

## Préconditions
- Pages activé pour ce dépôt dans les paramètres GitHub.
- Fichiers statiques prêts et contrôlés.
- Liens, chemins, métadonnées et ressources vérifiés.
- Mentions et contenu public validés.
- Workflow de déploiement testé.

## Procédure cible
1. Développer et tester localement.
2. Vérifier les changements avec `git diff` et les tests disponibles.
3. Commiter sur la branche de travail.
4. Fusionner ou pousser selon la politique de branche retenue.
5. Laisser GitHub Actions publier les artefacts statiques.
6. Vérifier l'URL publique, les pages, les ressources et la console navigateur.

## Sécurité
Ne jamais injecter de clé API, mot de passe ou secret dans les fichiers servis au navigateur. Un site statique ne peut pas protéger un secret embarqué dans son JavaScript.
