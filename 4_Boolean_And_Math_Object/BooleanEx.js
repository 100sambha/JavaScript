let x;

console.log("Boolean True Values");
console.log(Boolean(true));
console.log(Boolean(100));
console.log(Boolean(3.14));
console.log(Boolean(-15));
console.log(Boolean("Hello"));
console.log(Boolean("false"));
console.log(Boolean(7+1+3.14));

console.log("Boolean False Values");
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(""));
console.log(Boolean(x));
console.log(Boolean(null));
console.log(Boolean(false));


console.log("Boolean as Object");
let val1 = false;
let val2 = false;
let val3 = new Object(false);
let val4 = new Object(false);
console.log("Val1 : "+val1);
console.log("Val2 : "+val2);
console.log("Val3 : "+val3);
console.log("Val4 : "+val4);
console.log(val1==val2);
console.log(val1===val2);
console.log(val1==val3);
console.log(val3==val4);
console.log(val3===val4);