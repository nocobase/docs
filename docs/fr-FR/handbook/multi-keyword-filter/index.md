# Filtre Multi-Mots-Clés<Badge>v1.7.0+</Badge>

<PluginInfo commercial="true" name="multi-keyword-filter"></PluginInfo>

## Introduction

Le plugin **Filtre Multi-Mots-Clés** ajoute de puissantes capacités de filtrage de texte à la plateforme NocoBase, vous permettant de filtrer en utilisant plusieurs mots-clés, améliorant grandement la flexibilité et l'efficacité des requêtes de données.

Ce plugin fournit principalement deux opérateurs de filtre :
- **Égal à n'importe lequel** : Filtre les enregistrements qui contiennent n'importe lequel des mots-clés spécifiés dans la liste
- **Pas égal à n'importe lequel** : Filtre les enregistrements qui ne contiennent aucun des mots-clés spécifiés dans la liste

Ces opérateurs peuvent être utilisés avec les types de champs suivants :
- Texte sur une ligne
- Numéro de téléphone
- Email
- Entier
- Nombre
- Pourcentage
- UUID
- Nano ID
- Code auto-généré

## Cas d'Usage

- Besoin de filtrer basé sur plusieurs codes produits, étiquettes ou catégories
- Importer un grand nombre de mots-clés depuis des fichiers Excel pour un filtrage par lot
- Besoin de trouver rapidement des enregistrements de données qui répondent à plusieurs conditions

## Portée d'Utilisation

- Champs dans les blocs de formulaire de filtre
![20250417170714](https://static-docs.nocobase.com/20250417170714.png)
- Champs dans les boutons de filtre
![20250417170923](https://static-docs.nocobase.com/20250417170923.png)
- Champs dans le filtrage de portée de données
![20250417171011](https://static-docs.nocobase.com/20250417171011.png)
- Champs dans les règles de liaison
![20250417171124](https://static-docs.nocobase.com/20250417171124.png)

## Comment Utiliser

### 1. Ajouter un Champ Texte sur Une Ligne

En utilisant les formulaires de filtre et le texte sur une ligne comme exemple, définissez l'opérateur pour le champ texte sur une ligne à "égal à n'importe lequel" ou "pas égal à n'importe lequel"

![20250417165918_rec_](https://static-docs.nocobase.com/20250417165918_rec_.gif)

### 2. Saisir des Mots-Clés

Il y a deux façons de saisir des mots-clés :

#### 2.1 Saisie Manuelle

1. Entrez directement les mots-clés dans la zone de saisie
2. Plusieurs mots-clés peuvent être séparés par des sauts de ligne
3. Après la saisie, cliquez sur le bouton de filtre pour filtrer les données

#### 2.2 Importer des Mots-Clés depuis Excel

1. Préparez un fichier Excel (supporte les formats .xlsx ou .xls) contenant les mots-clés à importer
2. Cliquez sur le bouton "Importer Excel" à droite de la zone de saisie
3. Sélectionnez et téléchargez le fichier Excel

**Si Excel n'a qu'une seule colonne de données** :
- Le système importera automatiquement toutes les valeurs non vides de cette colonne comme mots-clés

**Si Excel contient plusieurs colonnes de données** :
- Le système affichera une boîte de dialogue de sélection de colonnes
- Vous pouvez sélectionner une ou plusieurs colonnes pour l'importation
- Sélection d'une seule colonne : Toutes les valeurs non vides de cette colonne seront importées comme mots-clés
- Sélection de plusieurs colonnes : Les valeurs non vides de plusieurs colonnes seront fusionnées comme mots-clés, les doublons seront automatiquement supprimés
- Cliquez sur le bouton "Confirmer" pour terminer l'importation

![20250417170324_rec_](https://static-docs.nocobase.com/20250417170324_rec_.gif)

### 3. Résultats du Filtre

- **Égal à n'importe lequel** : Les enregistrements où la valeur du champ correspond à n'importe quelle valeur dans la liste de mots-clés seront affichés
- **Pas égal à n'importe lequel** : Les enregistrements où la valeur du champ ne correspond à aucune valeur dans la liste de mots-clés seront affichés

## Questions Fréquemment Posées

### Comment effacer les mots-clés ajoutés ?

Cliquez sur le bouton "×" sur une étiquette de mot-clé pour supprimer des mots-clés individuels, ou cliquez sur le "×" à droite de la zone de saisie pour supprimer tous les mots-clés.

![20250417165604](https://static-docs.nocobase.com/20250417165604.png)

### Combien de mots-clés peuvent être importés ?

Le plugin supporte l'importation d'un grand nombre de mots-clés, mais il est recommandé de les maintenir dans une plage raisonnable (comme des centaines) pour éviter d'affecter les performances de requête.

### Quelles sont les exigences de format pour les mots-clés importés ?

- Les fichiers Excel doivent contenir au moins une colonne de données
- Les valeurs vides seront automatiquement filtrées
- Les valeurs en double seront automatiquement supprimées

### Est-ce que cela supporte la correspondance floue ?

Ce plugin fournit une fonctionnalité de correspondance exacte.

### Quels champs supportent cette fonctionnalité ?

- Texte sur une ligne
- Numéro de téléphone
- Email
- Entier
- Nombre
- Pourcentage
- UUID
- Nano ID
- Formule
- Code auto-généré

## Conseils et Astuces

- Sauvegardez les listes de mots-clés couramment utilisés dans des fichiers Excel pour une importation rapide lorsque nécessaire
- Lors de l'importation de plusieurs colonnes, vous pouvez fusionner des mots-clés de différentes colonnes
- Utilisez l'opérateur "pas égal à n'importe lequel" pour exclure rapidement les données indésirables

## Exigences Système

- Version NocoBase : 1.7.0 ou supérieure

---

En utilisant le plugin Filtre Multi-Mots-Clés, vous pouvez gérer et interroger les données plus efficacement, en particulier lors du traitement de grandes quantités de données et de scénarios de filtrage multi-conditions fréquents. Ce plugin améliorera significativement votre efficacité de travail.
