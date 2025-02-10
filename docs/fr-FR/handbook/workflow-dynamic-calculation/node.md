# Configuration du Nœud

## Création d'un Nœud

Créez un nœud de calcul dynamique :

![Création d'un Nœud de Calcul Dynamique](https://static-docs.nocobase.com/14613f73a7dfc822a30276c8c04cdeb7.png)

## Configuration du Nœud

### Expression de Calcul

Contrairement aux options d'expressions dans un nœud de calcul standard, les expressions dynamiques doivent être sélectionnées en fonction des données préchargées plutôt que d'entrer directement l'expression. Choisissez les données de règle de réduction produit préchargées à partir du déclencheur :

![Sélectionner les Données d'Expression Dynamique](https://static-docs.nocobase.com/21ccc63e604dd90b7d26c3c33c12d671.png)

### Source de Données de Variable

Vous devez également sélectionner l'objet de ligne de données à partir du tableau qui sera utilisé comme variable dans l'expression. Cela peut être choisi à partir du contexte du workflow, où les résultats ont été préchargés ou interrogés. L'objet doit être une ligne de données du tableau associé aux données d'expression. Dans ce cas, sélectionnez les données produit :

![Sélectionner la Source de Données de Variable](https://static-docs.nocobase.com/afbffe9661539d26e4b175ae8a4b28f7.png)

Une fois la configuration du nœud enregistrée, le processus de configuration est terminé.
