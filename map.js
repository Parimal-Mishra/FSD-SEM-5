const num=[11,22,35,48,54,9,79,81,94];
const even=num.filter(val => val%2==0);
const sqr=even.map(val => val*val);
console.log("num: "+num);
console.log("even: "+even);
console.log("square: "+sqr);

//Difference for each and map is that for each is used to iterate over an array, 
// while map is used to create a new array by performing an operation on each element of the original array.