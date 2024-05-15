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
    return (upper: number) => "";
}







//that returns a string containing all numbers between lower and upper in reverse order. Separate the numbers with a white space.

function allNumberRangeRev (lower: number) : (upper: number) => string {
    return (upper: number) => "";
}





// return a string containing all numbers from 0 to n.
// Separate each number with a whitespace.
// ??? 
function allEvenRange( lower: number ) : (upper: number) => string {
    return (upper: number) => "";
}

// return a string containing length asterisks 

function drawLine(length : number) : string {
    return "";
}

// return a string containing length repetition of symbol 

function drawSymbols (symbol: string) : (length: number ) => string {
    return (length: number) => "";
}

// return a string containing the binary representation of the input number( n >= 0). the binary representation is obtained using the following proceure: 
// 1. add to the end of the string the remainde of the division between the current number and 2. 
// 2. repeat the previouse step with `*n / 2*` until the number is 0.

function toBinary(n : number ) : string {
    return "";
} 

// that returns a string containing the representation of the input number in an arbitrary base (the number must be positive). The algorithm is the same as above except you must take the remainder of `n` divided by `base` and pass `n / base` to the next step.

function toBase(n: number) : (base: number) => string {
    return (base: number) => "";
}