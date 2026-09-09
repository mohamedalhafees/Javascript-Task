# JavaScript Basics – 30 Questions & Answers

## Variables & Data Types

### Q1: What is the difference between var, let, and const?

**Answer:**

`var`, `let`, and `const` are used to create variables.

* `var` can be changed and declared again.
* `let` can be changed but cannot be declared again in the same scope.
* `const` cannot be changed or declared again.

---

### Q2: Can you re-declare a variable with var? What about let and const?

**Answer:**

Yes, we can declare a `var` variable again.

```javascript
var x = 10;
var x = 20;
```

But we cannot declare the same `let` or `const` variable again in the same scope.

---

### Q3: What is the output of this code?

```javascript
var x = 5;
let y = 10;
const z = 15;

x = 20;
y = 25;
z = 30;

console.log(x, y, z);
```

**Answer:**

It will give an error.

The reason is `z` is declared using `const`, so we cannot change its value.

```text
TypeError: Assignment to constant variable.
```

---

### Q4: What is the difference between declaring and initializing a variable?

**Answer:**

Declaration means creating a variable.

```javascript
let age;
```

Initialization means giving a value to the variable.

```javascript
let age = 25;
```

---

### Q5: What will be the output?

```javascript
let a;
console.log(a);
```

**Answer:**

```text
undefined
```

Because we created the variable but did not give it any value.

---

### Q6: What is hoisting? Give an example.

**Answer:**

Hoisting means JavaScript moves variable and function declarations to the top of their scope.

Example:

```javascript
console.log(x);

var x = 10;
```

Output:

```text
undefined
```

The variable declaration is hoisted, but its value is assigned later.

---

### Q7: What is the difference between null and undefined?

**Answer:**

`undefined` means a variable has no value assigned.

```javascript
let a;
```

`null` means we intentionally give an empty value.

```javascript
let b = null;
```

---

### Q8: What will be the output?

```javascript
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof {});
```

**Answer:**

```text
object
undefined
object
object
```

---

# Operators

### Q9: What is the difference between == and ===?

**Answer:**

`==` checks only the value and can convert the type.

```javascript
5 == "5"  // true
```

`===` checks both value and data type.

```javascript
5 === "5" // false
```

So, `===` is more strict than `==`.

---

### Q10: What is the difference between ++i and i++?

**Answer:**

`++i` increases the value first and then uses it.

```javascript
let i = 5;
console.log(++i); // 6
```

`i++` uses the value first and then increases it.

```javascript
let i = 5;
console.log(i++); // 5
console.log(i);   // 6
```

---

### Q11: What will be the output?

```javascript
let x = 10;
let y = "5";

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
```

**Answer:**

```text
105
5
50
2
```

`+` joins the number and string together.

The other operators convert `"5"` into a number.

---

### Q12: What are logical operators? Explain with examples.

**Answer:**

Logical operators are used to check multiple conditions.

There are three main logical operators:

**AND (`&&`)** – both conditions should be true.

```javascript
10 > 5 && 20 > 10
// true
```

**OR (`||`)** – at least one condition should be true.

```javascript
10 > 20 || 20 > 10
// true
```

**NOT (`!`)** – changes true to false or false to true.

```javascript
!(10 > 5)
// false
```

---

### Q13: What will be the output?

```javascript
console.log(5 > 3 && 10 > 5);
console.log(5 > 10 || 10 > 5);
console.log(!(5 > 3));
```

**Answer:**

```text
true
true
false
```

---

### Q14: What is the ternary operator? Give an example.

**Answer:**

The ternary operator is a short way of writing `if-else`.

Example:

```javascript
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);
```

Output:

```text
Adult
```

---

# Type Casting

### Q15: What is the difference between implicit and explicit type casting?

**Answer:**

**Implicit type casting** happens automatically.

```javascript
let result = 10 + "5";

console.log(result); // 105
```

**Explicit type casting** means we convert the type ourselves.

```javascript
let value = "100";

let number = Number(value);

console.log(number); // 100
```

---

### Q16: What will be the output?

```javascript
console.log(Number("123"));
console.log(Number("hello"));
console.log(Number(true));
console.log(Number(false));
console.log(Boolean(0));
console.log(Boolean("hello"));
```

**Answer:**

```text
123
NaN
1
0
false
true
```

---

### Q17: What is NaN? Give an example.

**Answer:**

`NaN` means **Not a Number**.

It comes when we try to convert something that cannot be converted into a number.

Example:

```javascript
console.log(Number("hello"));
```

Output:

```text
NaN
```

---

# Conditional Statements

### Q18: What is the difference between if-else and switch?

**Answer:**

`if-else` is used when we want to check conditions.

```javascript
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

`switch` is useful when we want to compare one value with different fixed values.

---

### Q19: What will be the output?

```javascript
let age = 20;

if(age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

**Answer:**

```text
Adult
```

Because the age is 20, which is greater than or equal to 18.

---

### Q20: What is nested if? Give an example.

**Answer:**

A nested `if` means using an `if` statement inside another `if` statement.

Example:

```javascript
let age = 20;
let hasLicense = true;

if (age >= 18) {
    if (hasLicense) {
        console.log("You can drive");
    }
}
```

Output:

```text
You can drive
```

---

### Q21: Write a program to check if a number is even or odd using ternary operator.

**Answer:**

```javascript
let num = 7;

let result = num % 2 === 0 ? "Even" : "Odd";

console.log(result);
```

Output:

```text
Odd
```

---

# Loops

### Q22: What is the difference between while and do-while?

**Answer:**

In `while`, the condition is checked first.

```javascript
while (condition) {
    // code
}
```

In `do-while`, the code runs first and then the condition is checked.

```javascript
do {
    // code
} while (condition);
```

So, a `do-while` loop runs at least one time.

---

### Q23: What will be the output?

```javascript
for(let i = 1; i <= 5; i++) {
    console.log(i);
}
```

**Answer:**

```text
1
2
3
4
5
```

---

### Q24: What is the difference between for-of and for-in?

**Answer:**

`for-of` gives the values from an array.

```javascript
let arr = [10, 20, 30];

for (let value of arr) {
    console.log(value);
}
```

Output:

```text
10
20
30
```

`for-in` gives the index of the array.

```javascript
for (let index in arr) {
    console.log(index);
}
```

Output:

```text
0
1
2
```

---

### Q25: Write a program to find sum of numbers from 1 to 100.

**Answer:**

```javascript
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}

console.log(sum);
```

Output:

```text
5050
```

---

# Arrays

### Q26: What is the difference between slice and splice?

**Answer:**

`slice()` takes a part of an array without changing the original array.

```javascript
let arr = [1, 2, 3, 4, 5];

let result = arr.slice(1, 4);

console.log(result);
```

Output:

```text
[2, 3, 4]
```

`splice()` changes the original array. We can use it to add or remove elements.

```javascript
let arr = [1, 2, 3, 4, 5];

arr.splice(1, 2);

console.log(arr);
```

Output:

```text
[1, 4, 5]
```

---

### Q27: What will be the output?

```javascript
let arr = [1, 2, 3];

arr.push(4);
arr.pop();
arr.unshift(0);
arr.shift();

console.log(arr);
```

**Answer:**

```text
[1, 2, 3]
```

First `4` is added and removed.

Then `0` is added at the beginning and removed.

So the array becomes the same as before.

---

# Functions

### Q28: What is the difference between function declaration and function expression?

**Answer:**

A function declaration is a normal function.

```javascript
function greet() {
    console.log("Hello");
}
```

A function expression stores a function inside a variable.

```javascript
let greet = function() {
    console.log("Hello");
};
```

The main difference is how the function is created and used.

---

### Q29: What is an arrow function? Give an example.

**Answer:**

An arrow function is a shorter way to write a function.

Example:

```javascript
const add = (a, b) => {
    return a + b;
};

console.log(add(5, 3));
```

Output:

```text
8
```

Short form:

```javascript
const add = (a, b) => a + b;
```

---

### Q30: What will be the output?

```javascript
function greet() {
    return "Hello";
}

let message = greet();

console.log(message);
```

**Answer:**

```text
Hello
```

The `greet()` function returns `"Hello"`, and that value is stored in the `message` variable.
