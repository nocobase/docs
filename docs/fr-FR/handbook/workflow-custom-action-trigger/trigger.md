# Configuration du Déclencheur

## Création d'un Workflow

Lors de la configuration d'un workflow, commencez par sélectionner **"Événement d'action personnalisé"** :

![Création du workflow "Événement d'Opération Personnalisée"](https://static-docs.nocobase.com/20240509091820.png)

## Configuration du Déclencheur

### Context Type

> v.1.6.0+

Different context types determine where the workflow can be bound to buttons in different blocks:

* None: A global event that can be bound to action buttons in the action panel and other data blocks.
* Single record: Can be bound to action buttons in data blocks such as table rows, forms, and details.
* Multiple records: Can be bound to batch operation buttons in the table block.

![触发器配置_上下文类型](https://static-docs.nocobase.com/20250215135808.png)

### Table de Données

When the context type is single record or multiple records, you'll need to choose the collection that will be associated with your data model:

![Configuration du Déclencheur_Sélection de la Table de Données](https://static-docs.nocobase.com/20240509150515.png)

### Association Data to Use

Si votre workflow nécessite l'utilisation de données liées provenant de la ligne de données déclenchée, vous pouvez sélectionner les champs de relation profonde nécessaires ici :

![Configuration du Déclencheur_Sélectionner les Relations de Données à Utiliser](https://static-docs.nocobase.com/20240509154856.png)

Ces champs seront automatiquement préchargés dans le contexte du workflow une fois l'événement déclenché, les rendant disponibles pour une utilisation dans le workflow.
