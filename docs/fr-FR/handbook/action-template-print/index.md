# Template Printing

<PluginInfo commercial="true" name="action-template-print"></PluginInfo>

## Introduction

The Template Printing plugin is a powerful tool that allows you to edit template files in Word, Excel, and PowerPoint (supporting `.docx`, `.xlsx`, `.pptx` formats), set placeholders and logical structures within the templates, and dynamically generate pre-formatted files such as `.docx`, `.xlsx`, `.pptx`, and PDF files. This plugin is widely used for generating various business documents, such as quotations, invoices, contracts, etc., significantly improving the efficiency and accuracy of document generation.

### Key Features

- **Multi-format Support**: Compatible with Word, Excel, and PowerPoint templates to meet different document generation needs.
- **Dynamic Data Filling**: Automatically fills and generates document content through placeholders and logical structures.
- **Flexible Template Management**: Supports adding, editing, deleting, and categorizing templates for easy maintenance and use.
- **Rich Template Syntax**: Supports basic replacement, array access, loops, conditional output, and other template syntax to meet complex document generation needs.
- **Formatter Support**: Provides conditional output, date formatting, number formatting, and other functions to enhance the readability and professionalism of documents.
- **Efficient Output Formats**: Supports direct generation of PDF files for easy sharing and printing.

## Installation

<embed src="./install.md"></embed>

## Configuration Instructions

### Activating Template Printing

1. **Open the Detail Block**:
   - Navigate to the detail block in the application where you need to use the template printing feature.

2. **Access the Configuration Operation Menu**:
   - Click the "Configuration Operation" menu at the top of the interface.

3. **Select "Template Printing"**:
   - Click the "Template Printing" option in the dropdown menu to activate the plugin.

   ![Activate Template Printing](https://static-docs.nocobase.com/20241212150539-2024-12-12-15-05-43.png)

### Configuring Templates

1. **Access the Template Configuration Page**:
   - In the configuration menu of the "Template Printing" button, select the "Template Configuration" option.

   ![Template Configuration Option](https://static-docs.nocobase.com/20241212151858-2024-12-12-15-19-01.png)

2. **Add a New Template**:
   - Click the "Add Template" button to enter the template addition page.

   ![Add Template Button](https://static-docs.nocobase.com/20241212151243-2024-12-12-15-12-46.png)

3. **Fill in Template Information**:
   - In the template form, fill in the template name and select the template type (Word, Excel, PowerPoint).
   - Upload the corresponding template file (supports `.docx`, `.xlsx`, `.pptx` formats).

   ![Configure Template Name and File](https://static-docs.nocobase.com/20241212151518-2024-12-12-15-15-21.png)

4. **Edit and Save the Template**:
   - Go to the "Field List" page, copy fields, and fill them into the template.
    ![Field List](https://static-docs.nocobase.com/20250107141010.png)
    ![20241212152743-2024-12-12-15-27-45](https://static-docs.nocobase.com/20241212152743-2024-12-12-15-27-45.png)
   - After filling in the details, click the "Save" button to complete the template addition.

5. **Template Management**:
   - Click the "Use" button on the right side of the template list to activate the template.
   - Click the "Edit" button to modify the template name or replace the template file.
   - Click the "Download" button to download the configured template file.
   - Click the "Delete" button to remove unnecessary templates. The system will prompt for confirmation to avoid accidental deletion.
   ![Template Management](https://static-docs.nocobase.com/20250107140436.png)

## Template Syntax

The Template Printing plugin provides various syntaxes to flexibly insert dynamic data and logical structures into templates. Below are detailed syntax explanations and usage examples.

### Basic Replacement

Use placeholders in the format `{d.xxx}` for data replacement. For example:

- `{d.title}`: Reads the `title` field from the dataset.
- `{d.date}`: Reads the `date` field from the dataset.

**Example**:

Template Content:
```
Dear Customer,

Thank you for purchasing our product: {d.productName}.
Order ID: {d.orderId}
Order Date: {d.orderDate}

Wish you a pleasant experience!
```

Dataset:
```json
{
  "productName": "Smart Watch",
  "orderId": "A123456789",
  "orderDate": "2025-01-01"
}
```

Rendered Result:
```
Dear Customer,

Thank you for purchasing our product: Smart Watch.
Order ID: A123456789
Order Date: 2025-01-01

Wish you a pleasant experience!
```

### Accessing Sub-objects

If the dataset contains sub-objects, you can access the properties of the sub-objects using dot notation.

**Syntax**: `{d.parent.child}`

**Example**:

Dataset:
```json
{
  "customer": {
    "name": "Li Lei",
    "contact": {
      "email": "lilei@example.com",
      "phone": "13800138000"
    }
  }
}
```

Template Content:
```
Customer Name: {d.customer.name}
Email Address: {d.customer.contact.email}
Phone Number: {d.customer.contact.phone}
```

Rendered Result:
```
Customer Name: Li Lei
Email Address: lilei@example.com
Phone Number: 13800138000
```

### Accessing Arrays

If the dataset contains arrays, you can use the reserved keyword `i` to access elements in the array.

**Syntax**: `{d.arrayName[i].field}`

**Example**:

Dataset:
```json
{
  "staffs": [
    { "firstname": "James", "lastname": "Anderson" },
    { "firstname": "Emily", "lastname": "Roberts" },
    { "firstname": "Michael", "lastname": "Johnson" }
  ]
}
```

Template Content:
```
The first employee's last name is {d.staffs[i=0].lastname}, and the first name is {d.staffs[i=0].firstname}
```

Rendered Result:
```
The first employee's last name is Anderson, and the first name is James
```

### Loop Output

The Template Printing plugin supports looping through arrays to output data. There is no need to explicitly mark the start and end of the loop; simply use the reserved keywords `i` and `i+1` in the template. The plugin will automatically recognize and process the loop section.

#### Simple Array Loop

**Example**: Generating a table of company employee data

**Dataset**:
```json
{
  "staffs": [
    { "firstname": "James", "lastname": "Anderson" },
    { "firstname": "Emily", "lastname": "Roberts" },
    { "firstname": "Michael", "lastname": "Johnson" }
  ]
}
```

**Template**:

| First Name | Last Name |
|---|---|
| {d.staffs[i].firstname} | {d.staffs[i].lastname} |
| {d.staffs[i+1]} |  |

**Rendered Result**:

| First Name  | Last Name   |
|---|---|
| James | Anderson |
| Emily | Roberts |
| Michael | Johnson |

**Explanation**: The template uses `{d.staffs[i].firstname}` and `{d.staffs[i].lastname}` to loop through and fill in the first and last names of each employee. `{d.staffs[i+1]}` marks the start of the next row in the loop.

#### Nested Array Loop

The Template Printing plugin supports processing nested arrays, allowing for infinite levels of nested loops, suitable for displaying complex data structures.

**Example**: Displaying car brands and their models

**Dataset**:
```json
{
  "cars": [
    {
      "brand": "Toyota",
      "models": [{ "size": "Prius 2" }, { "size": "Prius 3" }]
    },
    {
      "brand": "Tesla",
      "models": [{ "size": "S" }, { "size": "X" }]
    }
  ]
}
```

**Template**:

```
Brand: {d.cars[i].brand}
Models:
{d.cars[i].models[j].size}
{d.cars[i].models[j+1].size}

---
```
![20241203152028-2024-12-03-15-20-29](https://static-docs.nocobase.com/20241203152028-2024-12-03-15-20-29.png)

**Rendered Result**:
```
Brand: Toyota
Models:
Prius 2
Prius 3

---
Brand: Tesla
Models:
S
X

---
```
    
**Explanation**: The outer loop uses `i` to iterate through each brand, while the inner loop uses `j` to iterate through each model under the brand. `{d.cars[i].models[j].size}` and `{d.cars[i].models[j+1].size}` are used to fill in the current and next models, respectively. This allows for infinite levels of nested loops to accommodate complex data structures.

### Sorting Function

The Template Printing plugin allows sorting arrays based on object properties, not limited to using the iterator `i`. Currently, it supports ascending order by a specified property but does not support descending order.

**Example**: Sorting cars by "power" in ascending order

**Dataset**:
```json
{
  "cars" : [
    { "brand" : "Lumeneo" , "power" : 3 },
    { "brand" : "Tesla"   , "power" : 1 },
    { "brand" : "Toyota"  , "power" : 2 }
  ]
}
```

**Template**:
```
{d.cars:sort(power)}
Brand: {d.cars[i].brand}
Power: {d.cars[i].power} kW

---
```

**Rendered Result**:
```
Brand: Tesla
Power: 1 kW

---
Brand: Toyota
Power: 2 kW

---
Brand: Lumeneo
Power: 3 kW

---
```

**Explanation**: The `:sort(power)` function sorts the `cars` array by the `power` property in ascending order, and then renders each car's brand and power.

## Formatters

Formatters are used to convert data into specific formats or perform conditional checks, enhancing the flexibility and expressiveness of templates.

### Conditional Output

Control the display and hiding of specific content using `showBegin` and `showEnd`.

**Syntax**:
```
{d.field:condition:showBegin}
Content
{d.field:showEnd}
```

**Example**: Displaying special terms in a contract template based on customer type

**Dataset**:
```json
{
  "customerType": "VIP"
}
```

**Template Content**:
```
{d.customerType:ifEQ('VIP'):showBegin}
Special Terms:
As our VIP customer, you will enjoy additional benefits and exclusive services, including free upgrades, priority support, etc.
{d.customerType:showEnd}
```

**Rendered Result** (when `customerType` is "VIP"):
```
Special Terms:
As our VIP customer, you will enjoy additional benefits and exclusive services, including free upgrades, priority support, etc.
```

**Explanation**: When the value of the `customerType` field is "VIP", the content between `showBegin` and `showEnd` will be rendered; otherwise, it will be hidden.

### Date Formatting

Use formatters to convert date fields into more readable formats.

**Syntax**:
```
{d.dateField:format(YYYY年MM月DD日)}
```

**Example**:

**Dataset**:
```json
{
  "orderDate": "2025-01-03T10:30:00Z"
}
```

**Template Content**:
```
Order Date: {d.orderDate:format(YYYY年MM月DD日)}
```

**Rendered Result**:
```
Order Date: 2025年01月03日
```

**Explanation**: The `format` formatter converts the ISO-formatted date into a more readable format.

### Number Formatting

Use formatters to format numbers, such as adding thousand separators or controlling decimal places.

**Syntax**:
```
{d.numberField:format(0,0.00)}
```

**Example**:

**Dataset**:
```json
{
  "totalAmount": 1234567.89
}
```

**Template Content**:
```
Total Amount: {d.totalAmount:format('0,0.00')} yuan
```

**Rendered Result**:
```
Total Amount: 1,234,567.89 yuan
```

**Explanation**: The `format` formatter adds thousand separators and retains two decimal places for the number.

## String Formatter Examples

### 1. lowerCase( )

**Syntax**:
```
{d.someField:lowerCase()}
```

**Example**:

**Dataset**:
```json
{
  "title": "My Car"
}
```

**Template Content**:
```
Vehicle Name: {d.title:lowerCase()}
```

**Rendered Result**:
```
Vehicle Name: my car
```

**Explanation**: Converts all English letters to lowercase. If the value is not a string (e.g., a number, null, etc.), it is output as is.

---

### 2. upperCase( )

**Syntax**:
```
{d.someField:upperCase()}
```

**Example**:

**Dataset**:
```json
{
  "title": "my car"
}
```

**Template Content**:
```
Vehicle Name: {d.title:upperCase()}
```

**Rendered Result**:
```
Vehicle Name: MY CAR
```

**Explanation**: Converts all English letters to uppercase. If the value is not a string, it is output as is.

---

### 3. ucFirst( )

**Syntax**:
```
{d.someField:ucFirst()}
```

**Example**:

**Dataset**:
```json
{
  "note": "hello world"
}
```

**Template Content**:
```
Note: {d.note:ucFirst()}
```

**Rendered Result**:
```
Note: Hello world
```

**Explanation**: Converts only the first letter to uppercase, leaving the rest of the letters unchanged. If the value is null or undefined, it returns null or undefined.

---

### 4. ucWords( )

**Syntax**:
```
{d.someField:ucWords()}
```

**Example**:

**Dataset**:
```json
{
  "description": "my cAR"
}
```

**Template Content**:
```
Description: {d.description:ucWords()}
```

**Rendered Result**:
```
Description: My CAR
```

**Explanation**: Converts the first letter of each word in the string to uppercase. The rest of the letters remain unchanged.

---

### 5. print( message )

**Syntax**:
```
{d.someField:print('Fixed Output')}
```

**Example**:

**Dataset**:
```json
{
  "unusedField": "whatever"
}
```

**Template Content**:
```
Prompt: {d.unusedField:print('This will always display a fixed prompt')}
```

**Rendered Result**:
```
Prompt: This will always display a fixed prompt
```

**Explanation**: Regardless of the original data, the specified `message` string will be output, effectively "forcing" the output.

---

### 6. printJSON( )

**Syntax**:
```
{d.someField:printJSON()}
```

**Example**:

**Dataset**:
```json
{
  "items": [
    { "id": 2, "name": "homer" },
    { "id": 3, "name": "bart" }
  ]
}
```

**Template Content**:
```
Raw Data: {d.items:printJSON()}
```

**Rendered Result**:
```
Raw Data: [{"id":2,"name":"homer"},{"id":3,"name":"bart"}]
```

**Explanation**: Serializes an object or array into a JSON-formatted string for direct output in the template.

---

### 7. convEnum( type )

**Syntax**:
```
{d.someField:convEnum('ENUM_NAME')}
```

**Example**:

**Dataset**:
```json
{
  "orderStatus": 1
}
```
Assume the following configuration in `carbone.render(data, options)`'s `options.enum`:
```json
{
  "enum": {
    "ORDER_STATUS": [
      "pending",     // 0
      "sent",        // 1
      "delivered"    // 2
    ]
  }
}
```

**Template Content**:
```
Order Status: {d.orderStatus:convEnum('ORDER_STATUS')}
```

**Rendered Result**:
```
Order Status: sent
```

**Explanation**: Converts a number or defined enum value into readable text; if the value is not defined in the enum, it is output as is.

---

### 8. unaccent( )

**Syntax**:
```
{d.someField:unaccent()}
```

**Example**:

**Dataset**:
```json
{
  "food": "crème brûlée"
}
```

**Template Content**:
```
Food Name: {d.food:unaccent()}
```

**Rendered Result**:
```
Food Name: creme brulee
```

**Explanation**: Removes accent marks, commonly used for processing text with special characters in French, Spanish, etc.

---

### 9. convCRLF( )

**Syntax**:
```
{d.someField:convCRLF()}
```
> **Note**: Applicable to DOCX, PDF, ODT, ODS (ODS functionality is experimental).

**Example**:

**Dataset**:
```json
{
  "content": "Multi-line text:\nFirst line\nSecond line\r\nThird line"
}
```

**Template Content**:
```
Converted Content:
{d.content:convCRLF()}
```
**Rendering Result** (DOCX Scenario):
```
Converted Content:
Multi-line Text:
First Line
Second Line
Third Line
```
> The actual XML will insert line break tags such as `<w:br/>`.

**Note**: Convert `\n` or `\r\n` to the correct line break tags in the document to accurately display multi-line text in the final file.

---

### 10. substr( begin, end, wordMode )

**Syntax**:
```
{d.someField:substr(begin, end, wordMode)}
```

**Example**:

**Dataset**:
```json
{
  "text": "abcdefg hijklmnop"
}
```

**Template Content**:
```
Substring (from index 0 to 5): {d.text:substr(0, 5)}
Substring (from index 6 to end): {d.text:substr(6)}
```

**Rendering Result**:
```
Substring (from index 0 to 5): abcde
Substring (from index 6 to end): fg hijklmnop
```

**Note**:
- `begin` is the starting index, `end` is the ending index (exclusive).
- If `wordMode=true`, it tries not to split words; if `wordMode='last'`, it extracts from `begin` to the end of the string.

---

### 11. split( delimiter )

**Syntax**:
```
{d.someField:split(delimiter)}
```

**Example**:

**Dataset**:
```json
{
  "path": "ab/cd/ef"
}
```

**Template Content**:
```
Split Array: {d.path:split('/')}
```

**Rendering Result**:
```
Split Array: ["ab","cd","ef"]
```

**Note**: Use the specified `delimiter` to split the string into an array. Can be used with other array operations such as `arrayJoin`, index access, etc.

---

### 12. padl( targetLength, padString )

**Syntax**:
```
{d.someField:padl(targetLength, padString)}
```

**Example**:

**Dataset**:
```json
{
  "code": "abc"
}
```

**Template Content**:
```
Left Padding (length 8, character '0'): {d.code:padl(8, '0')}
```

**Rendering Result**:
```
Left Padding (length 8, character '0'): 00000abc
```

**Note**: If `targetLength` is less than the original string length, the original string is returned; the default padding character is a space.

---

### 13. padr( targetLength, padString )

**Syntax**:
```
{d.someField:padr(targetLength, padString)}
```

**Example**:

**Dataset**:
```json
{
  "code": "abc"
}
```

**Template Content**:
```
Right Padding (length 10, character '#'): {d.code:padr(10, '#')}
```

**Rendering Result**:
```
Right Padding (length 10, character '#'): abc#######
```

**Note**: Opposite of `padl`, padding is done at the end of the string. The default padding character is a space.

---

### 14. ellipsis( maximum )

**Syntax**:
```
{d.someField:ellipsis(maximum)}
```

**Example**:

**Dataset**:
```json
{
  "articleTitle": "Carbone Report Extended Version"
}
```

**Template Content**:
```
Article Title (max 5 characters): {d.articleTitle:ellipsis(5)}
```

**Rendering Result**:
```
Article Title (max 5 characters): Carbo...
```

**Note**: When the string length exceeds `maximum`, it truncates and adds `...`.

---

### 15. prepend( textToPrepend )

**Syntax**:
```
{d.someField:prepend(textToPrepend)}
```

**Example**:

**Dataset**:
```json
{
  "username": "john"
}
```

**Template Content**:
```
Username: {d.username:prepend('Mr. ')}
```

**Rendering Result**:
```
Username: Mr. john
```

**Note**: Appends specified text before the original string, commonly used for prefixes.

---

### 16. append( textToAppend )

**Syntax**:
```
{d.someField:append(textToAppend)}
```

**Example**:

**Dataset**:
```json
{
  "filename": "document"
}
```

**Template Content**:
```
Filename: {d.filename:append('.pdf')}
```

**Rendering Result**:
```
Filename: document.pdf
```

**Note**: Appends specified text after the original string, commonly used for suffixes.

---

### 17. replace( oldText, newText )

**Syntax**:
```
{d.someField:replace(oldText, newText)}
```

**Example**:

**Dataset**:
```json
{
  "sentence": "abcdef abcde"
}
```

**Template Content**:
```
Replacement Result: {d.sentence:replace('cd', 'OK')}
```

**Rendering Result**:
```
Replacement Result: abOKef abOKe
```

**Note**: Replaces all occurrences of `oldText` with `newText`; if `newText` is not specified or is `null`, the matched parts are deleted.

---

### 18. len( )

**Syntax**:
```
{d.someField:len()}
```

**Example**:

**Dataset**:
```json
{
  "greeting": "Hello World",
  "numbers": [1, 2, 3, 4, 5]
}
```

**Template Content**:
```
Text Length: {d.greeting:len()}
Array Length: {d.numbers:len()}
```

**Rendering Result**:
```
Text Length: 11
Array Length: 5
```

**Note**: Can be used for both strings and arrays, returning their length or number of elements.

---

### 19. t( )

**Syntax**:
```
{d.someField:t()}
```

**Example**:

Assume you have defined a translation dictionary in Carbone configuration, translating the text `"Submit"` to `"提交"`.

**Dataset**:
```json
{
  "buttonLabel": "Submit"
}
```

**Template Content**:
```
Button: {d.buttonLabel:t()}
```

**Rendering Result**:
```
Button: 提交
```

**Note**: Translates the string based on the translation dictionary. Requires providing the corresponding translation mapping during rendering.

---

### 20. preserveCharRef( )

**Syntax**:
```
{d.someField:preserveCharRef()}
```

**Example**:

**Dataset**:
```json
{
  "legalSymbol": "&#xa7;" 
}
```

**Template Content**:
```
Symbol: {d.legalSymbol:preserveCharRef()}
```

**Rendering Result**:
```
Symbol: &#xa7;
```

**Note**: Preserves character references in the form of `&#xxx;` or `&#xXXXX;`, preventing them from being escaped or replaced in XML. This is useful for generating specific character sets or special symbols.

---
The following examples follow the document style described above to help you better understand and apply **number operation** formatters. Examples will include **syntax**, **examples** (including "dataset", "template content", "rendering result"), and brief **notes**. Some examples will also mention optional rendering configurations (`options`) to demonstrate how they affect the output.

---


## Number Operation Formatter Examples

### 1. convCurr( target, source )

**Syntax**:
```
{d.numberField:convCurr(target, source)}
```

**Example**:

**Dataset**:
```json
{
  "amount": 1000
}
```

> Assume the following settings in `Carbone.render(data, options)`:
> ```json
> {
>   "currency": {
>     "source": "EUR",
>     "target": "USD",
>     "rates": {
>       "EUR": 1,
>       "USD": 2
>     }
>   }
> }
> ```

**Template Content**:
```
Default conversion from EUR to USD: {d.amount:convCurr()}
Directly specify target as USD: {d.amount:convCurr('USD')}
Directly specify target as EUR: {d.amount:convCurr('EUR')}
EUR->USD, then force USD->USD: {d.amount:convCurr('USD','USD')}
```

**Rendering Result**:
```
Default conversion from EUR to USD: 2000
Directly specify target as USD: 2000
Directly specify target as EUR: 1000
EUR->USD, then force USD->USD: 1000
```

**Note**:
- If `target` is not specified, it defaults to `options.currencyTarget` ("USD" in the example).
- If `source` is not specified, it defaults to `options.currencySource` ("EUR" in the example).
- If `options.currencySource` is not defined, no conversion is performed, and the original value is output.

---

### 2. round( precision )

**Syntax**:
```
{d.numberField:round(precision)}
```

**Example**:

**Dataset**:
```json
{
  "price": 10.05123,
  "discount": 1.05
}
```

**Template Content**:
```
Price rounded to 2 decimal places: {d.price:round(2)}
Discount rounded to 1 decimal place: {d.discount:round(1)}
```

**Rendering Result**:
```
Price rounded to 2 decimal places: 10.05
Discount rounded to 1 decimal place: 1.1
```

**Note**:  
Unlike `toFixed()`, `round()` uses correct rounding for decimals, e.g., `1.05` rounded to one decimal place becomes `1.1`.

---

### 3. formatN( precision )

**Syntax**:
```
{d.numberField:formatN(precision)}
```

**Example**:

**Dataset**:
```json
{
  "total": 1000.456
}
```

> Assume in `Carbone.render(data, options)`, `options.lang` is `en-us`, and the document type is not ODS/XLSX (e.g., DOCX, PDF, etc.).

**Template Content**:
```
Number Formatting: {d.total:formatN()}
Number Formatting (2 decimal places): {d.total:formatN(2)}
```

**Rendering Result**:
```
Number Formatting: 1,000.456
Number Formatting (2 decimal places): 1,000.46
```

**Note**:
- `formatN()` localizes numbers based on `options.lang` (thousands separator, decimal point, etc.).
- For ODS/XLSX files, number precision mainly depends on the cell format settings in the spreadsheet.

---

### 4. formatC( precisionOrFormat, targetCurrencyCode )

**Syntax**:
```
{d.numberField:formatC(precisionOrFormat, targetCurrencyCode)}
```

**Example**:

**Dataset**:
```json
{
  "amount": 1000.456
}
```

> Assume the following settings in `Carbone.render(data, options)`:
> ```json
> {
>   "lang": "en-us",
>   "currency": {
>     "source": "EUR",
>     "target": "USD",
>     "rates": {
>       "EUR": 1,
>       "USD": 2
>     }
>   }
> }
> ```

**Template Content**:
```
Default conversion with currency symbol: {d.amount:formatC()}
Only output currency name (M): {d.amount:formatC('M')}
Only output currency name, singular case: {1:formatC('M')}
Number + symbol (L): {d.amount:formatC('L')}
Number + currency name (LL): {d.amount:formatC('LL')}
```

**Rendering Result**:
```
Default conversion with currency symbol: $2,000.91
Only output currency name (M): dollars
Only output currency name, singular case: dollar
Number + symbol (L): $2,000.00
Number + currency name (LL): 2,000.00 dollars
```

**Note**:
- `precisionOrFormat` can be a number (specifying decimal places) or a string ("M", "L", "LL").
- To switch to another currency, pass `targetCurrencyCode`, e.g., `formatC('L', 'EUR')`.

---

### 5. add( )

**Syntax**:
```
{d.numberField:add(value)}
```

**Example**:

**Dataset**:
```json
{
  "base": 1000.4
}
```

**Template Content**:
```
Add 2 to the value: {d.base:add(2)}
```

**Rendering Result**:
```
Add 2 to the value: 1002.4
```

**Note**: Adds the parameter to `d.base`, supports string numbers or pure numbers.

---

### 6. sub( )

**Syntax**:
```
{d.numberField:sub(value)}
```

**Example**:

**Dataset**:
```json
{
  "base": 1000.4
}
```

**Template Content**:
```
Subtract 2 from the value: {d.base:sub(2)}
```

**Rendering Result**:
```
Subtract 2 from the value: 998.4
```

**Note**: Subtracts the parameter from `d.base`.

---

### 7. mul( )

**Syntax**:
```
{d.numberField:mul(value)}
```

**Example**:

**Dataset**:
```json
{
  "base": 1000.4
}
```

**Template Content**:
```
Multiply the value by 2: {d.base:mul(2)}
```

**Rendering Result**:
```
Multiply the value by 2: 2000.8
```

**Note**: Multiplies `d.base` by the parameter.

---

### 8. div( )

**Syntax**:
```
{d.numberField:div(value)}
```

**Example**:

**Dataset**:
```json
{
  "base": 1000.4
}
```

**Template Content**:
```
Divide the value by 2: {d.base:div(2)}
```

**Rendering Result**:
```
Divide the value by 2: 500.2
```

**Note**: Divides `d.base` by the parameter.

---

### 9. mod( value )

**Syntax**:
```
{d.numberField:mod(value)}
```

**Example**:

**Dataset**:
```json
{
  "num1": 4,
  "num2": 3
}
```

**Template Content**:
```
4 mod 2: {d.num1:mod(2)}
3 mod 2: {d.num2:mod(2)}
```

**Rendering Result**:
```
4 mod 2: 0
3 mod 2: 1
```

**Note**: Calculates `num1 % 2` and `num2 % 2`, used for modulo operations.

---

### 10. abs( )

**Syntax**:
```
{d.numberField:abs()}
```

**Example**:

**Dataset**:
```json
{
  "value1": -10,
  "value2": -10.54
}
```

**Template Content**:
```
Absolute Value 1: {d.value1:abs()}
Absolute Value 2: {d.value2:abs()}
```

**Rendering Result**:
```
Absolute Value 1: 10
Absolute Value 2: 10.54
```

**Note**: Returns the absolute value of the number, can also handle negative numbers in string format.

---

### 11. ceil( )

**Syntax**:
```
{d.numberField:ceil()}
```

**Example**:

**Dataset**:
```json
{
  "dataA": 10.05123,
  "dataB": 1.05,
  "dataC": -1.05
}
```

**Template Content**:
```
ceil(10.05123): {d.dataA:ceil()}
ceil(1.05): {d.dataB:ceil()}
ceil(-1.05): {d.dataC:ceil()}
```

**Rendering Result**:
```
ceil(10.05123): 11
ceil(1.05): 2
ceil(-1.05): -1
```

**Note**: Rounds the number up to the nearest greater (or equal) integer.

---

### 12. floor( )

**Syntax**:
```
{d.numberField:floor()}
```

**Example**:

**Dataset**:
```json
{
  "dataA": 10.05123,
  "dataB": 1.05,
  "dataC": -1.05
}
```

**Template Content**:
```
floor(10.05123): {d.dataA:floor()}
floor(1.05): {d.dataB:floor()}
floor(-1.05): {d.dataC:floor()}
```

**Rendering Result**:
```
floor(10.05123): 10
floor(1.05): 1
floor(-1.05): -2
```

**Note**: Rounds the number down to the nearest smaller (or equal) integer.

---

### 13. int( )

> **Note**: **Not recommended**.  
> **Syntax**:
```
{d.numberField:int()}
```

**Example**:

**Dataset**:
```json
{
  "price": 12.34
}
```

**Template Content**:
```
Result: {d.price:int()}
```

**Rendering Result**:
```
Result: 12
```

**Note**: Converts the number to an integer by removing the decimal part; the official documentation recommends using more accurate `round()` or `floor()`/`ceil()` instead.

---

### 14. toEN( )

> **Note**: **Not recommended**.  
> **Syntax**:
```
{d.numberField:toEN()}
```

**Note**: Converts numbers to English format with decimal point `.` separation, without localization. It is generally recommended to use `formatN()` for multi-language scenarios.

---

### 15. toFixed( )

> **Note**: **Not recommended**.
> **Syntax**:
```
{d.numberField:toFixed(decimalCount)}
```

**Description**: Converts a number to a string and retains the specified number of decimal places, but there may be inaccuracies in rounding. It is recommended to use `round()` or `formatN()` instead.

---

### 16. toFR( )

> **Note**: **Not recommended for use**.  
> **Syntax**:
```
{d.numberField:toFR()}
```

**Description**: Converts a number to a format suitable for French locale with a comma `,` as the decimal separator, but does not perform further localization. It is recommended to use `formatN()` or `formatC()` for more flexibility in multilingual and currency scenarios.

---

## Array Manipulation

### 1. aggStr( separator )
> **Version**: ENTERPRISE FEATURE, NEWv4.17.0+  
> **Function**: Merges values in an array into a single string, concatenated with an optional `separator`. If no separator is provided, it defaults to `,`.

**Syntax**:
```
{d.arrayField[].someAttr:aggStr(separator)}
```

**Example**:

**Dataset**:
```json
{
  "cars": [
    {"brand":"Tesla","qty":1,"sort":1},
    {"brand":"Ford","qty":4,"sort":4},
    {"brand":"Jeep","qty":3,"sort":3},
    {"brand":"GMC","qty":2,"sort":2},
    {"brand":"Rivian","qty":1,"sort":1},
    {"brand":"Chevrolet","qty":10,"sort":5}
  ]
}
```

**Template Content**:
```
All brands (default comma separator):
{d.cars[].brand:aggStr}

All brands (specified hyphen separator):
{d.cars[].brand:aggStr(' - ')}

Filtered brands with qty greater than 3:
{d.cars[.qty > 3].brand:aggStr()}
```

**Rendered Result**:
```
All brands (default comma separator):
Tesla, Ford, Jeep, GMC, Rivian, Chevrolet

All brands (specified hyphen separator):
Tesla - Ford - Jeep - GMC - Rivian - Chevrolet

Filtered brands with qty greater than 3:
Ford, Chevrolet
```

**Description**:
- Use `:aggStr` to extract and merge fields in an array, which can be combined with filtering conditions (e.g., `[.qty > 3]`) for more flexible output.
- The `separator` parameter can be omitted, defaulting to a comma followed by a space (`, `).

---

### 2. arrayJoin( separator, index, count )
> **Version**: NEWv4.12.0+  
> **Function**: Merges array elements (`String` or `Number`) into a single string; optionally specifies which segment of the array to start merging from.

**Syntax**:
```
{d.arrayField:arrayJoin(separator, index, count)}
```

**Example**:

**Dataset**:
```json
{
  "names": ["homer", "bart", "lisa"],
  "emptyArray": [],
  "notArray": 20
}
```

**Template Content**:
```
Default comma separator: {d.names:arrayJoin()}
Using " | " separator: {d.names:arrayJoin(' | ')}
Using empty string separator: {d.names:arrayJoin('')}
Merging all elements starting from the second item: {d.names:arrayJoin('', 1)}
Merging 1 element starting from the second item: {d.names:arrayJoin('', 1, 1)}
Merging from the first item to the second last item: {d.names:arrayJoin('', 0, -1)}

Empty array: {d.emptyArray:arrayJoin()}
Non-array data: {d.notArray:arrayJoin()}
```

**Rendered Result**:
```
Default comma separator: homer, bart, lisa
Using " | " separator: homer | bart | lisa
Using empty string separator: homerbartlisa
Merging all elements starting from the second item: bartlisa
Merging 1 element starting from the second item: bart
Merging from the first item to the second last item: homerbart

Empty array:
Non-array data: 20
```

**Description**:
- `separator` defaults to a comma followed by a space (`, `).
- `index` and `count` are used to extract a portion of the array; `count` can be negative to indicate counting from the end.
- If the data is not of array type (`null`, `undefined`, object, or number), it will be output as is.

---

### 3. arrayMap( objSeparator, attributeSeparator, attributes )
> **Version**: v0.12.5+  
> **Function**: Maps an array of objects into a string. Allows specifying separators between objects and attributes, as well as which attributes to output.

**Syntax**:
```
{d.arrayField:arrayMap(objSeparator, attributeSeparator, attributes)}
```

**Example**:

```json
{
  "people": [
    { "id": 2, "name": "homer" },
    { "id": 3, "name": "bart" }
  ],
  "numbers": [10, 50],
  "emptyArray": [],
  "mixed": {"id":2,"name":"homer"}
}
```

**Template Content**:
```
Default mapping (using comma+space as object separator, colon as attribute separator):
{d.people:arrayMap()}

Using " - " as object separator:
{d.people:arrayMap(' - ')}

Using " | " as attribute separator:
{d.people:arrayMap(' ; ', '|')}

Mapping only id:
{d.people:arrayMap(' ; ', '|', 'id')}

Numeric array:
{d.numbers:arrayMap()}

Empty array:
{d.emptyArray:arrayMap()}

Non-array data:
{d.mixed:arrayMap()}
```

**Rendered Result**:
```
Default mapping:
2:homer, 3:bart

Using " - " as object separator:
2:homer - 3:bart

Using " | " as attribute separator:
2|homer ; 3|bart

Mapping only id:
2 ; 3

Numeric array:
10, 50

Empty array:

Non-array data:
{ "id": 2, "name": "homer" }
```

**Description**:
- If it is an array of objects, all available first-level attributes are output by default, concatenated in the form `attributeName:attributeValue`.
- `objSeparator` is used to separate different objects, defaulting to a comma followed by a space; `attributeSeparator` separates attributes, defaulting to a colon `:`; `attributes` can specify which attributes to output.
- If the input data is not an array, it is output as is.

---

### 4. count( start )
> **Version**: v1.1.0+  
> **Function**: Prints a **line number** or **sequence number** in a loop (e.g., `{d.array[i].xx}`), starting from 1 by default.  
> **Note**: Starting from v4.0.0, this function has been internally replaced by `:cumCount`.

**Syntax**:
```
{d.array[i].someField:count(start)}
```

**Example**:

**Dataset**:
```json
{
  "employees": [
    { "name": "James" },
    { "name": "Emily" },
    { "name": "Michael" }
  ]
}
```

**Template Content**:
```
Employee List:
No. | Name
{d.employees[i].name:count()}. {d.employees[i].name}
{d.employees[i+1]}
```

**Rendered Result**:
```
Employee List:
No. | Name
1. James
2. Emily
3. Michael
```

**Description**:
- Only valid in loops (including scenarios like `{d.array[i].xx}`), used to print the current line index count.
- `start` can specify a starting number, e.g., `:count(5)` will start counting from 5.
- Carbone 4.0+ recommends using `:cumCount` for more flexibility.

---

## Conditioned Output

Carbone provides a series of condition-based output formatters to **hide** or **display** specified content in templates based on specific conditions. Depending on business needs, you can choose **`drop`/`keep`** (concise usage) or **`showBegin`/`showEnd`**, **`hideBegin`/`hideEnd`** (suitable for large sections of content).

### 1. drop(element)
> **Version**: ENTERPRISE FEATURE, UPDATEDv4.22.10+  
> **Function**: If the condition is true, **deletes** an element or several elements in the document, such as paragraphs, table rows, images, charts, etc.

**Syntax**:
```
{d.data:ifEM():drop(element, nbrToDrop)}
```
- `element`: Can be `p` (paragraph), `row` (table row), `img` (image), `table` (entire table), `chart` (chart), `shape` (shape), `slide` (slide, ODP only), or `item` (list item, ODP/ODT only).
- `nbrToDrop`: Optional, an integer indicating how many elements to delete starting from the current one.

**Example**:

**Dataset**:
```json
{
  "imgUrl": null
}
```

**Template Content** (DOCX scenario, simplified example):
```
Here is an image: {d.imgUrl:ifEM:drop(img)}
```

- In the Word template, place this placeholder in the image's title or description.

**Rendered Result**:
```
Here is an image:
```
> The image is deleted because `imgUrl` is empty (`ifEM` is true).

**Description**:
- If the `ifEM` condition is met, `drop(img)` is executed, deleting the image and its associated paragraph content.
- `drop` is only supported in DOCX/ODT/ODS/ODP/PPTX/PDF/HTML; once `drop` is executed, no other formatters are executed.

---

### 2. keep(element)
> **Version**: ENTERPRISE FEATURE, NEWv4.17.0+  
> **Function**: If the condition is true, **retains/displays** an element or several elements in the document; otherwise, it does not display them.

**Syntax**:
```
{d.data:ifNEM:keep(element, nbrToKeep)}
```
- `element`: Same as `drop`, can be `p`, `row`, `img`, `table`, `chart`, `shape`, `slide`, `item`, etc.
- `nbrToKeep`: Optional, an integer indicating how many elements to retain starting from the current one.

**Example**:

**Dataset**:
```json
{
  "tableData": []
}
```

**Template Content** (DOCX scenario, simplified example):
```
{d.tableData:ifNEM:keep(table)}
```

- In the Word template, place this placeholder in a cell within the table.

**Rendered Result**:
```
(Blank)
```
> Since `tableData` is empty, `ifNEM` is false (not empty fails), so the table is not retained, and the entire table is deleted.

**Description**:
- If the condition is met, the corresponding element is retained; otherwise, the element and all its content are deleted.
- Opposite to `drop`, `keep` deletes the element when the condition is not met.

---

### 3. showBegin()/showEnd()
> **Version**: COMMUNITY FEATURE, v2.0.0+  
> **Function**: Displays the content between `showBegin` and `showEnd` (which can include multiple paragraphs, tables, images, etc.), retaining this section if the condition is true, otherwise deleting it.

**Syntax**:
```
{d.someData:ifEQ(someValue):showBegin}
...Content to display...
{d.someData:showEnd}
```

**Example**:

**Dataset**:
```json
{
  "toBuy": true
}
```

**Template Content**:
```
Banana{d.toBuy:ifEQ(true):showBegin}
Apple
Pineapple
{d.toBuy:showEnd}grapes
```

**Rendered Result**:
```
Banana
Apple
Pineapple
grapes
```
> When `toBuy` is `true`, all content between `showBegin` and `showEnd` is displayed.

**Description**:
- Suitable for **multi-line or multi-page** content hiding and displaying; if it's just a single line, consider using `keep`/`drop` for a more concise approach.
- It is recommended to use only **line breaks (Shift+Enter)** between `showBegin` and `showEnd` to ensure proper rendering.

---

### 4. hideBegin()/hideEnd()
> **Version**: COMMUNITY FEATURE, v2.0.0+  
> **Function**: Hides the content between `hideBegin` and `hideEnd`, deleting this section if the condition is true, otherwise retaining it.

**Syntax**:
```
{d.someData:ifEQ(someValue):hideBegin}
...Content to hide...
{d.someData:hideEnd}
```

**Example**:

**Dataset**:
```json
{
  "toBuy": true
}
```

**Template Content**:
```
Banana{d.toBuy:ifEQ(true):hideBegin}
Apple
Pineapple
{d.toBuy:hideEnd}grapes
```

**Rendered Result**:
```
Banana
grapes
```
> When `toBuy` is `true`, the content between `hideBegin` and `hideEnd` (Apple, Pineapple) is hidden.

**Description**:
- Opposite to `showBegin()/showEnd()`, used to hide multiple paragraphs, tables, images, etc.
- Similarly, it is recommended to use only **line breaks (Shift+Enter)** between `hideBegin` and `hideEnd`.

---

## Date and Time Operation Formatter Examples

> **Note**: Starting from v3.0.0, Carbone uses [Day.js](https://day.js.org/docs/en/display/format) for date processing. Most formats related to Moment.js are still available in Day.js, but the underlying library has been replaced with Day.js.

### 1. Usage of {c.now}

In templates, you can use `{c.now}` to get the current UTC time (`now`), provided that no custom data is passed through `options.complement` to override it during rendering. Example:

**Dataset** (can be empty or without `c` field):
```json
{}
```

**Template Content**:
```
Current time: {c.now:formatD('YYYY-MM-DD HH:mm:ss')}
```

**Rendered Result** (example):
```
Current time: 2025-01-07 10:05:30
```

**Description**:
- `{c.now}` is a reserved tag that automatically inserts the system's current UTC time.
- Use with `:formatD()` and other formatters to output in the specified format.

---

### 2. formatD( patternOut, patternIn )

**Syntax**:
```
{d.dateField:formatD(patternOut, patternIn)}
```

- `patternOut`: The output date format, conforming to Day.js format specifications or localized formats (e.g., `L`, `LL`, `LLLL`, etc.).
- `patternIn`: The input date format, defaulting to ISO 8601, can specify formats like `YYYYMMDD`, `X` (Unix timestamp), etc.

**Example**:

**Dataset**:
```json
{
  "eventDate": "20160131"
}
```

> Assume during `Carbone.render(data, options)`:
> ```json
> {
>   "lang": "en", 
>   "timezone": "Europe/Paris"
> }
> ```

**Template Content**:
```
Date (short format): {d.eventDate:formatD('L')} 
Date (full English): {d.eventDate:formatD('LLLL')} 
Day of the week: {d.eventDate:formatD('dddd')}
```

**Rendered Result**:
```
Date (short format): 01/31/2016
Date (full English): Sunday, January 31, 2016 12:00 AM
Day of the week: Sunday
```

**Description**:
- If `patternIn` is not specified, it defaults to ISO 8601, but here `20160131` can also be automatically recognized. To explicitly specify, use `{d.eventDate:formatD('L', 'YYYYMMDD')}`.
- `options.lang` and `options.timezone` affect the output language and timezone conversion.

---

### 3. formatI( patternOut, patternIn )

**Syntax**:
```
{d.durationField:formatI(patternOut, patternIn)}
```

- `patternOut`: The output format, can be `human`, `human+`, `milliseconds/ms`, `seconds/s`, `minutes/m`, `hours/h`, `days/d`, `weeks/w`, `months/M`, `years/y`, etc.
- `patternIn`: Optional, the input unit defaults to milliseconds, can also specify `seconds`, `minutes`, `hours`, `days`, etc.

**Example**:

**Dataset**:
```json
{
  "intervalMs": 2000,
  "longIntervalMs": 3600000
}
```

> Assume during `Carbone.render(data, options)`:
> ```json
> {
>   "lang": "en",
>   "timezone": "Europe/Paris"
> }
> ```

**Template Content**:
```
2000 milliseconds to seconds: {d.intervalMs:formatI('second')}
3600000 milliseconds to minutes: {d.longIntervalMs:formatI('minute')}
3600000 milliseconds to hours: {d.longIntervalMs:formatI('hour')}
```

**Rendering Result**:
```
2000 milliseconds to seconds: 2
3600000 milliseconds to minutes: 60
3600000 milliseconds to hours: 1
```

**Explanation**:
- Convert time intervals between units, or output human-readable time (e.g., `human`/`human+`) to display "a few seconds ago" or "in a few minutes."
- For handling positive and negative values, `human+` will output "...ago" or "in a few ...", while `human` only outputs expressions like "a few seconds" without direction.

---

### 4. addD( amount, unit, patternIn )

**Syntax**:
```
{d.dateField:addD(amount, unit, patternIn)}
```

- `amount`: A number or string indicating the quantity to add.
- `unit`: Available units include `day`, `week`, `month`, `year`, `hour`, `minute`, `second`, `millisecond` (case-insensitive, and supports plural and abbreviations).
- `patternIn`: Optional, specifies the input date format, defaults to ISO8601.

**Example**:

**Dataset**:
```json
{
  "startDate": "2017-05-10T15:57:23.769561+03:00"
}
```

> Assuming during `Carbone.render(data, options)`:
> ```json
> {
>   "lang": "fr",
>   "timezone": "Europe/Paris"
> }
> ```

**Template Content**:
```
Add 3 days to startDate: {d.startDate:addD('3', 'day')}
Add 3 months to startDate: {d.startDate:addD('3', 'month')}
```

**Rendering Result**:
```
Add 3 days to startDate: 2017-05-13T12:57:23.769Z
Add 3 months to startDate: 2017-08-10T12:57:23.769Z
```

**Explanation**:
- The result is displayed in UTC time. To localize the output, use formatters like `formatD('YYYY-MM-DD HH:mm')`.
- If the input date is in a format like `20160131` and `patternIn` is not explicitly specified, Day.js may automatically recognize it. However, it is recommended to use `{d.field:addD('...', '...', 'YYYYMMDD')}` for accuracy.

---

### 5. subD( amount, unit, patternIn )

**Syntax**:
```
{d.dateField:subD(amount, unit, patternIn)}
```

- Similar to `addD()`, but moves the date backward.

**Example**:

**Dataset**:
```json
{
  "myDate": "2017-05-10T15:57:23.769561+03:00"
}
```

**Template Content**:
```
Subtract 3 days from myDate: {d.myDate:subD('3', 'day')}
Subtract 3 months from myDate: {d.myDate:subD('3', 'month')}
```

**Rendering Result**:
```
Subtract 3 days from myDate: 2017-05-07T12:57:23.769Z
Subtract 3 months from myDate: 2017-02-10T12:57:23.769Z
```

**Explanation**:
- Opposite to `addD`, `subD` moves the date in the past direction.
- Supports the same units and format configurations.

---

### 6. startOfD( unit, patternIn )

**Syntax**:
```
{d.dateField:startOfD(unit, patternIn)}
```

- `unit`: `day`, `month`, `year`, `week`, etc., sets the date to the start of the unit (e.g., `day`=midnight, `month`=1st 00:00:00, etc.).
- `patternIn`: Optional, specifies the input date format.

**Example**:

**Dataset**:
```json
{
  "someDate": "2017-05-10T15:57:23.769561+03:00"
}
```

**Template Content**:
```
Set someDate to the start of the day: {d.someDate:startOfD('day')}
Set someDate to the start of the month: {d.someDate:startOfD('month')}
```

**Rendering Result**:
```
Set someDate to the start of the day: 2017-05-10T00:00:00.000Z
Set someDate to the start of the month: 2017-05-01T00:00:00.000Z
```

**Explanation**:
- Commonly used in scenarios like report statistics or aligning to a specific time granularity.

---

### 7. endOfD( unit, patternIn )

**Syntax**:
```
{d.dateField:endOfD(unit, patternIn)}
```

- `unit`: `day`, `month`, `year`, etc., sets the date to the end of the unit (e.g., `day`=23:59:59.999, `month`=last day 23:59:59.999, etc.).
- `patternIn`: Optional, specifies the input date format.

**Example**:

**Dataset**:
```json
{
  "someDate": "2017-05-10T15:57:23.769561+03:00"
}
```

**Template Content**:
```
Set someDate to the end of the day: {d.someDate:endOfD('day')}
Set someDate to the end of the month: {d.someDate:endOfD('month')}
```

**Rendering Result**:
```
Set someDate to the end of the day: 2017-05-10T23:59:59.999Z
Set someDate to the end of the month: 2017-05-31T23:59:59.999Z
```

**Explanation**:
- Corresponds to `startOfD`, pushing the date to the last moment of the day, month, or year.

---

### 8. diffD( toDate, unit, patternFromDate, patternToDate )

**Syntax**:
```
{d.fromDate:diffD(toDate, unit, patternFromDate, patternToDate)}
```

- `toDate`: The target date for comparison, which can be a string or number (Unix timestamp).
- `unit`: Optional, supports `day/d`, `week/w`, `month/M`, `year/y`, `hour/h`, `minute/m`, `second/s`, `millisecond/ms`, defaults to milliseconds.
- `patternFromDate` / `patternToDate`: Optional, specifies the input date format.

**Example**:

**Dataset**:
```json
{
  "start": "20101001"
}
```

**Template Content**:
```
Default millisecond interval: {d.start:diffD('20101201')}
In seconds: {d.start:diffD('20101201', 'second')}
In days: {d.start:diffD('20101201', 'days')}
```

**Rendering Result**:
```
Default millisecond interval: 5270400000
In seconds: 5270400
In days: 61
```

**Explanation**:
- If the original date format differs from the target date format, specify them using `patternFromDate` and `patternToDate`.
- A positive difference indicates that `toDate` is later or larger than `fromDate`; a negative difference indicates the opposite.

---

### 9. convDate( patternIn, patternOut )

> **Note**: **Not Recommended**  
> Starting from v3.0.0, it is officially recommended to use `formatD(patternOut, patternIn)`, which offers more flexibility and better compatibility with Day.js.

**Syntax**:
```
{d.dateField:convDate(patternIn, patternOut)}
```

- `patternIn`: Input date format.
- `patternOut`: Output date format.

**Example**:

**Dataset**:
```json
{
  "myDate": "20160131"
}
```

> Assuming during `Carbone.render(data, options)`:
> ```json
> {
>   "lang": "en",
>   "timezone": "Europe/Paris"
> }
> ```

**Template Content**:
```
Short date: {d.myDate:convDate('YYYYMMDD', 'L')}
Full date: {d.myDate:convDate('YYYYMMDD', 'LLLL')}
```

**Rendering Result**:
```
Short date: 01/31/2016
Full date: Sunday, January 31, 2016 12:00 AM
```

**Explanation**:
- Similar to `formatD`, but marked as **Not Recommended** (UNRECOMMENDED).
- It is recommended to use `formatD` in new projects.

---

### Day.js Date Format Cheatsheet

The following common formats can be used in `patternOut` (partial examples):

| Format | Example Output           | Description                                      |
|:----   |:------------------------ |:------------------------------------------------ |
| `X`    | `1360013296`             | Unix timestamp (in seconds)                      |
| `x`    | `1360013296123`          | Unix timestamp in milliseconds                   |
| `YYYY` | `2025`                   | Four-digit year                                  |
| `MM`   | `01-12`                  | Two-digit month                                  |
| `DD`   | `01-31`                  | Two-digit day                                    |
| `HH`   | `00-23`                  | Two-digit hour in 24-hour format                 |
| `mm`   | `00-59`                  | Two-digit minutes                                |
| `ss`   | `00-59`                  | Two-digit seconds                                |
| `dddd` | `Sunday-Saturday`        | Full name of the day of the week                 |
| `ddd`  | `Sun-Sat`                | Abbreviated name of the day of the week          |
| `A`    | `AM` / `PM`              | Uppercase AM/PM                                  |
| `a`    | `am` / `pm`              | Lowercase am/pm                                  |
| `L`    | `MM/DD/YYYY`             | Localized short date format                      |
| `LL`   | `MMMM D, YYYY`           | Localized date with full month name              |
| `LLL`  | `MMMM D, YYYY h:mm A`    | Localized date with time and full month name     |
| `LLLL` | `dddd, MMMM D, YYYY h:mm A` | Full localized date with day of the week     |

For more formats, refer to the [Day.js official documentation](https://day.js.org/docs/en/display/format) or the list above.

---

## Other Condition Controllers

Carbone provides various **conditionals** (`ifEQ`, `ifNE`, `ifGT`, `ifGTE`, `ifLT`, `ifLTE`, `ifIN`, `ifNIN`, `ifEM`, `ifNEM`, `ifTE`, etc.), as well as **logical combinations** (`and()`, `or()`) and **branch outputs** (`show(message)`, `elseShow(message)`). These can be combined to implement flexible conditional logic in templates. Below are some common examples; for more details, refer to the official documentation:

- **ifEM()**: Checks if the value is empty (`null`, `undefined`, `[]`, `{}`, `""`, etc.).
- **ifNEM()**: Checks if the value is not empty.
- **ifEQ(value)** / **ifNE(value)** / **ifGT(value)** / **ifGTE(value)** / **ifLT(value)** / **ifLTE(value)**: Standard comparison operations.
- **ifIN(value)** / **ifNIN(value)**: Checks if a string or array contains the specified content.
- **ifTE(type)**: Checks the data type (string, number, array, object, boolean, binary, etc.).
- **and(value)** / **or(value)**: Changes the default logical connection method.
- **show(message)** / **elseShow(message)**: Outputs the corresponding message string when the condition is true or false.

**Example**:

**Dataset**:
```json
{
  "status1": 1,
  "status2": 2,
  "status3": 3
}
```

**Template Content**:
```
one = { d.status1:ifEQ(2):show(two):or(.status1):ifEQ(1):show(one):elseShow(unknown) }

two = { d.status2:ifEQ(2):show(two):or(.status2):ifEQ(1):show(one):elseShow(unknown) }

three = { d.status3:ifEQ(2):show(two):or(.status3):ifEQ(1):show(one):elseShow(unknown) }
```

**Rendering Result**:
```
one = "one"
two = "two"
three = "unknown"
```

**Explanation**:
- `:ifEQ(2):show(two)` means if the value equals 2, output "two"; otherwise, proceed to the next condition (`or(.status1):ifEQ(1):show(one)`).
- `or()` and `and()` are used to configure logical operators.
- `elseShow('unknown')` outputs "unknown" when all preceding conditions are false.

---

Through **array operations** and **conditional output** examples, you can:
1. **Flexibly handle arrays**: Use `:aggStr`, `:arrayJoin`, `:arrayMap`, `:count`, etc., to achieve **merging, concatenation, mapping**, and **counting**.
2. **Precisely control content display**: Use `drop` / `keep` or `showBegin` / `showEnd` / `hideBegin` / `hideEnd` to decide whether to retain **specific elements** or **large sections of content** in the document based on conditions (`ifEQ`, `ifGT`, etc.).
3. **Combine multiple conditions**: Work with number and string-related formatters (e.g., `ifNEM`, `ifIN`, etc.) to implement more complex business logic control.
