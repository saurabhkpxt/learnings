// This code is a React component that demonstrates the use of a custom debounce function.
// The debounce function is designed to limit the rate at which a function can be invoked.
// It includes additional methods to cancel pending invocations and to immediately execute them.

import React, { useCallback, useRef } from "react";

// The debounce function takes a function 'func' and a delay 'wait' in milliseconds.
function debounce(func, wait) {
  let timeout; // Stores the timeout ID for the delayed function call.
  let lastArgs; // Stores the arguments of the last invocation.
  let lastContext; // Stores the context of the last invocation.

  // The debounced function is returned, which will be called instead of the original function.
  const debounced = function (...args) {
    lastArgs = args; // Save the current arguments.
    lastContext = this; // Save the current context.

    // Clear any existing timeout to reset the delay.
    clearTimeout(timeout);
    // Set a new timeout to call the function after the specified delay.
    timeout = setTimeout(() => {
      func.apply(lastContext, lastArgs); // Call the function with the saved context and arguments.
      timeout = null; // Reset the timeout.
      lastArgs = null; // Clear the saved arguments.
      lastContext = null; // Clear the saved context.
    }, wait);
  };

  // Method to cancel the pending invocation.
  debounced.cancel = function () {
    clearTimeout(timeout); // Clear the timeout.
    timeout = null; // Reset the timeout.
    lastArgs = null; // Clear the saved arguments.
    lastContext = null; // Clear the saved context.
  };

  // Method to immediately invoke the pending function call.
  debounced.flush = function () {
    if (timeout) { // Check if there is a pending invocation.
      func.apply(lastContext, lastArgs); // Call the function immediately.
      debounced.cancel(); // Cancel the timeout and clear saved data.
    }
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

  // Handler to cancel the debounced function calls.
  const handleCancel = () => {
    debouncedInputHandler.cancel(); // Cancel the input handler.
    debouncedButtonHandler.cancel(); // Cancel the button handler.
    console.log("Debounce cancelled");
  };

  // Handler to immediately execute the debounced function calls.
  const handleFlush = () => {
    debouncedInputHandler.flush(); // Flush the input handler.
    debouncedButtonHandler.flush(); // Flush the button handler.
    console.log("Debounce flushed");
  };

  // Render the component with input and buttons.
  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        onChange={debouncedInputHandler} // Attach the debounced input handler.
      />
      <button onClick={debouncedButtonHandler}>Submit</button> {/* Attach the debounced button handler. */}
      <button onClick={handleCancel}>Cancel Debounce</button> {/* Button to cancel debounce. */}
      <button onClick={handleFlush}>Flush Debounce</button> {/* Button to flush debounce. */}
    </div>
  );
}
