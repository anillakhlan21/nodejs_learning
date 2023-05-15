const http = require('http');

const server = http.createServer((request,response)=>{
    response.writeHead(200, {'Content-Type': 'text/plain'});
    // response.('Hello World!');
})

server.on('request', (req,response)=>{
    console.log("in request event")
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('In request event');
})

server.listen(3003,()=>{
    console.log('Server is running at http://localhost:3003/')
})

const options = {
    hostname: 'www.google.com',
    path: '/',
    method: 'GET'
  };

const request = http.request(options, (response)=>{
    console.log(`statusCode: ${response.statusCode}`);
    response.on("data", (data)=>{
        console.log(data.toString());
    })

})
request.on("error",(error)=>{
    console.log(error);
})
// request.end();



