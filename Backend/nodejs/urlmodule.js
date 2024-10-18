const url = require('url');
const urlString = 
'https://www.node.com/path?query=value';
const parsedUrl = url.parse(urlString);
console.log(parsedUrl);


// url.tostring() 
// const url = new URL("https://www.geeksforgeeks.org"); 
// console.log(url.toString()); 

// url.tojson()
// node program to demonstrate the
// url.toJSON() method in node.js

// Require an URL module
// const url = require('url');

// let urls = 'https://www.node.com',
// // 	new URL('https://www.google.com'),
// // ];

// console.log(JSON.stringify(urls));


