console.log(`process architecture: ${process.arch}`)
console.log(`process PID: ${process.pid}`)
console.log(`process plateform: ${process.platform}`)
console.log(`process version: ${process.version}`)
console.log(`process architecture: ${process.arch}`)


console.log(`process cwd: ${process.cwd()}`)
console.log(`process hrtime: ${process.hrtime()}`)
console.log(`process memoryUsage: ${JSON.stringify(process.memoryUsage())}`)
// console.log(`process kill: ${process.kill()}`)

setTimeout(()=>{
    console.log(`process uptime: ${process.uptime()}`)
},1000)

console.log(process.env.PATH);
process.env.MY_VAR = 'hello';
console.log(process.env.MY_VAR);

