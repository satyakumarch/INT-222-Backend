var express=require('express');
var app=express();
var birds=require('./bird.js')
app.use(birds);
app.listen(2000);