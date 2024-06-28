"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printList = exports.sumList = exports.listLength = exports.list = void 0;
// create linked list from array
const list = (array) => {
    if (array.length === 0) {
        return { kind: "empty" };
    }
    else if (array.length === 1) {
        return { kind: "list", head: array[0], tail: { kind: "empty" } };
    }
    else {
        return { kind: "list", head: array[0], tail: (0, exports.list)(array.slice(1)) };
    }
};
exports.list = list;
// check the length of linked list
const listLength = (l) => {
    if (l.kind === "empty") {
        return 0;
    }
    return 1 + (0, exports.listLength)(l.tail);
};
exports.listLength = listLength;
const sumList = (l) => {
    if (l.kind === "empty") {
        return 0;
    }
    return l.head + (0, exports.sumList)(l.tail);
};
exports.sumList = sumList;
const printList = (l) => {
    if (l.kind === "empty") {
        return;
    }
    process.stdout.write(l.head + " ");
    (0, exports.printList)(l.tail);
};
exports.printList = printList;
//# sourceMappingURL=main.js.map