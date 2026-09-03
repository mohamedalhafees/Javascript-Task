// Task 1 - For Loop

for (let i = 1; i <= 10; i++) {
    console.log("i : " + i);
}

// Task 2 - Reverse Number

for (let j = 10; j >= 1; j--) {
    console.log("j : " + j);
}

// Task 3 - Even Numbers

for (let k = 1; k <= 20; k++) {

    if (k % 2 == 0) {
        console.log("k : " + k);
    }

}

// Task 4 - Odd Numbers

for (let l = 1; l <= 20; l++) {

    if (l % 2 != 0) {
        console.log("l : " + l);
    }

}

// Task 5 - Multiplication Table

let tableNumber = Number(prompt("Enter a number"));

for (let i = 1; i <= 10; i++) {

    console.log(
        tableNumber + " x " + i + " = " + (tableNumber * i)
    );

}

// Task 6 - While Loop Countdown

let count = 10;

while (count >= 1) {

    console.log("count : " + count);

    count--;
}

// Task 7 - Sum of Numbers

let number = 1;
let sum = 0;

while (number <= 10) {

    sum = sum + number;

    number++;
}

console.log("Sum:", sum);


// Task 8 - Do While

let a = 1;

do {

    console.log("a : " + a);

    a++;

} while (a <= 5);


// Task 9 - Do While Understanding

let value = 10;

do {

    console.log("value : " + value);

    value++;

} while (value <= 5);

// Task 10 - For Of String

let name = "javascript";

for (let character of name) {

    console.log("character : " + character);

}

// Task 11 - For Of Array

let fruits = [
    "apple",
    "orange",
    "banana",
    "mango",
    "grapes"
];

for (let fruit of fruits) {

    console.log("fruit : " + fruit);

}

// Task 12 - Student Names

let students = [
    "Hafees",
    "Absar",
    "Abdullah",
    "Arshath",
    "Irfan"
];

for (let student of students) {

    console.log("Student : " + student);

}

// Task 13 - For In Employee

let employee = {
    name: "Hafees",
    age: 25,
    role: "Developer",
    city: "Chennai"
};

for (let key in employee) {

    console.log("key : " + key + ", value : " + employee[key]);

}


// Task 14 - Product Object

let product = {
    productName: "Mobile",
    price: 20000,
    brand: "Samsung",
    category: "Electronics",
    stock: 10
};

for (let key in product) {

    console.log("key : " + key + ", value : " + product[key]);

}


// Task 15 - Simple Function

function welcome() {

    console.log("Welcome to JavaScript");

}

welcome();
welcome();
welcome();


// Task 16 - Function With Parameter

function greet(name) {

    console.log("Hello " + name);

}

greet("Hafees");
greet("Absar");
greet("Abdullah");


// Task 17 - Multiple Parameters

function student(name, age, department) {

    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);

}

student("Hafees", 25, "IT");
student("Arshath", 24, "HR");
student("Absar", 26, "CSE");


// Task 18 - Return

function add(a, b) {

    return a + b;

}

let result = add(10, 20);

console.log("Addition:", result);


// Task 19 - Salary

function salary(amount) {

    return amount;

}

let mySalary = salary(50000);

console.log("Salary:", mySalary);


// Task 20 - Bonus Calculator

function bonus(salary, bonusAmount) {

    return salary + bonusAmount;

}

let totalSalary = bonus(50000, 5000);

console.log("Total Salary:", totalSalary);


// Task 21 - Default Parameter

function employeeDetails(name, role = "Developer") {

    console.log("Name:", name);
    console.log("Role:", role);

}

employeeDetails("Hafees");
employeeDetails("ABdullah", "Designer");


// Task 22 - Named Function

function square(number) {

    return number * number;

}

console.log("square(2) : " + square(2));
console.log("square(3) : " + square(3));
console.log("square(4) : " + square(4));
console.log("square(5) : " + square(5));
console.log("square(6) : " + square(6));


// Task 23 - Anonymous Function

let calculate = function(a, b) {

    return a + b;

};

console.log("calculate(10, 20) : " + calculate(10, 20));


// Task 24 - Arrow Function

let multiply = (a, b) => {

    return a * b;

};

console.log("multiply(5, 4) : " + multiply(5, 4));


// Task 25 - Scope

function test() {

    if (true) {

        var x = 10;
        let y = 20;
        const z = 30;

        console.log("x : " + x);
        console.log("y : " + y);
        console.log("z : " + z);
    }

    console.log("x : " + x);
    // console.log("y : " + y);
    // console.log("z : " + z);

}

test();

// Task 26 - Hoisting

console.log("hoistingValue : " + hoistingValue);

var hoistingValue = 10;

// Task 27 - Let Hoisting

 //console.log("letValue : " + letValue);

 //let letValue = 20;

// in the Temporal Dead Zone.


// Task 28 - Const Hoisting

// console.log("constValue : " + constValue);

// const constValue = 30;


// Task 29 - IIFE

(function () {

    console.log("Welcome to JavaScript");

})();


// IIFE with parameters

(function (product, discount) {

    console.log("product : " + product + ", discount : " + discount);

})("Mobile", 20);


// Task 30 - Callback Function

function welcomeMessage() {

    console.log("Welcome");

}

function execute(callback) {

    callback();

}

execute(welcomeMessage);


// Task 31 - Generator Function

function* cashback() {

    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";

}

let cashbackResult = cashback();

for (let value of cashbackResult) {

    console.log("value : " + value);

}

// Task 32 - Employee Management System


let employees = [

    {
        name: "Hafees",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },

    {
        name: "Absar",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    },

    {
        name: "Abdullah",
        age: 27,
        department: "IT",
        role: "Tester",
        salary: 45000
    }

];



console.log("Employee Details");

for (let employee of employees) {

    console.log(employee.name);
    console.log(employee.age);
    console.log(employee.department);
    console.log(employee.role);
    console.log(employee.salary);

}




console.log("Employee Keys and Values");

for (let employee of employees) {

    for (let key in employee) {

        console.log(key, employee[key]);

    }

}




function displayEmployee(employee) {

    console.log("Name:", employee.name);
    console.log("Age:", employee.age);
    console.log("Department:", employee.department);
    console.log("Role:", employee.role);
    console.log("Salary:", employee.salary);

}




displayEmployee(employees[0]);
displayEmployee(employees[1]);
displayEmployee(employees[2]);



function getSalary(employee) {

    return employee.salary;

}

let employeeSalary = getSalary(employees[0]);

console.log("Employee Salary:", employeeSalary);




for (let employee of employees) {

    if (employee.salary >= 40000) {

        console.log(
            employee.name + " salary is 40000 or above"
        );

    } else {

        console.log(
            employee.name + " salary is below 40000"
        );

    }

}


let salaryCalculation = (salary) => {

    return salary + 5000;

};

console.log(
    "New Salary:",
    salaryCalculation(40000)
);



function* benefits() {

    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";

}

let employeeBenefits = benefits();

for (let benefit of employeeBenefits) {

    console.log("Benefit:", benefit);

}