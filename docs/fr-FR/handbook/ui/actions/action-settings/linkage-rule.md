# Règles de liaison 

## Introduction

Les règles de liaison des opérations permettent aux utilisateurs de contrôler dynamiquement l'état des opérations (comme l'affichage, l'activation, la désactivation, etc.) en fonction de conditions spécifiques. En configurant ces règles, les utilisateurs peuvent lier le comportement des boutons d'opération aux enregistrements actuels, aux rôles des utilisateurs ou aux données du contexte. Depuis la version `v1.7.0-beta.19`, tous les boutons globaux prennent en charge la configuration des règles de liaison.

> **Note** : Les règles de liaison des opérations ne supportent pas encore une liaison directe avec les valeurs des formulaires, ce qui signifie qu'il n'est pas possible de faire des évaluations conditionnelles basées sur les valeurs des champs du formulaire actuel (c'est-à-dire que les variables du formulaire actuel ne sont pas prises en charge). Actuellement, les règles de liaison des opérations peuvent être configurées en fonction d'autres données contextuelles ou de variables système pour contrôler l'affichage, l'activation, la désactivation, etc.

![20240423113057](https://static-docs.nocobase.com/20240423113057.png)

## Instructions d'utilisation

![20250418152329](https://static-docs.nocobase.com/20250418152329.png)

Lorsque la condition est remplie (par défaut, elle est toujours validée sans condition), les attributs sont définis, et il est possible d'utiliser des constantes ou des variables dans les évaluations de condition.

## Constantes

Exemple : seuls les commandes en attente de traitement peuvent être éditées.

![20250418150033](https://static-docs.nocobase.com/20250418150033.png)

## Variables

### Variables système

Exemple 1 : Le bouton de suppression des commandes dont la date est postérieure à aujourd'hui est désactivé.

![20250418145825](https://static-docs.nocobase.com/20250418145825.png)

Exemple 2 : Le bouton de suppression en masse dans l'en-tête du tableau des commandes n'est disponible que pour le rôle d'administrateur. D'autres rôles ne peuvent pas exécuter cette opération.

![20250418150637](https://static-docs.nocobase.com/20250418150637.png)

![20250418150826](https://static-docs.nocobase.com/20250418150826.png)

### Variables contextuelles

Exemple : Le bouton d'ajout sur les détails de commande (bloc relation) est uniquement activé lorsque le statut de la commande est « En attente de paiement ». Dans tous les autres statuts, le bouton sera désactivé.

![20250418145312](https://static-docs.nocobase.com/20250418145312.png)

![20250418150429](https://static-docs.nocobase.com/20250418150429.png)

Pour plus d'informations sur les variables, consultez [Variables](/handbook/ui/variables).

## RoadMap

- Planifié ou en cours
  - Les règles de liaison des opérations prendront en charge le formulaire actuel.

Pour plus de détails sur les règles de liaison, consultez [Règles de liaison](/handbook/ui/linkage-rule).
