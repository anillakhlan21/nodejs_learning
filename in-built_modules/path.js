const path = require('path');
// The Path module provides a way of working with directories and file paths.

const dir = '/usr/local/';
const file = '/index.js';

const filePath = path.join(dir, file);

console.log(filePath); // Outputs: /usr/local/index.js


var filename = path.basename('/Users/Refsnes/demo_path.js'); //Returns the last part of a path
console.log(filename);

const newDir = '/path/to/my/executables';
const currentPath = process.env.PATH;
process.env.PATH = `${newDir}${path.delimiter}${currentPath}`;
// console.log(process.env.PATH)
// console.log(currentPath)



const basePath = '/usr/local/bin';
const relativePath1 = '../lib/node_modules';
const resolvedPath1 = path.resolve(basePath, relativePath1);
console.log(resolvedPath1); // Outputs: /usr/local/lib/node_modules




const basePath1 = '/usr/local/bin';
const targetPath = '/usr/local/lib/node_modules';
const relativePath = path.relative(basePath1, targetPath);
console.log(relativePath); // Outputs: ../lib/node_modules


console.log(path.isAbsolute('/usr/local/bin')); // Outputs: true
console.log(path.isAbsolute('lib/node_modules')); // Outputs: false



const pathObject = {
    root: '/',
    dir: '/usr/local/bin',
    base: 'node',
    ext: '.js',
    name: 'node'
  }; // base  = name+ ext,
  const formattedPath = path.format(pathObject);
  console.log(formattedPath); 



const unnormalizedPath = '/usr/local/../bin/node';
const normalizedPath = path.normalize(unnormalizedPath);

console.log(normalizedPath); // Outputs: /usr/bin/node
