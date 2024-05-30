// just testing some stuff 

// interface
interface User {
  readonly name: string;
  readonly age: number;
  randomFunction: () => string; //takes no input and returns a string
}

const specialconst = (a: string, b: number,f: () => string): User => ({
    name: a,
    age: b,
    randomFunction: f
    });

interface data {
    readonly name: string;
    readonly age: number;
    readonly yeet: string;
    }

const d1 : data = {
    name: 'John',
    age: 30,
    yeet: 'hello'
    };
const d2 : data = {
    name: d1.name,
    age: d1.age,
    yeet: 'suprise'
    };
const d3 : data = {...d1, yeet: 'suprisesuprise'};
