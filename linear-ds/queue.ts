export class Queue<T> {
  #queue: T[] = [];
  enqueue(value: T) {
    this.#queue.push(value);
  }
  dequeue() {
    return this.#queue.shift();
  }
  isEmpty() {
    return !this.isFull();
  }
  isFull() {
    return !!this.#queue.length;
  }
  peek() {
    return this.#queue[0];
  }
}
