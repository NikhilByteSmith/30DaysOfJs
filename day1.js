// Activity 1: Variable Declaration

// Task 1: Declare a variable using `var`, assign it a number, and log the value to the console.

var x = 99;
console.log(x); // Output: 99

// Task 2: Declare a variable using `let`, assign it a string, and log the value to the console.

let string = "Hello";
console.log(string); // Output: Hello

// Activity 2: Constant Declaration

// Task 3: Declare a variable using `const`, assign it a boolean value, and log the value to the console.

const Constbool = false;
console.log(Constbool); // Output: false

// Activity 3: Data Types

// Task 4: Create variables of different data types and log each variable's type using the `typeof` operator.

let num = 100; // Number
let str = "JavaScript"; // String
let bool = false; // Boolean
let nothing = null; // Null
let notDefined; // Undefined
let sym = Symbol('id'); // Symbol
let obj = { name: "Riya", Number: 7 }; // Object
let arr = [1, 2, 3, 4, 5]; // Array


console.log(typeof (num));  // Output: number
console.log(typeof (str));  // Output: string
console.log(typeof (bool)); // Output: boolean
console.log(typeof (nothing)); // Output: object 
console.log(typeof (notDefined)); // Output: undefined
console.log(typeof (sym)); // Output: symbol
console.log(typeof (obj)); // Output: object
console.log(typeof (arr)); // Output: object (Arrays are a type of object in JavaScript)

// Activity 4: Reassigning Variables

// Task 5: Declare a variable using `let`, assign it an initial value, reassign a new value, and log both values to the console.

let value = "Initial Value";
console.log(value); // Output: Initial Value
value = "New Value";
console.log(value); // Output: New Value

// Activity 5: Understanding `const`

// Task 6: Try reassigning a variable declared with `const` and observe the error.

const constValue = "Constant Value";
console.log(constValue); // Output: Constant Value
// Uncommenting the next line will cause an error
// constValue = "New Value"; // Error: Assignment to constant variable.

// Feature Request:

// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

let TypeNumber = 999;
let TypeString = "Hi";
let TypeBoolean = false;
let TypeObject = { name: "John Doe", age: 99 };
let TypeArray = [1, 2, 4, 8, 16];
let TypeUndefined;
let TypeNull = null;

console.log("Value: ", TypeNumber, ", Type: ", typeof TypeNumber);
// Output: Value:  <value of TypeNumber>, Type: number

console.log("Value: ", TypeString, ", Type: ", typeof TypeString);
// Output: Value:  <value of TypeString>, Type: string

console.log("Value: ", TypeBoolean, ", Type: ", typeof TypeBoolean);
// Output: Value:  <value of TypeBoolean>, Type: boolean

console.log("Value: ", TypeObject, ", Type: ", typeof TypeObject);
// Output: Value:  <value of TypeObject>, Type: object

console.log("Value: ", TypeArray, ", Type: ", typeof TypeArray);
// Output: Value:  <value of TypeArray>, Type: object (Arrays are a type of object in JavaScript)

console.log("Value: ", TypeUndefined, ", Type: ", typeof TypeUndefined);
// Output: Value:  <value of TypeUndefined>, Type: undefined

console.log("Value: ", TypeNull, ", Type: ", typeof TypeNull);
// Output: Value:  <value of Typenull>, Type: object

// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between `let` and `const` when it comes to reassignment.

let letVariable = "I can be reassigned";
console.log(letVariable); // Output: I can be reassigned
letVariable = "I've been reassigned";
console.log(letVariable); // Output: I've been reassigned

const constVariable = "I cannot be reassigned";
console.log(constVariable); // Output: I cannot be reassigned
// Uncommenting the next line will cause an error
// constVariable = "Attempting reassignment"; // Error: Assignment to constant variable.