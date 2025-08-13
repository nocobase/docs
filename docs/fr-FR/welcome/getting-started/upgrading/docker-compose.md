# Mise à niveau pour Docker Compose

## 0. Préparation à la mise à niveau

:::warning
- Assurez-vous de sauvegarder la base de données avant de procéder à la mise à niveau !!!
- Pour les plugins commerciaux, veuillez valider votre clé de licence dans le système et redémarrer après validation. Voir [NocoBase Commercial License Activation Guide](https://www.nocobase.com/en/blog/nocobase-commercial-license-activation-guide) pour plus de détails.
:::

## 1. Naviguer vers le répertoire contenant `docker-compose.yml`

Exemple

```bash
# MacOS, Linux...
cd /votre/chemin/mon-projet/
# Windows
cd C:\votre\chemin\mon-projet
```

## 2. Mettre à jour la version de l'image

- 'latest' : Stabilité fonctionnelle, version testée de manière plus complète, avec uniquement des corrections de bugs. Il est recommandé d'installer cette version.
- 'beta' : Contient une nouvelle fonctionnalité prête à être publiée, version préalablement testée qui peut contenir des problèmes connus ou inconnus.
- 'alpha' : Version en développement qui contient le dernier code des fonctionnalités, peut être incomplète ou instable, utilisée principalement pour le développement interne et l'itération rapide.
- `1.3.51` : Spécifiez un numéro de version, vous pouvez consulter la liste des versions précédentes [ici](https://hub.docker.com/r/nocobase/nocobase/tags).

:::warning
Les images peuvent uniquement être mises à niveau, elles ne peuvent pas être rétrogradées. La prochaine version ne peut pas être rétrogradée vers la version "latest".
:::

```yml
# ...
services:
  app:
    image: nocobase/nocobase:main
    image: nocobase/nocobase:latest
    image: nocobase/nocobase:1.2.4-alpha
# ...
```

## 3. Redémarrer le conteneur

```bash
# Récupérer la dernière image
docker-compose pull
# Démarrer
docker-compose up -d app
# Voir les logs de l'application
docker-compose logs app
```

## 4. Mise à niveau des plugins indépendants

Après la mise à niveau de NocoBase, les plugins indépendants installés via l'interface peuvent aussi nécessiter une mise à niveau. Veuillez consulter la documentation [Installation et Mise à niveau des Plugins](/welcome/getting-started/plugin).
