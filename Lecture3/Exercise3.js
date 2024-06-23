"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("./main");
// Exercise 1 
// return last element of a list
var last = function (list) {
    if (list.kind === "empty") {
        return { kind: "none" };
    }
    if (list.tail.kind === "empty") {
        return { kind: "some", value: list.head };
    }
    else {
        return last(list.tail);
    }
};
// Exercise 2 
// return list in reverse order
var reverse = function (firstlist) { return function (newList) {
    if (firstlist.kind === "empty") {
        return { kind: "empty" };
    }
    else if (firstlist.tail.kind === "empty") {
        return { kind: "list", head: firstlist.head, tail: newList };
    }
    else {
        return reverse(firstlist.tail)({ kind: "list", head: firstlist.head, tail: newList });
    }
}; };
// Exercise 3
// return a new list with list1 elements followed by list2 elements
var append = function (list1) { return function (list2) {
    if (list1.kind === "empty" && list2.kind === "empty") {
        return { kind: "empty" };
    }
    else if (list1.kind === "empty" && list2.kind === "list") {
        return list2;
    }
    else if (list1.kind === "list" && list2.kind === "empty") {
        return list1;
    }
    else if (list1.kind === "list" && list2.kind === "list") {
        return { kind: "list", head: list1.head, tail: append(list1.tail)(list2) };
    }
    else {
        return { kind: "empty" };
    }
}; };
// Exercise 4
// return the element in position of number in the list. should handle out of bounds
var nth = function (number) { return function (list) {
    if (list.kind === "empty") {
        return { kind: "none" };
    }
    else if (number === 0) {
        return { kind: "some", value: list.head };
    }
    else {
        return nth(number - 1)(list.tail);
    }
}; };
// Exercise 5
// return true if the list is a palindrome
var palindrome = function (sll) {
    var rev = reverse(sll)({ kind: "empty" });
    return listEquals(sll)(rev);
};
// check if two lists are equal 
var listEquals = function (sll1) { return function (sll2) {
    if (sll1.kind === "empty" && sll2.kind === "empty") {
        return true;
    }
    else if (sll1.kind === "empty" || sll2.kind === "empty") {
        return false;
    }
    else if (sll1.head === sll2.head) {
        return listEquals(sll1.tail)(sll2.tail);
    }
    else {
        return false;
    }
}; };
// Exercise 6
// remove consecutive duplicates from a list
var compress = function (sll) {
    if (sll.kind === "empty") {
        return { kind: "empty" };
    }
    else if (sll.tail.kind === "empty") {
        return { kind: "list", head: sll.head, tail: { kind: "empty" } };
    }
    else if (sll.head === sll.tail.head) {
        return compress(sll.tail);
    }
    else {
        return { kind: "list", head: sll.head, tail: compress(sll.tail) };
    }
};
// example; [] => [], [1, 1, 2, 3, 3, 4, 4, 4] => [1, 2, 3, 4]
// Exercise 7
// take a text and shift all the letters in the text by a given number
var caesarCypher = function (sll) { return function (shift) {
    if (sll.kind === "empty") {
        return { kind: "empty" };
    }
    else {
        return { kind: "list", head: shiftChar(sll.head)(shift), tail: caesarCypher(sll.tail)(shift) };
    }
}; };
var shiftChar = function (c) { return function (shift) {
    var charCode = c.charCodeAt(0); // changing to char code
    if (charCode >= 65 && charCode <= 90) { // if it is a capital letter
        return String.fromCharCode((charCode - 65 + shift) % 26 + 65);
    }
    else if (charCode >= 97 && charCode <= 122) { // if it is a small letter
        return String.fromCharCode((charCode - 97 + shift) % 26 + 97);
        // fromCharcode(here de charcode) convers the char code to a string
        // % 26 cause 26 letters in the alphabet
        // 97 is the char code for 'a'
    }
    else {
        return c;
    }
}; };
// Exercise 8
var splitAt = function (i) { return function (l) {
}; };
// Exercise 9
var Merge = function (l1) { return function (l2) {
}; };
// Exercise 10
var MergeSort = function (l) {
};
// Exercise 11
var eval = function (expr) {
};
// Exercise 12
var eval2 = function (expr) { return function (stack) {
}; };
// Exercise 13
var run = function (program) { return function (stack) {
}; };
// Testing 
var testList1 = (0, main_1.list)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
var testList2 = (0, main_1.list)([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
console.log(last(testList1)); // 10
console.log(last(testList2)); // 20
console.log((0, main_1.printList)(reverse(testList1)({ kind: "empty" }))); // 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
console.log((0, main_1.printList)(append(testList1)(testList2))); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
console.log(nth(5)(testList1)); // 6
console.log(nth(3)(testList2)); // 14
console.log(nth(10)(testList1)); // none
console.log(palindrome((0, main_1.list)([1, 2, 3, 2, 1]))); // true
console.log(palindrome((0, main_1.list)([1, 2, 3, 4, 5]))); // false
console.log((0, main_1.printList)(compress((0, main_1.list)([1, 1, 2, 3, 3, 4, 4, 4])))); // 1, 2, 3, 4
console.log((0, main_1.printList)(compress((0, main_1.list)([1, 2, 3, 4, 5])))); // 1, 2, 3, 4, 5
console.log((0, main_1.printList)(caesarCypher((0, main_1.list)(["H", "e", "l", "l", "o", "W", "o", "r", "l", "d", "!"]))(3))); // Khoor Zruog!
console.log((0, main_1.printList)(caesarCypher((0, main_1.list)(["H", "e", "l", "l", "o", "W", "o", "r", "l", "d", "!"]))(26))); // Hello World!
