# Plusieurs-à-Plusieurs

Dans un système d'inscription à des cours, il y a deux entités : les étudiants et les cours. Un étudiant peut s'inscrire à plusieurs cours, et un cours peut avoir plusieurs étudiants inscrits, ce qui constitue une relation plusieurs-à-plusieurs. Dans une base de données relationnelle, pour représenter la relation plusieurs-à-plusieurs entre les étudiants et les cours, une collection intermédiaire, comme une collection d'inscriptions, est généralement utilisée. Cette collection peut enregistrer quels cours chaque étudiant a choisis et quels étudiants se sont inscrits dans chaque cours. Cette conception représente efficacement la relation plusieurs-à-plusieurs entre les étudiants et les cours.

Diagramme ER :

![alt text](https://static-docs.nocobase.com/0e9921228e1ee375dc639431bb89782c.png)

Configuration des champs :

![alt text](https://static-docs.nocobase.com/8e2739ac5d44fb46f30e2da42ca87a82.png)

## Description des paramètres

### Collection source

La collection source, dans laquelle le champ actuel réside.

### Collection cible

La collection cible, qui sera associée à la collection source.

### Collection intermédiaire

La collection intermédiaire, utilisée lorsqu'il existe une relation plusieurs-à-plusieurs entre deux entités. La collection intermédiaire possède deux clés étrangères qui sont utilisées pour maintenir l'association entre les deux entités.

### Clé source

Le champ dans la collection source référencé par la clé étrangère. Il doit être unique.

### Clé étrangère 1

Le champ dans la collection intermédiaire qui établit l'association avec la collection source.

### Clé étrangère 2

Le champ dans la collection intermédiaire qui établit l'association avec la collection cible.

### Clé cible

Le champ dans la collection cible qui est référencé par la clé étrangère. Il doit être unique.

### ON DELETE

ON DELETE fait référence aux règles appliquées aux références de clés étrangères dans les collections enfant associées lorsque des enregistrements de la collection parent sont supprimés. Il s'agit d'une option utilisée lors de la définition d'une contrainte de clé étrangère. Les options courantes ON DELETE comprennent :

- **CASCADE** : Lorsque l'enregistrement dans la collection parent est supprimé, tous les enregistrements associés dans la collection enfant sont automatiquement supprimés.
- **SET NULL** : Lorsque l'enregistrement dans la collection parent est supprimé, les valeurs de clé étrangère dans les enregistrements associés de la collection enfant sont définies sur NULL.
- **RESTRICT** : L'option par défaut, elle empêche la suppression d'un enregistrement dans la collection parent s'il y a des enregistrements associés dans la collection enfant.
- **NO ACTION** : Similaire à RESTRICT, elle empêche la suppression d'un enregistrement dans la collection parent s'il y a des enregistrements associés dans la collection enfant.
