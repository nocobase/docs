# Manuel de l'utilisateur

## Gestion de l'authentification des utilisateurs

Lorsque le plugin d'authentification des utilisateurs est installé, il initialise une méthode d'authentification de type `mot de passe`, basée sur le nom d'utilisateur et l'email de l'utilisateur.

![](https://static-docs.nocobase.com/66eaa9d5421c9cb713b117366bd8a5d5.png)

## Activer le type d'authentification

![](https://static-docs.nocobase.com/7f1fb8f8ca5de67ffc68eff0a65848f5.png)

Seuls les types d'authentification activés seront affichés sur la page de connexion.

![](https://static-docs.nocobase.com/8375a36ef98417af0f0977f1e07345dd.png)

## Types d'authentification des utilisateurs

![](https://static-docs.nocobase.com/da4250c0cea343ebe470cbf7be4b12e4.png)

Les types d'authentification des utilisateurs actuellement supportés par NocoBase sont :

- **Mot de passe (Password)**, plugin d'authentification utilisateur intégré
- **SMS (SMS)**, étendu par le plugin [sms-auth](../../auth-sms/index.md)
- **CAS**, étendu par le plugin [cas-auth](../../auth-cas/index.md)
- **SAML**, étendu par le plugin [saml-auth](../../auth-saml/index.md)
- **OIDC**, étendu par le plugin [oidc-auth](../../auth-oidc/index.md)

De plus, vous pouvez également étendre l'authentification des utilisateurs par vous-même, consultez le [Guide du développeur](../dev/guide.md).

## Authentification par mot de passe

### Interface de configuration

![](https://static-docs.nocobase.com/202411131505095.png)

### Autoriser l'inscription

Lorsque l'inscription est autorisée, la page de connexion affichera le lien pour créer un compte et vous pourrez accéder à la page d'inscription.

![](https://static-docs.nocobase.com/78903930d4b47aaf75cf94c55dd3596e.png)

Page d'inscription

![](https://static-docs.nocobase.com/ac3c3ab42df28cb7c6dc70b24e99e7f7.png)

Lorsque l'inscription n'est pas autorisée, la page de connexion ne montrera pas le lien pour créer un compte.

![](https://static-docs.nocobase.com/8d5e3b6df9991bfc1c2e095a93745121.png)

Lorsque l'inscription n'est pas autorisée, la page d'inscription ne pourra pas être accédée.

![](https://static-docs.nocobase.com/09325c4b07e09f88f80a14dff8430556.png)

### Paramètres du formulaire d'inscription<Badge>v1.4.0-beta.7+</Badge>

Vous pouvez définir les champs de la collection des utilisateurs à afficher dans le formulaire d'inscription et s'ils sont requis ou non. Au moins un des champs `nom d'utilisateur` ou `email` doit être défini pour s'afficher et être requis.

![](https://static-docs.nocobase.com/202411262133669.png)

Page d'inscription

![](https://static-docs.nocobase.com/202411262135801.png)

### Mot de passe oublié<Badge>v1.7.0+</Badge>

La fonctionnalité de mot de passe oublié permet aux utilisateurs de réinitialiser leur mot de passe via une vérification par e-mail lorsqu'ils l'ont oublié.

#### Configuration administrateur

1.  **Activer la fonctionnalité "Mot de passe oublié"**

  Dans "Paramètres" > "Authentification utilisateur" > onglet "Mot de passe oublié", cochez la case "Activer la fonctionnalité Mot de passe oublié".

  ![20250423071957_rec_](https://static-docs.nocobase.com/20250423071957_rec_.gif)

2.  **Configurer le canal de notification**

  Sélectionnez un canal de notification par e-mail (actuellement, seul l'e-mail est pris en charge). S'il n'y a pas de canal de notification disponible, vous devez d'abord en ajouter un.

  ![20250423072225_rec_](https://static-docs.nocobase.com/20250423072225_rec_.gif)

3.  **Configurer l'e-mail de réinitialisation du mot de passe**

  Personnalisez l'objet et le contenu de l'e-mail, en supportant les formats HTML ou texte brut. Vous pouvez utiliser les variables suivantes :
  *   Utilisateur actuel (Current user)
  *   Paramètres système (System settings)
  *   Lien de réinitialisation du mot de passe (Reset password link)
  *   Expiration du lien de réinitialisation (minutes) (Reset link expiration (minutes))

  ![20250427170047](https://static-docs.nocobase.com/20250427170047.png)

4.  **Définir la durée de validité du lien de réinitialisation**

  Définissez la durée de validité du lien de réinitialisation (en minutes), la valeur par défaut est de 120 minutes.

  ![20250423073557](https://static-docs.nocobase.com/20250423073557.png)

#### Flux utilisateur

1.  **Demander la réinitialisation du mot de passe**

  Sur la page de connexion, cliquez sur le lien "Mot de passe oublié" (l'administrateur doit d'abord activer la fonctionnalité de mot de passe oublié) pour accéder à la page de mot de passe oublié.

  ![20250421103458_rec_](https://static-docs.nocobase.com/20250421103458_rec_.gif)

  Entrez l'adresse e-mail enregistrée et cliquez sur le bouton "Envoyer l'e-mail de réinitialisation".

  ![20250421113442_rec_](https://static-docs.nocobase.com/20250421113442_rec_.gif)

2.  **Réinitialiser le mot de passe**

  L'utilisateur recevra un e-mail contenant un lien de réinitialisation. Cliquez sur le lien, puis définissez un nouveau mot de passe sur la page qui s'ouvre.

  ![20250421113748](https://static-docs.nocobase.com/20250421113748.png)

  Une fois terminé, l'utilisateur peut se connecter au système avec le nouveau mot de passe.

#### Remarques

*   Le lien de réinitialisation a une durée limitée, par défaut il est valide pendant 120 minutes après sa génération (configurable par l'administrateur).
*   Le lien ne peut être utilisé qu'une seule fois et devient invalide immédiatement après utilisation.
*   Si l'utilisateur ne reçoit pas l'e-mail de réinitialisation, veuillez vérifier si l'adresse e-mail est correcte ou consulter le dossier des courriers indésirables.
*   L'administrateur doit s'assurer que la configuration du serveur de messagerie est correcte pour garantir que les e-mails de réinitialisation peuvent être envoyés avec succès.
