const express=require('express');
const app=express();
const PORT=3000;
app.get('/user',function(req,res){
    res.send("handling GET request");
})
app.post('/user',function(req,res){
    res/send("handling post request");
})
app.delete('/remove',function(req,res){
    res.send("handling delete request");
})
app.listen(PORT,function(err){
    if(err) console.log("Error in server setup");
    console.log("server listing on port",PORT);
})