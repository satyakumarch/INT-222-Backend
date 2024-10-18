// var x
// function calculation(p,q)
// {
//     let y=10
//    return p-q
// }
// var a=calculation(29,19)
// console.log(a)
// console.log(x)
// console.log(y)
// console.log(x)
// let a=10
// let b=10.5
// let c=a+b
// console.log(c)
// var name="mamta"
// console.log(typeof(name))
// var term=true
// let number=BigInt(234567823456783456785678567856786785678678)
// var a;
// function display()
// {
//     console.log('int222')
//     let x=10
// }
// var dis=display()
// console.log(dis)
// console.log(x)
// console.log(a)
// let male=[20,65,45,45,67]
// There are different types of JavaScript operators:
// Arithmetic Operators
// Assignment Operators
// // Comparison Operators
// // String Operators
// // Logical Operators
// // Bitwise Operators
// // Ternary Operators
// // Type Operators
// // spread
// // rest
// // we are about to start arithmetic operators
// // var a=10
// // var b=20
// // var c =a+b
// // console.log(c)
// // const a=[10,20,30,40,50,60]
// // for (let i=0;i<=a.length;i=i+2)
// // {
// //     console.log(a[i])
// // }
// // for (let i of a)
// // {console.log(i)}
// // const male={hair:"black",eye:"brown",complexion:"fair",age:20,weight:60}
// // for(let i=0;i<Object.keys(male).length;i++)
// // var length=console.log(Object.keys(male).length)
// // to print the keys
// // console.log(Object.keys(male))
// // to print the values
// // console.log(male[Object.keys(male)[i]])
// // for (let key in male)
// // {
// //     console.log(key)
// // }
// // const square=function (a)
// // {return a*a}

// // console.log(square(5))
// // conditional statemets
// // if statement
// function  eligible(age)
// {
//     switch(age)
//     {
//         case 10:
//     }
// }
// var eligiblity=eligible(20)
// console.log(eligiblity)

// fs.access("abc.txt",fs.constants.F_OK,(err)=>
// {
//     if(err)
//     {
//         console.error('file is not present')
//     }
//     else{
//         console.log('file is there')
//     }
// }
// )
// a.appendFile('abc.txt','this is node',(err)=>
// {
//     if(err)
//     {
//         console.error('some type of error')
//     }
//     else
//     {
//         console.log("file is created")
//     }
// })
// read a file
// const fs=require('fs')
// {
// try
// {
// const val=fs.readFile("abc.txt",)
// console.log(val)
// }
// catch(e)
// {
//     console.error("sorry")
// }
// }
// function sum(a,b)
// {
//     return a+b
// }
// const result=sum(3,4)
// console.log(result)
// open
// // close
// // unlink
// // rename
// // copy
// // // stats
// // // mkdir
// // const fs=require('fs')
// // fs.readFile("bk.json","utf-8",(err,data)=>
// // {
// //     if(err)
// //     {
// //         console.error('error')
// //     }
// //     else{
// //     // const a=JSON.parse(data)
// //     console.log(JSON.parse(data))
// // }
// // }
// // )
// // start working with the buffer
// const one=Buffer.alloc(3)
// one.write('hello')
// const st=one.toString()
// console.log(st)
// // second method
// const two=new Buffer("my buffer")
// const t=two.toString()
// console.log(t)
// // third method
// const third=Buffer.from([1,2,3])
// console.log(third)
// // fourth method
// const four=Buffer.from("string")
// // length of buffer
// console.log(four.length)
// concat=buffer1.concat(buffer2
// const your=require('url')
// const actual="http://www.lpu.co.in/?course=cse",
// const website=your.parse(actual)
// console.log(website)
// 

// extname
// normalize
// basename
// resolve
// week 2 activity
// make a file and objectify that file. file
// should be in json format.use the compression 
// method to compress that file and decompress 
// it again using stearm method and file module
// const express = require('express')
// const app = express()
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
// app.listen(3000)
// const statuscode=require('http')
// console.log(statuscode.STATUS_CODES)
// week 3 activity
// create a local node js local server,
// handle all the url and query processing
const express = require('express')
const app = express()
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.listen(3000)



































