# Connecting Data Blocks

## Introduction

Connecting data blocks is a powerful feature that enables dynamic filtering linkage between different data components. At its core, this functionality involves establishing a relationship between two collections: a source collection (primary collection) and a target collection (foreign key collection). This connection facilitates seamless data filtering and interaction.

The options for connecting blocks are versatile, including:
- Data blocks from the same collection on the current page or pop-up window
- Blocks from different collections with foreign key constraints
- Blocks from collections with inheritance relationships

Users can connect multiple blocks simultaneously, enhancing the flexibility of data interactions. Regardless of the chosen method, the underlying principle remains consistent: the source collection (actively connecting collection) supplies filter parameters to the target collection (connected collection), enabling precise data filtering and display.

## User Manual

### Connecting Filter Blocks to Data Blocks

![Illustration of connecting filter blocks to data blocks](https://static-docs.nocobase.com/20240407180953.png)

### Connecting Data Blocks to Data Blocks

#### Linkage Between Data Blocks from the Same collection

Example: Creating a dynamic linkage between an order collection block and its corresponding order details block.

 <video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240407161700.mp4" type="video/mp4">
 </video>

#### Linkage Between Related Data collection Blocks (Different collection Blocks with Foreign Key Constraints)

Example: Leveraging the many-to-one relationship between the order collection and customer collection to implement filtering linkage. This setup allows users to query order data for a specific customer by creating a connection between the customer collection block and the order collection block.

 <video width="100%" height="440" controls>
      <source src="https://static-docs.nocobase.com/20240407163523.mp4" type="video/mp4">
 </video>
