// Task 1: Print numbers from 1 to 10 using a for loop.
console.log("Task 1:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// Output:
// Task 1:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// Task 2: Print the multiplication table of 5 using a for loop.
console.log("Task 2:");
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}
// Output:
// Task 2:
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50

// Task 3: Calculate the sum of numbers from 1 to 10 using a while loop.
console.log("Task 3:");
let sum = 0;
let counter = 1;
while (counter <= 10) {
  sum += counter;
  counter++;
}
console.log("Sum:", sum);
// Output:
// Task 3:
// Sum: 55

// Task 4: Print numbers from 10 to 1 using a while loop.
console.log("Task 4:");
let num = 10;
while (num >= 1) {
  console.log(num);
  num--;
}
// Output:
// Task 4:
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

// Task 5: Print numbers from 1 to 5 using a do...while loop.
console.log("Task 5:");
let n = 1;
do {
  console.log(n);
  n++;
} while (n <= 5);
// Output:
// Task 5:
// 1
// 2
// 3
// 4
// 5

// Task 6: Calculate the factorial of a number using a do...while loop.
console.log("Task 6:");
let number = 5; // Example number
let factorial = 1;
let count = number;
do {
  factorial *= count;
  count--;
} while (count >= 1);
console.log(`Factorial of ${number}:`, factorial);
// Output:
// Task 6:
// Factorial of 5: 120

// Task 7: Print a pattern using nested for loops.
console.log("Task 7:");
for(let i=0;i<5;i++){
    let line = ""
    for(let j=0;j<=i;j++){
        line += "* "
    }
    console.log(line);
}

// Output:
// Task 7:
// *
// * *
// * * *
// * * * *
// * * * * *

// Task 8: Print numbers from 1 to 10, skipping the number 5 using the continue statement.
console.log("Task 8:");
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
// Output:
// Task 8:
// 1
// 2
// 3
// 4
// 6
// 7
// 8
// 9
// 10

// Task 9: Print numbers from 1 to 10, stop the loop when the number is 7 using the break statement.
console.log("Task 9:");
for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}
// Output:
// Task 9:
// 1
// 2
// 3
// 4
// 5
// 6

// Feature 1: Script to print numbers from 1 to 10 using for and while loops.
console.log("Feature 1:");
console.log("Using for loop:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// Output:
// Feature 1:
// Using for loop:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

console.log("Using while loop:");
let num1 = 1;
while (num1 <= 10) {
  console.log(num1);
  num1++;
}
// Output:
// Feature 1:
// Using while loop:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// Feature 2: Script to print the multiplication table of 5 using a for loop.
console.log("Feature 2:");
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}
// Output:
// Feature 2:
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50

// Feature 3: Script to print a pattern of stars using nested loops.
console.log("Feature 3:");
for (let i = 1; i <= 4; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "* ";
  }
  console.log(line.trim());
}
// Output:
// Feature 3:
// *
// * *
// * * *
// * * * *
// * * * * * 

// Feature 4: Script to calculate the sum of numbers from 1 to 10 using a while loop.
console.log("Feature 4:");
let total = 0;
let counter1 = 1;
while (counter1 <= 10) {
  total += counter1;
  counter1++;
}
console.log("Sum:", total);
// Output:
// Feature 4:
// Sum: 55

// Feature 5: Script to calculate the factorial of a number using a do...while loop.
console.log("Feature 5:");
let num2 = 5; // Example number
let fact = 1;
let counter2 = num2;
do {
  fact *= counter2;
  counter2--;
} while (counter2 >= 1);
console.log(`Factorial of ${num2}:`, fact);
// Output:
// Feature 5:
// Factorial of 5: 120
