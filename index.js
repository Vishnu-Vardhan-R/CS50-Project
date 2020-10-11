// Import express 
const express = require('express');

// Initialize express
const app = express();

// Create http server
const server = require('http').createServer(app)

const path = require('path');

// Import socket.io and initialize socket.io in our server
const io = require('socket.io')(server);


// When receiving request from client, we can send data
app.get('/', (req, res, next) => {
    // another way of writing the above statement
    res.sendFile( __dirname + '/index.html') 
})

app.use(express.static( path.join(__dirname) ))

// socket parameter is from client (app.js)
io.on('connection', socket => {
    // Added socket.id
    console.log(socket.id + ' is connected');

    socket.on('chat', message => {
        io.emit('chat', message);
        console.log('message from', socket.id, ':', message);
    })
    
})

// Create port to listen to 
const port = process.env.PORT || 5000;

server.listen(port, () => {
    console.log('listening on:', port)
})

