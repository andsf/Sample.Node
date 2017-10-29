const express = require('express')();
const http    = require('http').Server(express);
const io      = require('socket.io')(http);
const path    = require('path');

//アプリケーションルートを設定する
express.get('/', (request, response) => {
  response.sendFile(path.resolve('../../demo/index.html'));
});

//コンソール画面に「http://localhost:3000」にアクセスしたら、
//「user connected on chat page.」を表示するように設定してみる
io.on();

//ポートを指定する
http.listen('3000', () => {
  console.log('listening on http://localhost:3000');
});
