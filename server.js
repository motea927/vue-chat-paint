const express = require('express');
const WebSocket = require('ws');
const app = express();
const history = require('connect-history-api-fallback');

const port = process.env.PORT || 8081;

const server = app
               .use(history())
               .use(express.static('./'))
               .use(express.static('./dist'))
               .listen(port, () => console.log(`server started on ${ port }`));

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.on('message', (data) => {
      wss.clients.forEach( (client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(data);
        }
      });
    })
  
});

