### Nœud Manuel

## Création d'un Nœud

Dans l'interface de configuration du workflow, cliquez sur le bouton plus ("+") dans le processus pour ajouter un nœud "Manuel" :

![Créer un Nœud Manuel](https://static-docs.nocobase.com/4dd259f1aceeaf9b825abb4b257df909.png)

## Configuration du Nœud

### Assignees

Un nœud manuel nécessite d'assigner un utilisateur qui sera responsable de l'exécution de la tâche en attente. Vous pouvez ajouter une liste de tâches en attente lors de la configuration des blocs sur la page. De plus, le contenu de la fenêtre contextuelle de chaque tâche doit être configuré dans l'interface du nœud.

Vous pouvez soit sélectionner un utilisateur spécifique, soit utiliser des variables pour choisir la clé primaire ou étrangère des données utilisateur dans le contexte.

![Configuration du Nœud Manuel - Sélection de Variables d'Assignation](https://static-docs.nocobase.com/22fbca3b8e21fda3a831019037001445.png)

:::info{title=Note}
Actuellement, l'option d'assignation pour les nœuds manuels ne prend pas en charge le traitement multi-utilisateurs, bien que cette fonctionnalité soit prévue pour les futures versions.
:::

### Configuration de l'Interface Utilisateur

La configuration de l'interface de la liste des tâches est essentielle pour la configuration du nœud manuel. En cliquant sur le bouton "Configurer", vous pouvez ouvrir une fenêtre contextuelle séparée pour la configuration. Cette interface fonctionne comme une page régulière, vous permettant de la concevoir en utilisant un éditeur WYSIWYG (What You See Is What You Get) :

![Configuration du Nœud Manuel - Configuration de l'Interface Utilisateur](https://static-docs.nocobase.com/fd360168c879743cf22d57440cd2590f.png)

#### Onglets

Les onglets peuvent être utilisés pour différencier les types de contenu. Par exemple, un onglet peut être utilisé pour les soumissions de formulaires approuvées, un autre pour les soumissions rejetées, ou vous pouvez les utiliser pour afficher les détails des données connexes. Ces onglets peuvent être configurés librement en fonction de vos besoins.

#### Blocs

Les blocs que vous pouvez utiliser se divisent principalement en deux catégories : les blocs de données et les blocs de formulaires. En outre, des blocs Markdown sont disponibles pour les invites d'information et d'autres contenus statiques.

##### Blocs de Données

Les blocs de données permettent d'afficher des informations provenant des déclencheurs ou des résultats du traitement de n'importe quel nœud, fournissant ainsi le contexte nécessaire pour l'assignee. Par exemple, si le workflow est déclenché par un événement de formulaire, un bloc de données peut être créé pour afficher les détails des données déclenchées. Cette configuration est similaire à la configuration des détails sur une page régulière, où vous pouvez sélectionner tous les champs des données déclenchées à afficher :

![Configuration du Nœud Manuel - Bloc de Données - Déclencheur](https://static-docs.nocobase.com/675c3e58a1a4f45db310a72c2d0a404c.png)

De même, les blocs de données des nœuds peuvent être configurés pour afficher les résultats des données des nœuds en amont en tant que référence pour l'assignee. Par exemple, si un nœud de calcul en amont génère des résultats, ceux-ci peuvent être affichés comme données contextuelles :

![Configuration du Nœud Manuel - Bloc de Données - Données de Nœud](https://static-docs.nocobase.com/a583e26e508e954b47e5ddff80d998c4.png)

:::info{title=Note}
Puisque le workflow est dans un état non-exécutif pendant la configuration de l'interface, les blocs de données n'afficheront pas de données spécifiques. Les données pertinentes n'apparaîtront dans l'interface contextuelle des tâches que lorsque le workflow sera déclenché et exécuté.
:::

##### Blocs de Formulaires

Les blocs de formulaires sont essentiels dans l'interface des tâches, car ils déterminent si le workflow continue ou non. Ne pas configurer un bloc de formulaire entraînera l'arrêt du workflow. Il existe trois types de blocs de formulaires disponibles :

- Formulaire personnalisé
- Formulaire de création de record
- Formulaire de mise à jour de record

![Configuration du Nœud Manuel - Types de Blocs de Formulaires](https://static-docs.nocobase.com/2d068f3012ab07e32a265405492104a8.png)

Pour les formulaires de création et de mise à jour de records, vous devrez sélectionner la table de données sur laquelle ils sont basés. Lorsque l'assignee soumet le formulaire, les valeurs saisies seront utilisées pour ajouter ou mettre à jour les données dans la table sélectionnée. Le formulaire personnalisé permet de créer un formulaire temporaire non lié à une table de données, avec les valeurs soumises disponibles pour être utilisées dans les nœuds suivants.

Vous pouvez configurer le bouton de soumission du formulaire avec l'une des trois options suivantes :

- Continuer le processus
- Terminer le processus
- Sauvegarder temporairement

![Configuration du Nœud Manuel - Types de Boutons de Formulaire](https://static-docs.nocobase.com/6b45995b14152e85a821dff6f6e3189a.png)

Ces trois options de boutons correspondent à différents états de nœud dans le workflow : "Compléter", "Rejeter", ou "En attente". Au moins une des deux premières options doit être configurée pour déterminer comment le workflow continue.

Sur le bouton "Continuer le processus", vous pouvez configurer des valeurs spécifiques pour les champs du formulaire :

![Configuration du Nœud Manuel - Définir les Valeurs des Formulaires](https://static-docs.nocobase.com/2cec2d4e2957f068877e616dec3b56dd.png)

![Configuration du Nœud Manuel - Fenêtre Pop-up pour Définir les Valeurs des Formulaires](https://static-docs.nocobase.com/5ff51b60c76cdb76e6f1cc95dc3d8640.png)

Dans la fenêtre pop-up, vous pouvez attribuer des valeurs à n'importe quel champ du formulaire. Une fois le formulaire soumis, ces valeurs seront utilisées comme valeurs finales pour ces champs. Cette fonctionnalité est particulièrement utile lors de la révision des données. Vous pouvez configurer plusieurs boutons "Continuer le processus" dans le formulaire, chacun définissant des valeurs d'énumération différentes pour des champs similaires, permettant ainsi au workflow de continuer avec des résultats variés en fonction de ces valeurs.
