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

## Résultats vérifiés le 8 novembre 2026

- html-validate : six pages valides après correction du DOCTYPE et de deux usages ARIA.
- axe-core : 12 combinaisons page/viewport exécutées ; zéro violation après correction des contrastes et du nom accessible du lien de marque.
- Débordement horizontal : aucun sur les 12 combinaisons.
- Lighthouse (profil mobile simulé, six pages) : accueil 97/100/100/100 ; création de sites 89/100/100/100 ; IA utile 99/100/100/100 ; contact 99/100/100/100 ; mentions légales 89/100/100/60 ; confidentialité 98/100/100/60 (performance/accessibilité/bonnes pratiques/SEO).
- Les scores SEO à 60 sur les deux pages légales proviennent de leur directive `noindex`, conservée volontairement tant que les informations ne sont pas finalisées. Ils ne signalent pas une anomalie à corriger avant validation juridique.
- Les audits performance signalent des ressources de polices externes bloquant le rendu et des décalages de mise en page sur les pages longues. L'auto-hébergement des polices est une piste de correction à évaluer avec les licences.
- npm audit : aucune vulnérabilité signalée dans les dépendances installées lors du contrôle initial.

Les scores Lighthouse locaux sont indicatifs : ils dépendent de la machine, du réseau, du navigateur et de l'environnement de test. Ils ne préjugent pas des résultats sur l'hébergement public.

## Limites

- axe-core et Lighthouse ne remplacent pas les tests manuels au clavier, avec lecteur d'écran, zoom, préférences utilisateur et contenus réels.
- L'audit Lighthouse doit être rejoué après les modifications de contenu et sur l'URL publique, après autorisation de publication.
- Les pages légales restent des trames non publiables tant que les informations réelles ne sont pas complétées.
