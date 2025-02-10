# Plusieurs-à-Un

Dans une base de données de bibliothèque, il y a deux entités : les livres et les auteurs. Un auteur peut écrire plusieurs livres, mais chaque livre a généralement un seul auteur. Dans ce cas, la relation entre les auteurs et les livres est de type plusieurs-à-un. Plusieurs livres peuvent être associés au même auteur, mais chaque livre ne peut avoir qu'un seul auteur.

Diagramme ER :

![alt text](https://static-docs.nocobase.com/eaeeac974844db05c75cf0deeedf3652.png)

Configuration des champs :

![alt text](https://static-docs.nocobase.com/3b4484ebb98d82f832f3dbf752bd84c9.png)

## Description des paramètres

### Collection source

La collection source, dans laquelle le champ actuel réside.

### Collection cible

La collection cible, qui sera associée à la collection source.

### Clé étrangère

Le champ dans la collection source qui est utilisé pour établir l'association entre les deux collections.

### Clé cible

Le champ dans la collection cible qui est référencé par la clé étrangère. Il doit être unique.

### ON DELETE

ON DELETE fait référence aux règles appliquées aux références de clés étrangères dans les collections enfant associées lorsque des enregistrements de la collection parent sont supprimés. Il s'agit d'une option utilisée lors de la définition d'une contrainte de clé étrangère. Les options courantes ON DELETE comprennent :

- **CASCADE** : Lorsque l'enregistrement dans la collection parent est supprimé, tous les enregistrements associés dans la collection enfant sont automatiquement supprimés.
- **SET NULL** : Lorsque l'enregistrement dans la collection parent est supprimé, les valeurs de clé étrangère dans les enregistrements associés de la collection enfant sont définies sur NULL.
- **RESTRICT** : L'option par défaut, elle empêche la suppression d'un enregistrement dans la collection parent s'il y a des enregistrements associés dans la collection enfant.
- **NO ACTION** : Similaire à RESTRICT, elle empêche la suppression d'un enregistrement dans la collection parent s'il y a des enregistrements associés dans la collection enfant.
