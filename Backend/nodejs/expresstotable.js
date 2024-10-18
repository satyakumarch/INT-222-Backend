var express = require('express');  
var app = express();  
var bodyParser = require('body-parser');   
var fs = require('fs');
app.use(bodyParser.urlencoded({extended:false})) 
app.get('/', function (req, res) {  
   res.sendFile( __dirname + "/" + "form1.html" );  
})  
app.post('/apply', function (req, res) {   
   response = {  
    first_name:req.body.first_name,  
    last_name:req.body.last_name,
    gender: req.body.gender,
    adrr:req.body.addr 
   };  
  res.write('<table border=2>')
  res.write('<tr><th>First Name</th><th>Last Name</th><th>Gender</th><th>Address</th></tr>')
  res.write('<tr>')
  res.write('<td>'+req.body.first_name+'</td>')
  res.write('<td>'+req.body.last_name+'</td>')
  res.write('<td>'+req.body.gender+'</td>')
  res.write('<td>'+req.body.addr+'</td>')

  res.write('</tr>')
  res.write('</table>');
res.end();
})  
app.listen(2000, function (err) {  
 
  if (err) console.log(err); 
	console.log("Server started"); 
  
})  
