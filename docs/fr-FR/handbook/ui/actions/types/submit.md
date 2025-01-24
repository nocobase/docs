# Soumettre

## Introduction

La fonction de soumission est conçue pour enregistrer les données du formulaire (unique aux blocs de formulaire) et peut être intégrée avec des flux de travail pour simplifier l'automatisation des données.

![20240413093210](https://static-docs.nocobase.com/20240413093210.png)

## Éléments de Configuration de l'Opération

![20240413095124](https://static-docs.nocobase.com/20240413095124.png)

### Mode de Sauvegarde

L'opération de soumission pour les blocs de formulaire qui ajoutent uniquement de nouvelles données prend en charge la configuration de la méthode de sauvegarde.

![20240413101209](https://static-docs.nocobase.com/20240413101209.png)

![20240413100531](https://static-docs.nocobase.com/20240413100531.png)

1. Insérer et créer de nouveaux enregistrements directement ;
2. Insérer uniquement si l'enregistrement n'existe pas (nécessite des champs pour déterminer l'existence de l'enregistrement) ;
3. Insérer si l'enregistrement n'existe pas, sinon mettre à jour (nécessite des champs pour vérifier l'existence des enregistrements).

### Associer des Flux de Travail

Le flux de travail lié sera déclenché uniquement une fois les données soumises avec succès.

![20240417120149](https://static-docs.nocobase.com/20240417120149.png)

Pour plus de détails, consultez [Associer des Flux de Travail](/handbook/ui/actions/action-settings/bind-workflow).

- [Bouton de Modification](/handbook/ui/actions/action-settings/edit-button)
- [Confirmation Secondaire](/handbook/ui/actions/action-settings/double-check)
