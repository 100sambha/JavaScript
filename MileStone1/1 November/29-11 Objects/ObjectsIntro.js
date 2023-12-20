// In JavaScript,
// Dates are always objects
// Maths are always objects
// Regular expressions are always objects
// Arrays are always objects
// Functions are always objects
// Objects are always objects

// All JavaScript values, except primitives, are objects.

// primitive data type
// string
// number
// boolean
// null
// undefined
// symbol
// bigint

// Primitive values are immutable (they are hardcoded and cannot be changed).
// if x = 3.14, you can change the value of x, but you cannot change the value of 3.14.

// Object values are written as name : value pairs
// Objects can contain many values.
// Object is a collection of unordered properties


// for example
let employee = {"Name":"Sambhaji", "Designation":"Software Engineer", "emppId":"100", function(){ return "Salary :1000"}};
console.log(employee);

// objects are containers for named values, called properties and methods.

// Object Literal
const statusObj = {"status":"active"};
console.log(statusObj);

const profile = {}
profile.Designation = "Design Engineer"
console.log(profile);

// Using new keyword
const empData = new Object();
empData.name = "Sambhaji";
empData.status = "active";
console.log(empData);

// Make copy of empData means empDataPlus is not different from empData, both pointing to same address location.
const empDataPlus = empData;
empDataPlus.salary = "Developer";

console.log(empDataPlus);
console.log(empData);


