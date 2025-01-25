# Table Fields

## Introduction

Les champs de type tableau offrent un ensemble robuste de fonctionnalités au-delà de l'ajustement de la largeur des colonnes, des titres de champs et du tri. Ils offrent des configurations d'affichage améliorées pour des champs spécialisés tels que les champs de date, les champs relationnels et les champs numériques, permettant ainsi une présentation de données plus personnalisée et informative.

![20240511140644](https://static-docs.nocobase.com/20240511140644.png)

## Options de Configuration des Champs

### Formatage des Champs de Date

![20240417114116](https://static-docs.nocobase.com/20240417114116.png)

Pour des informations complètes sur les options de formatage des dates, consultez le guide sur [le Formatage des Dates](/handbook/ui/fields/specific/date-picker).

### Formatage des Champs Numériques

![20240417215229](https://static-docs.nocobase.com/20240417215229.png)

La fonctionnalité de formatage des champs numériques offre diverses options, notamment :
- Conversion d'unités simple
- Séparateurs de milliers
- Préfixes et suffixes
- Contrôle de la précision
- Notation scientifique

![20240417215425](https://static-docs.nocobase.com/20240417215425.png)

Pour une exploration approfondie des capacités de formatage numérique, consultez la documentation sur [le Formatage des Nombres](/handbook/ui/fields/field-settings/number-format).

### Tri

La fonctionnalité de tri actuelle permet un tri par colonne unique au sein des données de la page actuelle. Notez que le tri par champs relationnels n'est pas pris en charge dans cette version.

![20240422115501](https://static-docs.nocobase.com/20240422115501.png)

### Colonnes Fixes

![20240511140524](https://static-docs.nocobase.com/20240511140524.png)

### Composants de Champ

Certains champs offrent la flexibilité de passer d'un type de composant à un autre. Par exemple, le composant `URL` peut être converti en composant `Preview`.

![20240806165152](https://static-docs.nocobase.com/20240806165152.png)

Pour les développeurs souhaitant étendre la gamme de composants disponibles, le guide [Étendre les Composants de Valeur des Champs](/plugin-samples/field/value) fournit des informations utiles.

### Styles

La fonctionnalité de style permet de configurer dynamiquement les couleurs de colonne et les couleurs d'arrière-plan en fonction de conditions spécifiées. Pour illustrer cette fonctionnalité puissante, examinons un exemple avec un tableau de détails de transactions bancaires :

**Scénario** : Nous souhaitons différencier visuellement les revenus (montants positifs) et les dépenses (montants négatifs) dans la colonne du montant des transactions.

**Guide étape par étape** :

1. Accédez aux paramètres de champ pour la colonne du montant des transactions et allez dans l'option Style.
   ![style-menu-2024-08-08-18-23-13](https://static-docs.nocobase.com/style-menu-2024-08-08-18-23-13.png)

2. Créez la première règle conditionnelle : Pour les transactions positives (revenus), définissez la couleur du champ sur vert.
   - Cliquez sur "Ajouter une règle de liaison"
   - Configurez : Lorsque le montant de la transaction > 0, appliquez la couleur verte
   ![style-green-2024-08-08-18-33-34](https://static-docs.nocobase.com/style-green-2024-08-08-18-33-34.png)

3. Définissez la deuxième règle conditionnelle : Pour les transactions négatives (dépenses), définissez la couleur du champ sur rouge.
   - Cliquez à nouveau sur "Ajouter une règle de liaison"
   - Configurez : Lorsque le montant de la transaction < 0, appliquez la couleur rouge
   ![style-red-2024-08-08-18-35-01](https://static-docs.nocobase.com/style-red-2024-08-08-18-35-01.png)

Le résultat est une représentation visuelle intuitive des données financières :
![result-2024-08-08-18-38-05](https://static-docs.nocobase.com/result-2024-08-08-18-38-05.png)
