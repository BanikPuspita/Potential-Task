## **Set 1**

## 1. What is TypeScript and how is it different from JavaScript?

TypeScript is a strongly typed programming language that builds upon JavaScript. It is a superset of JavaScript, meaning any valid JavaScript code is also valid TypeScript code. The primary addition TypeScript brings is static typing, allowing developers to define the types of variables, function parameters, and return values.
Differences from JavaScript:

* JavaScript is dynamically typed; TypeScript allows type checking before running the code.

* TypeScript code compiles to plain JavaScript, so it runs anywhere JS runs.

* TypeScript helps catch errors early, improves code maintainability, and provides better IDE support.


## 2. What are type annotations in TypeScript? Provide an example. 

Type annotations explicitly define the type of a variable, function parameter, or return value.  

```ts
let age: number = 24;
let name: string = "Puspita";
function greetings(user: string): void {
  console.log(`Hello, ${user}`);
}

```

## 3. What is the difference between let, const, and var in TypeScript?



| Keyword | Scope    | Mutability | Hoisting |
| ------- | -------- | ---------- | -------- |
| `var`   | Function | Mutable    | Yes      |
| `let`   | Block    | Mutable    | No       |
| `const` | Block    | Immutable  | No       |

**Examples:**

* `var` (function-scoped and hoisted)**

```ts
function testVar() {
  console.log(x); 
  var x = 10;
  x = 20;         
  console.log(x);  
}
testVar();

```

* `let` (block-scoped and mutable)**

```ts
{
  let y = 5;
  y = 15;          
  console.log(y);   
}
// console.log(y); // Error: y is not defined (block-scoped)
```


* `const` (block-scoped and immutable)**

```ts
const z = 100;
// z = 200;       // Error: cannot reassign a const
console.log(z);  // 100

```

## 4. What are interfaces in TypeScript? How do they help in defining object shapes? Provide an example.

Interfaces define the structure of objects, specifying property names and types.

```ts
interface User {
  name: string;
  age: number;
  email?: string; // optional property
}

const user: User = { name: "Puspita", age: 22 };

```

## 5. What does the any type represent in TypeScript? How does it affect type safety?

any allows a variable to hold any type, disabling type checking for that variable.

```ts
let data: any = 10;
data = "hello"; // valid
data = true;    // valid

```



## **Set 2**

## 1. Explain the difference between numeric enums and string enums in TypeScript. Provide examples.

Numeric enum (default):

```ts
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}
```

```ts

String enum:

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}
```



## 2. What is reverse mapping in TypeScript enums? Provide an example.

Reverse mapping allows numeric enums to map both name → value and value → name.


```ts

enum Direction {
  Up, Down, Left, Right
}

console.log(Direction.Up);   // 0
console.log(Direction[0]);   // "Up"

```

## 3. How do computed members work in TypeScript enums? Give an example.


```ts

function getStart() { return 5; }

enum MyEnum {
  First = getStart(),
  Second = First + 10
}

console.log(MyEnum.Second); // 15

```

### 4. Can you mix string and numeric values in an enum in TypeScript? What are the implications?

No, TypeScript does not allow mixing string and numeric values in the same enum. Numeric enums support reverse mapping; string enums do not.

## 5. How do you define optional properties in an interface in TypeScript? Provide an example.


```ts

interface User {
  name: string;
  age?: number; // optional
}

const user1: User = { name: "Puspita" };
const user2: User = { name: "Puspita", age: 22 };

```

## **Set 3**

## 1. What is the benefit of using strict equality (===) in TypeScript over loose equality (==)?


=== checks both type and value, avoiding unexpected results.

== performs type coercion.

```ts

0 == "0";  // true
0 === "0"; // false

```

## 2. What is type coercion in JavaScript? How does TypeScript handle it? Provide an example.


Type coercion = automatic conversion between types in JavaScript.

TypeScript prevents many coercion errors using static typing.

```ts
let num: number = 10;
let str: string = "5";
// let result = num + str; // Error in TypeScript

```

## 3. What are union types in TypeScript? How are they different from interfaces? Provide an example.

```ts

let value: number | string;
value = 10;
value = "hello"; // valid

```

Difference:

* Union types allow a variable to hold multiple possible types.

* Interfaces define the shape of objects.

## 4. What is the difference between void and never in TypeScript? When would you use each?

void → function returns nothing:

```ts

function logMessage(): void {
  console.log("Hello");
}

```

* never → function never returns (throws error or infinite loop):

```ts

function error(): never {
  throw new Error("Something went wrong");
}

```

## 5. How can you use type aliases in TypeScript? Provide an example where a type alias improves code readability.

```ts

type ID = string | number;

function printID(id: ID) {
  console.log(`ID: ${id}`);
}

printID(123);
printID("abc");

```