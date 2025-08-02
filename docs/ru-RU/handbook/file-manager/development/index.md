# Просмотр изображений

## Введение

Плагин просмотра изображений предоставляет функцию масштабирования и просмотра изображений. Он позволяет пользователям просматривать изображения в полноэкранном режиме с возможностью навигации между ними.

## Установка

Встроенный плагин — отдельная установка не требуется.

## Пример использования

### Открытие просмотра изображений

```tsx
import { useImagePreview } from '@nocobase/plugin-image-preview/client';

function MyComponent() {
  const { open } = useImagePreview();

  const images = [
    { url: 'https://example.com/image1.jpg', title: 'Изображение 1' },
    { url: 'https://example.com/image2.jpg', title: 'Изображение 2' },
    { url: 'https://example.com/image3.jpg', title: 'Изображение 3' },
  ];

  return (
    <div>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.url}
          alt={image.title}
          style={{ cursor: 'pointer', margin: '5px' }}
          onClick={() => open(index, images)}
        />
      ))}
    </div>
  );
}
```

### Пользовательский интерфейс загрузки

```tsx
import { useImagePreview } from '@nocobase/plugin-image-preview/client';
import { Button } from 'antd';

function CustomToolbar() {
  const { open, close, download } = useImagePreview();

  return (
    <div>
      <Button onClick={() => download()}>Скачать</Button>
      <Button onClick={() => close()}>Закрыть</Button>
    </div>
  );
}

function MyComponent() {
  const { open } = useImagePreview();

  const images = [
    { url: 'https://example.com/image1.jpg', title: 'Изображение 1' },
  ];

  return (
    <div>
      <img
        src={images[0].url}
        alt={images[0].title}
        style={{ cursor: 'pointer' }}
        onClick={() => open(0, images, CustomToolbar)}
      />
    </div>
  );
}
```

## API

### `useImagePreview()`

Хук для управления просмотром изображений.

**Возвращаемые значения:**

| Метод | Описание |
|------|---------|
| `open(index: number, list: Array<{ url: string, title?: string }>, ToolbarComponent?: React.ComponentType)` | Открывает просмотр изображений с указанным индексом, списком изображений и необязательным пользовательским компонентом панели инструментов. |
| `close()` | Закрывает просмотр изображений. |
| `download()` | Скачивает текущее изображение. |

### Параметры компонента панели инструментов

Компонент панели инструментов получает следующие свойства:

| Свойство | Тип | Описание |
|--------|-----|----------|
| `onClose` | `() => void` | Функция для закрытия просмотра изображений. |
| `onMovePrev` | `() => void` | Функция для перехода к предыдущему изображению. |
| `onMoveNext` | `() => void` | Функция для перехода к следующему изображению. |
| `currentImage` | `{ url: string, title?: string }` | Текущее отображаемое изображение. |
| `currentIndex` | `number` | Индекс текущего изображения в списке. |

## Примечания

- Поддерживается навигация с помощью клавиш со стрелками.
- Поддерживается закрытие по клавише Escape.
- Поддерживается масштабирование колесом мыши.
- Изображения предзагружаются для плавной навигации.

```tsx
// Пример реализации пользовательской панели инструментов
const CustomToolbar = ({ onClose, onMovePrev, onMoveNext, currentImage, currentIndex }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = currentImage.url;
    link.download = currentImage.title || 'image';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ position: 'absolute', top: 10, right: 10, display: 'flex', gap: 8 }}>
      <button onClick={onMovePrev}>Назад</button>
      <button onClick={onMoveNext}>Вперёд</button>
      <button onClick={handleDownload}>Скачать</button>
      <button onClick={onClose}>Закрыть</button>
      <span>{currentIndex + 1} из {images.length}</span>
    </div>
  );
};
```
