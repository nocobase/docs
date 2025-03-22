# Règles de Liaison

## Introduction

Les règles de liaison permettent d'ajuster dynamiquement l'état des champs de formulaire en fonction du comportement de l'utilisateur, tels que Visible/Caché, Obligatoire/Non Obligatoire et l'assignation de valeurs. Actuellement, les composants suivants prennent en charge la configuration des règles de liaison : [Blocs de formulaire](https://docs.nocobase.com/handbook/ui/blocks/data-blocks/form#linkage-rules), [Blocs de détails](https://docs.nocobase.com/handbook/ui/blocks/data-blocks/details#linkage-rules), [Boutons d'action](https://docs.nocobase.com/handbook/ui/actions/action-settings/linkage-rule), [Sous-formulaires](https://docs.nocobase.com/handbook/ui/fields/specific/nester) (requiert v1.3.17-beta ou version supérieure), et [Sous-tables](https://docs.nocobase.com/handbook/ui/fields/specific/sub-table) (requiert v1.3.17-beta ou version supérieure).

![20240408100711](https://static-docs.nocobase.com/20240408100711.png)

![20240408100757](https://static-docs.nocobase.com/20240408100757.png)

- Lorsque "IsPromotion" est faux, le champ du prix promotionnel est masqué et non requis.

![20240408115338](https://static-docs.nocobase.com/20240408115338.png)

### **Options**

> **Note** : Cette fonctionnalité est prise en charge à partir de **v1.7.0-beta.2**.

Il est possible de configurer dynamiquement les options pour les types de champs tels que `select`, `radioGroup`, `multipleSelect` et `checkboxGroup`. Les options disponibles peuvent être automatiquement modifiées en fonction d'autres champs du formulaire.

#### **Exemple : Contrôler les sous-catégories en fonction de la catégorie du produit dans un système de gestion de produits**

- **Catégorie (Sélectionner)** : Lorsque vous sélectionnez **Électronique**, les sous-catégories disponibles sont **Téléphones mobiles, Ordinateurs portables et Casques audio**.

![20250313215730](https://static-docs.nocobase.com/20250313215730.png)

- Lorsque vous sélectionnez **Électroménager**, les sous-catégories disponibles sont **Climatiseurs, Réfrigérateurs et Lave-linge**.

![20250313215834](https://static-docs.nocobase.com/20250313215834.png)

#### **Aperçu de la liaison**

<video width="100%" height="440" controls>
  <source src="https://static-docs.nocobase.com/20250313215944.mp4" type="video/mp4">
</video>

---

### **Plage de dates**

> **Note** : Cette fonctionnalité est prise en charge à partir de **v1.7.0-beta.2**.

Il est possible de configurer dynamiquement la plage de dates pour les types de champs tels que `date`, `datetime`, `dateOnly`, `datetimeNoTz`, `unixTimestamp`, `createdAt` et `updatedAt`. La plage de dates sélectionnable peut être automatiquement ajustée en fonction des modifications d'autres champs du formulaire.

#### **Exemple : Définir la date de fin après la date de début**

Lorsque vous sélectionnez une **date de début**, la **date de fin** ne peut être qu'une date ultérieure et ne peut pas être antérieure à la date de début.

![20250313220839](https://static-docs.nocobase.com/20250313220839.png)

#### **Exemple : La date de livraison ne peut être antérieure à aujourd'hui et pas plus tard que la date limite de la commande**

- La **date de livraison** ne peut être antérieure à **aujourd'hui**.
- La **date de livraison** ne peut pas être postérieure à la **date limite de la commande**.

![20250313222051](https://static-docs.nocobase.com/20250313222051.png)