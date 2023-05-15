const crypto = require('crypto');

const data = 'Hello, world!';
const hash = crypto.createHash('sha256').update(data).digest('hex');

console.log(`Hash: ${hash}`);

const message = 'Hi Anil';
const key = 'my-secret-key';
const hmac = crypto.createHmac('sha256',key).update(message).digest('hex');
console.log(`Hash: ${hmac}`);



const iv = Buffer.alloc(16, 0); // Initialization vector
const message1 = 'Hello, World!';
const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);

let encrypted = cipher.update(message1, 'utf8', 'hex');
encrypted += cipher.final('hex');

console.log(`Encrypted message: ${encrypted}`);
