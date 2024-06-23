# Chapter 2 - Types in Functional Programming

In this chapter, we will learn about types in functional programming. We will cover the following topics:

- Immutable Data Structures
- Tuples
- Currying, Partial Application, and Uncurrying
- Records
- Special Features of Types and Interfaces
- Record Copy and Update
- Big Example - Case Study: Tanks and Guns

## Introduction

This is a continuation of the previous chapter. In this chapter, we will explore types in functional programming, including immutable data structures, tuples, currying, partial application, uncurrying, records, special features of types and interfaces, record copy and update, and a big example of a case study.

> Please note that this document is created by a student for educational purposes, and there is no guarantee that the information is correct. If you find any mistakes, please contact me.

# Table of Contents 

- Immutable Data Structures
- Tuples
- Currying, Partial Application, and Uncurrying
- Records
- Special Features of Types and Interfaces
- Record Copy and Update
- Big Example - Case Study: Tanks and Guns


## Immutable Data Structures

In functional programming, it is crucial to understand the concept of immutability. Changing state or memory can lead to bugs, so it is best to avoid it. Refer to the previous chapter for more information on this topic: [Introduction to functional programming](../Lecture1/Introduction%20to%20functional%20programming.md)

To ensure immutability, you can use data structures like `const`, such as tuples and records, or make sure that the data structure is immutable by using the `readonly` keyword.

Here's an example of immutability in TypeScript:

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

In the above example, the function `changeName` changes the name of the `user` object. However, if the `user` object is passed around to different functions in the application, some code may not be aware that the `user` object has been changed, leading to bugs. To avoid this, we can use immutable data structures.

## Tuples

Tuples are fixed-length arrays that can store multiple values of different types. In TypeScript, you can define a tuple using the following syntax: `[datatype1, datatype2, ...] = [value1, value2, ...]`

Here's an example of a tuple:

```typescript
let randomT: [string, number] = ['John', 30];
```

Some key points about tuples:
- Tuples are fixed-length arrays.
- Accessing elements of a tuple works like an array.
- Tuples are immutable data structures.

Tuples can be used as arguments for functions. In some scenarios, instead of currying, you can use tuples to pass multiple arguments to a function.

```typescript
// Normally uncurried function
const add = (a: number, b: number) => a + b;

// Tuple uncurried function
const addT = ([a, b]: [number, number]) => a + b;
```

Using tuples as an alternative to currying allows for easier passing of multiple arguments to a function.

## Currying, Partial Application, and Uncurrying

Currying is a technique used in functional programming to convert a function that takes multiple arguments into a sequence of functions that each take a single argument.

```typescript
function add(a: number, b: number) {
    return a + b; 
}

// Currying
function add(a: number) {
    return function(b: number) {
        return a + b; 
    }
}

// Or using arrow functions
const add = (a: number) => (b: number) => a + b; 
```

Currying provides reusability, flexibility, and enables partial application.

In this chapter, we will learn about types in functional programming. We will learn about the following topics:
- Immutable Data Structures
- Tuples
- Currying, Partial Application, and Uncurrying
- Records
- Special Features of Types and Interfaces
- Record Copy and Update
- Big Example - Case Study => Tanks and Guns

## Introduction
This is a continuation of the previous chapter. In this chapter, we will learn about types in functional programming. We will learn about immutable data structures, tuples, currying, partial application, and uncurrying, records, special features of types and interfaces, record copy and update, and a big example of a case study.
> remember that this document is created by a student for educational purposes. and there will be no guarantee that the information is correct. if you find any mistakes please contact me.

## Immutable Data Structures 
for functional programming, it is important to understand the concept of immutability. Cause changing state/memory can lead to bugs. So it a big no no. Check previous chapter for more information. [Introduction to functional programming](../Lecture1/Introduction%20to%20functional%20programming.md)

> For this reason you may want to use data structures that are immutable like `const`. like tuples and records. Or make sure that the data structure is immutable. using the `readonly` keyword.

example of immutability: 
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


## Tuples
Tuples are a data structure that can store multiple values of different types. you can define a tuple in typescript using the following syntax: [datatype1, datatype2, ...] = [value1, value2, ...]
```typescript
let randomT: [string, number] = ['John', 30];
```
> - tuples are fixed-length arrays
> - accessing elements of a tuple works like an array.
> - tuples are `**immutable data structures**`.

Tuples can be used as arguments for functions. In some scenarios instead of currying, **alternatively** you can use tuples to pass multiple arguments to a function. 
```typescript
// nomally uncurried function
const add = (a: number, b: number) => a + b;
// curry function
const add = (a: number) => (b: number) => a + b;
const addSS: (a: number) => (b: number) => number = (a) => (b) => a + b;
// tuple uncurried function
const addT = ([a, b]: [number, number]) => a + b;
``` 
this is a alternative way to currying. by using tuples.
> you will eventually use this with currying functions to make it easier to pass multiple arguments to a function.

## Currying, Partial Application, and Uncurrying
Currying is a technique used in functional programming. It is a process of converting a function that takes multiple arguments into a sequence of functions that each take a single argument. 
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
> The reason is mostly for `reusability, flexibility and partial application`.
---
Partial application is also a technique used in functional programming. It is a process of fixing a number of arguments to a function, producing another function of smaller varity.
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
const add5 = add(5); // here make a function that takes 2 arguments that already has 1 argument
const add5and6 = add5(6);
add5and6(7); // 18
// this is so you dont have to call the function with the same arguments over and over again.
```
> The reason is mostly for `reusability, flexibility and partial application`.
> and so that you dont recall the same function with the same arguments over and over again.
---
Uncurrying is a technique used in functional programming. It is a process of converting a curried function into a function that takes multiple arguments.
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
if you use uncurrying you preferebly use tuples to make it safer. but DONT GO OUT OF BOUNDS.  
you should use this if you want to keep it simple and dont want to use currying.
> The reason is mostly for `reusability, flexibility and partial application`.

## Records 
Record is a data structure that creates objects with key-value pairs. you can define a record in typescript using the following syntax: {key1: datatype1, key2: datatype2, ...} = {key1: value1, key2: value2, ...}  
see example below:  
```typescript	
const user = {
    name: 'John',
    age: 30
};
```
Records are `**immutable data structures**` normally. but for some reason in typescript you can still change the values of the record. so you have to be carefull with that. you can fix this easy by using the `readonly` keyword.  
```typescript
interface User {
    readonly name: string;
    readonly age: number;
}
```
you can create records in typecript using 2 ways: 
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
```
both `type` and `interface` keywords can be used to define a record in typescript. but there are some differences between them.
- `type` keyword can be used to define a union type, intersection type, and primitive type.
- `interface` keyword can be extended and implemented.

depending on the situation you can choose which one to use. 
--- 
did you know you can also define functions in records. 
```typescript
interface User {
    name: string;
    age: number;
    greet: () => string;
}
type User = {
    name: string;
    age: number;
    greet: () => string;
}
const user: User = {
    name: 'John',
    age: 30,
    greet: () => 'Hello, my name is John'
};
```
> you can define functions in records. this is useful for creating objects with methods.

---
## special features of types and interfaces 
- `type` keyword can be used to define a union type, intersection type, and primitive type.
- `interface` keyword can be extended and implemented.
this what we already told you but how do you use them.  
* Unions type: a union type is a type that can be one of several types. you can define a union type using the following syntax: type Name = Type1 | Type2 | ...
* Intersection type: an intersection type is a type that combines multiple types into one type. you can define an intersection type using the following syntax: type Name = Type1 & Type2 & ...
* Primitive type: a primitive type is a type that represents a single value. you can define a primitive type using the following syntax: type Name = Type
* Extending interface: you can extend an interface using the `extends` keyword. you can define an interface that extends another interface using the following syntax: interface Name extends BaseInterface
* Implementing interface: you can implement an interface using the `implements` keyword. you can define a class that implements an interface using the following syntax: class Name implements InterfaceName

examples: 
```typescript 
// union type
type User = {
    name: string;
    age: number;
}
type Admin = {
    name: string;
    age: number;
    role: string;
}
type Person = User | Admin;
// intersection type
type User = {
    name: string;
    age: number;
}
type Admin = {
    name: string;
    age: number;
    role: string;
}
type Person = User & Admin;
// primitive type
type Name = string;
type Age = number;
type Person = {
    name: Name;
    age: Age;
}
// extending interface
interface User {
    name: string;
    age: number;
}
interface Admin extends User {
    role: string;
}
// implementing interface
interface User {
    name: string;
    age: number;
}
class UserImpl implements User {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
```

## Record Copy and Update 
if the record are immutable how are you suppose to update data.
just by create a new object with the new information 
for example: 
```typescript
const user = {
    name: 'John',
    age: 30
};
const updatedUser = {
    ...user, // this will take all the properties of the user object
    age: 31 // the thing you changed
};
// or you can do this but this is not recommended
const updatedUser2 = {
    name: user.name,
    age: 32
};
```
> you can create a new record by copying the old record and updating the new record with the new information.



## Big Example - Case Study => Tanks and Guns
i will skip this part cause it is a big example and i dont want to write it all out.







