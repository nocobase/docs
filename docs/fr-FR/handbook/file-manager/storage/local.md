# Stockage local

Les fichiers téléchargés seront enregistrés dans un répertoire local sur le serveur. Ce mode est adapté pour des scénarios à petite échelle ou pour des usages expérimentaux, où le nombre de fichiers est limité.

## Options

![Exemple des options du moteur de stockage de fichiers](https://static-docs.nocobase.com/20240529115151.png)

:::info{title=Astuce}
Cette section couvre uniquement les options spécifiques au moteur de stockage local. Pour les paramètres communs, veuillez consulter les [Paramètres généraux du moteur](./index.md#general-engine-parameters).
:::

### Chemin

Le chemin représente à la fois le chemin relatif du fichier stocké sur le serveur et le chemin d'accès URL. Par exemple, "`user/avatar`" (sans les barres obliques initiale et finale) représente :

1. Le chemin relatif du fichier téléchargé stocké sur le serveur : `/path/to/nocobase-app/storage/uploads/user/avatar`.
2. Le préfixe d'URL pour accéder au fichier : `http://localhost:13000/storage/uploads/user/avatar`.
