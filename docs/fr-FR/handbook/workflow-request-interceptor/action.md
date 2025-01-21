### Configuration d'Action

Si vous définissez la configuration du déclencheur sur **"Déclenché uniquement lorsque le formulaire lié à ce workflow est soumis"**, vous devrez revenir à l'interface du formulaire et lier le workflow au bouton d'action approprié :

![Lier le Workflow à une Nouvelle Commande](https://static-docs.nocobase.com/bae3931e60f9bcc51bbc222e40e891e5.png)

Dans la configuration de liaison du workflow, sélectionnez le workflow pertinent. En règle générale, choisir **"Entire Form Data"** comme contexte pour les données de déclenchement suffit :

![Sélectionner le Workflow à Lier](https://static-docs.nocobase.com/78e2f023029bd570c91ee4cd19b7a0a7.png)

:::info{title=Note}
Actuellement, les boutons liés aux événements pré-action ne prennent en charge que les boutons **"Soumettre"** (ou **"Sauvegarder"**), **"Mettre à jour les enregistrements"**, et **"Supprimer"** dans les formulaires pour les nouvelles entrées ou mises à jour. Le bouton **"Déclencher Workflow"** n'est pas pris en charge (ce bouton peut seulement être lié aux événements post-action).
:::
