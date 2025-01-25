# Exemple

Imaginons que nous ayons une collection "Échantillon". Pour les échantillons marqués comme "Collectés", une opération "Envoyer au Test" est nécessaire. Cette opération vérifie d'abord les informations de base de l'échantillon, génère un enregistrement "Test", puis met à jour le statut de l'échantillon en "En Test". L'ensemble du processus est trop complexe pour être géré simplement par des clics de boutons "Créer, Lire, Mettre à jour, Supprimer". Dans de tels scénarios, les événements d'opération personnalisée sont la solution idéale.

Pour commencer, créez une collection "Échantillon" et une collection "Test", puis saisissez quelques données de test de base dans la collection Échantillon :

![Exemple_Tableau_Échantillon](https://static-docs.nocobase.com/20240509172234.png)

Ensuite, vous devrez créer un workflow d' "Événement d'Opération Personnalisée". Si vous avez besoin de retours immédiats pendant l'opération, choisissez le mode synchrone (notez que le mode synchrone ne prend pas en charge les nœuds asynchrones comme l'intervention humaine) :

![Exemple_Créer_Workflow](https://static-docs.nocobase.com/20240509173106.png)

Dans la configuration du déclencheur, choisissez "Échantillon" comme collection :

![Exemple_Configuration_Déclencheur](https://static-docs.nocobase.com/20240509173148.png)

Ensuite, organisez la logique du processus selon vos besoins commerciaux. Par exemple, vous pouvez définir que l'opération "Envoyer au Test" est autorisée uniquement lorsque le paramètre d'indice dépasse `90` ; sinon, un avertissement pertinent est fourni :

![Exemple_Organisation_Logique_Affaires](https://static-docs.nocobase.com/20240509174159.png)

:::info{title=Note}
Le nœud "[Message de Réponse](../../nodes/response-message.md)" peut être utilisé dans les événements d'opération personnalisée synchrones pour envoyer des messages de retour au client. Cette fonctionnalité n'est pas disponible en mode asynchrone.
:::

Après avoir configuré et activé le workflow, retournez à l'interface du tableau et ajoutez un bouton "Déclencher Workflow" dans la colonne des opérations :

![Exemple_Ajouter_Bouton_Opération](https://static-docs.nocobase.com/20240509174525.png)

Ensuite, dans le menu de configuration du bouton, sélectionnez l'option pour lier le workflow et ouvrez la fenêtre de configuration :

![Exemple_Ouvrir_Popup_Lien_Workflow](https://static-docs.nocobase.com/20240509174633.png)

Ajoutez le workflow que vous avez activé précédemment :

![Exemple_Sélectionner_Workflow](https://static-docs.nocobase.com/20240509174723.png)

Après soumission, renommez le bouton pour refléter l'action, comme "Tester", et la configuration est terminée.

Pour utiliser cette fonctionnalité, sélectionnez des données d'échantillon dans le tableau et cliquez sur le bouton "Envoyer au Test" pour déclencher l'événement d'opération personnalisé. Selon la logique pré-arrangée, si le paramètre d'indice de l'échantillon est inférieur à 90, vous verrez un message d'avertissement comme ceci :

![Exemple_Critères_Inspection_Non_Remplis](https://static-docs.nocobase.com/20240509175026.png)

Si le paramètre d'indice dépasse 90, le processus se poursuivra comme prévu, créant un enregistrement "Test" et mettant à jour le statut de l'échantillon en "En Test" :

![Exemple_Inspection_Réussie](https://static-docs.nocobase.com/20240509175247.png)

Et voilà—un événement d'opération personnalisé simple. Cette approche peut être appliquée de manière similaire à d'autres opérations commerciales complexes, telles que le traitement des commandes ou la soumission de rapports, en utilisant des événements d'opération personnalisés pour obtenir les résultats souhaités.
