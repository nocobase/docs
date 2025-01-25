# Un-à-Plusieurs

La relation entre une classe et ses étudiants est un exemple de relation un-à-plusieurs : une classe peut avoir plusieurs étudiants, mais chaque étudiant appartient à une seule classe.

Diagramme ER :

![alt text](https://static-docs.nocobase.com/9475f044d123d28ac8e56a077411f8dc.png)

Configuration des champs :

![alt text](https://static-docs.nocobase.com/a608ce54821172dad7e8ab760107ff4e.png)

## Description des paramètres

### Collection source

La collection source, dans laquelle le champ actuel réside.

### Collection cible

La collection cible, qui sera associée à la collection source.

### Clé source

Le champ dans la collection source qui est référencé par la clé étrangère. Il doit être unique.

### Clé étrangère

Le champ dans la collection cible qui est utilisé pour établir l'association entre les deux collections.

### Clé cible

Le champ dans la collection cible utilisé pour afficher chaque enregistrement de ligne dans le bloc de relation, généralement un champ unique.

### ON DELETE

ON DELETE fait référence aux règles appliquées aux références de clés étrangères dans les collections enfant associées lorsque des enregistrements de la collection parent sont supprimés. Il s'agit d'une option utilisée lors de la définition d'une contrainte de clé étrangère. Les options courantes ON DELETE comprennent :

- **CASCADE** : Lorsque l'enregistrement dans la collection parent est supprimé, tous les enregistrements associés dans la collection enfant sont automatiquement supprimés.
- **SET NULL** : Lorsque l'enregistrement dans la collection parent est supprimé, les valeurs de clé étrangère dans les enregistrements associés de la collection enfant sont définies sur NULL.
- **RESTRICT** : L'option par défaut, elle empêche la suppression d'un enregistrement dans la collection parent s'il y a des enregistrements associés dans la collection enfant.
- **NO ACTION** : Similaire à RESTRICT, elle empêche la suppression d'un enregistrement dans la collection parent s'il y a des enregistrements associés dans la collection enfant.
