# Champ de Tri

<PluginInfo name="field-sort"></PluginInfo>

## Introduction

Les champs de tri sont utilisés pour trier les enregistrements dans une collection, en prenant en charge le tri par groupe, puis le tri (sort1).

:::warning
Étant donné que le champ de tri est un champ dans la collection actuelle, lorsqu'il est trié par groupe, il ne prend pas en charge le fait qu'un même enregistrement soit divisé en plusieurs groupes.
:::

## Installation

Plugin intégré, aucune installation séparée nécessaire.

## Manuel de l'utilisateur

### Créer un Champ de Tri

![20240409091123_rec_](https://static-docs.nocobase.com/20240409091123_rec_.gif)

Lors de la création de champs de tri, les valeurs de tri seront initialisées :

- Si le tri par groupe n'est pas sélectionné, l'initialisation sera basée sur le champ de clé primaire et le champ de date de création.
- Si le tri par groupe est sélectionné, les données seront d'abord regroupées, puis l'initialisation sera basée sur le champ de clé primaire et le champ de date de création.

:::warning{title="Explication de la cohérence des transactions"}
- Lors de la création d'un champ, si l'initialisation des valeurs de tri échoue, le champ de tri ne sera pas créé ;
- Dans un certain intervalle, si un enregistrement passe de la position A à la position B, les valeurs de tri de tous les enregistrements dans l'intervalle AB changeront. Si l'une d'entre elles échoue, le déplacement échouera et les valeurs de tri des enregistrements associés ne changeront pas.
:::

#### Exemple 1 : Créer le champ sort1

Le champ sort1 n'est pas groupé.

![20240409091510](https://static-docs.nocobase.com/20240409091510.png)

Les champs de tri de chaque enregistrement seront initialisés en fonction du champ de clé primaire et du champ de date de création.

![20240409092305](https://static-docs.nocobase.com/20240409092305.png)

#### Exemple 2 : Créer un champ sort2 basé sur le regroupement par ID de Classe

![20240409092620](https://static-docs.nocobase.com/20240409092620.png)

À ce moment-là, tous les enregistrements de la collection seront d'abord regroupés (par ID de classe), puis le champ de tri (sort2) sera initialisé. Les valeurs initiales de chaque enregistrement sont les suivantes :

![20240409092847](https://static-docs.nocobase.com/20240409092847.png)

### Tri par Glisser-Déposer

Les champs de tri sont principalement utilisés pour trier les enregistrements de blocs par glisser-déposer. Les blocs qui prennent actuellement en charge le tri par glisser-déposer incluent les tableaux et les tableaux de bord.

:::warning
- Lorsqu'un même champ de tri est utilisé pour le tri par glisser-déposer, l'utilisation mixte de plusieurs blocs peut perturber l'ordre existant ;
- Le champ utilisé pour le tri par glisser-déposer dans le tableau ne peut pas être un champ de tri avec une règle de regroupement ;
  - Exception : Dans un bloc de table de relation un-à-plusieurs, la clé étrangère peut servir de groupe ;
- Actuellement, seul le bloc de tableau de bord prend en charge le tri par glisser-déposer par groupe.
:::

#### Tri par Glisser-Déposer des Lignes de Tableau

Bloc de tableau

![20240409104621_rec_](https://static-docs.nocobase.com/20240409104621_rec_.gif)

Bloc de tableau de relation

<video controls width="100%" src="https://static-docs.nocobase.com/20240409111903_rec_.mp4" title="Title"></video>

:::warning
Dans un bloc de relation un-à-plusieurs

- Si un champ de tri non groupé est sélectionné, tous les enregistrements peuvent participer au tri ;
- Si l'on commence par regrouper en fonction de la clé étrangère, puis on effectue le tri, la règle de tri n'affectera que les données du groupe actuel.

L'effet final est le même, mais le nombre d'enregistrements participant au tri est différent, pour plus d'explications, consultez [Explication des règles de tri](#Explication des règles de tri)
:::

#### Tri par Glisser-Déposer des Cartes de Tableau de Bord

![20240409110423_rec_](https://static-docs.nocobase.com/20240409110423_rec_.gif)

### Explication des Règles de Tri

#### Déplacement entre les éléments non groupés (ou du même groupe)

Supposons qu'il y ait un ensemble de données

```
[1,2,3,4,5,6,7,8,9]
```

Lorsqu'un élément, supposons 5, se déplace vers la position 3, à ce moment-là, seules les numéros de séquence 3,4,5 ont changé, 5 occupe la position 3, et 3,4 se déplacent chacun d'une position vers l'arrière.

```
[1,2,5,3,4,6,7,8,9]
```

À ce moment-là, continuez à déplacer 6 à la position 8, 6 occupe la position 8, et 7,8 se déplacent chacun d'une position vers l'avant.

```
[1,2,5,3,4,7,8,6,9]
```

#### Déplacement d'éléments entre différents groupes

Lors du tri par groupe, lorsqu'un enregistrement se déplace vers un autre groupe, le groupe auquel il appartient changera également. Comme montré dans l'exemple ci-dessous :

```
A: [1,2,3,4]
B: [5,6,7,8]
```

Lorsque 1 se déplace vers 6 (par défaut après), le groupe auquel 1 appartient changera également de A à B

```
A: [2,3,4]
B: [5,6,1,7,8]
```

#### Les changements de tri sont indépendants des données affichées à l'écran

Par exemple, il y a un ensemble de données

```
[1,2,3,4,5,6,7,8,9]
```

L'écran affiche uniquement

```
[1,5,9]
```

Lorsque 1 se déplace à la position 9, les positions des données intermédiaires 2,3,4,5,6,7,8 vont toutes changer

```
[2,3,4,5,6,7,8,9,1]
```

L'écran affiche

```
[5,9,1]
```
