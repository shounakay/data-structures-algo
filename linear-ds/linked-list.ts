import { LinkedListNode } from "./linked-list-node";

export class LinkedList<T> {
  #head: LinkedListNode<T> | null;
  #tail: LinkedListNode<T> | null;
  #counter: number;
  constructor() {
    this.#head = null;
    this.#tail = null;
    this.#counter = 0;
  }
  addNode(value: T): void {
    const newNode = new LinkedListNode(value);
    this.#counter++;
    if (!this.#head) {
      this.#head = newNode;
      this.#tail = newNode;
    } else if (this.#tail) {
      this.#tail.next = newNode;
      this.#tail = newNode;
    }
  }

  prepend(value: T): void {
    const newNode = new LinkedListNode(value, this.#head);
    this.#head = newNode;
    if (!this.#tail) {
      this.#tail = newNode;
    }
    this.#counter++;
  }

  insert(value: T, index: number) {
    if (index === 0) {
      this.prepend(value);
    } else {
      let currentNode = this.#head;
      let count = 1;
      while (currentNode) {
        if (count === index) {
          const newNode = new LinkedListNode(value, currentNode.next);
          if (currentNode.next === null) {
            this.#tail = newNode;
          }
          currentNode.next = newNode;
          break;
        } else {
          count++;
          currentNode = currentNode.next;
        }
      }
      this.#counter++;
    }
  }

  delete(value: T) {
    if (!this.#head) {
      return null;
    }
    let deletedNode: LinkedListNode<T> | null = null;
    if (this.#head.value === value) {
      this.#head = this.#head.next;
      if (!this.#head) {
        this.#tail = null;
      }
    }
    let currentNode = this.#head;
    while (currentNode?.next) {
      if (currentNode.next?.value === value) {
        deletedNode = currentNode.next;
        currentNode.next = currentNode.next.next;
        if (!currentNode.next) {
          this.#tail = currentNode;
        }
        break;
      } else {
        currentNode = currentNode.next;
      }
    }
    this.#counter--;
    return deletedNode;
  }

  find(value: T): LinkedListNode<T> | null {
    if (!this.#head) {
      return null;
    }
    let currentNode: LinkedListNode<T> | null = this.#head;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      } else {
        currentNode = currentNode.next;
      }
    }
    return null;
  }

  reverse() {
    if (!this.#head) {
      return;
    }
    let prevNode = this.#head;
    let currentNode = this.#head.next;
    this.#head.next = null;
    this.#tail = this.#head;
    while (currentNode) {
      const nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
      if (!nextNode) {
        this.#head = prevNode;
      }
    }
  }
}
