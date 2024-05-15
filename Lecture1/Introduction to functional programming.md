# Chapter 1: Introduction to functional programming 
!Notes!
this markdown file is written by a student in for learning purposes. they are not guaranteed to be correct. also there will be no references to the original content. 
!End! 

## Introduction 
Functional programming is a way of writing computer programs as a series of mathematical functions and avoiding changing state and mutable data. It is different from imperative programming (What most people will learn first) in that it focuses on what to do rather than how to do it.

Over the years, evne programming languages that were originally more about giving direct commands (imperative programming) have started to adopt features from functional programming. This means that even if you are not using a functional programming language, you can still use functional programming concepts in your code. making it more readable and maintainable.

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
But there is a problem what if you change the order of the last 2 lines. the final result will be different. this show that the order of the code can affect the final result.
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

