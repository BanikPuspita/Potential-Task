## **Set 1**

## 1. Explain how the ternary operator works in JavaScript with an example.

The ternary operator in JavaScript, also known as the conditional operator, provides a concise way to write conditional expressions. It is a shorthand for a simple if...else statement and takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false.

How it works:
* condition: This is an expression that evaluates to either true or false.
* ?: This is the ternary operator itself, separating the condition from the true expression.
* expressionIfTrue: This is the value or expression that will be returned or executed if the condition is true.
* :- This acts as a separator between the true and false expressions.
* expressionIfFalse: This is the value or expression that will be returned or executed if the condition is false.

```ts

let age = 18;
let message = (age >= 18) ? "You are an adult" : "You are a minor";
console.log(message); 



```


## 2. What are the logical operators in JavaScript? give examples of how to use them.

JavaScript includes several logical operators used to combine or modify boolean expressions. These operators are:
1. Logical AND (&&)
Returns true if both operands are true. Otherwise, it returns false.
It also performs short-circuit evaluation: if the first operand is false, the second operand is not evaluated.
2. Logical OR (||) 
Returns true if at least one of the operands is true. If both are false, it returns false.
It also performs short-circuit evaluation: if the first operand is true, the second operand is not evaluated.
3. Logical NOT (!)
Inverts the boolean value of its operand. If the operand is true, it returns false, and vice versa.
4. Nullish Coalescing Operator (??)
Returns the right-hand operand when the left-hand operand is null or undefined. Otherwise, it returns the left-hand operand. This differs from || which returns the right-hand operand for any "falsy" value (like 0, "", false).


## 3. What is the purpose of the else if statement in an if else block?

The purpose of an else if statement is to allow the evaluation of multiple, sequential conditions within an if-else block, enabling a program to choose among more than two possible outcomes and execute the first matching code block found. This avoids complex nested if statements and ensures only one path is taken, improving code readability and efficiency. 


## 4. How do the if, else if and else statement differ in javaScript? provide and example of each.

In JavaScript, if, else if, and else statements are used for conditional execution, allowing different blocks of code to run based on whether specified conditions are true or false.

1. if statement:
The if statement executes a block of code only if a specified condition evaluates to true.

2. else if statement:
The else if statement provides an additional condition to be checked if the preceding if (or else if) condition evaluates to false. Multiple else if statements can be chained together.

3. else statement:
The else statement provides a default block of code to execute if all preceding if and else if conditions evaluate to false. It acts as a catch-all for any cases not covered by the earlier conditions.




## **Set 2**

## 1. What is the difference between a for loop and a for...of loop in JavaScript? give an example. 

The for loop and the for...of loop in JavaScript both facilitate iteration, but they differ in their primary purpose and the types of data they are designed to handle.
1. for Loop (Traditional)
Purpose: The traditional for loop is a general-purpose loop used when the number of iterations is known or can be determined by a specific condition. It provides fine-grained control over the iteration process.
Syntax: It requires three expressions: initialization, condition, and increment/decrement.
Iteration: It iterates based on a counter variable, typically an index.
Use Cases: Ideal for iterating over arrays by index, performing a task a fixed number of times, or implementing custom iteration logic.

2. for...of Loop
Purpose: The for...of loop is specifically designed to iterate over iterable objects. It provides a simpler, more concise way to access the values of iterable data structures. 
Syntax: It iterates directly over the values of an iterable object. 
Iteration: It iterates over the values of an iterable, such as arrays, strings, Maps, Sets, NodeLists, and other objects that implement the iterable protocol.
Use Cases: Ideal for directly accessing the elements of arrays, characters of strings, key-value pairs of Maps, and items of Sets without needing to manage indices or explicit counters.


## 2. how does a for...in loop behave? provided example. 

In most programming languages, a for...in loop iterates over the enumerable properties of an object. With each iteration, the loop assigns the name (or key) of the next property to the loop's variable. 

How a for...in loop works
* Iteration starts: The loop begins iterating over the provided object.
* Key assigned: In each cycle, the loop assigns the name of a property from the object to the specified variable.
* Code execution: The code block inside the loop is executed.
* Repeat: The process repeats, assigning the next property name to the variable until all enumerable properties have been visited. 


## 3. what is the purpose of the break statement in loop? give an where it is useful. 

The break statement in a loop serves to immediately terminate the execution of the loop and transfer program control to the statement directly following the loop. It provides a mechanism to exit a loop prematurely based on a specific condition, even if the loop's natural termination condition has not yet been met.

Example of where it is useful:
Consider a scenario where you are searching for a specific element within a list or array. You can use a loop to iterate through the elements, but once the target element is found, there is no need to continue iterating through the remaining elements. The break statement efficiently handles this situation.



### 4. describe the difference between while and do...while loops in JavaScript. give and example.

The fundamental difference between while and do...while loops in JavaScript lies in when the loop's condition is evaluated.
* while loop (Entry-Controlled Loop): The condition is evaluated before each iteration of the loop. If the condition is initially false, the loop's body will never execute.
* do...while loop (Exit-Controlled Loop): The loop's body is executed at least once before the condition is evaluated. After the first execution, the condition is checked, and if it's true, the loop continues. If it's false, the loop terminates.


## 5. How does the for...of loop? give an example

The for...of loop in JavaScript iterates over the values of an iterable object. This includes data structures like Arrays, Strings, Maps, Sets, and more. It provides a simpler and more direct way to access the values within these iterables compared to traditional for loops or for...in loops. 
How it works:
* The for...of loop takes a variable and an iterable object.
* In each iteration, the value of the next element in the iterable is assigned to the variable.
* The code block within the loop is executed for each assigned value until all values in the iterable have been processed.

## **Set 3**

## 1. What is the difference between a function declaration and a function expression in JavaScript 

The core difference between a function declaration and a function expression in JavaScript lies in their syntax, hoisting behavior, and how they are typically used.

Function Declaration: A function declaration is a standalone statement that defines a named function.
Function Expression: A function expression defines a function as part of an expression, often assigned to a variable. It can be named or anonymous.


## 2. What is a recursive function? provide an example of a recursive function for calculating the factorial of a number.

A recursive function is a function that calls itself, either directly or indirectly, to solve a problem. This approach breaks a problem down into smaller, simpler sub-problems until it reaches a base case, which is a condition that stops the recursion from continuing indefinitely. 


## 3. Explain what default parameters are in a function. how do you see them in JavaScript?

Default parameters in a function allow you to assign default values to function parameters. If a function is called without providing an argument for a parameter that has a default value, that parameter will automatically take on its default value instead of being undefined. This feature, introduced in ECMAScript 2015 (ES6), helps in writing more robust and concise functions by preventing errors related to missing arguments. 
In JavaScript, default parameters are declared directly in the function signature using the assignment operator (=) after the parameter name, followed by the default value.

## 4. What is the purpose of the return statement in a function? provide and example.

The purpose of the return statement in a function is to end the function's execution and send a value back to the part of the program that called the function. This allows functions to produce results that can be used for further computations or stored in variables, making programs more dynamic and efficient. 


## **Set 4**

## 1. When would you use a switch-case statement instead of an if-else block ?


A switch-case statement is a better choice than an if-else block when you are evaluating a single expression against many distinct, constant values. The decision is often based on code readability, performance, and the type of comparison being made. 

When to use a switch-case statement
* Multiple equality checks on a single variable: Use a switch when you need to perform multiple equality checks on the same variable. This creates a clearer, more organized structure than a long if-else if chain.
* predefined constants: Switch statements are ideal for handling logic based on enumerated types, status codes, or other sets of constant, discrete values. It makes the code's intent more explicit and can be safer, as some compilers will issue a warning if a new enum value is not handled in the switch.
* Improved readability: A switch block is often more readable and easier to maintain than a deeply nested or lengthy series of if-else if statements. The distinct case labels make it easy to see the different conditions being handled.


## 2. What happens when a continuous statement is used in a loop? how does it differ from break?


When a continue statement is used in a loop, it skips the rest of the current iteration's code and proceeds directly to the next iteration of the loop, allowing the loop to keep running. In contrast, a break statement terminates the entire loop immediately, completely exiting it and transferring program control to the first statement after the loop. 

How continue works
Skips current iteration: The continue statement halts the execution of the current iteration at that specific point. 

Moves to the next iteration: The program then jumps to the beginning of the next loop iteration, checking the loop condition and executing the body again if the condition is still true. 

Example: A continue is useful when you want to process most elements in a list but skip over a few specific ones, like avoiding the sum of negative numbers in a calculation. 

How break works

Exits the loop: The break statement immediately ends the entire loop, regardless of how many iterations are left. 

Transfers control: The program's execution then resumes at the first statement following the loop block. 

Example: A break is used when you've found the desired item in a search, and there's no need to continue checking the rest of the list


## 3. How can you handle multiple conditions in a single if statement?provided an example using logical operators .


Multiple conditions can be handled within a single if statement by using logical operators. These operators allow the combination of multiple boolean expressions, resulting in a single true or false outcome that determines whether the if block executes.
Logical Operators:

AND (&& or and): The AND operator requires all combined conditions to be true for the entire expression to be true. If any single condition is false, the entire expression becomes false.

OR (|| or or): The OR operator requires at least one of the combined conditions to be true for the entire expression to be true. The entire expression is only false if all conditions are false.

NOT (! or not): The NOT operator negates a single boolean condition, turning true into false and false into true.


## **Set 5**

## 1. Write a function that takes a number as input and returns whether the number is positive, negative, or zero using conditional operators

```ts

function checkNumber(num) {
  return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
}

console.log(checkNumber(10));  
console.log(checkNumber(-5));  
console.log(checkNumber(0));   

```




## 2. Write a function that takes the name of a day as input Monday, Friday and returns whether it is weekday or weekend. use if-else for one case and switch-case for the other 

```ts

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


```



## 3. Write a program that takes an array of numbers and returns the sum of all the even numbers using a for...of loop 

```ts

let numbers = [1, 2, 3, 4, 5, 6];
let sum = 0;

for (let num of numbers) {
  if (num % 2 === 0) {
    sum += num;
  }
}

console.log("Sum of even numbers:", sum); 



```


## 4. Write a while loop that prints all the numbers from 1 to 10 inclusive . after printing each number check if it is divisible by 2 or 3 and print Divisible by 2 or 3 next to it

```ts

let i = 1;

while (i <= 10) {
  let output = i;
  if (i % 2 === 0 || i % 3 === 0) {
    output += " Divisible by 2 or 3";
  }
  console.log(output);
  i++;
}


```


## 5. Write a recursive function that calculates the fibonacci sequence for a given number n. e.g fib(5)

```ts

function fib(n) {
  if (n === 0) return 0;   
  if (n === 1) return 1;   
  return fib(n - 1) + fib(n - 2);  
}

console.log(fib(5));  

```



## setInterval() setTimeout() clearTimeout()

In JavaScript, setTimeout(), setInterval(), and clearTimeout() are functions used for scheduling and managing the execution of code over time.

* setTimeout(function, delay, ...args)
Purpose: Executes a function or a piece of code once after a specified delay in milliseconds.

Parameters:
function: The function to be executed.
delay: The time in milliseconds to wait before executing the function.
...args: Optional additional arguments to be passed to the function when it's executed.
Return Value: Returns a unique numeric ID for the timer, which can be used to cancel the timeout.

* setInterval(function, delay, ...args)

Purpose: Executes a function or a piece of code repeatedly at a specified delay interval in milliseconds.
Parameters:
function: The function to be executed repeatedly.
delay: The time in milliseconds between each execution of the function.
...args: Optional additional arguments to be passed to the function when it's executed.
Return Value: Returns a unique numeric ID for the interval, which can be used to cancel the interval.


* clearTimeout(timeoutID)
Purpose: Cancels a timer previously set with setTimeout(), preventing its execution.
Parameter:
timeoutID: The ID returned by the setTimeout() function that you want to cancel.