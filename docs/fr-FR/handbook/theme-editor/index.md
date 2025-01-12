# Éditeur de Thème

> Remarque : La fonctionnalité actuelle du thème est implémentée sur la version antd 5.x. Il est recommandé de lire le concept de [Personnalisation du Thème](https://ant.design/docs/react/customize-theme#%E8%87%AA%E5%AE%9A%E4%B9%89%E4%B8%BB%E9%A2%98) avant de continuer avec ce document.

## Introduction

Ce plugin est essentiellement un outil permettant de modifier le style de la page front-end entière. Il prend actuellement en charge l'édition des [SeedToken](https://ant.design/docs/react/customize-theme#seedtoken), [MapToken](https://ant.design/docs/react/customize-theme#maptoken), et [AliasToken](https://ant.design/docs/react/customize-theme#aliastoken), ainsi que l'activation d'un [commutateur](https://ant.design/docs/react/customize-theme#%E4%BD%BF%E7%94%A8%E9%A2%84%E8%AE%BE%E7%AE%97%E6%B3%95) pour le Mode Sombre et le Mode Compact. À l'avenir, il pourrait prendre en charge la personnalisation du thème au niveau des [composants](https://ant.design/docs/react/customize-theme#%E4%BF%AE%E6%94%B9%E7%BB%84%E4%BB%B6%E5%8F%98%E9%87%8F-component-token).

## Instructions d'utilisation

### Activer le Plugin Thème

Tout d'abord, mettez à jour NocoBase vers la dernière version (v0.11.1 ou supérieure). Ensuite, recherchez la carte `Éditeur de Thème` dans la page de gestion des plugins. Cliquez sur le bouton "Activer" en bas à droite de la carte et attendez que la page se rafraîchisse.

![20240409132838](https://static-docs.nocobase.com/20240409132838.png)

### Accéder à la page de configuration du Thème

Après avoir activé le plugin, cliquez sur le bouton des paramètres en bas à gauche de la carte et vous serez redirigé vers la page d'édition du thème. Par défaut, quatre options de thème sont disponibles : `Thème par défaut`, `Thème sombre`, `Thème compact` et `Thème sombre compact`.

![20240409133020](https://static-docs.nocobase.com/20240409133020.png)

## Ajouter un Nouveau Thème

Cliquez sur le bouton `Ajouter un nouveau thème` et choisissez `Créer un thème entièrement nouveau`. Un éditeur de thème apparaîtra sur le côté droit de la page, vous permettant d'éditer les couleurs, les tailles, les styles et plus encore. Après l'édition, entrez un nom pour le thème et cliquez sur enregistrer pour ajouter le nouveau thème.

![20240409133147](https://static-docs.nocobase.com/20240409133147.png)

## Appliquer le Nouveau Thème

Vous pouvez déplacer votre souris vers le coin supérieur droit de la page, où vous verrez un sélecteur de thème. En cliquant dessus, vous pouvez basculer vers d'autres thèmes, comme le thème nouvellement ajouté.

![20240409133247](https://static-docs.nocobase.com/20240409133247.png)

## Modifier un Thème Existant

Cliquez sur le bouton `Modifier` en bas à gauche de la carte. Comme pour l'ajout d'un nouveau thème, un éditeur de thème apparaîtra sur le côté droit de la page. Après avoir effectué les modifications, cliquez sur "Enregistrer" pour valider la modification du thème.

![20240409134413](https://static-docs.nocobase.com/20240409134413.png)

## Options Utilisateur pour le Changement de Thème

Les thèmes nouvellement ajoutés sont, par défaut, disponibles pour les utilisateurs. Si vous ne souhaitez pas que les utilisateurs changent vers un certain thème, vous pouvez désactiver le commutateur `Sélectionnable par l'utilisateur` en bas à droite de la carte du thème, ce qui le rendra indisponible pour les utilisateurs.

![20240409133331](https://static-docs.nocobase.com/20240409133331.png)

## Définir comme Thème Par Défaut (Le Thème Par Défaut ne Peut Pas être Supprimé)

Initialement, le `Thème par défaut` est défini comme thème par défaut. Si vous souhaitez définir un thème spécifique comme nouveau thème par défaut, activez le commutateur `Thème par défaut` en bas à droite de la carte. Cela garantira que, lorsque les utilisateurs ouvriront la page pour la première fois, ce thème sera affiché.

![20240409133409](https://static-docs.nocobase.com/20240409133409.png)

## Supprimer un Thème

Cliquez sur le bouton Supprimer sous la carte, puis cliquez sur le bouton de confirmation qui apparaît pour supprimer le thème.

![20240409133435](https://static-docs.nocobase.com/20240409133435.png)
