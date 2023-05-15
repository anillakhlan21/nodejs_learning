const os = require('os');

// Returns the CPU architecture of the operating system (e.g., 'x64' for 64-bit).
console.log(os.arch());  

//Returns an array of objects containing information about each CPU/core installed on the system.
console.log(os.cpus());

// Returns the amount of free system memory in bytes.
console.log(os.freemem());

// Returns the total amount of system memory in bytes.
console.log(os.totalmem());

// Returns the hostname of the operating system.
console.log(os.hostname());

// Returns an object containing information about the network interfaces available on the system.
console.log(os.networkInterfaces());

// Returns the operating system platform (e.g., 'win32' for Windows, 'linux' for Linux).
console.log(os.platform());

// Returns the operating system release.
console.log(os.release());

// Returns the default directory for temporary files on the system.
console.log(os.tmpdir());


// Returns the operating system type (e.g., 'Windows_NT' for Windows, 'Linux' for Linux).
console.log(os.type());

// Returns the number of seconds the system has been running.
console.log(os.uptime()) 

// Returns information about the currently logged in user, including their username and home directory.
console.log(os.userInfo());


console.log(os.endianness())

console.log(os.loadavg())

