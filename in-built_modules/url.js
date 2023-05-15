const url = require('url');
// The URL module splits up a web address into readable parts.
const adr = 'http://localhost:8080/default.htm?year=2017&month=february';

console.log(url.parse(adr,true).query)

console.log(url.parse(adr,true));