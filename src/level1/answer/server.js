const express = require('express')();
const http    = require('http').Server(express);

express.get('/', (request, response) => {
  response.send('hallo world');
});

http.listen('3000', () => {
  console.log('listening on http://localhost:3000');
});
