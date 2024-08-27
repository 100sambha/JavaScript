// Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked
console.log("A"+100);
console.log("B"+30);

function addition(a,b){
    return a+b;
}

console.log("*************Function and Function as value");
let res = addition(100,30);
console.log("Addition");
console.log(res);

console.log("************Function Expression and Function Expression as value");
res = function(a,b){return a-b}
console.log("Substraction");
console.log(res());
console.log(res(100,30));

console.log("************Function Constructor, ______Not prefered way");
console.log("Multiplication");
const multiplication = new Function("a", "b", "return a*b");
res = multiplication(100,30);
console.log(res);

console.log("*****************Function Hoisting");
console.log("Function Hoisting");
console.log("Division");
res = division(100,30);
console.log(res);
function division(a,b){
    return a/b;
}

console.log("Self Invoking Function");
console.log("anonymous self-invoking function (function without name)");
(function(){console.log("Ram Krishna Hari");})()

console.log("Function with expression");
const funRes = myfunction(2,3)*5;
function myfunction(a,b){
    console.log("Args Length");
    console.log(arguments.length);
    return a*b;
}
console.log(funRes);

console.log(typeof(myfunction));

// Return and Printing Function Body
console.log(myfunction.toString());

console.log("Arrow Function");
const result = (a,b)=>{return a+b};
console.log(result(100,30));


