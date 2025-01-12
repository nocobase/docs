# Notification : Message In-App

<PluginInfo name="notification-in-app-message"></PluginInfo>

## Introduction

Permet aux utilisateurs de recevoir des notifications de messages en temps réel directement dans l'application NocoBase.

## Installation

Ce plugin est préinstallé, aucune configuration supplémentaire n'est nécessaire.

## Ajouter un canal de message In-App

Allez dans la section de gestion des notifications, cliquez sur le bouton d'ajout et sélectionnez Message In-App.
![2024-11-08-08-33-26-20241108083326](https://static-docs.nocobase.com/2024-11-08-08-33-26-20241108083326.png)

Remplissez le nom du canal et la description, puis cliquez sur soumettre.
![2024-11-08-08-34-32-20241108083431](https://static-docs.nocobase.com/2024-11-08-08-34-32-20241108083431.png)

Le nouveau canal apparaîtra désormais dans la liste.

![2024-11-08-08-34-52-20241108083452](https://static-docs.nocobase.com/2024-11-08-08-34-52-20241108083452.png)

## Exemple de scénario d'utilisation

Pour clarifier l'utilisation du message In-App, voici un exemple de "Suivi des leads marketing".

Imaginons que votre équipe mène une grande campagne marketing visant à suivre les réponses et les besoins des clients potentiels. En utilisant les messages In-App, vous pouvez :

**Créer un canal de notification :** Commencez par créer un canal appelé "Clue Marketing" dans la gestion des notifications, facilitant ainsi son identification par les membres de l'équipe.

![2024-11-08-08-34-32-20241108083431](https://static-docs.nocobase.com/2024-11-08-08-34-32-20241108083431.png)

**Configurer un workflow :** Créez un workflow qui déclenche automatiquement des notifications chaque fois qu'un nouveau lead est généré. Ajoutez un nœud de notification à ce workflow, sélectionnez le canal "Clue Marketing" et personnalisez le contenu du message en fonction des besoins de la campagne. Par exemple :

![image-1-2024-10-27-14-07-17](https://static-docs.nocobase.com/image-1-2024-10-27-14-07-17.png)

**Recevoir des notifications en temps réel :** Une fois que le workflow est déclenché, tous les membres de l'équipe concernés recevront des notifications instantanément, permettant une réponse rapide.

![image-2-2024-10-27-14-07-22](https://static-docs.nocobase.com/image-2-2024-10-27-14-07-22.png)

**Gestion et suivi des messages :** Les messages In-App sont regroupés par nom de canal, et vous pouvez filtrer les messages par statut de lecture ou non-lu pour prioriser les informations importantes. En cliquant sur "Voir", vous serez redirigé vers un lien configuré, vous permettant de gérer les tâches de manière fluide.

![20241027140648-2024-10-27-14-06-51-2024-10-29-13-26-41](https://static-docs.nocobase.com/20241027140648-2024-10-27-14-06-51-2024-10-29-13-26-41.png)
