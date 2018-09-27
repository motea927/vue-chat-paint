const WebSocket = require('ws');
 
const wss = new WebSocket.Server({ port: 8080 }, () => {
    console.log(`The WebSocket server start from: localhost:${wss.address().port}`);
});


 
wss.on('connection', (ws) => {

  ws.on('message', (data) => {
    wss.clients.forEach( (client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  })

});