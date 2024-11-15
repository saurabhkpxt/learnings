function promiseWithResolvers() {
  let resolve, reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });

  return {
    promise,
    resolve,
    reject
  };
}

// Example usage of the promiseWithResolvers function
const { promise, resolve, reject } = promiseWithResolvers();

promise
  .then((result) => {
    console.log("Promise resolved:", result);
  })
  .catch((error) => {
    console.error("Promise rejected:", error);
  });

setTimeout(() => {
  resolve("Success!");
}, 2000);


