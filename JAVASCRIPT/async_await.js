function f1(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        console.log("ABES")
        resolve(); },1000);
   });
}

function f2(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        console.log("Hii")
        resolve(); },1000);
   });
}

async function test(){
    try{
        await f1();
        await f2();
    }
    catch(err){
        console.log("Error",err);
    } 
}

test();