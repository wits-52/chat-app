const path=require('path');
const http=require('http');

const express=require('express');
const socketIO=require('socket.io');

const publicPath=path.join(__dirname,'../public');
var port=process.env.PORT||3000;
var app=express();
var server=http.createServer(app);
var io=socketIO(server);
var {generateMsg}=require('./utils/generateMsg');
app.use(express.static(publicPath));


io.on('connection',function(socket){
    console.log("new User Connected");
    socket.emit('newMessage',generateMsg("Admin","welcome to chatroom"));
    socket.broadcast.emit('newMessage',generateMsg("Admin","new user joined"));
    socket.emit('newMessage',generateMsg("Admin",'this is message'));
    socket.on('createMsg',(data)=>{
        console.log(data);
        io.emit('newMessage',generateMsg(data.from,data.message));
    })
socket.on('disconnect',function(){
    console.log("user disconnected");
});

});



server.listen(port,()=>{
    console.log("server started at port ",port);
});