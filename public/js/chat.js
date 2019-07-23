
var socket = io();
socket.on('connect', function () {
  console.log('Connected to server');
});
var user;
  function getName(){
    user=localStorage.getItem('name');
    
  }
socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
  if(message.from===user)
  message.from="You";
  if(message.from==="Admin")
  message.from=" ";
  var li = jQuery('<li></li>');
  if(message.from!==" ")
    li.text(`${message.from}: ${message.text}`);
  else
    li.text(`${message.text}`); 
  jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function (e) {
  e.preventDefault();
  var msg=jQuery('[name=message]').val();
  
  document.getElementById('message-form')['message'].value="";
  socket.emit('createMessage', {
    from: user,
    text: msg
  }, function () {

  });
});
