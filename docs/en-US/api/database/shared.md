**Parameters**

| Parameter Name         | Type          | Default | Description                                           |
| ---------------------- | ------------- | ------- | ----------------------------------------------------- |
| `options.values`       | `M`           | `{}`    | The data object to be inserted                        |
| `options.whitelist?`   | `string[]`    | -       | Whitelist for the `values` field; only fields in the list will be stored |
| `options.blacklist?`   | `string[]`    | -       | Blacklist for the `values` field; fields in the list will not be stored |
| `options.transaction?` | `Transaction` | -       | Transaction                                            |
