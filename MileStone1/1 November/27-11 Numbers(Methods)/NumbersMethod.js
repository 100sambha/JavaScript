let num1 = 12345;
console.log(num1.toString());

let num2 = 12.345;
console.log(num2.toExponential());
console.log(num2.toExponential(2));
console.log(num2.toExponential(4));
console.log(num2.toExponential(6));
console.log(num2.toExponential(8));

console.log(num2.toFixed());
console.log(num2.toFixed(2));
console.log(num2.toFixed(4));
console.log(num2.toFixed(6));

console.log(num2.toPrecision());
console.log(num2.toPrecision(2));
console.log(num2.toPrecision(4));
console.log(num2.toPrecision(6));


console.log(Number(true));
console.log(Number(false));
console.log(Number("10"));
console.log(Number("    10   "));
console.log(Number("    10.12   "));
console.log(Number("10,20"));
console.log(Number("10   30"));
console.log(Number("    John    "));



console.log(Number(new Date("2023-12-20")));


console.log(parseInt(10));
console.log(parseInt("-10.20"));
console.log(parseInt("10.20"));
console.log(parseInt("10"));
console.log(parseInt("10 20"));
console.log(parseInt("10 years"));
console.log(parseInt("years 20"));


console.log(parseFloat(10));
console.log(parseFloat("-10"));
console.log(parseFloat("10 20"));
console.log(parseFloat("10.23"));
console.log(parseFloat("1 3"));
console.log(parseFloat("10 years"));
console.log(parseFloat("Years 10"));