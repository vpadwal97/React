const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const fs = require('fs');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());

let messages = []; // Array to store messages

io.on('connection', (socket) => {
  console.log('A user connected');

  // Send stored messages to new client upon connection
  socket.emit('initialMessages', messages);

  socket.on('message', (data) => {
    console.log(data);
    messages.push(data); // Add new message to the array
    io.emit('message', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 3001;
const HOST = '192.168.58.42';
server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});

// Save messages to JSON file when the server shuts down
process.on('SIGINT', () => {
  fs.writeFileSync('./messages.json', JSON.stringify(messages, null, 2));
  process.exit();
});
