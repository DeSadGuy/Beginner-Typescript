// ## Exercise 1
// Model a point in the space as a record `Point2D` containing a field `Position`, which is a tuple of type `[number, number]`. Define two different constructor methods for this point\: the first creates a point given 2 coordinates `x` and `y` taken as input. The second creates a random point whose coordinates are between two parameters `min` and `max` taken as input.
function point(x, y) {
    return { Position: [x, y] };
}
const Tpoint = (x) => {
    return y => {
        return { Position: [x, y] };
    };
};
const Spoint = (x) => y => ({
    Position: [x, y]
});
/*
Tpoint Function:

Uses explicit braces and return statements.
Pros:
Clarity: The use of braces and explicit return statements can make the function's structure and flow more apparent, especially to those new to TypeScript or functional programming.
Extensibility: Easier to modify or extend, for example, by adding logging or additional logic before returning the Point2D object.
Cons:
Verbosity: More verbose than Spoint, with extra syntactic elements that don't add to the function's capability.
Spoint Function:

Uses a more concise arrow function syntax without explicit braces or return statements for the returned function.
Pros:
Conciseness: More succinct and eliminates unnecessary syntax, making the code shorter and potentially easier to read once you're accustomed to this style.
Elegance: Preferred in functional programming patterns for its elegance and directness, especially when defining simple functions.
Cons:
Readability: Might be slightly harder to parse for those not familiar with concise arrow function syntax or when quickly scanning through code.
Which One to Use?

If you value conciseness and are comfortable with arrow functions, Spoint is a good choice. It's succinct and elegant, fitting well with functional programming paradigms.
If you prefer clarity, or if the function might be extended in the future, Tpoint might be better. Its explicitness can aid readability and make modifications easier.
Ultimately, the choice depends on your coding style, the complexity of the function, and the preferences of your team if you're working in a collaborative environment. Both are correct and will work the same way; it's a matter of which syntax you find more readable and maintainable.


*/
function randompoint(min) {
    return max => {
        return { Position: [Math.floor(Math.random() * (max - min + 1)) + min, Math.floor(Math.random() * (max - min + 1)) + min] };
    };
}
//# sourceMappingURL=Exercise2.js.map