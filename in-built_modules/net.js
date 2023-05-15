const net = require('net');
// The Net module provides a way of creating TCP servers and TCP clients.
const server = net.createServer((socket) => {
  console.log('Client connected.');

  socket.on('data', (data) => {
    console.log(`Received ${data}`);
    socket.write(`Echo: ${data}`);
  });

  socket.on('end', () => {
    console.log('Client disconnected.');
  });
});

server.listen(8000, () => {
  console.log('Server listening on port 8000.');
});


const client = net.connect({host: 'localhost', port: 8000});
client.write('Hi, My name is anil')
client.on('data', (stream)=>{
  console.log('Client Read: ',stream.toString())
})