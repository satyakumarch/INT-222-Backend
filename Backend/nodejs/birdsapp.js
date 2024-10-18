var express = require('express');
var app = express();
var birds = require('./birds.js')

// ...

app.use(birds);
app.listen(2000);

