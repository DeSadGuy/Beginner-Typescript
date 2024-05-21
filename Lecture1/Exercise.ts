// return a string containing all numbers from 0 to n. 
// Separate each number with a whitespace.
// 
function allNumber(n: number) : string {
    if (n <= 0) {
        return "0";
    } 
    else {
        return allNumber(n - 1) + " " + n.toString(); 
    }
}
console.log("Test allNumber: ");
console.log(allNumber(5) === "0 1 2 3 4 5" ? "Test passed" : "Test failed");
console.log(allNumber(0) === "0" ? "Test passed" : "Test failed");
console.log(allNumber(1) === "0 1" ? "Test passed" : "Test failed");
console.log(allNumber(2) === "0 1 2" ? "Test passed" : "Test failed");
console.log(allNumber(3) === "0 1 2 3" ? "Test passed" : "Test failed");
console.log("Test allNumber: done");


// return a string conaining all numbers from n to 0.
// Separate each number with a whitespace.
// do this reverse order 
function allNumberRev (n : number) : string {
    if (n <= 0) {
        return "0";
    }
    else{
        return n.toString() + " " + allNumberRev(n - 1);
    }
    
}
console.log("Test allNumberRev: ");
console.log(allNumberRev(5) === "5 4 3 2 1 0" ? "Test passed" : "Test failed");
console.log(allNumberRev(0) === "0" ? "Test passed" : "Test failed");
console.log(allNumberRev(1) === "1 0" ? "Test passed" : "Test failed");
console.log(allNumberRev(2) === "2 1 0" ? "Test passed" : "Test failed");
console.log(allNumberRev(3) === "3 2 1 0" ? "Test passed" : "Test failed");
console.log("Test allNumberRev: done");

//that returns a string containing all numbers from n to 0. Separate the numbers with a white space.
function allNumberRange(lower: number) :(upper: number) => string{
    return function InnerLoop(upper: number) : string {
        if (upper <= lower){ 
            return lower.toString();
        }
        else {
            return InnerLoop(upper - 1) + " " + upper.toString();
        }
    } ;
}

console.log("Test allNumberRange: ");
console.log(allNumberRange(0)(5) === "0 1 2 3 4 5" ? "Test passed" : "Test failed");
console.log(allNumberRange(0)(0) === "0" ? "Test passed" : "Test failed");
console.log(allNumberRange(0)(1) === "0 1" ? "Test passed" : "Test failed");
console.log(allNumberRange(0)(2) === "0 1 2" ? "Test passed" : "Test failed");
console.log(allNumberRange(0)(3) === "0 1 2 3" ? "Test passed" : "Test failed");
console.log("Test allNumberRange: done");








//that returns a string containing all numbers between lower and upper in reverse order. Separate the numbers with a white space.

function allNumberRangeRev (lower: number) : (upper: number) => string {
    return function innerLoop(upper: number) : string {
        if (upper <= lower){ 
            return lower.toString();
        }
        else {
            return upper.toString() + " " + innerLoop(upper - 1);
        }
    };
}

console.log("Test allNumberRangeRev: ");
console.log(allNumberRangeRev(0)(5) === "5 4 3 2 1 0" ? "Test passed" : "Test failed");
console.log(allNumberRangeRev(0)(0) === "0" ? "Test passed" : "Test failed");
console.log(allNumberRangeRev(0)(1) === "1 0" ? "Test passed" : "Test failed");
console.log(allNumberRangeRev(0)(2) === "2 1 0" ? "Test passed" : "Test failed");
console.log(allNumberRangeRev(0)(3) === "3 2 1 0" ? "Test passed" : "Test failed");
console.log("Test allNumberRangeRev: done");





// return a string containing all even numbers from 0 to n.
// Separate each number with a whitespace.
// ??? 
function allEvenRange( lower: number ) : (upper: number) => string {
    return function innerLoop(upper: number) : string {
        if (upper <= lower){
            return lower.toString();
        }
        else if (upper % 2 === 0){
            return innerLoop(upper - 1) + " " + upper.toString();
        }
        else {
            return innerLoop(upper - 1);
        }
    };
}

console.log("Test allEvenRange: ");
console.log(allEvenRange(0)(5) === "0 2 4" ? "Test passed" : "Test failed");
console.log(allEvenRange(0)(0) === "0" ? "Test passed" : "Test failed");
console.log(allEvenRange(0)(1) === "0" ? "Test passed" : "Test failed");
console.log(allEvenRange(0)(2) === "0 2" ? "Test passed" : "Test failed");
console.log(allEvenRange(0)(3) === "0 2" ? "Test passed" : "Test failed");

console.log("Test allEvenRange: done");


// return a string containing length asterisks 

function drawLine(length : number) : string {
    if (length <= 0) {
        return "";
    }
    else {
        return drawLine(length - 1) + "*";
    }
}

console.log("Test drawLine: ");
console.log(drawLine(5) === "*****" ? "Test passed" : "Test failed");
console.log(drawLine(0) === "" ? "Test passed" : "Test failed");
console.log(drawLine(1) === "*" ? "Test passed" : "Test failed");
console.log(drawLine(2) === "**" ? "Test passed" : "Test failed");
console.log(drawLine(3) === "***" ? "Test passed" : "Test failed");



// return a string containing length repetition of symbol 

function drawSymbols (symbol: string) : (length: number ) => string {
    return function innerLoop(length: number) : string { 
        if (length <= 0) {
            return "";
        }
        else {
            return innerLoop(length - 1) + symbol.toString();
        }
    };
}

console.log("Test drawSymbols: ");
console.log(drawSymbols("*")(5) === "*****" ? "Test passed" : "Test failed");
console.log(drawSymbols("*")(0) === "" ? "Test passed" : "Test failed");
console.log(drawSymbols("6")(6) === "666666" ? "Test passed" : "Test failed");
console.log(drawSymbols("?")(2) === "??" ? "Test passed" : "Test failed");
console.log(drawSymbols("!")(3) === "!!!" ? "Test passed" : "Test failed");


// return a string containing the binary representation of the input number( n >= 0). the binary representation is obtained using the following proceure: 
// 1. add to the end of the string the remainde of the division between the current number and 2. 
// 2. repeat the previouse step with `*n / 2*` until the number is 0.

function toBinary(n : number ) : string {
    if (n === 0){
        return "0";
    }
    else {
        return toBinary(Math.floor(n / 2)) + (n % 2).toString();
    } 
}

console.log("Test toBinary: ");
console.log(toBinary(5) === "101" ? "Test passed" : "Test failed");
console.log(toBinary(0) === "0" ? "Test passed" : "Test failed");
console.log(toBinary(1) === "1" ? "Test passed" : "Test failed");
console.log(toBinary(2) === "10" ? "Test passed" : "Test failed");
console.log(toBinary(3) === "11" ? "Test passed" : "Test failed");

// that returns a string containing the representation of the input number in an arbitrary base (the number must be positive). The algorithm is the same as above except you must take the remainder of `n` divided by `base` and pass `n / base` to the next step.

function toBase(n: number) : (base: number) => string {
    return function innerLoop(base: number) : string {
        if (n === 0){
            return "0";
        }
        else {
            return innerLoop(Math.floor(n / base)) + (n % base).toString();
        }
    };
}

console.log("Test toBase: ");
console.log(toBase(5)(2) === "101" ? "Test passed" : "Test failed");
console.log(toBase(0)(2) === "0" ? "Test passed" : "Test failed");
console.log(toBase(1)(2) === "1" ? "Test passed" : "Test failed");
console.log(toBase(2)(2) === "10" ? "Test passed" : "Test failed");
console.log(toBase(3)(2) === "11" ? "Test passed" : "Test failed");
console.log(toBase(5)(3) === "12" ? "Test passed" : "Test failed");
console.log(toBase(0)(3) === "0" ? "Test passed" : "Test failed");
console.log(toBase(1)(3) === "1" ? "Test passed" : "Test failed");
console.log(toBase(2)(3) === "2" ? "Test passed" : "Test failed");
console.log(toBase(3)(3) === "10" ? "Test passed" : "Test failed");
console.log(toBase(5)(4) === "11" ? "Test passed" : "Test failed");
console.log(toBase(0)(4) === "0" ? "Test passed" : "Test failed");
console.log(toBase(1)(4) === "1" ? "Test passed" : "Test failed");
console.log(toBase(2)(4) === "2" ? "Test passed" : "Test failed");

console.log("Test toBase: done");