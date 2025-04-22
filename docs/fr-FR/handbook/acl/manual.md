# Manuel d'utilisation

## Union de rôles

L'union de rôles est un mode de gestion des permissions. Selon les paramètres du système, les développeurs peuvent choisir d'utiliser des `Rôles indépendants`, `Permettre l'union de rôles` ou `Uniquement l'union de rôles`, afin de répondre à différentes exigences en matière de permissions.

![20250312184651](https://static-docs.nocobase.com/20250312184651.png)

### Rôles indépendants

Par défaut, le système utilise des rôles indépendants. Les utilisateurs doivent alterner individuellement entre les rôles qu'ils possèdent.

![20250312184729](https://static-docs.nocobase.com/20250312184729.png)  
![20250312184826](https://static-docs.nocobase.com/20250312184826.png)

### Permettre l'union de rôles

Les développeurs système peuvent activer l'option `Permettre l'union de rôles`, permettant aux utilisateurs d'avoir simultanément les permissions de tous les rôles assignés tout en leur permettant d'alterner individuellement entre les rôles.

![20250312185006](https://static-docs.nocobase.com/20250312185006.png)

### Uniquement l'union de rôles

Les utilisateurs sont contraints d'utiliser uniquement l'union de rôles et ne peuvent pas alterner individuellement entre les rôles.

![20250312185105](https://static-docs.nocobase.com/20250312185105.png)

### Règles pour l'union de rôles

L'union de rôles accorde les permissions maximales de tous les rôles. Voici les explications pour résoudre les conflits de permissions lorsque les rôles ont des paramètres différents sur une même permission.

#### Fusion des permissions d'opération

Exemple :  
Le Rôle 1 est configuré pour `Autoriser la configuration de l'interface` et le Rôle 2 est configuré pour `Autoriser l'installation, l'activation et la désactivation des plugins`

![20250312190133](https://static-docs.nocobase.com/20250312190133.png)  

![20250312190352](https://static-docs.nocobase.com/20250312190352.png)

En se connectant avec le rôle **Permissions complètes**, l'utilisateur aura les deux permissions simultanément.

![20250312190621](https://static-docs.nocobase.com/20250312190621.png)

#### Fusion de la portée des données

##### Lignes de données

Scénario 1 : Plusieurs rôles définissant des conditions sur le même champ

Filtre du Rôle A : Âge < 30  

| ID utilisateur | Nom  | Âge |
| -------------- | ---- | --- |
| 1              | Jack | 23  |
| 2              | Lily | 29  |

Filtre du Rôle B : Âge > 25

| ID utilisateur | Nom  | Âge |
| -------------- | ---- | --- |
| 2              | Lily | 29  |
| 3              | Sam  | 32  |

**Après fusion :**

| ID utilisateur | Nom  | Âge |
| -------------- | ---- | --- |
| 1              | Jack | 23  |
| 2              | Lily | 29  |
| 3              | Sam  | 32  |


Scénario 2 : Différents rôles définissant des conditions sur différents champs

Filtre du Rôle A : Âge < 30

| ID utilisateur | Nom  | Âge |
| -------------- | ---- | --- |
| 1              | Jack | 23  |
| 2              | Lily | 29  |

Filtre du Rôle B : Nom contient "Ja"

| ID utilisateur | Nom    | Âge |
| -------------- | ------ | --- |
| 1              | Jack   | 23  |
| 3              | Jasmin | 27  |

**Après fusion :**

| ID utilisateur | Nom    | Âge |
| -------------- | ------ | --- |
| 1              | Jack   | 23  |
| 2              | Lily   | 29  |
| 3              | Jasmin | 27  |

##### Colonnes de données

Colonnes visibles du Rôle A : Nom, Âge

| ID utilisateur | Nom  | Âge |
| -------------- | ---- | --- |
| 1              | Jack | 23  |
| 2              | Lily | 29  |

Colonnes visibles du Rôle B : Nom, Sexe

| ID utilisateur | Nom  | Sexe   |
| -------------- | ---- | ------ |
| 1              | Jack | Homme  |
| 2              | Lily | Femme  |

**Après fusion :**

| ID utilisateur | Nom  | Âge | Sexe   |
| -------------- | ---- | --- | ------ |
| 1              | Jack | 23  | Homme  |
| 2              | Lily | 29  | Femme  |

##### Lignes et colonnes mixtes
Filtre du Rôle A : Âge < 30, colonnes Nom, Âge

| ID utilisateur | Nom  | Âge |
| -------------- | ---- | --- |
| 1              | Jack | 23  |
| 2              | Lily | 29  |

Filtre du Rôle B : Nom contient "Ja", colonnes Nom, Sexe

| ID utilisateur | Nom   | Sexe  |
| -------------- | ----- | ----- |
| 3              | Jade  | Femme |
| 4              | James | Homme |

**Après fusion :**

| ID utilisateur | Nom   | Âge                                      | Sexe                                        |
| -------------- | ----- | ---------------------------------------- | ------------------------------------------- |
| 1              | Jack  | 23                                       | <span style="background-color:#FFDDDD">Homme</span>  |
| 2              | Lily  | 29                                       | <span style="background-color:#FFDDDD">Femme</span>  |
| 3              | Jade  | <span style="background-color:#FFDDDD">27</span> | Femme                                       |
| 4              | James | <span style="background-color:#FFDDDD">31</span> | Homme                                       |

**Note : Les cellules avec un fond rouge indiquent des données invisibles dans les rôles individuels mais visibles dans le rôle fusionné.**

##### Résumé

Règles de fusion des rôles pour la portée des données :
1. Entre les lignes, si une condition est satisfaite, la ligne a des permissions.
2. Entre les colonnes, les champs sont combinés.
3. Lorsque les lignes et les colonnes sont toutes deux configurées, les lignes et les colonnes sont fusionnées séparément, et non par combinaisons ligne-colonne. 