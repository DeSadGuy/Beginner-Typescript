// Single Linked List 
type List<T> = {
    kind: "empty"
}   
    | // or
{
    kind: "list", 
    head: T, 
    tail: List<T>
};

// Create Optional value
type Option<T> = {
    kind: "none"
}
    | // or
{
    kind: "some",
    value: T
};


// create linked list from array
const List = <T>(array: T[]): List<T> => {
    if (array.length === 0) {
        return { kind: "empty" };
    }
    else if (array.length === 1) {
        return { kind: "list", head: array[0], tail: { kind: "empty" } };
    }
    else {
        return { kind: "list", head: array[0], tail: List(array.slice(1)) };
    }

}

// check the length of linked list
const listLength = <T>(l: List<T>) : number => {
    if (l.kind === "empty") {
        return 0;
    }
    return 1 + listLength(l.tail);
}

const sumList = (l: List<number>) : number => {
    if (l.kind === "empty") {
        return 0;
    }
    return l.head + sumList(l.tail);
}

const printList = <T>(l: List<T>) : void => {
    if (l.kind === "empty") {
        return;
    }
    console.log(l.head);
    printList(l.tail);
}
// testing some stuff
const testList = List([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(listLength(testList)); // 10
console.log(sumList(testList)); // 55
printList(testList);

// Exercise 1 
// return last element of a list
const last = <T>(list: List<T>) : Option<T> => {
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
//const reverse = <T>(list: List<T>) : (newList: List<T>) => List<T> => newlist => ...;

// Exercise 3
// return a new list with list1 elements followed by list2 elements
//const append = <T>(list1: List<T>) : (list2: List<T>) => List<T> => list2 => ...;

// Exercise 4
// return the element in
//const nth = <T>(n : bigint) : (l: List<T> => Option<T>) => l => ...))

// Exercise 5
// return true if the list is a palindrome
const palindrome = <T>(l : List<T>) : boolean => ...; 
// check if two lists are equal 
const listEquals = <T>(l1 : List<T>) : (l2 : List<T>) => boolean => ...;

// Exercise 6
// remove consecutive duplicates from a list
const compress = <T>(l: List<T>) : List<T> => ...;
// example; [] => [], [1, 1, 2, 3, 3, 4, 4, 4] => [1, 2, 3, 4]
// Exercise 7

const caesarCypher = (l : List<string>): (shift : number) => List<string> => shift => ...;

// Exercise 8

// Exercise 9
// Exercise 10
// Exercise 11
// Exercise 12
// Exercise 13