const express  = require('express')();
const http     = require('http').createServer(express);
const io       = require('socket.io')(http);

express.get('/', (request, response) => {
  response.sendFile(__dirname+'/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', (message) => {//chat messageはイベントネーム
    io.emit('chat message', message)
  });
});

http.listen(3000, () => {
  console.log('listening on http://localhost:3000');
});

const connect = (socket) => {
  socket.on('chat message', (message) => {//chat messageはイベントネーム
    io.emit('chat message', message)
  });
}
