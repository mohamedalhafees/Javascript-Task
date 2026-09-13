// TASK SIX - JAVASCRIPT PRACTICE

// TASK 1 - STUDENT RESULT ANALYZER

function studentResult(name, department, marks) {

    let total = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];

    let average = total / 5;

    let grade;

    if (average >= 90) {
        grade = "A";
    } else if (average >= 75) {
        grade = "B";
    } else if (average >= 60) {
        grade = "C";
    } else if (average >= 50) {
        grade = "D";
    } else {
        grade = "Fail";
    }

    console.log("Name:", name);
    console.log("Department:", department);
    console.log("Total:", total);
    console.log("Average:", average);
    console.log("Grade:", grade);
}

studentResult(
    "hafees",
    "Computer Science",
    [85, 90, 80, 75, 88]
);

// TASK 2 - EMPLOYEE SALARY CALCULATOR

let employee = {
    name: "hafees",
    role: "Python Developer",
    salary: 45000,
    experience: 2
};

function calculateSalary(employee) {

    let basicSalary = employee.salary;
    let bonus = 0;

    if (employee.experience >= 5) {
        bonus = basicSalary * 0.15;
    } else if (employee.experience >= 2) {
        bonus = basicSalary * 0.10;
    }

    let finalSalary = basicSalary + bonus;

    console.log("Employee:", employee.name);
    console.log("Basic Salary:", basicSalary);
    console.log("Bonus:", bonus);
    console.log("Final Salary:", finalSalary);
}

calculateSalary(employee);

// TASK 3 - PRODUCT FILTER SYSTEM

let products = [
    {
        name: "Laptop",
        price: 55000,
        category: "electronics"
    },
    {
        name: "Mouse",
        price: 800,
        category: "electronics"
    },
    {
        name: "Shirt",
        price: 1200,
        category: "fashion"
    },
    {
        name: "Shoes",
        price: 2500,
        category: "fashion"
    },
    {
        name: "Phone",
        price: 30000,
        category: "electronics"
    }
];


let expensiveProducts = products.filter(function(product) {
    return product.price > 2000;
});

console.log("Products above 2000:", expensiveProducts);

let electronics = products.filter(function(product) {
    return product.category === "electronics";
});

console.log("Electronics:", electronics);

let cheapProduct = products.find(function(product) {
    return product.price < 1000;
});

console.log("First product below 1000:", cheapProduct);

let totalPrice = products.reduce(function(total, product) {
    return total + product.price;
}, 0);

console.log("Total Price:", totalPrice);

let expensiveCheck = products.some(function(product) {
    return product.price > 50000;
});

console.log("Product above 50000:", expensiveCheck);

let allProductsCheck = products.every(function(product) {
    return product.price > 500;
});

console.log("All products above 500:", allProductsCheck);

// TASK 4 - EMPLOYEE MANAGEMENT

let employees = [
    {
        id: 101,
        name: "mohamed",
        role: "Frontend Developer",
        salary: 40000
    },
    {
        id: 102,
        name: "ashif",
        role: "Backend Developer",
        salary: 50000
    },
    {
        id: 103,
        name: "hafees",
        role: "Full Stack Developer",
        salary: 60000
    },
    {
        id: 104,
        name: "fairose",
        role: "UI Developer",
        salary: 35000
    },
    {
        id: 105,
        name: "irfan",
        role: "Python Developer",
        salary: 55000
    },
    {
        id: 106,
        name: "absar",
        role: "Java Developer",
        salary: 45000
    }
];


let employeeNames = employees.map(function(employee) {
    return employee.name;
});

console.log("Employee Names:", employeeNames);


let highSalaryEmployees = employees.filter(function(employee) {
    return employee.salary > 40000;
});

console.log("Employees above 40000:", highSalaryEmployees);


let employeeId = employees.find(function(employee) {
    return employee.id === 103;
});

console.log("Employee ID 103:", employeeId);



let totalSalary = employees.reduce(function(total, employee) {
    return total + employee.salary;
}, 0);

console.log("Total Salary:", totalSalary);


let highestPaid = employees.reduce(function(highest, employee) {

    if (employee.salary > highest.salary) {
        return employee;
    } else {
        return highest;
    }

});

console.log("Highest Paid:", highestPaid);

let sortedEmployees = [...employees].sort(function(a, b) {
    return b.salary - a.salary;
});

console.log("Salary High to Low:", sortedEmployees);

// TASK 5 - SHOPPING CART

let cart = [
    {
        name: "Laptop",
        price: 50000,
        quantity: 1
    },
    {
        name: "Mouse",
        price: 1000,
        quantity: 2
    },
    {
        name: "Keyboard",
        price: 2000,
        quantity: 1
    }
];

function calculateCart(cart) {

    let total = cart.reduce(function(sum, item) {

        let itemTotal = item.price * item.quantity;

        console.log(item.name, "Total:", itemTotal);

        return sum + itemTotal;

    }, 0);

    let discount = 0;

    if (total > 50000) {
        discount = total * 0.10;
    }

    let finalAmount = total - discount;

    console.log("Cart Total:", total);
    console.log("Discount:", discount);
    console.log("Final Amount:", finalAmount);
}

calculateCart(cart);

// TASK 6 - STUDENT SEARCH SYSTEM

let students = [
    {
        name: "Abdullah",
        age: 21,
        mark: 85
    },
    {
        name: "hafees",
        age: 22,
        mark: 92
    },
    {
        name: "absar",
        age: 20,
        mark: 67
    },
    {
        name: "irfan",
        age: 23,
        mark: 45
    }
];


console.log(
    students.map(function(student) {
        return student.name;
    })
);


let above80 = students.filter(function(student) {
    return student.mark > 80;
});

console.log("Above 80:", above80);

let hafees = students.find(function(student) {
    return student.name === "hafees";
});

console.log("hafees:", hafees);


let totalMarks = students.reduce(function(total, student) {
    return total + student.mark;
}, 0);

let averageMark = totalMarks / students.length;

console.log("Average Mark:", averageMark);


// Anyone failed?

let failedStudent = students.some(function(student) {
    return student.mark < 50;
});

console.log("Anyone failed:", failedStudent);


let everyonePassed = students.every(function(student) {
    return student.mark > 40;
});

console.log("Everyone above 40:", everyonePassed);

let sortedStudents = [...students].sort(function(a, b) {
    return b.mark - a.mark;
});

console.log("Students sorted by marks:", sortedStudents);

// TASK 7 - ARRAY TRANSFORMATION

let numbers = [12, 5, 8, 21, 44, 7, 30, 15];


let doubledNumbers = numbers.map(function(number) {
    return number * 2;
});

console.log("Doubled:", doubledNumbers);


let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});

console.log("Even Numbers:", evenNumbers);


let greaterThan15 = numbers.filter(function(number) {
    return number > 15;
});

console.log("Greater than 15:", greaterThan15);


let firstGreater20 = numbers.find(function(number) {
    return number > 20;
});

console.log("First greater than 20:", firstGreater20);



let numbersTotal = numbers.reduce(function(total, number) {
    return total + number;
}, 0);

console.log("Total:", numbersTotal);

console.log(
    numbers.some(function(number) {
        return number > 40;
    })
);

console.log(
    numbers.every(function(number) {
        return number > 0;
    })
);


let descendingNumbers = [...numbers].sort(function(a, b) {
    return b - a;
});

console.log("Descending:", descendingNumbers);


// TASK 8 - STRING ANALYZER

let sentence = prompt("Enter a sentence");

console.log("Total Characters:", sentence.length);

console.log("Uppercase:", sentence.toUpperCase());

console.log("Lowercase:", sentence.toLowerCase());

console.log(
    "Contains JavaScript:",
    sentence.includes("JavaScript")
);

console.log(
    "First Character:",
    sentence[0]
);

console.log(
    "Last Character:",
    sentence[sentence.length - 1]
);

let words = sentence.split(" ");

console.log("Number of Words:", words.length);

console.log(
    "Replace JavaScript:",
    sentence.replace("JavaScript", "Python")
);

console.log(
    "Array:",
    sentence.split(" ")
);

// FINAL MINI PROJECT

let companyEmployees = [
    {
        id: 101,
        name: "Mohamed Alhafees",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Absar",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Abdullah",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];


// 1. Employee List

console.log("All Employees:");

companyEmployees.forEach(function(employee) {
    console.log(employee);
});


// 2. Search employee by name

let searchName = "Mohamed Alhafees";

let searchedEmployee = companyEmployees.find(function(employee) {
    return employee.name === searchName;
});

console.log("Search Result:", searchedEmployee);


// 3. Department filter

let itEmployees = companyEmployees.filter(function(employee) {
    return employee.department === "IT";
});

console.log("IT Employees:", itEmployees);


// 4. Salary filter

let salaryEmployees = companyEmployees.filter(function(employee) {
    return employee.salary > 50000;
});

console.log("Salary above 50000:", salaryEmployees);


// 5. Total company salary

let companySalary = companyEmployees.reduce(function(total, employee) {
    return total + employee.salary;
}, 0);

console.log("Total Company Salary:", companySalary);


// 6. Highest salary

let highestSalaryEmployee = companyEmployees.reduce(function(highest, employee) {

    if (employee.salary > highest.salary) {
        return employee;
    }

    return highest;

});

console.log("Highest Salary:", highestSalaryEmployee);


// 7. Experience more than 3 years

let experiencedEmployees = companyEmployees.filter(function(employee) {
    return employee.experience > 3;
});

console.log("Experience above 3 years:", experiencedEmployees);


// 8. Low to high

let lowToHigh = [...companyEmployees].sort(function(a, b) {
    return a.salary - b.salary;
});

console.log("Salary Low to High:", lowToHigh);


// High to low

let highToLow = [...companyEmployees].sort(function(a, b) {
    return b.salary - a.salary;
});

console.log("Salary High to Low:", highToLow);


// 9. Statistics

let totalEmployees = companyEmployees.length;

let averageSalary = companySalary / totalEmployees;

console.log("Total Employees:", totalEmployees);
console.log("Total Salary:", companySalary);
console.log("Highest Salary:", highestSalaryEmployee.salary);
console.log("Average Salary:", averageSalary);