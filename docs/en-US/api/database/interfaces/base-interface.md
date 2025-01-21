# BaseInterface

## Overview

BaseInterface is the foundational class for all Interface types. Users can extend this class to implement custom Interface logic.

```typescript
class CustomInterface extends BaseInterface {
  async toValue(value: string, ctx?: any): Promise<any> {
    // Custom toValue logic
  }

  toString(value: any, ctx?: any) {
    // Custom toString logic
  }
}
// Register Interface
db.interfaceManager.registerInterfaceType('customInterface', CustomInterface)
```

## Interfaces

### toValue(value: string, ctx?: any): Promise<any>

Converts an external string to the actual value of the interface, which can be directly passed to the Repository for write operations.

### toString(value: any, ctx?: any)

Converts the actual value of the interface to a string type, which can be used for exporting or displaying purposes.