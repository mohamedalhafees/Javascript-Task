
// TASK 1 — var, let, const

console.log("===== TASK 1 =====");

var studentName = "Mohamed";
let studentAge = 25;
const collegeName = "Aalim Muhammed Salegh College Of Engineering";

console.log(studentName);
console.log(studentAge);
console.log(collegeName);

studentName = "Mohamed Alhafees";
console.log(studentName);

studentAge = 26;
console.log(studentAge);
var studentName = "Abdul Rahman";
console.log(studentName);

// TASK 2 — User Information

console.log("===== TASK 2 =====");

let name = prompt("Enter your name:");
let age = prompt("Enter your age:");
let city = prompt("Enter your city:");

console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);

// TASK 3 — Welcome Message

console.log("===== TASK 3 =====");

let userName = prompt("Enter your name:");

alert("Welcome " + userName + "!");

// TASK 4 — Age Calculator

console.log("===== TASK 4 =====");

let birthYear = prompt("Enter your birth year:");

let currentYear = 2026;

let userAge = currentYear - birthYear;

console.log("Birth Year:", birthYear);
console.log("Age:", userAge);

// TASK 5 — Identify Data Types

console.log("===== TASK 5 =====");

let text = "Hello";
let number = 100;
let decimalNumber = 25.5;
let trueValue = true;
let falseValue = false;
let emptyValue;
let nullValue = null;

console.log(text, typeof text);
console.log(number, typeof number);
console.log(decimalNumber, typeof decimalNumber);
console.log(trueValue, typeof trueValue);
console.log(falseValue, typeof falseValue);
console.log(emptyValue, typeof emptyValue);
console.log(nullValue, typeof nullValue);

// TASK 6 — Student Data Object

console.log("===== TASK 6 =====");

let student = {
    name: "Mohamed Alhafees",
    age: 25,
    city: "Mayiladuthurai",
    qualification: "B.E",
    isStudent: true
};

console.log(student);

console.log(student.name);
console.log(student.age);
console.log(student.qualification);
console.log(student.isStudent);

// TASK 7 — Fruit Array

console.log("===== TASK 7 =====");

let fruits = [
    "Apple",
    "Mango",
    "Orange",
    "Banana",
    "Grapes",
    "Papaya"
];

console.log("First Fruit:", fruits[0]);
console.log("Second Fruit:", fruits[1]);

console.log("Last Fruit:", fruits[fruits.length - 1]);

console.log("Total Fruits:", fruits.length);

// TASK 8 — Basic Calculator

console.log("===== TASK 8 =====");

let a = 20;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

// TASK 9 — Shopping Bill

console.log("===== TASK 9 =====");

let shirt = 999;
let pant = 1499;
let shoes = 1999;

let totalPrice = shirt + pant + shoes;

console.log("Shirt:", shirt);
console.log("Pant:", pant);
console.log("Shoes:", shoes);
console.log("Total:", totalPrice);

// TASK 10 — Simple Marks Calculation

console.log("===== TASK 10 =====");

let tamil = 80;
let english = 75;
let maths = 90;

let totalMarks = tamil + english + maths;
let averageMarks = totalMarks / 3;

console.log("Tamil:", tamil);
console.log("English:", english);
console.log("Maths:", maths);

console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);

// TASK 11 — Post Increment

console.log("===== TASK 11 =====");

let postIncrementA = 10;

let postIncrementB = postIncrementA++;

console.log("a:", postIncrementA);
console.log("b:", postIncrementB);

// TASK 12 — Pre Increment

console.log("===== TASK 12 =====");

let preIncrementA = 10;

let preIncrementB = ++preIncrementA;

console.log("a:", preIncrementA);
console.log("b:", preIncrementB);

// TASK 13 — Post Decrement

console.log("===== TASK 13 =====");

let postDecrementA = 20;

let postDecrementB = postDecrementA--;

console.log("a:", postDecrementA);
console.log("b:", postDecrementB);

// TASK 14 — Pre Decrement

console.log("===== TASK 14 =====");

let preDecrementA = 20;

let preDecrementB = --preDecrementA;

console.log("a:", preDecrementA);
console.log("b:", preDecrementB);

// TASK 15 — Find Final Values

console.log("===== TASK 15 =====");

let valueA = 5;

let valueB = valueA++;

let valueC = ++valueA;

let valueD = valueB--;

console.log("a:", valueA);
console.log("b:", valueB);
console.log("c:", valueC);
console.log("d:", valueD);

// TASK 16 — Assignment Operators
console.log("===== TASK 16 =====");

let num = 10;

num += 5;
console.log("After += :", num);

num -= 5;
console.log("After -= :", num);

num *= 2;
console.log("After *= :", num);

num /= 2;
console.log("After /= :", num);

num %= 3;
console.log("After %= :", num);

num **= 2;
console.log("After **= :", num);

// TASK 17 — Mini Student Profile

console.log("===== TASK 17 =====");
let studentProfileName = "Mohamed Alhafees";
let studentProfileAge = 25;
let studentProfileCity = "Mayiladuthurai";
let studentProfileCollege = "Aalim Muhammed Salegh College Of Engineering";

let subjects = [
    "Tamil",
    "English",
    "Maths",
    "Science",
    "Computer"
];

let studentProfile = {
    name: studentProfileName,
    age: studentProfileAge,
    city: studentProfileCity,
    subjects: subjects,
    isStudent: true
};

console.log("Student Name:", studentProfile.name);
console.log("Student Age:", studentProfile.age);
console.log("City:", studentProfile.city);

console.log("College:", studentProfile.college);

console.log("First Subject:", subjects[0]);
console.log("Last Subject:", subjects[subjects.length - 1]);

console.log("Total Subjects:", subjects.length);

console.log("Complete Object:", studentProfile);

// FINAL CHALLENGE — User + Calculator

console.log("===== FINAL CHALLENGE =====");

let firstNumber = prompt("Enter first number:");
let secondNumber = prompt("Enter second number:");
firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

console.log("First Number:", firstNumber);
console.log("Second Number:", secondNumber);

console.log("Addition:", firstNumber + secondNumber);
console.log("Subtraction:", firstNumber - secondNumber);
console.log("Multiplication:", firstNumber * secondNumber);
console.log("Division:", firstNumber / secondNumber);
console.log("Modulus:", firstNumber % secondNumber);
console.log("Power:", firstNumber ** secondNumber);