const express =require("express");
const app=express();
const port=8080;
const path=require("path");

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

const posts=[
    {
        username:"satya kumar",
        content:"i love coding."
    },
    {
        username:"Avinandan kumar",
        content:"Hardwork is important to achieve a successs."
    },
    {
        username:"Shivam kumar",
        content:"i got selected for my 1st internship."
    },
];

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})



app.listen(port,()=>{zz