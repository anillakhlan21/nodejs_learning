/* 
* There are four types of streams in Node.js:

Readable streams: These streams are used to read data from a source, such as a file or network socket.

Writable streams: These streams are used to write data to a destination, such as a file or network socket.

Duplex streams: These streams are both readable and writable, and can be used for tasks such as implementing a network protocol.

Transform streams: These streams are a special type of duplex stream that can modify the data as it passes through, such as compressing or encrypting data.
*/


const fs = require('fs');
const net = require('net');
const http = require('http');
const url = require('url');
// const ws = fs.createWriteStream('output.txt');

// ws.write('Hello');
// ws.write('World');
// ws.end();

// ws.on('finish', () => {
//   console.log('Data written to file.');
// });



const server1 = http.createServer();

// server1.on('request', (req, res)=>{
//    const fileName ='./in-built_modules/'+ url.parse(req.url, true).query['file']
//     const rstream = fs.createReadStream(fileName);
//     rstream.on('data', (chunk)=>{
//         res.write(chunk.toString());
//     })

//     rstream.on('end', ()=>{
//         res.end();
//     })

//     rstream.on('error', (err)=>{
//         res.end("file not found");
//     })
// })

// server1.listen(8080);

const server = net.createServer((socket) => {
  console.log('Client connected.');

  socket.on('data', (data) => {
    console.log(`Received ${data.length} bytes of data.`);
    socket.write(`Echo: ${data}`);
  });

  socket.on('end', () => {
    console.log('Client disconnected.');
  });
});

server.listen(8000, () => {
  console.log('Server listening on port 8000.');
});
