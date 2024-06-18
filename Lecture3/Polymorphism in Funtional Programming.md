# Chapter 3: Polymorphism in Functional Programming
it is gonna be about how to use polymorphism in functional programming.

# temp
- Polymorphism
- `<T>` in typescript for generics
- `Option<T>` in typescript for null safety
- `Export` keyword in typescript
- `&` vs `|` in operators (Union and Intersection) 
- 


## Polymorphism
Polymorphism is a concept that allows you to use a single interface to represent different types. In functional programming, polymorphism is achieved through the use of type variables and type constraints.

Why? 
- Polymorphism allows you to write more generic and reusable code.

## Type Unions and Type Intersections

Type unions and type intersections are two ways to combine types in TypeScript.

```typescript
// typescript
// Type Union 
type A = string | number;
// Type A can be either a string OR a number

// Type Intersection
type B = {value1: number} & {value2: string}
// Type B can be both a string AND a number

const a: A = 1; // valid
const a1: A = "hello"; // valid
const a2: A = true; // invalid

const b: B = {value1: 1, value2: "hello"}; // valid
const b1: B = {value1: 1}; // invalid
const b2: B = {value2: "hello"}; // invalid

```




