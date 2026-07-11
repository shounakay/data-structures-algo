export class LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T> | null;
  constructor(value: T, node: LinkedListNode<T> | null = null) {
    this.value = value;
    this.next = node;
  }
}
