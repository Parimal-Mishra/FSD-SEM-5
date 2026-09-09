function login(username, password, callback) {
    if (username === "admin" && password === "1234") {
        callback("hello");
    } 
    else {
        callback("invalid");
    }
}

login("admin", "1234", function(message) {
    console.log(message);
});