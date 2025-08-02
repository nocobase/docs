# IModel

Интерфейс `IModel` определяет основные свойства и методы объекта модели.

```typescript
export interface IModel {
  toJSON: () => any;
}
```

## API

### toJSON()

Преобразует объект модели в формат JSON.
