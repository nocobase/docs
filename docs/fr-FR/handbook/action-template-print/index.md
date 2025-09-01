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

### Activation de l'Impression de Modèles
L'impression de modèles prend actuellement en charge les blocs de détails et les blocs de tableaux. Voici les méthodes de configuration pour ces deux types de blocs.

#### Blocs de Détails

1. **Ouvrir le Bloc de Détail**:
   - Naviguez vers le bloc de détail dans l'application où vous devez utiliser la fonctionnalité d'impression de modèles.

2. **Accéder au Menu d'Opération de Configuration**:
   - Cliquez sur le menu "Opération de Configuration" en haut de l'interface.

3. **Sélectionner "Impression de Modèles"**:
   - Cliquez sur l'option "Impression de Modèles" dans le menu déroulant pour activer le plugin.

   ![Activer l'Impression de Modèles](https://static-docs.nocobase.com/20241212150539-2024-12-12-15-05-43.png)

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

5. **Gestion des Modèles**:
   - Cliquez sur le bouton "Utiliser" à droite de la liste des modèles pour activer le modèle.
   - Cliquez sur le bouton "Modifier" pour modifier le nom du modèle ou remplacer le fichier de modèle.
   - Cliquez sur le bouton "Télécharger" pour télécharger le fichier de modèle configuré.
   - Cliquez sur le bouton "Supprimer" pour supprimer les modèles inutiles. Le système demandera une confirmation pour éviter la suppression accidentelle.
   ![Gestion des Modèles](https://static-docs.nocobase.com/20250107140436.png)

#### Blocs de Tableaux

L'utilisation des blocs de tableaux est pratiquement identique à celle des blocs de détails, avec les différences suivantes :

1. **Support pour l'Impression de Plusieurs Enregistrements** : Vous devez d'abord sélectionner les enregistrements à imprimer en les cochant. Vous pouvez imprimer jusqu'à 100 enregistrements en une fois.
   
![20250416215633-2025-04-16-21-56-35](https://static-docs.nocobase.com/20250416215633-2025-04-16-21-56-35.png)

2. **Gestion d'Isolation des Modèles** : Les modèles pour les blocs de tableaux et les blocs de détails ne sont pas interchangeables — car les structures de données sont différentes (l'une est un objet, l'autre est un tableau).

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

**Rendered Result**:
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

**Rendered Result**:
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

**Rendered Result**:
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

**Rendered Result**:
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

**Rendered Result**:
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

---

### Images Dynamiques
:::info
Prend actuellement en charge les types de fichiers XLSX et DOCX
:::

Vous pouvez insérer des "images dynamiques" dans les modèles de documents, ce qui signifie que les images de substitution dans le modèle seront automatiquement remplacées par de vraies images lors du rendu basé sur les données. Ce processus est très simple et ne nécessite que :

1. Insérer une image temporaire comme substitut

2. Modifier le "Texte Alternatif" de cette image pour définir l'étiquette du champ

3. Rendre le document, et le système remplacera automatiquement par l'image réelle

Ci-dessous, nous expliquerons les méthodes d'opération pour DOCX et XLSX à travers des exemples spécifiques.

#### Insertion d'Images Dynamiques dans les Fichiers DOCX

##### Remplacement d'Image Unique

1. Ouvrez votre modèle DOCX et insérez une image temporaire (peut être n'importe quelle image de substitution, comme une [image bleue unie](https://static-docs.nocobase.com/solid-color-image-2025-04-14-11-00-26.png))

:::info
**Instructions sur le Format d'Image**

- Actuellement, les images de substitution ne prennent en charge que le format PNG. Nous recommandons d'utiliser notre exemple fourni [image bleue unie](https://static-docs.nocobase.com/solid-color-image-2025-04-14-11-00-26.png)
- Les images de rendu cibles ne prennent en charge que les formats PNG, JPG, JPEG. D'autres types d'images peuvent échouer lors du rendu.

**Instructions sur la Taille d'Image**

Que ce soit pour DOCX ou XLSX, la taille finale de l'image rendue suivra les dimensions de l'image temporaire dans le modèle. C'est-à-dire que l'image de remplacement réelle sera automatiquement redimensionnée pour correspondre à la taille de l'image de substitution que vous avez insérée. Si vous voulez que l'image rendue soit de 150×150, veuillez utiliser une image temporaire dans le modèle et l'ajuster à cette taille.
:::

2. Cliquez avec le bouton droit sur cette image, modifiez son "Texte Alternatif", et remplissez l'étiquette du champ d'image que vous voulez insérer, par exemple `{d.imageUrl}` :

![20250414211130-2025-04-14-21-11-31](https://static-docs.nocobase.com/20250414211130-2025-04-14-21-11-31.png)

3. Utilisez les données d'exemple suivantes pour le rendu :
```json
{
  "name": "Pomme",
  "imageUrl": "https://images.pexels.com/photos/206959/pexels-photo-206959.jpeg"
}
```

4. Dans le résultat rendu, l'image temporaire sera remplacée par l'image réelle :

![20250414203444-2025-04-14-20-34-46](https://static-docs.nocobase.com/20250414203444-2025-04-14-20-34-46.png)

##### Remplacement d'Images Multiples en Boucle

Si vous voulez insérer un groupe d'images dans le modèle, comme une liste de produits, vous pouvez également l'implémenter par des boucles. Les étapes spécifiques sont les suivantes :

1. Supposons que vos données soient les suivantes :
```json
{
  "products": [
    {
      "name": "Pomme",
      "imageUrl": "https://images.pexels.com/photos/206959/pexels-photo-206959.jpeg"
    },
    {
      "name": "Banane",
      "imageUrl": "https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg"
    }
  ]
}
```

2. Configurez une zone de boucle dans le modèle DOCX, et insérez des images temporaires dans chaque élément de boucle avec le Texte Alternatif défini sur `{d.products[i].imageUrl}`, comme montré ci-dessous :

![20250414205418-2025-04-14-20-54-19](https://static-docs.nocobase.com/20250414205418-2025-04-14-20-54-19.png)

3. Après le rendu, toutes les images temporaires seront remplacées par leurs images de données respectives :

![20250414205503-2025-04-14-20-55-05](https://static-docs.nocobase.com/20250414205503-2025-04-14-20-55-05.png)

#### Insertion d'Images Dynamiques dans les Fichiers XLSX

La méthode d'opération dans les modèles Excel (XLSX) est pratiquement la même, notez simplement les points suivants :

1. Après avoir inséré une image, veuillez vous assurer de sélectionner "image dans la cellule" plutôt que de faire flotter l'image au-dessus de la cellule.

![20250414211643-2025-04-14-21-16-45](https://static-docs.nocobase.com/20250414211643-2025-04-14-21-16-45.png)

2. Après avoir sélectionné la cellule, cliquez pour voir le "Texte Alternatif" pour remplir l'étiquette du champ, comme `{d.imageUrl}`.

### Code-barres
:::info
Prend actuellement en charge les types de fichiers XLSX et DOCX
:::

#### Génération de Codes-barres (comme les codes QR)

La génération de codes-barres fonctionne de la même manière que les [Images Dynamiques](/handbook/action-template-print#images-dynamiques), nécessitant seulement trois étapes :

1. Insérer une image temporaire dans le modèle pour marquer la position du code-barres

2. Modifier le "Texte Alternatif" de l'image et écrire l'étiquette du champ de format de code-barres, par exemple `{d.code:barcode(qrcode)}`, où `qrcode` est le type de code-barres (voir la [liste supportée](/handbook/action-template-print#types-de-codes-barres-supportés) ci-dessous)

![20250414214626-2025-04-14-21-46-28](https://static-docs.nocobase.com/20250414214626-2025-04-14-21-46-28.png)

3. Après le rendu, l'image de substitution sera automatiquement remplacée par l'image de code-barres correspondante :

![20250414214925-2025-04-14-21-49-26](https://static-docs.nocobase.com/20250414214925-2025-04-14-21-49-26.png)

#### Types de Codes-barres Supportés

| Nom du Code-barres | Type   |
| ------------------ | ------ |
| Code QR            | qrcode |



## Problèmes Courants et Solutions

### 1. Les colonnes et cellules vides dans les modèles Excel disparaissent dans les résultats rendus

**Description du problème** : Dans les modèles Excel, si une cellule n'a pas de contenu ou de style, elle peut être supprimée lors du rendu, provoquant des cellules manquantes dans le document final.

**Solutions** :

- **Remplir la couleur de fond** : Appliquer une couleur de fond aux cellules vides dans la zone cible pour s'assurer que les cellules restent visibles pendant le processus de rendu.
- **Insérer des espaces** : Insérer un caractère espace dans les cellules vides pour maintenir la structure des cellules même sans contenu réel.
- **Définir des bordures** : Ajouter des styles de bordure au tableau pour améliorer les limites des cellules et empêcher les cellules de disparaître lors du rendu.

**Exemple** :

Dans le modèle Excel, définir un arrière-plan gris clair pour toutes les cellules cibles et insérer des espaces dans les cellules vides.

### 2. Les cellules fusionnées sont invalides dans la sortie

**Description du problème** : Lors de l'utilisation de la fonctionnalité de boucle pour sortir des tableaux, les cellules fusionnées dans le modèle peuvent causer des résultats de rendu anormaux, tels que la perte d'effets de fusion ou le désalignement des données.

**Solutions** :

- **Éviter d'utiliser des cellules fusionnées** : Essayez d'éviter d'utiliser des cellules fusionnées dans les tableaux de sortie en boucle pour assurer un rendu correct des données.
- **Utiliser le centrage sur sélection** : Si vous avez besoin que du texte soit centré horizontalement sur plusieurs cellules, utilisez la fonction "Centrer sur sélection" au lieu de fusionner les cellules.
- **Limiter les positions des cellules fusionnées** : Si les cellules fusionnées sont nécessaires, fusionnez uniquement les cellules au-dessus ou à droite du tableau, en évitant de fusionner les cellules en dessous ou à gauche pour empêcher la perte d'effets de fusion lors du rendu.



### 3. Le contenu sous la zone de rendu en boucle cause un désordre de format

**Description du problème** : Dans les modèles Excel, s'il y a d'autre contenu (par exemple, résumé de commande, notes) sous une zone de boucle qui croît dynamiquement en fonction des éléments de données (par exemple, détails de commande), lors du rendu, les lignes de données générées par la boucle s'étendront vers le bas, écrasant directement ou poussant vers le bas le contenu statique ci-dessous, provoquant un désordre de format et un chevauchement de contenu dans le document final.

**Solutions** :

  * **Ajuster la mise en page, placer la zone de boucle en bas** : C'est la méthode la plus recommandée. Placez la zone du tableau qui nécessite un rendu en boucle au bas de toute la feuille de calcul. Déplacez toutes les informations initialement en dessous (résumé, signatures, etc.) au-dessus de la zone de boucle. De cette façon, les données de boucle peuvent s'étendre librement vers le bas sans affecter d'autres éléments.
  * **Réserver suffisamment de lignes vides** : Si du contenu doit être placé sous la zone de boucle, estimez le nombre maximum de lignes que la boucle pourrait générer et insérez manuellement suffisamment de lignes vides comme tampon entre la zone de boucle et le contenu ci-dessous. Cependant, cette méthode comporte des risques - si les données réelles dépassent les lignes estimées, le problème se reproduira.
  * **Utiliser des modèles Word** : Si les exigences de mise en page sont complexes et ne peuvent pas être résolues en ajustant la structure Excel, envisagez d'utiliser des documents Word comme modèles. Les tableaux dans Word poussent automatiquement le contenu ci-dessous lorsque les lignes augmentent, sans problèmes de chevauchement de contenu, ce qui les rend plus adaptés à la génération de tels documents dynamiques.

**Exemple** :

**Mauvaise approche** : Placer les informations "Résumé de commande" immédiatement sous le tableau "Détails de commande" en boucle.
![20250820080712](https://static-docs.nocobase.com/20250820080712.png)

**Approche correcte 1 (Ajuster la mise en page)** : Déplacer les informations "Résumé de commande" au-dessus du tableau "Détails de commande", faisant de la zone de boucle l'élément inférieur de la page.
![20250820082226](https://static-docs.nocobase.com/20250820082226.png)

**Approche correcte 2 (Réserver des lignes vides)** : Réserver de nombreuses lignes vides entre "Détails de commande" et "Résumé de commande" pour s'assurer que le contenu de boucle a suffisamment d'espace d'expansion.
![20250820081510](https://static-docs.nocobase.com/20250820081510.png)

**Approche correcte 3** : Utiliser des modèles Word.





### 4. Des messages d'erreur apparaissent lors du rendu du modèle

**Description du problème** : Pendant le rendu du modèle, le système affiche des messages d'erreur, provoquant l'échec du rendu.

**Causes possibles** :

- **Erreurs d'espace réservé** : Les noms d'espaces réservés ne correspondent pas aux champs du jeu de données ou comportent des erreurs de syntaxe.
- **Données manquantes** : Le jeu de données manque de champs référencés dans le modèle.
- **Utilisation incorrecte du formateur** : Les paramètres du formateur sont incorrects ou les types de formatage ne sont pas pris en charge.

**Solutions** :

- **Vérifier les espaces réservés** : S'assurer que les noms d'espaces réservés dans le modèle correspondent aux noms de champs dans le jeu de données et ont une syntaxe correcte.
- **Valider le jeu de données** : Confirmer que le jeu de données contient tous les champs référencés dans le modèle avec des formats de données appropriés.
- **Ajuster les formateurs** : Vérifier les méthodes d'utilisation des formateurs, s'assurer que les paramètres sont corrects et utiliser des types de formatage pris en charge.

**Exemple** :

**Modèle incorrect** :
```
ID de commande : {d.orderId}
Date de commande : {d.orderDate:format('YYYY/MM/DD')}
Montant total : {d.totalAmount:format('0.00')}
```

**Jeu de données** :
```json
{
  "orderId": "A123456789",
  "orderDate": "2025-01-01T10:00:00Z"
  // Champ totalAmount manquant
}
```

**Solution** : Ajouter le champ `totalAmount` au jeu de données ou supprimer la référence à `totalAmount` du modèle.
