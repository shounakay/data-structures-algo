import { LinkedListNode } from "./linked-list-node";

export class LinkedListStack<T> {
  #head: LinkedListNode<T> | null = null;
  #tail: LinkedListNode<T> | null = null;
  push(value: T) {
    const newNode = new LinkedListNode(value, this.#head);
    this.#head = newNode;
    if (!this.#tail) {
      this.#tail = newNode;
    }
  }
  pop() {
    if (!this.#head) {
      return null;
    }
    const poppedNode = this.#head;
    this.#head = this.#head.next;
    if (!this.#head) {
      this.#tail = null;
    }
    return poppedNode.value;
  }

  top() {
    return this.#head ? this.#head.value : null;
  }
}
