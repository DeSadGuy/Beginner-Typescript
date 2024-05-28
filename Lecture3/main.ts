// classic single linked list

type List<T> = {
  value: T;
  next: List<T> | null;
}



function last<T>(list: List<T>): Option<T> {
    if (list === null) {
        return null;
    }
}0