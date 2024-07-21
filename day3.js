// Task 1: Check if a number is positive, negative, or zero, and log the result to the console.
function checkNumberType(num) {
    if (num > 0) {
        console.log("Positive");
    } else if (num < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}

// Outputs
checkNumberType(10);  // Positive
checkNumberType(-5);  // Negative
checkNumberType(0);   // Zero

// Task 2: Check if a person is eligible to vote (age >= 18) and log the result to the console.
function checkVotingStatus(age) {
    if (age >= 18) {
        console.log("Eligible to vote");
    } else {
        console.log("Not eligible to vote");
    }
}

// Outputs
checkVotingStatus(20);  // Eligible to vote
checkVotingStatus(16);  // Not eligible to vote

// Task 3: Find the largest of three numbers using nested if-else statements.
function findLargestNumber(a, b, c) {
    if (a >= b && a >= c) {
        console.log(a);
    } else if (b >= a && b >= c) {
        console.log(b);
    } else {
        console.log(c);
    }
}

// Outputs
findLargestNumber(1, 2, 3);  // 3
findLargestNumber(5, 3, 4);  // 5
findLargestNumber(7, 9, 6);  // 9

// Task 4: Determine the day of the week based on a number (1-7) and log the day name to the console.
function getDayOfWeek(number) {
    switch (number) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day");
            break;
    }
}

// Outputs
getDayOfWeek(3);  // Wednesday
getDayOfWeek(7);  // Sunday
getDayOfWeek(0);  // Invalid day

// Task 5: Assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
function assignLetterGrade(score) {
    switch (true) {
        case (score >= 90):
            console.log('A');
            break;
        case (score >= 80):
            console.log('B');
            break;
        case (score >= 70):
            console.log('C');
            break;
        case (score >= 60):
            console.log('D');
            break;
        case (score < 60):
            console.log('F');
            break;
        default:
            console.log("Invalid score");
            break;
    }
}

// Outputs
assignLetterGrade(85);  // B
assignLetterGrade(72);  // C
assignLetterGrade(59);  // F

// Task 6: Check if a number is even or odd and log the result to the console.
function checkEvenOrOdd(num) {
    console.log(num % 2 === 0 ? "Even" : "Odd");
}

// Outputs
checkEvenOrOdd(10);  // Even
checkEvenOrOdd(7);   // Odd

// Task 7: Check if a year is a leap year using multiple conditions and log the result to the console.
function checkLeapYearStatus(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log("Leap year");
    } else {
        console.log("Not a leap year");
    }
}

// Outputs
checkLeapYearStatus(2020);  // Leap year
checkLeapYearStatus(2021);  // Not a leap year
checkLeapYearStatus(1900);  // Not a leap year
checkLeapYearStatus(2000);  // Leap year


// Feature Requests

// 1. Check if a number is positive, negative, or zero and log the result to the console.
function determineNumberType(num) {
    if (num > 0) {
        console.log("Positive");
    } else if (num < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}

// Outputs
determineNumberType(5);  // Positive
determineNumberType(-3); // Negative
determineNumberType(0);  // Zero

// 2. Check if a person is eligible to vote (age >= 18) and log the result to the console.
function isEligibleToVote(age) {
    if (age >= 18) {
        console.log("Eligible to vote");
    } else {
        console.log("Not eligible to vote");
    }
}

// Outputs
isEligibleToVote(25); // Eligible to vote
isEligibleToVote(17); // Not eligible to vote

// 3. Determine the day of the week based on a number (1-7) and log the day name to the console.
function getDayName(number) {
    switch (number) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day");
            break;
    }
}

// Outputs
getDayName(5); // Friday
getDayName(2); // Tuesday
getDayName(0); // Invalid day

// 4. Assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
function assignGrade(score) {
    switch (true) {
        case (score >= 90):
            console.log('A');
            break;
        case (score >= 80):
            console.log('B');
            break;
        case (score >= 70):
            console.log('C');
            break;
        case (score >= 60):
            console.log('D');
            break;
        case (score < 60):
            console.log('F');
            break;
        default:
            console.log("Invalid score");
            break;
    }
}

// Outputs
assignGrade(95); // A
assignGrade(67); // D
assignGrade(50); // F

// 5. Check if a year is a leap year using multiple conditions and log the result to the console.
function determineLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log("Leap year");
    } else {
        console.log("Not a leap year");
    }
}

// Outputs
determineLeapYear(2000); // Leap year
determineLeapYear(2001); // Not a leap year
determineLeapYear(1900); // Not a leap year
