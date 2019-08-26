'use strict';

let WSServer = require('ws').Server;
let server = require('http').createServer();
let app = require('./app');

module.exports = server;

// Create web socket server on top of a regular http server
let wss = new WSServer({
  server: server,
  path: "/socket", // no trailing slash allowed!!!
});

// Also mount the app here
server.on('request', app); // handle all non-websocket requests by the express app

wss.on('connection', function connection(ws) {

  ws.on('message', function incoming(message) {

    console.log("Received message: ", message);
    
    wss.clients.forEach(client => {
      // if (client != ws) {
      //     client.send('New notification: ' + message);
      // }    
      client.send('New notification: ' + message);
    });

    // ws.send("Received message: " + message);
  });
  
});