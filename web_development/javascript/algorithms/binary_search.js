// The binarySearch function is an implementation of the binary search algorithm.
// It takes a sorted array 'arr' and a 'target' value to find within the array.
// The function returns the index of the target if found, or -1 if the target is not in the array.

function binarySearch(arr, target) {
  let left = 0; // Initialize the left boundary of the search range to the first index.
  let right = arr.length - 1; // Initialize the right boundary to the last index of the array.

  // Continue searching while the left boundary is less than or equal to the right boundary.
  while (left <= right) {
    // Calculate the middle index of the current search range.
    const mid = Math.floor((left + right) / 2);

    // Check if the middle element is equal to the target.
    if (arr[mid] === target) {
      return mid; // If found, return the index of the middle element.
    } else if (arr[mid] < target) {
      left = mid + 1; // If the middle element is less than the target, search in the right half.
    } else {
      right = mid - 1; // If the middle element is greater than the target, search in the left half.
    }
  }

  return -1; // If the target is not found, return -1.
}
// Example usage of the binarySearch function

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 7;

const result = binarySearch(array, target);

if (result !== -1) {
  console.log(`Target found at index: ${result}`); // Output: Target found at index: 6
} else {
  console.log("Target not found in the array");
}
