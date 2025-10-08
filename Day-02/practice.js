// Conditional Operator

let age = 16;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);


let marks = 75;
let performance = marks >= 80 ? "Excellent" : marks >= 60 ? "Good" : "Need Improvement";
console.log(performance)


let isLoggedIn = true;
let isAdmin = false;
console.log(isLoggedIn && isAdmin)
console.log(isLoggedIn || isAdmin)


let userName = "";
let displayName = userName || "Guest"
console.log(displayName)


let ages = 20;
let hasID = true;
let canEnter = ages >= 18 && hasID;
console.log(canEnter ? "Allowed" : "Denied");


let name = "";
console.log(name || "Guest"); 
console.log(name ?? "Guest");


let userAge = null;
console.log(userAge ?? 18);


console.log(5 == "5");   
console.log(5 === "5");  
console.log(5 != "5");   
console.log(5 !== "5");  


let a = 10, b = 20;
console.log(a > b);
console.log(a <= b);
console.log(a === b);



// If, Else-If, Else, Switch-Case


let myScore = 50

if(myScore >= 50){
    console.log("I am overcome this!!")
}


let x = 10;
if (x > 5) { 
    console.log("x is greater than 5");
}


let m = 10;
if (m < 5) {
  console.log("x is less than 5");
} else if (m === 10) {
  console.log("m is equal to 10"); 
} else {
  console.log("m is greater than 5");
}




let quantity = 20

if(quantity >= 25) {
    console.log("It have perfect quantity")
}
else{
    console.log("Not enough quantity")
}


let myMarks = 75;

if (myMarks >= 80) {
  console.log("Excellent");
} else if (myMarks >= 60) {
  console.log("Good");
} else {
  console.log("Needs Improvement");
}



let day = "Tuesday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Tuesday":
    console.log("Keep going!");
    break;
  case "Wednesday":
    console.log("Halfway there!");
    break;
  case "Thursday":
    console.log("Almost Friday");
    break;
  case "Friday":
    console.log("Weekend time!");
    break;
  default:
    console.log("Invalid day");
}




// For, For…of, For…In Loops


for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}



const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
  console.log(fruit);
}


for (const letter of "Puspita") {
  console.log(letter);
}



const person = {
  name: "Puspita",
  age: 23,
  country: "Bangladesh"
};

for (const key in person) {
  console.log(key, ":", person[key]);
}


// While, Do…while loops

let i = 1;

while (i <= 5) {
  console.log("Number:", i);
  i++;
}



let count = 1;

do {
  console.log("person:", count);
  count++;
} 
while (count <= 5);



// Function Declaration, Expression


function greet() {
  console.log("Hello, Bangladesh!");
}

greet(); 


function value(a, b) {
  return a + b;
}
console.log(value(5, 3));



const multiply = function(a, b) {
  return a * b;
};
console.log(multiply(4, 2)); 



const addValue = (a, b) => {
  return a + b;
};
console.log(addValue(10, 3));  



const multiplyNumbers = (a, b) => a * b;
console.log(multiplyNumbers(4, 4));  



function greetings(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greetings("Alice"));  
console.log(greetings());         



function countUp(n, target) {
  if (n > target) {
    return; 
  }
  console.log(n);
  countUp(n + 1, target); 
}

countUp(1, 5);


// Arrow function

const addNumber = (a, b) => {
    return a + b;
};
console.log(addNumber(9, 15));



const sum = (a, b) => a + b;
console.log(sum(10, 20));


const square = x => x * x;
console.log(square(5));


const noParameter = () => console.log("hello, world!!");
noParameter()


const average = (a, b, c) => (a + b + c) / 3;
console.log(average(10, 20, 30)); 



// Function Default Parameters


function division(a = 8, b = 2) {
  return a / b;
}

console.log(division())
console.log(division(10, 5))


function displayUser({
  name = "Puspita", 
  University = "BAIUST", 
  Age = 24
} = {}) {
  console.log(`I am ${name}. Currently studies ${University}. age ${Age}`)
}

displayUser({name: "Raju", University: "XYZ", Age: 25})
displayUser()



// Recursive function

function countUp(n, target) {
     if (n > target) {
        return;
    }
    console.log(n);
    countUp(n + 1, target);
}

countUp(2, 8);



function countDown(n) {
  if (n === 0) {
    console.log("Done!");
    return;
  }
  console.log("Count down is:", n);
  countDown(n - 1);
}

countDown(5);
