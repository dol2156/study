console.log('웹서버 만들기');
const express = require('express');
const app = express();
const port = 8080;

app.use("/", function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port);

console.log('http://localhost:' + port);

console.log('웹소켓 열기');
const WebSocket = require('ws');
const socket = new WebSocket.Server({
  port : 8081
});

socket.on('connection', (ws, req) => {
  ws.on('message', (msg) => {
    console.log('유저가 보낸 msg : ' + msg);
    ws.send('꺼져');
  });
});


