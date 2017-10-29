const express = require('express')();
const http    = require('http').Server(express);
const io      = require('socket.io')(http);
const path    = require('path');

//アプリケーションルートを設定する
express.get('/', (request, response) => {
  response.sendFile(path.resolve('../../demo/index.html'));
});

//socket.ioを使ってconnectionイベントに処理
io.on();

//ポートを指定する
http.listen('3000', () => {
  console.log('listening on http://localhost:3000');
});
