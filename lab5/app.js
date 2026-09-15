import express from "express";

const app = express();

app.get("/",(req,res)=>{
    res.send("<h1 Hello Express");
});

// app.use("*".at(req,res)=>{
//     res.send("route not found");
// });

app.listen(3000,()=>console.log("Server is Running"));