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

### Date Variables

Date variables are dynamic placeholders for date that can be used across the system to define data scope filters in blocks, related field conditions, action linkage rules, and default values for date fields. Depending on the usage scenario, the parsing logic differs:

- In **assignment scenarios** (e.g., default value setting), variables resolve to a specific moment in time.
- In **filtering scenarios** (e.g., date conditions in data scope), variables resolve to a datetime scope to support flexible filtering.

#### Filtering Scenarios

Common use cases include:

- Setting date field conditions in block data scope filters
- Setting date conditions in related field data scope
- Defining date conditions in action linkage rules

![20250522211606](https://static-docs.nocobase.com/20250522211606.png)

 Supported Variables:

- `Current time`
- `Yesterday`
- `Today`
- `Tomorrow`
- `Last week`
- `This week`
- `Next week`
- `Last month`
- `This month`
- `Next month`
- `Last quarter`
- `This quarter`
- `Next quarter`
- `Last year`
- `This year`
- `Next year`
- `Last 7 days`
- `Next 7 days`
- `Last 30 days`
- `Next 30 days`
- `Last 90 days`
- `Next 90 days`

#### Assignment Scenarios

In assignment contexts, the same date variable will resolve differently depending on the type of the target date field. For example, when assigning the variable `Today`:

- For **Timestamp** and **DateTime with timezone** fields: the variable resolves to a full UTC time string, such as `2024-04-20T16:00:00.000Z`, including timezone info. This is ideal for cross-timezone data synchronization.

- For **DateTime without timezone** fields: the variable resolves to a local time string, such as `2025-04-21 00:00:00`, with no timezone information, which is more suitable for local business logic.

- For **DateOnly** fields: the variable resolves to a pure date string, such as `2025-04-21`, containing only the year, month, and day.

The system intelligently parses the variable based on the field type to ensure correct formatting and prevent data errors or exceptions due to mismatches.

![20250522212802](https://static-docs.nocobase.com/20250522212802.png)

 Common Assignment Use Cases:

- Setting default values for date fields in form blocks
- Setting `value` property of date fields in linkage rules
- Assigning values to date fields in form submission actions

 Supported Variables:

- `Now`
- `Yesterday`
- `Today`
- `Tomorrow`

### Paramètres de recherche de l'URL

Cette variable représente les paramètres de recherche dans l'URL de la page actuelle. Cette variable n'est disponible que lorsqu'il y a une chaîne de requête dans l'URL de la page. Il est plus pratique de l'utiliser avec [Lien](/handbook/ui/actions/types/link).

![20240603200410](https://static-docs.nocobase.com/20240603200410.gif)

### Jeton API

La valeur de cette variable est une chaîne qui sert d'identifiant pour accéder à l'API NocoBase. Elle peut être utilisée pour authentifier l'identité de l'utilisateur.
