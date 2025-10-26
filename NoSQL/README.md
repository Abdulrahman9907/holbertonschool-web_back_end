# NoSQL - MongoDB Project

This project contains tasks focused on NoSQL databases, specifically MongoDB, including basic operations, Python integration with PyMongo, and log analysis.

## Resources
- [NoSQL Databases Explained](https://www.mongodb.com/nosql-explained)
- [What is NoSQL?](https://www.youtube.com/watch?v=qUV2j3XBRHc)
- [MongoDB with Python Crash Course - Tutorial for Beginners](https://www.youtube.com/watch?v=E-1xI85Zog8)
- [MongoDB Tutorial 2 : Insert, Update, Remove, Query](https://www.youtube.com/watch?v=CB9G5Dvv-EE)
- [Aggregation](https://docs.mongodb.com/manual/aggregation/)
- [Introduction to MongoDB and Python](https://realpython.com/introduction-to-mongodb-and-python/)
- [mongo Shell Methods](https://docs.mongodb.com/manual/reference/method/)
- [Mongosh](https://www.mongodb.com/docs/mongodb-shell/)

## Learning Objectives
At the end of this project, you should be able to explain:
- What NoSQL means
- What is the difference between SQL and NoSQL
- What is ACID
- What is document storage
- What are NoSQL types
- What are the benefits of a NoSQL database
- How to query information from a NoSQL database
- How to insert/update/delete information from a NoSQL database
- How to use MongoDB

## Requirements
### MongoDB Command Files
- All files will be interpreted/compiled on Ubuntu 18.04 LTS using MongoDB (version 4.2)
- All files should end with a new line
- The first line of all files should be a comment: `// my comment`
- A README.md file at the root of the folder is mandatory
- The length of your files will be tested using `wc`

### Python Scripts
- All files will be interpreted/compiled on Ubuntu 18.04 LTS using python3 (version 3.7) and PyMongo (version 3.10)
- All files should end with a new line
- The first line of all files should be exactly `#!/usr/bin/env python3`
- Your code should use the pycodestyle style (version 2.5.*)
- The length of your files will be tested using `wc`
- All modules should have documentation
- All functions should have documentation
- Your code should not be executed when imported (use `if __name__ == "__main__":`)

## Installation

### Install MongoDB 4.2 on Ubuntu 18.04
```bash
$ wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | apt-key add -
$ echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" > /etc/apt/sources.list.d/mongodb-org-4.2.list
$ sudo apt-get update
$ sudo apt-get install -y mongodb-org
```

### Install PyMongo
```bash
$ pip3 install pymongo
```

## Tasks

### 0. List all databases
Write a script that lists all databases in MongoDB.

### 1. Create a database
Write a script that creates or uses the database `my_db`.

### 2. Insert document
Write a script that inserts a document in the collection `school`:
- The document must have one attribute `name` with value "Holberton school"

### 3. All documents
Write a script that lists all documents in the collection `school`.

### 4. All matches
Write a script that lists all documents with `name="Holberton school"` in the collection `school`.

### 5. Count
Write a script that displays the number of documents in the collection `school`.

### 6. Update
Write a script that adds a new attribute to a document in the collection `school`:
- The script should update only documents with `name="Holberton school"`
- The update should add the attribute `address` with the value "972 Mission street"

### 7. Delete by match
Write a script that deletes all documents with `name="Holberton school"` in the collection `school`.

### 8. List all documents in Python
Write a Python function that lists all documents in a collection.

### 9. Insert a document in Python
Write a Python function that inserts a new document in a collection based on kwargs.

### 10. Change school topics
Write a Python function that changes all topics of a school document based on the name.

### 11. Where can I learn Python?
Write a Python function that returns the list of schools having a specific topic.

### 12. Log stats
Write a Python script that provides some stats about Nginx logs stored in MongoDB.

### 13. Regex filter (Advanced)
Improve 12 by adding the top 10 of the most present IPs in the collection `nginx` of the database `logs`.

## Author
Abdulrahman Alhussainy
