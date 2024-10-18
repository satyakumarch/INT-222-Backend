
[A.1]
include http module to create server application and use the FS module to duplicate the original.txt file as the duplicate.txt file
  in the server with the client (user) request from the browser. create a source.txt and add the personal information (name, city ,state) 
  in the server system for duplication
🚀

Here's the Node.js code that achieves what you described:

JavaScript
const http = require('http');
const fs = require('fs');

const sourceFileName = 'source.txt';
const targetFileName = 'duplicate.txt';

// Function to handle errors
function handleError(err) {
  console.error(err);
  process.exit(1); // Exit the process on error
}

// Function to create source file if it doesn't exist
function createSourceFile(name, city, state) {
  const content = `Name: ${name}\nCity: ${city}\nState: ${state}\n`;
  fs.writeFile(sourceFileName, content, (err) => {
    if (err) handleError(err);
    console.log(`Source file '${sourceFileName}' created.`);
  });
}

// Function to duplicate source file
function duplicateFile() {
  fs.access(sourceFileName, fs.constants.F_OK, (err) => {
    if (err) {
      console.warn(`Source file '${sourceFileName}' not found. Creating a new one.`);
      createSourceFile('John Doe', 'Anytown', 'CA'); // Replace with your information
    } else {
      fs.copyFile(sourceFileName, targetFileName, (err) => {
        if (err) handleError(err);
        console.log(`File duplicated successfully: ${sourceFileName} -> ${targetFileName}`);
      });
    }
  });
}

const server = http.createServer((req, res) => {
  if (req.url === '/duplicate') {
    duplicateFile();
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('File duplication initiated!\n');
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('404 Not Found');
    res.end();
  }
});

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});
 ====================================================================================================================
 [A.2]
 create a node.js web server application with the http module to perform the search operation on the given set of
  values except a series of value from the input text field of the current page
  and provide the output value as the response with the click event on a Button

  server.js:

JavaScript
const http = require('http');

const data = ['apple', 'banana', 'orange', 'mango', 'grape']; // Replace with your actual data
let excludedValues = [];

const server = http.createServer((req, res) => {
  if (req.url === '/search' && req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const formData = new URLSearchParams(body);
      excludedValues = formData.getAll('exclude'); // Get excluded values from form data
      const filteredData = data.filter((item) => !excludedValues.includes(item));
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(JSON.stringify(filteredData));
    });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

=============================
HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Search App</title>
</head>
<body>
  <h1>Search Fruits</h1>
  <form action="/search" method="post">
    <label for="exclude">Exclude Fruits:</label>
    <input type="text" id="exclude" name="exclude" multiple>
    <button type="submit">Search</button>
  </form>
  <div id="result"></div>

  <script>
    const form = document.querySelector('form');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      fetch('/search', {
        method: 'POST',
        body: new URLSearchParams(new FormData(form))
      })
      .then(response => response.json())
      .then(data => {
        resultDiv.textContent = `Search Result: ${JSON.stringify(data)}`;
      })
      .catch(error => {
        console.error(error);
        resultDiv.textContent = 'Error fetching data';
      });
    });
  </script>
</body>
</html>


========================
implement and space application to pass two number in the URL of the client request to the server and access 
those two numbers from the URL using the parent object and perform basic arithmetic operation plus minus multiplication
 and division in the server node.js application finally add a button on the client page and provide the output 
value at the response with the click event

Here's the Node.js web server application with the http module that performs basic arithmetic operations 
based on two numbers passed in the URL and displays the result upon a button click:

server.js:

JavaScript
const http = require('http');

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const num1 = parseFloat(url.searchParams.get('num1'));
  const num2 = parseFloat(url.searchParams.get('num2'));
  let operation = url.searchParams.get('op');
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Invalid numbers provided');
    return;
  }

  if (!operation) {
    operation = 'add'; // Default operation if not specified
  } else {
    operation = operation.toLowerCase();
  }

  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      if (num2 === 0) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Division by zero!');
        return;
      }
      result = num1 / num2;
      break;
    default:
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Invalid operation');
      return;
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Result: ${result}`);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
Use code with caution.
content_copy
index.html: (This is a basic example. You can style it further using HTML and CSS)

HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculator App</title>
</head>
<body>
  <h1>Simple Calculator</h1>
  <form action="">
    <label for="num1">Number 1:</label>
    <input type="number" id="num1" name="num1" required>
    <br>
    <label for="num2">Number 2:</label>
    <input type="number" id="num2" name="num2" required>
    <br>
    <select name="op">
      <option value="add">Add</option>
      <option value="subtract">Subtract</option>
      <option value="multiply">Multiply</option>
      <option value="divide">Divide</option>
    </select>
    <br>
    <button type="button" id="calculate">Calculate</button>
  </form>
  <div id="result"></div>

  <script>
    const form = document.querySelector('form');
    const resultDiv = document.getElementById('result');
    const calculateBtn = document.getElementById('calculate');

    calculateBtn.addEventListener('click', () => {
      const num1 = document.getElementById('num1').value;
      const num2 = document.getElementById('num2').value;
      const operation = document.querySelector('select[name="op"]').value;

      const url = new URL('/calculate', window.location.origin);
      url.searchParams.set('num1', num1);
      url.searchParams.set('num2', num2);
      url.searchParams.set('op', operation);

      fetch(url)
      .then(response => response.text())
      .then(data => {
        resultDiv.textContent = data;
      })
      .catch(error => {
        console.error(error);
        resultDiv.textContent = 'Error performing calculation';
      });
    });
  </script>
</body>
</html>

=====================================
[B.2]
implement a note that this application to create a writable stream with a new sample.txt  file and compute the prime
 number up to 100 and write the value to the sample.txt file with writable  steam display the message task completed 

at the end in the console window

Here's the Node.js application that creates a writable stream, computes prime numbers up to 100, writes them to a new sample.txt file, and displays a "task completed" message:

JavaScript
const fs = require('fs');

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const writableStream = fs.createWriteStream('sample.txt');

writableStream.on('error', (err) => {
  console.error('Error writing to file:', err);
});

let dataToWrite = '';

for (let i = 2; i <= 100; i++) {
  if (isPrime(i)) {
    dataToWrite += `${i} `;
  }
}

writableStream.write(dataToWrite, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    // Close the stream after writing
    writableStream.close();
    console.log('Task completed: Prime numbers written to sample.txt');
  }
});
===================================
[C.1]
implement a node.js application to create a readable stream with a employed.txt file and  (add basic employee detail in the file). 
read the student detail from the above stream and send the data at the respond to the client request from the browser

Here's a Node.js application that creates a readable stream with an employed.txt file 
(assuming it contains basic employee details), reads the data, and sends it as a response to a client request:

JavaScript
const http = require('http');
const fs = require('stream');

const filePath = 'employed.txt'; // Replace with the actual path to your file

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    const readableStream = fs.createReadStream(filePath, { encoding: 'utf8' });

    readableStream.on('error', (err) => {
      console.error('Error reading file:', err);
      res.writeHead(500);
      res.end('Error reading employee data');
    });

    readableStream.pipe(res); // Pipe the stream data directly to the response
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});


1)Modules:

http: This module is used to create an HTTP server.
fs: This module is used to work with the file system.
2)File Path:

const filePath = 'employed.txt': This variable stores the path to your employed.txt file. Make sure to replace it with the actual path.
3)Server Creation:

http.createServer((req, res) => { ... }): This creates an HTTP server that listens for incoming requests.
4)Handling GET Requests:

The code checks if the request URL is '/' and the method is 'GET'. If so, it proceeds to read the file.
5)Creating Readable Stream:

fs.createReadStream(filePath, { encoding: 'utf8' }): This creates a readable stream for the employed.txt file. The encoding: 'utf8' option ensures the data is read as UTF-8 encoded text.
6)Error Handling:

readableStream.on('error', ...): This event listener handles any errors that might occur during the reading process.
7)Piping the Stream:

readableStream.pipe(res): This method efficiently pipes the data from the readable stream directly to the HTTP response object. This avoids loading the entire file into memory at once.
8)Handling Other Requests:

The code handles any other requests (like requests to non-existent paths) with a 404 Not Found response.
9)Server Listening:

server.listen(3000, ...): This starts the server listening on port 3000.


=================================================================
[C.2]
create a note.js web server application with http module to perform sort  operation on a given set of values Accept a series
 of values from the input.txt file of the client page and provide the output value at the response with the click event on a Button
🚀

Here's a Node.js web server application with the http module that performs
 a sort operation on a given set of values read from a client-side input.txt file 
and displays the sorted values as a response upon a button click:

server.js:

JavaScript
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/sort' && req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const formData = new URLSearchParams(body);
      const inputText = formData.get('data'); // Get data from form field

      try {
        const values = fs.readFileSync('input.txt', 'utf8').split('\n'); // Read data from input.txt
        const sortedValues = values.sort(); // Sort the values
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(sortedValues.join('\n')); // Send sorted values as response
      } catch (error) {
        console.error('Error:', error);
        res.writeHead(500);
        res.end('Error reading or sorting data');
      }
    });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
Use code with caution.
content_copy
index.html: (This is a basic example. You can style it further using HTML and CSS)

HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sort Values App</title>
</head>
<body>
  <h1>Sort Values</h1>
  <form action="/sort" method="post">
    <label for="data">Enter values (one per line):</label>
    <textarea id="data" name="data" rows="5" required></textarea>
    <br>
    <button type="submit">Sort</button>
  </form>
  <div id="result"></div>

  <script>
    const form = document.querySelector('form');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      fetch('/sort', {
        method: 'POST',
        body: new URLSearchParams(new FormData(form))
      })
      .then(response => response.text())
      .then(data => {
        resultDiv.textContent = `Sorted Values:\n${data}`;
      })
      .catch(error => {
        console.error(error);
        resultDiv.textContent = 'Error sorting values';
      });
    });
  </script>
</body>
</html>
Use code with caution.
content_copy
Explanation:

1)Server-side (server.js):

The code imports http and fs modules.
An HTTP server is created to listen on port 3000.
2)Handling POST Requests:

The code checks for POST requests to the /sort endpoint.
3)Reading Form Data:

It reads the request body and parses it as form data.
The data from the form field is retrieved.
4)Reading and Sorting Values:

fs.readFileSync('input.txt', 'utf8'): This reads the content of the input.txt file as a UTF-8 encoded string.
The string is split into an array of values using split('\n').
The sort() method sorts the array of values in place.
5)Sending Sorted Response:

The sorted values are joined back into a string with newlines (\n) using join('\n').
The sorted values are sent as a response with a 200 status code and Content-Type: text/plain.
6)Error Handling:

A try-catch block handles potential errors during file reading or sorting.
In case of errors, a 500 status code and an error message are sent as


===================================================================
[D.1]
implement a node.js application to connect with MongoDB to create a database and add car collection with the field-model ,company, mileage, 
color and owner add multiple document with employee data. finally query the above collection to find employee with more than specific salary 
and display it in the console window
🚀

Here's a Node.js application that connects to MongoDB, creates a database and collection, adds car documents, and queries 
for documents with mileage exceeding a specific value:

JavaScript
const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017"; // Replace with your MongoDB connection URI
const dbName = "your_database_name"; // Replace with your database name
const collectionName = "cars"; // Replace with your collection name

async function connectToDB() {
  const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = client.db(dbName);
  const collection = db.collection(collectionName);
  return { client, collection };
}

async function main() {
  try {
    const { client, collection } = await connectToDB();

    // Add multiple car documents
    const cars = [
      { model: "Honda Civic", company: "Honda", mileage: 50000, color: "Red", owner: "John Doe" },
      { model: "Toyota Camry", company: "Toyota", mileage: 30000, color: "Silver", owner: "Jane Doe" },
      { model: "Ford Mustang", company: "Ford", mileage: 80000, color: "Black", owner: "Michael Smith" },
    ];

    await collection.insertMany(cars);
    console.log("Car documents added successfully!");

    // Specify the minimum mileage to find
    const minMileage = 60000;

    // Find cars with mileage exceeding the minimum
    const highMileageCars = await collection.find({ mileage: { $gt: minMileage } }).toArray();

    if (highMileageCars.length > 0) {
      console.log("Cars with mileage exceeding", minMileage, ":");
      highMileageCars.forEach((car) => console.log(car));
    } else {
      console.log("No cars found with mileage exceeding", minMileage);
    }

    await client.close();
  } catch (error) {
    console.error(error);
  }
}

main();
Use code with caution.
content_copy
Explanation:

1)MongoDB Connection:

The MongoClient class from the mongodb package is used for connecting to MongoDB.
Replace uri with your actual MongoDB connection URI.
Replace dbName with your desired database name.
Replace collectionName with your desired collection name (where car data will be stored).
2)connectToDB function:

This async function connects to the MongoDB database and collection, returning a client and collection objects.
3)main function:

This async function encapsulates the application logic.
It calls connectToDB to establish a connection.
4)Adding Car Documents:

An array cars defines sample car documents with model, company, mileage, color, and owner fields.
The insertMany method of the collection object inserts these documents into the collection.
5)Finding Cars with High Mileage:

A minMileage variable defines the minimum mileage threshold for filtering.
The find method queries the collection, selecting documents where the mileage field is greater than ($gt) minMileage.
The toArray method converts the cursor returned by find to an array of documents.
6)Printing Results:

If cars with high mileage are found, they are iterated over and logged to the console.
If no cars meet the criteria, a message is logged.
7)Closing Connection:

The client.close method closes the connection to MongoDB.
========================================
[D.2]
create a node.js web server application with the http module to find the series of factorial number up to given number .accept a number from the input text field of the client page and provide the output value as the response with the check event on a Button
🚀


Here's a Node.js web server application with the http module that calculates factorials of numbers entered by the user and displays the results on a button click:

JavaScript
const http = require('http');

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

const server = http.createServer((req, res) => {
  if (req.url === '/factorial' && req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const formData = new URLSearchParams(body);
      const number = parseInt(formData.get('number')); // Get number from form field

      if (isNaN(number)) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Invalid input: Please enter a number');
        return;
      }

      const factorials = [];
      for (let i = 0; i <= number; i++) {
        factorials.push(`${i}! = ${factorial(i)}`);
      }

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(factorials.join('\n'));
    });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
Use code with caution.
content_copy
index.html: (This is a basic example. You can style it further using HTML and CSS)

HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Factorial Calculator</title>
</head>
<body>
  <h1>Factorial Calculator</h1>
  <form action="/factorial" method="post">
    <label for="number">Enter a number:</label>
    <input type="number" id="number" name="number" min="0" required>
    <br>
    <button type="submit">Calculate Factorials</button>
  </form>
  <div id="result"></div>

  <script>
    const form = document.querySelector('form');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      fetch('/factorial', {
        method: 'POST',
        body: new URLSearchParams(new FormData(form))
      })
      .then(response => response.text())
      .then(data => {
        resultDiv.textContent = data;
      })
      .catch(error => {
        console.error(error);
        resultDiv.textContent = 'Error calculating factorials';
      });
    });
  </script>
</body>
</html>
Use code with caution.
content_copy
Explanation:

1)Server-side (server.js):

The code imports the http module.
The factorial function calculates the factorial of a number using recursion.
2)HTTP Server:

An HTTP server is created to listen on port 3000.
3)Handling POST Requests:

The code checks for POST requests to the /factorial endpoint.
4)Reading Form Data:

It reads the request body and parses it as form data.
The number from the form field is retrieved and parsed into an integer.
5)Input Validation:

The code checks if the input is a valid number using isNaN. If not, it sends a 400 Bad Request response with an error message.
6)Calculating Factorials:

An empty array factorials is created to store the calculated factorials.
A loop iterates from 0 to the entered number.
Inside the loop, the factorial function is called for each number, and the result is formatted as a string with the number and its factorial value.
The formatted string is pushed into the factorials array.


=======================================
[E.1]
implement a node.js application to connect with MongoDB to create a database and add house collection with the fields- Hno, rooms, furniture, and rent and add multiple document with the Student data. finally sort (in ascending order) the student details with marks and display them in console window
🚀
Show drafts
volume_up
Here's a Node.js application that connects to MongoDB, creates a database and collection, adds house documents, and sorts student documents based on marks:

JavaScript
const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017"; // Replace with your MongoDB connection URI
const dbName = "your_database_name"; // Replace with your database name
const houseCollectionName = "houses"; // Replace with your house collection name
const studentCollectionName = "students"; // Replace with your student collection name

async function connectToDB() {
  const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = client.db(dbName);
  const houseCollection = db.collection(houseCollectionName);
  const studentCollection = db.collection(studentCollectionName);
  return { client, houseCollection, studentCollection };
}

async function main() {
  try {
    const { client, houseCollection, studentCollection } = await connectToDB();

    // Add multiple house documents (replace with your actual data)
    const houses = [
      { Hno: 123, rooms: 3, furniture: true, rent: 1000 },
      { Hno: 456, rooms: 2, furniture: false, rent: 800 },
    ];

    await houseCollection.insertMany(houses);
    console.log("House documents added successfully!");

    // Add multiple student documents (replace with your actual data)
    const students = [
      { name: "Alice", marks: 85 },
      { name: "Bob", marks: 92 },
      { name: "Charlie", marks: 78 },
    ];

    await studentCollection.insertMany(students);
    console.log("Student documents added successfully!");

    // Sort students by marks in ascending order
    const sortedStudents = await studentCollection.find().sort({ marks: 1 }).toArray();

    console.log("Students sorted by marks (ascending):");
    sortedStudents.forEach((student) => console.log(student));

    await client.close();
  } catch (error) {
    console.error(error);
  }
}

main();
Use code with caution.
content_copy
Explanation:

1)MongoDB Connection:

Similar to the previous example, it establishes a connection to MongoDB using MongoClient.
Replace uri, dbName, houseCollectionName, and studentCollectionName with your specific values.
2)connectToDB function:

This function connects to the MongoDB database and collections, returning the client, house collection, and student collection objects.
3)main function:

This function encapsulates the application logic.
It calls connectToDB to establish a connection.
4)Adding House Documents:

An array houses defines sample house documents with Hno, rooms, furniture, and rent fields.
The insertMany method of the house collection object inserts these documents.
5)Adding Student Documents:

An array students defines sample student documents with name and marks fields.
The insertMany method of the student collection object inserts these documents.
6)Sorting Students:

The find method retrieves all documents from the student collection.
The .sort({ marks: 1 }) method sorts the results by the marks field in ascending order (1).
The toArray method converts the cursor returned by find to an array of documents.
7)Printing Sorted Students:

The sorted student documents are iterated over and logged to the console.
8)Closing Connection:

The client.close method closes the connection to MongoDB.

======================================================================
[E.2]
create a node.js web server application with the http module to find a series of Fibonacci number up to a given number accept a number from the input text field of the client page and provide the output value at the response with the click event on a Button
🚀

Here's a Node.js web server application with the http module that calculates Fibonacci numbers up to a given input and displays the sequence on a button click:

JavaScript
const http = require('http');

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const server = http.createServer((req, res) => {
  if (req.url === '/fibonacci' && req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const formData = new URLSearchParams(body);
      const number = parseInt(formData.get('number')); // Get number from form field

      if (isNaN(number) || number < 0) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Invalid input: Please enter a non-negative number');
        return;
      }

      const fibonacciSequence = [];
      for (let i = 0; i <= number; i++) {
        fibonacciSequence.push(fibonacci(i));
      }

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`Fibonacci sequence up to ${number}: ${fibonacciSequence.join(', ')}`);
    });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
Use code with caution.
content_copy
index.html: (This is a basic example. You can style it further using HTML and CSS)

HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fibonacci Sequence Calculator</title>
</head>
<body>
  <h1>Fibonacci Sequence Calculator</h1>
  <form action="/fibonacci" method="post">
    <label for="number">Enter a number (non-negative):</label>
    <input type="number" id="number" name="number" min="0" required>
    <br>
    <button type="submit">Calculate Fibonacci Sequence</button>
  </form>
  <div id="result"></div>

  <script>
    const form = document.querySelector('form');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      fetch('/fibonacci', {
        method: 'POST',
        body: new URLSearchParams(new FormData(form))
      })
      .then(response => response.text())
      .then(data => {
        resultDiv.textContent = data;
      })
      .catch(error => {
        console.error(error);
        resultDiv.textContent = 'Error calculating Fibonacci sequence';
      });
    });
  </script>
</body>
</html>
Use code with caution.
content_copy
Explanation:

1)Server-side (server.js):

The code imports the http module.
The fibonacci function calculates the nth Fibonacci number using recursion.
2)HTTP Server:

An HTTP server is created to listen on port 3000.
3)Handling POST Requests:

The code checks for POST requests to the /fibonacci endpoint.
4)Reading Form Data:

It reads the request body and parses it as form data.
The number from the form field is retrieved and parsed into an integer.
5)Input Validation:

The code checks if the input is a non-negative number using isNaN and number >= 0. If not, it sends a 400 Bad Request response with an error message.
6)Calculating Fibonacci Sequence:

An empty array fibonacciSequence is created to store the calculated Fibonacci numbers.
A loop iterates from 0 to the entered number.
Inside the loop, the fibonacci function is called for each value (i), and the result is pushed into the fibonacciSequence array.
===========================================================================

[6.A]
implement a client server application with space http and socket.io module to display the student (your) details in the server console after getting a request (connection) from the client then broadcast the only odd visitor count from the server to all clients with the new client connection
🚀

Here's a client-server application using Node.js with http and socket.io that achieves the desired functionality:

Server-side (server.js):

JavaScript
const http = require('http');
const { Server } = require('socket.io');

const server = http.createServer();
const io = new Server(server);

let oddVisitorCount = 0; // To track odd visitor count

io.on('connection', (socket) => {
  console.log('New client connected!');

  // Check if visitor count is odd
  if (oddVisitorCount % 2 !== 0) {
    io.emit('odd-visitor-count', oddVisitorCount); // Broadcast to all clients
  }

  // Update visitor count on new connection
  oddVisitorCount++;

  // Your student details (replace with actual data)
  const studentDetails = {
    name: "John Doe",
    age: 25,
    course: "Computer Science",
  };

  console.log("Student details:", studentDetails);

  socket.on('disconnect', () => {
    console.log('Client disconnected.');

    // Update visitor count on disconnect (if odd visitor disconnects)
    if (oddVisitorCount % 2 === 0 && oddVisitorCount > 0) {
      oddVisitorCount--;
    }
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
Use code with caution.
content_copy
Client-side (index.html):

HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Socket.IO Client</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.5.1/socket.io.js"></script>
  <script>
    const socket = io(); // Connect to the server

    socket.on('odd-visitor-count', (count) => {
      console.log('Odd visitor count:', count);
    });
  </script>
</head>
<body>
  </body>
</html>
Use code with caution.
content_copy
Explanation:

1)Server-side:

The code imports http and socket.io modules.
An HTTP server is created and a Socket.IO server is attached to it.
2)Client Connections:

The io.on('connection', ...) event listener handles new client connections.
The student details (replace with your actual data) are logged to the console.
When a new client connects, the server checks if the oddVisitorCount is odd.
If odd, it broadcasts the current oddVisitorCount to all connected clients using io.emit('odd-visitor-count', oddVisitorCount).
3)Client Disconnections:

The .on('disconnect', ...) event listener handles client disconnections.
On disconnect, the server updates the oddVisitorCount if an odd visitor disconnected (to maintain accurate count).
4)Client-side:

The client connects to the server using const socket = io().
The socket.on('odd-visitor-count', ...) event listener receives and logs the broadcasted odd visitor count from the server.


===================================================================
[6.2]
create a note that specific server application with the http module for computing the sum of digits of the given number accept a number from the input text field of the client page and provide the output value as the response with the client event on a Button
🚀

Here's a Node.js web server application with the http module that calculates the sum of digits of a number entered by the user and displays the result on a button click:

server.js:

JavaScript
const http = require('http');

function sumOfDigits(number) {
  let sum = 0;
  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  return sum;
}

const server = http.createServer((req, res) => {
  if (req.url === '/sum-of-digits' && req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const formData = new URLSearchParams(body);
      const number = parseInt(formData.get('number')); // Get number from form field

      if (isNaN(number)) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Invalid input: Please enter a number');
        return;
      }

      const sum = sumOfDigits(number);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`The sum of digits of ${number} is: ${sum}`);
    });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
Use code with caution.
content_copy
index.html: (This is a basic example. You can style it further using HTML and CSS)

HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sum of Digits Calculator</title>
</head>
<body>
  <h1>Sum of Digits Calculator</h1>
  <form action="/sum-of-digits" method="post">
    <label for="number">Enter a number:</label>
    <input type="number" id="number" name="number" required>
    <br>
    <button type="submit">Calculate Sum of Digits</button>
  </form>
  <div id="result"></div>

  <script>
    const form = document.querySelector('form');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      fetch('/sum-of-digits', {
        method: 'POST',
        body: new URLSearchParams(new FormData(form))
      })
      .then(response => response.text())
      .then(data => {
        resultDiv.textContent = data;
      })
      .catch(error => {
        console.error(error);
        resultDiv.textContent = 'Error calculating sum of digits';
      });
    });
  </script>
</body>
</html>
Use code with caution.
content_copy
Explanation:

1)Server-side (server.js):

The code imports the http module.
The sumOfDigits function calculates the sum of digits of a number using a loop.
2)HTTP Server:

An HTTP server is created to listen on port 3000.
3)Handling POST Requests:

The code checks for POST requests to the /sum-of-digits endpoint.
4)Reading Form Data:

It reads the request body and parses it as form data.
The number from the form field is retrieved and parsed into an integer.
5)Input Validation:

The code checks if the input is a number using isNaN. If not, it sends a 400 Bad Request response with an error message.
6)Calculating Sum of Digits:

The sumOfDigits function is called with the entered number.
7)Sending Response:

The response includes the entered number and its sum of digits displayed in a user-friendly format.

======================================================================
[7.1]
create an Express application to accept student name, registration numbe,r roll number, mobile number and mail ID from the input text field of a client page and perform a chain of validation on the data in the server application check all the field are not empty minimum and maximum length of data add a submit button on the client web page to submit the data and display the warning message is required

Here's an Express application that validates student data on the server-side:

server.js:

JavaScript
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false })); // Parse form data

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // Serve the client-side HTML
});

app.post('/submit', (req, res) => {
  const { name, registrationNumber, rollNumber, mobileNumber, email } = req.body;

  const errors = [];

  // Name validation - Not empty, minimum length 3
  if (!name || name.trim().length < 3) {
    errors.push('Name is required (minimum 3 characters)');
  }

  // Registration number validation - Not empty, minimum length 8
  if (!registrationNumber || registrationNumber.trim().length < 8) {
    errors.push('Registration number is required (minimum 8 characters)');
  }

  // Roll number validation - Not empty, minimum length 4
  if (!rollNumber || rollNumber.trim().length < 4) {
    errors.push('Roll number is required (minimum 4 characters)');
  }

  // Mobile number validation - Regex for 10-digit number (India)
  const mobileRegex = /^\d{10}$/;
  if (!mobileNumber || !mobileRegex.test(mobileNumber)) {
    errors.push('Invalid mobile number (must be 10 digits)');
  }

  // Email validation - Regex for basic email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.push('Invalid email format');
  }

  if (errors.length > 0) {
    // Send validation error messages back to the client
    res.status(400).send(errors.join('<br>'));
  } else {
    // Form data is valid, handle successful submission (e.g., store data)
    console.log('Student data validated successfully!');
    res.send('Student data submitted successfully!');
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
Use code with caution.
content_copy
index.html:

HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Student Registration</title>
</head>
<body>
  <h1>Student Registration</h1>
  <form action="/submit" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required><br>

    <label for="registrationNumber">Registration Number:</label>
    <input type="text" id="registrationNumber" name="registrationNumber" required><br>

    <label for="rollNumber">Roll Number:</label>
    <input type="text" id="rollNumber" name="rollNumber" required><br>

    <label for="mobileNumber">Mobile Number:</label>
    <input type="tel" id="mobileNumber" name="mobileNumber" required><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required><br>

    <button type="submit">Submit</button>
  </form>

  <div id="error-messages"></div>

  <script>
    const form = document.querySelector('form');
    const errorMessageDiv = document.getElementById('error-messages');

    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent default form submission

      fetch('/submit', {
        method: 'POST',
        body: new URLSearchParams(new FormData(form))
      })
      .then(response => response.text())
      .then(data => {
        if (data.startsWith('Student data')) {
          // Successful submission, handle success message
          console.log('Student data submitted!');
        } else {
          // Validation errors, display them on the client-side
          errorMessageDiv.innerHTML = data;
          errorMessageDiv.style.color = 'red';
        }
      })

      ==================================================================
      [7.2]
create a node.js web server application with the http module to produce a series of Armstrong number of a given number accept a number from the input text field of the client page and provide the output value as the response with the click event on a Button
🚀

Here's a Node.js web server application with the http module that calculates Armstrong numbers up to a given input and displays the sequence on a button click:

JavaScript
const http = require('http');

function isArmstrongNumber(num) {
  const originalNum = num;
  let sum = 0;
  while (num > 0) {
    const digit = num % 10;
    sum += digit * digit * digit;
    num = Math.floor(num / 10);
  }
  return originalNum === sum;
}

const server = http.createServer((req, res) => {
  if (req.url === '/armstrong' && req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const formData = new URLSearchParams(body);
      const number = parseInt(formData.get('number')); // Get number from form field

      if (isNaN(number) || number < 0) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Invalid input: Please enter a non-negative number');
        return;
      }

      const armstrongNumbers = [];
      for (let i = 1; i <= number; i++) {
        if (isArmstrongNumber(i)) {
          armstrongNumbers.push(i);
        }
      }

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`Armstrong numbers up to ${number}: ${armstrongNumbers.join(', ')}`);
    });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
Use code with caution.
content_copy
index.html: (This is a basic example. You can style it further using HTML and CSS)

HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Armstrong Number Calculator</title>
</head>
<body>
  <h1>Armstrong Number Calculator</h1>
  <form action="/armstrong" method="post">
    <label for="number">Enter a number (non-negative):</label>
    <input type="number" id="number" name="number" min="0" required>
    <br>
    <button type="submit">Calculate Armstrong Numbers</button>
  </form>
  <div id="result"></div>

  <script>
    const form = document.querySelector('form');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      fetch('/armstrong', {
        method: 'POST',
        body: new URLSearchParams(new FormData(form))
      })
      .then(response => response.text())
      .then(data => {
        resultDiv.textContent = data;
      })
      .catch(error => {
        console.error(error);
        resultDiv.textContent = 'Error calculating Armstrong numbers';
      });
    });
  </script>
</body>
</html>
Use code with caution.
content_copy
Explanation:

1)Server-side (server.js):

The code imports the http module.
The isArmstrongNumber function checks if a number is an Armstrong number by calculating the sum of its digits raised to the power of the number of digits and comparing it with the original number.
2)HTTP Server:

An HTTP server is created to listen on port 3000.
3)Handling POST Requests:

The code checks for POST requests to the /armstrong endpoint.
4)Reading Form Data:

It reads the request body and parses it as form data.
The number from the form field is retrieved and parsed into an integer.
5)Input Validation:

The code checks if the input is a non-negative number using isNaN and number >= 0. If not, it sends a 400 Bad Request response with an error message.

=========================================================================
[8.1]
implement a client server application with space http and socket.io module to display the student (your) details in the server console after getting the request (connection) from the client then Trigger event from the server to display a series of even number after every 2 second on a client to a page finally display thank you in the server console with the termination of connect from the client
🚀

Here's a client-server application using Node.js with http and socket.io that fulfills the requirements:

Server-side (server.js):

JavaScript
const http = require('http');
const { Server } = require('socket.io');

const server = http.createServer();
const io = new Server(server);

let intervalId; // To store the interval for sending even numbers

io.on('connection', (socket) => {
  console.log('New client connected!');

  // Display student details (replace with your actual data)
  const studentDetails = {
    name: "John Doe",
    age: 25,
    course: "Computer Science",
  };
  console.log("Student details:", studentDetails);

  // Start sending even numbers after a 2-second delay
  intervalId = setInterval(() => {
    const evenNumber = Math.floor(Math.random() * 100) * 2; // Generate random even number (0-98)
    io.emit('even-number', evenNumber);
  }, 2000);

  socket.on('disconnect', () => {
    console.log('Client disconnected. Thank you!');

    // Clear the interval to stop sending even numbers
    clearInterval(intervalId);
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
Use code with caution.
content_copy
Client-side (index.html):

HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Even Number Display</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.5.1/socket.io.js"></script>
  <script>
    const socket = io(); // Connect to the server

    let evenNumberContainer = document.createElement('div');
    evenNumberContainer.textContent = 'Waiting for even numbers...';
    document.body.appendChild(evenNumberContainer);

    socket.on('even-number', (number) => {
      evenNumberContainer.textContent = `Received even number: ${number}`;
    });
  </script>
</head>
<body>
</body>
</html>
Use code with caution.
content_copy
Explanation:

1)Server-side:

The code imports http and socket.io modules.
2)Client Connections:

The io.on('connection', ...) event listener handles new client connections.
Student details (replace with your actual data) are logged to the console.
3)Sending Even Numbers:

When a client connects, an interval is created using setInterval that generates a random even number every 2 seconds and broadcasts it to all connected clients using io.emit('even-number', evenNumber).
4)Client Disconnections:

The .on('disconnect', ...) event listener handles client disconnections.
Upon disconnection, a "Thank you!" message is logged to the server console, and the interval triggering even number broadcasts is cleared using clearInterval(intervalId).
5)Client-side:

The client connects to the server using const socket = io().
It creates a div element to display received even numbers.
The socket.on('even-number', ...) event listener receives and displays the broadcasted even numbers from the server.

=====================================================================
[8.2]
create a node.js  space server application with the http module for the conversion between Celsius and Fahrenheit accept temperature value from the input text field of the client page and provide the output value as the response with the click event on a Button

Here's a Node.js web server application with the http module that converts between Celsius and Fahrenheit based on user input:

JavaScript
const http = require('http');

function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

const server = http.createServer((req, res) => {
  if (req.url === '/convert' && req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const formData = new URLSearchParams(body);
      const temperature = parseFloat(formData.get('temperature')); // Get temperature from form field
      const unit = formData.get('unit'); // Get selected unit (Celsius or Fahrenheit)

      if (isNaN(temperature)) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Invalid input: Please enter a valid number');
        return;
      }

      let convertedTemperature;
      if (unit === 'celsius') {
        convertedTemperature = celsiusToFahrenheit(temperature);
      } else if (unit === 'fahrenheit') {
        convertedTemperature = fahrenheitToCelsius(temperature);
      } else {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Invalid unit: Please select Celsius or Fahrenheit');
        return;
      }

      const convertedUnit = unit === 'celsius' ? 'Fahrenheit' : 'Celsius';
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`${temperature}°${unit} is equal to ${convertedTemperature.toFixed(2)}°${convertedUnit}`);
    });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
Use code with caution.
content_copy
index.html: (This is a basic example. You can style it further using HTML and CSS)

HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Temperature Converter</title>
</head>
<body>
  <h1>Temperature Converter</h1>
  <form action="/convert" method="post">
    <label for="temperature">Enter temperature:</label>
    <input type="number" id="temperature" name="temperature" required>
    <br>
    <label for="unit">Unit:</label>
    <select name="unit" id="unit" required>
      <option value="celsius">Celsius</option>
      <option value="fahrenheit">Fahrenheit</option>
    </select>
    <br>
    <button type="submit">Convert</button>
  </form>
  <div id="result"></div>

  <script>
    const form = document.querySelector('form');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      fetch('/convert', {
        method: 'POST',
        body: new URLSearchParams(new FormData(form))
      })
      .then(response => response.text())
      .then(data => {
        resultDiv.textContent = data;
      })
      .catch(error => {
        console.error(error);
        resultDiv.textContent = 'Error converting temperature';
      });
    });
  </script>
</body>
</html>
Use code with caution.
content_copy
Explanation:

1)Server-side (server.js):

The code imports the http module.
Two functions are defined:
celsiusToFahrenheit: Converts Celsius to Fahrenheit.
fahrenheitToCelsius: Converts Fahrenheit to Celsius.
2)HTTP Server:

An HTTP server is created to listen on port 3000.
3)Handling POST Requests:

The code checks for POST requests to the /convert endpoint

====================================================================
[9.1]
implement and Express application to accept a number from the input text field of a user web page and perform the basic arithmetic operation increment(++), decrement(--), square, on a number inside a middleware function of the server that node.js application finally display the output value in the web user web page as the as a response to click event from the button.
🚀

Here's an Express application that performs basic arithmetic operations using middleware and displays the result on a button click:

server.js:

JavaScript
const express = require('express');
const app = express();

function performOperation(number, operation) {
  switch (operation) {
    case 'increment':
      return number + 1;
    case 'decrement':
      return number - 1;
    case 'square':
      return number * number;
    default:
      return number; // Handle invalid operation (optional)
  }
}

app.use((req, res, next) => {
  if (req.method === 'POST' && req.url === '/calculate') {
    const number = parseInt(req.body.number);
    const operation = req.body.operation;

    if (isNaN(number)) {
      res.status(400).send('Invalid input: Please enter a number');
      return;
    }

    req.result = performOperation(number, operation); // Store result in request object
  }
  next(); // Pass control to next middleware or route handler
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // Serve the client-side HTML
});

app.post('/calculate', (req, res) => {
  if (req.result) {
    res.send(`The result is: ${req.result}`);
  } else {
    res.status(400).send('Error: Operation failed'); // Handle missing result
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
Use code with caution.
content_copy
index.html: (This is a basic example. You can style it further using HTML and CSS)

HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Basic Calculator</title>
</head>
<body>
  <h1>Basic Calculator</h1>
  <form action="/calculate" method="post">
    <label for="number">Enter a number:</label>
    <input type="number" id="number" name="number" required>
    <br>
    <select name="operation" id="operation" required>
      <option value="increment">Increment (++)</option>
      <option value="decrement">Decrement (--)</option>
      <option value="square">Square</option>
    </select>
    <br>
    <button type="submit">Calculate</button>
  </form>
  <div id="result"></div>

  <script>
    const form = document.querySelector('form');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      fetch('/calculate', {
        method: 'POST',
        body: new URLSearchParams(new FormData(form))
      })
      .then(response => response.text())
      .then(data => {
        resultDiv.textContent = data;
      })
      .catch(error => {
        console.error(error);
        resultDiv.textContent = 'Error calculating';
      });
    });
  </script>
</body>
</html>

============================================================
[9.2]
create an Express application for the following scenario to accept a file name from the input text field of the user web page and transfer the request file using download () function from the server as a response to the button click event from the user web page create a text file and add student information (registration ,number ,name, great) on the server system
🚀



Here's an Express application that accepts a filename from the user, creates a text file with student information, and allows downloading the file:

server.js:

JavaScript
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // Serve the client-side HTML
});

app.post('/download', (req, res) => {
  const filename = req.body.filename;

  if (!filename) {
    res.status(400).send('Please enter a filename');
    return;
  }

  const studentInfo = `Registration Number: ${req.body.registrationNumber}\n` +
                     `Roll Number: ${req.body.rollNumber}\n` +
                     `Name: ${req.body.name}\n` +
                     `Grade: ${req.body.grade}`;

  const filePath = path.join(__dirname, 'downloads', filename + '.txt');

  fs.writeFile(filePath, studentInfo, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error creating file');
      return;
    }

    res.download(filePath, (err) => { // Download the created file
      if (err) {
        console.error(err);
        return; // Handle download error (optional)
      }

      fs.unlink(filePath, (err) => { // Delete the temporary file after download
        if (err) {
          console.error(err);
        }
      });
    });
  });
});

app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from public folder (optional for CSS/JS)

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
Use code with caution.
content_copy
index.html: (This is a basic example. You can style it further using HTML and CSS)

HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Download Student Info</title>
</head>
<body>
  <h1>Download Student Information</h1>
  <form action="/download" method="post">
    <label for="filename">Filename:</label>
    <input type="text" id="filename" name="filename" required>
    <br>
    <label for="registrationNumber">Registration Number:</label>
    <input type="text" id="registrationNumber" name="registrationNumber" required>
    <br>
    <label for="rollNumber">Roll Number:</label>
    <input type="text" id="rollNumber" name="rollNumber" required>
    <br>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    <br>
    <label for="grade">Grade:</label>
    <input type="text" id="grade" name="grade" required>
    <br>
    <button type="submit">Download</button>
  </form>

  <script>
    // Handle form submission and potential errors (optional)
  </script>
</body>
</html>

=========================================================================
[10.1]
create an Express application to accept a file name from the input text field of a user web page and transfer the request file using send file function from the server is the response to the button click event from the user by page create a text file and add student information (registration no, name, grade )in the service system
🚀

While using res.sendFile is intended for sending existing files, here's an Express application that fulfills the scenario with some modifications:

server.js:

JavaScript
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // Serve the client-side HTML
});

app.post('/download', (req, res) => {
  const filename = req.body.filename;

  if (!filename) {
    res.status(400).send('Please enter a filename');
    return;
  }

  const studentInfo = `Registration Number: ${req.body.registrationNumber}\n` +
                     `Name: ${req.body.name}\n` +
                     `Grade: ${req.body.grade}`;

  const filePath = path.join(__dirname, 'downloads', filename + '.txt');

  fs.writeFile(filePath, studentInfo, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error creating file');
      return;
    }

    // Send a success message instead of sending the file
    res.send('Student information file created successfully!');
  });
});

app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from public folder (optional for CSS/JS)

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
Use code with caution.
content_copy
index.html: (This is a basic example. You can style it further using HTML and CSS)

HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Create Student Information File</title>
</head>
<body>
  <h1>Create Student Information File</h1>
  <form action="/download" method="post">
    <label for="filename">Filename:</label>
    <input type="text" id="filename" name="filename" required>
    <br>
    <label for="registrationNumber">Registration Number:</label>
    <input type="text" id="registrationNumber" name="registrationNumber" required>
    <br>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    <br>
    <label for="grade">Grade:</label>
    <input type="text" id="grade" name="grade" required>
    <br>
    <button type="submit">Create File</button>
  </form>

  <script>
    // Handle form submission and potential errors (optional)
  </script>
</body>
</html>


=======================================================
[10.2]
create a web server application with http module to provide the file name in the URL client request from the browser include the URL model in the server application in the past the URL to get the file name from the client request access the file and display the content is the response to the client user request in the browser create a text file and 8% information name roll number in the server system
🚀

Here's an improved Node.js application with the http module that fulfills the requirements:

server.js:

JavaScript
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`); // Parse the URL

  if (url.pathname === '/create-student-info') { // Handle POST request for creating student info file
    if (req.method !== 'POST') {
      res.writeHead(405, { 'Allow': 'POST' }); // Allow only POST requests
      res.end('Method Not Allowed');
      return;
    }

    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const formData = new URLSearchParams(body);
      const name = formData.get('name');
      const rollNumber = formData.get('rollNumber');

      if (!name || !rollNumber) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Invalid request: Please provide name and roll number');
        return;
      }

      const studentInfo = `Name: ${name}\nRoll Number: ${rollNumber}`;
      const filePath = path.join(__dirname, 'student-info.txt'); // Fixed filename

      fs.writeFile(filePath, studentInfo, (err) => {
        if (err) {
          console.error(err);
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Error creating file');
          return;
        }

        res.writeHead(201, { 'Content-Type': 'text/plain' });
        res.end('Student information file created successfully!');
      });
    });
  } else if (url.pathname.endsWith('.txt')) { // Handle GET requests for existing text files
    const filePath = path.join(__dirname, url.pathname); // Construct file path

    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File not found');
        return;
      }

      fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
          console.error(err);
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Error reading file');
          return;
        }

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data);
      });
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});