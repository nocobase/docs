# Hand book

## **Centre de gestion**

##### **Gestion des rôles**

L'application propose deux rôles prédéfinis : "Admin" et "Membre", chacun avec des paramètres de permissions par défaut adaptés à leurs fonctionnalités respectives.

![](https://static-docs.nocobase.com/da7083c67d794e23dc6eb0f85b1de86c.png)

##### **Ajouter, supprimer et modifier des rôles**

L'identifiant de rôle, un identifiant unique du système, permet de personnaliser les rôles par défaut, mais les rôles prédéfinis par le système ne peuvent pas être supprimés.

![](https://static-docs.nocobase.com/35f323b346db4f9f12f9bee4dea63302.png)

##### **Définir le rôle par défaut**

Le rôle par défaut est celui qui est automatiquement attribué aux nouveaux utilisateurs si aucun rôle spécifique n'est fourni lors de leur création.

![](https://static-docs.nocobase.com/f41bba7ff55ca28715c486dc45bc1708.png)

##### **Configurer les permissions**

###### **Paramètres de permissions généraux**

![](https://static-docs.nocobase.com/119a9650259f9be71210121d0d3a435d.png)

1. **Permet de configurer l'interface** : Cette permission détermine si un utilisateur peut configurer l'interface. Lorsqu'elle est activée, un bouton de configuration de l'interface apparaît. Le rôle "admin" a cette permission activée par défaut.
2. **Permet d'installer, activer, désactiver les plugins** : Cette permission détermine si un utilisateur peut activer ou désactiver des plugins. Lorsqu'elle est active, l'utilisateur a accès à l'interface du gestionnaire de plugins. Le rôle "admin" a cette permission activée par défaut.
3. **Permet de configurer les plugins** : Cette permission permet à l'utilisateur de configurer les paramètres des plugins ou de gérer les données backend des plugins. Le rôle "admin" a cette permission activée par défaut.
4. **Permet de vider le cache, redémarrer l'application** : Cette permission est liée aux tâches de maintenance du système telles que vider le cache et redémarrer l'application. Une fois activée, des boutons d'opération correspondants apparaissent dans le centre personnel. Cette permission est désactivée par défaut.
5. **Les nouveaux éléments de menu sont accessibles par défaut** : Les menus nouvellement créés sont accessibles par défaut, et ce paramètre est activé par défaut.

###### **Permissions d'action**

Les permissions d'action s'appliquent de manière universelle à toutes les tables de données et sont classées par type d'opération. Ces permissions peuvent être configurées en fonction de la portée des données : toutes les données ou uniquement les données de l'utilisateur. La première permet des opérations sur l'ensemble de la table de données, tandis que la seconde restreint les opérations aux données pertinentes pour l'utilisateur.

##### **Permissions d'opération sur les tables de données**

![](https://static-docs.nocobase.com/6a6e0281391cecdea5b5218e6173c5d7.png)

![](https://static-docs.nocobase.com/9814140434ff9e1bf028a6c282a5a165.png)

Les permissions d'opération sur les collections permettent de peaufiner les permissions d'action en configurant l'accès aux ressources au sein de chaque table de données. Ces permissions incluent :

1. **Permissions d'action** : Cela inclut les actions ajouter, afficher, modifier, supprimer, exporter et importer. Les permissions sont définies en fonction de la portée des données :
   - **Tous les enregistrements** : Accorde à l'utilisateur la possibilité d'effectuer des actions sur tous les enregistrements de la table de données.
   - **Propre enregistrements** : Restreint l'utilisateur à effectuer des actions uniquement sur les enregistrements qu'il a créés.

2. **Permissions sur les champs** : Les permissions sur les champs permettent de définir des permissions spécifiques pour chaque champ lors de différentes opérations. Par exemple, certains champs peuvent être configurés en lecture seule, sans possibilité de modification.

##### **Permissions de menu**

Les permissions de menu contrôlent l'accès en fonction des éléments de menu.

![](https://static-docs.nocobase.com/28eddfc843d27641162d9129e3b6e33f.png)

##### **Permissions de configuration des plugins**

Les permissions de configuration des plugins contrôlent la possibilité de configurer des paramètres spécifiques des plugins. Lorsqu'elles sont activées, l'interface de gestion du plugin correspondante apparaît dans le centre de gestion.

![](https://static-docs.nocobase.com/5a742ae20a9de93dc2722468b9fd7475.png)

#### **Centre personnel**

##### **Changement de rôle**

Les utilisateurs peuvent se voir attribuer plusieurs rôles et passer de l'un à l'autre dans le centre personnel. Le rôle par défaut lors de la connexion est déterminé par le rôle le plus récemment sélectionné (ce rôle est mis à jour à chaque changement) ou, s'il n'est pas applicable, le premier rôle (le rôle par défaut du système).

![](https://static-docs.nocobase.com/e331d11ec1ca3b8b7e0472105b167819.png)

#### **Application dans l'interface utilisateur (UI)**

##### **Permissions des blocs de données**

La visibilité des blocs de données dans une table de données est contrôlée par les permissions d'opération de vue, les configurations individuelles ayant priorité sur les paramètres globaux.

Par exemple, dans les permissions globales, le rôle "admin" a un accès complet, mais la table des commandes peut avoir des permissions individuelles configurées, rendant certains blocs invisibles.

![](https://static-docs.nocobase.com/3d026311739c7cf5fdcd03f710d09bc4.png)

![](https://static-docs.nocobase.com/a88caba1cad47001c1610bf402a4a2c1.png)

###### **Permissions sur les champs**

- **Voir** : Détermine si des champs spécifiques sont visibles au niveau des champs, permettant de contrôler quels champs sont visibles pour certains rôles au sein de la table des commandes.

![](https://static-docs.nocobase.com/30dea84d984d95039e6f7b180955a6cf.png)

Dans l'UI, seuls les champs avec des permissions configurées sont visibles dans le bloc de la table des commandes. Les champs système (Id, CreatedAt, LastUpdatedAt) conservent les permissions de visibilité même sans configuration spécifique.

![](https://static-docs.nocobase.com/40cc49b517efe701147fd2e799e79dcc.png)

- **Modifier** : Contrôle si les champs peuvent être modifiés et enregistrés (mis à jour).

  Dans l'UI, seuls les champs avec des permissions de modification sont affichés dans le bloc de formulaire d'opération de modification de la table des commandes.

![](https://static-docs.nocobase.com/6531ca4122f0887547b5719e2146ba93.png)

De même, seuls les champs avec des permissions d'ajout sont affichés dans le bloc de formulaire d'opération d'ajout dans la table des commandes.

![](https://static-docs.nocobase.com/12982450c311ec1bf87eb9dc5fb04650.png)

![](https://static-docs.nocobase.com/1dbe559a9579c2e052e194e50edc74a7.gif)

- **Ajouter** : Détermine si des champs peuvent être ajoutés (créés).

![](https://static-docs.nocobase.com/3ab1bbe41e61915e920fd257f2e0da7e.png)

Dans l'UI, seuls les champs avec des permissions d'ajout sont affichés dans le bloc de formulaire d'opération d'ajout de la table des commandes.

![](https://static-docs.nocobase.com/8d0c07893b63771c428974f9e126bf35.png)

- **Exporter** : Contrôle si les champs peuvent être exportés.
- **Importer** : Contrôle si les champs peuvent être importés.

##### **Permissions d'opération**

Les permissions configurées individuellement ont la priorité la plus élevée. Si des permissions spécifiques sont configurées, elles remplacent les paramètres globaux ; sinon, les paramètres globaux sont appliqués.

- **Ajouter nouveau** : Contrôle si le bouton d'opération d'ajout est visible dans un bloc.

![](https://static-docs.nocobase.com/2e3123b5dbc72ae78942481360626629.png)

Lorsque l'opération d'ajout est autorisée, le bouton d'ajout apparaît dans la zone d'opération du bloc de la table des commandes dans l'UI.

![](https://static-docs.nocobase.com/f0458980d450544d94c73160d75ba96c.png)

- **Voir** : Détermine si le bloc de données est visible.

![](https://static-docs.nocobase.com/6e4a1e6ea92f50bf84959dedbf1d5683.png)

Dans l'UI, les blocs de données d'autres tables de données restent cachés, mais le bloc de la table des commandes est affiché si des permissions individuelles sont configurées.

![](https://static-docs.nocobase.com/f2dd142a40fe19fb657071fd901b2291.png)

![](https://static-docs.nocobase.com/b92f0edc51a27b52e85cdeb76271b936.gif)

- **Modifier** : Contrôle si le bouton d'opération de modification est affiché dans un bloc.

![](https://static-docs.nocobase.com/fb1c0290e2a833f1c2b415c761e54c45.gif)

Les permissions d'opération peuvent être affinées en définissant la portée des données.

![](https://static-docs.nocobase.com/b082308f62a3a9084cab78a370c14a9f.gif)

- **Supprimer** : Contrôle si le bouton d'opération de suppression est visible dans un bloc.

![](https://static-docs.nocobase.com/021c9e79bcc1ad221b606a9555ff5644.gif)

- **Exporter** : Contrôle si le bouton d'opération d'exportation est visible dans un bloc.
- **Importer** : Contrôle si le bouton d'opération d'importation est visible dans un bloc.

#### Permissions de relation

##### Lorsqu'il est utilisé comme champ

- La visibilité d'un champ de relation est déterminée par les permissions définies sur les champs de la table source. Ces permissions contrôlent si l'ensemble du composant de champ de relation apparaît dans l'interface utilisateur.

Par exemple, dans la table des commandes, le champ de relation "Client" est restreint aux permissions de vue et d'importation/exportation, comme illustré ci-dessous :

![Exemple de permissions de relation](https://static-docs.nocobase.com/d0dc797aae73feeabc436af285dd4f59.png)

Dans l'UI, cette configuration garantit que le champ de relation "Client" n'apparaît pas dans les sections d'opération d'ajout et de modification de la table des commandes.

Le processus complet de configuration est illustré ci-dessous :

![Processus de configuration exemple](https://static-docs.nocobase.com/372f8a4f414feea097c23b2ba326c0ef.gif)

- Les permissions des champs dans le composant de champ de relation (comme ceux trouvés dans les sous-tables ou sous-formulaires) sont déterminées par les permissions de la table de données cible.

Lorsqu'un champ de relation est un sous-formulaire :

Dans ce cas, comme montré, le champ de relation "Client" dans la table des commandes se voit attribuer des permissions complètes, tandis que la table "Client" elle-même est configurée en lecture seule.

Les permissions pour la table des commandes sont définies comme suit, accordant un accès complet au champ de relation "Client" :

![Permissions de la table des commandes](https://static-docs.nocobase.com/3a3ab9722f14a7b3a35361219d67fa40.png)

Les permissions pour la table "Client" sont configurées pour permettre un accès en lecture seule :

![Permissions de la table Client](https://static-docs.nocobase.com/46704d179b931006a9a22852e6c5089e.png)

Dans l'UI, cette configuration entraîne la visibilité du champ de relation "Client" dans la section de la table des commandes. Cependant, lorsque l'interface est basculée vers un sous-formulaire (où les champs dans le sous-formulaire sont visibles dans les détails mais cachés pendant les opérations d'ajout ou de modification), le comportement change en conséquence.

Le processus complet de configuration est montré ci-dessous :

![Processus de configuration exemple](https://static-docs.nocobase.com/932dbf6ac46e36ee357ff3e8b9ea1423.gif)

Un affinage supplémentaire des permissions des champs dans les sous-formulaires permet de contrôler spécifiquement chaque champ.

Par exemple, comme montré ci-dessous, la table Client peut être configurée de sorte que le champ "Nom du client" ne soit ni visible ni modifiable :

![Permissions des champs de la table Client](https://static-docs.nocobase.com/e7b875521cbc4e28640f027f36d0413c.png)

Le processus complet de configuration de ce paramètre est illustré ici :

![Processus de configuration exemple](https://static-docs.nocobase.com/7a07e68c2fe2a13f0c2cef19be489264.gif)

Lorsqu'il s'agit d'une sous-table au lieu d'un sous-formulaire, les principes de configuration restent les mêmes :

Comme illustré, le champ de relation "expédition" dans la table des commandes a des permissions complètes, tandis que la collection d'expédition elle-même est définie en lecture seule.

Dans l'UI, cette configuration permet au champ de relation d'être visible. Cependant, lorsque l'interface est basculée vers une sous-table (où les champs dans la sous-table sont visibles lors des opérations de consultation mais cachés lors des opérations d'ajout ou de modification), le comportement s'ajuste en conséquence.

![Permissions du champ de relation expédition](https://static-docs.nocobase.com/fd4b7d81cdd765db789d9c85cf9dc324.gif)

Un affinage des permissions des champs dans les sous-collections permet également de contrôler spécifiquement chaque champ.

![Permissions des champs de sous-table](https://static-docs.nocobase.com/51d70a624cb2b0366e421bcdc8abb7fd.gif)

##### Lorsqu'il est utilisé comme bloc

- La visibilité d'un bloc de relation est régie par les permissions définies sur la table cible associée au champ de relation, indépendamment des permissions sur le champ de relation lui-même.

Par exemple, la visibilité du bloc de relation "Client" est contrôlée par les permissions configurées pour la table Client :

![Visibilité du bloc de relation](https://static-docs.nocobase.com/633ebb301767430b740ecfce11df47b3.gif)

- Les champs au sein d'un bloc de relation sont contrôlés par les permissions définies sur les champs de la table cible.

Comme illustré ci-dessous, la table Client peut être configurée pour permettre uniquement la visualisation de certains champs :

![Permissions de vue des champs de la table Client](https://static-docs.nocobase.com/35af9426c20911323b17f67f81bac8fc.gif)
