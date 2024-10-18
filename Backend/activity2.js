// const fs = require('fs');

// const data1 = {
//   name: 'John Doe',
//   age: 30,
//   occupation: 'Software Engineer'
// };

// fs.writeFile('data.json', JSON.stringify(data1), (err) => {
//   if (err) throw err;
//   console.log('Data written to file');
// });



//writing to stream
// var fs=require("fs");
// var data='simply easy learning';
// var writerStream=fs.createWriteStream('lpu.txt');
// writerStream.write(data,'utf8');
// writerStream.end();
// writerStream.on('finish',function(){
//     console.log("welcome to lovely professional university");
// });


// var zlib=require('zlib');
// var fs=require('fs');
// var gzib=zlib.Gzip();
// var r=fs.createReadStream('lpu.txt');
// var w=fs.createWriteStream('lpu.txt.gz');
// r.pipe(gzib).pipe(w);



// //writing to stream
//  var fs=require("fs");
// var data='simply easy learning';
// var readableStream=fs.createWriteStream('lpu.txt');
// readableStream.write(data,'utf8');
// readableStream.end();
// readableStream.on('finish',function(){
//     console.log("write completed");
// });
// readableStream.on('error',function(err){
//     console.log(err.stack);
// });


// //writing to stream
// var fs=require("fs");
// var data='simply easy learning';
// var copy=fs.createWriteStream('lpu.txt');
// readableStream.write(data,'utf8');
// readableStream.end();
// readableStream.on('finish',function(){
//     console.log("write completed");
// });
// readableStream.on('error',function(err){
//     console.log(err.stack);
// });



//compression data using brotli

// var zlib=require('zlib');
// var fs=require('fs');
// var brot=zlib.createBrotliCompress();
// var r=fs.createReadStream('lpu.txt');
// var w=fs.createWriteStream('lpu.txt.gz');
// r.pipe(brot).pipe(w);



//copy module
// var fs = require('fs');
// var read = fs.createReadStream('lpu.txt');
// var write = fs.createWriteStream('lpu_copy.txt');
// read.pipe(write);
// write.on('finish', function() {
//     console.log('File copied successfully.');
// });


// Rename function
// var fs = require('fs');
// fs.rename('lpu.txt', 'lpu_1.txt', function(err) {
//     if (err) {
//         console.error('Error renaming file:', err);
//     } else {
//         console.log('File renamed successfully.');
//     }
// });


//close function
var zlib = require('zlib');
var fs = require('fs');

var brotliCompress = zlib.createBrotliCompress();
var r = fs.createReadStream('lpu.txt');
var w = fs.createWriteStream('lpu.txt.br');

r.pipe(brotliCompress).pipe(w);

w.on('close', function () {
    console.log('File compression completed.');
});
