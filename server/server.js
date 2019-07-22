const path=require('path');
const http=require('http');

const express=require('express');
const socketIO=require('socket.io');

const publicPath=path.join(__dirname,'../public');
var port=process.env.PORT||3000;
var app=express();
var server=http.createServer(app);
var io=socketIO(server);

app.use(express.static(publicPath));


io.on('connection',function(socket){
    console.log("new User Connected");
    socket.emit('newMessage',{
        from:"ritik",
        text:"oye sun le..",
        time: new Date()
    })
    socket.on('createMsg',(data)=>{
        console.log("send msg: ",data)
    })
socket.on('disconnect',function(){
    console.log("user disconnected");
});

});



server.listen(port,()=>{
    console.log("server started at port ",port);
});