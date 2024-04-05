// const express =require('express')
// const app= express()
// app.get('/',function(req,res){
//     res.send("helloo world")
// })
// app.listen(8000)

var express = require('express');  
var app = express();  
app.use(express.static('public'));  
  
app.get('/form', function (req, res) {  
   res.sendFile( __dirname + "/" + "form.html" );  
})  
app.get('/process_get', function (req, res) {  
response = {  
       first_name:req.query.first_name,  
       last_name:req.query.last_name  
   };  
   console.log(response);  
   
   res.end(JSON.stringify(response));  
})  
var server = app.listen(8000, function () {  
  
  var host = server.address().address  
  var port = server.address().port  
  console.log("Example app listening at http://%s:%s", host, port)  
  
})