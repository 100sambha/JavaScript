// The typeof operator returns the data type of a JavaScript variable.

// avaScript has 7 primitive data types:
//     string
//     number
//     boolean
//     bigint
//     symbol
//     null
//     undefined

let res = "";

res = typeof "Sambhaji";
console.log(res);

res = typeof ("Sarkar"+"Raj");
console.log(res);

res = typeof 3.14;
console.log(res);

res = typeof 33;
console.log(res);

res = typeof (33+65);
console.log(res);

res = typeof 3+65;
console.log(res);

res = typeof true;
console.log(res);

res = typeof false;
console.log(res);

console.log(typeof null);
console.log(typeof undefined);

res = typeof 123n;
console.log(res);

res = typeof Symbol();
console.log(res);

res = typeof x;
console.log(res);

res = typeof null;
console.log(res);

res = typeof {fName:"Sambhaji"};
console.log(res);

res = typeof [1,2,3];
console.log(res);

res = typeof new Map();
console.log(res);

res = typeof new Set();
console.log(res);

res = typeof function(){}
console.log(res);

const date = new Date();
res = date instanceof Date;
console.log(res);

const fruits = ["Apple", "Banana"];
res = Array.isArray(fruits);
console.log(res);
res = fruits instanceof Array;
console.log(res);

const animals = new Set(["Tiger", "Lion", "Mango", "Lemon", "Tiger"]);
res = animals instanceof Set;
console.log(res);

const users = new Map([
    [id=100,fName="Sambhaji"],
    [id=101,fName="Raj"],
    [id=102,fName="Tushar"],

]);
res = users instanceof Map;
console.log(res);

let car;

res = typeof car;
console.log(res);

res = typeof car;
console.log(res);

car = "Volvo";
car = undefined;
console.log(car);

car = "";
res = typeof car;
console.log(res);

car = {cName:"TATA", color:"White"};
car = null;
res = typeof car;
console.log(res);

car = {cName:"TATA", color:"White"};
car = undefined;
res = typeof car;
console.log(res);

