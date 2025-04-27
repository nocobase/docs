# Règles de Liaison de Blocs

> **Remarque** : Cette fonctionnalité est supportée à partir de la version v1.7.0-beta.24.

## Introduction

Les règles de liaison de blocs permettent aux utilisateurs de contrôler dynamiquement l'affichage et la dissimulation des blocs. Certains blocs peuvent être automatiquement cachés ou affichés en fonction de conditions spécifiques.

![20250427140619](https://static-docs.nocobase.com/20250427140619.png)

![20250427144259](https://static-docs.nocobase.com/20250427144259.png)

> **Remarque** : Avant d'exécuter la règle de liaison de blocs, l'affichage du bloc doit d'abord passer par des **vérifications des permissions ACL**. Ce n'est que lorsque l'utilisateur dispose des permissions nécessaires qu'une logique de règle de liaison de bloc sera évaluée. En d'autres termes, la règle de liaison de bloc ne prendra effet que lorsque les permissions de vue ACL seront satisfaites.

### Contrôler les Blocs avec des Variables Globales

Les règles de liaison de blocs permettent de contrôler l'affichage des blocs via des variables globales. Par exemple, différents rôles peuvent avoir des permissions de visualisation sur la même table de commandes, mais les données affichées peuvent être personnalisées et différenciées. En configurant les champs d'affichage des blocs et les boutons d'opération en fonction des rôles, il est possible d'obtenir une présentation des données et un contrôle des permissions d'opération flexibles.

#### Rôle Service Client

- **Plage de données** : Peut uniquement voir les commandes dont le statut est "En attente d'expédition" et masquer les données sensibles telles que les informations de paiement et les informations sur les clients bénéficiant de réductions.
- **Boutons opérables** :
  - Voir les détails de la commande
  - Traiter les retours/échanges
  - Générer une demande de remboursement
- **Champs visibles** : OrderNumber, OrderDate, OrderStatus, ShippingAddress (excluant des champs sensibles comme TotalAmount, Discount, Customers, etc.).

  ![20250427141800](https://static-docs.nocobase.com/20250427141800.png)

#### Rôle Financier

- **Plage de données** : Peut uniquement voir les commandes dont le statut est "Payé" ou "En cours de remboursement" et n'a pas besoin de voir les détails des produits ou les informations des clients.
- **Boutons opérables** :
  - Auditer le remboursement
  - Générer une facture
- **Champs visibles** : OrderNumber, OrderDate, OrderStatus, ShippingAddress, TotalAmount (excluant des champs sensibles comme Items, Customers, etc.).

  ![20250427142420](https://static-docs.nocobase.com/20250427142420.png)

### Contrôler les Blocs avec des Variables de Contexte

Les blocs peuvent également être contrôlés par des variables dans le contexte. Par exemple, vous pouvez utiliser des variables de contexte telles que "enregistrement actuel", "formulaire actuel" ou "enregistrement popup actuel" pour afficher ou masquer dynamiquement des blocs.

Exemple : Le bloc "Informations d'expédition" sera affiché uniquement lorsque le statut de la commande est "Expédiée".

![20250427143707](https://static-docs.nocobase.com/20250427143707.png)

![20250427143951](https://static-docs.nocobase.com/20250427143951.png)

### Markdown dans les Blocs

Exemple : Configurer le Markdown pour afficher les informations de suivi dans le bloc de détails.
![20250427150236](https://static-docs.nocobase.com/20250427150236.png)

![20250427150308](https://static-docs.nocobase.com/20250427150308.png)
Les informations Markdown seront affichées uniquement lorsque le statut de la commande est "Expédiée".
![20250427150341](https://static-docs.nocobase.com/20250427150341.png)
Le résultat est le suivant :

<video width="100%" height="440" controls>
  <source src="https://static-docs.nocobase.com/20250427150738.mp4" type="video/mp4">
</video>

Pour plus de détails sur les règles de liaison, consultez [Règles de Liaison](/handbook/ui/linkage-rule).
