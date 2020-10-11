// Create client connection to server's socket.io
const socket = io();

const submit = document.querySelector('#basic-addon2');
const chatInput = document.querySelector('.form-control');
const text = document.getElementById('output');
// const user = document.querySelector('#name');

// 'click' is the event
// e is the callback function
// asynchronous programming - allows the program to keep running (reading the next line in the program) while working on an action that may take some time like reading a file
submit.addEventListener('click', e => {
  // prevents page refresh (the usual route when clicking button)
  e.preventDefault();
  
  // send the value to the server that is in the chatInput
  // 'chat' is a custom event
  socket.emit('chat', chatInput.value);
  chatInput.value = '';
})

// Now the client needs to listen to the broadcast from the server
socket.on('chat', msg => {
  text.innerHTML += '<p>' + msg + '</p>';
})