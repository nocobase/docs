# Champs de Relation

Dans NocoBase, les champs de relation ne sont pas des champs réels, mais sont utilisés pour établir des connexions entre les collections. Ce concept est équivalent aux relations dans les bases de données relationnelles.

Dans les bases de données relationnelles, les types de relations les plus courants incluent les suivants :

- [Un-à-Un](./o2o/index.md) : Chaque entité dans deux collections correspond à une seule entité dans l'autre collection. Ce type de relation est généralement utilisé pour stocker différents aspects d'une entité dans des collections séparées afin de réduire la redondance et d'améliorer la cohérence des données.
- [Un-à-Plusieurs](./o2m/index.md) : Chaque entité dans une collection peut être associée à plusieurs entités dans une autre collection. Il s'agit de l'un des types de relation les plus courants. Par exemple, un auteur peut écrire plusieurs articles, mais chaque article ne peut avoir qu'un seul auteur.
- [Plusieurs-à-Un](./m2o/index.md) : Plusieurs entités dans une collection peuvent être associées à une seule entité dans une autre collection. Ce type de relation est également courant dans la modélisation des données. Par exemple, plusieurs étudiants peuvent appartenir à la même classe.
- [Plusieurs-à-Plusieurs](./m2m/index.md) : Plusieurs entités dans deux collections peuvent être associées les unes aux autres. Ce type de relation nécessite généralement une collection intermédiaire pour enregistrer les associations entre les entités. Par exemple, la relation entre les étudiants et les cours : un étudiant peut s'inscrire à plusieurs cours, et un cours peut avoir plusieurs étudiants.

Ces types de relations jouent un rôle important dans la conception de bases de données et la modélisation des données, aidant à décrire des relations et structures de données complexes du monde réel.
