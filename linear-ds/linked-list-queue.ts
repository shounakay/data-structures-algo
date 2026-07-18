import { LinkedListNode } from "./linked-list-node";

export class LinkedListQueue<T> {
  #head: LinkedListNode<T> | null;
  #tail: LinkedListNode<T> | null;
  #counter: number;
  constructor() {
    this.#head = null;
    this.#tail = null;
    this.#counter = 0;
  }
  enqueue(value: T) {
    const newNode = new LinkedListNode(value);
    this.#counter++;
    if (!this.#head) {
      this.#head = newNode;
      this.#tail = newNode;
    } else {
      this.#tail!.next = newNode;
      this.#tail = newNode;
    }
  }

  dequeue(): T | null {
    if (!this.#head) {
      return null;
    }
    let dequeued = null;
    if (this.#counter === 1) {
      dequeued = this.#head.value;
      this.#head = null;
      this.#tail = null;
      this.#counter--;
      return dequeued;
    }
    dequeued = this.#head.value;
    this.#head = this.#head.next;
    this.#counter--;
    return dequeued;
  }
}
