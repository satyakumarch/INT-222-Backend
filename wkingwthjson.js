const fs=require('fs')
const { json } = require('stream/consumers')
//read a json file
fs.readFile('AZ1.json',"utf8",(err,data)=>
{
    if(err)
    {
        console.error("file doesnot exit")
    }
    else{
        // console.log(data)
        console.log(JSON.parse(data))

        
    }
}
)   

//WRITE  IN THE JSON FILE
const content=
{
    key7:"value",
    key8:29,
    key9:"ram",
    key10:30

}
const convert=JSON.stringify(content,null,2)
// fs.writeFile("AZ1.json",convert,(err)=>
// fs.writeFile("AZ1.json",convert,(err)=>
fs.writeFile("AZ1.json",convert,(err)=>
{
if(err)
{
    console.error("error is there")
    
}
else{
    console.log("file is updated")
}
});