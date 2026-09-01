function sum(a,b){
    return a+b;
}

function sumWithMsg(sum,msg){
    const result = sum(10,20);
    const fresult = "Hi " + msg + " Your score is " + result;
    console.log(fresult);
}
//we need to pass the callback no maater what , we can change the name of the function 
//but we need to pass the callback function as a parameter to another function
sumWithMsg(sum,"Mr Om");