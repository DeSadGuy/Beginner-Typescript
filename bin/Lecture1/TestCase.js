const add4 = (a) => (b) => (c) => (d) => a + b + c + d;
function add4fn(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return a + b + c + d;
            };
        };
    };
}
//# sourceMappingURL=TestCase.js.map