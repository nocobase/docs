# Contribuer

- Forker le code source dans votre repository
- Modifier le code source
- Soummetre une pull request
- Signer la CLA

## Télécharger

```bash
# Remplacer l'adresse git suivante par votre repo
git clone https://github.com/nocobase/nocobase.git
cd nocobase
yarn install
```

## Développer et tester

```bash
# Installer et démarrer l'application
yarn dev
# Lancer tous les tests
yarn test
# Lancer tous les fichiers test du dossier
yarn test <dir>
# Lancer un fichier test
yarn test <file>
```

## Aperçu de la documentation

```bash
# Démarrer la documentation
yarn doc --lang=zh-CN
yarn doc --lang=en-US
```

La documentation se trouve dans le répertoire docs et suit la syntaxe Markdown

```bash
|- /docs/
  |- en-US
  |- fr-FR
  |- zh-CN
```

## Autres

Pour plus d'instructions CLI, veuillez vous reporter au chapitre [NocoBase CLI](https://docs.nocobase.com/api/cli).


