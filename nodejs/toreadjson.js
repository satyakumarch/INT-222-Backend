const fs=require('fs')
fs.readFile('au.json','utf-8',(err,data)=>
{
    if(err)
    {
        console.error('error')
    }
    else{
    const a=JSON.parse(data)
console.log(a)
}
}
)