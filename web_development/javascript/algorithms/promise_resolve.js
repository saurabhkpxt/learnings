function resolvePromise(value) {
  return Promise.resolve(value);
}
// Example usage of the resolvePromise function
const value = 42;

resolvePromise(value)
  .then((result) => {
    console.log("Resolved value:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
