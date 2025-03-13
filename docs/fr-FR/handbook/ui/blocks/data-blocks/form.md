# Bloc de Formulaire

## Introduction

Le bloc de formulaire est un bloc essentiel pour construire des interfaces d'entrée et d'édition de données. Il est hautement personnalisable et utilise les composants correspondants en fonction du modèle de données pour afficher les champs requis. Grâce aux règles de liaison, le bloc de formulaire peut afficher dynamiquement des champs. De plus, il peut être combiné avec des flux de travail pour déclencher des processus automatisés et traiter des données, ce qui améliore l'efficacité du travail ou met en œuvre une orchestration logique.

## Ajouter des Blocs

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240416215917.mp4" type="video/mp4">
</video>

## Paramètres du Bloc

![20240416220148](https://static-docs.nocobase.com/20240416220148.png)

### Règles de Liaison

Contrôlez le comportement des champs du formulaire à l'aide des règles de liaison.

![20240416220254](https://static-docs.nocobase.com/20240416220254.png)

Pour plus d'informations, consultez [Règles de Liaison](/handbook/ui/blocks/block-settings/linkage-rule).

### Modèles de Données de Formulaire (Prend en charge uniquement les formulaires pour l'ajout de nouvelles données)

Les modèles de données de formulaire simplifient le processus d'entrée de données et améliorent l'efficacité. En filtrant un ou plusieurs enregistrements comme modèle à partir de la plage de données, le modèle de données cible sélectionné sera peuplé en tant que valeurs par défaut dans le formulaire.

![20240408143719](https://static-docs.nocobase.com/20240408143719.png)

![20240424143911](https://static-docs.nocobase.com/20240424143911.png)

1. Filtrer un ou plusieurs enregistrements comme données de modèle.
2. Sélectionner le champ titre pour identifier les données du modèle.
3. Cocher les champs du modèle, et les champs sélectionnés seront automatiquement peuplés dans le formulaire.

#### Synchroniser à partir des Champs du Formulaire

- Analyser automatiquement les champs configurés dans le bloc de formulaire actuel comme champs de modèle.
- Si des modifications ultérieures sont apportées aux champs du bloc de formulaire (comme des ajustements des composants de champ d'association), vous pouvez rouvrir la configuration du modèle et cliquer sur le bouton de synchronisation pour garantir la cohérence entre le formulaire et le modèle.

#### Les champs de données suivants seront filtrés pour l'enregistrement de modèle de données sélectionné :
- Clé primaire
- Clé étrangère
- Champs interdisant les doublons
- Champs de tri
- Champs de séquence
- Mot de passe
- Créé par
- Créé à
- Dernière mise à jour par
- Dernière mise à jour à

#### Pour les Champs d'Association
- Les champs réguliers et les champs de relation hasOne et hasMany sont copiés.
- Les champs belongsTo et belongsToMany sont référencés, et les références peuvent devenir des copies. Par exemple, après un changement de sélection à un sous-formulaire, la relation change de référence à copie (après devenir une copie, tous les champs sont optionnels).

#### Scénarios d'Exemples

**Description du scénario :** Une plateforme de commerce électronique a besoin d'ajouter fréquemment de nouveaux produits, et ces nouveaux produits sont similaires ou identiques à de nombreux attributs de produits existants.

**Solution :** Sélectionner un produit existant comme modèle et utiliser ses informations d'attributs comme modèle de données de formulaire. Lors de la création d'un nouveau produit, les utilisateurs peuvent choisir d'appliquer ce modèle, ce qui permet de copier rapidement les informations d'attribut du produit modèle vers le nouveau produit, améliorant ainsi l'efficacité de l'entrée des nouveaux produits.

- Créer un modèle de promotion de produit

![20240408145855](https://static-docs.nocobase.com/20240408145855.png)

- Créer rapidement des produits promotionnels

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240408150250.mp4" type="video/mp4">
</video>

- [Modifier le Titre du Bloc](/handbook/ui/blocks/block-settings/block-title)
- [Enregistrer comme Modèle de Bloc](/handbook/block-template)

## Configurer les Champs

### Champs dans la Collection Actuelle

![20240416230739](https://static-docs.nocobase.com/20240416230739.png)

### Champs dans les Collections Associées

Les champs dans les tables associées sont en lecture seule dans le formulaire et sont généralement utilisés en conjonction avec les champs de relation pour afficher plusieurs valeurs de champs de données associées.

![20240416230811](https://static-docs.nocobase.com/20240416230811.png)

<video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240416231152.mp4" type="video/mp4">
</video>

Les options de configuration des champs de formulaire sont disponibles dans [Champs de Formulaire](/handbook/ui/fields/generic/form-item).

## Configurer les Actions

![20240417115249](https://static-docs.nocobase.com/20240417115249.png)

- [Soumettre](/handbook/ui/actions/types/submit)
- [Sauvegarder les Données](/handbook/ui/actions/types/save-record)
- [Demande Personnalisée](/handbook/action-custom-request)
- [Déclencher un flux de travail](/handbook/workflow/manual/triggers/cutom-action-trigger)
