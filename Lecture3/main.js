"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printList = exports.sumList = exports.listLength = exports.list = void 0;
// create linked list from array
var list = function (array) {
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
var listLength = function (l) {
    if (l.kind === "empty") {
        return 0;
    }
    return 1 + (0, exports.listLength)(l.tail);
};
exports.listLength = listLength;
var sumList = function (l) {
    if (l.kind === "empty") {
        return 0;
    }
    return l.head + (0, exports.sumList)(l.tail);
};
exports.sumList = sumList;
var printList = function (l) {
    if (l.kind === "empty") {
        return;
    }
    process.stdout.write(l.head + " ");
    (0, exports.printList)(l.tail);
};
exports.printList = printList;
