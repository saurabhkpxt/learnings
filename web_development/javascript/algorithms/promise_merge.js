function mergePromises(promise1, promise2) {
  return Promise.all([promise1, promise2])
    .then(([result1, result2]) => {
      return [result1, result2];
    });
}
// Example usage of the mergePromises function
const promise1 = Promise.resolve("Hello");
const promise2 = Promise.resolve("World");

mergePromises(promise1, promise2)
  .then(([result1, result2]) => {
    console.log(result1 + " " + result2); // Output: Hello World
  })
  .catch((error) => {
    console.error("Error:", error);
  });
