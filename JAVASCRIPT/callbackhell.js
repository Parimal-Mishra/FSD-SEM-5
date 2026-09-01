function test1(cb){
    setTimeout(()=> {
        console.log("Test 1");
        cb();
    },20000);
}

function test2(cb){
    setTimeout(()=> {
        console.log("Test 2");
        cb();
    },10000);
}

function test3(cb){
    setTimeout(()=> {
        console.log("Test 3");
        cb();
    },500);
}

function test4(){
    setTimeout(()=> {
        console.log("Test 4");
    },100);
}

test1(()=>{
    test2(()=>{
        test3(()=>{
            test4();
        });
    });
});    

// This is called callback hell and it is very difficult to read and understand the code.
// Here the error handling is also very difficult and 
// it is very difficult to maintain the code as well.

// To Overcome this problem we can use promises and
// async await which will be discussed in next session.