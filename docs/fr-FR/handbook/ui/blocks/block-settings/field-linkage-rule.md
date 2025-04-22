# Règles de liaison des champs

## Introduction

Les règles de liaison des champs permettent de modifier dynamiquement l'état des champs dans les blocs de formulaire/détails en fonction du comportement de l'utilisateur. Les blocs de champs actuellement pris en charge pour ces règles de liaison incluent :

- [Bloc de formulaire](/handbook/ui/blocks/data-blocks/form#%E8%81%94%E5%8A%A8%E8%A7%84%E5%88%99)
- [Bloc de détails](/handbook/ui/blocks/data-blocks/details#%E8%81%94%E5%8A%A8%E8%A7%84%E5%88%99)
- [Sous-formulaire](/handbook/ui/fields/specific/nester) (nécessite la version v1.3.17-beta ou supérieure)
- [Sous-tableau](/handbook/ui/fields/specific/sub-table) (nécessite la version v1.3.17-beta ou supérieure)

## Instructions d'utilisation

#### **Règles de liaison dans le bloc de formulaire**

Dans le bloc de formulaire, les règles de liaison peuvent ajuster dynamiquement le comportement des champs en fonction de conditions spécifiques :

- **Contrôler l'affichage/la dissimulation des champs** : Afficher ou masquer un champ en fonction des valeurs d'autres champs.
- **Rendre un champ obligatoire** : Définir dynamiquement un champ comme obligatoire ou non obligatoire en fonction de certaines conditions.
- **Affectation de valeur** : Affecter automatiquement une valeur à un champ en fonction de conditions.
- **Configurer les options des champs de sélection** : Mettre à jour dynamiquement les options de sélection d'un champ en fonction des autres champs du formulaire.
- **Limiter la plage horaire des champs de temps** : Limiter la plage horaire des champs de type temps en fonction des valeurs d'autres champs.

#### **Règles de liaison dans le bloc de détails**

Dans le bloc de détails, les règles de liaison sont principalement utilisées pour contrôler dynamiquement l'affichage ou la dissimulation des champs dans le bloc de détails.

![20250418161037](https://static-docs.nocobase.com/20250418161037.png)

### Affectation de valeur

Exemple : Lorsque la commande est marquée comme commande supplémentaire, le statut de la commande est automatiquement défini sur « En attente de révision ».

![20250418161712](https://static-docs.nocobase.com/20250418161712.png)

### Champ obligatoire

Exemple : Lorsque le statut de la commande est « En attente de paiement », le montant de la commande devient obligatoire.

![20250418163252](https://static-docs.nocobase.com/20250418163252.png)

### Affichage/masquage

Exemple : Le mode de paiement n'est affiché que lorsque le statut de la commande est « En attente de paiement ».

![20250418163733](https://static-docs.nocobase.com/20250418163733.png)

### Options

> **Note** : Cette fonctionnalité est disponible **à partir de la version v1.7.0-beta.2**.

Il est possible de configurer dynamiquement les options pour des champs de type `select`, `radioGroup`, `multipleSelect`, `checkboxGroup`, etc. Ces options peuvent être mises à jour en fonction des changements dans d'autres champs du formulaire.

Exemple : L'option « Paiement en plusieurs fois » est disponible uniquement lorsque le montant de la commande est supérieur à 10 000.

![20250418164806](https://static-docs.nocobase.com/20250418164806.png)

Effet de liaison :

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20250418164831.mp4" type="video/mp4">
</video>

### Plage de dates

> **Note** : Cette fonctionnalité est disponible **à partir de la version v1.7.0-beta.2**.

Il est possible de configurer dynamiquement la plage de dates pour des champs de type `date`, `datetime`, `dateOnly`, `datetimeNoTz`, `unixTimestamp`, `createdAt`, `updatedAt`, etc. Cette plage de dates peut être ajustée en fonction des changements dans d'autres champs du formulaire.

Exemple : Après avoir sélectionné la date de la commande, la date de livraison ne peut pas être antérieure à la date de la commande.

![20250418165500](https://static-docs.nocobase.com/20250418165500.png)

Exemple : La date de livraison ne peut pas être antérieure à aujourd'hui et ne peut pas dépasser la date limite de la commande.

![20250418170520](https://static-docs.nocobase.com/20250418170520.png)

Pour plus de détails sur les règles de liaison, consultez [Règles de liaison](/handbook/ui/linkage-rule).
