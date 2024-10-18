var express = require('express');  
var app = express();  
var bodyParser = require('body-parser');   
var fs = require('fs');

//body parser middleware
app.use(bodyParser.urlencoded({extended:false})) 

app.get('/', function (req, res) {  
   res.sendFile( __dirname + "/" + "add.html" );  
})  
app.post('/add', function (req, res) {   
   response = parseInt(req.body.fn)+parseInt(req.body.sn);
   
//    fs.writeFile('test.txt', response, function () { 
//     console.log('Write operation complete.');
// });
console.log(response); 
res.json(response);
})  
app.listen(2000, function (err) {  
 
  if (err) console.log(err); 
	console.log("Server started"); 
  
})  
