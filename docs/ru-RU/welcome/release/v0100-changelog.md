# Версия 0.10: 2023-06-20

## Новые возможности во втором квартале

- Улучшения в компонентах ассоциативных полей, поддержка переключения между несколькими компонентами
  - Выбор
  - Средство выбора записей
  - Вспомогательная форма/дополнительные сведения
  - Вспомогательная таблица
  - файловый менеджер
  - Название (только для чтения)
- Быстрое создание реляционных данных, поддерживает два режима быстрого создания
  - Добавить в выпадающем меню для быстрого создания новой записи на основе поля заголовка
  - Добавить во всплывающем окне для настройки сложных форм добавления
- Действие дублирования, поддерживает два режима
  - Прямое дублирование
  - Скопируйте в форму и продолжайте заполнять
- Шаблоны данных формы
- Переменные поддержки области данных фильтра
- Блок списка
- Блок карточек сетки
- Подключаемый модуль мобильного клиента
- Подключаемый модуль аутентификации пользователя, поддерживающий различные методы аутентификации
  - Адрес электронной почты / пароль
- SMS
  - OIDC
  - SAML
- Узлы рабочего процесса
  - Обновление узлов вручную, поддержка добавления и редактирования из существующих коллекций
  - Узел цикла
  - Узел агрегирования
- файловый менеджер
  - Предоставить шаблон сбора файлов
  - Предоставить компонент файлового менеджера

## Обновление приложений

### Обновление для Docker compose

Изменений нет, ссылка на обновление [Обновление для Docker compose] (/добро пожаловать/начало работы/обновление/docker-compose)

### Обновление исходного кода Git

Версия 0.10 содержит значительное обновление зависимостей, поэтому для предотвращения ошибок при обновлении исходного кода перед обновлением необходимо удалить следующие каталоги

```bash
# Remove .umi cache
yarn rimraf -rf "./**/{.umi,.umi-production}"
# Delete compiled files
yarn rimraf -rf "./packages/*/*/{lib,esm,es,dist,node_modules}"
# Remove dependencies
yarn rimraf -rf node_modules
```

Смотрите [Обновление исходного кода Git] (/добро пожаловать/начало работы/обновление/git-clone) для получения более подробной информации

### Обновление для create-nocobase-app

Рекомендуется, чтобы `yarn create` повторно загрузил новую версию и изменил конфигурацию `.env`, для получения более подробной информации обратитесь к [руководству по обновлению основной версии] (/добро пожаловать/начало работы/обновление/create-nocobase-app#основное обновление).

## Предстоящие устаревшие и потенциально несовместимые изменения

### Компонент полей вложенных таблиц

Не совместим с новой версией, необходимо удалить и переназначить поля блоков (только переназначение пользовательского интерфейса)

### Изменения в api загрузки вложений

В дополнение к встроенной таблице вложений пользователи также могут настраивать сбор файлов, api-интерфейс загрузки для вложений был изменен с `/api/attachments:upload` на `/api/<коллекция файлов>:create`, загрузка устарела, по-прежнему совместима с версией 0.10, но будет обновлена. быть удаленным.

### Изменения в API входа/регистрации

Ядро nocobase предоставляет более мощный [модуль аутентификации] (https://github.com/nocobase/nocobase/tree/main/packages/plugins/auth) со следующими изменениями в интерфейсах входа пользователя в систему, регистрации, верификации и выхода из системы:

```bash
/api/users:signin -> /api/auth:signIn
/api/users:signup -> /api/auth:signUp
/api/users:signout -> /api/auth:signOut
/api/users:check -> /api/auth:check
```

Примечание: Вышеупомянутый пользовательский интерфейс, который устарел, по-прежнему совместим с версией 0.10, но будет удален в следующем крупном выпуске.

### Изменения в фильтрации полей даты

Если ранее в диапазоне данных была настроена фильтрация, связанная с датой, ее необходимо удалить и перенастроить.

## Руководство по обновлению сторонних плагинов

### Обновление зависимостей

Зависимости, в основном включающие:

- обновление `react` до версии 18
- обновление `react-dom` до версии 18
- обновление `react-router` до версии 6.11
- обновление `umi` до версии 4
- обновление `dumi` до версии 2

Зависимости `package.json` должны быть изменены на последнюю версию, например:

```diff
{
  "devDependencies": {
+   "react": "^18".
+   "react-dom": "^18".
+   "react-router-dom": "^6.11.2".
-   "react": "^17".
-   "react-dom": "^17".
-   "react-router-dom": "^5".
  }
}
```

### Изменения в коде

Поскольку react-router был обновлен, необходимо также изменить соответствующий код, основные изменения включают в себя

### Компонент компоновки

Компонент компоновки должен использовать `<Outlet />` вместо `props.children`.

```diff
import React from 'react';
+ import { Outlet } from 'react-router-dom';

export default function Layout(props) {
  return (
    <div>
-      { props.children }
+      <Outlet />
    </div>
  );
}
```

если вы используете `React.cloneElement` для отображения компонента route, вам нужно изменить его следующим образом:

```diff
import React from 'react';
+ import { Outlet } from 'react-router-dom';

export default function RouteComponent(props) {
  return (
    <div>
-      { React.cloneElement(props.children, { someProp: 'p1' }) }
+      <Outlet context={{ someProp: 'p1' }} />
    </div>
  );
}
```

Измените компонент маршрута, чтобы получить значение из `useOutletContext`

```diff
import React from 'react';
+ import { useOutletContext } from 'react-router-dom';

- export function Comp(props){
+ export function Comp() {
+   const props = useOutletContext();
  return props.someProp;
}
```

### Перенаправление

`<Перенаправление>` заменено на `<Перейти к замене />`.

```diff
- <Redirect to="about" />
+ <Navigate to="about" replace />
```

### useHistory

`useNavigate` изменен на `useHistory`.

```diff
- import { useHistory } from 'react-router-dom';
+ import { useNavigate} from 'react-router-dom';

- const history = useHistory();
+ const navigate = useNavigate();

- history.push('/about')
+ navigate('/about')

- history.replace('/about')
+ navigate('/about', { replace: true })
```

### useLocation

`useLocation<type>()` изменен на `useLocation`.

```diff
- const location= useLocation<type>();
+ const location= useLocation();
```

`const { query } = useLocation()` изменен на `useSearchParams()`。

```diff
- const location = useLocation();
- const query = location.query;
- const name = query.name;
+ const [searchParams, setSearchParams] = useSearchParams();
+ searchParams.get('name');
```

### Путь

Все приведенные ниже пути являются допустимыми в версии 6:

```
/groups
/groups/admin
/users/:id
/users/:id/messages
/files/*
/files/:id/*
```

Следующие маршруты в стиле регулярных выражений недопустимы в версии 6:

```
/tweets/:id(\d+)
/files/*/cat.jpg
/files-*
```

Для получения дополнительной информации об изменениях в api, пожалуйста, обратитесь к [react-router@6](https://reactrouter.com/en/main/upgrading/v5).
