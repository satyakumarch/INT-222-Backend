const fs=require('fs')
// read a json file
// fs.readFile('AZ1.json',"utf8",(err,data)=>
// {if(err)
//     {
//      console.error("file doesnot exist")   
//     }
//     else
//     {
//         const a=JSON.parse(data)
//         console.log(a)
//     }
// }
// )
// writing in the json file
const content=
{
    key7:"value",
    key8:29

}
const convert=JSON.stringify(content,null,2)
fs.appendFile("AZ1.json",convert,(err)=>
{
    if(err)
    {
        console.error("error is there")

    }
    else{
        console.log("file is updated")
    }
}
)