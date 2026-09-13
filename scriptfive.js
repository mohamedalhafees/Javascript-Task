// TASK FIVE - JAVASCRIPT QUESTIONS

// Q1: Difference between var, let and const

// var - can be redeclared and reassigned
var name = "Mohamed";
name = "Alhafees";

// let - can be reassigned but cannot be redeclared
let age = 25;
age = 26;

// const - cannot be reassigned or redeclared
const city = "Chennai";

console.log(name);
console.log(age);
console.log(city);


// Q2: Redeclaration

var a = 10;
var a = 20;

console.log(a);

// Q3: Output

var x = 5;
let y = 10;
const z = 15;

x = 20;
y = 25;


console.log(x);
console.log(y);
console.log(z);


// Q4: Declaration and Initialization

let studentAge; 
studentAge = 22; 
console.log(studentAge);


// Q5: Output

let number;

console.log(number);

// Q6: Hoisting

console.log(test);

var test = 100;

// Q7: null and undefined

let value1 = null;
let value2;

console.log(value1);
console.log(value2);


// Q8: typeof

console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof {});

// Q9: == and ===

console.log(5 == "5");
console.log(5 === "5");

// Q10: ++i and i++

let i = 10;

console.log(i++);
console.log(i);

let j = 10;

console.log(++j);
console.log(j);

// Q11: Arithmetic with string

let num1 = 10;
let num2 = "5";

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

// Q12: Logical operators

console.log(true && true);
console.log(true || false);
console.log(!true);


// Q13: Output

console.log(5 > 3 && 10 > 5);
console.log(5 > 10 || 10 > 5);
console.log(!(5 > 3));

// Q14: Ternary operator

let votingAge = 20;

let votingResult = votingAge >= 18
    ? "Eligible to vote"
    : "Not eligible";

console.log(votingResult);



// Q15: Implicit and Explicit conversion

// Implicit conversion
console.log("10" - 5);

// Explicit conversion
console.log(Number("10"));


// Q16: Type conversion

console.log(Number("123"));
console.log(Number("hello"));
console.log(Number(true));
console.log(Number(false));

console.log(Boolean(0));
console.log(Boolean("hello"));

// Q17: NaN

let result = Number("hello");

console.log(result);

// Q18: if-else and switch

let userAge = 20;

if (userAge >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}


// Q19: Output

let ageCheck = 20;

if (ageCheck >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}


// Q20: Nested if

let studentAgeCheck = 20;
let height = 170;

if (studentAgeCheck >= 18) {

    if (height >= 160) {
        console.log("Eligible");
    } else {
        console.log("Height is not enough");
    }

} else {
    console.log("Age is not enough");
}


// Q21: Even or Odd using ternary

let numberCheck = 10;

let evenOdd = numberCheck % 2 === 0
    ? "Even"
    : "Odd";

console.log(evenOdd);

// Q22: while and do-while

let count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}


let countTwo = 1;

do {
    console.log(countTwo);
    countTwo++;
} while (countTwo <= 5);


// Q23: for loop

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// Q24: for-of and for-in

let fruits = ["Apple", "Mango", "Orange"];

for (let fruit of fruits) {
    console.log(fruit);
}

let student = {
    name: "Arun",
    age: 22
};

for (let key in student) {
    console.log(key);
}


// Q25: Sum of 1 to 100

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}

console.log("Sum:", sum);


// Q26: slice and splice

let numbers = [10, 20, 30, 40, 50];

let slicedNumbers = numbers.slice(1, 3);

console.log(slicedNumbers);


// splice changes the original array

let numbersTwo = [10, 20, 30, 40, 50];

numbersTwo.splice(1, 2);

console.log(numbersTwo);


// Q27: Array methods

let arr = [1, 2, 3];

arr.push(4);
arr.pop();
arr.unshift(0);
arr.shift();

console.log(arr);

// Q28: Function declaration

function greetUser() {
    return "Hello";
}

console.log(greetUser());


// Q29: Arrow function

const welcome = () => {
    return "Welcome";
};

console.log(welcome());


// Q30: Function output

function greet() {
    return "Hello";
}

let message = greet();

console.log(message);
