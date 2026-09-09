function f1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hiiii");
            resolve();
        },4000);
    });
}
function f2() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("ABES");
            resolve();
        },1000);
    });
}  

f1().then(f2)
    .catch((err)=>{
        console.log("Error",err);
 });


// Drawback of promises is that we have to write .then() 
// for every function call which is also not a good practice.
// To overcome this problem we can use async await.
