// just testing some stuff 
const specialconst = (a, b, f) => ({
    name: a,
    age: b,
    randomFunction: f
});
const d1 = {
    name: 'John',
    age: 30,
    yeet: 'hello'
};
const d2 = {
    name: d1.name,
    age: d1.age,
    yeet: 'suprise'
};
const d3 = { ...d1, yeet: 'suprisesuprise' };
//# sourceMappingURL=main.js.map