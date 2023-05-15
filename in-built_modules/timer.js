console.log("before set immediate")

let immediate = setImmediate(()=>{
    console.log("callback for setimmediate")
})
console.log("after set immediate")


let i =0;
let interval = setInterval(()=>{
    console.log(`i: ${i++}`);
},1000)


let timeout = setTimeout(()=>{
    console.log(`timeout i: ${i}`);
    clearInterval(interval);

},5000);

// clear time functions
clearImmediate(immediate);


// clearTimeout(timeout);

