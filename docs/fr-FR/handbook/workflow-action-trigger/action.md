# Configuration de l'action

Lors de la configuration des actions en mode déclencheur local, une fois la configuration du flux de travail terminée, vous devrez revenir à l'interface utilisateur et lier le flux de travail au bouton d'opération de formulaire correspondant dans le bloc de données concerné.

Le flux de travail associé au bouton "Soumettre" (y compris le bouton "Enregistrer l'enregistrement") sera déclenché après que l'utilisateur ait soumis le formulaire et que l'opération de données soit terminée.

![Opération Après Événement_Bouton Soumettre](https://static-docs.nocobase.com/ae12d219b8400d75b395880ec4cb2bda.png)

Pour lier un flux de travail, il suffit de sélectionner "Lier les flux de travail" dans le menu de configuration du bouton pour ouvrir la fenêtre de configuration de liaison. Ici, vous pouvez configurer plusieurs flux de travail à déclencher. Si aucun flux de travail n'est configuré, cela signifie qu'aucun flux de travail ne sera déclenché. Pour chaque flux de travail, vous devrez déterminer si le déclencheur concerne les données de l'ensemble du formulaire ou celles d'un champ relationnel spécifique dans le formulaire. Ensuite, en fonction du modèle de données sélectionné, choisissez le flux de travail de formulaire correspondant au modèle de données de la table associée.

![Opération Après Événement_Lier la Configuration du Flux de Travail_Sélection du Contexte](https://static-docs.nocobase.com/358315fc175849a7fbadbe3276ac6fed.png)

![Opération Après Événement_Lier la Configuration du Flux de Travail_Sélection du Flux de Travail](https://static-docs.nocobase.com/175a71a61b93540cce62a1cb124eb0b5.png)

:::info{title="Note"}
Assurez-vous que le flux de travail est activé avant de tenter de le sélectionner dans l'interface ci-dessus.
:::
