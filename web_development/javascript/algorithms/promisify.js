//implement a function that takes a function following the common error-first callback style, and return a version that returns promises.
function promisify(func) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      func(...args, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };
}

// Example usage of the promisify function
function readFile(file, callback) {
  // Simulating an asynchronous file read operation
  setTimeout(() => {
    if (file === 'example.txt') {
      callback(null, 'File content');
    } else {
      callback(new Error('File not found'));
    }
  }, 1000);
}

const promisifiedReadFile = promisify(readFile);

promisifiedReadFile('example.txt')
  .then((content) => {
    console.log('File content:', content);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });

promisifiedReadFile('nonexistent.txt')
  .then((content) => {
    console.log('File content:', content);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });

