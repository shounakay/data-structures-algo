class Stack<T> {
  stack: T[];
  constructor() {
    this.stack = [];
  }

  push(item: T) {
    this.stack.push(item);
  }

  pop(): T | undefined {
    return this.stack.pop();
  }

  peek(): T | undefined {
    return this.stack[this.stack.length - 1];
  }

  isFull(): Boolean {
    return Boolean(this.stack.length);
  }
}

const stack = new Stack();
stack.push(24);
console.log(stack.peek()); // 24
