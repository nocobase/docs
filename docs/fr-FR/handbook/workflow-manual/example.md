### Exemple

### Revue d'Article

Imaginons un scénario où un utilisateur soumet un article. Avant que cet article ne puisse être publié, il doit être examiné et approuvé par un administrateur. Si l'article ne passe pas ce processus de révision, il restera sous forme de brouillon, non publié. L'ensemble de ce workflow peut être mis en œuvre en utilisant un nœud "Mise à jour du formulaire" dans un processus manuel.

Pour commencer, créez un workflow déclenché par l'action "Ajouter un article", puis ajoutez un nœud manuel à celui-ci :

<figure>
  <img alt="Exemple de Nœud Manuel pour Workflow de Revue d'Article" src="https://github.com/nocobase/nocobase/assets/525658/2021bf42-f372-4f69-9c84-5a786c061e0e" width="360" />
</figure>

Dans ce nœud manuel, assignez la responsabilité à un administrateur. Ensuite, dans l'interface de configuration, ajoutez un bloc qui affiche les détails de l'article nouvellement ajouté en fonction des données de déclenchement :

<figure>
  <img alt="Exemple de Nœud Manuel de Configuration de la Revue d'Article" src="https://github.com/nocobase/nocobase/assets/525658/c61d0aac-23cb-4387-b60e-ce3cc7bf1c24" width="680" />
</figure>

Ensuite, ajoutez un bloc qui utilise le "Formulaire de Mise à jour des Données" dans l'interface de configuration. Ce bloc doit être lié à la table des articles, permettant à l'administrateur de décider si l'article doit être approuvé. Une fois le formulaire ajouté, un bouton "Continuer le processus" sera généré automatiquement, signalant l'approbation si cliqué. De plus, vous devez ajouter un bouton "Terminer le processus" pour gérer les cas où l'article est rejeté :

<figure>
  <img alt="Exemple de Nœud Manuel de Revue d'Article avec Formulaire et Actions" src="https://github.com/nocobase/nocobase/assets/525658/4baaf41e-3d81-4ee8-a038-29db05e0d99f" width="673" />
</figure>

Lorsque le processus continue, le statut de l'article devra être mis à jour. Il existe deux façons principales de gérer cela. La première méthode consiste à afficher directement le champ du statut de l'article dans le formulaire, offrant ainsi à l'opérateur le choix. Cette méthode est particulièrement utile pour les scénarios où le formulaire nécessite une entrée active, comme fournir des commentaires :

<figure>
  <img alt="Exemple de Nœud Manuel Revue d'Article - Configuration des Champs du Formulaire" src="https://github.com/nocobase/nocobase/assets/525658/82ea4e0e-25fc-4921-841e-e1a2782a87d1" width="668" />
</figure>

Pour un processus plus simplifié, vous pouvez configurer directement les valeurs des champs du formulaire sur le bouton "Continuer le processus". Ici, vous ajouteriez un champ "Statut" avec la valeur définie sur "Publié", ce qui garantit que, dès que l'opérateur clique sur le bouton, l'article sera automatiquement mis à jour avec le statut "Publié" :

<figure>
  <img alt="Exemple de Nœud Manuel Revue d'Article - Configuration de l'Assignation du Formulaire" src="https://github.com/nocobase/nocobase/assets/525658/0340bd9f-8323-4e4f-bc5a-8f81be3d6736" width="711" />
</figure>

Ensuite, dans le menu de configuration en haut à droite du bloc formulaire, sélectionnez les conditions qui filtreront les données à mettre à jour. Dans ce cas, vous choisirez la table "Article" et définirez la condition de filtrage comme étant "ID égal aux Variables de Déclenchement / Données de Déclenchement / ID" :

<figure>
  <img alt="Exemple de Nœud Manuel Revue d'Article - Conditions de Configuration du Formulaire" src="https://github.com/nocobase/nocobase/assets/525658/da004055-0262-49ae-88dd-3844f3c92e28" width="1020" />
</figure>

Enfin, pour améliorer l'expérience utilisateur, vous pouvez personnaliser les titres des différents blocs, le texte des boutons et le texte par défaut dans les champs du formulaire :

<figure>
  <img alt="Exemple de Nœud Manuel Revue d'Article - Configuration Finale du Formulaire" src="https://github.com/nocobase/nocobase/assets/525658/21db5f6b-690b-49c1-8259-4f7b8874620d" width="678" />
</figure>

Après avoir terminé ces étapes, fermez le panneau de configuration et cliquez sur le bouton de soumission pour enregistrer la configuration du nœud. Votre workflow est maintenant complet. Une fois ce workflow activé, chaque fois qu'un nouvel article est ajouté, il déclenchera automatiquement le workflow. L'administrateur verra ensuite cette tâche dans sa liste de tâches. En cliquant pour afficher, les détails de la tâche seront affichés :

<figure>
  <img alt="Exemple de Liste de Tâches Revue d'Article" src="https://github.com/nocobase/nocobase/assets/525658/4e1748cd-6a07-4045-82e5-286826607826" width="1363" />
</figure>

<figure>
  <img alt="Exemple de Détails de Tâche Revue d'Article" src="https://github.com/nocobase/nocobase/assets/525658/65f01fb1-8cb0-45f8-ac21-ec8ab59be449" width="680" />
</figure>

En fonction des détails de l'article, l'administrateur peut alors décider si l'article doit être publié. Si approuvé, cliquer sur le bouton "Passer" mettra l'article à jour avec le statut "Publié". Si rejeté, cliquer sur le bouton "Rejeter" assurera que l'article reste en statut brouillon.

### Approbation de Congé

Maintenant, considérons un scénario où un employé doit demander un congé. Cette demande doit être approuvée par un superviseur avant de prendre effet, et les données de congé correspondantes pour l'employé seront ajustées en conséquence. Quel que soit le fait que la demande soit approuvée ou rejetée, un SMS de notification sera envoyé à l'employé en utilisant un nœud de requête (comme détaillé dans la section [Requête HTTP](#_HTTP_Request)). Ce processus peut être géré efficacement en utilisant un formulaire personnalisé dans un nœud manuel.

Commencez par créer un workflow déclenché par "Ajouter une Demande de Congé", puis ajoutez un nœud manuel, similaire au processus de revue d'article. Cependant, dans ce cas, la personne responsable est le superviseur. Ajoutez un bloc basé sur les données de déclenchement dans l'interface de configuration pour afficher les détails de la demande de congé nouvellement soumise. Ensuite, ajoutez un bloc basé sur un formulaire personnalisé où le superviseur pourra décider d'approuver la demande. Ce formulaire personnalisé doit inclure des champs pour le statut d'approbation et les raisons du rejet :

<figure>
  <img alt="Exemple de Nœud Manuel pour Approbation de Congé - Configuration" src="https://github.com/nocobase/nocobase/assets/525658/ef3bc7b8-56e8-4a4e-826e-ffd0b547d1b6" width="675" />
</figure>

Contrairement au processus de revue d'article, puisque les étapes suivantes dépendent de la décision du superviseur, seul un bouton "Continuer le Processus" est configuré ici pour la soumission, omettant le bouton "Terminer le Processus".

De plus, après le nœud manuel, un nœud conditionnel peut être ajouté pour déterminer si le superviseur a approuvé la demande de congé. Dans la branche approuvée, vous ajouteriez un nœud de traitement des données pour ajuster les données de congé, et après la fin de la branche, inclure un nœud de requête pour envoyer un SMS à l'employé. Cela complétera le processus comme illustré ci-dessous :

<figure>
  <img alt="Exemple de Workflow d'Approbation de Congé - Arrangement des Nœuds" src="https://github.com/nocobase/nocobase/assets/525658/733f68da-e44f-4172-9772-a287ac2724f2" width="593" />
</figure>

Le nœud conditionnel doit être configuré avec les critères suivants : "**Résultat du Nœud / Superviseur / Formulaire du Processus / Approbation** égal à '**Approuvé**'":

<figure>
  <img alt="Exemple de Nœud Manuel Approbation de Congé - Jugement Conditionnel" src="https://github.com/nocobase/nocobase/assets/525658/57b972f0-a3ce-4f33-8d40-4272ad205c20" width="678" />
</figure>

Les données du nœud de requête peuvent être personnalisées en utilisant les variables du formulaire correspondantes du nœud manuel, permettant d'envoyer un contenu SMS différent en fonction de l'approbation ou du rejet de la demande. Avec cette configuration, le workflow est maintenant complet. Une fois le workflow activé, les superviseurs peuvent gérer les demandes de congé directement depuis leurs tâches à faire, avec des actions similaires à celles du processus de revue d'article.
