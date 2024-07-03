// Devin Chen
// Student number: 1020159

import { type } from "os";

// Exercise 1
const Factors: (n: number) => string = (n) => {
    function inner(i: number): string {
        if (n <= 1){
            return "";
        }
        else if (i <= 0){
            return "";
        }
        else {
            if (n % i == 0){
                return inner(i-1) +" "+ i.toString();
            }
            else {
                return inner(i-1);
            }
        }
    }
    if (inner(n) === " 1"+ " " +n.toString())
        return "";
    return inner(n);
}

// console.log(Factors(64))
// console.log(Factors(11))
// Exercise 2

type Shape2D = {
    rows: number,
    colums: number,
    draw: (_:string) => string
}
const Shape2DCon = ([n1, n2]: [number, number]) : Shape2D => {
    return {
        rows: n1,
        colums: n2, 
        draw: function(char:string): string { 
            function outer(r:number, c:number): string {
                function inner(c: number): string {
                    if (c <= 0){
                        // i forgot that skip line was here
                        return "\f"
                        // found it
                    }
                    else {
                        return char.toString() + inner(c-1);
                    }
                }
                if (r <= 0){
                    return "";
                }
                else {
                    return "" + outer(r-1, c) + inner(c);
                }
            }
            return outer(this.rows, this.colums)
        }
    }
}
const box: Shape2D = Shape2DCon([2,3])
console.log(box.draw("*"))
console.log(Shape2DCon([1,5]).draw("# "))


// Exercise 3 

type Branch<T> = {
    kind: "empty"
}
|
{
    kind: "branch",
    value: T,
    First: Branch<T>
    Second: Branch<T>
}
const empty = <T>(): Branch<T> => {
    return {kind: "empty"}
}

const full: <T>(v: T) => (f: Branch<T>) => (s: Branch<T>) => Branch<T> = v => f => s => {
    return {
        kind: "branch",
        value: v,
        First: f,
        Second: s
    }
}

const addToBranch: <T>(input: T) => (tmp: Branch<T>) => Branch<T> = f => b => {
    if (b.kind === "empty"){
        return empty();
    }
    else if (b.First.kind === "empty" && b.Second.kind === "empty") {
        return b;
    }

}


