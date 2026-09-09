function test1(cb){
    setTimeout(()=> {
        console.log("Test 1");
        cb();
    },20000);
}
function test2(){
    setTimeout(()=> {
        console.log("Test 1");
        cb();
    },10000);
}
function test3(){
    
}
function test4(){
    
}
test1();
test2();    
test3();
test4();