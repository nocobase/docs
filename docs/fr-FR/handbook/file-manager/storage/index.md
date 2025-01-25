# Aperçu

## Moteurs intégrés

Actuellement, NocoBase prend en charge les types de moteurs intégrés suivants :

- [Stockage local](./local.md)
- [Alibaba Cloud OSS](./aliyun-oss.md)
- [Amazon S3](./amazon-s3.md)
- [Tencent Cloud COS](./tencent-cos.md)

Un moteur de stockage local est ajouté automatiquement lors de l'installation du système et peut être utilisé directement. De nouveaux moteurs peuvent également être ajoutés ou les paramètres d'un moteur existant peuvent être modifiés.

## Paramètres communs des moteurs

En plus des paramètres spécifiques à chaque catégorie de moteur, voici les paramètres communs :

### Titre

Le nom du moteur de stockage pour une identification facile par les utilisateurs.

### Nom du système

Le nom du système du moteur de stockage pour l'identification par le système. Il doit être unique dans l'ensemble du système. S'il n'est pas fourni, il sera généré aléatoirement.

### URL de base d'accès

La partie préfixe de l'URL accessible au fichier en externe, qui peut être l'URL d'accès de base d'un CDN, par exemple : "`https://cdn.nocobase.com/app`" (sans le "`/`" final).

### Chemin

Le chemin relatif utilisé lors du stockage des fichiers. Cette partie sera automatiquement ajoutée à l'URL finale lors de l'accès. Par exemple : "`user/avatar`" (sans le "`/`" initial ou final).

### Limite de taille de fichier

La limite de taille pour télécharger des fichiers sur ce moteur de stockage. Les fichiers plus volumineux que cette limite ne seront pas téléchargés. La limite maximale du système est de 1 Go.

### Moteur de stockage par défaut

Lorsque cette option est activée, le moteur de stockage est défini comme moteur par défaut pour le système. Les fichiers téléchargés dans les champs de pièce jointe ou les collections de fichiers sans spécification de moteur de stockage seront enregistrés dans le moteur de stockage par défaut. Le moteur de stockage par défaut ne peut pas être supprimé.

### Conserver les fichiers lors de la suppression des enregistrements

Lorsque cette option est activée, les fichiers téléchargés dans le moteur de stockage seront conservés même lorsque les enregistrements de données dans les champs de pièce jointe ou les collections de fichiers sont supprimés. Par défaut, les fichiers du moteur de stockage sont supprimés lorsque les enregistrements sont supprimés.

Exemple avec le stockage local :

![Exemple de configuration du moteur de stockage de fichiers](https://static-docs.nocobase.com/20240529115151.png)

:::info{title=Note}
Après le téléchargement du fichier, le chemin d'accès final est composé de plusieurs parties :

```
<Base URL>/<Path>/<FileName><Extension>
```
Par exemple : `https://cdn.nocobase.com/app/user/avatar/20240529115151.png`.
:::
