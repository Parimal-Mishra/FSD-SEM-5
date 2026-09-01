const num=[11,22,35,48,54,9,79,81,94];
const even=num.map(val => val%2==0);
console.log("num: "+num);
console.log("even: "+even);

//Difference for each and map is that for each is used to iterate over an array and perform an action on each element, 
// while map is used to create a new array by transforming each element of the original array.