// Activity 1: Arithmetic Operators

// Task 1: Addition
// Write a program to add two numbers and log the result to the console.
let num1 = 45;
let num2 = 15;
console.log("Addition: num1 + num2 =", num1 + num2); // Output: Addition: num1 + num2 = 60

// Task 2: Subtraction
// Write a program to subtract one number from another and log the result to the console.
num1 = 45;
num2 = 15;
console.log("Subtraction: num1 - num2 =", num1 - num2); // Output: Subtraction: num1 - num2 = 30

// Task 3: Multiplication
// Write a program to multiply two numbers and log the result to the console.
num1 = 45;
num2 = 15;
console.log("Multiplication: num1 * num2 =", num1 * num2); // Output: Multiplication: num1 * num2 = 675

// Task 4: Division
// Write a program to divide one number by another and log the result to the console.
num1 = 45;
num2 = 15;
console.log("Division: num1 / num2 =", num1 / num2); // Output: Division: num1 / num2 = 3

// Task 5: Remainder
// Write a program to find the remainder when one number is divided by another and log the result to the console.
num1 = 45;
num2 = 15;
console.log("Remainder: num1 % num2 =", num1 % num2); // Output: Remainder: num1 % num2 = 0

// Activity 2: Assignment Operators

// Task 6: Addition Assignment
// Use the += operator to add a number to a variable and log the result to the console.
let a = 10;
a += 20;
console.log("Addition Assignment: a += 20, a =", a); // Output: Addition Assignment: a += 20, a = 30

// Task 7: Subtraction Assignment
// Use the -= operator to subtract a number from a variable and log the result to the console.
let b = 14;
b -= 6;
console.log("Subtraction Assignment: b -= 6, b =", b); // Output: Subtraction Assignment: b -= 6, b = 8

// Activity 3: Comparison Operators

// Task 8: Greater than and Less than
// Write a program to compare two numbers using the > and < operators and log the results to the console.
num1 = 12;
num2 = 10;
console.log("Greater than: num1 > num2 =", num1 > num2); // Output: Greater than: num1 > num2 = true
console.log("Less than: num1 < num2 =", num1 < num2); // Output: Less than: num1 < num2 = false

// Task 9: Greater than or equal to and Less than or equal to
// Write a program to compare two numbers using the >= and <= operators and log the results to the console.
console.log("Greater than or equal to: num1 >= num2 =", num1 >= num2); // Output: Greater than or equal to: num1 >= num2 = true
console.log("Less than or equal to: num1 <= num2 =", num1 <= num2); // Output: Less than or equal to: num1 <= num2 = false

// Task 10: Equal to and Strictly equal to
// Write a program to compare two numbers using the == and === operators and log the results to the console.
num1 = 10;
num2 = 10;
console.log("Equal to: num1 == num2 =", num1 == num2); // Output: Equal to: num1 == num2 = true
console.log("Strictly equal to: num1 === num2 =", num1 === num2); // Output: Strictly equal to: num1 === num2 = true

// Activity 4: Logical Operators

// Task 11: Logical AND
// Write a program that uses the && operator to combine two conditions and log the result to the console.
let x = 3, y = 6;
a = 4;
b = 5;
console.log("Logical AND: (x < y) && (a < b) =", (x < y) && (a < b)); // Output: Logical AND: (x < y) && (a < b) = true

// Task 12: Logical OR
// Write a program that uses the || operator to combine two conditions and log the result to the console.
console.log("Logical OR: (x < y) || (a > b) =", (x < y) || (a > b)); // Output: Logical OR: (x < y) || (a > b) = true

// Task 13: Logical NOT
// Write a program that uses the ! operator to negate a condition and log the result to the console.
console.log("Logical NOT: !(x <= y) =", !(x <= y)); // Output: Logical NOT: !(x <= y) = false

// Activity 5: Ternary Operator

// Task 14: Ternary Operator to check if a number is positive or negative
// Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
let number = 7;
let result = (number >= 0 ? "positive" : "negative");
console.log("Number is:", result); // Output: Number is: positive

// Feature Request:
// 1. Arithmetic operations script

// Write a program that performs various arithmetic operations on a variable and logs the results to the console.
let value = 8;

// addition operator
console.log("Addition: value + 2 =", value + 2); // Output: Addition: value + 2 = 10

// subtraction operator
console.log("Subtraction: value - 3 =", value - 3); // Output: Subtraction: value - 3 = 5

// multiplication operator
console.log("Multiplication: value * 3 =", value * 3); // Output: Multiplication: value * 3 = 24

// division operator
console.log("Division: value / 3 =", value / 3); // Output: Division: value / 3 = 2.6666666666666665

// remainder operator
console.log("Remainder: value % 3 =", value % 3); // Output: Remainder: value % 3 = 2

// increment operator
console.log("Increment: ++value =", ++value); // Output: Increment: ++value = 9

// decrement operator
console.log("Decrement: --value =", --value); // Output: Decrement: --value = 8

// exponentiation operator
console.log("Exponentiation: value ** 3 =", value ** 3); // Output: Exponentiation: value ** 3 = 512

// 2. Comparison and logical operators script

// Write a program that uses various comparison and logical operators and logs the results to the console.

// equal to operator
console.log("Equal to: 4 == 4 is", 4 == 4); // Output: Equal to: 4 == 4 is true

// not equal operator
console.log("Not equal to: 4 != 4 is", 4 != 4); // Output: Not equal to: 4 != 4 is false

// strictly equal to operator
console.log("Strictly equal to: 5 === '5' is", 5 === '5'); // Output: Strictly equal to: 5 === '5' is false

// greater than operator
console.log("Greater than: 7 > 10 is", 7 > 10); // Output: Greater than: 7 > 10 is false

// less than operator
console.log("Less than: 7 < 10 is", 7 < 10); // Output: Less than: 7 < 10 is true

// logical AND
console.log((value < 7) && (value > 1)); // Output: false

// logical OR
console.log((value > 5) || (value > 10)); // Output: true

// logical NOT
console.log(!(value == 8)); // Output: false

// 3. Ternary operator script

// Write a program that uses the ternary operator to check if a number is positive or negative and logs the result to the console.
let n1 = -10;
n1 > 0 ? console.log(n1, "is positive") : console.log(n1, "is negative"); // Output: -10 is negative
