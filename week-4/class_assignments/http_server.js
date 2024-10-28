const express =require('express');
const app=express()

//route-handlers

app.get('/',function(req,res){
    res.send("Hello World");
})

app.listen(3001)