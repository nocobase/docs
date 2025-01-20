# Google Workspace

## Définir Google comme IdP (Fournisseur d'Identité)

Allez sur la [Google Admin Console](https://admin.google.com/) - Applications - Applications Web et mobiles.

![](https://static-docs.nocobase.com/0812780b990a97a63c14ea8991959827.png)

Après avoir configuré l'application, copiez les informations suivantes :
- **SSO URL**
- **Entity ID**
- **Certificat**

![](https://static-docs.nocobase.com/aafd20a794730e85411c0c8f368637e0.png)

## Ajouter un nouvel Authentificateur sur NocoBase

Dans les paramètres du plugin, allez dans **Authentification des utilisateurs** - **Ajouter** - **SAML**.

![](https://static-docs.nocobase.com/5bc18c7952b8f15828e26bb07251a335.png)

Entrez les informations copiées respectivement dans les champs suivants :
- **SSO URL** : SSO URL
- **Certificat Public** : Certificat
- **idP Issuer** : Entity ID
- **http** : Cochez cette option si vous testez localement avec le protocole http.

Ensuite, copiez les informations **SP Issuer/EntityID** et **ACS URL** à partir de la section **Utilisation**.

## Compléter les informations SP sur Google

Retournez dans la Google Console, sur la page **Détails du fournisseur de services**, entrez l'**ACS URL** et l'**Entity ID** copiés précédemment, puis cochez **Signed Response**.

![](https://static-docs.nocobase.com/1536268bf8df4a5ebc72384317172191.png)

![](https://static-docs.nocobase.com/c7de1f8b84c1335de110e5a7c96255c4.png)

Dans la section **Mapping des Attributs**, ajoutez un mapping, vous pouvez lier les attributs correspondants.

![](https://static-docs.nocobase.com/27180f2f46480c3fee3016df86d6fdb8.png)
