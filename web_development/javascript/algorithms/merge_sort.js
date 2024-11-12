function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr; // Base case: arrays with 0 or 1 element are already sorted
  }

  const mid = Math.floor(arr.length / 2); // Find the middle index
  const left = arr.slice(0, mid); // Divide the array into left half
  const right = arr.slice(mid); // Divide the array into right half

  return merge(mergeSort(left), mergeSort(right)); // Recursively sort both halves and merge them
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from left and right arrays and merge them in sorted order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Concatenate any remaining elements from left or right arrays
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage of the mergeSort function
const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(array);
console.log("Sorted array:", sortedArray); // Output: Sorted array: [3, 9, 10, 27, 38, 43, 82]

