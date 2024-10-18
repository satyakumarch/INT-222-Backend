var cookieSession = require('cookie-session')
var express = require('express')
var app = express()

//app.set('trust proxy', 1) // trust first proxy

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))

app.get('/', function (req, res, next) {
  if(req.session.views){
    req.session.views++;
    res.send("No. of visits "+ req.session.views);
 } else {
    req.session.views = 1;
    res.send("No. of visits "+ req.session.views);
 }
})

app.listen(2000)