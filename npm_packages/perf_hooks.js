// Nodejs Performance hooks(perf_hooks)
const {
    performance,
    PerformanceObserver
} = require('perf_hooks');

/* 
When thinking of measuring the time that our application needs to perform tasks, 
the first thing that comes to mind might be the Date object
*/
const start = (new Date()).getTime();
setTimeout(() => {
    const end = (new Date()).getTime();
    console.log(end - start);
}, 500);

// Performance Node Timing
setTimeout(() => {
    console.log('setTimeout', performance.nodeTiming);
}, 1000);

setTimeout(() => {
    process.on('exit', () => {
        console.log('setTimeout', performance.nodeTiming);
    })
}, 1000);







function someFunction() {
    console.log('hello world');
}
//function that would just console.log "hello world"
const wrapped = performance.timerify(someFunction);
// would store the performance matrix of the function passed in timerify
const obs = new PerformanceObserver((list) => {
    console.log(list.getEntries()[0].duration);
    //this would console log the duration
    obs.disconnect();
});
obs.observe({
    entryTypes: ['function']
});
/*this takes an array and is required to get the
timing details and entryTypes is required in any
type of performance observer */
// A performance timeline entry will be created
wrapped();