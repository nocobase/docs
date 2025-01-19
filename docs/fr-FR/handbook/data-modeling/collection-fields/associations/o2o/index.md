# Un-à-Un

Dans la relation entre les employés et leurs profils personnels, chaque employé ne peut avoir qu'un seul profil personnel, et chaque profil personnel ne peut correspondre qu'à un seul employé. Dans ce cas, la relation entre l'employé et le profil personnel est un-à-un.

La clé étrangère dans une relation un-à-un peut être placée soit dans la collection source, soit dans la collection cible. Si elle représente « avoir un », la clé étrangère est plus appropriée dans la collection cible ; si elle représente « appartenir à », alors la clé étrangère est mieux placée dans la collection source.

Par exemple, dans le cas mentionné ci-dessus, où un employé a seulement un profil personnel et le profil personnel appartient à l'employé, il est approprié de placer la clé étrangère dans la collection du profil personnel.

## Un-à-Un (Avoir un)

Cela signifie qu'un employé possède un enregistrement de profil personnel.

Relation ER

![alt text](https://static-docs.nocobase.com/4359e128936bbd7c9ff51bcff1d646dd.png)

Configuration des champs

![alt text](https://static-docs.nocobase.com/7665a87e094b4fb50c9426a108f87105.png)

## Un-à-Un (Relation d'Appartenance)

Cela signifie qu'un profil personnel appartient à un employé spécifique.

Relation ER

![](https://static-docs.nocobase.com/31e7cc3e630220cf1e98753ca24ac72d.png)

Configuration des champs

![alt text](https://static-docs.nocobase.com/4f09eeb3c7717d61a349842da43c187c.png)

## Description des paramètres

### Collection source

La collection source, dans laquelle le champ actuel se trouve.

### Collection cible

La collection cible, celle qui est liée.

### Clé étrangère

Utilisée pour établir une relation entre deux collections. Dans une relation un-à-un, la clé étrangère peut être placée soit dans la collection source, soit dans la collection cible. Si elle représente « avoir un », la clé étrangère est mieux placée dans la collection cible ; si elle représente « appartenir à », la clé étrangère est mieux placée dans la collection source.

### Clé source <- Clé étrangère (Clé étrangère dans la collection cible)

Le champ référencé par la contrainte de clé étrangère doit être unique. Lorsque la clé étrangère est placée dans la collection cible, cela indique « avoir un ».

### Clé cible <- Clé étrangère (Clé étrangère dans la collection source)

Le champ référencé par la contrainte de clé étrangère doit être unique. Lorsque la clé étrangère est placée dans la collection source, cela indique une relation d'appartenance.

### ON DELETE

ON DELETE fait référence aux règles d'action pour la référence de clé étrangère dans la collection enfant liée lorsqu'on supprime des enregistrements dans la collection parent. C'est une option définie lors de l'établissement d'une contrainte de clé étrangère. Les options courantes ON DELETE incluent :

- **CASCADE** : Lorsqu'un enregistrement de la collection parent est supprimé, tous les enregistrements associés dans la collection enfant sont automatiquement supprimés.
- **SET NULL** : Lorsqu'un enregistrement de la collection parent est supprimé, la valeur de clé étrangère dans la collection enfant associée est définie sur NULL.
- **RESTRICT** : L'option par défaut, où la suppression d'un enregistrement dans la collection parent est refusée s'il y a des enregistrements associés dans la collection enfant.
- **NO ACTION** : Semblable à RESTRICT, la suppression d'un enregistrement dans la collection parent est refusée s'il y a des enregistrements associés dans la collection enfant.
