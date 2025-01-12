# Collection SQL

<PluginInfo name="collection-sql"></PluginInfo>

## Introduction

La collection SQL fournit une méthode puissante pour récupérer des données en utilisant des requêtes SQL. En extrayant des champs de données via des requêtes SQL et en configurant les métadonnées associées aux champs, les utilisateurs peuvent utiliser ces champs comme s'ils travaillaient avec une table standard. Cette fonctionnalité est particulièrement utile dans des scénarios impliquant des requêtes complexes de jointure, des analyses statistiques, et plus encore.

## Manuel de l'utilisateur

### Créer une nouvelle collection SQL

<img src="https://static-docs.nocobase.com/202405191452918.png"/>

1. Saisissez votre requête SQL dans la boîte de saisie fournie et cliquez sur Exécuter. Le système analysera la requête pour déterminer les tables et les champs impliqués, extrayant automatiquement les métadonnées des champs des tables sources.

<img src="https://static-docs.nocobase.com/202405191453556.png"/>

2. Si l'analyse des tables et des champs source par le système est incorrecte, vous pouvez sélectionner manuellement les tables et les champs appropriés pour vous assurer que les bonnes métadonnées sont utilisées. Commencez par sélectionner la table source, puis choisissez les champs correspondants dans la section "Source des champs" ci-dessous.

<img src="https://static-docs.nocobase.com/202405191453579.png"/>

3. Pour les champs qui n'ont pas de source directe, le système déduira le type de champ en fonction du type de donnée. Si cette déduction est incorrecte, vous pouvez manuellement sélectionner le type de champ approprié.

<img src="https://static-docs.nocobase.com/202405191454703.png"/>

4. Au fur et à mesure que vous configurez chaque champ, vous pouvez prévisualiser son affichage dans la zone de prévisualisation, vous permettant de voir l'impact immédiat de vos réglages.

<img src="https://static-docs.nocobase.com/202405191455439.png"/>

5. Une fois la configuration terminée et après avoir confirmé que tout est correct, cliquez sur le bouton Confirmer sous la boîte de saisie SQL pour finaliser la soumission.

<img src="https://static-docs.nocobase.com/202405191455302.png"/>

### Édition

1. Si vous avez besoin de modifier la requête SQL, cliquez sur le bouton Modifier pour modifier directement l'instruction SQL et reconfigurer les champs si nécessaire.

2. Pour ajuster les métadonnées des champs, utilisez l'option Configurer les champs, qui vous permet de mettre à jour les paramètres des champs comme vous le feriez pour une table régulière.

### Synchronisation

Si la requête SQL reste inchangée mais que la structure de la table de la base de données sous-jacente a été modifiée, vous pouvez synchroniser et reconfigurer les champs en sélectionnant Configurer les champs - Synchroniser depuis la base de données.

<img src="https://static-docs.nocobase.com/202405191456216.png"/>

### Comparaison entre la collection SQL et les vues de base de données liées

| Type de modèle            | Idéal pour                                                                                   | Méthode de mise en œuvre | Support des opérations CRUD |
|---------------------------| -------------------------------------------------------------------------------------------- | ------------------------ | ---------------------------- |
| SQL                       | Modèles simples, cas d'utilisation légers<br />Interaction limitée avec la base de données<br />Éviter la maintenance des vues<br />Préférer les opérations basées sur l'interface utilisateur | Sous-requête SQL         | Non supporté                |
| Se connecter à une vue de base de données | Modèles complexes<br />Interaction nécessaire avec la base de données<br />Modification des données requise<br />Nécessite un support de base de données plus robuste et stable | Vue de base de données   | Partiellement supporté      |

:::warning
Lors de l'utilisation de la collection SQL, veillez à sélectionner des tables gérables au sein de NocoBase. L'utilisation de tables provenant de la même base de données mais non connectées à NocoBase peut entraîner une analyse incorrecte des requêtes SQL. Si cela vous préoccupe, envisagez de créer et de vous connecter à une vue.
:::
