function promiseTimeout(promise, timeout) {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error('Promise timed out'));
    }, timeout);

    promise
      .then((result) => {
        clearTimeout(timeoutId);
        resolve(result);
      })
      .catch((error) => {
        clearTimeout(timeoutId);
        reject(error);
      });
  });
}
// Example usage of the promiseTimeout function
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Data fetched successfully');
  }, 2000);
});

promiseTimeout(fetchData, 1000)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error.message);
  });

