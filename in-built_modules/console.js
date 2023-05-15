const fs = require('fs');



const name = 'John';
const age = 30;
const hobbies = ['reading', 'gaming', 'traveling'];

console.log('Hello, world!');
console.log(`My name is ${name} and I am ${age} years old.`);
console.warn('Warning: This operation may be unsafe.');
console.info('Here are some of my hobbies:');
console.dir(hobbies);
console.time('operation');
// perform some long-running operation here
console.timeEnd('operation');
console.trace();



const outStream = fs.createWriteStream('./out.log');
const errStream = fs.createWriteStream('./err.log');
const myConsole = new console.Console(outStream, errStream);

myConsole.log('This message will be written to out.log');
myConsole.error('This message will be written to err.log');

myConsole.warn = function(message) {
  const warnStream = fs.createWriteStream('./warn.log', { flags: 'a' });
  warnStream.write(`Warning: ${message}\n`);
  warnStream.end();
}

myConsole.warn('This message will be written to warn.log');