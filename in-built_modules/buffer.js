const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer();

// server.on('request', (req, res)=>{
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

// server.listen(8080);
function createBufferFromString(str){
    return Buffer.from(str);
}

function createZeroFilledBuffer(length){
    return Buffer.alloc(length);
}

function concatenateBuffers(buf1, buf2){
    return Buffer.concat([buf1, buf2])
}
function compareBuffers(buf1, buf2){
    return Buffer.compare(buf1, buf2)
}


const name = 'anil kumar, ';
const buf = Buffer.from(name);
console.log(buf);

const buf1 = Buffer.alloc(8);
console.log(buf1)
buf1.write('Hello How are you?')
console.log(buf1.toString())

const newBuf = Buffer.concat([buf, buf1])
console.log(newBuf.toString());

const buf4 = Buffer.from('zbc3');
const buf5 = Buffer.from('def');
const cmp = Buffer.compare(buf4, buf5);
console.log(cmp)

console.log(Buffer.byteLength('anil kumar'))
console.log(buf4.length)
console.log(buf4[0])
console.log(buf4.buffer)

console.log(Buffer.isBuffer(buf4))

console.log(buf4.toJSON())

console.log(JSON.stringify(buf4.keys()))


module.exports = {
    createBufferFromString,
    createZeroFilledBuffer,
    concatenateBuffers,
    compareBuffers
  };