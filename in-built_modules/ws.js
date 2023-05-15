const WebSocket = require('ws');

// Create a new WebSocket server
const server = new WebSocket.Server({ port: 8080 });

// Handle incoming WebSocket connections
server.on('connection', (socket) => {
  console.log('Client connected.');

  // Handle incoming WebSocket messages
  socket.on('message', (message) => {
    console.log(`Received message: ${message}`);

    // Broadcast the message to all connected clients
    server.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  // Handle WebSocket errors
  socket.on('error', (error) => {
    console.error(`WebSocket error: ${error.message}`);
  });

  // Handle connection termination
  socket.on('close', () => {
    console.log('Client disconnected.');
  });
});

console.log('WebSocket server listening on port 8080.');