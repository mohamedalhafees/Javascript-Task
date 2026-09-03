// Task 1 - Variables

var name = "Mohamed Alhafees";
let age = 25;
const native = "Mayiladuthurai";

console.log(name);
console.log(age);
console.log(native);

name = "Mohamed";
age = 26;

console.log(name);
console.log(age);

// Task 2 - Printing Statements

console.log("Hello JavaScript");

alert("Welcome to JavaScript");

confirm("Do you want to continue?");

prompt("Enter your name");

document.writeln("JavaScript Beginner Task");

// Task 3 - User Details

let userName = prompt("Enter your name");
let userAge = prompt("Enter your age");
let userCity = prompt("Enter your city");
let qualification = prompt("Enter your qualification");

console.log("Name:", userName);
console.log("Age:", userAge);
console.log("City:", userCity);
console.log("Qualification:", qualification);


// Task 4 - Data Types

let language = "JavaScript";
let number = 100;
let decimal = 99.5;
let pass = true;
let fail = false;
let value;
let empty = null;

console.log(language, typeof language);
console.log(number, typeof number);
console.log(decimal, typeof decimal);
console.log(pass, typeof pass);
console.log(fail, typeof fail);
console.log(value, typeof value);
console.log(empty, typeof empty);


// Task 5 - Student Array

let students = ["Hafees", "Dhoni", "Rohit", "Raina", "Kl Rahul"];

console.log(students[0]);
console.log(students[1]);
console.log(students[students.length - 1]);
console.log(students.length);


// Task 6 - Employee Object

let employee = {
    name: "Mohamed Alhafees",
    age: 25,
    role: "Developer",
    skills: ["HTML", "CSS", "JavaScript"],
    isWorking: true,
    qualification: ["B.E", "JavaScript"]
};

console.log(employee.name);
console.log(employee.age);
console.log(employee.role);
console.log(employee.skills[0]);
console.log(employee.qualification[1]);
console.log(employee.isWorking);


// Task 7 - Calculator

let a = 20;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);


// Task 8 - Shopping Bill

let shirt = 999;
let pant = 1499;
let shoes = 1999;
let bag = 799;

let total = shirt + pant + shoes + bag;

console.log("Total:", total);


// Task 9 - Increment and Decrement

let x = 10;

let y = x++;

console.log(x);
console.log(y);

let p = 10;

let q = ++p;

console.log(p);
console.log(q);

let m = 10;

let n = m--;

console.log(m);
console.log(n);

let r = 10;

let s = --r;

console.log(r);
console.log(s);


// Task 10 - Assignment Operators

let num = 10;

num += 5;
console.log("Addition : ", num);

num -= 3;
console.log(num);

num *= 2;
console.log("Multiplication : ", num);

num /= 4;
console.log("Division : ", num);

num %= 3;
console.log("Modulus : ", num);

num **= 2;
console.log("Exponentiation : ", num);


// Task 11 - Comparison Operators

console.log("Greater than : ",10 > 5);
console.log("Less than : ",10 < 5);
console.log("Greater than or equal to : ",10 >= 10);
console.log("Less than or equal to : ",10 <= 9);

console.log("Equal to : ",5 == "5");
console.log("Strictly Equal to : ",5 === "5");

console.log("Not Equal to : ",10 != "10");
console.log("Strictly Not Equal to : ",10 !== "10");


// Task 12 - AND

console.log("AND : ",true && true);
console.log("AND : ",true && false);
console.log("AND : ",false && true);
console.log("AND : ",false && false);


// Task 13 - OR

console.log("OR : ",true || true);
console.log("OR : ",true || false);
console.log("OR : ",false || true);
console.log("OR : ",false || false);


// Task 14 - NOT

console.log("NOT : ",!true);
console.log("NOT : ",!false);
console.log("NOT : ",!(5 > 10));
console.log("NOT : ",!(10 > 5));


// Task 15 - Combination

console.log("Combination 1 : ",5 == "5" && !(5 === 5) || 6 > 7);

console.log("Combination 2 : ",10 > 5 && 8 < 12 || 4 === "4");

console.log("Combination 3 : ", 7 === 7 && 10 != "10" || 5 >= 5);

console.log("Combination 4 : ",15 < 10 || 20 > 15 && 5 == "5");


// Task 16 - Voting

let votingAge = 20;

let voting = votingAge >= 18
    ? "Eligible to vote"
    : "Not eligible";

console.log(voting);


// Task 17 - Password

let password = true;

let login = password
    ? "Login successful"
    : "Wrong password";

console.log(login);


// Task 18 - User Introduction

let myName = "Mohamed Alhafees";
let myAge = 25;
let myCity = "Mayiladuthurai";

console.log(
    "My name is " + myName +
    ". I am " + myAge +
    " years old. I live in " + myCity + "."
);

console.log(
    `My name is ${myName}. I am ${myAge} years old. I live in ${myCity}.`
);


// Task 19 - String Conversion

console.log(String(100));
console.log(String(true));
console.log(String(undefined));
console.log(String(null));
console.log(String([1, 2]));


// Task 20 - Number Conversion

console.log(Number());
console.log(Number(""));
console.log(Number("123"));
console.log(Number("a1"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(undefined));
console.log(Number(null));


// Task 21 - Boolean Conversion

console.log(Boolean());
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean(123));
console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean([]));
console.log(Boolean({}));


// Task 22 - Voting Eligibility

let voteAge = Number(prompt("Enter your age"));

if (voteAge >= 18) {
    console.log("You can vote");
} else {
    console.log("You can't vote");
}


// Task 23 - Positive or Negative

let value1 = Number(prompt("Enter a number"));

if (value1 > 0) {
    console.log("Positive");
} else if (value1 < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}


// Task 24 - Grade System

let marks = Number(prompt("Enter your marks"));

if (marks >= 90) {
    console.log("A Grade");
} else if (marks >= 80) {
    console.log("B Grade");
} else if (marks >= 70) {
    console.log("C Grade");
} else if (marks >= 60) {
    console.log("D Grade");
} else {
    console.log("Fail");
}


// Task 25 - Job Eligibility

let jobAge = Number(prompt("Enter your age"));
let height = Number(prompt("Enter your height"));
let weight = Number(prompt("Enter your weight"));

if (jobAge >= 18) {

    if (height >= 160) {

        if (weight >= 60) {
            console.log("Congratulations! You are selected");
        } else {
            console.log("Weight is below 60");
        }

    } else {
        console.log("Height is below 160");
    }

} else {
    console.log("Age is below 18");
}


// Task 26 - Traffic Light

let color = prompt("Enter red, yellow or green");

switch (color) {

    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid color");
}


// Task 27 - Day

let day = 1;

switch (day) {

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
}


// Task 28 - Student Result System

let studentName = prompt("Enter student name");
let studentAge = Number(prompt("Enter student age"));
let studentCity = prompt("Enter student city");

let tamil = Number(prompt("Enter Tamil marks"));
let english = Number(prompt("Enter English marks"));
let maths = Number(prompt("Enter Maths marks"));

let studentTotal = tamil + english + maths;
let average = studentTotal / 3;

let grade;

if (average >= 90) {
    grade = "A";
} else if (average >= 80) {
    grade = "B";
} else if (average >= 70) {
    grade = "C";
} else if (average >= 60) {
    grade = "D";
} else {
    grade = "Fail";
}

let voteStatus;

if (studentAge >= 18) {
    voteStatus = "Eligible";
} else {
    voteStatus = "Not Eligible";
}

console.log("Name: " + studentName);
console.log("Age: " + studentAge);
console.log("City: " + studentCity);
console.log("Total: " + studentTotal);
console.log("Average: " + average);
console.log("Grade: " + grade);
console.log("Voting: " + voteStatus);
console.clear();