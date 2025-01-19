# v0.7.5 : 2022-10-16

## Fonctionnalités Fusionnées

- **chore(versions)** : Publication de la version v0.7.5-alpha.1 😊 [`#920`](https://github.com/nocobase/nocobase/pull/920)
- **feat** : Ajout du champ de collection dans le plugin workflow (`plugin workflow collection field`) [`#919`](https://github.com/nocobase/nocobase/pull/919)
- **feat** : Création avec un tableau de valeurs (`create with array of values`) [`#912`](https://github.com/nocobase/nocobase/pull/912)
- **fix** : Détachement en cas d'erreur (`unbind on error throwing`) [`#914`](https://github.com/nocobase/nocobase/pull/914)
- **fix** : Fusion des ajouts utilisant désormais la clé primaire (`appends merge now using primary key`) [`#911`](https://github.com/nocobase/nocobase/pull/911)
- **feat** : Limite de l'identifiant de la base de données (`limit database identifier`) [`#908`](https://github.com/nocobase/nocobase/pull/908)
- **fix** : Synchronisation de la valeur par défaut du champ de collection (`sync collection field default value`) [`#907`](https://github.com/nocobase/nocobase/pull/907)
- **fix** : Fusion des ajouts incluant désormais les bonnes relations (`appends merge includes`) [`#905`](https://github.com/nocobase/nocobase/pull/905)
- **fix** : Problème de requête avec les relations simples (`single relation repository appends query issue`) [`#901`](https://github.com/nocobase/nocobase/pull/901)
- **feat(plugin-workflow)** : Ajout du calculateur de concaténation (`add concat calculator`) [`#894`](https://github.com/nocobase/nocobase/pull/894)
- **fix(client/record-picker)** : Support de la vue formatée pour `DataPicker` dans le `RecordPicker` (`support record-picker show format DataPicker`) [`#888`](https://github.com/nocobase/nocobase/pull/888)
- **fix(client/block-select-collection)** : Correction de l'erreur d'affichage du menu de sélection de collection (`fix select collection menu view error`) [`#889`](https://github.com/nocobase/nocobase/pull/889)
- **fix** : Impossible de soumettre un formulaire lors du téléchargement de fichiers (`unable to submit form during file upload`) [`#892`](https://github.com/nocobase/nocobase/pull/892)
- **fix** : Exécution des tests par Jest (`run test by jest`) [`#891`](https://github.com/nocobase/nocobase/pull/891)
- **feat(collection-manager)** : Les champs inversés peuvent être configurés (`inverse fields can be configured`) [`#883`](https://github.com/nocobase/nocobase/pull/883)
- **fix(formula)** : Support des entiers et correction de l'erreur NaN (`support integer and fix NaN error`) [`#879`](https://github.com/nocobase/nocobase/pull/879)
- **fix** : Le paramètre de tri est manquant (`sort parameter is missing`) [`#849`](https://github.com/nocobase/nocobase/pull/849)
- **fix** : Requête de jointure lente émise par les ajouts de champs dans la méthode `find` du repository (`slow join query issued by appends field in find method of repository`) [`#845`](https://github.com/nocobase/nocobase/pull/845)
- **feat(core/cache)** : Support du cache (`support cache`) [`#876`](https://github.com/nocobase/nocobase/pull/876)
- **feat** : Mise à jour des options nécessitant un filtre ou `filterByTk` (`update option must have filter or filterByTk`) [`#847`](https://github.com/nocobase/nocobase/pull/847)
- **feat** : Traduction en russe ajoutée (`added Russian translation`) [`#840`](https://github.com/nocobase/nocobase/pull/840)
- **feat(database)** : Ajout du type de champ séquence (`add sequence field type`) [`#779`](https://github.com/nocobase/nocobase/pull/779)
- **fix** : Impossible d'accéder aux pages sans permission via URL (`can't access pages without permission via url`) [`#826`](https://github.com/nocobase/nocobase/pull/826)
- **refactor(resourcer)** : Combinaison des classes de middleware (`combine middleware class`) [`#825`](https://github.com/nocobase/nocobase/pull/825)
- **refactor(database)** : Correction de certains champs et types (`fix some fields and types`) [`#820`](https://github.com/nocobase/nocobase/pull/820)
- **feat(locale)** : Traduction en japonais ajoutée (`added Japanese translation`) [`#813`](https://github.com/nocobase/nocobase/pull/813)
- **fix(plugin-workflow)** : Correction du type de valeur pour `DatePicker` vers `moment` (`fix value type for DatePicker to moment`) [`#819`](https://github.com/nocobase/nocobase/pull/819)
- **refactor(plugin-workflow)** : Exportation du registre des calculateurs client (`export client calculators registry`) [`#816`](https://github.com/nocobase/nocobase/pull/816)
- **fix** : Le type de stockage des nombres a été changé en double (`number storage type changed to double`) [`#810`](https://github.com/nocobase/nocobase/pull/810)
- **refactor(server)** : Refactorisation du serveur (`refactor server`) [`#795`](https://github.com/nocobase/nocobase/pull/795)
- **fix(plugin-verification)** : Changement de l'erreur de limitation du taux du fournisseur à 429 (`change provider rate limit error to 429`) [`#788`](https://github.com/nocobase/nocobase/pull/788)
- **fix(plugin-cm)** : Correction du champ qui disparaît après une mise à jour échouée (`fix field disappear after failed to update`) [`#773`](https://github.com/nocobase/nocobase/pull/773)
- **fix** : Correction de `uiSchema` indéfini (`fix uiSchema undefined`) [`#770`](https://github.com/nocobase/nocobase/pull/770)
- **fix(plugin-cm)** : Correction de la valeur par défaut de l'option unique pour la mise à jour (`fix unique option default value to update`) [`#768`](https://github.com/nocobase/nocobase/pull/768)
- **fix(plugin-users)** : Correction de l'erreur 500 lors de la mise à jour du profil (`fix update profile 500`) [`#767`](https://github.com/nocobase/nocobase/pull/767)
- **fix** : Colonne MySQL dans la clause WHERE ambiguë (`mysql column in where clause is ambiguous`) [`#756`](https://github.com/nocobase/nocobase/pull/756)
- **feat(plugin-cm)** : Ajout de l'option unique pour les champs de base (`add unique option for base fields`) [`#745`](https://github.com/nocobase/nocobase/pull/745)
- **feat(plugin-verification)** : Ajout du plugin de vérification et du téléphone pour les utilisateurs (`add plugin-verification and phone for users`) [`#722`](https://github.com/nocobase/nocobase/pull/722)
- **feat** : Redimensionnement des colonnes de la grille avec glisser-déposer (`resize grid columns with drag and drop`) [`#748`](https://github.com/nocobase/nocobase/pull/748)
- **refactor(client)** : Scission des initialisateurs de schéma en plusieurs fichiers (`split schema-initializer items into multiple files`) [`#744`](https://github.com/nocobase/nocobase/pull/744)
- **refactor(plugin-workflow)** : Changement du mode des fichiers en 644 (`change files mode to 644`) [`#755`](https://github.com/nocobase/nocobase/pull/755)
- **fix** : Vérification de la version de la base de données (`db version check`) [`#749`](https://github.com/nocobase/nocobase/pull/749)
- **feat** : Ajout d'exemples (`add examples`) [`#718`](https://github.com/nocobase/nocobase/pull/718)

## Corrections

- **fix(plugin-workflow)** : Correction du type de valeur pour `DatePicker` vers `moment` (`fix value type for DatePicker to moment`) [`#815`](https://github.com/nocobase/nocobase/issues/815)
- **fix(plugin-users)** : Correction de l'erreur 500 lors de la mise à jour du profil (`fix

 update profile 500`) [`#766`](https://github.com/nocobase/nocobase/issues/766)
- **fix** : Vérification de la version de la base de données (`db version check`) [`#742`](https://github.com/nocobase/nocobase/issues/742)

## Commits

- **fix(client)** : Initialisateurs de panneau d'onglets pour le formulaire de création de bloc (`tab pane initializers for create form block`) [`7efc4bc`](https://github.com/nocobase/nocobase/commit/7efc4bca0e3c5f2e1c5cd9e1365e77a005f3e108)
- **fix** : Problème de transaction qui ne peut être annulée (`transaction cannot be rolled back because it has been finished with state: rollback`) [`6dacec4`](https://github.com/nocobase/nocobase/commit/6dacec4158103fd165ec2865ea87ed9d3d4ceaa4)
- **fix(database)** : Correction de l'erreur de nom d'index trop long (`fix the index name too long error`) [`7bfe6b8`](https://github.com/nocobase/nocobase/commit/7bfe6b8c46bef0183c4703683175561c7fc91aee)
