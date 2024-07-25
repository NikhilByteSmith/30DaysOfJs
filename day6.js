// Activity 1: Array Creation and Access

// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
let numbersArray = [1, 2, 3, 4, 5];
console.log("Array:", numbersArray); 
// Output: Array: [1, 2, 3, 4, 5]

// Task 2: Access the first and last elements of the array and log them to the console.
console.log("First element:", numbersArray[0]); 
// Output: First element: 1

console.log("Last element:", numbersArray[numbersArray.length - 1]); 
// Output: Last element: 5

// Activity 2: Array Methods (Basic)

// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
numbersArray.push(6);
console.log("Array after push:", numbersArray); 
// Output: Array after push: [1, 2, 3, 4, 5, 6]

// Task 4: Use the pop method to remove the last element from the array and log the updated array.
numbersArray.pop();
console.log("Array after pop:", numbersArray); 
// Output: Array after pop: [1, 2, 3, 4, 5]

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
numbersArray.shift();
console.log("Array after shift:", numbersArray); 
// Output: Array after shift: [2, 3, 4, 5]

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
numbersArray.unshift(1);
console.log("Array after unshift:", numbersArray); 
// Output: Array after unshift: [1, 2, 3, 4, 5]

// Activity 3: Array Methods (Intermediate)

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let doubledNumbersArray = numbersArray.map(num => num * 2);
console.log("Doubled array:", doubledNumbersArray); 
// Output: Doubled array: [2, 4, 6, 8, 10]

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
let evenNumbersArray = numbersArray.filter(num => num % 2 === 0);
console.log("Even array:", evenNumbersArray); 
// Output: Even array: [2, 4]

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
let sumOfNumbers = numbersArray.reduce((acc, num) => acc + num, 0);
console.log("Sum of array:", sumOfNumbers); 
// Output: Sum of array: 15

// Activity 4: Array Iteration

// Task 10: Use a for loop to iterate over the array and log each element to the console.
console.log("Array elements using for loop:");
for (let i = 0; i < numbersArray.length; i++) {
    console.log(numbersArray[i]);
}
// Output:
// Array elements using for loop:
// 1
// 2
// 3
// 4
// 5

// Task 11: Use the forEach method to iterate over the array and log each element to the console.
console.log("Array elements using forEach:");
numbersArray.forEach(num => console.log(num));
// Output:
// Array elements using forEach:
// 1
// 2
// 3
// 4
// 5

// Activity 5: Multi-dimensional Arrays

// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
let matrixArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Matrix:", matrixArray);
// Output: Matrix: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// Task 13: Access and log a specific element from the two-dimensional array.
console.log("Element at [1][1]:", matrixArray[1][1]);
// Output: Element at [1][1]: 5

// Feature Request Scripts

// 1. Array Manipulation Script: Demonstrate creation, adding, and removing elements using push, pop, shift, and unshift.
let numberArray = [10, 20, 30];
numberArray.push(40); // Add to end
numberArray.pop();    // Remove from end
numberArray.shift();  // Remove from beginning
numberArray.unshift(5); // Add to beginning
console.log("Array after manipulations:", numberArray); 
// Output: Array after manipulations: [5, 20, 30]

// 2. Array Transformation Script: Create a script that uses map, filter, and reduce methods to transform and aggregate array data.
let doubledFilteredArray = numberArray.map(num => num * 2).filter(num => num > 20);
let totalValue = doubledFilteredArray.reduce((acc, num) => acc + num, 0);
console.log("Transformed array:", doubledFilteredArray); 
// Output: Transformed array: [40, 60]

console.log("Aggregated value:", totalValue); 
// Output: Aggregated value: 100

// 3. Array Iteration Script: Iterate over an array using both for loop and forEach method and log each element.
let sampleArray = [5, 10, 15];
console.log("Iteration using for loop:");
for (let i = 0; i < sampleArray.length; i++) {
    console.log(sampleArray[i]);
}
// Output:
// Iteration using for loop:
// 5
// 10
// 15

console.log("Iteration using forEach:");
sampleArray.forEach(value => console.log(value));
// Output:
// Iteration using forEach:
// 5
// 10
// 15

// 4. Two-dimensional Array Script: Create and manipulate a two-dimensional array.
let matrix2D = [
    [1, 2],
    [3, 4]
];
matrix2D.push([5, 6]); // Add new row
matrix2D[0].push(7);   // Add new element to existing row
console.log("Two-dimensional array after manipulations:", matrix2D); 
// Output: Two-dimensional array after manipulations: [[1, 2, 7], [3, 4], [5, 6]]
