// // const {Readable}=require('stream');
// // const inStream=new Readable({
// //     read(){}
// // });
// // inStream.push('here to study int222');
// // inStream.push('an industry orirnete coursr');
// // inStream.push(null);
// // inStream.pipe


// // var fs=require("fs");
// // var data='';
// // var readableStream=fs.createReadStream('file.txt');
// // readableStream.setEncoding('utf8');
// // readableStream.on('data',function(chunk){
// //     data+=chunk;
// // });
// // readableStream.on('end',function(){
// //     console.log(data);
// // });
// // readableStream.on('error',function(err){
// //     console.log(err.stack);
// // });


// // writing to stream
// // var fs=require("fs");
// // var data='simply easy learning';
// // var writerStream=fs.createWriteStream('file.txt');
// // writerStream.write(data,'utf8');
// // writerStream.end();
// // writerStream.on('finish',function(){
// //     console.log("write completed");
// // });
// // writerStream.on('error',function(err){
// //     console.log(err.stack);
// // });

// // console.log("program ended");

// // compressed txt file
// var zlib=require('zlib');
// var fs=require('fs');
// var gzib=zlib.Gzip();
// var r=fs.createReadStream('file.txt');
// var w=fs.createWriteStream('file.txt.gz');
// r.pipe(gzib).pipe(w);


//compression data using brotli

// var zlib=require('zlib');
// var fs=require('fs');
// var brot=zlib.createBrotliCompress();
// var r=fs.createReadStream('brot.txt');
// var w=fs.createWriteStream('brot.txt.gz');
// r.pipe(brot).pipe(w);



// //compressing data using Default
// var zlib=require('zlib');
// var fs=require('fs');
// var defl=zlib.createDeflate();
// var r=fs.createReadStream('file.txt');
// var w=fs.createWriteStream('file.txt.gz');
// r.pipe(defl).pipe(w);

