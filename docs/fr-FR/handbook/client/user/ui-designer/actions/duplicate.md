# **Dupliquer**

L'opération de duplication permet aux utilisateurs de dupliquer une ligne de données pour créer de nouveaux enregistrements, offrant deux méthodes : **duplication directe** et **copie dans le formulaire et continuation de la saisie**.

## Dupliquer Directement

![Dupliquer Directement](https://static-docs.nocobase.com/2c0ac5d1a539de4b72b49b7d966d8c09.png)

- Par défaut, les données sont copiées directement.
- **Table de données cible** : Il s'agit de la table dans laquelle les données copiées seront ajoutées. En cas d'héritage, elles peuvent être copiées dans une sous-table. Cependant, la duplication directe n'ajoute les données qu'à la table actuelle.
- **Champs de modèle** : Ceux-ci spécifient les champs à copier, permettant une sélection complète. Cette configuration est obligatoire.

Une fois la configuration terminée, cliquez simplement sur le bouton pour dupliquer les données.

## Copier dans le Formulaire et Continuer la Saisie

Les champs de modèle que vous configurez rempliront le formulaire avec des valeurs par défaut, que vous pouvez modifier avant la soumission.

Vous pouvez choisir soit la table actuelle, soit une sous-table comme table cible pour ajouter les données copiées.

![Copier dans le Formulaire](https://static-docs.nocobase.com/a072aa572fd0a0fe643eadf95471da2a.png)

### Configurer les Champs de Modèle

Les champs de modèle serviront de valeurs par défaut dans le formulaire, incluant uniquement les valeurs des champs sélectionnés.

![Configurer les Champs de Modèle](https://static-docs.nocobase.com/8032fa2025180ade275da55b97774b4d.png)

La relation "Waybill" (o2m) est dupliquée. Ajustez son composant de champ en un sous-formulaire, où vous pouvez configurer les champs du sous-formulaire.

![Relation Waybill](https://static-docs.nocobase.com/b13c9287bae8601646727a2e78b81be7.png)

### Synchroniser les Champs du Formulaire

Après avoir configuré le formulaire, cliquez sur le bouton de synchronisation des champs du formulaire. Cela sélectionnera automatiquement tous les champs configurés dans le formulaire (notez que chaque fois que la configuration du champ de formulaire est modifiée, elle doit être synchronisée à nouveau). Après la synchronisation, vous pouvez personnaliser davantage les champs du modèle.

![Synchroniser les Champs du Formulaire](https://static-docs.nocobase.com/156b6d8d741521e63d12e49092414d58.png)

En cliquant sur le bouton "Dupliquer", une fenêtre contextuelle s'ouvrira, et les données du modèle rempliront le formulaire avec les valeurs par défaut. Vous pourrez ensuite modifier les données avant la soumission pour compléter le processus de duplication.

![Exemple d'Opération de Duplication](https://static-docs.nocobase.com/1c0a0ae0c59971f48b2282a68831d44b.png)

L'exemple complet ci-dessous montre comment configurer l'opération de duplication dans une liste de commandes.

![Exemple de Duplication dans la Liste de Commandes](https://static-docs.nocobase.com/fa8a89abf0ba136df04b6d0d838eae4e.gif)

## Explication des Différents, Références et Préchargements

Les différents champs (avec différents types de relations) suivent des logiques de traitement distinctes, telles que duplication, référence et préchargement. L'ajustement des composants de champ dans les champs de relation influence également la logique de traitement. Par exemple, **Select** et **Record Picker** gèrent les relations de référence, tandis que **Sub-form** et **Sub-table** gèrent les relations de copie.

### Dupliquer

- Les champs standard sont dupliqués.
- Les champs de relation **hasOne** et **hasMany** ne peuvent être que copiés (ces types de champs de relation ne peuvent pas utiliser **Select** ou **Record Picker** comme composants de champ, mais doivent utiliser **Sub-form** ou **Sub-table**).
  - Les modifications apportées aux composants de champ de **hasOne** et **hasMany** n'altèrent pas la logique de traitement (copie).
  - Dans les champs de relation copiés, tous les sous-champs sont sélectionnables.

### Référence

- **belongsTo** et **belongsToMany** sont des références.
- **Les références peuvent être converties en copies**. Par exemple, si le composant de champ est changé de **select** à **sub-form**, la relation passe de référence à copie (une fois convertie, tous les sous-champs deviennent sélectionnables).

### Préchargement

- Les champs de relation dans les champs de référence sont préchargés.
- Ces champs de relation préchargés peuvent passer en référence ou en copie après des ajustements des composants de champ.

## À propos de "Tout Sélectionner"

- Tous les champs de copie sont sélectionnés.
- Tous les champs de référence sont sélectionnés.

## Logique de Traitement des Données du Modèle

- Tous les champs de clés étrangères dans les relations sont filtrés.
- Pour les relations copiées, les champs de clés primaires sont également filtrés.
- Les références et les préchargements conservent leurs champs de clés primaires.

## Comprendre la Synchronisation des Champs du Formulaire

Dans la plupart des cas, les configurations de formulaire impliquent un grand nombre de champs. La gestion de tels formulaires complexes manuellement peut être fastidieuse. Pour rationaliser ce processus, le bouton **Synchroniser les Champs du Formulaire** a été introduit. Cette fonctionnalité analyse automatiquement les configurations des champs du formulaire et applique la logique de copie appropriée—qu'il s'agisse de **copie**, **référence** ou **préchargement**—en fonction des types de champs et des composants de champs de relation. Les champs déjà configurés sont sélectionnés par défaut.

Après toute modification des configurations des champs du formulaire, le système ne met pas automatiquement à jour ces changements. Par conséquent, les utilisateurs doivent manuellement cliquer sur le bouton **Synchroniser les Champs du Formulaire** pour appliquer la dernière configuration aux paramètres du modèle.
