# Copie carbone (CC) <Badge>v1.8.2+</Badge>

<PluginInfo name="workflow-cc" link="/handbook/workflow-cc"></PluginInfo>

Le nœud de copie carbone permet d'envoyer certaines informations contextuelles du processus de workflow à des utilisateurs spécifiés, à des fins de consultation ou d'information. Par exemple, au cours d’un processus d’approbation ou autre, vous pouvez envoyer des informations à d’autres parties prenantes afin qu’elles soient tenues au courant de l’avancement.

Vous pouvez configurer plusieurs nœuds CC dans le workflow, afin que lorsque le flux atteint ces nœuds, les informations correspondantes soient envoyées aux destinataires définis.

Le contenu copié s'affichera dans le menu "Copie à moi" du centre des tâches. Les utilisateurs peuvent y consulter tous les éléments copiés à leur attention. Les éléments non lus sont indiqués, et l'utilisateur peut les marquer manuellement comme lus après consultation.

## Guide d'utilisation

### Création d’un nœud

Dans l'interface de configuration du workflow, cliquez sur le bouton plus (“+”) dans le flux pour ajouter un nœud “CC” :

![Ajouter CC](https://static-docs.nocobase.com/20250710222842.png)

### Configuration du nœud

![Configuration du nœud](https://static-docs.nocobase.com/20250710224041.png)

Dans le panneau de configuration du nœud, vous pouvez définir les paramètres suivants :

#### Destinataires

Les destinataires sont les utilisateurs qui recevront le contenu copié. Cela peut être un ou plusieurs utilisateurs. La source peut être une sélection statique à partir de la liste des utilisateurs, une valeur dynamique définie par des variables, ou le résultat d’une requête sur la table des utilisateurs.

![Configuration des destinataires](https://static-docs.nocobase.com/20250710224421.png)

#### Interface utilisateur

Les destinataires doivent consulter le contenu copié via le menu "Copie à moi" du centre des tâches. Vous pouvez configurer des blocs de contenu à partir des résultats des déclencheurs ou d'autres nœuds du contexte du workflow.

![Interface utilisateur](https://static-docs.nocobase.com/20250710225400.png)

#### Titre de la tâche

Le titre de la tâche s'affiche dans le centre des tâches. Vous pouvez générer ce titre dynamiquement à l'aide de variables du contexte du workflow.

![Titre de la tâche](https://static-docs.nocobase.com/20250710225603.png)

### Centre des tâches

Les utilisateurs peuvent consulter et gérer tous les contenus qui leur ont été copiés dans le centre des tâches, et les filtrer en fonction de leur statut de lecture.

![20250710232932](https://static-docs.nocobase.com/20250710232932.png)

![20250710233032](https://static-docs.nocobase.com/20250710233032.png)

Une fois consulté, l'utilisateur peut marquer l'élément comme lu, ce qui mettra à jour le compteur des éléments non lus.

![20250710233102](https://static-docs.nocobase.com/20250710233102.png)
