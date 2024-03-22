const express=require('express');
const app=express()
const PORT=4000;
app.use(function(req,res,next){
    console.log("Middleware called")
    next();
});

app.get('/user',function(req,res){
    console.log("/user request called");
    res.send("welcome to nodejs");
});
app.listen(PORT,function(err){
    if(err)console.log(err);
    console.log(`server listining on PORT ${PORT}`);
});
