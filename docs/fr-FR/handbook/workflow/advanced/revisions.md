# Révisions

Après qu'un flux de travail configuré ait été déclenché au moins une fois, si vous souhaitez modifier la configuration du flux de travail ou de ses nœuds, vous devez créer une nouvelle version, puis la modifier. Cela garantit également que lors de l'examen de l'historique des exécutions des flux de travail déjà déclenchés, ces derniers ne seront pas affectés par de futures modifications.

Sur la page de configuration du flux de travail, vous pouvez consulter les versions existantes du flux dans le menu des versions en haut à droite :

![Voir les versions du flux de travail](https://static-docs.nocobase.com/ad93d2c08166b0e3e643fb148713a63f.png)

Dans le menu des opérations supplémentaires ("...") situé à droite, vous pouvez faire un "copier vers une nouvelle version" basé sur la version actuelle affichée :

![Copier le flux de travail vers une nouvelle version](https://static-docs.nocobase.com/2805798e6caca2af004893390a744256.png)

Après avoir copié vers une nouvelle version, cliquez sur l'interrupteur "Activer"/"Désactiver". Après avoir basculé la version correspondante en mode activé, la nouvelle version du flux de travail prendra effet.

Si vous devez réutiliser une ancienne version, sélectionnez-en une depuis le menu des versions, puis basculez à nouveau l'interrupteur sur "Activer" pour que la version actuellement affichée prenne effet. Les futurs déclenchements fonctionneront alors sur la version correspondante du flux de travail.

Si vous devez désactiver un flux de travail, après avoir basculé l'interrupteur "Activer"/"Désactiver" sur le statut désactivé, le flux de travail ne sera plus déclenché.

:::info{title=Note}
Contrairement à la fonction "Dupliquer" dans la liste de gestion des flux de travail, "Copier vers une nouvelle version" restera regroupé dans le même groupe de flux de travail, mais pourra être distingué par la version. Cependant, dupliquer un flux de travail créera un flux de travail totalement nouveau, sans lien avec les versions précédentes du flux, et le compteur d'exécution sera également réinitialisé à zéro.
:::
