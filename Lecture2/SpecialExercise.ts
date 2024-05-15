/* 
make a function that has de following stuff in it:
- parameter = begin: number
- parameter = end: number
- parameter = special: function that
*/

// example of a function that returns a function
function plusnormal(a: number, b: number) : number {
    return a + b;
}

function plustest(a: number) : (b: number) => number {
    return b => a + b;
}

console.log(plusnormal(1, 2));
console.log(plustest(1)(2));