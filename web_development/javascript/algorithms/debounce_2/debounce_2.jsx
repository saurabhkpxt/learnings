// This code is a React component that demonstrates the use of a custom debounce function.
// The debounce function is designed to limit the rate at which a function can be invoked.

import React, { useCallback, useRef } from "react";

// The debounce function takes a function 'func' and a delay 'wait' in milliseconds.
function debounce(func, wait) {
  let timeout; // Stores the timeout ID for the delayed function call.

  // The debounced function is returned, which will be called instead of the original function.
  const debounced = function (...args) {
    // Clear any existing timeout to reset the delay.
    clearTimeout(timeout);
    // Set a new timeout to call the function after the specified delay.
    timeout = setTimeout(() => {
      func.apply(this, args); // Call the function with the current context and arguments.
    }, wait);
  };

  return debounced; // Return the debounced function.
}

// The DebouncedComponent is a React component that uses the debounce function.
export default function DebouncedComponent() {
  // Define an input handler that logs the input value.
  const inputHandler = useCallback((event) => {
    console.log("Input value:", event.target.value);
  }, []);

  // Define a button handler that logs a message when the button is clicked.
  const buttonHandler = useCallback(() => {
    console.log("Button clicked!");
  }, []);

  // Use useRef to persist the debounced functions across component renders.
  const debouncedInputHandler = useRef(debounce(inputHandler, 1000)).current;
  const debouncedButtonHandler = useRef(debounce(buttonHandler, 1000)).current;

  // Render the component with input and buttons.
  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        onChange={debouncedInputHandler} // Attach the debounced input handler.
      />
      <button onClick={debouncedButtonHandler}>Submit</button> {/* Attach the debounced button handler. */}
    </div>
  );
}
