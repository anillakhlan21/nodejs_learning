const dns = require('dns');

// console.log(dns.getServers())

// const servers = ['8.8.8.8', '8.8.4.4']; // Google's DNS servers
// dns.setServers(servers);


// synchronous method
// dns.lookup('cloud.altorumleren.com', (err, address, family) => {
//     if (err) throw err;
//     console.log(`IP address: ${address} , ${family}`);
//   });

// dns.lookupService('8.8.8.8', 53, (err, hostname, service) => {
//   if (err) throw err;
//   console.log(`Hostname: ${hostname}, Service: ${service}`);
// });


// dns.resolve() is an asynchronous method while dns.lookup() is a synchronous method
dns.resolve('cloud.altorumleren.com', 'A', (err, addresses) => {
    if (err) throw err;
    console.log(`IP addresses: ${JSON.stringify(addresses)}`);
});


dns.resolve4('example.com', (err, addresses) => {
    if (err) throw err;
    console.log(`IPv4 addresses: ${JSON.stringify(addresses)}`);
});


dns.resolve6('example.com', (err, addresses) => {
    if (err) throw err;
    console.log(`IPv6 addresses: ${JSON.stringify(addresses)}`);
});


// dns.resolveCname('www.example.com', (err, addresses) => {
//     if (err) throw err;
//     console.log(`CNAME records: ${JSON.stringify(addresses)}`);
// });

// dns.resolveMx('www.example.com', (err, addresses) => {
//     if (err) throw err;
//     console.log(`Mx records: ${JSON.stringify(addresses)}`);
// });

dns.reverse('8.8.8.8', (err, hostnames) => {
    if (err) throw err;
    console.log(`Hostnames: ${JSON.stringify(hostnames)}`);
});

dns.resolveTxt('example.com', (err, records) => {
    if (err) throw err;
    console.log(`TXT records: ${JSON.stringify(records)}`);
  });

  dns.resolvePtr('example.com', (err, addresses) => {
    if (err) throw err;
    console.log(`PTR records: ${JSON.stringify(addresses)}`);
  });