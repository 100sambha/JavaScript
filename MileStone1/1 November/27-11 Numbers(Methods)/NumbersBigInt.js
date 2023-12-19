let num1 = Number.MAX_SAFE_INTEGER
console.log(num1);
let num2 = Number.MIN_SAFE_INTEGER
console.log(num2);


console.log(Number.isInteger(100));
console.log(Number.isInteger("10"));
console.log(Number.isInteger("A"));
console.log(Number.isInteger(NaN));
console.log(Number.isInteger(Infinity));

console.log(Number.isSafeInteger(100));
console.log(Number.isSafeInteger(1234567890123456));