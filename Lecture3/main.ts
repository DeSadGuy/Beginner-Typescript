// classic single linked list

type List<T> = {
  value: T;
  next: List<T> | null;
}



// testing some stuff 
const addUncurried : (t : [number, number]) => number = ([a, b]) => a + b;
const testadd = ([a,b] : [number, number]) => a + b;

// syntax for function 
const sumname: (a: number, b: number) => number = (a: number, b: number) => a + b;
const addfull: (args: [number, number]) => number = ([a, b]) => a + b;

//const add = (a: number) => (b: number) => (c: number) => a + b + c;

const addspecial: (a: number) => (b: number) => (c: number) => number = (a) => (b) => (c) => a + b + c ;

let user = {
  name: 'John',
  age: 30
};