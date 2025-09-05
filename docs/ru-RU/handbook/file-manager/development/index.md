# Разработка

## Расширение типов файлов клиента

Для загруженных файлов клиентский интерфейс может отображать различные предварительные просмотры в зависимости от типов файлов. Поле вложения file-manager использует встроенную возможность предварительного просмотра файлов на основе браузера (iframe), поддерживая большинство типов файлов (таких как изображения, видео, аудио и PDF) для прямого просмотра в браузере. Когда тип файла не поддерживается для предварительного просмотра в браузере или требует специального взаимодействия, можно расширить дополнительные компоненты предварительного просмотра на основе типа файла.

### Пример

Например, если вы хотите расширить компонент карусели для файлов изображений, вы можете использовать следующий код:

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
                aria-label="Download"
                title="Download"
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

`attachmentFileTypes` — это объект входа, предоставляемый пакетом `@nocobase/client` для расширения типов файлов. Вы можете использовать его метод `add` для расширения дескриптора типа файла.

Каждый тип файла должен реализовать метод `match()` для проверки соответствия типа файла требованиям. В примере используется пакет `mime-match` для проверки атрибута `mimetype` файла. Если он соответствует `image/*`, он считается типом файла, который требует обработки. Если он не соответствует, он вернется к встроенному типу.

Свойство `Previewer` в дескрипторе типа — это компонент, используемый для предварительного просмотра. Когда тип файла соответствует, этот компонент будет отрендерен для предварительного просмотра. Обычно рекомендуется использовать модальный компонент (например, `<Modal />`) в качестве базового контейнера и размещать содержимое предварительного просмотра и интерактивное содержимое в этом компоненте для реализации функциональности предварительного просмотра.

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

`attachmentFileTypes` — это глобальный экземпляр, который можно импортировать из пакета `@nocobase/client`:

```ts
import { attachmentFileTypes } from '@nocobase/client';
```

#### `match(file)`

Метод `match` принимает объект файла и возвращает `boolean`, указывающий, соответствует ли файл этому типу.

#### `Previewer`

Компонент `Previewer` получает следующие свойства:

- `index: number` — индекс текущего файла в списке
- `list: FileModel[]` — массив всех файлов
- `onSwitchIndex(index: number | null)` — функция для переключения на другой файл или закрытия предварительного просмотра

### Примечания

- Компонент `Previewer` должен быть модальным или полноэкранным компонентом
- Рекомендуется использовать библиотеки типа `react-image-lightbox` или `react-image-gallery` для реализации предварительного просмотра изображений
- Для других типов файлов можно использовать соответствующие библиотеки (например, `react-pdf` для PDF файлов)
