"use strict";
// Devin Chen
// Student number: 1020159
Object.defineProperty(exports, "__esModule", { value: true });
// Exercise 1
const Factors = (n) => {
    function inner(i) {
        if (n <= 1) {
            return "";
        }
        else if (i <= 0) {
            return "";
        }
        else {
            if (n % i == 0) {
                return inner(i - 1) + " " + i.toString();
            }
            else {
                return inner(i - 1);
            }
        }
    }
    if (inner(n) === " 1" + " " + n.toString())
        return "";
    return inner(n);
};
const Shape2DCon = ([n1, n2]) => {
    return {
        rows: n1,
        colums: n2,
        draw: function (char) {
            function outer(r, c) {
                function inner(c) {
                    if (c <= 0) {
                        // i forgot that skip line was here
                        return "\f";
                        // found it
                    }
                    else {
                        return char.toString() + inner(c - 1);
                    }
                }
                if (r <= 0) {
                    return "";
                }
                else {
                    return "" + outer(r - 1, c) + inner(c);
                }
            }
            return outer(this.rows, this.colums);
        }
    };
};
const box = Shape2DCon([2, 3]);
console.log(box.draw("*"));
console.log(Shape2DCon([1, 5]).draw("# "));
// Exercise 3 
//# sourceMappingURL=main.js.map