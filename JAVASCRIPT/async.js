console.log("Task 1");

setTimeout(()=> {
    console.log("Task x");
},200);

console.log("Task 2");

setTimeout(()=> {
    console.log("Task 3");
},20);

console.log("Task 4");

console.log("Task 5");

// SetTimeout is acting as a delay and any statement under it is executed at last even if it takes very less time 
// Output -> 1 2 4 5 3 x