# Aperçu des fichiers Office <Badge>v1.8.11+</Badge>

<PluginInfo name="file-previewer-office"></PluginInfo>

Le plugin d’aperçu des fichiers Office permet d’afficher les fichiers au format Office, tels que Word, Excel et PowerPoint, directement dans l’application NocoBase.  
Il repose sur le service en ligne public fourni par Microsoft pour intégrer le contenu du fichier dans une interface d’aperçu, permettant aux utilisateurs de consulter les documents dans leur navigateur, sans les télécharger ni utiliser une application Office.

## Guide d’utilisation

Par défaut, ce plugin est **désactivé**. Il peut être activé via le gestionnaire de plugins, sans nécessiter de configuration supplémentaire.

![Interface d’activation du plugin](https://static-docs.nocobase.com/20250731140048.png)

Après avoir téléchargé un fichier Office (Word / Excel / PowerPoint) dans un champ de fichier d’un tableau de données, il suffit de cliquer sur l’icône ou le lien du fichier pour en afficher le contenu dans une fenêtre contextuelle ou une interface intégrée.

![Exemple d’aperçu](https://static-docs.nocobase.com/20250731143231.png)

## Principe de fonctionnement

Ce plugin utilise le service en ligne public de Microsoft (Office Web Viewer) pour générer l’aperçu. Le processus est le suivant :

- L’interface génère une URL publiquement accessible pour le fichier téléchargé (y compris les URL signées, comme celles générées par le plugin S3-Pro) ;
- Le plugin intègre l’aperçu dans une balise `iframe` à l’aide de l’adresse suivante :

  ```
  https://view.officeapps.live.com/op/embed.aspx?src=<URL publique du fichier>
  ```

- Le service Microsoft récupère le fichier à partir de l’URL, le rend et retourne une page de prévisualisation.

## Remarques

- Étant donné que ce plugin dépend du service en ligne de Microsoft, il est nécessaire de s’assurer que la connexion réseau est stable et que les services Microsoft sont accessibles.
- Microsoft accède à l’URL du fichier fourni, et le contenu du fichier peut être temporairement mis en cache sur ses serveurs afin de générer l’aperçu. Cela représente un risque potentiel pour la confidentialité. Si cela vous préoccupe, il est recommandé de ne pas utiliser cette fonction d’aperçu[^1].
- Le fichier à prévisualiser doit être accessible via une URL publique. En général, les fichiers téléchargés dans NocoBase génèrent automatiquement une URL publique (y compris les URL signées générées par le plugin S3-Pro). Si le fichier a des restrictions d’accès ou est stocké dans un réseau interne, l’aperçu ne sera pas possible[^2].
- Ce service ne prend pas en charge l’authentification ou les fichiers stockés dans des espaces privés. Par exemple, les fichiers accessibles uniquement sur un intranet ou nécessitant une connexion ne peuvent pas être prévisualisés.
- Une fois le fichier récupéré par Microsoft, son contenu peut être mis en cache pendant une courte période. Même si le fichier source est supprimé, il est possible que l’aperçu reste accessible pendant un certain temps.
- Limites de taille recommandées : pour une prévisualisation fiable, les fichiers Word et PowerPoint ne doivent pas dépasser 10 Mo, et les fichiers Excel 5 Mo[^3].
- Ce service ne dispose actuellement d’aucune déclaration officielle claire concernant son utilisation à des fins commerciales. Veuillez évaluer les risques avant de l’utiliser dans un contexte professionnel[^4].

## Formats de fichiers pris en charge

Ce plugin ne prend en charge que les formats Office suivants, déterminés selon le type MIME du fichier :

- Document Word :  
  `application/vnd.openxmlformats-officedocument.wordprocessingml.document`
- Feuille de calcul Excel :  
  `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`
- Présentation PowerPoint :  
  `application/vnd.openxmlformats-officedocument.presentationml.presentation`

Les autres formats de fichiers ne seront pas pris en charge par ce plugin.

[^1]: [What is the status of view.officeapps.live.com?](https://learn.microsoft.com/en-us/answers/questions/5191451/what-is-the-status-of-view-officeapps-live-com)  
[^2]: [Microsoft Q&A - Access denied or non-public files cannot be previewed](https://learn.microsoft.com/en-us/answers/questions/1411722/https-view-officeapps-live-com-op-embed-aspx)  
[^3]: [Microsoft Q&A - File size limits for Office Web Viewer](https://learn.microsoft.com/en-us/answers/questions/1411722/https-view-officeapps-live-com-op-embed-aspx#file-size-limits)  
[^4]: [Microsoft Q&A - Commercial use of Office Web Viewer](https://learn.microsoft.com/en-us/answers/questions/5191451/what-is-the-status-of-view-officeapps-live-com#commercial-use)
