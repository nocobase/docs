# Condition

Similaire à l'instruction `if` dans les langages de programmation, le nœud de condition détermine la direction du flux suivant en fonction du résultat de la condition configurée.

## Création d'un Nœud

Il existe deux modes pour la condition : "Continuer si 'vrai'" et "Continuer si 'vrai' ou 'faux'". Lors de la création du nœud, vous devez choisir l'un de ces modes, et cela ne peut pas être modifié dans la configuration du nœud par la suite.

![Sélection du mode pour Condition](https://static-docs.nocobase.com/3de27308c1179523d8606c66bf3a5fb4.png)

Dans le mode "Continuer si 'vrai'", lorsque le résultat de la condition est "vrai", le flux de travail continuera d'exécuter les nœuds suivants ; sinon, le flux sera interrompu prématurément et quittera avec un statut échoué.

![Mode Continuer si 'vrai'](https://static-docs.nocobase.com/0f6ae1afe61d501f8eb1f6dedb3d4ad7.png)

Ce mode est adapté aux scénarios où le flux ne doit pas continuer si la condition n'est pas remplie. Par exemple, lors de la configuration d'un bouton de formulaire pour soumettre une commande lié à un "Événement avant action", si le stock est insuffisant pour les articles dans la commande, le processus ne doit pas continuer pour générer la commande, mais échouer et quitter.

Dans le mode "Continuer si 'vrai' ou 'faux'", le nœud de condition produira deux branches du flux, correspondant aux scénarios où les résultats de la condition sont "vrai" et "faux". Chaque branche peut avoir des nœuds suivants configurés séparément. Après l'exécution de l'une ou l'autre des branches, elle reviendra automatiquement à la branche parente où se trouve le nœud de condition et continuera l'exécution des nœuds suivants.

![Mode Continuer si 'vrai' ou 'faux'](https://static-docs.nocobase.com/974a1fcd8603629b64ffce6c55d59282.png)

Ce mode est adapté aux scénarios où des opérations différentes doivent être effectuées selon que la condition soit remplie ou non. Par exemple, vérifier si une donnée existe, et si elle n'existe pas, l'insérer ; si elle existe, la mettre à jour.

## Configuration du Nœud

### Moteur de Calcul

Actuellement, trois moteurs sont pris en charge :

- **De base** : Obtient des résultats logiques à l'aide de calculs binaires simples et de regroupements avec "ET" et "OU".
- **Math.js** : Calcule des résultats logiques à partir d'expressions prises en charge par le moteur [Math.js](https://mathjs.org/).
- **Formula.js** : Calcule des résultats logiques à partir d'expressions prises en charge par le moteur [Formula.js](https://formulajs.info/).

Les trois calculs peuvent utiliser des variables du contexte du flux de travail comme opérandes pour le calcul.
