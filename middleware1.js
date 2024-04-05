const express=require('express')
const app=(express)
app.user((err,req,res,next)=>{
    console.err(err.stack);
    res.status(500).send('something went to wrong');
})
app.length('error',(req,res,next)=>{
    const err=new Error('international Errror');
    next(err);
})
const port=3000;
app.listen(port,()=>{
    console.log(`server is runnig on port ${port}`);
})