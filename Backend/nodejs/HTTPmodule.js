// const http = require('http');
// const server = http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World\n');
// }).listen(3000);


// const http = require('http');

// const options = {
//   hostname: 'www.google.com',
//   port: 80,
//   path: '/path',
//   method: 'GET'
// };

// const req = http.request(options, (res) => {
//   // Handle response
//   res.on('data', (chunk) => {
//     console.log(`BODY: ${chunk}`);
//   });
// });

// req.end();



// const http = require('http');
// http.createServer((req, res) => {
//   let body = [];
//   req.on('data', (chunk) => {
//     // Each 'chunk' is a Buffer instance
//     body.push(chunk);
//   }).on('end', () => {
//     body = Buffer.concat(body).toString();
    
// }).listen(8080);


// const http = require('http');
// http.createServer((request, response) => {
//     const { headers, method, url } = request;
//     let body = [];
//     request.on('error', err => {
//         console.error(err);
//       })
//       .on('data', chunk => {
//         body.push(chunk);
//       })
//       .on('end', () => {
//         body = Buffer.concat(body).toString();
      
//         response.on('error', err => {
//           console.error(err);
//         });
//         response.statusCode = 200;
//         response.setHeader('Content-Type', 'application/json');
//         const responseBody = { headers, method, url, body };
//         response.write(JSON.stringify(responseBody));
//         response.end(); 
//       });
//   }).listen(8080)
// url module
const url=require('url')
const address="https://ums.lpu.in/app/lms/common/lms/markAttendance"
address.toJSON
console.log(address)
https://www.google.com/search?q=nodejs+course+with+100%25+placement&rlz=1C1VDKB_enIN1087IN1087&oq=nodejs+course+with+100%25+placement&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQIRgKGKABMgkIAhAhGAoYoAEyCQgDECEYChigAdIBCTE1ODA5ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8