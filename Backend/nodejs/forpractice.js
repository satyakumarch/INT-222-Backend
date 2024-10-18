// // const fs = require('fs');

// // // Read JSON file
// // fs.readFile('am.json', (err, data) => {
// //   if (err) {
// //     console.error('Error reading file:', err);
// //     return;
// //   }
// // console.log('Read JSON data:', JSON.parse(data));})

// //   // Modify the data
// // const fs = require('fs');

// // Data to be written to the JSON file
// // const newData = {
// // 	key1: 'value1',
// // 	key2: 'value2',
// // 	key3: [1, 2, 3],
// //   };
// //   const jsonString = JSON.stringify(newData, null, 2);
// //   fs.writeFile('example.json', jsonString, (err) => {
// // 	if (err) {
// // 	  console.error('Error writing file:', err);
// // 	  return;
// // 	}
// // 	console.log('Data has been written to the JSON file.');
//   // });
  
// // });
// // No need to import Buffer in Node.js
// // const bufferFromArray = Buffer.from([1, 2, 3]);
// // const bufferFromString = Buffer.from('Hello, World!');
// // const emptyBuffer = Buffer.alloc(10);
// // console.log(bufferFromArray)


// // console.log(bufferFromArray.toString('utf-8'));
// // Different Method to create Buffer
// // const buffer1 = Buffer.alloc(100);
// // const buffer2 = new Buffer('nodejs');
// //  const buffer3 = Buffer.from([1, 2, 3, 4]);

// // Writing data to Buffer
// // buffer1.write("welcome to node js")
// // // Reading data from Buffer
// // const a = buffer1.toString('utf-8');
// // console.log(buffer3);

//  // Check object is buffer or not
// console.log(Buffer.isBuffer(buffer1));

//  // Check length of Buffer
// console.log(buffer1.length);

// // Copy buffer
//  const bufferSrc = new Buffer('ABC');
// const bufferDest = Buffer.alloc(3);
// bufferSrc.copy(bufferDest);

// const Data = bufferDest.toString('utf-8');
//  console.log(Data);

// // // Slicing data
//  const bufferOld = new Buffer(
// 'nodejsisthere tointroduceyou toindustry');
// const bufferNew = bufferOld.slice(0, 4);
// console.log(bufferNew.toString());

// // // concatenate two buffer
// //  const bufferOne = new Buffer('we will learn ');
// // const bufferTwo = new Buffer('nodejs');
// const bufferThree = Buffer.concat([bufferOne, bufferTwo]);
// console.log(bufferThree.toString());
// //  compare two buffers
// const buffero = new Buffer('m');
// const bufferT = new Buffer('n');
// var result=buffero.compare(bufferT)
// console.log(result)
// // Sample JavaScript Code for creating 
// // a Readable Stream 
// // Accessing streams 
// const { Readable } = require('stream') 
// const inStream = new Readable({ 
// 	read() { } 
// }); 
// inStream.push('here to study int222 '); 
// inStream.push( 'an industry oriented course'); 
// inStream.push(null); 
// inStream.pipe(process.stdout); 
// // // another method using fs module
// var fs = require("fs");
// var data = '';
// var readerStream = fs.createReadStream('file.txt');
//  readerStream.setEncoding('UTF8');
// readerStream.on('data', function(chunk) {
//    data += chunk;
// });
// readerStream.on('end',function() {
//    console.log(data);
// });
// readerStream.on('error', function(err) {
//    console.log(err.stack);
// });
// console.log("Program Ended");

// // // Writing to a Stream
// var fs = require("fs");
// var data = 'Simply Easy Learning';
// var writerStream = fs.createWriteStream('output.txt');
// writerStream.write(data,'UTF8');
// writerStream.end();
// writerStream.on('finish', function() {
//    console.log("Write completed.");
// });
// writerStream.on('error', function(err) {
//    console.log(err.stack);
// });
// console.log("Program Ended");
// // // redable file mode
// // const fs = require('fs');
// // const readableStream = fs.createReadStream('example.txt');

// // readableStream.on('data', (chunk) => {
// //   console.log(`Received ${chunk.length} bytes of data`);
// // });

// // readableStream.on('end', () => {
// //   console.log('Finished reading data');
// // });
// // // writable stream
// // const fs = require('fs');
// // const writableStream = fs.createWriteStream('output.txt');

// // writableStream.write('Hello, ');
// // writableStream.write('world!');
// // writableStream.end();

// // wriring using stream module 
// const { Writable } = require('stream'); 
// const outStream = new Writable({ 
// 	write(chunk, encoding, callback) { 
// 		console.log(chunk.toString()); 
// 		callback(); 
// 	} 
// });
// process.stdin.pipe(outStream); 



// // transform stream
// const { Transform } = require('stream');

// const myTransformStream = new Transform({
//   transform(chunk, encoding, callback) {
//     // Modify or transform the data
//     const modifiedChunk = chunk.tojson().toUpperCase();
//     this.push(modifiedChunk);
//     callback();
//   }
// });
// process.stdin.pipe(myTransformStream).pipe(process.stdout);

// //using stream module
// // const { Readable, Writable } = require('stream');

// // Custom Readable Stream
// // class MyReadableStream extends Readable {
// //   constructor(options) {
// //     super(options);
// //     this.data = ['One', 'Two', 'Three', 'Four', 'Five'];
// //   }

// //   _read() {
// //     // Simulate pushing data to the stream
// //     if (this.data.length === 0) {
// //       this.push(null); // No more data to push
// //     } else {
// //       const chunk = this.data.shift();
// //       this.push(`${chunk}\n`);
// //     }
// //   }
// // }

// // // Custom Writable Stream
// // class MyWritableStream extends Writable {
// //   _write(chunk, encoding, callback) {
// //     // Simulate processing the data
// //     console.log(`Received: ${chunk.toString().trim()}`);
// //     callback();
// //   }
// // }

// // // Usage
// // const readableStream = new MyReadableStream();
// // const writableStream = new MyWritableStream();

// // // Pipe the data from readable to writable
// // readableStream.pipe(writableStream);

// var fs = require("fs");

// var data = 'This is node.js class';


// // Create a writable stream

// var writer = fs.createWriteStream('test.txt');

// var reader = fs.createReadStream('test.txt');


// // Write the data to stream with encoding to be utf8

// writer.write(data,'UTF8');


// // Mark the end of file

// writer.end();


// // Handle stream events --> finish, and error

// writer.on('finish', function() {

//    console.log("Write completed.");

// });


// var data = '';

// reader.on('data', function(chunk) {

//    data=chunk;

// });


// reader.on('end',function() {

//    console.log(data.toString());

// });


// writer.on('error', function(err) {

//    console.error(err);

// });


// // Using pipestream ->

// var fs = require("fs");


// // Create a readable stream

// var reader = fs.createReadStream('test.txt');


// // Create a writable stream

// var writer = fs.createWriteStream('test1.txt');


// writer.on('pipe', () => {

//    console.log('Something is piping into the writer.');

//  });

//  reader.pipe(writer);


// // Using unpipestream ->

// var fs = require("fs");


// // Create a readable stream

// var reader = fs.createReadStream('test.txt');


// // Create a writable stream

// var writer = fs.createWriteStream('test1.txt');


// writer.on('unpipe', () => {

//    console.log('unpiping occurred');

//  });

//  //reader.pipe(writer);

//  reader.unpipe(writer);


// // Transforming data(compress) using  streams->
// // Compressing data using Gzip:
var zlib = require('zlib');
var fs = require('fs');
var gzip = zlib.Unzip();
var r = fs.createReadStream('tak.txt.gz');
var w = fs.createWriteStream('output.txt');
r.pipe(gzip).pipe(w);

// // Compressing data using Brotli:
var zlib = require('zlib');
var fs = require('fs');
var brot = zlib.createBrotliCompress();
var r = fs.createReadStream('test.txt');
var w = fs.createWriteStream('test.txt.gz');
r.pipe(brot).pipe(w);
// // Compressing data using Deflate:

var zlib = require('zlib');
var fs = require('fs');
var defl = zlib.createDeflate();
var r = fs.createReadStream('test.txt');
var w = fs.createWriteStream('test.txt.gz');
r.pipe(defl).pipe(w);







