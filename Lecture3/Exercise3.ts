import { List, Option, list, printList, listLength } from "./main";
// Exercise 1 
// return last element of a list
const last: <T>(list: List<T>) => Option<T> = (list) => {
    if (list.kind === "empty") {
        return { kind: "none" };
    }
    if (list.tail.kind === "empty"){
        return { kind: "some", value: list.head }
    }
    else {
        return last(list.tail);
    }
}

// Exercise 2 
// return list in reverse order
const reverse: <T>(list: List<T>) => (newList: List<T>) => List<T> = firstlist => newList => {
    if (firstlist.kind === "empty"){
        return {kind: "empty"};
    }
    else if (firstlist.tail.kind === "empty") {
        return {kind: "list", head: firstlist.head, tail: newList}
    }
    else { 
        return reverse(firstlist.tail)({kind: "list", head: firstlist.head, tail: newList})
    }
};

// Exercise 3
// return a new list with list1 elements followed by list2 elements
const append: <T>(list1: List<T>) => (list2: List<T>) => List<T> = (list1) => (list2) => { 
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

};

// Exercise 4
// return the element in position of number in the list. should handle out of bounds
const nth : <T>(n : number) => <T>(l: List<T> ) => Option<T> = (number) => (list) => {
    if (list.kind === "empty"){
        return { kind: "none" };
    }
    else if (number === 0){
        return { kind: "some", value: list.head };
    }
    else {
        return nth(number - 1)(list.tail);
    }
}


// Exercise 5
// return true if the list is a palindrome
const palindrome : <T>(l : List<T>) => boolean = sll => {
    const rev = reverse(sll)({kind: "empty"});
    return listEquals(sll)(rev);
} 
// check if two lists are equal 
const listEquals: <T>(l1 : List<T>) => (l2 : List<T>) => boolean = sll1 => sll2 => {
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
}

// Exercise 6
// remove consecutive duplicates from a list
const compress: <T>(l: List<T>) => List<T> = sll => {
    if (sll.kind === "empty") {
        return {kind: "empty"};
    }
    else if (sll.tail.kind === "empty") {
        return {kind: "list", head: sll.head, tail: {kind: "empty"}};
    }
    else if (sll.head === sll.tail.head) {
        return compress(sll.tail);
    }
    else {
        return {kind: "list", head: sll.head, tail: compress(sll.tail)};
    }
}

// example; [] => [], [1, 1, 2, 3, 3, 4, 4, 4] => [1, 2, 3, 4]

// Exercise 7
// take a text and shift all the letters in the text by a given number
const caesarCypher : (l : List<string>) => (shift : number) => List<string> = sll => shift => {
    if (sll.kind === "empty") {
        return {kind: "empty"};
    }
    else {
        return {kind: "list", head: shiftChar(sll.head)(shift), tail: caesarCypher(sll.tail)(shift)};
    }

};

const shiftChar: (c: string) => (shift: number) => string = c => shift => {
    const charCode = c.charCodeAt(0);// changing to char code
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
};

// Exercise 8
// take number and list and split the list at the given number
const splitAt: <T>(i: number) => <T>(l: List<T>) => [List<T>, List<T>] = i => l => {
    if (i === 0){
        return [{kind: "empty"}, l];
    }
    else if (l.kind === "empty"){
        return [{kind: "empty"}, {kind: "empty"}];
    }
    else {
        const [first, second] = splitAt(i - 1)(l.tail);
        return [{kind: "list", head: l.head, tail: first}, second];
    }
};
// Exercise 9
// merge 2 sorted lists into a single sorted list	
const Merge: <T>(l1: List<T>) => (l2: List<T>) => List<T> = l1 => l2 => {
    if (l1.kind === "empty") {
        return l2;
    }
    else if (l2.kind === "empty") {
        return l1;
    }
    else if (l1.head > l2.head) {
        return {kind: "list", head: l2.head, tail: Merge(l1)(l2.tail)};
    }
    else{ 
        return {kind: "list", head: l1.head, tail: Merge(l1.tail)(l2)};
    }
};

// Exercise 10
// return a sorted list using merge sort
const MergeSort: <T>(l:List<T>) => List<T> = l => {
    if (l.kind === "empty" || l.tail.kind === "empty") {
        return l;
    }
    else {
        const [first, second] = splitAt(Math.floor(listLength(l) / 2))(l);
        return Merge(MergeSort(first))(MergeSort(second));
    }
}

// Exercise 11
// 
// const eval: (expr: Expr) => Expr = expr => {
// }

// // Exercise 12

// const eval2: (expr: Expr) => (stack : List<[string, number]>) => number = expr => stack => {

// };
// // Exercise 13

// const run: (program: List<Statement>) => (stack : List<[string, number]>) => List<[string, number]> = program => stack => {
    
// };




// Testing 
const testList1 = list([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const testList2 = list([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
console.log(last(testList1)); // 10
console.log(last(testList2)); // 20
console.log(printList(reverse(testList1)({kind: "empty"}))); // 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
console.log(printList(append(testList1)(testList2))); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
console.log(nth(5)(testList1)); // 6
console.log(nth(3)(testList2)); // 14
console.log(nth(10)(testList1)); // none
console.log(palindrome(list([1, 2, 3, 2, 1]))); // true
console.log(palindrome(list([1, 2, 3, 4, 5]))); // false
console.log(printList(compress(list([1, 1, 2, 3, 3, 4, 4, 4])))); // 1, 2, 3, 4
console.log(printList(compress(list([1, 2, 3, 4, 5])))); // 1, 2, 3, 4, 5
console.log(printList(caesarCypher(list(["H","e","l","l","o","W","o","r","l","d","!"]))(3))); // Khoor Zruog!
console.log(printList(caesarCypher(list(["H","e","l","l","o","W","o","r","l","d","!"]))(26))); // Hello World!
console.log(printList(caesarCypher(list(["H","e","l","l","o","W","o","r","l","d","!"]))(0))); // Hello World!
console.log(printList(caesarCypher(list(["H","e","l","l","o","W","o","r","l","d","!"]))(52))); // Hello World!
console.log(splitAt(5)(testList1)); // [1, 2, 3, 4, 5], [6, 7, 8, 9, 10]
console.log(printList(Merge(list([1, 3, 5, 7, 9]))(list([2, 4, 6, 8, 10])))); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
console.log(printList(MergeSort(list([5, 3, 8, 1, 9, 2, 7, 4, 6])))); // 1, 2, 3, 4, 5, 6, 7, 8,


