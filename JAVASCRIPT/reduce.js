const num=[11,22,35,48,54,9,79,81,94];
const even=num.filter(val => val%2==0);
const sqr=even.map(val => val*val);
const sum=sqr.reduce((i,s)=> i+s);
console.log("num: "+num);
console.log("even: "+even);
console.log("square: "+sqr);
console.log("sum: "+sum);