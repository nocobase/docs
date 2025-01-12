# Règle de Liaison

## Introduction

Les règles de liaison pour les actions sont configurées en fonction des conditions de données contextuelles et des résultats d'exécution. En configurant ces règles de liaison, vous pouvez contrôler l'état des actions (Visible, Caché, Activé, Désactivé).

![20240423113057](https://static-docs.nocobase.com/20240423113057.png)

## Instructions d'utilisation

![20240413102150](https://static-docs.nocobase.com/20240413102150.png)

Lorsque les conditions sont remplies (par défaut, elles sont considérées comme passant sans conditions), l'action est déclenchée. Les constantes et les variables peuvent être utilisées dans l'évaluation des conditions.

### Boutons Applicables aux Règles de Liaison

Actuellement, seules les actions avec un contexte de données prennent en charge la configuration des règles de liaison.

- Boutons de ligne dans des blocs tels que les tableaux et les diagrammes de Gantt ;
- Boutons dans les blocs de détails ;

### Constantes

Exemple : Masquer le bouton de copie pour les commandes annulées.

![20240423113212](https://static-docs.nocobase.com/20240423113212.png)

### Variables

Exemple : Désactiver le bouton de suppression pour les commandes dont la date de livraison est postérieure à aujourd'hui.

![20240423113504](https://static-docs.nocobase.com/20240423113504.png)

Pour plus de détails sur l'utilisation des variables, consultez la section [Variables](/handbook/ui/variables).
