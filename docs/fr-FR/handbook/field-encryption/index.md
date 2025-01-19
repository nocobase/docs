# Chiffrement

<PluginInfo commercial="true" name="field-encryption"></PluginInfo>

## Introduction

Les données sensibles de l'entreprise, telles que les numéros de téléphone des clients, les adresses e-mail et les numéros de carte, peuvent être chiffrées pour garantir leur confidentialité. Une fois chiffrées, ces données sont stockées de manière sécurisée dans la base de données sous forme de texte chiffré.

![20240802175127](https://static-docs.nocobase.com/20240802175127.png)

## Variables d'environnement

:::warning
La perte de la clé `ENCRYPTION_FIELD_KEY` rendra impossible le déchiffrement des données.
:::

Pour activer la fonctionnalité de chiffrement, vous devez configurer la variable d'environnement `ENCRYPTION_FIELD_KEY`, qui sert de clé de chiffrement. Cette clé doit comporter exactement 32 caractères, par exemple :

```bash
ENCRYPTION_FIELD_KEY='2%&glK;<UA}eMxJVc53-4G(rTi0vg@J]'
```

## Configuration du champ

![20240802173721](https://static-docs.nocobase.com/20240802173721.png)

## Limitations de filtrage après chiffrement

Une fois qu'un champ est chiffré, seules les opérations de filtrage suivantes sont prises en charge : égal, différent de, existe et n'existe pas.

![20240802174042](https://static-docs.nocobase.com/20240802174042.png)

## Exemple

À ajouter.
