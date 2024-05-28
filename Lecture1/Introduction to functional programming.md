# Chapter 1: Introduction to functional programming 
!Notes!
this markdown file is written by a student in for learning purposes. they are not guaranteed to be correct. also there will be no references to the original content. 
!End! 

## Introduction 
Functional programming is a way of writing computer programs as a series of mathematical functions and avoiding changing state and mutable data. It is different from imperative programming (What most people will learn first) in that it focuses on what to do rather than how to do it.

Over the years, even programming languages that were originally more about giving direct commands (imperative programming) have started to adopt features from functional programming. This means that even if you are not using a functional programming language, you can still use functional programming concepts in your code. making it more readable and maintainable.

!For Students!
Goal of this chapter is to compare how things are done in imperative programming and functional programming.
!End!


## Imperative programming vs functional programming
In imperative programming, you write code that changes the memory, which is refered to as the *State*. When you write like this most of the time you are telling the computer how to do something. 
Example in python:
```python
# python
# Imperative programming
x = 5  # Store 5 in x
y = 2  # Store 2 in y
x = x + 1  # Add 1 to x, making it 6
y = x - y  # Subtract y from x, storing the result in y
print (y)  # Print the value of y
print (x)  # Print the value of x
```
you know what the code does. it will probrably print y = 4 and x = 6.
*PROBLEM*
But there is a problem what if you change the order of the last 2 lines. the final result will be different. this show that the order of the code can affect the final result.
*SOLUTION* 
the best solution for this is to get rid of the mutable state (make data immutable). This is where functional programming comes in.

In functional programming different. it doenst rely on changing the memory or state. instead, it focueses on calculation and result. you can think of it as defining what to solve rather than how to solve it. this approach avoids the complications that come with mutable state (changing memory). stateless or immutable programming is a propperty called *referential transparency*. *referential transparancy* means that a function will always return the same result for the same input.

Example in python:
```python
x = 5
new_x = x - 2  # Calculate a new value based on x, but don't change x itself
y = new_x + 3  # Use the new value to calculate y
```
In this example, x is never changed. instead, a new value is calculated based on x. Also, the order of the last 2 lines doesn't matter. the final result will always be the same.

## Conclusion 
While imperative programming is about giving step-by-step instructions, functional programming is about defining what outcomes you want. Functional programming avoids changing state and makes your code easier to predict and maintain. This approach requires a different way of thinking, known as Lambda Calculus, but offers many benefits in terms of code clarity and reliability.

## Untyped Lambda Calculus
Lambda calculus is a system of mathematical logic used to describe computations (anything that a pc does) this logic is used as the foundation fo functional programming languages. 

Example Lambda Calculus: 
λx.λy.x + y
this represent a function that takes 2 inputs x and y, and returns the sum of it.

Lambda calculus is made of 3 elements: 
- Variables: these are symbols that represent a value. for example x + y + 2, here x and y are variables. 

- Abstractions: these are similair to functions in programming. an abstraction takes a variable and an expression and binds the viarable in the expression. for example, (λx.x + 2) is a abstraction it is a function that takes an input x and adds 2 to it. 



- Applications: these are like function calls in programming. an application applies abstraction to a variable. for example this function -(λx.x + 2) 

Special term to keep in mind
- Semantics: that is a term used to describe how the elements will behave. Or meaning of a program. 

example: 
```python 
# Python example

# a and b are parameters - variables
def sum(a, b): # The sum function is an abstraction - abstraction
    return a + b # The expression a + b is the behavior of the function - the semantics

result = sum(3, 5) # sum(3,5) here is a function call or invocation - an application
```

## Currying 
in term of functional programming,
Currying is a technique in functional programming. It is where a function with multiple input arguments is transformed into a sequence of functions, each with a single argument. 
specifically, function will return a new function that takes the next argument. and so on until all arguments are passed.

Example in typescript:
```typescript
// typescript example
// Currying
// arrow function style
const add4 = (a: number) => (b: number) => (c: number) => (d: number) => a + b + c + d;

// traditional function style
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

the origin of the term currying comes from a mathematician named Haskell Curry. cause abstration in mathematics only takes one argument. 

## Bindings 
in programming terms, a binding is a connection between a variable and a value. when you assign a value to a variable, you are creating a binding.
example in typescript:
```typescript
// typescript example
// Bindings
const x = 5; // x is a variable, 5 is a value, and the connection between them is a binding
```

## Shadowing
in programming, shadowing is when a variable in a local scope has the same name as a variable in an outer scope. when this happens, the inner variable will "shadow" the outer variable.
example in typescript:
```typescript
// typescript example
// Shadowing
const x = 5; // x is a variable in the outer scope
{
    const x = 10; // x is a variable in the inner scope, shadowing the outer x
    console.log(x); // 10
}
console.log(x); // 5
```

NOTES: 
- Shadowing can make code harder to read and understand, so it's best to avoid it when possible. 
- Shadowing can also cause bugs if you accidentally use the wrong variable.
- Shadowing can be useful when you want to reuse a variable name in a different scope without affecting the outer scope.

## Conclusion 
origin of programming comes from mathematics. functional programming is a way of writing code that focuses on defining what to do rather than how to do it. Lambda calculus is a system of mathematical logic used to describe computations and is the foundation of functional programming languages. 

## typescript vs lambda calculus

### bindings 
there are 2 ways to create bindings in typescript. 
- using the *const* keyword 
    - immutable bindings
- using the *let* keyword
    - mutable bindings
example in typescript:
```typescript
// typescript example
// Bindings
const x = 5; 
let y = 10;
``` 

### Type Annotation in TypeScript
NOTES to self: Annotation is telling a variable what type it is.
In typescript you can do this using the colon (:) followed by the type. 
example in typescript:
```typescript
// typescript example
// Type Annotation
const x: number = 5; // x is a number
let y: string = "hello"; // y is a string
```

### abstraction and Function applications
In typescript, you can define functions using the *function* keyword. or using arrow functions.
example in typescript:
```typescript
// typescript example
// Abstraction and Function Applications
// arrow function style
const sum = (a: number, b: number) => a + b;

// traditional function style
function sumFn(a: number, b: number) {
    return a + b;
}

// Usage
const result = sum(3, 5); // 8
const result2 = sumFn(3, 5); // 8
```

### generic types 
In typescript, you can use generic types to create functions that work with different types of data.
example in typescript:
```typescript
// typescript example
// Generic Types
// arrow function style
const identity = <T>(arg: T): T => arg;

// traditional function style
function identity<T>(arg: T): T {
    return arg;
}

// Usage
const result = identity(5); // 5
const result2 = identity("hello"); // "hello"
```

### conditial (statements)
In typescript, you can use conditional statements like *if* and *else* to control the flow of your code.
example in typescript:
```typescript
// typescript example
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

### recursion 
In typescript, you can use recursion to solve problems by calling a function within itself.
example in typescript:
```typescript
// typescript example
// Recursion
const factorial = (n: number): number => {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Usage
const result = factorial(5); // 120
```




## Keywords explained
### Imperative programming
Imperative programming is a programming paradigm that uses statements that change a program's *state*. In imperative programming, the programmer tells the computer what to do by telling it how to do it. 
```python 
# Python example 
# Imperative programming 
def sum(a, b):
    return a + b
# or 
x = 1 
y = 2
x = x + y 

```
### Referential transparency 
Referential transparency is a property and conept in a way of writing code. when a function is referentially transparent, it means that the function will always return the same result for the same input. 
example in python:
```python
# Python example
# Referential transparency
def sum(a, b):
    return a + b

print(sum(1, 2))  # 3
print(sum(1, 2))  # 3

# or

def square(x): 
    return x * x

print(square(2))  # 4
print(square(6))  # 36
```
in this example the function sum and square are referentially transparent. they will always return the same result for the same input. is doenst matter how many times you call the function.

### Functional programming
Functional programming is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data. In functional programming, you define what to do rather than how to do it. 
```python
# Python example
# Functional programming
def sum(a, b):
    return a + b
```

### Lambda Calculus 


### Computations


### Lambda Calculus - Variables

### Lambda Calculus - Abstractions


### Lambda Calculus - Substitution rule 



### Currying
currying is a technique in functional programming where a function with multiple input arguments is transformed into a sequence of functions, each with a single argument. 
```typescript
// typescript example
// Currying
const add4 = (a: number) => (b: number) => (c: number) => (d: number) => a + b + c + d;

// traditional function style
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

### Bindings 
Bindings are connections between variables and values. When you assign a value to a variable, you are creating a binding. 
```typescript
// typescript example
// Bindings
const x = 5; // x is a variable, 5 is a value, and the connection between them is a binding
```


### Shadowing 
Shadowing is when a variable in a local scope has the same name as a variable in an outer scope. The inner variable will "shadow" the outer variable. 
```typescript
// typescript example
// Shadowing
const x = 5; // x is a variable in the outer scope
{
    const x = 10; // x is a variable in the inner scope, shadowing the outer x
    console.log(x); // 10
}
console.log(x); // 5
```



