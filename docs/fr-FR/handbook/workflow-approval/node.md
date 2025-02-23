# Configuration du Nœud d'Approbation

Dans un workflow d'approbation, un nœud "Approbation" dédié est nécessaire pour configurer la logique permettant aux approbateurs de traiter (approuver, rejeter ou retourner) la demande d'approbation initiée. Ce nœud "Approbation" est exclusivement utilisé dans les workflows d'approbation.

:::info{title=Astuce}
**Différence avec le nœud "Manuel" général :** Le nœud "Manuel" général est polyvalent et peut être utilisé dans divers workflows pour l'entrée manuelle de données, la prise de décision sur la poursuite du processus et d'autres scénarios. En revanche, le nœud "Approbation" est spécialisé pour les workflows d'approbation et n'est pas applicable dans d'autres types de workflows.
:::

## Création d'un Nœud

Pour créer un nœud "Approbation", cliquez sur le signe plus ("+") dans le workflow. Ensuite, sélectionnez l'un des modes de passage disponibles pour configurer le nœud d'approbation :

![Création du Nœud d'Approbation](https://static-docs.nocobase.com/f15d61208a3918d005cd2031fc9b6ce7.png)

## Modes de Passage

Il existe deux modes de passage disponibles :

1. **Mode de Passage Direct :** Ce mode est idéal pour des workflows simples, où le résultat au nœud d'approbation détermine si le processus se termine. Si la demande n'est pas approuvée, le processus se termine immédiatement.

    ![Mode de Passage du Nœud d'Approbation - Mode Direct](https://static-docs.nocobase.com/a9d446a186f61c546607cf1c2534b287.png)

2. **Mode de Ramification :** Ce mode est généralement utilisé pour des workflows plus complexes. Après que le nœud d'approbation produise un résultat, les nœuds suivants peuvent être exécutés dans les branches résultantes.

    ![Mode de Passage du Nœud d'Approbation - Mode de Ramification](https://static-docs.nocobase.com/57dc6a8907f3bb02fb28c354c241e4e5.png)

    Si le nœud est configuré avec une opération "Retour", une branche "Retour" sera créée, et le processus sortira de manière forcée après que la branche de retour soit terminée.

    Une fois ce nœud "approuvé", le processus continue à travers la branche de passage et le workflow suivant. Après une opération "rejeter", le paramètre par défaut permet au processus de continuer à travers le workflow suivant, bien que vous puissiez configurer le nœud pour terminer le processus après l'exécution de la branche de rejet.

:::info{title=Astuce}
Le mode de passage ne peut pas être modifié une fois le nœud créé.
:::

## Approveurs

Les approbateurs sont les utilisateurs responsables des actions d'approbation au nœud. Ils peuvent être composés d'un ou plusieurs utilisateurs, sélectionnés à partir d'une liste statique ou d'une valeur dynamique spécifiée par une variable.

![Nœud d'Approbation_Approbeurs](https://static-docs.nocobase.com/29c64297d577b9ca9457b1d7ac62287d.png)

Lors de l'utilisation d'une variable, seuls les clés primaires ou les clés étrangères provenant des données utilisateur dans le contexte et les résultats du nœud peuvent être sélectionnées. Si la variable sélectionnée est un tableau (dans les cas de relations plusieurs-à-plusieurs), chaque utilisateur du tableau sera intégré à la collection d'approbateurs globale.

## Modes de Négociation

S'il n'y a qu'un seul approbateur (y compris dans les cas où plusieurs variables sont dédupliquées), l'approbation sera gérée uniquement par cet utilisateur, quel que soit le mode de négociation choisi.

Pour plusieurs approbateurs, le mode de négociation sélectionné détermine la méthode de gestion :

1. **Ou** : Le nœud passe avec l'approbation de n'importe quel approbateur ; tous doivent rejeter pour que le nœud soit rejeté.
2. **Et** : Le nœud passe uniquement si tous les approbateurs approuvent ; un seul rejet entraîne le rejet du nœud.
3. **Vote** : Le nœud passe si une majorité (comme spécifiée) des approbateurs approuvent ; sinon, le nœud est rejeté.

Pour l'opération de retour, si un utilisateur de la collection d'approbateurs choisit un retour, le nœud quittera directement le workflow.

## Ordre de Traitement

Pour plusieurs approbateurs, l'ordre de traitement dicte la séquence des actions :

1. **Parallèlement** : Tous les approbateurs peuvent agir dans n'importe quel ordre, sans séquence requise.
2. **Séquentiellement** : Les approbateurs agissent dans l'ordre défini dans la collection d'approbateurs, où chaque utilisateur suivant ne peut continuer qu'après que le précédent ait soumis sa décision.

Peu importe que le traitement "Séquentiellement" soit activé ou non, les résultats générés suivront les règles décrites dans la section "Modes de Négociation", le nœud terminant son exécution une fois que les conditions sont remplies.

## Quitter le Workflow Après la Fin de la Branche de Rejet

Lorsque le "Mode de Ramification" est sélectionné pour le "Mode de Passage", vous pouvez choisir de quitter le workflow après la fin de la branche de rejet. Si sélectionné, un symbole "✗" apparaîtra à la fin de la branche de rejet, indiquant qu'aucun autre nœud ne sera exécuté après cette branche :

![Quitter Après Rejet](https://static-docs.nocobase.com/1e740df93c128fb6fe54bf85a740e683.png)

## Configuration de l'Interface de l'Approbateur

La configuration de l'interface de l'approbateur fournit l'interface pour les approbateurs lorsque le workflow atteint ce nœud. Cliquez sur le bouton de configuration pour ouvrir la fenêtre des paramètres :

![Fenêtre Contextuelle de Configuration de l'Interface de l'Approbateur](https://static-docs.nocobase.com/2c321ae164b436f1c572305ff27cc9dd.png)

Dans cette fenêtre de configuration, vous pouvez ajouter des blocs tels que les détails de la soumission d'approbation, les barres d'opération, et des textes d'invite personnalisés :

![Ajouter un Bloc dans la Configuration de l'Interface](https://static-docs.nocobase.com/9f8f11926e935ad8f8fbeec368edebfe.png)

### Bloc des Détails

Le bloc des détails de l'approbation comprend les données soumises par l'initiateur. Semblable à un bloc de données standard, vous pouvez librement ajouter des composants de champ de la table de données et les organiser pour organiser le contenu que l'approbateur doit examiner :

![Bloc des Détails dans la Configuration de l'Interface](https://static-docs.nocobase.com/1140ec13caeea1b364d12e057720a29c.png)

### Barre d'Opération

La barre d'opération peut inclure des boutons pris en charge par ce nœud, tels que "Approuver", "Rejeter", et "Retourner" :

![Barre d'Opération dans la Configuration de l'Interface](https://static-docs.nocobase.com/1bb090ed123f62ba8a524a3e9e7da328.png)

Besides, fields that can be modified by the approver can also be added to the operation form. These fields will be displayed in the operation form when the approver processes the approval. The approver can modify the values of these fields, and after submission, the data used for approval and the corresponding data snapshot in the approval process will be updated simultaneously.

![approval_node_ui_configuration_action_form_modify_fields](https://static-docs.nocobase.com/20241226232124.png)

### "Approve," "Reject," and "Return"

Among the approval operation buttons, "Approve," "Reject," and "Return" are decisive actions. Once submitted, the approver's task at this node is completed. Additional fields to be filled out during submission, such as "Comments," can be added in the "Processing Configuration" pop-up for each button.

![Operation Form Processing Configuration](https://static-docs.nocobase.com/20241226232225.png)

### "Reassign" and "Add Approver"

"Reassign" and "Add Approver" are non-decisive operations used to dynamically adjust the approvers in the approval workflow. "Reassign" transfers the current user's approval task to another user, while "Add Approver" inserts an additional approver before or after the current approver, allowing the new approver to continue the approval process.

After enabling the "Reassign" or "Add Approver" operation buttons, you need to set the "Assignable User Range" in the button's configuration menu to define the scope of users who can be assigned as new approvers:

![Operation Form Assignable User Range](https://static-docs.nocobase.com/20241226232321.png)

Similar to the node's original approver configuration, the assignable user range can be directly selected approvers or based on query conditions from the user table. The final result will be a merged collection, excluding users already in the approver collection.

:::warning{title=Important}
Si vous activez ou désactivez un bouton dans la barre d'opération, assurez-vous de sauvegarder la configuration du nœud après avoir fermé la fenêtre de configuration de l'interface. Sinon, les modifications ne prendront pas effet.
:::
