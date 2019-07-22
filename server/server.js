const path=require('path');

const express=require('express');

const publicPath=path.join(__dirname,'../public');
var port=process.env.PORT||3000;
var app=express();
app.use(express.static(publicPath));
/*
app.get('/',(req,res)=>{
    res.send();
});*/








app.listen(port,()=>{
    console.log("server started at port ",port);
});