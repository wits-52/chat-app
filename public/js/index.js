var socket=io();
socket.on("connect",function(){
    console.log("Connected to server");
});
socket.on("newMessage",function(data){
    console.log("new msg recieved",data);
});
socket.emit('createMsg',{
    to:"yyhs",
    text:"k gyan bhai?"
});
socket.on("disconnect",function(){
    console.log("Disconnected from server");
});
