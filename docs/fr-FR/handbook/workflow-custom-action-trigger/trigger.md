# Configuration du Déclencheur

## Création d'un Workflow

Lors de la configuration d'un workflow, commencez par sélectionner **"Événement d'action personnalisé"** :

![Création du workflow "Événement d'Opération Personnalisée"](https://static-docs.nocobase.com/20240509091820.png)

## Configuration du Déclencheur

### Table de Données

Étant donné que les événements d'opération personnalisée sont associés à des lignes de données spécifiques, vous devez d'abord choisir la table de données qui sera liée à votre modèle de données :

![Configuration du Déclencheur_Sélection de la Table de Données](https://static-docs.nocobase.com/20240509150515.png)

### Données Liées à Utiliser

Si votre workflow nécessite l'utilisation de données liées provenant de la ligne de données déclenchée, vous pouvez sélectionner les champs de relation profonde nécessaires ici :

![Configuration du Déclencheur_Sélectionner les Relations de Données à Utiliser](https://static-docs.nocobase.com/20240509154856.png)

Ces champs seront automatiquement préchargés dans le contexte du workflow une fois l'événement déclenché, les rendant disponibles pour une utilisation dans le workflow.
