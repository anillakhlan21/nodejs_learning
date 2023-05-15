const cluster = require('cluster');
const http = require('http');
/* 
* The cluster module provides a way of creating child processes that runs simultaneously 
and share the same server port.

Node.js runs single threaded programming, which is very memory efficient, but to take 
advantage of computers multi-core systems, the Cluster module allows you to easily create 
child processes that each runs on their own single thread, to handle the load.

*/
// if (cluster.isWorker) {
//     console.log('I am a worker');
// } else {
//     console.log('I am a master');
//     cluster.fork();
//     cluster.fork();
// }

// cluster.fork(): This method creates a new worker process that will execute the same 
// code as the current process. Here's an example:
const numCPUs = require('os').cpus().length;
// console.log('No of CPUs: ', numCPUs)
// if (cluster.isMaster) {
//   console.log(`Master ${process.pid} is running`);

//   // Fork workers.
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }

//   cluster.on('exit', (worker, code, signal) => {
//     console.log(`worker ${worker.process.pid} died`);
//   });
// } else {
//   console.log(`Worker ${process.pid} started`);
// }


/*
cluster.isMaster: This property returns true if the current process is the master process 
in the cluster, and false otherwise. Here's an example:
*/

// if (cluster.isMaster) {
//     console.log('I am the master process');
//   } else {
//     console.log('I am a worker process');
//   }


  /* 
  worker.process: This property returns an object representing the worker process. 
  Here's an example:
  */

//   if (cluster.isMaster) {
//     const worker = cluster.fork();
//     console.log(`Worker process ID is ${worker.process.pid}`);
//   } else {
//     console.log(`Worker ${process.pid} started`);
//   }




  /* 
  cluster.disconnect(): This method disconnects all worker processes from the master 
  process. Here's an example:
  */
  if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);
  
    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }
  
    // Disconnect all workers after 30 seconds.
    setTimeout(() => {
      console.log('Disconnecting all workers');
      cluster.disconnect();
    }, 30000);
  } else {
    http.createServer((req, res) => {
      res.writeHead(200);
      res.end(`Hello from worker ${process.pid}\n`);
    }).listen(8000);
  
    console.log(`Worker ${process.pid} started`);
  }