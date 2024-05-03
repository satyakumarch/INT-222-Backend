// // // var a =BigInt('234678435678345678923456783456783456784567')
// // //  const male={hair:"black",eyes:"brown",complexion:"fair",age:20,weight:65}
// // // const male=["black","brown",1,2,3]
// // // to access properties of an object by using dot operator
// // // console.log(male.hair)
// // // by using square braces
// // // console.log(male["hair"])
// // // console.log(typeof(male))
// // // console.log(male[0])
// // // console.log()
// // // male.push()
// // // console.log(typeof(male))

// // // for(let i=0;i<=10;i++)
// // // {console.log(i)}
// // // while loop
// // // while(i<10)
// // // {console.log(i)
// // // i++;}
// // //do while
// // // do
// // // {console.log(i)
// // // i++;}
// // // while(i<10)



// // // {console.log(i)}
// // // traditional  for loop
// // // const male={hair:"black",eyes:"brown",complexion:"fair",age:20,weight:65}
// // // for(let i=0;i<Object.keys(male).length;i++)
// // // var length=console.log(Object.keys(male).length)
// // // // {
// // //     console.log(Object.keys(male)[i])
// // // }
// // // for in loop
// // // for(let key in male)
// // // {
// // //     console.log(male[key])

// // // }
// // // functions

// // var a=require('fs')
// // a.readFile('file.txt','utf8',(err,data)=>
// // {
// //     if(err)
// //     {
// //         console.error('error is there, may be your file is not present')
        
// //     }
// //     console.log(data)
// // })
// // try {
// //     const data = fs.readFileSync('file.txt', 'utf-8');
// //     console.log(data);
// //   } catch (err) {
// //     console.error(err);
// //   }
  
 

//   // 
//   var fs=require('fs')
//   try
//   {
//   const data=fs.readFileSync('file.txt','utf-8')
//   console.log(data)
//   }
  
//   catch(e){
//     console.error('error')
//   }
  
//   function square(n) {
//     return n * n;
//   }
//   var result = square(5);
//   console.log(result);
//   var fs=require('fs')
//   fs.appendFile("file.txt","i am not understanding instead of trying for ",(err)=>
//   {
//     if(err)
//     {console.error('error')
//   }
//   else{
//     console.log('file is successfully written')
//   }
//   })
//   fs.access("file.txt",fs.constants.F_OK,(err)=>
//   {
//     if(err)
//     {console.error('sorry file is not present')}
//     else{
//       console.log("file is there")
//     }
//   })
//   fs.unlink("file.txt",(err))
//   fs.rename
//   fs.open
//   fs.close
//   fs.copyFile
//   fs.stat

// // create a form in which you have to ask for user details,fetch thosendetails using java script
// // and display them in tabular format
// var buff=Buffer.alloc(10)
// console.log(buff)
// buff.write('write')
// var a =buff.toString()
// console.log(a)

// // method 2
// var buff2=new Buffer('node')
// method 3
// var buff3=Buffer.from([1,2,3,4])
// // lenght calculation
// var length=buff.length
// console.log(length)
// // concatination
// list=[buff1,buff]
// Buffer.concat(list)
// const path=require('path')
// const directory=path.basename("C:\Users\HP\Downloads\INT222\3rd unit.png")
// console.log(directory)
// const del=path.delimeter
// console.log(path.delimeter)
// delimeter
// normalize
// to namespace
// const o=require('os')
// const architecture=o.availableParallelism()
// console.log(architecture)
// week 2 activity
// creAte a file with name lpu.txt
// you have to use fs module to do the following 
// convert that in json
// read a json
// write a json file,open,close,rename,copy
// compress the same file using 
// brotli compression
// also decompress it
const express = require('express')
const app = express()
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.listen(3000)










































































