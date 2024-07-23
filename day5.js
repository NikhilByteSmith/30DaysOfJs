// Activity 1: Function Declaration

// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function checkEvenOrOdd(num) {
    if (num % 2 === 0) {
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd`);
    }
}
// Example Output:
checkEvenOrOdd(3); // 3 is odd
checkEvenOrOdd(4); // 4 is even

// Task 2: Write a function to calculate the square of a number and return the result.
function calculateSquare(num) {
    return num * num;
}
// Example Output:
console.log(calculateSquare(3)); // 9
console.log(calculateSquare(4)); // 16

// Activity 2: Function Expression

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const getMax = function(x, y) {
    let max = x > y ? x : y;
    console.log(`The maximum of ${x} and ${y} is ${max}`);
};
// Example Output:
getMax(3, 5); // The maximum of 3 and 5 is 5
getMax(7, 2); // The maximum of 7 and 2 is 7

// Task 4: Write a function expression to concatenate two strings and return the result.
const combineStrings = function(string1, string2) {
    return string1 + string2;
};
// Example Output:
console.log(combineStrings('Hello, ', 'world!')); // Hello, world!

// Activity 3: Arrow Functions

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const add = (num1, num2) => num1 + num2;
// Example Output:
console.log(add(3, 5)); // 8

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const hasCharacter = (text, char) => text.includes(char);
// Example Output:
console.log(hasCharacter('Hello, world!', 'w')); // true
console.log(hasCharacter('Hello, world!', 'z')); // false

// Activity 4: Function Parameters and Default Values

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function multiplyNums(a, b = 1) {
    return a * b;
}
// Example Output:
console.log(multiplyNums(5, 2)); // 10
console.log(multiplyNums(5)); // 5

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function greetPerson(name, age = 30) {
    return `Hello, ${name}! You are ${age} years old.`;
}
// Example Output:
console.log(greetPerson('John', 25)); // Hello, John! You are 25 years old.
console.log(greetPerson('Jane')); // Hello, Jane! You are 30 years old.

// Activity 5: Higher-Order Functions

// Task 9: Write a higher-order function that takes a function and a number, and calls that function that many times.
function repeatFunction(fn, times) {
    for (let i = 0; i < times; i++) {
        fn();
    }
}
// Example Output:
repeatFunction(() => console.log('Hello'), 3);
// Hello
// Hello
// Hello

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function applyFuncs(fn1, fn2, value) {
    return fn2(fn1(value));
}
// Example Output:
const double = x => x * 2;
const square = x => x * x;
console.log(applyFuncs(double, square, 3)); // 36 (double(3) = 6, square(6) = 36)

// Feature Request:

// 1. Even or Odd Function Script
function evenOrOddScript(num) {
    checkEvenOrOdd(num);
}
// Example Output:
evenOrOddScript(7); // 7 is odd
evenOrOddScript(10); // 10 is even

// 2. Square Calculation Function Script
function squareCalculationScript(num) {
    console.log(calculateSquare(num));
}
// Example Output:
squareCalculationScript(6); // 36

// 3. Concatenation Function Script
function concatenationFunctionScript(str1, str2) {
    console.log(combineStrings(str1, str2));
}
// Example Output:
concatenationFunctionScript('Good ', 'morning!'); // Good morning!

// 4. Sum Calculation Arrow Function Script
function sumCalculationArrowFunctionScript(num1, num2) {
    console.log(add(num1, num2));
}
// Example Output:
sumCalculationArrowFunctionScript(10, 15); // 25

// 5. Higher-Order Function Script
function higherOrderFunctionScript(fn1, fn2, value) {
    console.log(applyFuncs(fn1, fn2, value));
}
// Example Output:
higherOrderFunctionScript(double, square, 4); // 64
