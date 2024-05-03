

// // const fs=require('fs')


// // fs.readFileSync('file.txt','utf-8')
// // {
// //     if(err)
// //     {
// //         console.error(err)
// //         return
// //     }
// //     else
// //     {
// //       console.log(data)  
      
// //     }}



// // function square(n)
// // {
// //     return n*n
// // }
// // var result=square(5)
// // console.log(result)

// // to write
// // const content=""
// // fs.writeFile('file.txt',content,(err,data)=>{
// //     if(err)
// //     {
// //         console.error(err)
// //         return
// //     }
// //     else
// //     {
// //       console.log(data)  
// //     }

// // }
// // )
// // to check whether file exist
// // fs.access('file.txt',fs.constants.F_OK,(err)=>{
// //     if(err)
// //     {
// //         console.error(err)
// //         return
// //     }
// //     else
// //     {
// //       console.log("file is there")  
// //     }

// // }
// // )
// // to remove
// // fs.unlink('file.txt',(err)=>{
// //     if(err)
// //     {
// //         console.error(err)
// //         return
// //     }
// //     else
// //     {
// //       console.log("file is there")  
// //     }

// // }
// // )
// // to open a file
// // var fs = require("fs");
// // Asynchronous - Opening File
// // console.log("Going to open file!");
// // fs.rename('input.txt', 'second  name of your file',function(err, fd) {
// // if (err) {
// // return console.error(err);
// // }
// // console.log("File close successfully!");
// // });
// //to fetch the info
// // var fs = require("fs");
// // console.log("Going to get file info!");
// // fs.stat('input.txt', function (err, stats) {
// // if (err) {
// // return console.error(err);
// // }
// // console.log(stats);
// // console.log("Got file info successfully!");
// // // // Check file type
// //  console.log("isFile ? " + stats.isFile());
// // console.log("isDirectory ? " + stats.isDirectory());
// // });
// // const fs = require('fs');

// // const directoryPath = 'C:\\Users\\HP\\Desktop\\nodejs\\temp\\test';

// // // Create the directory along with its parent directories
// // fs.mkdir(directoryPath, { recursive: true })
// // const fs = require('fs');

// // fs.copyFile('package.json', 'backup-package.json', (err) => {
// //     if (err) {
// //         console.error(err);
// //     } else {
// //         console.log('package.json copied to backup-package.json');
// //     }
// // });
// // // List files in the current directory:
// // const fs = require('fs');

// // fs.readdir('.', (err, files) => {
// //     if (err) {
// //         console.error(err);
// //     } else {
// //         console.log('Files in current directory:', files);
// //     }
// // });
// // // Check if a directory exists
// // const fs = require('fs');

// // fs.stat('my-directory', (err, stats) => {
// //     if (err || !stats.isDirectory()) {
// //         console.error('my-directory does not exist or is not a directory');
// //     } else {
// //         console.log('my-directory exists');
// //     }
// // });

// // // Remove an empty directory
// // const fs = require('fs');

// // fs.rmdir('old-directory', (err) => {
// //     if (err) {
// //         console.error(err);
// //     } else {
// //         console.log('old-directory removed');
// //     }
// // });
// // for json FileSystem

// const fs = require('fs');

// try {
//   const data = fs.readFileSync('file.txt', 'utf-8');
//   console.log(data);
// } catch (err) {
//   console.error(err);
// }

// function square(n) {
//   return n * n;
// }

// var result = square(5);
// console.log(result);
// const buffer1=Buffer.from([1,2,3,4,5,6])
// console.log(buffer1)
// buffer1.subarray(1,4)

// buffer1.write("dfghjkbvcvbnm,")
// const a=buffer1.toJSON()
// console.log(a)
// working with path module
// const path=require('path')
// const drive=path.basename("C:\Users\HP\Desktop\nodejs\bk1.js")
// console.log(drive)
// normalize
// delimiter
// Join
// os module
// const a =require('os')
// const architecture=a.type()
// console.log(architecture)

// week 4 activity
// create a simple node js server
// that process different url path and query 
// string
// const express = require('express')
// const app = express()
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
// app.listen(3000)
// const statuscode=require('http')
// console.log(statuscode.STATUS_CODES)

// Importing required modules
const express = require('express');
const bodyParser = require('body-parser');

// Creating an instance of express
const app = express();

// Using bodyParser middleware to parse POST request data
app.use(bodyParser.urlencoded({ extended: true }));

// Define a simple in-memory database for demonstration
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' }
];

// Define routes

// GET request for the login page
app.get('/login', (req, res) => {
  res.send(`
    <h2>Login</h2>
    <form action="/login" method="post">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
  `);
});

// POST request for handling login form submission
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.send(`Welcome, ${username}!`);
  } else {
    res.status(401).send('Invalid username or password');
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


// implement a simple middleware that used the express package and 
// it is able to handle get and post request properly 
// in postman























