# ICollection (Интерфейс коллекции)

Интерфейс `ICollection` представляет модель данных, содержащую информацию о названии модели, полях, ассоциациях и других характеристиках.

```typescript
export interface ICollection {
  repository: IRepository;  // Репозиторий коллекции

  updateOptions(options: any): void;  // Обновление параметров

  setField(name: string, options: any): IField;  // Установка поля

  removeField(name: string): void;  // Удаление поля

  getFields(): Array<IField>;  // Получение всех полей

  getField(name: string): IField;  // Получение конкретного поля

  [key: string]: any;  // Динамические свойства
}
```

## Основные компоненты

### repository

Экземпляр `Repository`, к которому принадлежит данная коллекция.

## Методы API

### updateOptions()

Обновляет параметры коллекции.

```typescript
updateOptions(options: any): void
```

### setField()

Добавляет или изменяет поле в коллекции.

```typescript
setField(name: string, options: any): IField
```

### removeField()

Удаляет поле из коллекции.

```typescript
removeField(name: string): void
```

### getFields()

Возвращает массив всех полей коллекции.

```typescript
getFields(): Array<IField>
```

### getField()

Получает конкретное поле коллекции по имени.

```typescript
getField(name: string): IField
```

Этот интерфейс предоставляет базовый функционал для работы с коллекциями данных в системе, позволяя управлять их структурой и свойствами.
