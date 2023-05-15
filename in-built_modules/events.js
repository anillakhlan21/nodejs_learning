const fs = require('fs');
const events = require('events')

// const demoFile = fs.createReadStream('./demo.txt');

// demoFile.on('close', ()=>{
//     console.log('File is closed');
// })

// demoFile.on('data', (chunk)=>{
//     console.log(chunk.toString());
// })

// demoFile.on('end', ()=>{
//     console.log('File End')
// })

// demoFile.on('error', (err)=>{
//     console.log(err);
// })

// demoFile.on('open', (fd)=>{
//     console.log(fd)
// })

// demoFile.on('pause', ()=>{
//     console.log('File reading paused')
// })

// demoFile.on('readable', ()=>{
//     console.log('file is readable')
// })

// demoFile.on('ready', ()=>{
//     console.log('file is ready');
// })

// demoFile.on('resume', ()=>{
//     console.log('file reading is resumed');
// })


const customEvent = new events.EventEmitter();

const eventHandler = function(){
    console.log('i am event handler for scream event');
}

customEvent.on('scream', eventHandler)
customEvent.emit('scream');