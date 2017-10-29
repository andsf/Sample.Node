const express  = require('express')();
const http     = require('http').Server(express);
const io       = require('socket.io')(http);
const path     = require('path');

express.get('/', (request, response) => {
  response.sendFile(path.resolve('../../demo/index.html'));
});

io.on('connection', (socket) => {
  socket.on('chat message', (message) => {//chat messageはイベントネーム
    console.log(message);
    io.emit('chat message', message)
  });
});

http.listen(3000, () => {
  console.log('listening on http://localhost:3000');
});
