// This code is a React component that demonstrates the use of a custom throttle function.
// The throttle function is designed to limit the rate at which a function can be invoked.

import React, { useCallback, useRef } from "react";

// The throttle function takes a function 'func' and a delay 'wait' in milliseconds.
function throttle(func, wait) {
  let lastCall = 0; // Stores the timestamp of the last function call.

  // The throttled function is returned, which will be called instead of the original function.
  const throttled = function (...args) {
    const now = Date.now(); // Get the current timestamp.
    if (now - lastCall >= wait) { // Check if the wait time has passed since the last call.
      lastCall = now; // Update the last call timestamp.
      func.apply(this, args); // Call the function with the current context and arguments.
    }
  };

  return throttled; // Return the throttled function.
}

// The ThrottledComponent is a React component that uses the throttle function.
export default function ThrottledComponent() {
  // Define an input handler that logs the input value.
  const inputHandler = useCallback((event) => {
    console.log("Input value:", event.target.value);
  }, []);

  // Define a button handler that logs a message when the button is clicked.
  const buttonHandler = useCallback(() => {
    console.log("Button clicked!");
  }, []);

  // Use useRef to persist the throttled functions across component renders.
  const throttledInputHandler = useRef(throttle(inputHandler, 1000)).current;
  const throttledButtonHandler = useRef(throttle(buttonHandler, 1000)).current;

  // Render the component with input and buttons.
  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        onChange={throttledInputHandler} // Attach the throttled input handler.
      />
      <button onClick={throttledButtonHandler}>Submit</button> {/* Attach the throttled button handler. */}
    </div>
  );
}
