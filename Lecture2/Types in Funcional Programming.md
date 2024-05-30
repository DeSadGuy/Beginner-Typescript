# Types in Functional Programming 
first you need to understand the following concepts: 
- keyword `type`
- keyword `interface`
- functional programming techniques - Currying
- functional programming techniques - Immutability
- functional programming techniques - Recursion
- term - Record

## Immutable Data Structures 
for functional programming, it is important to understand the concept of immutability.
- Immutable data structures are those data structures that cannot be changed after they are created.
but why? 
See the following example: 
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
In the above example, the function `changeName` changes the name of the `user` object.
consider a scenario where multiple `things` are happening in the application and the `user` object is being passed around to different functions. this mean that some code doesnt know that the `user` object has been changed.
this can lead to bugs in the application.
to avoid this, we can use immutable data structures.

## Currying
for functional programming, it is important to understand the concept of currying.
- Currying is a technique of evaluating functions with multiple arguments, into a sequence of functions with a single argument.
but why? 
See the following example: 
```typescript
function applyDiscount(price, discount) {
    return price - price * discount; 
}
//or 
const aD = (price, discount) => price - price * discount; 
// usage
applyDiscount(100, 0.1); // 90
applyDiscount(100, 0.2); // 80
```
here the `applyDiscount` function takes two arguments, `price` and `discount`. but if we want to apply the same discount to multiple prices, we have to pass the `discount` argument every time.
we can use currying to create a new function that takes only the `discount` argument.
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
here the `applyDiscount` function is curried to create a new function `tenPercentDiscount` that takes only the `price` argument.

Summary: 
- perks of using currying: 
    - code reusability
    - partial application
    - lazy evaluation

## Recursion 
for functional programming, it is important to understand the concept of recursion.
- Recursion is a technique of solving a problem where the solution depends on solutions to smaller instances of the same problem.
example of recursion: 
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
but why? 
me belike: *you can just make a loop and do the same thing.* 
Problem with loops:
for functional programming you prefer immutability and statelessness. and recursion is a better fit for these requirements. IKNOW RIGHT? KILL ME NOW.

reasons to use recursion:
- immutability
- statelessness
- no loops

## Record - Type, Interface Keyword => typescript
for functional programming, it is important to understand the concept of record.
what is a record?
- A record is a data structure that stores a data like key-value pairs. like a dictionary in python. 
so there are two ways to define a record in typescript: 
- using the `type` keyword 
- using the `interface` keyword
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
//basicly the same thing 

```
both `type` and `interface` keywords can be used to define a record in typescript. but there are some differences between them.
- `type` keyword can be used to define a union type, intersection type, and primitive type.
- `interface` keyword can be extended and implemented.

END!!! of introduction

# START For real now! 

## tuples 
Tuples are a data structure that can store multiple values of different types. you can define a tuple in typescript using the following syntax: [datatype1, datatype2, ...] = [value1, value2, ...]
```typescript
let randomT: [string, number] = ['John', 30];
```
- tuples are fixed-length arrays
accessing elements of a tuple: 
```typescript
let randomT: [string, number] = ['John', 30];
let name = randomT[0]; // John
let age = randomT[1]; // 30
```
## Currying 
normally for functional programming you want to use currying. for example: 
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
but there is an alternative way for currying and that is uncurrying with Tuple. 
## uncurrying
Uncurrying is opposite of currying. it is a technique of converting a curried function into a function that takes multiple arguments.
```typescript
// nomally uncurried function
const add = (a: number, b: number) => a + b;
// tuple uncurried function
const addT = ([a, b]: [number, number]) => a + b;
// Full version for details 
const addfull: (args: [number, number]) => number = ([a, b]) => a + b;
// please dont use this cause if you go out of bounds it will throw an error
const addPLEASENO = (t: [number, number]) => t[0] + t[1];
```
thats why you wanne use the addfull or addT version. it is safer.

## Partial Application
this can only be done with currying.
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
you want to use this for reusability. so you dont have to call the function with the same arguments over and over again.

## record 
Records are a data structure that can store multiple values of different types. you can define a record in typescript using the following syntax: {key1: datatype1, key2: datatype2, ...} = {key1: value1, key2: value2, ...}
```typescript
interface User {
    name: string;
    age: number;
}
```
normally the data type `record` is by default a immutable data structure. 
BUT !!!
somehow in typescript you can still change the values of the record. so you have to be carefull with that. you can fix this easy by using the `readonly` keyword. 
```typescript 
interface User {
    readonly name: string;
    readonly age: number;
}
```
Good to know you can somehow define a function in a record. 
```typescript
interface User {
    name: string;
    age: number;
    greet: () => string; // takes no arguments and returns a string
}
```
PROBLEM: consider this if have to create a lot objects it is gonna be a pain in ass
Solution: do you happen to see that this record resembles object oriented classes in those classes there are ... yea thats right there are `Constructors` to create a object for you. 

then you need to know how to create a custom constuctor. 

```typescript 
const specialconst = (a: string, b: number,f: () => string): User => ({
    name: a,
    age: b,
    greet: f
    });
```

## copy and update records
new Problem!!
if the record are immutable how are you suppose to update data.
just by create a new object with the new information 
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
this can become a hideous task so you might wanne use the 3e option. 

END!!!





