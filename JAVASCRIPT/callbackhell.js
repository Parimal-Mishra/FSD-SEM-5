function step1(value, callback) {
    callback(value + 10);
}
function step2(value, callback) {
    callback(value + 10);
}
function step3(value, callback) {
    callback(value + 10);
}

// --- CALLBACK HELL ---
step1(0, (result1) => {
    step2(result1, (result2) => {
        step3(result2, (result3) => {
            console.log(result3); // Outputs: 30
        });
    });
});
