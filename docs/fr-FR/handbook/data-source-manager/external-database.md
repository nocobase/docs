# Vue d'ensemble

## Introduction

Utilisez une base de données externe existante comme source de données. Actuellement, les bases de données externes prises en charge sont MySQL, MariaDB et PostgreSQL.

## Instructions d'utilisation

### Ajouter une base de données externe

Après avoir activé le plugin, vous pouvez le sélectionner et l'ajouter depuis le menu déroulant "Ajouter un nouveau" dans la gestion des sources de données.

![20240507204316](https://static-docs.nocobase.com/20240507204316.png)

Remplissez les informations de la base de données à laquelle vous souhaitez vous connecter.

![20240507204820](https://static-docs.nocobase.com/20240507204820.png)

### Synchronisation des tables de données

Une fois la connexion avec la base de données externe établie, toutes les tables de données dans la source de données seront directement lues. La base de données externe ne prend pas en charge l'ajout direct de tables de données ou la modification de la structure des tables. Si des modifications sont nécessaires, elles peuvent être effectuées via le client de base de données, puis le bouton "Actualiser" peut être cliqué sur l'interface pour synchroniser.

![20240507204725](https://static-docs.nocobase.com/20240507204725.png)

### Configuration des champs

La base de données externe lira automatiquement les champs des tables de données existantes et les affichera. Vous pouvez rapidement consulter et configurer le titre du champ, le type de données (Type de champ) et le type d'interface utilisateur (Interface du champ). Vous pouvez également cliquer sur le bouton "Modifier" pour modifier plus de configurations.

![20240507210537](https://static-docs.nocobase.com/20240507210537.png)

Parce que la base de données externe ne prend pas en charge la modification des structures de tables, le seul type disponible lors de l'ajout de nouveaux champs est le champ de relation. Les champs de relation ne sont pas des champs réels, mais sont utilisés pour établir des connexions entre les tables.

![20240507220140](https://static-docs.nocobase.com/20240507220140.png)

Pour plus de contenu, consultez la section "[Champs de la collection / Vue d'ensemble](/handbook/data-modeling/collection-fields)".

### Mappage des types de champs

NocoBase effectuera automatiquement le mappage des types de données correspondants (Type de champ) et des types d'interface utilisateur (Interface de champ) pour les types de champs de la base de données externe.

- **Type de données (Type de champ)** : Utilisé pour définir le type, le format et la structure des données que le champ peut stocker.
- **Type d'interface utilisateur (Interface de champ)** : Désigne le type de contrôle utilisé pour afficher et saisir les valeurs des champs dans l'interface utilisateur.

Le tableau ci-dessous montre le mappage des types de champs pour PostgreSQL, MySQL/MariaDB vers le Type de données NocoBase et le Type d'interface NocoBase.

| PostgreSQL | MySQL/MariaDB | Type de données NocoBase | Type d'interface NocoBase |
| - | - | - | - |
| BOOLEAN | BOOLEAN<br/>TINYINT(1) | boolean | checkbox <br/> switch |
| SMALLINT<br/>INTEGER<br/>SERIAL<br/>SMALLSERIAL | TINYINT<br/>SMALLINT<br/>MEDIUMINT<br/>INTEGER | integer<br/>boolean<br/>sort | integer<br/>sort<br/>checkbox<br/>switch<br/>select<br/>radioGroup |
| BIGINT<br/>BIGSERIAL | BIGINT | bigInt<br/>sort | integer<br/>sort<br/>checkbox<br/>switch<br/>select<br/>radioGroup<br/>unixTimestamp<br/>createdAt<br/>updatedAt |
| REAL | FLOAT | float | number<br/>percent |
| DOUBLE PRECISION | DOUBLE PRECISION | double | number<br/>percent |
| DECIMAL<br/>NUMERIC | DECIMAL | decimal | number<br/>percent<br/>currency |
| VARCHAR<br/>CHAR | VARCHAR<br/>CHAR | string<br/>password<br/>uuid<br/>nanoid | input<br/>email<br/>phone<br/>password<br/>color<br/>icon<br/>select<br/>radioGroup<br/>uuid<br/>nanoid |
| TEXT | TEXT<br/>TINYTEXT<br/>MEDIUMTEXT<br/>LONGTEXT | text<br/>json | textarea<br/>markdown<br/>vditor<br/>richText<br/>url<br/>json |
| UUID | - | uuid | uuid |
| JSON<br/>JSONB | JSON | json | json |
| TIMESTAMP | DATETIME<br/>TIMESTAMP | date | date<br/>time<br/>createdAt<br/>updatedAt |
| DATE | DATE | dateOnly | datetime |
| TIME | TIME | time | time |
| - | YEAR |  | datetime |
| CIRCEL |  | circle | json<br/>circle |
| PATH<br/>GEOMETRY(LINESTRING) | LINESTRING | lineString | Json<br/>lineString |
| POINT<br/>GEOMETRY(POINT) | POINT | point | json<br/>point |
| POLYGON<br/>GEOMETRY(POLYGON) | POLYGON | polygon | json<br/>polygon |
| GEOMETRY | GEOMETRY |  -  |  -  |
| BLOB | BLOB | blob |  -  |
| ENUM | ENUM | enum | select<br/>radioGroup |
| ARRAY |  -  | array | multipleSelect<br/>checkboxGroup |
| BIT | BIT | - | - |
| SET | SET | set | multipleSelect<br/>checkboxGroup |
| RANGE | - | - | - |

### Types de champs non pris en charge

Les types de champs non pris en charge seront affichés séparément. Ces champs doivent être développés pour leur adaptation avant de pouvoir être utilisés.

![20240507221854](https://static-docs.nocobase.com/20240507221854.png)

### Clé de cible de filtre

Les tables de données affichées sous forme de blocs doivent avoir une clé de cible de filtre configurée. La clé de cible de filtre fait référence à l'utilisation d'un champ spécifique pour filtrer les données, et la valeur du champ doit être unique. Par défaut, la clé de cible de filtre est le champ clé primaire de la table de données. Si c'est une vue ou une table de données sans clé primaire, ou une table de données avec une clé primaire composite, vous devez personnaliser la clé de cible de filtre.

![20240507210230](https://static-docs.nocobase.com/20240507210230.png)

Seules les tables de données ayant défini une clé de cible de filtre peuvent être ajoutées à la page.

![20240507222827](https://static-docs.nocobase.com/20240507222827.png)
