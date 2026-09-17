import express from "express";

const app = express();

app.get("/",(req,res)=>{
    res.send("<h1></h1> Hello Express</h1>");
});

app.listen(3000,()=>console.log("The Server is Running"));

// server.on("error",(err)=>{
//     console.log()
// })