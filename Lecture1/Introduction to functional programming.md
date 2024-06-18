# Chapter 1: Introduction to Functional Programming
>**Good to know before reading**  

This markdown file is written by a student for learning purposes. They are not guaranteed to be correct, and there will be no references to the original content.

## Introduction 
`Functional programming` is a way of writing computer programs as a series of mathematical functions, avoiding changing state and mutable data. It differs from `imperative programming` (which most people learn first) in that it focuses on what to do rather than how to do it.

Over the years, even programming languages that were originally more about giving direct commands (`imperative programming`) have started to adopt features from `functional programming`. This means that even if you are not using a functional programming language, you can still use functional programming concepts in your code, making it more readable and maintainable.

>**For Students**

The goal of this chapter is to compare how things are done in imperative programming and functional programming.


## Imperative Programming vs Functional Programming
> why you shouldn't change the state in programming?

In `imperative programming`, you write code that changes the memory, referred to as the *State*. When you write like this, most of the time you are telling the computer how to do something.

Example in Python:
```python
# Imperative programming
x = 5  # Store 5 in x
y = 2  # Store 2 in y
x = x + 1  # Add 1 to x, making it 6
y = x - y  # Subtract y from x, storing the result in y
print(y)  # Print the value of y
print(x)  # Print the value of x
```
You know what the code does. It will probably print y = 4 and x = 6.

>***PROBLEM***

But there is a problem: what if you change the order of the last 2 lines? The final result will be different. This shows that the order of the code can affect the final result. In a large codebase, this can lead to bugs that are hard to find.

>***SOLUTION*** 

The best solution for this is to get rid of the mutable state (`Make data immutable`). This is where functional programming comes in.

In `functional programming`, it is different. It doesn't rely on changing the memory or state. Instead, it focuses on calculation and result. You can think of it as defining what to solve rather than how to solve it. This approach avoids the complications that come with mutable state (changing memory). Stateless or immutable programming is a property called `*referential transparency*`. `*Referential transparency*` means that a function will always return the same result for the same input.

Example in Python:
```python
x = 5
new_x = x - 2  # Calculate a new value based on x, but don't change x itself
y = new_x + 3  # Use the new value to calculate y
```
In this example, x is never changed. Instead, a new value is calculated based on x. Also, the order of the last 2 lines doesn't matter. The final result will always be the same.

> This is the first step to understanding functional programming.  
`Not changing the state` makes your code easier to predict and maintain.

## Conclusion 
While imperative programming is about giving step-by-step instructions, functional programming is about defining what outcomes you want. Functional programming avoids changing state and makes your code easier to predict and maintain. This approach requires a different way of thinking, known as Lambda Calculus, but offers many benefits in terms of code clarity and reliability.

## Untyped Lambda Calculus
Lambda calculus is a system of mathematical logic used to describe computations (anything that a PC does).  
This logic is used as the foundation for functional programming languages. 

Example Lambda Calculus:   
>λx.λy.x + y  

This represents a function that takes 2 inputs x and y and returns the sum of them.

Lambda calculus is made up of 3 elements: 
- Variables: These are symbols that represent a value. For example, `x + y + 2`, where x and y are variables. 

- Abstractions: These are similar to functions in programming. An abstraction takes a variable and an expression and binds the variable in the expression. For example, `(λx.x + 2)` is an abstraction. It is a function that takes an input x and adds 2 to it. 

- Applications: These are like function calls in programming. An application applies an abstraction to a variable. For example, this function -`(λx.x + 2)`. 

Special term to keep in mind:
- Semantics: This is a term used to describe how the elements will behave or the meaning of a program. 

Example: 
```python 
# Python example

# a and b are parameters - variables
def sum(a, b): # The sum function is an abstraction - abstraction
    return a + b # The expression a + b is the behavior of the function - the semantics

result = sum(3, 5) # sum(3,5) here is a function call or invocation - an application
```

## Currying 
In terms of functional programming, `currying` is a technique where a function with multiple input arguments is transformed into a sequence of functions, each with a single argument. Specifically, the function will return a new function that takes the next argument, and so on until all arguments are passed.

Example in TypeScript:
```typescript
// TypeScript example
// Currying
// Arrow function style
const add4 = (a: number) => (b: number) => (c: number) => (d: number) => a + b + c + d;

// Traditional function style
function add4fn(a: number) {
    return function (b: number) {
        return function (c: number) {
            return function (d: number) {
                return a + b + c + d;
            }
        }
    }
}

// Usage 
const result = add4(1)(2)(3)(4); // 10
const result2 = add4fn(1)(2)(3)(4); // 10
```

The origin of the term "currying" comes from a mathematician named Haskell Curry, as abstraction in mathematics only takes one argument. 

>**WHY should you do this?**

Currying can be useful when you want to reuse a function with different arguments. It can also make your code more **readable and maintainable**. Also known as `Partial Application`.

## Bindings 
In programming terms, a binding is a connection between a variable and a value. When you assign a value to a variable, you are creating a binding.

Example in TypeScript:
```typescript
// TypeScript example
// Bindings
const x = 5; // x is a variable, 5 is a value, and the connection between them is a binding
```
>I dont need to explain this. right? 


## Shadowing
In programming, shadowing is when a variable in a local scope has the same name as a variable in an outer scope. When this happens, the inner variable will `shadow` the outer variable.

Example in TypeScript:
```typescript
// TypeScript example
// Shadowing
const x = 5; // x is a variable in the outer scope
{
    const x = 10; // x is a variable in the inner scope, shadowing the outer x
    console.log(x); // 10
}
console.log(x); // 5
```

>**WHY should you avoid shadowing?**    
- Shadowing can make code harder to read and understand, so it's best to avoid it when possible. 
- Shadowing can also cause bugs if you accidentally use the wrong variable.
- Shadowing can be useful when you want to reuse a variable name in a different scope without affecting the outer scope.

>**YOU SHOULD NOT USE IT**

## TypeScript vs Lambda Calculus

### Bindings 
There are 2 ways to create bindings in TypeScript: 
- Using the *const* keyword (immutable bindings)
- Using the *let* keyword (mutable bindings)

Example in TypeScript:
```typescript
// TypeScript example
// Bindings
const x = 5; 
let y = 10;
``` 

For functional programming in TypeScript, it is recommended to use *const* bindings whenever possible to avoid changing state.

### Type Annotation in TypeScript
In TypeScript, you can use type annotations to specify the type of a variable. This is done using the colon (:) followed by the type.

Example in TypeScript:
```typescript
// TypeScript example
// Type Annotation
const x: number = 5; // x is a number
let y: string = "hello"; // y is a string
```
>**This is a preference of the programmer.**

### Abstraction and Function Applications
In TypeScript, you can define functions using the *function* keyword or using arrow functions.

Example in TypeScript:
```typescript
// TypeScript example
// Abstraction and Function Applications
// Arrow function style
const sum = (a: number, b: number) => a + b;

// full type annotation
const sumSS: (a: number, b: number) => number = (a, b) => a + b;

// Traditional function style
function sumFn(a: number, b: number) {
    return a + b;
}

// full type annotation
function sumFnSS(a: number, b: number): number {
    return a + b;
}

// Usage
const result = sum(3, 5); // 8

// Generic function
const result2 = sumFn(3, 5); // 8
```

>**This is a preference of the programmer.**

### generic types 
In typescript, you can use generic types to create functions that work with different types of data.
example in typescript:
```typescript
// typescript example
// Generic Types
// arrow function style
const identity = <T>(arg: T): T => arg;
// full type annotation 
const identitySS: <T>(arg: T) => T = (arg) => arg;

// traditional function style
function identity<T>(arg: T): T {
    return arg;
}




// Usage
const result = identity(5); // 5
const result2 = identity("hello"); // "hello"
```
>**why should you use generic types?**
- write functions that work with different types of data without repeating code.
- your code more flexible and reusable.


### Conditional Statements
In TypeScript, you can use conditional statements like *if* and *else* to control the flow of your code.

Example in TypeScript:
```typescript
// TypeScript example
// Conditional Statements
const x = 5;
// Classic if-else statement
if (x > 0) {
    console.log("x is positive");
} else {
    console.log("x is negative or zero");
}

// Ternary operator
const message = x > 0 ? "x is positive" : "x is negative or zero";
```

>**This is a preference of the programmer.**

### Recursion 
In TypeScript, you can use recursion to solve problems by calling a function within itself. Why should I use recursion? if I have loops. 

> Cause Loops cannot Solve the problem of immutability. in order to use loops you need to change the state of the variable. and variables should be immutable in functional programming. thats why you should use recursion.

Example in TypeScript:
```typescript
// TypeScript example
// Recursion
const factorial = (n: number): number => {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// full type annotation
const factorialSS: (n: number) => number = (n) => {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Usage
const result = factorial(5); // 120
```
