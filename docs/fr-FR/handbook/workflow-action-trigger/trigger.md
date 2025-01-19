# Configuration du Déclencheur

#### Création d'un Workflow

Pour créer un workflow, commencez par sélectionner "Événement Post-action" comme type :

![Création de Workflow avec Déclencheur Post-action](https://static-docs.nocobase.com/13c87035ec1bb7332514676d3e896007.png)

#### Mode d'Exécution

Lors de la configuration des événements post-action, vous avez la possibilité de choisir entre les modes d'exécution "Synchronisé" et "Asynchrone" :

![Création de Workflow - Choisir Synchronisé ou Asynchrone](https://static-docs.nocobase.com/bc83525c7e539d578f9e2e20baf9ab69.png)

Utilisez le mode synchrone si le processus doit être exécuté et fournir un retour immédiatement après l'opération de l'utilisateur. Pour les autres scénarios, le mode asynchrone par défaut est généralement adapté. En mode asynchrone, l'opération de l'utilisateur est terminée instantanément, et le workflow continue de s'exécuter en arrière-plan dans le cadre d'un processus en file d'attente.

#### Configuration de la Table de Données

Pour commencer la configuration, accédez au canevas de workflow et cliquez sur le déclencheur pour ouvrir la fenêtre des paramètres. La première étape consiste à sélectionner la table de données à lier :

![Configuration du Workflow - Sélectionner la Table de Données](https://static-docs.nocobase.com/35c49a91eba731127edcf76719c97634.png)

#### Choisir le Mode de Déclenchement

Ensuite, déterminez le mode de déclenchement en choisissant entre le Mode Local et le Mode Global :

![Configuration du Workflow - Choisir le Mode de Déclenchement](https://static-docs.nocobase.com/317809c48b2f2a2d38aedc7d08abdadc.png)

- **Mode Local** : Ce mode déclenche le workflow uniquement sur les boutons d'action qui lui ont été explicitement liés. Si le workflow n'est pas lié, cliquer sur le bouton ne déclenchera pas le workflow. Ce mode est idéal lorsque vous souhaitez personnaliser le workflow pour des formulaires ou actions spécifiques.
- **Mode Global** : Dans ce mode, le workflow est déclenché par n'importe quel bouton d'action configuré au sein de la table de données, quelle que soit l'origine du formulaire, et ne nécessite pas de liaison spécifique du workflow.

En Mode Local, vous pouvez actuellement lier les boutons d'action suivants :

- Les boutons "Soumettre" et "Sauvegarder" dans les nouveaux formulaires.
- Les boutons "Soumettre" et "Sauvegarder" dans les formulaires de mise à jour.
- Le bouton "Mettre à jour les données" dans les lignes de données (par exemple, dans les tableaux, listes ou vues Kanban).

#### Choisir le Type d'Action

Lorsque vous utilisez le Mode Global, vous devez également spécifier le type d'action. Les options disponibles sont "Action de création de record" et "Action de mise à jour de record." Le workflow sera déclenché après la réussite de l'une ou l'autre des opérations.

#### Pré-chargement des Données Liées

Si les étapes ultérieures du workflow nécessitent l'utilisation de données liées provenant du déclencheur, vous pouvez sélectionner les champs de relation à précharger :

![Configuration du Workflow - Pré-charger les Relations](https://static-docs.nocobase.com/5cded063509c7ba1d34f49bec8d68227.png)

Ces données liées préchargées seront ensuite facilement accessibles tout au long du workflow après qu'il ait été déclenché.
