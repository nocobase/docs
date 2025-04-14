# Modèle de bloc

<PluginInfo name="block-template"></PluginInfo>
<style>
.markdown h5 {
    font-size: 15px;
}
</style>

## Introduction

Le modèle de bloc permet de fournir des capacités de modélisation aux blocs. Il peut être utilisé pour la gestion centralisée des modèles et pour créer des blocs à partir de modèles. Les blocs créés à partir d’un modèle héritent de celui-ci et peuvent y ajouter leur propre configuration.

## Installation

Plugin intégré, aucune installation requise.

## Guide d'utilisation

![Écran principal](https://static-docs.nocobase.com/main-screen-block-template.png)

### Gestion des modèles

#### Créer un modèle

Cliquez sur le bouton **« Nouveau »**, renseignez les informations nécessaires, puis cliquez sur **« Soumettre »** pour créer un modèle.

![Créer un modèle](https://static-docs.nocobase.com/create-template.png)

##### Enregistrer en tant que modèle

Les blocs de données d’une page peuvent être enregistrés en tant que modèles via le menu **« Enregistrer comme modèle »**.

![Enregistrer comme modèle](https://static-docs.nocobase.com/save-as-block-template.png)

:::info{title=Remarque}
- Seuls les blocs de données présents sur la page peuvent être enregistrés comme modèles. Les blocs dans des fenêtres pop-up ne peuvent pas être enregistrés directement comme modèles.
:::

#### Configurer un modèle

Sélectionnez un modèle, puis cliquez sur le bouton **« Configurer »** pour accéder à l'interface de configuration et définir les blocs de données du modèle.

![Configurer un modèle](https://static-docs.nocobase.com/configure-template.png)

:::info{title=Remarque}
- Actuellement, un modèle ne peut contenir qu’un seul bloc de données. Si aucun bloc de données n’est configuré, il ne sera pas possible d’utiliser le modèle pour créer un bloc.
- Les blocs de type graphique ne peuvent pas encore être utilisés dans les modèles.
:::

#### Modifier un modèle

Sélectionnez un modèle, puis cliquez sur le bouton **« Modifier »** pour changer le titre ou la description du modèle.

![Modifier un modèle](https://static-docs.nocobase.com/edit-template.png)

#### Copier un modèle

Sélectionnez un modèle, cliquez sur **« Copier »**, entrez un nouveau titre, puis cliquez sur **« Soumettre »**. Le modèle sera copié et pourra ensuite être modifié pour répondre à d'autres besoins.

![Copier un modèle](https://static-docs.nocobase.com/copy-template.png)

#### Supprimer un modèle

Sélectionnez un modèle, cliquez sur **« Supprimer »**, puis cliquez sur **« Soumettre »** pour confirmer la suppression.

![Supprimer un modèle](https://static-docs.nocobase.com/delete-template.png)

Lors de la suppression, vous pouvez choisir de **conserver ou non les blocs créés à partir du modèle** :
- Si vous choisissez de conserver, les blocs existants seront convertis en blocs de page classiques.
- Sinon, tous les blocs créés à partir du modèle seront également supprimés.

### Utilisation des modèles

#### Créer un bloc

Lors de la création d’un bloc sur une page, vous pouvez sélectionner un modèle de bloc existant pour l’utiliser.

![Créer un bloc](https://static-docs.nocobase.com/create-block.png)

Les blocs créés à partir d’un modèle se distinguent des blocs classiques par les points suivants :

1. Le bloc hérite du modèle : vous pouvez ajouter votre propre configuration, tandis que les paramètres non modifiés restent synchronisés avec le modèle.
2. Les composants UI hérités du modèle ne peuvent pas être supprimés de la page.  
   ![Suppression désactivée](https://static-docs.nocobase.com/disable-delete.png)

3. Les champs et actions ajoutés sont affichés avec un fond de couleur différente pour les distinguer.  
   ![Style du bloc](https://static-docs.nocobase.com/template-bg.png)

4. Les blocs et les composants UI hérités disposent d’une option **« Revenir au modèle »**, qui permet de rétablir la configuration du modèle d'origine.  
   ![Revenir au modèle](https://static-docs.nocobase.com/revert-to-template.gif)

:::info{title=Remarque}
La position des composants UI à l'intérieur d’un bloc est déterminée par la page, et non synchronisée automatiquement avec le modèle. Pour synchroniser la disposition, il faut **restaurer le bloc complet depuis le modèle**.


## FAQ

**Q : Comment créer un modèle de formulaire de modification ?**

**R :** La configuration d’un modèle de formulaire de modification est identique à celle d’un formulaire d’ajout. Vous pouvez créer un modèle de formulaire de modification en configurant un bloc de type formulaire d’ajout — il apparaîtra alors automatiquement dans les options de modèle lors de la configuration d’un formulaire de modification.

---

**Q : Pourquoi la position des champs dans le modèle ne se synchronise-t-elle pas avec le bloc créé à partir de celui-ci ?**

**R :** Le positionnement des composants de l’interface utilisateur dans un bloc est déterminé par la mise en page de la page elle-même, et ne se synchronise pas automatiquement avec les modifications du modèle.  
Si vous souhaitez synchroniser les positions, utilisez la fonction **"Restaurer depuis le modèle"**. Attention : cela **effacera les personnalisations** effectuées sur le bloc.

---

**Q : Que faire des modèles non utilisés ?**

**R :** Il est recommandé de **supprimer** les modèles inutilisés. Lors de la suppression d’un modèle, vous pouvez choisir de **conserver ou non les blocs créés à partir de celui-ci** :
- Si vous les conservez, ces blocs seront convertis en blocs de page standard, sans perte de fonctionnalité.
- Si vous ne les conservez pas, les blocs créés à partir du modèle seront **également supprimés**.

---

**Q : Pourquoi les modèles ne sont-ils pas disponibles pour les blocs de type graphique ?**

**R :** Cette fonctionnalité sera disponible dans une **prochaine version**.

---

**Q : Pourquoi ne puis-je pas enregistrer un bloc d’une fenêtre modale en tant que modèle ?**

**R :** Les modèles sont basés sur les blocs placés directement sur les pages, car ils fonctionnent dans un **contexte indépendant**.  
Les blocs dans les fenêtres contextuelles (modales ou tiroirs) dépendent de blocs situés **hors de ces fenêtres**, c’est pourquoi il n’est **pas encore possible de les enregistrer comme modèles**.

---

**Q : Comment convertir un ancien modèle en un nouveau modèle de bloc ?**

**R :** Vous pouvez créer un **nouveau bloc de page** à partir d’un ancien modèle, puis enregistrer ce **nouveau bloc comme modèle**.

![Conversion de modèle](https://static-docs.nocobase.com/20250408092704_rec_.gif)

---
