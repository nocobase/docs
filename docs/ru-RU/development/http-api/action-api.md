### **API действий**

#### **Collection**

**`create`**

```bash
POST /api/posts:create
```

Тело запроса
```json
{
  "title": "My first post",
  "user": 1
}
```

Ответ 200 (application/json)
```json
{
  "data": {
    "id": 1,
    "title": "My first post",
    "userId": 1
  }
}
```

**`update`**

```bash
POST /api/posts:update/1
```

Тело запроса
```json
{
  "title": "My first post 2",
  "user": 2
}
```

Ответ 200 (application/json)
```json
{
  "data": [
    {
      "id": 1,
      "title": "My first post 2",
      "userId": 2,
      "user": {
        "id": 2
      }
    }
  ]
}
```

**`list`**  
**`get`**  
**`destroy`**  
**`move`**

#### **Association**

**`add`**  
**`set`**  
**`remove`**  
**`toggle`**
