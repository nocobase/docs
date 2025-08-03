# REST API

HTTP API NocoBase является надмножеством REST API, стандартные CRUD API также поддерживают RESTful-стиль.

## Ресурсы Collection

---

### Создание collection

HTTP API

```bash
POST  /api/<collection>:create

{} # JSON body
```

REST API

```bash
POST  /api/<collection>

{} # JSON body
```

### Просмотр списка collections

HTTP API

```bash
GET   /api/<collection>:list
```

REST API

```bash
GET   /api/<collection>
```

### Просмотр деталей collection

HTTP API

```bash
GET   /api/<collection>:get?filterByTk=<collectionIndex>
GET   /api/<collection>:get/<collectionIndex>
```

REST API

```bash
GET   /api/<collection>/<collectionIndex>
```

### Обновление collection

HTTP API

```bash
POST   /api/<collection>:update?filterByTk=<collectionIndex>

{} # JSON body

# или
POST   /api/<collection>:update/<collectionIndex>

{} # JSON body
```

REST API

```bash
PUT    /api/<collection>/<collectionIndex>

{} # JSON body
```

### Удаление collection

HTTP API

```bash
POST      /api/<collection>:destroy?filterByTk=<collectionIndex>
# или
POST      /api/<collection>:destroy/<collectionIndex>
```

REST API

```bash
DELETE    /api/<collection>/<collectionIndex>
```

## Ресурсы Association

---

### Создание Association

HTTP API

```bash
POST    /api/<collection>/<collectionIndex>/<association>:create

{} # JSON body
```

REST API

```bash
POST    /api/<collection>/<collectionIndex>/<association>

{} # JSON body
```

### Просмотр списка Associations

HTTP API

```bash
GET   /api/<collection>/<collectionIndex>/<association>:list
```

REST API

```bash
GET   /api/<collection>/<collectionIndex>/<association>
```

### Просмотр деталей Association

HTTP API

```bash
GET   /api/<collection>/<collectionIndex>/<association>:get?filterByTk=<associationIndex>
# или
GET   /api/<collection>/<collectionIndex>/<association>:get/<associationIndex>
```

REST API

```bash
GET   /api/<collection>/<collectionIndex>/<association>:get/<associationIndex>
```

### Обновление Association

HTTP API

```bash
POST   /api/<collection>/<collectionIndex>/<association>:update?filterByTk=<associationIndex>

{} # JSON body

# или
POST   /api/<collection>/<collectionIndex>/<association>:update/<associationIndex>

{} # JSON body
```

REST API

```bash
PUT    /api/<collection>/<collectionIndex>/<association>:update/<associationIndex>

{} # JSON данные
```

### Удаление Association

HTTP API

```bash
POST    /api/<collection>/<collectionIndex>/<association>:destroy?filterByTk=<associationIndex>
# или
POST    /api/<collection>/<collectionIndex>/<association>:destroy/<associationIndex>
```

REST API

```bash
DELETE  /api/<collection>/<collectionIndex>/<association>/<associationIndex>
```
