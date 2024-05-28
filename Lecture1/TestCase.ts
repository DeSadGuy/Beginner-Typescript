const add4 = (a: number) => (b: number) => (c: number) => (d: number) => a + b + c + d;

function add4fn(a: number) {
    return function (b: number) {
        return function (c: number) {
            return function (d: number) {
                return a + b + c + d;
            }
        }
    }
}