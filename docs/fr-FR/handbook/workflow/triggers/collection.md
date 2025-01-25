# Événement de collection

Les types de déclencheurs d'événements de collection écouteront les événements d'ajout, de suppression et de mise à jour des enregistrements de la collection. Lorsqu'une action sur un enregistrement de collection se produit et répond aux conditions configurées, le workflow correspondant sera déclenché. Par exemple, la réduction de l'inventaire des produits après l'ajout d'une nouvelle commande, l'attente d'une revue manuelle après l'ajout d'un commentaire, etc.

## Utilisation de base

Il existe plusieurs types de modifications sur la collection :

1. Après l'ajout d'un enregistrement.
2. Après la mise à jour d'un enregistrement.
3. Après l'ajout ou la mise à jour d'un enregistrement.
4. Après la suppression d'un enregistrement.

![Collection Events_Trigger Timing Selection](https://static-docs.nocobase.com/81275602742deb71e0c830eb97aa612c.png)

Vous pouvez choisir le moment du déclenchement en fonction des besoins de l'entreprise. Lorsque le type de modification sélectionné inclut la mise à jour d'un enregistrement, vous pouvez également limiter les champs qui ont changé. Le déclencheur ne sera satisfait que lorsque les champs sélectionnés changeront. Si aucun champ n'est sélectionné, cela signifie que toute modification de champ déclenchera l'événement.

![Collection Events_Selection of Fields that Have Changed](https://static-docs.nocobase.com/874a1475f01298b3c00267b2b4674611.png)

Plus en détail, des conditions peuvent être configurées pour chaque champ de l'enregistrement déclenché. L'événement ne se déclenche que lorsque les conditions des champs sont remplies.

![Collection Events_Configuring Conditions for Data Satisfying](https://static-docs.nocobase.com/264ae3835dcd75cee0eef7812c11fe0c.png)

Après que l'événement de collection soit déclenché, l'enregistrement source de l'événement sera injecté dans le plan d'exécution en tant que données contextuelles pour que les nœuds suivants l'utilisent comme variables. Cependant, lorsque les nœuds suivants ont besoin d'utiliser les champs d'association de cet enregistrement, un préchargement des champs d'association doit d'abord être configuré. Les champs d'association sélectionnés seront injectés dans le contexte après le déclenchement et pourront être sélectionnés et utilisés par les chemins.

## Astuces associées

### Le déclenchement des actions par lot de données n'est pas pris en charge

Les événements de collection ne prennent pas en charge le déclenchement d'actions par lot de données pour l'instant. Par exemple, lors de l'ajout d'un enregistrement d'article et de l'ajout simultané de plusieurs enregistrements de balises pour l'article (données de relation plusieurs-à-plusieurs), seul le workflow pour l'ajout de l'article sera déclenché, et les workflows pour l'ajout de plusieurs balises simultanément ne seront pas déclenchés. Pour l'association ou l'ajout d'enregistrements de relation plusieurs-à-plusieurs, le workflow de la collection intermédiaire ne sera pas non plus déclenché.

### Les opérations de données en dehors de l'application NocoBase ne déclencheront pas d'événements

Les actions de données sur les collections via des appels API HTTP à l'interface de l'application peuvent également déclencher les événements correspondants. Cependant, si les modifications de données ne sont pas effectuées via l'application NocoBase mais directement via des opérations sur la base de données, les événements correspondants ne seront pas déclenchés. Par exemple, les déclencheurs dans la base de données elle-même ne seront pas associés aux workflows de l'application.

De plus, l'utilisation du nœud SQL pour opérer sur la base de données revient à opérer directement sur la base de données et ne déclenchera pas d'événements de collection.

### Sources de données externes

À partir de `0.20`, le workflow a commencé à prendre en charge les sources de données externes. Si un plugin de source de données externe est utilisé et qu'un événement de collection est configuré pour une source de données externe, tant que l'opération de données sur cette source de données est effectuée dans l'application (ajout, mise à jour, et opérations de données de workflow, etc.), l'événement de collection correspondant peut être déclenché. Cependant, si le changement de données est effectué par d'autres systèmes ou directement dans la base de données externe, l'événement de collection ne sera pas déclenché.

## Exemple

Prenons un scénario d'exemple de calcul du prix total et de déduction de l'inventaire après l'ajout d'une commande.

Tout d'abord, créons la collection de produits et la collection de commandes, et le modèle de données est comme suit :

| Nom du champ    | Type de champ    |
| --------------- | ---------------- |
| Nom du produit  | Texte sur une ligne |
| Prix            | Nombre           |
| Inventaire      | Entier           |

| Nom du champ    | Type de champ    |
| --------------- | ---------------- |
| Numéro de commande | Numéro automatique |
| Produit de commande  | Plusieurs à Un (Produit) |
| Prix total de la commande | Nombre |

Ajoutons ensuite des données de produits de base :

| Nom du produit   | Prix | Inventaire |
| ---------------- | ---- | ---------- |
| iPhone 14 Pro    | 7999 | 10         |
| iPhone 13 Pro    | 5999 | 0          |

Ensuite, créons un workflow basé sur l'événement de collection de la commande :

![Collection Events_Example_Add Order Trigger](https://static.docs.nocobase.com/094392a870dddc65aeb20357f62ddc08.png)

Voici plusieurs éléments de configuration :

- Collection de données : Sélectionnez la table "Commande".
- Déclencheur sur : Sélectionnez le déclencheur "Après ajout de données".
- Condition : Laissez vide.
- Précharger les associations : Cochez "Produit".

Ensuite, configurez les autres nœuds en fonction de la logique du workflow, vérifiez si l'inventaire du produit est supérieur à 0, et déduisez l'inventaire si c'est le cas, sinon supprimez la commande car elle est invalide :

![Collection Events_Example_Add Order Workflow Arrangement](https://static.docs.nocobase.com/7713ea1aaa0f52a0dc3c92aba5e58f05.png)

La configuration des nœuds sera détaillée dans la documentation des types spécifiques.

Activez le workflow et testez-le en ajoutant une commande via l'interface utilisateur. Après avoir passé une commande pour l' "iPhone 14 Pro", l'inventaire du produit correspondant sera réduit à 9. Cependant, si une commande est passée pour l' "iPhone 13 Pro", la commande sera supprimée en raison de l'inventaire insuffisant.

![Collection Events_Example_Add Order Execution Result](https://static.docs.nocobase.com/24cbe51e24ba4804b3bd48d99415c54f.png)
