Voici un résumé des changements dans la version **v0.6** de **NocoBase**, du 5 avril 2022 :

## Merged

### Nouvelles fonctionnalités :
- **Plugin Workflow** : Introduction d'un plugin de gestion de workflow avec plusieurs améliorations (#288, #278, #264).
- **Améliorations de l'ACL (Contrôle d'accès)** : Améliorations majeures du module ACL avec ajout de nouvelles fonctionnalités comme la vérification des rôles (#283, #279, #280).
- **Composants UI** : Ajout de nouveaux composants pour les formulaires et l'interface utilisateur, y compris `Slate` pour le texte enrichi (#272), `Markdown` (#173), et d'autres composants comme `Select`, `TreeSelect`, `InputNumber`, et `DatePicker` (#168, #160, #161).
- **Améliorations de la gestion des erreurs** : Ajout de gestion des erreurs dans le workflow (#214), et plusieurs corrections liées aux filtres et aux opérateurs de requêtes (#219, #220, #217).

### Corrections :
- **Problèmes avec les associations** : Correction des erreurs de conversion `toJSON` pour les associations `belongsTo` et `null` (#287, #260).
- **Problèmes de style** : Résolution de problèmes de styles CSS, notamment avec Slate et les styles par défaut d'Ant Design (#289, #277).
- **Problèmes de transactions et de données** : Résolution de bugs liés aux transactions, à la mise à jour des timestamps (`updatedAt`), et à la suppression des enregistrements (#242, #251, #235).
- **Améliorations du filtrage et du tri** : Divers correctifs pour améliorer le filtrage des données et le tri des champs (#205, #219, #213).

### Autres améliorations :
- **Support des workflows avec des variables contextuelles à partir de déclencheurs de modèles** (#284).
- **Améliorations de la gestion des plugins** : Ajout de la possibilité d'installer des plugins et une meilleure gestion des erreurs (#211, #222).
- **Améliorations du schéma de données** : Prise en charge du tri dans les champs de collection et de l'ajout de nouveaux opérateurs pour les requêtes (#207, #233).
- **Amélioration de l'interface Kanban** : La fonctionnalité Kanban a été améliorée avec une nouvelle version (#223, #230).
- **Amélioration de la gestion des journaux d'action** : Ajout d'un modèle de journal d'action pour suivre les modifications (#239).

## Commits
- **Fixes divers** : Plusieurs corrections de dépendances et de fichiers de configuration (`yarn.lock`) pour garantir une meilleure gestion des packages et des dépendances (#7a7eb0c, #e226f04).
- **Amélioration de la vue du schéma d'action** : Amélioration de l'initialisation des schémas d'action (#590ca26).
- **Amélioration du texte enrichi** : Ajout de la fonctionnalité de texte enrichi (Rich Text) avec un composant dédié (#5b41b33).
  
## Principales améliorations :
- **Plugin Workflow** : Un des ajouts majeurs de cette version, avec une refonte du plugin de workflow, permettant la gestion des actions et des processus automatisés dans l'application.
- **Composants UI améliorés** : Nouvelles options de composants UI pour enrichir l'interface utilisateur, y compris des champs de formulaire avancés (Markdown, DatePicker, InputNumber, etc.).
- **Gestion des erreurs améliorée** : La gestion des erreurs dans les plugins et workflows a été renforcée, améliorant la robustesse de l'application.
- **Mise à jour des plugins et des actions** : Des plugins tels que `acl`, `workflow` et des actions comme la gestion des rôles et des permissions ont été refactorisés pour plus de flexibilité et d'intégration.

En résumé, cette version v0.6 de **NocoBase** apporte des fonctionnalités puissantes comme le plugin Workflow, une gestion améliorée des ACL, de nouveaux composants UI et des corrections de bugs importants. Elle vise à améliorer la gestion des processus métier automatisés et à offrir une interface plus riche et plus flexible.
