class Stack {
  constructor() {
    this.items = [];
  }

  // Pushes an element onto the stack
  push(element) {
    this.items.push(element);
  }

  // Removes and returns the top element of the stack
  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  // Returns the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return "No elements in Stack";
    }
    return this.items[this.items.length - 1];
  }

  // Returns true if the stack is empty, false otherwise
  isEmpty() {
    return this.items.length === 0;
  }

  // Returns the size of the stack
  size() {
    return this.items.length;
  }

  // Prints the elements of the stack
  printStack() {
    return this.items.join(" ");
  }
}

// Example usage of the Stack class

// Create a new stack
const stack = new Stack();

// Push elements onto the stack
stack.push(10);
stack.push(20);
stack.push(30);

// Print the stack
console.log("Stack elements:", stack.printStack()); // Output: Stack elements: 10 20 30

// Get the top element
console.log("Top element:", stack.peek()); // Output: Top element: 30

// Get the size of the stack
console.log("Stack size:", stack.size()); // Output: Stack size: 3

// Pop an element from the stack
console.log("Popped element:", stack.pop()); // Output: Popped element: 30

// Print the stack after popping
console.log("Stack elements after pop:", stack.printStack()); // Output: Stack elements after pop: 10 20

// Check if the stack is empty
console.log("Is stack empty?", stack.isEmpty()); // Output: Is stack empty? false

