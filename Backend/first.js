// console.log("hello world");
// var http=require("http");
// const { listeners } = require("process");
// http.createServer(requestListener);

// listener=function(request,response){
//     response.writeHead(200,{'Content-type':'text/html'});
//     response.end('<h2> style="text-align:center;">hello world</h2>');
// };


const args=process.argv;
console.log(args);
const name=args[2];
console.log("hello",name);