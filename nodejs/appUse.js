const express = require('express')
const app = express()

app.use(function(req, res, next) {
  console.log('hello world')
  next()
})

app.use(function(req, res, next) {
  console.log('happy holidays')
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