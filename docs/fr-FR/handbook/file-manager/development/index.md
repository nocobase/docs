# Développement

## Étendre le type de fichier client

Pour les fichiers téléchargés, l'interface utilisateur du client peut afficher des aperçus différents en fonction des types de fichiers. Le champ de pièce jointe du gestionnaire de fichiers utilise une capacité d'aperçu de fichiers intégrée basée sur le navigateur (iframe), prenant en charge la plupart des types de fichiers (tels que les images, vidéos, audio et PDF) pour un aperçu direct dans le navigateur. Lorsqu'un type de fichier n'est pas pris en charge pour un aperçu dans le navigateur ou nécessite une interaction spéciale, des composants d'aperçu supplémentaires peuvent être étendus en fonction du type de fichier.

### Exemple

Par exemple, si vous souhaitez étendre un composant de carrousel pour les fichiers image, vous pouvez utiliser le code suivant :

```ts
import match from 'mime-match';
import { Plugin, attachmentFileTypes } from '@nocobase/client';

class MyPlugin extends Plugin {
  load() {
    attachmentFileTypes.add({
      match(file) {
        return match(file.mimetype, 'image/*');
      },
      Previewer({ index, list, onSwitchIndex }) {
        const onDownload = useCallback(
          (e) => {
            e.preventDefault();
            const file = list[index];
            saveAs(file.url, `${file.title}${file.extname}`);
          },
          [index, list],
        );
        return (
          <LightBox
            // discourageDownloads={true}
            mainSrc={list[index]?.url}
            nextSrc={list[(index + 1) % list.length]?.url}
            prevSrc={list[(index + list.length - 1) % list.length]?.url}
            onCloseRequest={() => onSwitchIndex(null)}
            onMovePrevRequest={() => onSwitchIndex((index + list.length - 1) % list.length)}
            onMoveNextRequest={() => onSwitchIndex((index + 1) % list.length)}
            imageTitle={list[index]?.title}
            toolbarButtons={[
              <button
                key={'preview-img'}
                style={{ fontSize: 22, background: 'none', lineHeight: 1 }}
                type="button"
                aria-label="Télécharger"
                title="Télécharger"
                className="ril-zoom-in ril__toolbarItemChild ril__builtinButton"
                onClick={onDownload}
              >
                <DownloadOutlined />
              </button>,
            ]}
          />
        );
      },
    });
  }
}
```

`attachmentFileTypes` est un objet d'entrée fourni par le paquet `@nocobase/client` pour étendre les types de fichiers. Vous pouvez utiliser sa méthode `add` pour ajouter un descripteur de type de fichier.

Chaque type de fichier doit implémenter une méthode `match()` pour vérifier si le type de fichier répond aux exigences. Dans l'exemple, le paquet `mime-match` est utilisé pour vérifier l'attribut `mimetype` du fichier. S'il correspond à `image/*`, il est considéré comme un type de fichier nécessitant un traitement. S'il ne correspond pas, il reviendra au type intégré.

La propriété `Previewer` du descripteur de type est le composant utilisé pour l'aperçu. Lorsque le type de fichier correspond, ce composant sera rendu pour l'aperçu. Il est généralement recommandé d'utiliser un composant modal (comme `<Modal />`) comme conteneur de base et de placer l'aperçu et le contenu interactif dans ce composant pour implémenter la fonctionnalité d'aperçu.

### API

```ts
export interface FileModel {
  id: number;
  filename: string;
  path: string;
  title: string;
  url: string;
  extname: string;
  size: number;
  mimetype: string;
}

export interface PreviewerProps {
  index: number;
  list: FileModel[];
  onSwitchIndex(index): void;
}

export interface AttachmentFileType {
  match(file: any): boolean;
  Previewer?: React.ComponentType<PreviewerProps>;
}

export class AttachmentFileTypes {
  add(type: AttachmentFileType): void;
}
```

#### `attachmentFileTypes`

`attachmentFileTypes` est une instance globale qui peut être importée depuis le paquet `@nocobase/client` :

```ts
import { attachmentFileTypes } from '@nocobase/client';
```

#### `attachmentFileTypes.add()`

Enregistre un descripteur de type dans le registre des types de fichiers. Le type du descripteur est `AttachmentFileType`.

#### `AttachmentFileType`

##### `match()`

La méthode `match` du type de fichier.

L'argument `file` est l'objet de données du fichier téléchargé, incluant plusieurs propriétés pouvant être utilisées pour vérifier les types.

* `mimetype` : Type MIME
* `extname` : Extension du fichier, y compris le "."
* `path` : Chemin relatif du fichier
* `url` : URL du fichier

La valeur de retour est de type `boolean`, indiquant si le fichier correspond ou non.

##### `Previewer`

Composant utilisé pour prévisualiser le fichier.

Propriétés :

* `index` : Valeur de l'index dans la liste des pièces jointes
* `list` : Liste des pièces jointes
* `onSwitchIndex` : Méthode pour changer l'index de prévisualisation

Pour `onSwitchIndex`, n'importe quelle valeur d'index dans la liste peut être utilisée pour passer à un autre fichier. Si `null` est utilisé comme argument, le composant d'aperçu sera fermé.

```ts
onSwitchIndex(null);
```
