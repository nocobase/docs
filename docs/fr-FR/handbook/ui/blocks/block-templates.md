# Modèle de Bloc

<PluginInfo name="ui-schema-storage"></PluginInfo>

## Introduction

Enregistrer un bloc de données comme modèle vous permet de copier ou de référencer facilement ce modèle lors de l'ajout de nouveaux blocs à l'avenir. Par exemple, si un formulaire pour une table de données est utilisé à la fois pour ajouter de nouveaux enregistrements et modifier des enregistrements existants, vous pouvez enregistrer ce formulaire comme modèle et le référencer dans les interfaces de saisie et de modification de données.

## Comment Ajouter et Utiliser un Modèle ?

1. Enregistrer comme modèle de bloc.

![](https://static-docs.nocobase.com/b7718cea8784587d53524ade3c5b0a82.png)

2. Lors de l'ajout d'un bloc, choisissez **Référencer un modèle** ou **Dupliquer un modèle**.

![](https://static-docs.nocobase.com/135df7344e0f3080199e4bb1071c2fa6.png)

## Copier vs Référencer : Quelle est la Différence ?

Copier crée un tout nouveau bloc basé sur le modèle de bloc, permettant des ajustements sans affecter le modèle original. En revanche, référencer utilise directement le modèle de bloc. Les modifications apportées à un bloc référencé modifieront le modèle lui-même, affectant ainsi tous les blocs qui y font référence.

## Points Importants

- Les modèles créés avec des blocs de relation ne peuvent être utilisés que pour créer des blocs de relation.
- Les modèles créés avec des blocs non-relationnels ne peuvent être utilisés que pour créer des blocs non-relationnels.
