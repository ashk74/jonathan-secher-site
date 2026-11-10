# Maintenance

## Règles Git
- Commits courts, explicites et cohérents.
- Vérifier `git status` et `git diff` avant chaque commit.
- Ne jamais écraser des modifications locales non comprises.
- Conserver les sources éditables des éléments graphiques lorsque leur licence le permet.
- Documenter les décisions qui changent le périmètre, la marque ou l'architecture.

## Contrôle avant publication
- Vérifier liens internes et externes.
- Vérifier affichage mobile et desktop.
- Vérifier contraste, navigation clavier et textes alternatifs.
- Vérifier poids et formats des images.
- Vérifier métadonnées SEO et partage social.
- Vérifier mentions légales et confidentialité selon les traitements réellement effectués.
- Contrôler l'absence de secrets et de données client.


## Composants communs et génération

- Modifier les liens, leur ordre ou leurs libellés uniquement dans `components/site-navigation.json`.
- Modifier les headers/footers générés uniquement via `scripts/sync-site-shell.mjs`, jamais directement dans les pages.
- Après modification de la configuration ou du script, exécuter `npm run build`.
- Modifier les variables de marque uniquement dans `css/tokens.css`. Les règles de composants et de mise en page restent dans `css/site.css`.
- Garder dans chaque page le contenu éditorial qui lui est propre. Mutualiser uniquement les structures réellement identiques.
- Avant validation, contrôler `git diff --check`, les sept pages et le rendu mobile/desktop.
