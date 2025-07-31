# APIClient

## Обзор

`APIClient` - это обертка на основе <a href="https://axios-http.com/" target="_blank">`axios`</a>, используемая для выполнения HTTP-запросов к ресурсам NocoBase на клиентской стороне.

### Базовое использование

```ts
class PluginSampleAPIClient extends Plugin {
  async load() {
    const res = await this.app.apiClient.request({
      // ...
    });
  }
}
```

## Свойства экземпляра

### `axios`

Экземпляр `axios`, предоставляющий доступ к API `axios`, например `apiClient.axios.interceptors`.

### `auth`

Класс аутентификации на клиентской стороне, см. [Auth](./auth.md).

### `storage`

Класс клиентского хранилища, см. [Storage](./storage.md).

## Методы класса

### `constructor()`

Конструктор для создания экземпляра `APIClient`.

#### Сигнатура

- `constructor(instance?: APIClientOptions)`

#### Типы

```ts
interface ExtendedOptions {
  authClass?: any;
  storageClass?: any;
}

export type APIClientOptions =
  | AxiosInstance
  | (AxiosRequestConfig & ExtendedOptions);
```

### `request()`

Выполняет HTTP-запрос.

#### Сигнатура

- `request<T = any, R = AxiosResponse<T>, D = any>(config: AxiosRequestConfig<D> | ResourceActionOptions): Promise<R>`

#### Типы

```ts
type ResourceActionOptions<P = any> = {
  resource?: string;
  resourceOf?: any;
  action?: string;
  params?: P;
};
```

#### Подробности

##### AxiosRequestConfig

Стандартные параметры запроса axios. См. <a href="https://axios-http.com/docs/req_config" target="_blank">Request Config</a>.

```ts
const res = await apiClient.request({ url: '' });
```

##### ResourceActionOptions

Параметры для операций с ресурсами NocoBase.

```ts
const res = await apiClient.request({
  resource: 'users',
  action: 'list',
  params: {
    pageSize: 10,
  },
});
```

| Свойство        | Тип     | Описание                                                                                                                      |
| --------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `resource`      | `string`| 1. Имя ресурса, например `a`<br />2. Имя ассоциированного объекта, например `a.b`                                            |
| `resourceOf`    | `any`   | Значение первичного ключа ресурса, когда `resource` является именем ассоциированного объекта. Например, для `a.b` - значение первичного ключа `a`. |
| `action`        | `string`| Имя действия                                                                                                                |
| `params`        | `any`   | Объект параметров запроса (в основном URL-параметры), тело запроса передается в `params.values`                             |
| `params.values` | `any`   | Объект тела запроса                                                                                                         |

### `resource()`

Получает объект с методами для операций с ресурсами NocoBase.

```ts
const resource = apiClient.resource('users');

await resource.create({
  values: {
    username: 'admin',
  },
});

const res = await resource.list({
  page: 2,
  pageSize: 20,
});
```

#### Сигнатура

- `resource(name: string, of?: any, headers?: AxiosRequestHeaders): IResource`

#### Типы

```ts
export interface ActionParams {
  filterByTk?: any;
  [key: string]: any;
}

type ResourceAction = (params?: ActionParams) => Promise<any>;

export type IResource = {
  [key: string]: ResourceAction;
};
```

#### Подробности

| Параметр | Тип                  | Описание                                                                                                                      |
| -------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `name`   | `string`             | Имя ресурса, например `a`<br />2. Имя ассоциированного объекта, например `a.b`                                               |
| `of`     | `any`                | Значение первичного ключа ресурса, когда `resource` является именем ассоциированного объекта. Например, для `a.b` - значение первичного ключа `a`. |
| `headers`| `AxiosRequestHeaders`| HTTP-заголовки, которые будут отправляться с последующими запросами операций с ресурсами                                    |
