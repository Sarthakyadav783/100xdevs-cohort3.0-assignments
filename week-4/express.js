const express=require('express');
const app=express();
const users=[{
    name:'John',
    kidneys:[{
        healhy:false
    }]
}];
app.use(express.json());
app.get("/",function(req,res){
    const userKidneys=users[0].kidneys;
    console.log(userKidneys);

})
app.post("/",function(req,res){

})
app.listen(3000);