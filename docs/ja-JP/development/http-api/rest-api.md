# REST API

NocoBase の HTTP API は REST API のスーパーセットであり、標準の CRUD API に加えて RESTful スタイルもサポートしています。

## コレクションリソース

---

### コレクションの作成

HTTP API

```bash
POST  /api/<collection>:create

{} # JSON ボディ
```

REST API

```bash
POST  /api/<collection>

{} # JSON ボディ
```

### コレクション一覧の取得

HTTP API

```bash
GET   /api/<collection>:list
```

REST API

```bash
GET   /api/<collection>
```

### コレクション詳細の取得

HTTP API

```bash
GET   /api/<collection>:get?filterByTk=<collectionIndex>
GET   /api/<collection>:get/<collectionIndex>
```

REST API

```bash
GET   /api/<collection>/<collectionIndex>
```

### コレクションの更新

HTTP API

```bash
POST   /api/<collection>:update?filterByTk=<collectionIndex>

{} # JSON ボディ

# または
POST   /api/<collection>:update/<collectionIndex>

{} # JSON ボディ
```

REST API

```bash
PUT    /api/<collection>/<collectionIndex>

{} # JSON ボディ
```

### コレクションの削除

HTTP API

```bash
POST      /api/<collection>:destroy?filterByTk=<collectionIndex>
# または
POST      /api/<collection>:destroy/<collectionIndex>
```

REST API

```bash
DELETE    /api/<collection>/<collectionIndex>
```

## アソシエーションリソース

---

### アソシエーションの作成

HTTP API

```bash
POST    /api/<collection>/<collectionIndex>/<association>:create

{} # JSON ボディ
```

REST API

```bash
POST    /api/<collection>/<collectionIndex>/<association>

{} # JSON ボディ
```

### アソシエーション一覧の取得

HTTP API

```bash
GET   /api/<collection>/<collectionIndex>/<association>:list
```

REST API

```bash
GET   /api/<collection>/<collectionIndex>/<association>
```

### アソシエーション詳細の取得

HTTP API

```bash
GET   /api/<collection>/<collectionIndex>/<association>:get?filterByTk=<associationIndex>
# または
GET   /api/<collection>/<collectionIndex>/<association>:get/<associationIndex>
```

REST API

```bash
GET   /api/<collection>/<collectionIndex>/<association>:get/<associationIndex>
```

### アソシエーションの更新

HTTP API

```bash
POST   /api/<collection>/<collectionIndex>/<association>:update?filterByTk=<associationIndex>

{} # JSON ボディ

# または
POST   /api/<collection>/<collectionIndex>/<association>:update/<associationIndex>

{} # JSON ボディ
```

REST API

```bash
PUT    /api/<collection>/<collectionIndex>/<association>:update/<associationIndex>

{} # JSON ボディ
```

### アソシエーションの削除

HTTP API

```bash
POST    /api/<collection>/<collectionIndex>/<association>:destroy?filterByTk=<associationIndex>
# または
POST    /api/<collection>/<collectionIndex>/<association>:destroy/<associationIndex>
```

REST API

```bash
DELETE  /api/<collection>/<collectionIndex>/<association>/<associationIndex>
```

