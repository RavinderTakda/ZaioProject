const express=require("express");
const connection = require("./config/db");
const app=express();
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("Welcome to home page")
})



app.get("/users",async(req,res)=>{
    const usersData=await UsersModel.find();
    res.send(usersData)
})


app.listen(8000,async()=>{
    try{
        await connection,
        console.log("Connection to Mongodb Successfull");
    }
    catch(err){
        console.log("Error connection to db")
    }
    console.log("Listening to server 8000")
})