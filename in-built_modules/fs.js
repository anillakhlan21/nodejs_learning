const fs = require('fs');

// fs.writeFile('demoFile.txt', 'Hi, My Name is Anil', (err)=>{
//     if(err) throw err;
//     console.log('File Saved');
// })


// fs.readFile('./demoFile.txt', (err,data)=>{
//     if(err) throw err;
//     console.log(data.toString());
// })

// fs.appendFile('./demoFile.txt', '\nThis is a new Line.',(err)=>{
//     if(err) throw err;
//     console.log("Updated");

// })

// fs.unlink('./demoFile.txt', (err)=>{
//     if(err) throw err;
//     console.log("File Deleted");
// })

// fs.rename('./demo.txt', './npm_packages/demoFile.txt',(err)=>{
//     if(err) throw err;
//     console.log('File move and renamed');
// })

const data = fs.readFileSync('./in-built_modules/os.js', {encoding: 'ascii'});
console.log(data)
