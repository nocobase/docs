### **REST API**

HTTP API в NocoBase является надмножеством REST API, стандартные CRUD-операции поддерживают RESTful-стиль.

#### **Ресурс Collection (Коллекция)**

**Создание коллекции**

HTTP API  
`POST /api/<collection>:create`  

```json
{} # JSON тело
```

REST API  
`POST /api/<collection>`  

```json
{} # JSON тело
```

**Просмотр списка коллекции**

HTTP API  
`GET /api/<collection>:list`

REST API  
`GET /api/<collection>`

**Просмотр деталей коллекции**

HTTP API  
`GET /api/<collection>:get?filterByTk=<collectionIndex>`  
`GET /api/<collection>:get/<collectionIndex>`

REST API  
`GET /api/<collection>/<collectionIndex>`

**Обновление коллекции**

HTTP API  
`POST /api/<collection>:update?filterByTk=<collectionIndex>`  

```json
{} # JSON тело
```

Или  
`POST /api/<collection>:update/<collectionIndex>`  

```json
{} # JSON тело
```

REST API  
`PUT /api/<collection>/<collectionIndex>`  

```json
{} # JSON тело
```

**Удаление коллекции**

HTTP API  
`POST /api/<collection>:destroy?filterByTk=<collectionIndex>`  
Или  
`POST /api/<collection>:destroy/<collectionIndex>`

REST API  
`DELETE /api/<collection>/<collectionIndex>`

#### **Ресурс Association (Связь)**

**Создание связи**

HTTP API  
`POST /api/<collection>/<collectionIndex>/<association>:create`  

```json
{} # JSON тело
```

REST API  
`POST /api/<collection>/<collectionIndex>/<association>`  

```json
{} # JSON тело
```

**Просмотр списка связей**

HTTP API  
`GET /api/<collection>/<collectionIndex>/<association>:list`

REST API  
`GET /api/<collection>/<collectionIndex>/<association>`

**Просмотр деталей связи**

HTTP API  
`GET /api/<collection>/<collectionIndex>/<association>:get?filterByTk=<associationIndex>`  
Или  
`GET /api/<collection>/<collectionIndex>/<association>:get/<associationIndex>`

REST API  
`GET /api/<collection>/<collectionIndex>/<association>/<associationIndex>`

**Обновление связи**

HTTP API  
`POST /api/<collection>/<collectionIndex>/<association>:update?filterByTk=<associationIndex>`  

```json
{} # JSON тело
```

Или  
`POST /api/<collection>/<collectionIndex>/<association>:update/<associationIndex>`  

```json
{} # JSON тело
```

REST API  
`PUT /api/<collection>/<collectionIndex>/<association>/<associationIndex>`  

```json
{} # JSON тело
```

**Удаление связи**

HTTP API  
`POST /api/<collection>/<collectionIndex>/<association>:destroy?filterByTk=<associationIndex>`  
Или  
`POST /api/<collection>/<collectionIndex>/<association>:destroy/<associationIndex>`

REST API  
`DELETE /api/<collection>/<collectionIndex>/<association>/<associationIndex>`
