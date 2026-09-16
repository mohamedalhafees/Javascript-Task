
const API_URL = "https://dummyjson.com/users";
const DEFAULT_SALARY = 50000;
const DEPARTMENT_LIST = ["IT", "HR", "Finance", "Marketing"];

let employees = [];            
let currentDepartment = "All"; 


const loadingMessage = document.getElementById("loadingMessage");
const statusMessage = document.getElementById("statusMessage");
const employeeContainer = document.getElementById("employeeContainer");
const employeeCountEl = document.getElementById("employeeCount");
const totalSalaryEl = document.getElementById("totalSalary");
const averageSalaryEl = document.getElementById("averageSalary");
const highestEmployeeEl = document.getElementById("highestEmployee");

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const departmentButtons = document.getElementById("departmentButtons");
const sortSelect = document.getElementById("sortSelect");

const employeeForm = document.getElementById("employeeForm");
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const emailInput = document.getElementById("emailInput");
const departmentInput = document.getElementById("departmentInput");
const salaryInput = document.getElementById("salaryInput");

const nameError = document.getElementById("nameError");
const ageError = document.getElementById("ageError");
const emailError = document.getElementById("emailError");
const departmentError = document.getElementById("departmentError");

const todayEl = document.getElementById("today");
const timeEl = document.getElementById("time");


function fetchEmployees() {

    
    loadingMessage.innerHTML = "Loading employees...";

    fetch(API_URL)
        .then(function (response) {
            return response.json(); 
        })
        .then(function (data) {

            
            employees = data.users.map(function (user, index) {
                return {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    age: user.age,
                    email: user.email,
                    phone: user.phone,
                    image: user.image,
                    
                    department: DEPARTMENT_LIST[index % DEPARTMENT_LIST.length],
                    salary: DEFAULT_SALARY
                };
            });

            displayEmployees(employees);
            statusMessage.innerHTML = "Employee data loaded successfully.";
        })
        .catch(function (error) {
            console.log(error);
            statusMessage.innerHTML = "Unable to load employee data. Please try again.";
        })
        .finally(function () {
            loadingMessage.innerHTML = "";
        });
}


function displayEmployees(employeeArray) {

    
    employeeContainer.innerHTML = "";

    employeeArray.forEach(function (employee) {

        
        const department = employee.department ? employee.department : "IT";

        const card = document.createElement("div");
        card.className = "employee-card";

        card.innerHTML = `
            <img src="${employee.image}" alt="${employee.firstName}'s photo">
            <h2>${employee.firstName} ${employee.lastName}</h2>
            <p><strong>Age:</strong> ${employee.age}</p>
            <p><strong>Email:</strong> ${employee.email}</p>
            <p><strong>Department:</strong> ${department}</p>
            <p><strong>Phone:</strong> ${employee.phone ? employee.phone : "Not available"}</p>
            <p><strong>Salary:</strong> ₹${employee.salary}</p>
            <button class="delete-button">Delete</button>
        `;

       
        const deleteButton = card.querySelector(".delete-button");
        deleteButton.addEventListener("click", function () {
            deleteEmployee(employee.id);
        });

        employeeContainer.appendChild(card);
    });

    
    updateEmployeeCount(employeeArray);
    calculateSalary(employeeArray);
    showHighestSalary(employeeArray);
}

function searchEmployees() {

    const searchText = searchInput.value.toLowerCase();

    let result = employees.filter(function (employee) {
        const fullName = (employee.firstName + " " + employee.lastName).toLowerCase();
        return fullName.includes(searchText);
    });

    
    if (currentDepartment !== "All") {
        result = result.filter(function (employee) {
            return employee.department === currentDepartment;
        });
    }

    displayEmployees(result);
}

searchButton.addEventListener("click", searchEmployees);
searchInput.addEventListener("input", searchEmployees);


function filterDepartment(department) {

    currentDepartment = department;

    const buttons = departmentButtons.querySelectorAll(".dept-btn");
    buttons.forEach(function (button) {
        if (button.dataset.department === department) {
            button.classList.add("is-active");
        } else {
            button.classList.remove("is-active");
        }
    });

    searchEmployees(); 
}

departmentButtons.addEventListener("click", function (event) {
    const clickedButton = event.target.closest(".dept-btn");
    if (clickedButton) {
        filterDepartment(clickedButton.dataset.department);
    }
});

function updateEmployeeCount(employeeArray) {
    employeeCountEl.innerHTML = employeeArray.length;
}

function calculateSalary(employeeArray) {

    if (employeeArray.length === 0) {
        totalSalaryEl.innerHTML = "₹0";
        averageSalaryEl.innerHTML = "₹0";
        return;
    }

   
    const totalSalary = employeeArray.reduce(function (total, employee) {
        return total + Number(employee.salary);
    }, 0);

    const averageSalary = totalSalary / employeeArray.length;

    totalSalaryEl.innerHTML = "₹" + totalSalary.toLocaleString("en-IN");
    averageSalaryEl.innerHTML = "₹" + Math.round(averageSalary).toLocaleString("en-IN");
}

function showHighestSalary(employeeArray) {

    if (employeeArray.length === 0) {
        highestEmployeeEl.innerHTML = "No employee found";
        return;
    }

    const highestEmployee = employeeArray.reduce(function (highest, employee) {
        if (employee.salary > highest.salary) {
            return employee;
        }
        return highest;
    });

    highestEmployeeEl.innerHTML =
        highestEmployee.firstName + " " + highestEmployee.lastName + "<br>" +
        "₹" + highestEmployee.salary.toLocaleString("en-IN");
}

employeeForm.addEventListener("submit", function (event) {
    event.preventDefault(); 
    addEmployee();
});

function clearFormErrors() {
    nameError.innerHTML = "";
    ageError.innerHTML = "";
    emailError.innerHTML = "";
    departmentError.innerHTML = "";
}

function validateEmployee() {

    clearFormErrors();
    let isValid = true;

    const name = nameInput.value.trim();
    const age = Number(ageInput.value);
    const email = emailInput.value.trim();
    const department = departmentInput.value;

    if (name === "") {
        nameError.innerHTML = "❌ Please enter employee name";
        isValid = false;
    }

    if (isNaN(age) || age <= 18) {
        ageError.innerHTML = "❌ Age must be greater than 18";
        isValid = false;
    }

    if (email === "") {
        emailError.innerHTML = "❌ Please enter employee email";
        isValid = false;
    }

    if (department === "") {
        departmentError.innerHTML = "❌ Please select department";
        isValid = false;
    }

    
    const emailAlreadyUsed = employees.some(function (employee) {
        return employee.email === email;
    });

    if (emailAlreadyUsed && email !== "") {
        emailError.innerHTML = "❌ This email is already in use";
        isValid = false;
    }

    return isValid;
}

function addEmployee() {

    if (validateEmployee() === false) {
        return; 
    }

    const name = nameInput.value.trim();
    const age = Number(ageInput.value);
    const email = emailInput.value.trim();
    const department = departmentInput.value;
    const salary = Number(salaryInput.value);

    
    const nameParts = name.split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(" ") || "";

    const newEmployee = {
        id: Date.now(),
        firstName: firstName,
        lastName: lastName,
        age: age,
        email: email,
        department: department,
        phone: "Not Available",
        image: "https://dummyjson.com/image/120x120",
        salary: salary || DEFAULT_SALARY
    };

    
    employees = [...employees, newEmployee];

    clearForm();
    filterDepartment("All");
}

function clearForm() {
    employeeForm.reset();
    clearFormErrors();
}

function deleteEmployee(employeeId) {

    const employeeToDelete = employees.find(function (employee) {
        return employee.id === employeeId;
    });

    if (!employeeToDelete) {
        return;
    }

    employees = employees.filter(function (employee) {
        return employee.id !== employeeId;
    });

    searchEmployees(); 
}

function sortEmployees(type) {

    if (!type) {
        displayEmployees(employees);
        return;
    }

    const sortedEmployees = [...employees]; 
    if (type === "name") {
        sortedEmployees.sort(function (a, b) {
            return a.firstName.toLowerCase().localeCompare(b.firstName.toLowerCase());
        });
    }

    if (type === "age") {
        sortedEmployees.sort(function (a, b) {
            return a.age - b.age;
        });
    }

    if (type === "salary") {
        sortedEmployees.sort(function (a, b) {
            return b.salary - a.salary;
        });
    }

    displayEmployees(sortedEmployees);
}

sortSelect.addEventListener("change", function (event) {
    sortEmployees(event.target.value);
});

const MONTH_NAMES = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function showDate() {
    const date = new Date();
    const day = date.getDate();
    const month = MONTH_NAMES[date.getMonth()];
    const year = date.getFullYear();

    todayEl.innerHTML = "Today: " + day + " " + month + " " + year;
}

function showTime() {
    const date = new Date();
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");

    let period = "AM";
    if (hours >= 12) {
        period = "PM";
    }

    if (hours > 12) {
        hours = hours - 12;
    }
    if (hours === 0) {
        hours = 12;
    }

    timeEl.innerHTML = "Time: " + hours + ":" + minutes + " " + period;
}

function startClock() {
    showTime();
    setTimeout(function updateTime() {
        showTime();
        setTimeout(updateTime, 1000);
    }, 1000);
}

showDate();
startClock();
fetchEmployees();