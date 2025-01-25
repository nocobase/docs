# Règles de Liaison

## Introduction

Les règles de liaison permettent d'ajuster dynamiquement l'état des champs de formulaire en fonction du comportement de l'utilisateur, tels que Visible/Caché, Obligatoire/Non Obligatoire et l'assignation de valeurs. Actuellement, les composants suivants prennent en charge la configuration des règles de liaison : [Blocs de formulaire](https://docs.nocobase.com/handbook/ui/blocks/data-blocks/form#linkage-rules), [Blocs de détails](https://docs.nocobase.com/handbook/ui/blocks/data-blocks/details#linkage-rules), [Boutons d'action](https://docs.nocobase.com/handbook/ui/actions/action-settings/linkage-rule), [Sous-formulaires](https://docs.nocobase.com/handbook/ui/fields/specific/nester) (requiert v1.3.17-beta ou version supérieure), et [Sous-tables](https://docs.nocobase.com/handbook/ui/fields/specific/sub-table) (requiert v1.3.17-beta ou version supérieure).

![20240408100711](https://static-docs.nocobase.com/20240408100711.png)

![20240408100757](https://static-docs.nocobase.com/20240408100757.png)

## Instructions d'utilisation

1. **Configuration des champs** : Assurez-vous que tous les champs du formulaire utilisés dans les règles sont correctement configurés pour garantir l'efficacité et la précision des règles.

2. **Activation conditionnelle** : Lorsque les conditions de la règle sont remplies (facultatif), le système exécute automatiquement les modifications de propriétés spécifiées.

3. **Prise en charge de plusieurs règles** : Les formulaires peuvent contenir plusieurs règles de liaison. Lorsque plusieurs conditions de règles sont simultanément remplies, le système exécute les résultats de manière séquentielle, en suivant l'ordre de définition des règles.

4. **Gestion des règles** : Profitez d'un contrôle complet avec des fonctionnalités telles que la dénomination personnalisée, le tri, la suppression, l'activation, la désactivation et la duplication des règles.

5. **Intégration des constantes et des variables** : Utilisez des constantes ou des variables dans les affectations de champs et les configurations de conditions. Pour plus d'informations sur les variables, consultez la section [Variables](/handbook/ui/variables).

### Affectation de Valeurs

**Illustration** : Évaluer et attribuer automatiquement des niveaux de clients (par exemple, A+, A, A-) en fonction des montants d'achats annuels estimés.

- Achat annuel estimé supérieur à 20 000 : Client classé A+.

![20240408102241](https://static-docs.nocobase.com/20240408102241.png)

- Achat annuel estimé entre 10 000 et 20 000 (inclus) : Client classé A.

![20240408102303](https://static-docs.nocobase.com/20240408102303.png)

- Achat annuel estimé inférieur à 10 000 : Client classé A-.

![20240408102324](https://static-docs.nocobase.com/20240408102324.png)

### Exigence de Champ

**Illustration** : Ajuster dynamiquement le statut d'obligation du prix promotionnel du produit en fonction de son statut promotionnel.

- Lorsque "IsPromotion" est activé, le prix promotionnel devient obligatoire.

![20240408105031](https://static-docs.nocobase.com/20240408105031.png)

- Lorsque "IsPromotion" est inactif, le prix promotionnel devient optionnel.

![20240408105115](https://static-docs.nocobase.com/20240408105115.png)

### Contrôle de Visibilité

**Illustration** : Gérer la visibilité du champ de prix promotionnel en fonction du statut de la promotion du produit.

- Lorsque "IsPromotion" est vrai, le champ de prix promotionnel est affiché et obligatoire.

![20240408115240](https://static-docs.nocobase.com/20240408115240.png)

- Lorsque "IsPromotion" est faux, le champ de prix promotionnel est caché et non obligatoire.

![20240408115338](https://static-docs.nocobase.com/20240408115338.png)
