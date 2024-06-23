// classic single linked list
// Single Linked List 
export type List<T> = {
  kind: "empty"
}   
  | // or
{
  kind: "list", 
  head: T, 
  tail: List<T>
};

// Create Optional value
export type Option<T> = {
  kind: "none"
}
  | // or
{
  kind: "some",
  value: T
};


// create linked list from array
export const list = <T>(array: T[]): List<T> => {
  if (array.length === 0) {
      return { kind: "empty" };
  }
  else if (array.length === 1) {
      return { kind: "list", head: array[0], tail: { kind: "empty" } };
  }
  else {
      return { kind: "list", head: array[0], tail: list(array.slice(1)) };
  }

}

// check the length of linked list
export const listLength = <T>(l: List<T>) : number => {
  if (l.kind === "empty") {
      return 0;
  }
  return 1 + listLength(l.tail);
}

export const sumList = (l: List<number>) : number => {
  if (l.kind === "empty") {
      return 0;
  }
  return l.head + sumList(l.tail);
}

export const printList = <T>(l: List<T>) : void => {
  if (l.kind === "empty") {
      return;
  }
  process.stdout.write(l.head + " ",);
  printList(l.tail);
}




