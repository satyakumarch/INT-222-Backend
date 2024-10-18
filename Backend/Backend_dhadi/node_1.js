//write file
// const fs=require('fs');
// fs.writeFile('satya.txt',"hello how are you?",function(err){
//     if(err)console.error(err);
//     else console.log("done");
// })


// append file
// const { error } = require('console');
// const fs=require('fs');
// fs.appendFile('satya.txt',"I am fine and you",function(err){
//     if(err)
//     console.log(error)
// else{
//     console.log("done");
// }
// })

//rename file
const fs=require('fs');
fs.rename('satya.txt','hello.txt',function(err){
    if(err)console.log(err);
    else{
        console.log("done");
    }
})

