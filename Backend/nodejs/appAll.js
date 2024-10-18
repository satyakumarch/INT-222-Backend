const express = require('express')
const app = express()

app.all('/welcome', function(req, res, next) {
  console.log('only applied for routes that begin with /welcome')
  next()
})

app.all('/welcome/*', function(req, res, next) {
  console.log('only applied for routes that begin with /welcome/*')
  next()
})

app.get('/hello', function (req, res) {
    res.send('hello')
  })
app.get('/welcome', function (req, res) {
    res.send('welcome')
  })

app.get('/welcome/inside', function (req, res) {
    res.send('you are in')
  })

app.listen(3000)