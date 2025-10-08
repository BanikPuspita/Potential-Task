/**
 * Set - 1
 * Ques - 1
 * Ans 
 */

let age = 18;
let message = (age >= 18) ? "You are an adult" : "You are a minor";
console.log(message); 


/**
 * Set - 1
 * Ques - 2
 * Ans -
 */

let x = 8;
let y = 12;

console.log(x > 5 && y < 15);  
console.log(x > 10 && y < 15); 

console.log(x > 10 || y < 15); 
console.log(x > 10 || y > 20); 

console.log(!(x > 10)); 
console.log(!(y < 20)); 


/**
 * Set - 1
 * Ques - 4
 * Ans -
 */

let temperature = 25;

if (temperature > 20) {
  console.log("It's a warm day.");
}


let score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
}



let hour = 10;

if (hour < 12) {
  console.log("Good morning!");
} else if (hour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}




/**
 * Set - 2
 * Ques - 1
 * Ans -
 */


let fruits = ["apple", "banana", "mango"];

for (let p = 0; p < fruits.length; p++) {
  console.log(fruits[p]);  
}

let allFruits = ["apple", "banana", "mango"];

for (let fruit of allFruits) {
  console.log(fruit);  
}


/**
 * Set - 2
 * Ques - 2
 * Ans -
 */

let person = {
  name: "Alice",
  age: 25,
  city: "Dhaka"
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}


/**
 * Set - 2
 * Ques - 3
 * Ans -
 */

for (let p = 0; p < 10; p++) {
  if (p === 5) {
    break; // exit the loop when p is 5
  }
  console.log(p);
}


/**
 * Set - 2
 * Ques - 4
 * Ans -
 */

let p = 5;

while (p < 5) {
  console.log("This will not run");
  p++;
}


let m = 5;

do {
  console.log("This will run once");
  m++;
} while (m < 5);


/**
 * Set - 2
 * Ques - 5
 * Ans -
 */

let word = "Hello";

for (let char of word) {
  console.log(char);
}


/**
 * Set - 3
 * Ques - 1
 * Ans -
 */

// Can be called before declaration
greet();

function greet() {
  console.log("Hello from function declaration!");
}



const greetExpression = function() {
  console.log("Hello from function expression!");
};

greetExpression(); 


/**
 * Set - 3
 * Ques - 2
 * Ans -
 */

function factorial(n) {
  if (n === 0 || n === 1) {  
    return 1;
  } else {
    return n * factorial(n - 1);  
  }
}

console.log(factorial(5)); 



/**
 * Set - 3
 * Ques - 4
 * Ans -
 */

function add(a, b) {
  return a + b; 
}

let result = add(5, 3);
console.log(result); 


/**
 * Set - 4
 * Ques - 3
 * Ans -
 */

let ages = 25;
let hasID = true;

if (ages >= 18 && hasID) {
  console.log("You can enter the club.");
} else {
  console.log("Access denied.");
}



/**
 * Set - 5
 * Ques - 1
 * Ans -
 */

function checkNumber(num) {
  return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
}

console.log(checkNumber(10));  
console.log(checkNumber(-5));  
console.log(checkNumber(0));   


/**
 * Set - 5
 * Ques - 2
 * Ans -
 */

// Using if-else for one case
function checkDayIf(day) {
  if (day === "Saturday" || day === "Sunday") {
    return "Weekend";
  } else {
    return "Weekday";
  }
}

console.log(checkDayIf("Monday"));   
console.log(checkDayIf("Sunday"));   


// Using switch-case for another
function checkDaySwitch(day) {
  switch(day) {
    case "Saturday":
    case "Sunday":
      return "Weekend";
    default:
      return "Weekday";
  }
}

console.log(checkDaySwitch("Friday"));  
console.log(checkDaySwitch("Sunday"));  


/**
 * Set - 5
 * Ques - 3
 * Ans -
 */

let numbers = [1, 2, 3, 4, 5, 6];
let sum = 0;

for (let num of numbers) {
  if (num % 2 === 0) {
    sum += num;
  }
}

console.log("Sum of even numbers:", sum); 



/**
 * Set - 5
 * Ques - 4
 * Ans -
 */

let i = 1;

while (i <= 10) {
  let output = i;
  if (i % 2 === 0 || i % 3 === 0) {
    output += " Divisible by 2 or 3";
  }
  console.log(output);
  i++;
}



/**
 * Set - 5
 * Ques - 5
 * Ans -
 */


function fib(n) {
  if (n === 0) return 0;   
  if (n === 1) return 1;   
  return fib(n - 1) + fib(n - 2);  
}

console.log(fib(5));  
