# Manuel de l'utilisateur

## Union des rôles

L'Union des rôles est un mode de gestion des permissions. Selon les paramètres du système, les développeurs peuvent choisir d'utiliser des `Rôles indépendants`, `Autoriser l'union des rôles` ou `Union des rôles uniquement`, afin de répondre à différents besoins de gestion des permissions.

![20250312184651](https://static-docs.nocobase.com/20250312184651.png)

### Rôles indépendants

Par défaut, le système utilise des rôles indépendants. Les utilisateurs doivent passer d'un rôle à l'autre individuellement.

![20250312184729](https://static-docs.nocobase.com/20250312184729.png)  
![20250312184826](https://static-docs.nocobase.com/20250312184826.png)

### Autoriser l'union des rôles

Les développeurs peuvent activer `Autoriser l'union des rôles`, permettant aux utilisateurs de disposer des permissions de tous les rôles attribués, tout en leur permettant de passer d'un rôle à l'autre individuellement.

![20250312185006](https://static-docs.nocobase.com/20250312185006.png)

### Union des rôles uniquement

Les utilisateurs sont contraints d'utiliser uniquement l'union des rôles et ne peuvent pas changer de rôle individuellement.

![20250312185105](https://static-docs.nocobase.com/20250312185105.png)

### Règles pour l'union des rôles

L'union des rôles accorde les permissions maximales entre tous les rôles. Voici les explications concernant la résolution des conflits de permissions lorsque les rôles ont des paramètres différents pour la même permission.

#### Fusion des permissions d'opération

Exemple :  
Le rôle 1 est configuré pour `Permettre de configurer l'interface`, et le rôle 2 est configuré pour `Permettre d'installer, activer, désactiver des plugins`.

![20250312190133](https://static-docs.nocobase.com/20250312190133.png)  

![20250312190352](https://static-docs.nocobase.com/20250312190352.png)

Lors de la connexion avec le rôle **Permissions complètes**, l'utilisateur disposera des deux permissions simultanément.

![20250312190621](https://static-docs.nocobase.com/20250312190621.png)

#### Fusion du champ de données

##### Lignes de données

Scénario 1 : Plusieurs rôles définissent des conditions sur le même champ

Filtre du rôle A : Âge < 30  

<table style="table-layout: fixed; width: 100%;">
  <tr><th>UserID</th><th>Nom</th><th>Âge</th></tr>
  <tr><td>1</td><td>Jack</td><td>23</td></tr>
  <tr><td>2</td><td>Lily</td><td>29</td></tr>
</table>

Filtre du rôle B : Âge > 25  
<table style="table-layout: fixed; width: 100%;">
  <tr><th>UserID</th><th>Nom</th><th>Âge</th></tr>
  <tr><td>2</td><td>Lily</td><td>29</td></tr>
  <tr><td>3</td><td>Sam</td><td>32</td></tr>
</table>

**Après fusion :**
<table style="table-layout: fixed; width: 100%;">
  <tr><th>UserID</th><th>Nom</th><th>Âge</th></tr>
  <tr><td>1</td><td>Jack</td><td>23</td></tr>
  <tr><td>2</td><td>Lily</td><td>29</td></tr>
  <tr><td>3</td><td>Sam</td><td>32</td></tr>
</table>

Scénario 2 : Différents rôles définissent des conditions sur des champs différents

Filtre du rôle A : Âge < 30  
<table style="table-layout: fixed; width: 100%;">
  <tr><th>UserID</th><th>Nom</th><th>Âge</th></tr>
  <tr><td>1</td><td>Jack</td><td>23</td></tr>
  <tr><td>2</td><td>Lily</td><td>29</td></tr>
</table>

Filtre du rôle B : Nom contient “Ja”  
<table style="table-layout: fixed; width: 100%;">
  <tr><th>UserID</th><th>Nom</th><th>Âge</th></tr>
  <tr><td>1</td><td>Jack</td><td>23</td></tr>
  <tr><td>3</td><td>Jasmin</td><td>27</td></tr>
</table>

**Après fusion :**
<table style="table-layout: fixed; width: 100%;">
  <tr><th>UserID</th><th>Nom</th><th>Âge</th></tr>
  <tr><td>1</td><td>Jack</td><td>23</td></tr>
  <tr><td>2</td><td>Lily</td><td>29</td></tr>
  <tr><td>3</td><td>Jasmin</td><td>27</td></tr>
</table>

##### Colonnes de données

Colonnes visibles du rôle A : Nom, Âge  
<table style="table-layout: fixed; width: 100%;">
  <tr><th>UserID</th><th>Nom</th><th>Âge</th></tr>
  <tr><td>1</td><td>Jack</td><td>23</td></tr>
  <tr><td>2</td><td>Lily</td><td>29</td></tr>
</table>

Colonnes visibles du rôle B : Nom, Sexe  
<table style="table-layout: fixed; width: 100%;">
  <tr><th>UserID</th><th>Nom</th><th>Sexe</th></tr>
  <tr><td>1</td><td>Jack</td><td>Homme</td></tr>
  <tr><td>2</td><td>Lily</td><td>Femme</td></tr>
</table>

**Après fusion :**
<table style="table-layout: fixed; width: 100%;">
  <tr><th>UserID</th><th>Nom</th><th>Âge</th><th>Sexe</th></tr>
  <tr><td>1</td><td>Jack</td><td>23</td><td>Homme</td></tr>
  <tr><td>2</td><td>Lily</td><td>29</td><td>Femme</td></tr>
</table>

##### Lignes et Colonnes Mixtes  
Filtre du rôle A : Âge < 30, colonnes Nom, Âge  
<table style="table-layout: fixed; width: 100%;">
  <tr>
    <th>UserID</th>
    <th>Nom</th>
    <th>Âge</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Jack</td>
    <td>23</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Lily</td>
    <td>29</td>
  </tr>
</table>

Filtre du rôle B : Nom contient “Ja”, colonnes Nom, Sexe  
<table style="table-layout: fixed; width: 100%;">
  <tr>
    <th>UserID</th>
    <th>Nom</th>
    <th>Sexe</th>
  </tr>
  <tr>
    <td>3</td>
    <td>Jade</td>
    <td>Femme</td>
  </tr>
  <tr>
    <td>4</td>
    <td>James</td>
    <td>Homme</td>
  </tr>
</table>

**Après fusion :**
<table style="table-layout: fixed; width: 100%;">
  <tr><th>UserID</th><th>Nom</th><th>Âge</th><th>Sexe</th></tr>
  <tr><td>1</td><td>Jack</td><td>23</td><td><span style="background-color:#FFDDDD">Homme</span></td></tr>
  <tr><td>2</td><td>Lily</td><td>29</td><td><span style="background-color:#FFDDDD">Femme</span></td></tr>
  <tr><td>3</td><td>Jade</td><td><span style="background-color:#FFDDDD">27</span></td><td>Femme</td></tr>
  <tr><td>4</td><td>James</td><td><span style="background-color:#FFDDDD">31</span></td><td>Homme</td></tr>
</table>

Remarque : Les cellules avec un fond rouge indiquent des données invisibles dans les rôles individuels mais visibles après fusion des rôles.

Résumé
Règles de fusion des données selon les rôles :

Entre les lignes, si l'une des conditions est satisfaite, la ligne est autorisée.

Entre les colonnes, les champs sont combinés.

Lorsque des lignes et des colonnes sont configurées, elles sont fusionnées séparément et non selon des combinaisons ligne-colonne.
