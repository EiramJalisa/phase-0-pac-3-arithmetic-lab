function add(a, b) {
    return a+b;
}

function subtract(a, b){
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

function increment(n) {
    return n+=1;
}

function decrement(n) {
    return n-=1;
}

// function makeInt(n) {
//     return parseInt();
// }

function makeInt(string) {
    return parseInt(string, 10);
}

function preserveDecimal(string) {
    return parseInt(2.222, 2.222)
}

function preserveDecimal(string) {
    return parseFloat(2.222)
}

function preserveDecimal(string) {
    return parseFloat(string, 2.222);
}