Types in Functional Programming
First, you need to understand the following concepts:

The type keyword
The interface keyword
Functional programming techniques - Currying
Functional programming techniques - Immutability
Functional programming techniques - Recursion
The term - Record
Immutable Data Structures
For functional programming, it is important to understand the concept of immutability.

Immutable data structures are those data structures that cannot be changed after they are created.
Consider the following example:
```typescript	
let user = {
    name: 'John',
    age: 30
}; 

function changeName(user, newName) {
    user.name = newName; 
    return user; 
}
```
In the above example, the function changeName changes the name of the user object. Consider a scenario where multiple operations are happening in the application and the user object is being passed around to different functions. This means that some code doesn't know that the user object has been changed. This can lead to bugs in the application. To avoid this, we can use immutable data structures.

Currying
Currying is a technique of evaluating functions with multiple arguments, into a sequence of functions with a single argument.

Consider the following example:
```typescript	
function applyDiscount(price, discount) {
    return price - price * discount; 
}
// usage
applyDiscount(100, 0.1); // 90
applyDiscount(100, 0.2); // 80
```
Here, the applyDiscount function takes two arguments, price and discount. But if we want to apply the same discount to multiple prices, we have to pass the discount argument every time. We can use currying to create a new function that takes only the discount argument.
```typescript	
function applyDiscount(discount) {
    return function(price) {
        return price - price * discount; 
    }
}
// usage
const tenPercentDiscount = applyDiscount(0.1);
tenPercentDiscount(100); // 90
tenPercentDiscount(200); // 180
```
Here, the applyDiscount function is curried to create a new function tenPercentDiscount that takes only the price argument.

Summary:

Perks of using currying:
Code reusability
Partial application
Lazy evaluation

Recursion
Recursion is a technique of solving a problem where the solution depends on solutions to smaller instances of the same problem.

Example of recursion:
```typescript
function factorial(n) {
    if (n === 0) {
        return 1; 
    }
    return n * factorial(n - 1); 
}
// usage
factorial(5); // 120
```
Reasons to use recursion:

Immutability
Statelessness
No loops

Record - Type, Interface Keyword => TypeScript
A record is a data structure that stores data like key-value pairs, similar to a dictionary in Python. There are two ways to define a record in TypeScript:
```typescript
// using the type keyword
type User = {
    name: string;
    age: number;
}
// using the interface keyword
interface UserInterface {
    name: string;
    age: number;
}
// usage 
const user: User = {
    name: 'John',
    age: 30
}

const userInterface: UserInterface = {
    name: 'John',
    age: 30
}
```	
Using the type keyword
Using the interface keyword
Both type and interface keywords can be used to define a record in TypeScript, but there are some differences between them.

The type keyword can be used to define a union type, intersection type, and primitive type.
The interface keyword can be extended and implemented.
Tuples
Tuples are a data structure that can store multiple values of different types. You can define a tuple in TypeScript using the following syntax: [datatype1, datatype2, ...] = [value1, value2, ...]
```typescript	
let randomT: [string, number] = ['John', 30];
```

Tuples are fixed-length arrays. Accessing elements of a tuple:
```typescript
let randomT: [string, number] = ['John', 30];
let name = randomT[0]; // John
let age = randomT[1]; // 30
```
Currying
Normally for functional programming, you want to use currying. For example:
```typescript	
function add(a: number, b: number) {
    return a + b; 
}
// currying
function add(a: number) {
    return function(b: number) {
        return a + b; 
    }
}
// or 
const add = (a: number) => (b: number) => a + b;
``` 
But there is an alternative way for currying and that is uncurrying with Tuple.

Uncurrying
Uncurrying is the opposite of currying. It is a technique of converting a curried function into a function that takes multiple arguments.
```typescript
// normally uncurried function
const add = (a: number, b: number) => a + b;
// tuple uncurried function
const addT = ([a, b]: [number, number]) => a + b;
// Full version for details 
const addfull: (args: [number, number]) => number = ([a, b]) => a + b;
```
Partial Application
Partial application is a technique of fixing a number of arguments to a function, producing another function of smaller arity.
```typescript
function add(a: number, b: number, c: number) {
    return a + b + c; 
}
// currying
function add(a: number) {
    return function(b: number) {
        return function(c: number) {
            return a + b + c; 
        }
    }
}
// or
const add = (a: number) => (b: number) => (c: number) => a + b + c;
// partial application
const add5 = add(5);
const add5and6 = add5(6);
add5and6(7); // 18
```
You want to use this for reusability, so you don't have to call the function with the same arguments over and over again.

Record
Records are a data structure that can store multiple values of different types. You can define a record in TypeScript using the following syntax: {key1: datatype1, key2: datatype2, ...} = {key1: value1, key2: value2, ...}
    
```typescript
interface User {
    name: string;
    age: number;
}
```

Normally the data type record is by default an immutable data structure. However, in TypeScript, you can still change the values of the record. So you have to be careful with that. You can fix this easily by using the readonly keyword.
    
```typescript	
interface User {
    readonly name: string;
    readonly age: number;
}
```
You can define a function in a record.
```typescript
interface User {
    name: string;
    age: number;
    greet: () => string; // takes no arguments and returns a string
}
```

If you have to create a lot of objects, it can become tedious. You can use a custom constructor to simplify this process.
```typescript
const specialconst = (a: string, b: number,f: () => string): User => ({
    name: a,
    age: b,
    greet: f
    });
```

Copy and Update Records
If the records are immutable, how are you supposed to update data? You can create a new object with the new information.
```typescript
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
```

This can become a tedious task so you might want to use the third option.