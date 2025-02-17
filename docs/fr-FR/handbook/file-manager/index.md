# Gestionnaire de fichiers

<PluginInfo name="file-manager"></PluginInfo>

## Introduction

Le plugin Gestionnaire de fichiers offre une collection de fichiers, un champ de pièce jointe et des services de stockage de fichiers pour gérer efficacement les fichiers. Les fichiers sont des enregistrements de données structurées connus sous le nom de collection de fichiers, qui stockent les métadonnées des fichiers et peuvent être gérés via le Gestionnaire de fichiers. Les champs de pièces jointes sont des champs relationnels spécifiques associés à la collection de fichiers. Le plugin prend en charge plusieurs méthodes de stockage, y compris le stockage local, Alibaba Cloud OSS, Amazon S3 et Tencent Cloud COS.

## Manuel de l'utilisateur

### Collection de fichiers

Une collection de pièces jointes est intégrée pour stocker tous les fichiers associés aux champs de pièces jointes. De plus, de nouvelles collections de fichiers peuvent être créées pour stocker des fichiers spécifiques.

[Plus d'informations sur l'utilisation peuvent être trouvées dans le document d'introduction à la table des fichiers](/handbook/file-manager/file-collection)

### Champ de pièce jointe

Les champs de pièces jointes sont des champs relationnels spécifiques liés à la collection de fichiers, qui peuvent être créés via "Champ de pièce jointe" ou configurés via "Champ d'association".

[Plus d'informations sur l'utilisation peuvent être trouvées dans le document d'introduction aux champs de pièces jointes](/handbook/file-manager/field-attachment)

### Stockage des fichiers

Le moteur de stockage de fichiers est utilisé pour sauvegarder les fichiers sur des services spécifiques, y compris le stockage local (sauvegarde sur le disque dur du serveur), le stockage en nuage, etc.

[Plus d'informations sur l'utilisation peuvent être trouvées dans le document d'introduction au stockage de fichiers](./storage/index.md)

### HTTP API

Files can be uploaded through the HTTP API, refer to [HTTP API](./http-api.md).

## Développement

* [Étendre le type de fichier client](./development/client-file-type.md)
