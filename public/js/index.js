
var socket=io();
socket.on("connect",function(){
    console.log("Connected to server");
});
socket.on("disconnect",function(){
    console.log("Disconnected from server");
});

socket.on("newMessage",function(data){
    console.log(data);
});
//socket.emit('createMsg',{from:"user",message:"user bheje msg"});
