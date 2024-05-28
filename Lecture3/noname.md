# Chapter 3: Polymorphism in Functional Programming

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


