"use strict";(self.webpackChunknocobase_docs=self.webpackChunknocobase_docs||[]).push([[80081],{780081:function(n,e,a){a.r(e),a.d(e,{texts:function(){return t}});const t=[{value:"The Template Printing plugin is a powerful tool that allows you to edit template files in Word, Excel, and PowerPoint (supporting ",paraId:0,tocIndex:1},{value:".docx",paraId:0,tocIndex:1},{value:", ",paraId:0,tocIndex:1},{value:".xlsx",paraId:0,tocIndex:1},{value:", ",paraId:0,tocIndex:1},{value:".pptx",paraId:0,tocIndex:1},{value:" formats), set placeholders and logical structures within the templates, and dynamically generate pre-formatted files such as ",paraId:0,tocIndex:1},{value:".docx",paraId:0,tocIndex:1},{value:", ",paraId:0,tocIndex:1},{value:".xlsx",paraId:0,tocIndex:1},{value:", ",paraId:0,tocIndex:1},{value:".pptx",paraId:0,tocIndex:1},{value:", and PDF files. This plugin is widely used for generating various business documents, such as quotations, invoices, contracts, etc., significantly improving the efficiency and accuracy of document generation.",paraId:0,tocIndex:1},{value:"Multi-format Support",paraId:1,tocIndex:2},{value:": Compatible with Word, Excel, and PowerPoint templates to meet different document generation needs.",paraId:1,tocIndex:2},{value:"Dynamic Data Filling",paraId:1,tocIndex:2},{value:": Automatically fills and generates document content through placeholders and logical structures.",paraId:1,tocIndex:2},{value:"Flexible Template Management",paraId:1,tocIndex:2},{value:": Supports adding, editing, deleting, and categorizing templates for easy maintenance and use.",paraId:1,tocIndex:2},{value:"Rich Template Syntax",paraId:1,tocIndex:2},{value:": Supports basic replacement, array access, loops, conditional output, and other template syntax to meet complex document generation needs.",paraId:1,tocIndex:2},{value:"Formatter Support",paraId:1,tocIndex:2},{value:": Provides conditional output, date formatting, number formatting, and other functions to enhance the readability and professionalism of documents.",paraId:1,tocIndex:2},{value:"Efficient Output Formats",paraId:1,tocIndex:2},{value:": Supports direct generation of PDF files for easy sharing and printing.",paraId:1,tocIndex:2},{value:"Refer to ",paraId:2,tocIndex:4},{value:"Installing and Upgrading Commercial Plugins",paraId:3,tocIndex:4},{value:"Generating PDFs requires installing LibreOffice. ",paraId:4,tocIndex:5},{value:"Please download it from the official website",paraId:4,tocIndex:5},{value:". For the Docker version, you can create a script directly in the ",paraId:4,tocIndex:5},{value:"./storage/scripts",paraId:4,tocIndex:5},{value:" directory.",paraId:4,tocIndex:5},{value:`mkdir ./storage/scripts
cd ./storage/scripts
vim install-libreoffice.sh
`,paraId:5,tocIndex:5},{value:"The content of ",paraId:6,tocIndex:5},{value:"install-libreoffice.sh",paraId:6,tocIndex:5},{value:" is as follows:",paraId:6,tocIndex:5},{value:`#!/bin/bash

# Define variables
INSTALL_DIR="/opt/libreoffice24.8"
DOWNLOAD_URL="https://downloadarchive.documentfoundation.org/libreoffice/old/24.8.5.2/deb/x86_64/LibreOffice_24.8.5.2_Linux_x86-64_deb.tar.gz"

# Check if LibreOffice is already installed
if [ -d "$INSTALL_DIR" ]; then
    echo "LibreOffice is already installed, skipping installation."
    exit 0
fi

# Update APT and install dependencies
apt-get update

apt-get install -y \\
    libfreetype6 \\
    fontconfig \\
    libgssapi-krb5-2 \\
    libxml2 \\
    libnss3 \\
    libdbus-1-3 \\
    libcairo2 \\
    libxslt1.1 \\
    libglib2.0-0 \\
    libcups2 \\
    libx11-xcb1 \\
    fonts-liberation \\
    fonts-noto-cjk \\
    wget

rm -rf /var/lib/apt/lists/*

cd /app/nocobase/storage/scripts

# Download and install LibreOffice if not already present
if [ ! -d "./libreoffice" ]; then
    rm -rf libreoffice.tar.gz
    wget --no-check-certificate -O libreoffice.tar.gz $DOWNLOAD_URL
    if [ $? -ne 0 ]; then
        echo "Failed to download LibreOffice."
        exit 1
    fi
    rm -rf libreoffice && mkdir libreoffice
    tar -zxvf libreoffice.tar.gz -C ./libreoffice --strip-components=1
    if [ $? -ne 0 ]; then
        echo "Failed to extract LibreOffice."
        exit 1
    fi
fi

# Install LibreOffice
dpkg -i libreoffice/DEBS/*.deb

ln -s /opt/libreoffice24.8/program/soffice.bin /usr/bin/libreoffice
libreoffice --version

if [ $? -ne 0 ]; then
    echo "Failed to install LibreOffice."
    exit 1
fi

echo "LibreOffice installation completed successfully."
`,paraId:7,tocIndex:5},{value:"Restart the ",paraId:8,tocIndex:5},{value:"app",paraId:8,tocIndex:5},{value:" container:",paraId:8,tocIndex:5},{value:`docker compose restart app
# View logs
docker compose logs app
`,paraId:9,tocIndex:5},{value:"Verify the installation was successful:",paraId:10,tocIndex:5},{value:`$ docker compose exec app bash -c "libreoffice --version"

LibreOffice 24.8.4.2 bb3cfa12c7b1bf994ecc5649a80400d06cd71002
`,paraId:11,tocIndex:5},{value:"Template printing currently supports detail blocks and table blocks. Below are the configuration methods for these two types of blocks.",paraId:12,tocIndex:7},{value:"Open the Detail Block",paraId:13,tocIndex:8},{value:":",paraId:13,tocIndex:8},{value:"Navigate to the detail block in the application where you need to use the template printing feature.",paraId:14,tocIndex:8},{value:"Access the Configuration Operation Menu",paraId:15,tocIndex:8},{value:":",paraId:15,tocIndex:8},{value:'Click the "Configuration Operation" menu at the top of the interface.',paraId:16,tocIndex:8},{value:'Select "Template Printing"',paraId:17,tocIndex:8},{value:":",paraId:17,tocIndex:8},{value:'Click the "Template Printing" option in the dropdown menu to activate the plugin.',paraId:18,tocIndex:8},{value:"Access the Template Configuration Page",paraId:19,tocIndex:9},{value:":",paraId:19,tocIndex:9},{value:'In the configuration menu of the "Template Printing" button, select the "Template Configuration" option.',paraId:20,tocIndex:9},{value:"Add a New Template",paraId:21,tocIndex:9},{value:":",paraId:21,tocIndex:9},{value:'Click the "Add Template" button to enter the template addition page.',paraId:22,tocIndex:9},{value:"Fill in Template Information",paraId:23,tocIndex:9},{value:":",paraId:23,tocIndex:9},{value:"In the template form, fill in the template name and select the template type (Word, Excel, PowerPoint).",paraId:24,tocIndex:9},{value:"Upload the corresponding template file (supports ",paraId:24,tocIndex:9},{value:".docx",paraId:24,tocIndex:9},{value:", ",paraId:24,tocIndex:9},{value:".xlsx",paraId:24,tocIndex:9},{value:", ",paraId:24,tocIndex:9},{value:".pptx",paraId:24,tocIndex:9},{value:" formats).",paraId:24,tocIndex:9},{value:"Edit and Save the Template",paraId:25,tocIndex:9},{value:":",paraId:25,tocIndex:9},{value:`Go to the "Field List" page, copy fields, and fill them into the template.
`,paraId:26,tocIndex:9},{value:'After filling in the details, click the "Save" button to complete the template addition.',paraId:26,tocIndex:9},{value:"Template Management",paraId:27,tocIndex:9},{value:":",paraId:27,tocIndex:9},{value:'Click the "Use" button on the right side of the template list to activate the template.',paraId:28,tocIndex:9},{value:'Click the "Edit" button to modify the template name or replace the template file.',paraId:28,tocIndex:9},{value:'Click the "Download" button to download the configured template file.',paraId:28,tocIndex:9},{value:`Click the "Delete" button to remove unnecessary templates. The system will prompt for confirmation to avoid accidental deletion.
`,paraId:28,tocIndex:9},{value:"The usage of table blocks is basically the same as detail blocks, with the following differences:",paraId:29,tocIndex:10},{value:"Support for Multiple Record Printing",paraId:30,tocIndex:10},{value:": You need to first select the records to print by checking them. You can print up to 100 records at once.",paraId:30,tocIndex:10},{value:"Template Isolation Management",paraId:31,tocIndex:10},{value:": Templates for table blocks and detail blocks are not interchangeable \u2014 because the data structures are different (one is an object, the other is an array).",paraId:31,tocIndex:10},{value:"The Template Printing plugin provides various syntaxes to flexibly insert dynamic data and logical structures into templates. Below are detailed syntax explanations and usage examples.",paraId:32,tocIndex:11},{value:"Use placeholders in the format ",paraId:33,tocIndex:12},{value:"{d.xxx}",paraId:33,tocIndex:12},{value:" for data replacement. For example:",paraId:33,tocIndex:12},{value:"{d.title}",paraId:34,tocIndex:12},{value:": Reads the ",paraId:34,tocIndex:12},{value:"title",paraId:34,tocIndex:12},{value:" field from the dataset.",paraId:34,tocIndex:12},{value:"{d.date}",paraId:34,tocIndex:12},{value:": Reads the ",paraId:34,tocIndex:12},{value:"date",paraId:34,tocIndex:12},{value:" field from the dataset.",paraId:34,tocIndex:12},{value:"Example",paraId:35,tocIndex:12},{value:":",paraId:35,tocIndex:12},{value:"Template Content:",paraId:36,tocIndex:12},{value:`Dear Customer,

Thank you for purchasing our product: {d.productName}.
Order ID: {d.orderId}
Order Date: {d.orderDate}

Wish you a pleasant experience!
`,paraId:37,tocIndex:12},{value:"Dataset:",paraId:38,tocIndex:12},{value:`{
  "productName": "Smart Watch",
  "orderId": "A123456789",
  "orderDate": "2025-01-01"
}
`,paraId:39,tocIndex:12},{value:"Rendered Result:",paraId:40,tocIndex:12},{value:`Dear Customer,

Thank you for purchasing our product: Smart Watch.
Order ID: A123456789
Order Date: 2025-01-01

Wish you a pleasant experience!
`,paraId:41,tocIndex:12},{value:"If the dataset contains sub-objects, you can access the properties of the sub-objects using dot notation.",paraId:42,tocIndex:13},{value:"Syntax",paraId:43,tocIndex:13},{value:": ",paraId:43,tocIndex:13},{value:"{d.parent.child}",paraId:43,tocIndex:13},{value:"Example",paraId:44,tocIndex:13},{value:":",paraId:44,tocIndex:13},{value:"Dataset:",paraId:45,tocIndex:13},{value:`{
  "customer": {
    "name": "Li Lei",
    "contact": {
      "email": "lilei@example.com",
      "phone": "13800138000"
    }
  }
}
`,paraId:46,tocIndex:13},{value:"Template Content:",paraId:47,tocIndex:13},{value:`Customer Name: {d.customer.name}
Email Address: {d.customer.contact.email}
Phone Number: {d.customer.contact.phone}
`,paraId:48,tocIndex:13},{value:"Rendered Result:",paraId:49,tocIndex:13},{value:`Customer Name: Li Lei
Email Address: lilei@example.com
Phone Number: 13800138000
`,paraId:50,tocIndex:13},{value:"If the dataset contains arrays, you can use the reserved keyword ",paraId:51,tocIndex:14},{value:"i",paraId:51,tocIndex:14},{value:" to access elements in the array.",paraId:51,tocIndex:14},{value:"Syntax",paraId:52,tocIndex:14},{value:": ",paraId:52,tocIndex:14},{value:"{d.arrayName[i].field}",paraId:52,tocIndex:14},{value:"Example",paraId:53,tocIndex:14},{value:":",paraId:53,tocIndex:14},{value:"Dataset:",paraId:54,tocIndex:14},{value:`{
  "staffs": [
    { "firstname": "James", "lastname": "Anderson" },
    { "firstname": "Emily", "lastname": "Roberts" },
    { "firstname": "Michael", "lastname": "Johnson" }
  ]
}
`,paraId:55,tocIndex:14},{value:"Template Content:",paraId:56,tocIndex:14},{value:`The first employee's last name is {d.staffs[i=0].lastname}, and the first name is {d.staffs[i=0].firstname}
`,paraId:57,tocIndex:14},{value:"Rendered Result:",paraId:58,tocIndex:14},{value:`The first employee's last name is Anderson, and the first name is James
`,paraId:59,tocIndex:14},{value:"Below is the English translation with second-level and third-level headings:",paraId:60,tocIndex:14},{value:"Loop handling is used to repeatedly render data from arrays or objects by defining start and end markers for the loop. Below, several common scenarios are described.",paraId:61,tocIndex:15},{value:"Use the tag ",paraId:62,tocIndex:17},{value:"{d.array[i].property}",paraId:62,tocIndex:17},{value:" to define the current loop item, and use ",paraId:62,tocIndex:17},{value:"{d.array[i+1].property}",paraId:62,tocIndex:17},{value:" to specify the next item to mark the loop area.",paraId:62,tocIndex:17},{value:"During the loop, the first line (the ",paraId:62,tocIndex:17},{value:"[i]",paraId:62,tocIndex:17},{value:" part) is automatically used as the template for repetition; you only need to write the loop example once in the template.",paraId:62,tocIndex:17},{value:"Example syntax format:",paraId:63,tocIndex:17},{value:`{d.arrayName[i].property}
{d.arrayName[i+1].property}
`,paraId:64,tocIndex:17},{value:`{
  "cars": [
    { "brand": "Toyota", "id": 1 },
    { "brand": "Hyundai", "id": 2 },
    { "brand": "BMW",    "id": 3 },
    { "brand": "Peugeot","id": 4 }
  ]
}
`,paraId:65,tocIndex:19},{value:`Carsid
{d.cars[i].brand}{d.cars[i].id}
{d.cars[i+1].brand}
`,paraId:66,tocIndex:20},{value:`Carsid
Toyota1
Hyundai2
BMW3
Peugeot4
`,paraId:67,tocIndex:21},{value:"Suitable for cases where an array contains nested arrays; nesting can be at an infinite level.",paraId:68,tocIndex:22},{value:`[
  {
    "brand": "Toyota",
    "models": [
      { "size": "Prius 4", "power": 125 },
      { "size": "Prius 5", "power": 139 }
    ]
  },
  {
    "brand": "Kia",
    "models": [
      { "size": "EV4", "power": 450 },
      { "size": "EV6", "power": 500 }
    ]
  }
]
`,paraId:69,tocIndex:23},{value:`{d[i].brand}

Models
{d[i].models[i].size} - {d[i].models[i].power}
{d[i].models[i+1].size}

{d[i+1].brand}
`,paraId:70,tocIndex:24},{value:`Toyota

Models
Prius 4 - 125
Prius 5 - 139

Kia
`,paraId:71,tocIndex:25},{value:"Bidirectional loops allow iteration over both rows and columns simultaneously, which is suitable for generating comparison tables and other complex layouts (note: currently, some formats are officially supported only in DOCX, HTML, and MD templates).",paraId:72,tocIndex:26},{value:`{
  "titles": [
    { "name": "Kia" },
    { "name": "Toyota" },
    { "name": "Hopium" }
  ],
  "cars": [
    { "models": [ "EV3", "Prius 1", "Prototype" ] },
    { "models": [ "EV4", "Prius 2", "" ] },
    { "models": [ "EV6", "Prius 3", "" ] }
  ]
}
`,paraId:73,tocIndex:27},{value:`{d.titles[i].name}{d.titles[i+1].name}
{d.cars[i].models[i]}{d.cars[i].models[i+1]}
{d.cars[i+1].models[i]}
`,paraId:74,tocIndex:28},{value:`KiaToyotaHopium
EV3Prius 1Prototype
EV4Prius 2
EV6Prius 3
`,paraId:75,tocIndex:29},{value:"Within a loop, you can directly access the current iteration's index, which helps meet special formatting requirements.",paraId:76,tocIndex:30},{value:`{d[i].cars[i].other.wheels[i].tire.subObject:add(.i):add(..i):add(...i)}
`,paraId:77,tocIndex:31},{value:"Note: The number of dots indicates the index level (for example, ",paraId:78,tocIndex:31},{value:".i",paraId:78,tocIndex:31},{value:" represents the current level, while ",paraId:78,tocIndex:31},{value:"..i",paraId:78,tocIndex:31},{value:" represents the previous level). There is currently an issue with reverse ordering; please refer to the official documentation for details.",paraId:78,tocIndex:31},{value:"For properties in an object, use ",paraId:79,tocIndex:33},{value:".att",paraId:79,tocIndex:33},{value:" to obtain the property name and ",paraId:79,tocIndex:33},{value:".val",paraId:79,tocIndex:33},{value:" to obtain the property value.",paraId:79,tocIndex:33},{value:"During iteration, each property item is traversed one by one.",paraId:79,tocIndex:33},{value:"Example syntax format:",paraId:80,tocIndex:33},{value:`{d.objectName[i].att}  // property name
{d.objectName[i].val}  // property value
`,paraId:81,tocIndex:33},{value:`{
  "myObject": {
    "paul": "10",
    "jack": "20",
    "bob":  "30"
  }
}
`,paraId:82,tocIndex:35},{value:`People namePeople age
{d.myObject[i].att}{d.myObject[i].val}
{d.myObject[i+1].att}{d.myObject[i+1].val}
`,paraId:83,tocIndex:36},{value:`People namePeople age
paul10
jack20
bob30
`,paraId:84,tocIndex:37},{value:"Using the sorting feature, you can directly sort array data within the template.",paraId:85,tocIndex:38},{value:`Use an attribute as the sorting criterion in the loop tag. The syntax format is:
`,paraId:86,tocIndex:39},{value:`{d.array[sortingAttribute, i].property}
{d.array[sortingAttribute+1, i+1].property}
`,paraId:87,tocIndex:39},{value:"For multiple sorting criteria, separate the attributes with commas within the brackets.",paraId:86,tocIndex:39},{value:`{
  "cars": [
    { "brand": "Ferrari", "power": 3 },
    { "brand": "Peugeot", "power": 1 },
    { "brand": "BMW",     "power": 2 },
    { "brand": "Lexus",   "power": 1 }
  ]
}
`,paraId:88,tocIndex:41},{value:`Cars
{d.cars[power, i].brand}
{d.cars[power+1, i+1].brand}
`,paraId:89,tocIndex:42},{value:`Cars
Peugeot
Lexus
BMW
Ferrari
`,paraId:90,tocIndex:43},{value:`{
  "cars": [
    { "brand": "Ferrari", "power": 3, "sub": { "size": 1 } },
    { "brand": "Aptera",  "power": 1, "sub": { "size": 20 } },
    { "brand": "Peugeot", "power": 1, "sub": { "size": 20 } },
    { "brand": "BMW",     "power": 2, "sub": { "size": 1 } },
    { "brand": "Kia",     "power": 1, "sub": { "size": 10 } }
  ]
}
`,paraId:91,tocIndex:45},{value:`Cars
{d.cars[power, sub.size, i].brand}
{d.cars[power+1, sub.size+1, i+1].brand}
`,paraId:92,tocIndex:46},{value:`Cars
Kia
Aptera
Peugeot
BMW
Ferrari
`,paraId:93,tocIndex:47},{value:"Filtering is used to filter out rows in a loop based on specific conditions.",paraId:94,tocIndex:48},{value:"Add conditions in the loop tag (for example, ",paraId:95,tocIndex:49},{value:"age > 19",paraId:95,tocIndex:49},{value:`). The syntax format is:
`,paraId:95,tocIndex:49},{value:`{d.array[i, condition].property}
`,paraId:96,tocIndex:49},{value:`[
  { "name": "John",   "age": 20 },
  { "name": "Eva",    "age": 18 },
  { "name": "Bob",    "age": 25 },
  { "name": "Charly", "age": 30 }
]
`,paraId:97,tocIndex:51},{value:`People
{d[i, age > 19, age < 30].name}
{d[i+1, age > 19, age < 30].name}
`,paraId:98,tocIndex:52},{value:`People
John
Bob
`,paraId:99,tocIndex:53},{value:`Specify string conditions using single quotes. For example:
`,paraId:100,tocIndex:54},{value:`{d.array[i, type='rocket'].name}
`,paraId:101,tocIndex:54},{value:`[
  { "name": "Falcon 9",    "type": "rocket" },
  { "name": "Model S",     "type": "car" },
  { "name": "Model 3",     "type": "car" },
  { "name": "Falcon Heavy","type": "rocket" }
]
`,paraId:102,tocIndex:56},{value:`People
{d[i, type='rocket'].name}
{d[i+1, type='rocket'].name}
`,paraId:103,tocIndex:57},{value:`People
Falcon 9
Falcon Heavy
`,paraId:104,tocIndex:58},{value:"You can use the loop index ",paraId:105,tocIndex:59},{value:"i",paraId:105,tocIndex:59},{value:` to filter out the first N elements. For example:
`,paraId:105,tocIndex:59},{value:`{d.array[i, i < N].property}
`,paraId:106,tocIndex:59},{value:`[
  { "name": "Falcon 9" },
  { "name": "Model S" },
  { "name": "Model 3" },
  { "name": "Falcon Heavy" }
]
`,paraId:107,tocIndex:61},{value:`People
{d[i, i < 2].name}
{d[i+1, i < 2].name}
`,paraId:108,tocIndex:62},{value:`People
Falcon 9
Model S
`,paraId:109,tocIndex:63},{value:"Use negative indexing ",paraId:110,tocIndex:64},{value:"i",paraId:110,tocIndex:64},{value:` to represent items from the end. For example:
`,paraId:110,tocIndex:64},{value:"{d.array[i=-1].property}",paraId:111,tocIndex:64},{value:" retrieves the last item.",paraId:111,tocIndex:64},{value:"{d.array[i, i!=-1].property}",paraId:111,tocIndex:64},{value:" excludes the last item.",paraId:111,tocIndex:64},{value:`[
  { "name": "Falcon 9" },
  { "name": "Model S" },
  { "name": "Model 3" },
  { "name": "Falcon Heavy" }
]
`,paraId:112,tocIndex:66},{value:`Last item: {d[i=-1].name}

Excluding the last item:
{d[i, i!=-1].name}
{d[i+1, i!=-1].name}

Excluding the last two items:
{d[i, i<-2].name}
{d[i+1, i<-2].name}
`,paraId:113,tocIndex:67},{value:`Last item: Falcon Heavy

Excluding the last item:
Falcon 9
Model S
Model 3

Excluding the last two items:
Falcon 9
Model S
`,paraId:114,tocIndex:68},{value:`Using intelligent condition blocks, you can hide an entire row based on complex conditions. For example:
`,paraId:115,tocIndex:69},{value:`{d.array[i].property:ifIN('keyword'):drop(row)}
`,paraId:116,tocIndex:69},{value:`[
  { "name": "Falcon 9" },
  { "name": "Model S" },
  { "name": "Model 3" },
  { "name": "Falcon Heavy" }
]
`,paraId:117,tocIndex:71},{value:`People
{d[i].name}
{d[i].name:ifIN('Falcon'):drop(row)}
{d[i+1].name}
`,paraId:118,tocIndex:72},{value:`People
Model S
Model 3
`,paraId:119,tocIndex:73},{value:'(Note: Rows containing "Falcon" in the template are removed by the intelligent filtering condition.)',paraId:120,tocIndex:73},{value:"Using a custom iterator, you can obtain unique (non-duplicate) items based on a property value. The syntax is similar to a normal loop but automatically ignores duplicate items.",paraId:121,tocIndex:75},{value:"Example format:",paraId:122,tocIndex:75},{value:`{d.array[property].property}
{d.array[property+1].property}
`,paraId:123,tocIndex:75},{value:`[
  { "type": "car",   "brand": "Hyundai" },
  { "type": "plane", "brand": "Airbus" },
  { "type": "plane", "brand": "Boeing" },
  { "type": "car",   "brand": "Toyota" }
]
`,paraId:124,tocIndex:77},{value:`Vehicles
{d[type].brand}
{d[type+1].brand}
`,paraId:125,tocIndex:78},{value:`Vehicles
Hyundai
Airbus
`,paraId:126,tocIndex:79},{value:"Below is the English translation of the documentation, with headings and subheadings preserved:",paraId:127,tocIndex:79},{value:"Formatters are used to convert raw data into text that is easy to read. They are applied to data using a colon (",paraId:128,tocIndex:80},{value:":",paraId:128,tocIndex:80},{value:") and can be chained so that the output of each formatter becomes the input for the next. Some formatters support constant parameters or dynamic parameters.",paraId:128,tocIndex:80},{value:"The basic invocation of a formatter is as follows:",paraId:129,tocIndex:82},{value:`{d.property:formatter1:formatter2(...)}
`,paraId:130,tocIndex:82},{value:"For example, in the case of converting the string ",paraId:131,tocIndex:82},{value:'"JOHN"',paraId:131,tocIndex:82},{value:" to ",paraId:131,tocIndex:82},{value:'"John"',paraId:131,tocIndex:82},{value:", the formatter ",paraId:131,tocIndex:82},{value:"lowerCase",paraId:131,tocIndex:82},{value:" is used first to convert all letters to lower case, and then ",paraId:131,tocIndex:82},{value:"ucFirst",paraId:131,tocIndex:82},{value:" is used to capitalize the first letter.",paraId:131,tocIndex:82},{value:"Data:",paraId:132,tocIndex:83},{value:`{
  "name": "JOHN",
  "birthday": "2000-01-31"
}
`,paraId:133,tocIndex:83},{value:"Template:",paraId:134,tocIndex:83},{value:`My name is {d.name:lowerCase:ucFirst}. I was born on {d.birthday:formatD(LL)}.
`,paraId:135,tocIndex:83},{value:"After rendering, the output is:",paraId:136,tocIndex:84},{value:`My name is John. I was born on January 31, 2000.
`,paraId:137,tocIndex:84},{value:"Many formatters support one or more constant parameters, which are separated by commas and enclosed in parentheses to modify the output. For example, ",paraId:138,tocIndex:86},{value:":prepend(myPrefix)",paraId:138,tocIndex:86},{value:' will add "myPrefix" in front of the text.',paraId:138,tocIndex:86},{value:"Note:",paraId:138,tocIndex:86},{value:" If the parameter contains commas or spaces, it must be enclosed in single quotes, for example: ",paraId:138,tocIndex:86},{value:"prepend('my prefix')",paraId:138,tocIndex:86},{value:".",paraId:138,tocIndex:86},{value:"Template example (see the specific formatter usage for details).",paraId:139,tocIndex:87},{value:"The output will have the specified prefix added in front of the text.",paraId:140,tocIndex:88},{value:"Formatters also support dynamic parameters. These parameters start with a dot (",paraId:141,tocIndex:90},{value:".",paraId:141,tocIndex:90},{value:") and are not enclosed in quotes.",paraId:141,tocIndex:90},{value:`
There are two methods to specify dynamic parameters:`,paraId:141,tocIndex:90},{value:"Absolute JSON Path:",paraId:142,tocIndex:90},{value:" Begins with ",paraId:142,tocIndex:90},{value:"d.",paraId:142,tocIndex:90},{value:" or ",paraId:142,tocIndex:90},{value:"c.",paraId:142,tocIndex:90},{value:" (referring to root data or supplemental data).",paraId:142,tocIndex:90},{value:"Relative JSON Path:",paraId:142,tocIndex:90},{value:" Begins with a single dot (",paraId:142,tocIndex:90},{value:".",paraId:142,tocIndex:90},{value:"), indicating that the property is looked up from the current parent object.",paraId:142,tocIndex:90},{value:"For example:",paraId:143,tocIndex:90},{value:`{d.subObject.qtyB:add(d.subObject.qtyC)}
`,paraId:144,tocIndex:90},{value:"It can also be written as a relative path:",paraId:145,tocIndex:90},{value:`{d.subObject.qtyB:add(.qtyC)}
`,paraId:146,tocIndex:90},{value:"If you need to access data from a higher level (parent or above), you can use multiple dots:",paraId:147,tocIndex:90},{value:`{d.subObject.qtyB:add(..qtyA):add(.qtyC)}
`,paraId:148,tocIndex:90},{value:"Data:",paraId:149,tocIndex:91},{value:`{
  "id": 10,
  "qtyA": 20,
  "subObject": {
    "qtyB": 5,
    "qtyC": 3
  },
  "subArray": [{
    "id": 1000,
    "qtyE": 3
  }]
}
`,paraId:150,tocIndex:91},{value:"Usage in Template:",paraId:151,tocIndex:91},{value:`{d.subObject.qtyB:add(d.subObject.qtyC)}      // Result: 8 (5 + 3)
{d.subObject.qtyB:add(.qtyC)}                   // Result: 8
{d.subObject.qtyB:add(..qtyA):add(.qtyC)}        // Result: 28 (5 + 20 + 3)
{d.subArray[0].qtyE:add(..subObject.qtyC)}       // Result: 6 (3 + 3)
`,paraId:152,tocIndex:91},{value:"The examples yield 8, 8, 28, and 6 respectively.",paraId:153,tocIndex:92},{value:"Note:",paraId:154,tocIndex:92},{value:" Using custom iterators or array filters as dynamic parameters is not allowed, for example:",paraId:154,tocIndex:92},{value:`{d.subObject.qtyB:add(..subArray[i].qtyE)}
{d.subObject.qtyB:add(d.subArray[i].qtyE)}
`,paraId:155,tocIndex:92},{value:"This section provides various formatters for text data. The following subsections introduce each formatter's syntax, examples, and results.",paraId:156,tocIndex:93},{value:"Converts all letters to lower case.",paraId:157,tocIndex:95},{value:`'My Car':lowerCase()   // Outputs "my car"
'my car':lowerCase()   // Outputs "my car"
null:lowerCase()       // Outputs null
1203:lowerCase()       // Outputs 1203
`,paraId:158,tocIndex:96},{value:"Each example outputs as indicated in the comments.",paraId:159,tocIndex:97},{value:"Converts all letters to upper case.",paraId:160,tocIndex:99},{value:`'My Car':upperCase()   // Outputs "MY CAR"
'my car':upperCase()   // Outputs "MY CAR"
null:upperCase()       // Outputs null
1203:upperCase()       // Outputs 1203
`,paraId:161,tocIndex:100},{value:"Each example outputs as indicated in the comments.",paraId:162,tocIndex:101},{value:"Capitalizes only the first letter of the string while leaving the rest unchanged.",paraId:163,tocIndex:103},{value:`'My Car':ucFirst()     // Outputs "My Car"
'my car':ucFirst()     // Outputs "My car"
null:ucFirst()         // Outputs null
undefined:ucFirst()    // Outputs undefined
1203:ucFirst()         // Outputs 1203
`,paraId:164,tocIndex:104},{value:"The output is as described in the comments.",paraId:165,tocIndex:105},{value:"Capitalizes the first letter of each word in the string.",paraId:166,tocIndex:107},{value:`'my car':ucWords()     // Outputs "My Car"
'My cAR':ucWords()     // Outputs "My CAR"
null:ucWords()         // Outputs null
undefined:ucWords()    // Outputs undefined
1203:ucWords()         // Outputs 1203
`,paraId:167,tocIndex:108},{value:"The output is as shown in the examples.",paraId:168,tocIndex:109},{value:"Always returns the specified message regardless of the original data, making it useful as a fallback formatter.",paraId:169,tocIndex:111},{value:`
Parameter:`,paraId:169,tocIndex:111},{value:"message:",paraId:170,tocIndex:111},{value:" The text to print.",paraId:170,tocIndex:111},{value:`'My Car':print('hello!')   // Outputs "hello!"
'my car':print('hello!')   // Outputs "hello!"
null:print('hello!')       // Outputs "hello!"
1203:print('hello!')       // Outputs "hello!"
`,paraId:171,tocIndex:112},{value:'Returns the specified string "hello!" in all cases.',paraId:172,tocIndex:113},{value:"Converts an object or array into a JSON-formatted string.",paraId:173,tocIndex:115},{value:`[{'id':2,'name':'homer'},{'id':3,'name':'bart'}]:printJSON()
// Outputs "[
  {"id": 2, "name": "homer"},
  {"id": 3, "name": "bart"}
]"
'my car':printJSON()   // Outputs ""my car""
`,paraId:174,tocIndex:116},{value:"The output is the JSON-formatted string of the given data.",paraId:175,tocIndex:117},{value:"Removes diacritical marks from text, converting it to an unaccented format.",paraId:176,tocIndex:119},{value:`'cr\xC3\xA8me brul\xC3\xA9e':unaccent()   // Outputs "creme brulee"
'CR\xC3\x88ME BRUL\xC3\x89E':unaccent()   // Outputs "CREME BRULEE"
'\xC3\xAAtre':unaccent()           // Outputs "etre"
'\xC3\xA9\xC3\xB9\xC3\xAF\xC3\xAA\xC3\xA8\xC3\xA0':unaccent()       // Outputs "euieea"
`,paraId:177,tocIndex:120},{value:"All examples output the text with accents removed.",paraId:178,tocIndex:121},{value:"Converts carriage return and newline characters (",paraId:179,tocIndex:123},{value:" ",paraId:179,tocIndex:123},{value:" or ",paraId:179,tocIndex:123},{value:" ",paraId:179,tocIndex:123},{value:") into document-specific line break tags. This is useful for formats such as DOCX, PPTX, ODT, ODP, and ODS.",paraId:179,tocIndex:123},{value:"Note:",paraId:179,tocIndex:123},{value:" When using ",paraId:179,tocIndex:123},{value:":html",paraId:179,tocIndex:123},{value:" before ",paraId:179,tocIndex:123},{value:":convCRLF",paraId:179,tocIndex:123},{value:", the ",paraId:179,tocIndex:123},{value:" ",paraId:179,tocIndex:123},{value:" will be converted to a ",paraId:179,tocIndex:123},{value:"<br>",paraId:179,tocIndex:123},{value:" tag.",paraId:179,tocIndex:123},{value:`// For ODT format:
'my blue 
 car':convCRLF()    // Outputs "my blue <text:line-break/> car"
'my blue 
 car':convCRLF()    // Outputs "my blue <text:line-break/> car"

// For DOCX format:
'my blue 
 car':convCRLF()    // Outputs "my blue </w:t><w:br/><w:t> car"
'my blue 
 car':convCRLF()    // Outputs "my blue </w:t><w:br/><w:t> car"
`,paraId:180,tocIndex:124},{value:"The output shows the line break markers appropriate for the target document format.",paraId:181,tocIndex:125},{value:"Performs substring operations on a string, starting at index ",paraId:182,tocIndex:127},{value:"begin",paraId:182,tocIndex:127},{value:" (0-based) and ending just before index ",paraId:182,tocIndex:127},{value:"end",paraId:182,tocIndex:127},{value:".",paraId:182,tocIndex:127},{value:`
An optional parameter `,paraId:182,tocIndex:127},{value:"wordMode",paraId:182,tocIndex:127},{value:" (boolean or ",paraId:182,tocIndex:127},{value:"last",paraId:182,tocIndex:127},{value:") controls whether to avoid breaking a word in the middle.",paraId:182,tocIndex:127},{value:`'foobar':substr(0, 3)            // Outputs "foo"
'foobar':substr(1)               // Outputs "oobar"
'foobar':substr(-2)              // Outputs "ar"
'foobar':substr(2, -1)           // Outputs "oba"
'abcd efg hijklm':substr(0, 11, true)  // Outputs "abcd efg "
'abcd efg hijklm':substr(1, 11, true)  // Outputs "abcd efg "
`,paraId:183,tocIndex:128},{value:"The output is the substring extracted according to the parameters.",paraId:184,tocIndex:129},{value:"Splits a string into an array using the specified delimiter.",paraId:185,tocIndex:131},{value:`
Parameter:`,paraId:185,tocIndex:131},{value:"delimiter:",paraId:186,tocIndex:131},{value:" The delimiter string.",paraId:186,tocIndex:131},{value:`'abcdefc12':split('c')    // Outputs ["ab", "def", "12"]
1222.1:split('.')         // Outputs ["1222", "1"]
'ab/cd/ef':split('/')      // Outputs ["ab", "cd", "ef"]
`,paraId:187,tocIndex:132},{value:"The example results in an array split by the given delimiter.",paraId:188,tocIndex:133},{value:"Pads the left side of a string with a specified character until the final string reaches ",paraId:189,tocIndex:135},{value:"targetLength",paraId:189,tocIndex:135},{value:".",paraId:189,tocIndex:135},{value:`
If the target length is less than the original string length, the original string is returned.`,paraId:189,tocIndex:135},{value:`
Parameters:`,paraId:189,tocIndex:135},{value:"targetLength:",paraId:190,tocIndex:135},{value:" The desired total length.",paraId:190,tocIndex:135},{value:"padString:",paraId:190,tocIndex:135},{value:" The string used for padding (default is a space).",paraId:190,tocIndex:135},{value:`'abc':padl(10)              // Outputs "       abc"
'abc':padl(10, 'foo')       // Outputs "foofoofabc"
'abc':padl(6, '123465')     // Outputs "123abc"
'abc':padl(8, '0')          // Outputs "00000abc"
'abc':padl(1)               // Outputs "abc"
`,paraId:191,tocIndex:136},{value:"Each example outputs the string padded on the left accordingly.",paraId:192,tocIndex:137},{value:"Pads the right side of a string with a specified character until the final string reaches ",paraId:193,tocIndex:139},{value:"targetLength",paraId:193,tocIndex:139},{value:".",paraId:193,tocIndex:139},{value:`
Parameters are the same as for `,paraId:193,tocIndex:139},{value:":padl",paraId:193,tocIndex:139},{value:".",paraId:193,tocIndex:139},{value:`'abc':padr(10)              // Outputs "abc       "
'abc':padr(10, 'foo')       // Outputs "abcfoofoof"
'abc':padr(6, '123465')     // Outputs "abc123"
'abc':padr(8, '0')          // Outputs "abc00000"
'abc':padr(1)               // Outputs "abc"
`,paraId:194,tocIndex:140},{value:"The output shows the string padded on the right.",paraId:195,tocIndex:141},{value:'If the text exceeds the specified number of characters, appends an ellipsis ("...") at the end.',paraId:196,tocIndex:143},{value:`
Parameter:`,paraId:196,tocIndex:143},{value:"maximum:",paraId:197,tocIndex:143},{value:" The maximum allowed number of characters.",paraId:197,tocIndex:143},{value:`'abcdef':ellipsis(3)      // Outputs "abc..."
'abcdef':ellipsis(6)      // Outputs "abcdef"
'abcdef':ellipsis(10)     // Outputs "abcdef"
`,paraId:198,tocIndex:144},{value:"The examples show text truncated and appended with an ellipsis if needed.",paraId:199,tocIndex:145},{value:"Prepends the specified text to the beginning of the string.",paraId:200,tocIndex:147},{value:`
Parameter:`,paraId:200,tocIndex:147},{value:"textToPrepend:",paraId:201,tocIndex:147},{value:" The prefix text.",paraId:201,tocIndex:147},{value:`'abcdef':prepend('123')     // Outputs "123abcdef"
`,paraId:202,tocIndex:148},{value:"The output shows the text with the specified prefix added.",paraId:203,tocIndex:149},{value:"Appends the specified text to the end of the string.",paraId:204,tocIndex:151},{value:`
Parameter:`,paraId:204,tocIndex:151},{value:"textToAppend:",paraId:205,tocIndex:151},{value:" The suffix text.",paraId:205,tocIndex:151},{value:`'abcdef':append('123')      // Outputs "abcdef123"
`,paraId:206,tocIndex:152},{value:"The output shows the text with the specified suffix added.",paraId:207,tocIndex:153},{value:"Replaces all occurrences of ",paraId:208,tocIndex:155},{value:"oldText",paraId:208,tocIndex:155},{value:" in the text with ",paraId:208,tocIndex:155},{value:"newText",paraId:208,tocIndex:155},{value:".",paraId:208,tocIndex:155},{value:`
Parameters:`,paraId:208,tocIndex:155},{value:"oldText:",paraId:209,tocIndex:155},{value:" The text to be replaced.",paraId:209,tocIndex:155},{value:"newText:",paraId:209,tocIndex:155},{value:" The new text to replace with.",paraId:209,tocIndex:155},{value:"Note:",paraId:209,tocIndex:155},{value:" If ",paraId:209,tocIndex:155},{value:"newText",paraId:209,tocIndex:155},{value:" is null, it indicates that the matching text should be removed.",paraId:209,tocIndex:155},{value:`'abcdef abcde':replace('cd', 'OK')    // Outputs "abOKef abOKe"
'abcdef abcde':replace('cd')          // Outputs "abef abe"
'abcdef abcde':replace('cd', null)      // Outputs "abef abe"
'abcdef abcde':replace('cd', 1000)      // Outputs "ab1000ef ab1000e"
`,paraId:210,tocIndex:156},{value:"The output is the text after replacing the specified segments.",paraId:211,tocIndex:157},{value:"Returns the length of a string or an array.",paraId:212,tocIndex:159},{value:`'Hello World':len()     // Outputs 11
'':len()                // Outputs 0
[1,2,3,4,5]:len()       // Outputs 5
[1,'Hello']:len()       // Outputs 2
`,paraId:213,tocIndex:160},{value:"Outputs the corresponding length as a number.",paraId:214,tocIndex:161},{value:"Translates the text using a translation dictionary.",paraId:215,tocIndex:163},{value:`
Examples and results depend on the actual translation dictionary configuration.`,paraId:215,tocIndex:163},{value:"By default, Template removes certain illegal characters from XML (such as ",paraId:216,tocIndex:165},{value:"&",paraId:216,tocIndex:165},{value:", ",paraId:216,tocIndex:165},{value:">",paraId:216,tocIndex:165},{value:", ",paraId:216,tocIndex:165},{value:"<",paraId:216,tocIndex:165},{value:", etc.). This formatter preserves character references (for example, ",paraId:216,tocIndex:165},{value:"&#xa7;",paraId:216,tocIndex:165},{value:" remains unchanged) and is suitable for specific XML generation scenarios.",paraId:216,tocIndex:165},{value:`
Examples and results depend on the specific use case.`,paraId:216,tocIndex:165},{value:"Formats a number according to localization settings.",paraId:217,tocIndex:168},{value:`
Parameter:`,paraId:217,tocIndex:168},{value:"precision:",paraId:218,tocIndex:168},{value:" The number of decimal places.",paraId:218,tocIndex:168},{value:`
For ODS/XLSX formats, the number of displayed decimals is determined by the text editor; for other formats, this parameter is used.`,paraId:218,tocIndex:168},{value:`// Example environment: API options { "lang": "en-us" }
'10':formatN()         // Outputs "10.000"
'1000.456':formatN()   // Outputs "1,000.456"
`,paraId:219,tocIndex:169},{value:"The number is output according to the specified precision and localization format.",paraId:220,tocIndex:170},{value:"Rounds the number to the specified number of decimal places.",paraId:221,tocIndex:172},{value:`10.05123:round(2)      // Outputs 10.05
1.05:round(1)          // Outputs 1.1
`,paraId:222,tocIndex:173},{value:"The output is the number rounded to the given precision.",paraId:223,tocIndex:174},{value:"Adds the specified value to the current number.",paraId:224,tocIndex:176},{value:`
Parameter:`,paraId:224,tocIndex:176},{value:"value:",paraId:225,tocIndex:176},{value:" The number to add.",paraId:225,tocIndex:176},{value:`1000.4:add(2)         // Outputs 1002.4
'1000.4':add('2')      // Outputs 1002.4
`,paraId:226,tocIndex:177},{value:"The output is the sum of the current number and the specified value.",paraId:227,tocIndex:178},{value:"Subtracts the specified value from the current number.",paraId:228,tocIndex:180},{value:`
Parameter:`,paraId:228,tocIndex:180},{value:"value:",paraId:229,tocIndex:180},{value:" The number to subtract.",paraId:229,tocIndex:180},{value:`1000.4:sub(2)         // Outputs 998.4
'1000.4':sub('2')      // Outputs 998.4
`,paraId:230,tocIndex:181},{value:"The output is the current number minus the specified value.",paraId:231,tocIndex:182},{value:"Multiplies the current number by the specified value.",paraId:232,tocIndex:184},{value:`
Parameter:`,paraId:232,tocIndex:184},{value:"value:",paraId:233,tocIndex:184},{value:" The multiplier.",paraId:233,tocIndex:184},{value:`1000.4:mul(2)         // Outputs 2000.8
'1000.4':mul('2')      // Outputs 2000.8
`,paraId:234,tocIndex:185},{value:"The output is the product of the current number and the specified value.",paraId:235,tocIndex:186},{value:"Divides the current number by the specified value.",paraId:236,tocIndex:188},{value:`
Parameter:`,paraId:236,tocIndex:188},{value:"value:",paraId:237,tocIndex:188},{value:" The divisor.",paraId:237,tocIndex:188},{value:`1000.4:div(2)         // Outputs 500.2
'1000.4':div('2')      // Outputs 500.2
`,paraId:238,tocIndex:189},{value:"The output is the result of the division.",paraId:239,tocIndex:190},{value:"Computes the modulus (remainder) of the current number divided by the specified value.",paraId:240,tocIndex:192},{value:`
Parameter:`,paraId:240,tocIndex:192},{value:"value:",paraId:241,tocIndex:192},{value:" The modulus divisor.",paraId:241,tocIndex:192},{value:`4:mod(2)              // Outputs 0
3:mod(2)              // Outputs 1
`,paraId:242,tocIndex:193},{value:"The output is the remainder from the modulus operation.",paraId:243,tocIndex:194},{value:"Returns the absolute value of the number.",paraId:244,tocIndex:196},{value:`-10:abs()             // Outputs 10
-10.54:abs()          // Outputs 10.54
10.54:abs()           // Outputs 10.54
'-200':abs()          // Outputs 200
`,paraId:245,tocIndex:197},{value:"The output is the absolute value of the input number.",paraId:246,tocIndex:198},{value:"Rounds the number upward to the smallest integer that is greater than or equal to the current number.",paraId:247,tocIndex:200},{value:`10.05123:ceil()       // Outputs 11
1.05:ceil()           // Outputs 2
-1.05:ceil()          // Outputs -1
`,paraId:248,tocIndex:201},{value:"The output is the number rounded upward to the nearest integer.",paraId:249,tocIndex:202},{value:"Rounds the number downward to the largest integer that is less than or equal to the current number.",paraId:250,tocIndex:204},{value:`10.05123:floor()      // Outputs 10
1.05:floor()          // Outputs 1
-1.05:floor()         // Outputs -2
`,paraId:251,tocIndex:205},{value:"The output is the number rounded downward to the nearest integer.",paraId:252,tocIndex:206},{value:"Converts the number to an integer (not recommended for use).",paraId:253,tocIndex:208},{value:"Depends on the specific conversion case.",paraId:254,tocIndex:209},{value:"Converts the number to English format (using ",paraId:255,tocIndex:211},{value:".",paraId:255,tocIndex:211},{value:" as the decimal point). Not recommended for use.",paraId:255,tocIndex:211},{value:"Depends on the specific conversion case.",paraId:256,tocIndex:212},{value:"Converts the number to a string while keeping only the specified number of decimal places. Not recommended for use.",paraId:257,tocIndex:214},{value:"Depends on the specific conversion case.",paraId:258,tocIndex:215},{value:"Converts the number to French format (using ",paraId:259,tocIndex:217},{value:",",paraId:259,tocIndex:217},{value:" as the decimal separator). Not recommended for use.",paraId:259,tocIndex:217},{value:"Depends on the specific conversion case.",paraId:260,tocIndex:218},{value:"Formats a currency number and allows specifying the number of decimals or a particular output format.",paraId:261,tocIndex:221},{value:`
Parameters:`,paraId:261,tocIndex:221},{value:"precisionOrFormat:",paraId:262,tocIndex:221},{value:` An optional parameter that can either be a number (specifying the number of decimals) or a format specifier:
`,paraId:262,tocIndex:221},{value:"An integer: changes the default decimal precision.",paraId:263,tocIndex:221},{value:"'M'",paraId:263,tocIndex:221},{value:": outputs only the main currency name.",paraId:263,tocIndex:221},{value:"'L'",paraId:263,tocIndex:221},{value:": outputs the number along with the currency symbol (default).",paraId:263,tocIndex:221},{value:"'LL'",paraId:263,tocIndex:221},{value:": outputs the number along with the main currency name.",paraId:263,tocIndex:221},{value:"targetCurrency:",paraId:262,tocIndex:221},{value:" Optional; the target currency code (in uppercase, e.g., USD, EUR) that overrides the global settings.",paraId:262,tocIndex:221},{value:`// Example environment: API options { "lang": "en-us", "currency": { "source": "EUR", "target": "USD", "rates": { "EUR": 1, "USD": 2 } } }
'1000.456':formatC()      // Outputs "$2,000.91"
'1000.456':formatC('M')    // Outputs "dollars"
'1':formatC('M')           // Outputs "dollar"
'1000':formatC('L')        // Outputs "$2,000.00"
'1000':formatC('LL')       // Outputs "2,000.00 dollars"

// French example (when environment settings differ):
'1000.456':formatC()      // Outputs "2 000,91 ..."  
'1000.456':formatC()      // When the source and target currencies are the same, outputs "1 000,46 \u20AC"
`,paraId:264,tocIndex:222},{value:"The output depends on the API options and exchange rate settings.",paraId:265,tocIndex:223},{value:"Converts a number from one currency to another. The exchange rate can be passed via API options or set globally.",paraId:266,tocIndex:225},{value:`
If no parameters are specified, the conversion is automatically performed from `,paraId:266,tocIndex:225},{value:"options.currencySource",paraId:266,tocIndex:225},{value:" to ",paraId:266,tocIndex:225},{value:"options.currencyTarget",paraId:266,tocIndex:225},{value:".",paraId:266,tocIndex:225},{value:`
Parameters:`,paraId:266,tocIndex:225},{value:"target:",paraId:267,tocIndex:225},{value:" Optional; the target currency code (defaults to ",paraId:267,tocIndex:225},{value:"options.currencyTarget",paraId:267,tocIndex:225},{value:").",paraId:267,tocIndex:225},{value:"source:",paraId:267,tocIndex:225},{value:" Optional; the source currency code (defaults to ",paraId:267,tocIndex:225},{value:"options.currencySource",paraId:267,tocIndex:225},{value:").",paraId:267,tocIndex:225},{value:`// Example environment: API options { "currency": { "source": "EUR", "target": "USD", "rates": { "EUR": 1, "USD": 2 } } }
10:convCurr()              // Outputs 20
1000:convCurr()            // Outputs 2000
1000:convCurr('EUR')        // Outputs 1000
1000:convCurr('USD')        // Outputs 2000
1000:convCurr('USD', 'USD') // Outputs 1000
`,paraId:268,tocIndex:226},{value:"The output is the converted currency value.",paraId:269,tocIndex:227},{value:"Formats a date by accepting an output format ",paraId:270,tocIndex:230},{value:"patternOut",paraId:270,tocIndex:230},{value:" and an optional input format ",paraId:270,tocIndex:230},{value:"patternIn",paraId:270,tocIndex:230},{value:" (defaults to ISO 8601).",paraId:270,tocIndex:230},{value:`
Timezone and language adjustments can be made via `,paraId:270,tocIndex:230},{value:"options.timezone",paraId:270,tocIndex:230},{value:" and ",paraId:270,tocIndex:230},{value:"options.lang",paraId:270,tocIndex:230},{value:".",paraId:270,tocIndex:230},{value:`// Example environment: API options { "lang": "en-us", "timezone": "Europe/Paris" }
'20160131':formatD(L)      // Outputs 01/31/2016
'20160131':formatD(LL)     // Outputs January 31, 2016
'20160131':formatD(LLLL)   // Outputs Sunday, January 31, 2016 12:00 AM
'20160131':formatD(dddd)   // Outputs Sunday

// French example:
'2017-05-10T15:57:23.769561+03:00':formatD(LLLL)  // Outputs mercredi 10 mai 2017 14:57
'20160131':formatD(LLLL)   // Outputs dimanche 31 janvier 2016 00:00
1410715640:formatD(LLLL, X) // Outputs dimanche 14 septembre 2014 19:27
`,paraId:271,tocIndex:231},{value:"The output is the date formatted as specified.",paraId:272,tocIndex:232},{value:"Adds a specified amount of time to a date. Supported units include: day, week, month, quarter, year, hour, minute, second, millisecond.",paraId:273,tocIndex:234},{value:`
Parameters:`,paraId:273,tocIndex:234},{value:"amount:",paraId:274,tocIndex:234},{value:" The quantity to add.",paraId:274,tocIndex:234},{value:"unit:",paraId:274,tocIndex:234},{value:" The time unit (case-insensitive).",paraId:274,tocIndex:234},{value:"patternIn:",paraId:274,tocIndex:234},{value:" Optional, the input format (defaults to ISO8601).",paraId:274,tocIndex:234},{value:`// Example environment: API options { "lang": "fr", "timezone": "Europe/Paris" }
'2017-05-10T15:57:23.769561+03:00':addD('3', 'day')    // Outputs "2017-05-13T12:57:23.769Z"
'2017-05-10 15:57:23.769561+03:00':addD('3', 'month')      // Outputs "2017-08-10T12:57:23.769Z"
'20160131':addD('3', 'day')       // Outputs "2016-02-03T00:00:00.000Z"
'20160131':addD('3', 'month')     // Outputs "2016-04-30T00:00:00.000Z"
'31-2016-01':addD('3', 'month', 'DD-YYYY-MM')  // Outputs "2016-04-30T00:00:00.000Z"
`,paraId:275,tocIndex:235},{value:"The output is the new date after the specified time has been added.",paraId:276,tocIndex:236},{value:"Subtracts a specified amount of time from a date. The parameters are the same as in ",paraId:277,tocIndex:238},{value:"addD",paraId:277,tocIndex:238},{value:".",paraId:277,tocIndex:238},{value:`// Example environment: API options { "lang": "fr", "timezone": "Europe/Paris" }
'2017-05-10T15:57:23.769561+03:00':subD('3', 'day')    // Outputs "2017-05-07T12:57:23.769Z"
'2017-05-10 15:57:23.769561+03:00':subD('3', 'month')      // Outputs "2017-02-10T12:57:23.769Z"
'20160131':subD('3', 'day')       // Outputs "2016-01-28T00:00:00.000Z"
'20160131':subD('3', 'month')     // Outputs "2015-10-31T00:00:00.000Z"
'31-2016-01':subD('3', 'month', 'DD-YYYY-MM')  // Outputs "2015-10-31T00:00:00.000Z"
`,paraId:278,tocIndex:239},{value:"The output is the new date after the specified time has been subtracted.",paraId:279,tocIndex:240},{value:"Sets the date to the start of the specified time unit.",paraId:280,tocIndex:242},{value:`
Parameters:`,paraId:280,tocIndex:242},{value:"unit:",paraId:281,tocIndex:242},{value:" The time unit.",paraId:281,tocIndex:242},{value:"patternIn:",paraId:281,tocIndex:242},{value:" Optional, the input format.",paraId:281,tocIndex:242},{value:`// Example environment: API options { "lang": "fr", "timezone": "Europe/Paris" }
'2017-05-10T15:57:23.769561+03:00':startOfD('day')    // Outputs "2017-05-10T00:00:00.000Z"
'2017-05-10 15:57:23.769561+03:00':startOfD('month')      // Outputs "2017-05-01T00:00:00.000Z"
'20160131':startOfD('day')       // Outputs "2016-01-31T00:00:00.000Z"
'20160131':startOfD('month')     // Outputs "2016-01-01T00:00:00.000Z"
'31-2016-01':startOfD('month', 'DD-YYYY-MM')  // Outputs "2016-01-01T00:00:00.000Z"
`,paraId:282,tocIndex:243},{value:"The output is the date set to the start of the specified unit.",paraId:283,tocIndex:244},{value:"Sets the date to the end of the specified time unit.",paraId:284,tocIndex:246},{value:`
Parameters are the same as for `,paraId:284,tocIndex:246},{value:"startOfD",paraId:284,tocIndex:246},{value:".",paraId:284,tocIndex:246},{value:`// Example environment: API options { "lang": "fr", "timezone": "Europe/Paris" }
'2017-05-10T15:57:23.769561+03:00':endOfD('day')    // Outputs "2017-05-10T23:59:59.999Z"
'2017-05-10 15:57:23.769561+03:00':endOfD('month')      // Outputs "2017-05-31T23:59:59.999Z"
'20160131':endOfD('day')       // Outputs "2016-01-31T23:59:59.999Z"
'20160131':endOfD('month')     // Outputs "2016-01-31T23:59:59.999Z"
'31-2016-01':endOfD('month', 'DD-YYYY-MM')  // Outputs "2016-01-31T23:59:59.999Z"
`,paraId:285,tocIndex:247},{value:"The output is the date set to the end of the specified unit.",paraId:286,tocIndex:248},{value:"Calculates the difference between two dates and outputs it in the specified unit. Supported units include:",paraId:287,tocIndex:250},{value:"day(s)",paraId:288,tocIndex:250},{value:" or ",paraId:288,tocIndex:250},{value:"d",paraId:288,tocIndex:250},{value:"week(s)",paraId:288,tocIndex:250},{value:" or ",paraId:288,tocIndex:250},{value:"w",paraId:288,tocIndex:250},{value:"quarter(s)",paraId:288,tocIndex:250},{value:" or ",paraId:288,tocIndex:250},{value:"Q",paraId:288,tocIndex:250},{value:"month(s)",paraId:288,tocIndex:250},{value:" or ",paraId:288,tocIndex:250},{value:"M",paraId:288,tocIndex:250},{value:"year(s)",paraId:288,tocIndex:250},{value:" or ",paraId:288,tocIndex:250},{value:"y",paraId:288,tocIndex:250},{value:"hour(s)",paraId:288,tocIndex:250},{value:" or ",paraId:288,tocIndex:250},{value:"h",paraId:288,tocIndex:250},{value:"minute(s)",paraId:288,tocIndex:250},{value:" or ",paraId:288,tocIndex:250},{value:"m",paraId:288,tocIndex:250},{value:"second(s)",paraId:288,tocIndex:250},{value:" or ",paraId:288,tocIndex:250},{value:"s",paraId:288,tocIndex:250},{value:"millisecond(s)",paraId:288,tocIndex:250},{value:" or ",paraId:288,tocIndex:250},{value:"ms",paraId:288,tocIndex:250},{value:" (default unit)",paraId:288,tocIndex:250},{value:"Parameters:",paraId:289,tocIndex:250},{value:"toDate:",paraId:290,tocIndex:250},{value:" The target date.",paraId:290,tocIndex:250},{value:"unit:",paraId:290,tocIndex:250},{value:" The unit for output.",paraId:290,tocIndex:250},{value:"patternFromDate:",paraId:290,tocIndex:250},{value:" Optional, the format of the starting date.",paraId:290,tocIndex:250},{value:"patternToDate:",paraId:290,tocIndex:250},{value:" Optional, the format of the target date.",paraId:290,tocIndex:250},{value:`'20101001':diffD('20101201')              // Outputs 5270400000
'20101001':diffD('20101201', 'second')      // Outputs 5270400
'20101001':diffD('20101201', 's')           // Outputs 5270400
'20101001':diffD('20101201', 'm')           // Outputs 87840
'20101001':diffD('20101201', 'h')           // Outputs 1464
'20101001':diffD('20101201', 'weeks')       // Outputs 8
'20101001':diffD('20101201', 'days')        // Outputs 61
'2010+10+01':diffD('2010=12=01', 'ms', 'YYYY+MM+DD', 'YYYY=MM=DD')  // Outputs 5270400000
`,paraId:291,tocIndex:251},{value:"The output is the time difference between the two dates, converted into the specified unit.",paraId:292,tocIndex:252},{value:"Converts a date from one format to another (not recommended for use).",paraId:293,tocIndex:254},{value:`
Parameters:`,paraId:293,tocIndex:254},{value:"patternIn:",paraId:294,tocIndex:254},{value:" The input date format.",paraId:294,tocIndex:254},{value:"patternOut:",paraId:294,tocIndex:254},{value:" The output date format.",paraId:294,tocIndex:254},{value:`// Example environment: API options { "lang": "en", "timezone": "Europe/Paris" }
'20160131':convDate('YYYYMMDD', 'L')      // Outputs "01/31/2016"
'20160131':convDate('YYYYMMDD', 'LL')     // Outputs "January 31, 2016"
'20160131':convDate('YYYYMMDD', 'LLLL')   // Outputs "Sunday, January 31, 2016 12:00 AM"
'20160131':convDate('YYYYMMDD', 'dddd')   // Outputs "Sunday"
1410715640:convDate('X', 'LLLL')          // Outputs "Sunday, September 14, 2014 7:27 PM"
// French example:
'20160131':convDate('YYYYMMDD', 'LLLL')   // Outputs "dimanche 31 janvier 2016 00:00"
'20160131':convDate('YYYYMMDD', 'dddd')   // Outputs "dimanche"
`,paraId:295,tocIndex:255},{value:"The output is the date converted to the specified format.",paraId:296,tocIndex:256},{value:"Common date format symbols (refer to the DayJS documentation):",paraId:297,tocIndex:257},{value:"X",paraId:298,tocIndex:257},{value:": Unix timestamp (in seconds), e.g., 1360013296",paraId:298,tocIndex:257},{value:"x",paraId:298,tocIndex:257},{value:": Unix timestamp in milliseconds, e.g., 1360013296123",paraId:298,tocIndex:257},{value:"YY",paraId:298,tocIndex:257},{value:": Two-digit year, e.g., 18",paraId:298,tocIndex:257},{value:"YYYY",paraId:298,tocIndex:257},{value:": Four-digit year, e.g., 2018",paraId:298,tocIndex:257},{value:"M",paraId:298,tocIndex:257},{value:", ",paraId:298,tocIndex:257},{value:"MM",paraId:298,tocIndex:257},{value:", ",paraId:298,tocIndex:257},{value:"MMM",paraId:298,tocIndex:257},{value:", ",paraId:298,tocIndex:257},{value:"MMMM",paraId:298,tocIndex:257},{value:": Month (number, two-digit, abbreviated, full name)",paraId:298,tocIndex:257},{value:"D",paraId:298,tocIndex:257},{value:", ",paraId:298,tocIndex:257},{value:"DD",paraId:298,tocIndex:257},{value:": Day (number, two-digit)",paraId:298,tocIndex:257},{value:"d",paraId:298,tocIndex:257},{value:", ",paraId:298,tocIndex:257},{value:"dd",paraId:298,tocIndex:257},{value:", ",paraId:298,tocIndex:257},{value:"ddd",paraId:298,tocIndex:257},{value:", ",paraId:298,tocIndex:257},{value:"dddd",paraId:298,tocIndex:257},{value:": Day of the week (number, minimal, abbreviated, full name)",paraId:298,tocIndex:257},{value:"H",paraId:298,tocIndex:257},{value:", ",paraId:298,tocIndex:257},{value:"HH",paraId:298,tocIndex:257},{value:", ",paraId:298,tocIndex:257},{value:"h",paraId:298,tocIndex:257},{value:", ",paraId:298,tocIndex:257},{value:"hh",paraId:298,tocIndex:257},{value:": Hour (24-hour or 12-hour clock)",paraId:298,tocIndex:257},{value:"m",paraId:298,tocIndex:257},{value:", ",paraId:298,tocIndex:257},{value:"mm",paraId:298,tocIndex:257},{value:": Minute",paraId:298,tocIndex:257},{value:"s",paraId:298,tocIndex:257},{value:", ",paraId:298,tocIndex:257},{value:"ss",paraId:298,tocIndex:257},{value:": Second",paraId:298,tocIndex:257},{value:"SSS",paraId:298,tocIndex:257},{value:": Millisecond (3 digits)",paraId:298,tocIndex:257},{value:"Z",paraId:298,tocIndex:257},{value:", ",paraId:298,tocIndex:257},{value:"ZZ",paraId:298,tocIndex:257},{value:": UTC offset, e.g., +05:00 or +0500",paraId:298,tocIndex:257},{value:"A",paraId:298,tocIndex:257},{value:", ",paraId:298,tocIndex:257},{value:"a",paraId:298,tocIndex:257},{value:": AM/PM",paraId:298,tocIndex:257},{value:"Q",paraId:298,tocIndex:257},{value:": Quarter (1-4)",paraId:298,tocIndex:257},{value:"Do",paraId:298,tocIndex:257},{value:": Day of month with ordinal, e.g., 1st, 2nd, \u2026",paraId:298,tocIndex:257},{value:"For other formats, refer to the full documentation.",paraId:298,tocIndex:257},{value:`
Additionally, there are localized formats based on language such as `,paraId:298,tocIndex:257},{value:"LT",paraId:298,tocIndex:257},{value:", ",paraId:298,tocIndex:257},{value:"LTS",paraId:298,tocIndex:257},{value:", ",paraId:298,tocIndex:257},{value:"L",paraId:298,tocIndex:257},{value:", ",paraId:298,tocIndex:257},{value:"LL",paraId:298,tocIndex:257},{value:", ",paraId:298,tocIndex:257},{value:"LLL",paraId:298,tocIndex:257},{value:", ",paraId:298,tocIndex:257},{value:"LLLL",paraId:298,tocIndex:257},{value:", etc.",paraId:298,tocIndex:257},{value:"Formats a duration or interval. The supported output formats include:",paraId:299,tocIndex:260},{value:"human+",paraId:300,tocIndex:260},{value:" or ",paraId:300,tocIndex:260},{value:"human",paraId:300,tocIndex:260},{value:" (suitable for human-friendly display)",paraId:300,tocIndex:260},{value:"Units such as ",paraId:300,tocIndex:260},{value:"millisecond(s)",paraId:300,tocIndex:260},{value:", ",paraId:300,tocIndex:260},{value:"second(s)",paraId:300,tocIndex:260},{value:", ",paraId:300,tocIndex:260},{value:"minute(s)",paraId:300,tocIndex:260},{value:", ",paraId:300,tocIndex:260},{value:"hour(s)",paraId:300,tocIndex:260},{value:", ",paraId:300,tocIndex:260},{value:"year(s)",paraId:300,tocIndex:260},{value:", ",paraId:300,tocIndex:260},{value:"month(s)",paraId:300,tocIndex:260},{value:", ",paraId:300,tocIndex:260},{value:"week(s)",paraId:300,tocIndex:260},{value:", ",paraId:300,tocIndex:260},{value:"day(s)",paraId:300,tocIndex:260},{value:" (or their abbreviations).",paraId:300,tocIndex:260},{value:"Parameters:",paraId:301,tocIndex:260},{value:"patternOut:",paraId:302,tocIndex:260},{value:" The output format (for example, ",paraId:302,tocIndex:260},{value:"'second'",paraId:302,tocIndex:260},{value:" or ",paraId:302,tocIndex:260},{value:"'human+'",paraId:302,tocIndex:260},{value:").",paraId:302,tocIndex:260},{value:"patternIn:",paraId:302,tocIndex:260},{value:" Optional, the input unit (for example, ",paraId:302,tocIndex:260},{value:"'milliseconds'",paraId:302,tocIndex:260},{value:" or ",paraId:302,tocIndex:260},{value:"'s'",paraId:302,tocIndex:260},{value:").",paraId:302,tocIndex:260},{value:`// Example environment: API options { "lang": "en", "timezone": "Europe/Paris" }
2000:formatI('second')       // Outputs 2
2000:formatI('seconds')      // Outputs 2
2000:formatI('s')            // Outputs 2
3600000:formatI('minute')    // Outputs 60
3600000:formatI('hour')      // Outputs 1
2419200000:formatI('days')   // Outputs 28

// French example:
2000:formatI('human')        // Outputs "quelques secondes"
2000:formatI('human+')       // Outputs "dans quelques secondes"
-2000:formatI('human+')      // Outputs "il y a quelques secondes"

// English example:
2000:formatI('human')        // Outputs "a few seconds"
2000:formatI('human+')       // Outputs "in a few seconds"
-2000:formatI('human+')      // Outputs "a few seconds ago"

// Unit conversion example:
60:formatI('ms', 'minute')   // Outputs 3600000
4:formatI('ms', 'weeks')      // Outputs 2419200000
'P1M':formatI('ms')          // Outputs 2628000000
'P1Y2M3DT4H5M6S':formatI('hour')  // Outputs 10296.085
`,paraId:303,tocIndex:261},{value:"The output is the duration or interval displayed in the specified unit or format.",paraId:304,tocIndex:262},{value:"Joins an array of strings or numbers into a single string.",paraId:305,tocIndex:265},{value:`
Parameters:`,paraId:305,tocIndex:265},{value:"separator:",paraId:306,tocIndex:265},{value:" The delimiter (default is a comma ",paraId:306,tocIndex:265},{value:",",paraId:306,tocIndex:265},{value:").",paraId:306,tocIndex:265},{value:"index:",paraId:306,tocIndex:265},{value:" Optional; the starting index from which to join.",paraId:306,tocIndex:265},{value:"count:",paraId:306,tocIndex:265},{value:" Optional; the number of items to join starting from ",paraId:306,tocIndex:265},{value:"index",paraId:306,tocIndex:265},{value:" (can be negative to count from the end).",paraId:306,tocIndex:265},{value:`['homer','bart','lisa']:arrayJoin()              // Outputs "homer, bart, lisa"
['homer','bart','lisa']:arrayJoin(' | ')          // Outputs "homer | bart | lisa"
['homer','bart','lisa']:arrayJoin('')              // Outputs "homerbartlisa"
[10,50]:arrayJoin()                               // Outputs "10, 50"
[]:arrayJoin()                                    // Outputs ""
null:arrayJoin()                                  // Outputs null
{}:arrayJoin()                                    // Outputs {}
20:arrayJoin()                                    // Outputs 20
undefined:arrayJoin()                             // Outputs undefined
['homer','bart','lisa']:arrayJoin('', 1)          // Outputs "bartlisa"
['homer','bart','lisa']:arrayJoin('', 1, 1)       // Outputs "bart"
['homer','bart','lisa']:arrayJoin('', 1, 2)       // Outputs "bartlisa"
['homer','bart','lisa']:arrayJoin('', 0, -1)      // Outputs "homerbart"
`,paraId:307,tocIndex:266},{value:"The output is a string created by joining the array elements according to the specified parameters.",paraId:308,tocIndex:267},{value:"Transforms an array of objects into a string. It does not process nested objects or arrays.",paraId:309,tocIndex:269},{value:`
Parameters:`,paraId:309,tocIndex:269},{value:"objSeparator:",paraId:310,tocIndex:269},{value:" The separator between objects (default is ",paraId:310,tocIndex:269},{value:", ",paraId:310,tocIndex:269},{value:").",paraId:310,tocIndex:269},{value:"attSeparator:",paraId:310,tocIndex:269},{value:" The separator between object attributes (default is ",paraId:310,tocIndex:269},{value:":",paraId:310,tocIndex:269},{value:").",paraId:310,tocIndex:269},{value:"attributes:",paraId:310,tocIndex:269},{value:" Optional; a list of object attributes to output.",paraId:310,tocIndex:269},{value:`[{'id':2,'name':'homer'},{'id':3,'name':'bart'}]:arrayMap()
// Outputs "2:homer, 3:bart"

[{'id':2,'name':'homer'},{'id':3,'name':'bart'}]:arrayMap(' - ')
// Outputs "2:homer - 3:homer"

[{'id':2,'name':'homer'},{'id':3,'name':'bart'}]:arrayMap(' ; ', '|')
// Outputs "2|homer ; 3|bart"

[{'id':2,'name':'homer'},{'id':3,'name':'bart'}]:arrayMap(' ; ', '|', 'id')
// Outputs "2 ; 3"

[{'id':2,'name':'homer','obj':{'id':20},'arr':[12,23]}]:arrayMap()
// Outputs "2:homer"

['homer','bart','lisa']:arrayMap()    // Outputs "homer, bart, lisa"
[10,50]:arrayMap()                    // Outputs "10, 50"
[]:arrayMap()                         // Outputs ""
null:arrayMap()                       // Outputs null
{}:arrayMap()                         // Outputs {}
20:arrayMap()                         // Outputs 20
undefined:arrayMap()                  // Outputs undefined
`,paraId:311,tocIndex:270},{value:"The output is a string generated by mapping and joining the array elements, ignoring nested object content.",paraId:312,tocIndex:271},{value:"Counts the row number in an array and outputs the current row number.",paraId:313,tocIndex:273},{value:`
For example:`,paraId:313,tocIndex:273},{value:`{d[i].id:count()}
`,paraId:314,tocIndex:273},{value:"Regardless of the value of ",paraId:315,tocIndex:273},{value:"id",paraId:315,tocIndex:273},{value:", it outputs the current row count.",paraId:315,tocIndex:273},{value:`
Starting from v4.0.0, this formatter has been replaced internally by `,paraId:315,tocIndex:273},{value:":cumCount",paraId:315,tocIndex:273},{value:".",paraId:315,tocIndex:273},{value:"Parameter:",paraId:316,tocIndex:273},{value:"start:",paraId:317,tocIndex:273},{value:" Optional; the starting value for the count.",paraId:317,tocIndex:273},{value:"In use, the output will display the row number according to the sequence of the array elements.",paraId:318,tocIndex:274},{value:"Below is the translated text back into English with the same structure using secondary (##) and tertiary (###) headings:",paraId:319,tocIndex:274},{value:"Conditional statements allow you to dynamically control the display or hiding of content in the document based on data values. Template provides three main ways to write conditions:",paraId:320,tocIndex:275},{value:"Inline conditions",paraId:321,tocIndex:275},{value:": Directly output text (or replace it with other text).",paraId:321,tocIndex:275},{value:"Conditional blocks",paraId:321,tocIndex:275},{value:": Display or hide a section of the document, suitable for multiple Template tags, paragraphs, tables, etc.",paraId:321,tocIndex:275},{value:"All conditions begin with a logical evaluation formatter (e.g., ifEQ, ifGT, etc.), followed by action formatters (such as show, elseShow, drop, keep, etc.).",paraId:322,tocIndex:275},{value:"The logical operators and action formatters supported in conditional statements include:",paraId:323,tocIndex:276},{value:"Logical Operators",paraId:324,tocIndex:276},{value:"ifEQ(value)",paraId:325,tocIndex:276},{value:": Checks if the data is equal to the specified value.",paraId:325,tocIndex:276},{value:"ifNE(value)",paraId:325,tocIndex:276},{value:": Checks if the data is not equal to the specified value.",paraId:325,tocIndex:276},{value:"ifGT(value)",paraId:325,tocIndex:276},{value:": Checks if the data is greater than the specified value.",paraId:325,tocIndex:276},{value:"ifGTE(value)",paraId:325,tocIndex:276},{value:": Checks if the data is greater than or equal to the specified value.",paraId:325,tocIndex:276},{value:"ifLT(value)",paraId:325,tocIndex:276},{value:": Checks if the data is less than the specified value.",paraId:325,tocIndex:276},{value:"ifLTE(value)",paraId:325,tocIndex:276},{value:": Checks if the data is less than or equal to the specified value.",paraId:325,tocIndex:276},{value:"ifIN(value)",paraId:325,tocIndex:276},{value:": Checks if the data is contained in an array or string.",paraId:325,tocIndex:276},{value:"ifNIN(value)",paraId:325,tocIndex:276},{value:": Checks if the data is not contained in an array or string.",paraId:325,tocIndex:276},{value:"ifEM()",paraId:325,tocIndex:276},{value:": Checks if the data is empty (e.g., null, undefined, an empty string, an empty array, or an empty object).",paraId:325,tocIndex:276},{value:"ifNEM()",paraId:325,tocIndex:276},{value:": Checks if the data is non-empty.",paraId:325,tocIndex:276},{value:"ifTE(type)",paraId:325,tocIndex:276},{value:': Checks if the data type is equal to the specified type (for example, "string", "number", "boolean", etc.).',paraId:325,tocIndex:276},{value:"and(value)",paraId:325,tocIndex:276},{value:': Logical "and", used to connect multiple conditions.',paraId:325,tocIndex:276},{value:"or(value)",paraId:325,tocIndex:276},{value:': Logical "or", used to connect multiple conditions.',paraId:325,tocIndex:276},{value:"Action Formatters",paraId:326,tocIndex:276},{value:":show(text) / :elseShow(text)",paraId:327,tocIndex:276},{value:": Used in inline conditions to directly output the specified text.",paraId:327,tocIndex:276},{value:":hideBegin / :hideEnd",paraId:327,tocIndex:276},{value:" and ",paraId:327,tocIndex:276},{value:":showBegin / :showEnd",paraId:327,tocIndex:276},{value:": Used in conditional blocks to hide or show sections of the document.",paraId:327,tocIndex:276},{value:"The following sections introduce the detailed syntax, examples, and results for each usage.",paraId:328,tocIndex:276},{value:`{data:condition:show(text)}
{data:condition:show(text):elseShow(alternative text)}
`,paraId:329,tocIndex:279},{value:"Assume the data is:",paraId:330,tocIndex:280},{value:`{
  "val2": 2,
  "val5": 5
}
`,paraId:331,tocIndex:280},{value:"The template is as follows:",paraId:332,tocIndex:280},{value:`val2 = {d.val2:ifGT(3):show('high')}
val2 = {d.val2:ifGT(3):show('high'):elseShow('low')}
val5 = {d.val5:ifGT(3):show('high')}
`,paraId:333,tocIndex:280},{value:`val2 = 2
val2 = low
val5 = high
`,paraId:334,tocIndex:281},{value:"Use consecutive condition formatters to build a structure similar to a switch-case:",paraId:335,tocIndex:283},{value:`{data:ifEQ(value1):show(result1):ifEQ(value2):show(result2):elseShow(default result)}
`,paraId:336,tocIndex:283},{value:"Or achieve the same with the or operator:",paraId:337,tocIndex:283},{value:`{data:ifEQ(value1):show(result1):or(data):ifEQ(value2):show(result2):elseShow(default result)}
`,paraId:338,tocIndex:283},{value:"Data:",paraId:339,tocIndex:284},{value:`{
  "val1": 1,
  "val2": 2,
  "val3": 3
}
`,paraId:340,tocIndex:284},{value:"Template:",paraId:341,tocIndex:284},{value:`val1 = {d.val1:ifEQ(1):show(A):ifEQ(2):show(B):elseShow(C)}
val2 = {d.val2:ifEQ(1):show(A):ifEQ(2):show(B):elseShow(C)}
val3 = {d.val3:ifEQ(1):show(A):ifEQ(2):show(B):elseShow(C)}
`,paraId:342,tocIndex:284},{value:`val1 = A
val2 = B
val3 = C
`,paraId:343,tocIndex:285},{value:"Use the logical operators and/or to test multiple variables:",paraId:344,tocIndex:287},{value:`{data1:ifEQ(condition1):and(.data2):ifEQ(condition2):show(result):elseShow(alternative result)}
{data1:ifEQ(condition1):or(.data2):ifEQ(condition2):show(result):elseShow(alternative result)}
`,paraId:345,tocIndex:287},{value:"Data:",paraId:346,tocIndex:288},{value:`{
  "val2": 2,
  "val5": 5
}
`,paraId:347,tocIndex:288},{value:"Template:",paraId:348,tocIndex:288},{value:`and = {d.val2:ifEQ(1):and(.val5):ifEQ(5):show(OK):elseShow(KO)}
or = {d.val2:ifEQ(1):or(.val5):ifEQ(5):show(OK):elseShow(KO)}
`,paraId:349,tocIndex:288},{value:`and = KO
or = OK
`,paraId:350,tocIndex:289},{value:"In the following sections, the described formatters use the inline condition syntax with the following format:",paraId:351,tocIndex:290},{value:`{data:formatter(parameter):show(text):elseShow(alternative text)}
`,paraId:352,tocIndex:290},{value:`{data:ifEQ(value):and(new data or condition):ifGT(another value):show(text):elseShow(alternative text)}
`,paraId:353,tocIndex:292},{value:`{d.car:ifEQ('delorean'):and(.speed):ifGT(80):show('TravelInTime'):elseShow('StayHere')}
`,paraId:354,tocIndex:293},{value:"If ",paraId:355,tocIndex:294},{value:"d.car",paraId:355,tocIndex:294},{value:" equals ",paraId:355,tocIndex:294},{value:"'delorean'",paraId:355,tocIndex:294},{value:" and ",paraId:355,tocIndex:294},{value:"d.speed",paraId:355,tocIndex:294},{value:" is greater than 80, the output is ",paraId:355,tocIndex:294},{value:"TravelInTime",paraId:355,tocIndex:294},{value:"; otherwise, the output is ",paraId:355,tocIndex:294},{value:"StayHere",paraId:355,tocIndex:294},{value:".",paraId:355,tocIndex:294},{value:`{data:ifEQ(value):or(new data or condition):ifGT(another value):show(text):elseShow(alternative text)}
`,paraId:356,tocIndex:296},{value:`{d.car:ifEQ('delorean'):or(.speed):ifGT(80):show('TravelInTime'):elseShow('StayHere')}
`,paraId:357,tocIndex:297},{value:"If ",paraId:358,tocIndex:298},{value:"d.car",paraId:358,tocIndex:298},{value:" equals ",paraId:358,tocIndex:298},{value:"'delorean'",paraId:358,tocIndex:298},{value:" or ",paraId:358,tocIndex:298},{value:"d.speed",paraId:358,tocIndex:298},{value:" is greater than 80, the output is ",paraId:358,tocIndex:298},{value:"TravelInTime",paraId:358,tocIndex:298},{value:"; otherwise, the output is ",paraId:358,tocIndex:298},{value:"StayHere",paraId:358,tocIndex:298},{value:".",paraId:358,tocIndex:298},{value:`{data:ifEM():show(text):elseShow(alternative text)}
`,paraId:359,tocIndex:300},{value:`null:ifEM():show('Result true'):elseShow('Result false')
[]:ifEM():show('Result true'):elseShow('Result false')
`,paraId:360,tocIndex:301},{value:"For ",paraId:361,tocIndex:302},{value:"null",paraId:361,tocIndex:302},{value:" or an empty array, the output is ",paraId:361,tocIndex:302},{value:"Result true",paraId:361,tocIndex:302},{value:"; otherwise, it is ",paraId:361,tocIndex:302},{value:"Result false",paraId:361,tocIndex:302},{value:".",paraId:361,tocIndex:302},{value:`{data:ifNEM():show(text):elseShow(alternative text)}
`,paraId:362,tocIndex:304},{value:`0:ifNEM():show('Result true'):elseShow('Result false')
'homer':ifNEM():show('Result true'):elseShow('Result false')
`,paraId:363,tocIndex:305},{value:"For non-empty data (such as the number 0 or the string 'homer'), the output is ",paraId:364,tocIndex:306},{value:"Result true",paraId:364,tocIndex:306},{value:"; for empty data, the output is ",paraId:364,tocIndex:306},{value:"Result false",paraId:364,tocIndex:306},{value:".",paraId:364,tocIndex:306},{value:`{data:ifEQ(value):show(text):elseShow(alternative text)}
`,paraId:365,tocIndex:308},{value:`100:ifEQ(100):show('Result true'):elseShow('Result false')
'homer':ifEQ('homer'):show('Result true'):elseShow('Result false')
`,paraId:366,tocIndex:309},{value:"If the data equals the specified value, the output is ",paraId:367,tocIndex:310},{value:"Result true",paraId:367,tocIndex:310},{value:"; otherwise, it is ",paraId:367,tocIndex:310},{value:"Result false",paraId:367,tocIndex:310},{value:".",paraId:367,tocIndex:310},{value:`{data:ifNE(value):show(text):elseShow(alternative text)}
`,paraId:368,tocIndex:312},{value:`100:ifNE(100):show('Result true'):elseShow('Result false')
100:ifNE(101):show('Result true'):elseShow('Result false')
`,paraId:369,tocIndex:313},{value:"The first example outputs ",paraId:370,tocIndex:314},{value:"Result false",paraId:370,tocIndex:314},{value:", while the second example outputs ",paraId:370,tocIndex:314},{value:"Result true",paraId:370,tocIndex:314},{value:".",paraId:370,tocIndex:314},{value:`{data:ifGT(value):show(text):elseShow(alternative text)}
`,paraId:371,tocIndex:316},{value:`1234:ifGT(1):show('Result true'):elseShow('Result false')
-23:ifGT(19):show('Result true'):elseShow('Result false')
`,paraId:372,tocIndex:317},{value:"The first example outputs ",paraId:373,tocIndex:318},{value:"Result true",paraId:373,tocIndex:318},{value:", and the second outputs ",paraId:373,tocIndex:318},{value:"Result false",paraId:373,tocIndex:318},{value:".",paraId:373,tocIndex:318},{value:`{data:ifGTE(value):show(text):elseShow(alternative text)}
`,paraId:374,tocIndex:320},{value:`50:ifGTE(-29):show('Result true'):elseShow('Result false')
1:ifGTE(768):show('Result true'):elseShow('Result false')
`,paraId:375,tocIndex:321},{value:"The first example outputs ",paraId:376,tocIndex:322},{value:"Result true",paraId:376,tocIndex:322},{value:", while the second outputs ",paraId:376,tocIndex:322},{value:"Result false",paraId:376,tocIndex:322},{value:".",paraId:376,tocIndex:322},{value:`{data:ifLT(value):show(text):elseShow(alternative text)}
`,paraId:377,tocIndex:324},{value:`-23:ifLT(19):show('Result true'):elseShow('Result false')
1290:ifLT(768):show('Result true'):elseShow('Result false')
`,paraId:378,tocIndex:325},{value:"The first example outputs ",paraId:379,tocIndex:326},{value:"Result true",paraId:379,tocIndex:326},{value:", and the second outputs ",paraId:379,tocIndex:326},{value:"Result false",paraId:379,tocIndex:326},{value:".",paraId:379,tocIndex:326},{value:`{data:ifLTE(value):show(text):elseShow(alternative text)}
`,paraId:380,tocIndex:328},{value:`5:ifLTE(5):show('Result true'):elseShow('Result false')
1290:ifLTE(768):show('Result true'):elseShow('Result false')
`,paraId:381,tocIndex:329},{value:"The first example outputs ",paraId:382,tocIndex:330},{value:"Result true",paraId:382,tocIndex:330},{value:", and the second outputs ",paraId:382,tocIndex:330},{value:"Result false",paraId:382,tocIndex:330},{value:".",paraId:382,tocIndex:330},{value:`{data:ifIN(value):show(text):elseShow(alternative text)}
`,paraId:383,tocIndex:332},{value:`'car is broken':ifIN('is'):show('Result true'):elseShow('Result false')
[1,2,'toto']:ifIN(2):show('Result true'):elseShow('Result false')
`,paraId:384,tocIndex:333},{value:"Both examples output ",paraId:385,tocIndex:334},{value:"Result true",paraId:385,tocIndex:334},{value:" (because the string contains 'is', and the array contains 2).",paraId:385,tocIndex:334},{value:`{data:ifNIN(value):show(text):elseShow(alternative text)}
`,paraId:386,tocIndex:336},{value:`'car is broken':ifNIN('is'):show('Result true'):elseShow('Result false')
[1,2,'toto']:ifNIN(2):show('Result true'):elseShow('Result false')
`,paraId:387,tocIndex:337},{value:"The first example outputs ",paraId:388,tocIndex:338},{value:"Result false",paraId:388,tocIndex:338},{value:" (because the string contains 'is'), and the second example outputs ",paraId:388,tocIndex:338},{value:"Result false",paraId:388,tocIndex:338},{value:" (because the array contains 2).",paraId:388,tocIndex:338},{value:`{data:ifTE('type'):show(text):elseShow(alternative text)}
`,paraId:389,tocIndex:340},{value:`'homer':ifTE('string'):show('Result true'):elseShow('Result false')
10.5:ifTE('number'):show('Result true'):elseShow('Result false')
`,paraId:390,tocIndex:341},{value:"The first example outputs ",paraId:391,tocIndex:342},{value:"Result true",paraId:391,tocIndex:342},{value:" (since 'homer' is a string), and the second outputs ",paraId:391,tocIndex:342},{value:"Result true",paraId:391,tocIndex:342},{value:" (since 10.5 is a number).",paraId:391,tocIndex:342},{value:"Conditional blocks are used to display or hide a section of the document, typically to enclose multiple tags or an entire block of text.",paraId:392,tocIndex:343},{value:`{data:ifEQ(condition):showBegin}
Document block content
{data:showEnd}
`,paraId:393,tocIndex:345},{value:"Data:",paraId:394,tocIndex:346},{value:`{
  "toBuy": true
}
`,paraId:395,tocIndex:346},{value:"Template:",paraId:396,tocIndex:346},{value:`Banana{d.toBuy:ifEQ(true):showBegin}
Apple
Pineapple
{d.toBuy:showEnd}Grapes
`,paraId:397,tocIndex:346},{value:"When the condition is met, the content in between is displayed:",paraId:398,tocIndex:347},{value:`Banana
Apple
Pineapple
Grapes
`,paraId:399,tocIndex:347},{value:`{data:ifEQ(condition):hideBegin}
Document block content
{data:hideEnd}
`,paraId:400,tocIndex:349},{value:"Data:",paraId:401,tocIndex:350},{value:`{
  "toBuy": true
}
`,paraId:402,tocIndex:350},{value:"Template:",paraId:403,tocIndex:350},{value:`Banana{d.toBuy:ifEQ(true):hideBegin}
Apple
Pineapple
{d.toBuy:hideEnd}Grapes
`,paraId:404,tocIndex:350},{value:"When the condition is met, the content in between is hidden, resulting in:",paraId:405,tocIndex:351},{value:`Banana
Grapes
`,paraId:406,tocIndex:351},{value:"Simply insert it in your Office software.",paraId:407,tocIndex:356},{value:"In Microsoft Word:",paraId:408,tocIndex:357},{value:'Use the "Insert \u2192 Page Number" function',paraId:409,tocIndex:357},{value:"In LibreOffice:",paraId:410,tocIndex:357},{value:'Use the "Insert \u2192 Field \u2192 Page Number" function',paraId:411,tocIndex:357},{value:"In the generated report, the page numbers will update automatically.",paraId:412,tocIndex:358},{value:"Simply insert it in your Office software.",paraId:413,tocIndex:360},{value:"In Microsoft Word:",paraId:414,tocIndex:361},{value:'Use the "Insert \u2192 Index and Table \u2192 Table of Contents" function',paraId:415,tocIndex:361},{value:"In LibreOffice:",paraId:416,tocIndex:361},{value:'Use the "Insert \u2192 Table of Contents and Index \u2192 Table, Index or Bibliography" function',paraId:417,tocIndex:361},{value:"The report's table of contents will update automatically based on the document content.",paraId:418,tocIndex:362},{value:"Simply insert it in your Office software.",paraId:419,tocIndex:364},{value:"In Microsoft Word:",paraId:420,tocIndex:365},{value:'Right-click the table header \u2192 Table Properties \u2192 Check "Repeat as header row at the top of each page"',paraId:421,tocIndex:365},{value:"In LibreOffice:",paraId:422,tocIndex:365},{value:'Right-click the table header \u2192 Table Properties \u2192 Text Flow tab \u2192 Check "Repeat heading"',paraId:423,tocIndex:365},{value:"When a table spans multiple pages, the header will automatically repeat at the top of each page.",paraId:424,tocIndex:366},{value:"Use the ",paraId:425,tocIndex:369},{value:"{t(text)}",paraId:425,tocIndex:369},{value:" tag for internationalizing static text:",paraId:425,tocIndex:369},{value:`{t(meeting)}
`,paraId:426,tocIndex:369},{value:"In the template:",paraId:427,tocIndex:370},{value:`{t(meeting)} {t(apples)}
`,paraId:428,tocIndex:370},{value:'JSON Data or an external localization dictionary (e.g., for "fr-fr") provides corresponding translations (for example, "meeting" \u2192 "rendez-vous" and "apples" \u2192 "Pommes").',paraId:429,tocIndex:370},{value:"When generating the report, the text will be replaced with the corresponding translation based on the target language.",paraId:430,tocIndex:371},{value:"For data content, use the ",paraId:431,tocIndex:373},{value:":t",paraId:431,tocIndex:373},{value:" formatter, for example:",paraId:431,tocIndex:373},{value:`{d.id:ifEQ(2):show({t(monday)}):elseShow({t(tuesday)})}
`,paraId:432,tocIndex:373},{value:"In the template:",paraId:433,tocIndex:374},{value:`{d.id:ifEQ(2):show({t(monday)}):elseShow({t(tuesday)})}
`,paraId:434,tocIndex:374},{value:"JSON Data and the localization dictionary provide the appropriate translations.",paraId:435,tocIndex:374},{value:'Based on the condition, the output will be either "lundi" or "mardi" (using the target language as an example).',paraId:436,tocIndex:375},{value:`{data:convEnum(enumName)}
`,paraId:437,tocIndex:378},{value:"For example:",paraId:438,tocIndex:378},{value:`0:convEnum('ORDER_STATUS')
`,paraId:439,tocIndex:378},{value:"In an API options example, the following is provided:",paraId:440,tocIndex:379},{value:`{
  "enum": {
    "ORDER_STATUS": ["pending", "sent", "delivered"]
  }
}
`,paraId:441,tocIndex:379},{value:"In the template:",paraId:442,tocIndex:379},{value:`0:convEnum('ORDER_STATUS')
`,paraId:443,tocIndex:379},{value:'Outputs "pending"; if the index exceeds the enumeration range, the original value is output.',paraId:444,tocIndex:380},{value:"Currently supports XLSX and DOCX file types",paraId:445},{value:'You can insert "dynamic images" in document templates, which means placeholder images in the template will be automatically replaced with actual images during rendering based on data. This process is very simple and only requires:',paraId:446},{value:"Insert a temporary image as a placeholder",paraId:447},{value:'Edit the "Alt Text" of that image to set the field label',paraId:448},{value:"Render the document, and the system will automatically replace it with the actual image",paraId:449},{value:"Below we'll explain the operation methods for DOCX and XLSX through specific examples.",paraId:450},{value:"Open your DOCX template and insert a temporary image (can be any placeholder image, such as a ",paraId:451,tocIndex:383},{value:"solid blue image",paraId:451,tocIndex:383},{value:")",paraId:451,tocIndex:383},{value:"Image Format Instructions",paraId:452},{value:"Currently, placeholder images only support PNG format. We recommend using our provided example ",paraId:453},{value:"solid blue image",paraId:453},{value:"Target rendered images only support PNG, JPG, JPEG formats. Other image types may fail to render.",paraId:453},{value:"Image Size Instructions",paraId:454},{value:"Whether for DOCX or XLSX, the final rendered image size will follow the dimensions of the temporary image in the template. That is, the actual replacement image will automatically scale to match the size of the placeholder image you inserted. If you want the rendered image to be 150\xD7150, please use a temporary image in the template and adjust it to that size.",paraId:455},{value:'Right-click on this image, edit its "Alt Text", and fill in the image field label you want to insert, for example ',paraId:456},{value:"{d.imageUrl}",paraId:456},{value:":",paraId:456},{value:"Use the following example data for rendering:",paraId:457},{value:`{
  "name": "Apple",
  "imageUrl": "https://images.pexels.com/photos/206959/pexels-photo-206959.jpeg"
}
`,paraId:458},{value:"In the rendered result, the temporary image will be replaced with the actual image:",paraId:459},{value:"If you want to insert a group of images in the template, such as a product list, you can also implement this through loops. The specific steps are as follows:",paraId:460,tocIndex:384},{value:"Assume your data is as follows:",paraId:461,tocIndex:384},{value:`{
  "products": [
    {
      "name": "Apple",
      "imageUrl": "https://images.pexels.com/photos/206959/pexels-photo-206959.jpeg"
    },
    {
      "name": "Banana",
      "imageUrl": "https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg"
    }
  ]
}
`,paraId:462,tocIndex:384},{value:"Set up a loop area in the DOCX template, and insert temporary images in each loop item with Alt Text set to ",paraId:463,tocIndex:384},{value:"{d.products[i].imageUrl}",paraId:463,tocIndex:384},{value:", as shown below:",paraId:463,tocIndex:384},{value:"After rendering, all temporary images will be replaced with their respective data images:",paraId:464,tocIndex:384},{value:"The operation method in Excel templates (XLSX) is basically the same, just note the following points:",paraId:465,tocIndex:385},{value:'After inserting an image, please ensure that you select "image within cell" rather than having the image float above the cell.',paraId:466,tocIndex:385},{value:'After selecting the cell, click to view "Alt Text" to fill in the field label, such as ',paraId:467,tocIndex:385},{value:"{d.imageUrl}",paraId:467,tocIndex:385},{value:".",paraId:467,tocIndex:385},{value:"Currently supports XLSX and DOCX file types",paraId:468},{value:"Barcode generation works the same way as ",paraId:469,tocIndex:387},{value:"Dynamic Images",paraId:470,tocIndex:387},{value:", requiring only three steps:",paraId:469,tocIndex:387},{value:"Insert a temporary image in the template to mark the barcode position",paraId:471,tocIndex:387},{value:`Edit the image's "Alt Text" and write in the barcode format field label, for example `,paraId:472,tocIndex:387},{value:"{d.code:barcode(qrcode)}",paraId:472,tocIndex:387},{value:", where ",paraId:472,tocIndex:387},{value:"qrcode",paraId:472,tocIndex:387},{value:" is the barcode type (see the ",paraId:472,tocIndex:387},{value:"supported list",paraId:473,tocIndex:387},{value:" below)",paraId:472,tocIndex:387},{value:"After rendering, the placeholder image will be automatically replaced with the corresponding barcode image:",paraId:474,tocIndex:387},{value:"Barcode Name",paraId:475,tocIndex:388},{value:"Type",paraId:475,tocIndex:388},{value:"QR Code",paraId:475,tocIndex:388},{value:"qrcode",paraId:475,tocIndex:388},{value:"Problem Description",paraId:476,tocIndex:390},{value:": In Excel templates, if a cell has no content or styling, it may be removed during rendering, causing missing cells in the final document.",paraId:476,tocIndex:390},{value:"Solutions",paraId:477,tocIndex:390},{value:":",paraId:477,tocIndex:390},{value:"Fill background color",paraId:478,tocIndex:390},{value:": Apply a background color to empty cells in the target area to ensure cells remain visible during the rendering process.",paraId:478,tocIndex:390},{value:"Insert spaces",paraId:478,tocIndex:390},{value:": Insert a space character in empty cells to maintain cell structure even without actual content.",paraId:478,tocIndex:390},{value:"Set borders",paraId:478,tocIndex:390},{value:": Add border styles to the table to enhance cell boundaries and prevent cells from disappearing during rendering.",paraId:478,tocIndex:390},{value:"Example",paraId:479,tocIndex:390},{value:":",paraId:479,tocIndex:390},{value:"In the Excel template, set a light gray background for all target cells and insert spaces in empty cells.",paraId:480,tocIndex:390},{value:"Problem Description",paraId:481,tocIndex:391},{value:": When using loop functionality to output tables, merged cells in the template may cause abnormal rendering results, such as lost merge effects or data misalignment.",paraId:481,tocIndex:391},{value:"Solutions",paraId:482,tocIndex:391},{value:":",paraId:482,tocIndex:391},{value:"Avoid using merged cells",paraId:483,tocIndex:391},{value:": Try to avoid using merged cells in loop output tables to ensure correct data rendering.",paraId:483,tocIndex:391},{value:"Use center across selection",paraId:483,tocIndex:391},{value:': If you need text to be horizontally centered across multiple cells, use the "Center Across Selection" feature instead of merging cells.',paraId:483,tocIndex:391},{value:"Limit merged cell positions",paraId:483,tocIndex:391},{value:": If merged cells are necessary, only merge cells above or to the right of the table, avoiding merging cells below or to the left to prevent loss of merge effects during rendering.",paraId:483,tocIndex:391},{value:"Problem Description",paraId:484,tocIndex:392},{value:": In Excel templates, if there is other content (e.g., order summary, notes) below a loop area that dynamically grows based on data items (e.g., order details), during rendering, the loop-generated data rows will expand downward, directly overwriting or pushing down the static content below, causing format disorder and content overlap in the final document.",paraId:484,tocIndex:392},{value:"Solutions",paraId:485,tocIndex:392},{value:":",paraId:485,tocIndex:392},{value:"Adjust layout, place loop area at the bottom",paraId:486,tocIndex:392},{value:": This is the most recommended method. Place the table area that needs loop rendering at the bottom of the entire worksheet. Move all information originally below it (summary, signatures, etc.) to above the loop area. This way, loop data can freely expand downward without affecting any other elements.",paraId:486,tocIndex:392},{value:"Reserve sufficient blank rows",paraId:486,tocIndex:392},{value:": If content must be placed below the loop area, estimate the maximum number of rows the loop might generate and manually insert enough blank rows as a buffer between the loop area and content below. However, this method has risks - if actual data exceeds the estimated rows, the problem will reoccur.",paraId:486,tocIndex:392},{value:"Use Word templates",paraId:486,tocIndex:392},{value:": If layout requirements are complex and cannot be resolved by adjusting Excel structure, consider using Word documents as templates. Tables in Word automatically push content below when rows increase, without content overlap issues, making it more suitable for generating such dynamic documents.",paraId:486,tocIndex:392},{value:"Example",paraId:487,tocIndex:392},{value:":",paraId:487,tocIndex:392},{value:"Wrong approach",paraId:488,tocIndex:392},{value:`: Placing "Order Summary" information immediately below the looping "Order Details" table.
`,paraId:488,tocIndex:392},{value:"Correct approach 1 (Adjust layout)",paraId:489,tocIndex:392},{value:`: Move "Order Summary" information above the "Order Details" table, making the loop area the bottom element of the page.
`,paraId:489,tocIndex:392},{value:"Correct approach 2 (Reserve blank rows)",paraId:490,tocIndex:392},{value:`: Reserve many blank rows between "Order Details" and "Order Summary" to ensure loop content has enough expansion space.
`,paraId:490,tocIndex:392},{value:"Correct approach 3",paraId:491,tocIndex:392},{value:": Use Word templates.",paraId:491,tocIndex:392},{value:"Problem Description",paraId:492,tocIndex:393},{value:": During template rendering, the system displays error prompts, causing rendering failure.",paraId:492,tocIndex:393},{value:"Possible Causes",paraId:493,tocIndex:393},{value:":",paraId:493,tocIndex:393},{value:"Placeholder errors",paraId:494,tocIndex:393},{value:": Placeholder names don't match dataset fields or have syntax errors.",paraId:494,tocIndex:393},{value:"Missing data",paraId:494,tocIndex:393},{value:": Dataset lacks fields referenced in the template.",paraId:494,tocIndex:393},{value:"Improper formatter usage",paraId:494,tocIndex:393},{value:": Formatter parameters are incorrect or unsupported formatting types.",paraId:494,tocIndex:393},{value:"Solutions",paraId:495,tocIndex:393},{value:":",paraId:495,tocIndex:393},{value:"Check placeholders",paraId:496,tocIndex:393},{value:": Ensure placeholder names in the template match field names in the dataset and have correct syntax.",paraId:496,tocIndex:393},{value:"Validate dataset",paraId:496,tocIndex:393},{value:": Confirm the dataset contains all fields referenced in the template with proper data formats.",paraId:496,tocIndex:393},{value:"Adjust formatters",paraId:496,tocIndex:393},{value:": Check formatter usage methods, ensure parameters are correct, and use supported formatting types.",paraId:496,tocIndex:393},{value:"Example",paraId:497,tocIndex:393},{value:":",paraId:497,tocIndex:393},{value:"Incorrect template",paraId:498,tocIndex:393},{value:":",paraId:498,tocIndex:393},{value:`Order ID: {d.orderId}
Order Date: {d.orderDate:format('YYYY/MM/DD')}
Total Amount: {d.totalAmount:format('0.00')}
`,paraId:499,tocIndex:393},{value:"Dataset",paraId:500,tocIndex:393},{value:":",paraId:500,tocIndex:393},{value:`{
  "orderId": "A123456789",
  "orderDate": "2025-01-01T10:00:00Z"
  // Missing totalAmount field
}
`,paraId:501,tocIndex:393},{value:"Solution",paraId:502,tocIndex:393},{value:": Add the ",paraId:502,tocIndex:393},{value:"totalAmount",paraId:502,tocIndex:393},{value:" field to the dataset or remove the reference to ",paraId:502,tocIndex:393},{value:"totalAmount",paraId:502,tocIndex:393},{value:" from the template.",paraId:502,tocIndex:393}]}}]);
