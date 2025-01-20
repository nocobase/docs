# Mobile

<PluginInfo name="mobile"></PluginInfo>

## Introduction

Ce plugin facilite la configuration des pages mobiles, en tirant parti d'un framework central basé sur Ant Design Mobile. Il propose divers points d'extension et prend en charge l'intégration de blocs spécifiques aux versions desktop.

:::warning
L'ancien `plugin-mobile-client` a été abandonné. À partir de la version v1.3, il est recommandé de passer à `plugin-mobile`. Ces deux plugins sont incompatibles, donc la nouvelle version nécessitera une reconfiguration complète des paramètres mobiles.
:::

## Installation

Ce plugin est préinstallé mais nécessite d'être activé pour fonctionner.

![20240712113500](https://static-docs.nocobase.com/20240712113500.png)

## Manuel de l'utilisateur

### Interface de configuration UI

NocoBase propose une interface de configuration UI spécialisée pour une utilisation mobile.

![20240828220321](https://static-docs.nocobase.com/20240828220321.png)

### Barre de navigation (Tab Bar)

La barre de navigation prend en charge l'ajout de deux types : liens et pages.

![20240828223244](https://static-docs.nocobase.com/20240828223244.png)

### Ajouter des blocs

Les blocs desktop suivants peuvent être ajoutés :

![20240828223454](https://static-docs.nocobase.com/20240828223454.png)

### Configuration des pages

![20240828221452](https://static-docs.nocobase.com/20240828221452.png)

### Onglets des pages

![20240828222225](https://static-docs.nocobase.com/20240828222225.png)

### Sous-pages

Sur les appareils mobiles, les actions contextuelles s'ouvrent sous forme de sous-pages avec une fonctionnalité de retour par balayage.

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240828222736_rec_.mp4" type="video/mp4">
</video>

### Filtrage

Le filtrage utilise une méthode d'interaction basée sur [Popup](https://mobile.ant.design/components/popup).

![20240828230549](https://static-docs.nocobase.com/20240828230549.png)

### Configurer les permissions d'accès au menu

Vous pouvez configurer les permissions d'accès au menu de la même manière que sur la version desktop, comme indiqué ci-dessous (le plugin mobile doit être activé au préalable) :

![20240903221327_rec_](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240903221327_rec_.gif)

## Guide de développement

Les points d'extension actuellement pris en charge incluent :

![20240712115610](https://static-docs.nocobase.com/20240712115610.png)
