## Chart Block: Gestion et Configuration des Graphiques

Le *Chart Block* (bloc de graphiques) est un outil essentiel pour organiser plusieurs graphiques dans une interface NocoBase. Ce panneau vous permet d'ajouter et de configurer des graphiques à partir de diverses collections de données.

### 1. Ajouter un Bloc de Graphiques

Pour ajouter un bloc de graphiques :

1. Cliquez sur **Ajouter un bloc** → **Graphiques** pour créer un bloc de graphiques vide.
2. À l'intérieur de ce bloc de graphiques, cliquez sur **Ajouter un bloc** → **Graphique** pour sélectionner la collection de données souhaitée et créer un graphique.

> Note : Seules les collections que l'utilisateur est autorisé à voir seront visibles dans la liste des options.

Voici l'interface visuelle pour l'ajout d'un bloc de graphiques :

![](https://static-docs.nocobase.com/790faf0a126e4ffcc3ff976818325cfd.png)

### 2. Paramètres du Bloc

Le bloc de graphiques possède plusieurs paramètres de personnalisation pour améliorer l'apparence et la fonctionnalité.

#### Modifier le Titre du Bloc
Vous pouvez définir un titre pour le bloc qui regroupera plusieurs graphiques.

#### Afficher l'Arrière-plan
Cette option permet de définir si le bloc doit afficher un arrière-plan ou non.

#### Afficher les Marges
Vous pouvez décider si vous voulez que les marges du bloc de graphiques soient visibles. Cela est particulièrement utile sur les appareils mobiles ou si le bloc contient un seul graphique, pour une apparence plus agréable.

Voici un exemple de l'apparence de ces options :

![](https://static-docs.nocobase.com/202409022042315.png)

Lorsqu'il n'y a qu'un seul graphique dans le bloc, ou lorsqu'il est visualisé sur mobile, les réglages d'arrière-plan et de marges rendent l'interface plus fluide.

### 3. Opérations de Configuration du Bloc

Les graphiques à l'intérieur du bloc peuvent être réorganisés librement, comme dans n'importe quel autre bloc :

- **Configurer** : Cliquez sur ce bouton pour modifier les paramètres du graphique actuel.
- **Dupliquer** : Ce bouton vous permet de créer une copie rapide du graphique.
- **Supprimer** : Cliquez ici pour supprimer un graphique du bloc.

#### Rafraîchir et Auto-Rafraîchissement

Le bloc de graphiques prend en charge la configuration d'un bouton de rafraîchissement. En cliquant dessus, tous les graphiques du bloc sont mis à jour. En mode de configuration, vous pouvez définir un intervalle de rafraîchissement automatique qui sera appliqué à tous les graphiques du bloc.

Voici les options visuelles liées à cette fonction :

- **Rafraîchir** : Clique pour forcer un rafraîchissement.
- **Intervalle Auto-Rafraîchissement** : Vous pouvez définir un intervalle de mise à jour automatique.

Le bouton de rafraîchissement configuré dans le bloc peut être également utilisé pour ajuster cet intervalle, et ce paramètre s'applique à tous les utilisateurs accédant à la page par défaut.

### 4. Configuration des Opérations pour le Graphique Individuel

Chaque graphique a ses propres options de configuration, similaires à celles du bloc de graphiques, mais ces paramètres affecteront uniquement le graphique individuel.

- **Rafraîchissement et Auto-Rafraîchissement** : Les graphiques individuels peuvent également avoir un bouton de rafraîchissement. Si ce bouton est configuré, il rafraîchira uniquement ce graphique spécifique.

### Notes Importantes

- Si à la fois le bloc de graphiques et un graphique individuel sont configurés avec des intervalles de rafraîchissement automatique, l'intervalle du graphique individuel prendra priorité.
- Si le bloc de graphiques a un intervalle de rafraîchissement, mais qu'un graphique individuel a l'auto-rafraîchissement désactivé ou n'a pas de bouton de rafraîchissement, l'intervalle du bloc de graphiques sera appliqué à ce graphique.

### Exemple visuel des options de rafraîchissement pour un graphique individuel :

![](https://static-docs.nocobase.com/202409022101033.png)

---

En résumé, le *Chart Block* vous permet d'organiser et de personnaliser plusieurs graphiques avec une grande flexibilité. Vous pouvez ajuster l'apparence, les paramètres de rafraîchissement, et interagir facilement avec les graphiques, soit au niveau du bloc, soit au niveau de chaque graphique individuel. Cela rend la visualisation des données plus dynamique et personnalisée dans NocoBase.
