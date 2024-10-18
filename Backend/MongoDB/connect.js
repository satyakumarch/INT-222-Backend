const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/ecommerce")
.then(()=>{
    console.log("connect successful");
}).catch((err)=>{
    console.log(`no connection ${err}`)
})
const Schema=mongoose.Schema
const signupsch=new Schema({
    fname:{
        type:String,
        required:true,
        trim:True
    },
    lname:{
        type:String,
        required:true,
        trim:True
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
       
        trim:true
    },
})
const Student=model("Register",signupsch);
module.exports= Student;