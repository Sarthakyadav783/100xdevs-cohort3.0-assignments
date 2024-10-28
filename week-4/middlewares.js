const express=require('express');
const app=express();

function isOldEnoughMiddleware(req,res,next){
    const age=req.query.age;
    if(age>=12){
        next();
    }
    else{
        res.json({
            msg:"Sorry you are not old enough to ride",
        })
    }
}
app.use(isOldEnoughMiddleware)

app.get("/ride1",function(req,res){
    res.json({
        msg:"You are successfully riding ride 1",
    })
})
app.get("/ride2",function(req,res){
    res.json({
        msg:"You are successfully riding ride 2",
    })
})

app.listen(3003);