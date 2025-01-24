# Variables

## Introduction
Les variables sont un ensemble de jetons utilisés pour identifier une valeur dans le contexte actuel. Elles peuvent être utilisées dans des scénarios tels que la configuration de la portée des données des blocs, les valeurs par défaut des champs, les règles de liaison, les flux de travail, etc.

![2024-09-25_20-08-38-2024-09-25-20-11-51](https://static-docs.nocobase.com/2024-09-25_20-08-38-2024-09-25-20-11-51.png)

## Variables actuellement prises en charge

### Utilisateur actuel

Représente les données de l'utilisateur actuellement connecté.

![20240416154950](https://static-docs.nocobase.com/20240416154950.png)

### Rôle actuel

Représente l'identifiant du rôle (nom du rôle) de l'utilisateur actuellement connecté.

![20240416155100](https://static-docs.nocobase.com/20240416155100.png)

### Formulaire actuel

La valeur du formulaire actuel, utilisée uniquement dans les blocs de formulaire. Elle est utilisée dans les scénarios suivants :

- Règles de liaison du formulaire actuel
- Valeurs par défaut pour les champs de formulaire (uniquement valides lors de l'ajout de nouvelles données)
- Paramètres de la portée des données pour les champs de relation
- Configuration des valeurs des champs pour les actions de soumission

#### Règles de liaison du formulaire actuel

![20240416170732_rec_](https://static-docs.nocobase.com/20240416170732_rec_.gif)

#### Valeurs par défaut pour les champs de formulaire (uniquement valides lors de l'ajout de nouvelles données)

![20240416171129_rec_](https://static-docs.nocobase.com/20240416171129_rec_.gif)

#### Paramètres de la portée des données pour les champs de relation

Utilisé pour gérer les liens entre les relations, par exemple :

![20240416171743_rec_](https://static-docs.nocobase.com/20240416171743_rec_.gif)

#### Configuration des valeurs des champs pour les actions de soumission

![20240416171215_rec_](https://static-docs.nocobase.com/20240416171215_rec_.gif)

### Objet actuel

Utilisé actuellement uniquement pour la configuration des champs dans les sous-formulaires et sous-tableaux des blocs de formulaire, représentant la valeur de chaque élément :

- Valeurs par défaut pour les sous-champs
- Portée des données pour les sous-champs de relation

#### Valeurs par défaut pour les sous-champs

![20240416172933_rec_](https://static-docs.nocobase.com/20240416172933_rec_.gif)

#### Portée des données pour les sous-champs de relation

![20240416173043_rec_](https://static-docs.nocobase.com/20240416173043_rec_.gif)

### Objet parent

Semblable à "Objet actuel", il représente l'objet parent de l'objet actuel. Prise en charge dans NocoBase v1.3.34-beta et versions supérieures.

### Enregistrement actuel

Un enregistrement fait référence à une ligne dans une collection, chaque ligne représentant un enregistrement. La variable "Enregistrement actuel" est utilisée dans les "Règles de liaison d'action de ligne" des blocs d'affichage.

#### Règles de liaison d'action de ligne

![20240416174813_rec_](https://static-docs.nocobase.com/20240416174813_rec_.gif)

### Enregistrement actuel du popup

Les actions de popup jouent un rôle très important dans la configuration de l'interface NocoBase.

- Popup d'action de ligne : Chaque popup a une variable "Enregistrement actuel du popup", représentant l'enregistrement actuel de la ligne.
- Popup de champ de relation : Chaque popup a une variable "Enregistrement actuel du popup", représentant l'enregistrement de relation cliqué.

Les blocs dans le popup peuvent utiliser la variable "Enregistrement actuel du popup", avec les cas d'utilisation suivants :

- Configuration de la portée des données pour les blocs
- Configuration de la portée des données pour les champs de relation
- Configuration des valeurs par défaut pour les champs (formulaire pour ajouter des données)
- Configuration des règles de liaison pour les actions
- Configuration des valeurs des champs pour les actions de soumission de formulaire

#### Configuration de la portée des données pour les blocs

![20240416224307_rec_](https://static-docs.nocobase.com/20240416224307_rec_.gif)

#### Configuration de la portée des données pour les champs de relation

![20240416224641_rec_](https://static-docs.nocobase.com/20240416224641_rec_.gif)

#### Configuration des valeurs par défaut pour les champs (formulaire pour ajouter des données)

![20240416223846_rec_](https://static-docs.nocobase.com/20240416223846_rec_.gif)

#### Configuration des règles de liaison pour les actions

![20240416223101_rec_](https://static-docs.nocobase.com/20240416223101_rec_.gif)

#### Configuration des valeurs des champs pour les actions de soumission de formulaire

![20240416224014_rec_](https://static-docs.nocobase.com/20240416224014_rec_.gif)

### Enregistrement sélectionné dans le tableau

Valeurs par défaut des champs de formulaire utilisées actuellement uniquement pour l'action Ajouter un enregistrement pour un bloc de tableau

#### Valeur par défaut du champ de formulaire pour l'action Ajouter un enregistrement

### Enregistrement parent (obsolète)

Utilisé uniquement dans les blocs de relation, représentant l'enregistrement source des données de relation.

:::warning
"L'enregistrement parent" est obsolète, il est recommandé d'utiliser l'équivalent "Enregistrement actuel du popup" à la place.
:::

### Variables de date

Les variables associées incluent :

- Heure actuelle
- Hier
- Aujourd'hui
- Demain
- La semaine dernière
- Cette semaine
- La semaine prochaine
- Le mois dernier
- Ce mois-ci
- Le mois prochain
- Le trimestre dernier
- Ce trimestre
- Le trimestre prochain
- L'année dernière
- Cette année
- L'année prochaine
- Les 7 derniers jours
- Les 7 prochains jours
- Les 30 derniers jours
- Les 30 prochains jours
- Les 90 derniers jours
- Les 90 prochains jours

<br />

:::warning
À l'exception de l'Heure actuelle, qui est un moment (chaîne), les autres variables de date sont des périodes de temps (tableaux). Actuellement, les périodes de temps ne peuvent être utilisées que dans la portée des données et ne peuvent pas être utilisées pour les valeurs par défaut des champs.
:::

Les cas d'utilisation associés incluent :

- Paramètres de condition de champ de date pour la portée des données du bloc
- Paramètres de condition de champ de date pour la portée des données des champs de relation
- Paramètres de condition de champ de date pour les règles de liaison d'action
- Paramètres de valeur par défaut de champ de date

### Paramètres de recherche de l'URL

Cette variable représente les paramètres de recherche dans l'URL de la page actuelle. Cette variable n'est disponible que lorsqu'il y a une chaîne de requête dans l'URL de la page. Il est plus pratique de l'utiliser avec [Lien](/handbook/ui/actions/types/link).

![20240603200410](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240603200410.gif)

### Jeton API

La valeur de cette variable est une chaîne qui sert d'identifiant pour accéder à l'API NocoBase. Elle peut être utilisée pour authentifier l'identité de l'utilisateur.
