const express=require('express')
const app=express()
const r=function(req,res,next){
    req.requestTime=Date.now()
    next()
}
app.use(r)
app.get('/',(req,res)=>{
let responseText='hello world how are you!<br>'
responseText+=`<small>Request at : ${req.requestTime}</small>`
res.send(responseText)
})
app.listen(3000)