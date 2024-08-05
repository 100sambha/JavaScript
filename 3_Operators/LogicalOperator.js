let x = 10;
let y = 10;
let z = 20;
let a = "10";

console.log("x : "+x);
console.log("y : "+y);
console.log("z : "+z);

console.log("Comaprison Operator");
console.log(x==y);
console.log(x==a);
console.log(x==z);

console.log(x===y);
console.log(x===a);
console.log(x===z);

console.log(x!=y);
console.log(x!=a);
console.log(x!=z);

console.log(x!==y);
console.log(x!==a);
console.log(x!==z);

console.log(y>x);
console.log(z>x);

console.log(y<x);
console.log(z<x);

console.log(y>=x);
console.log(z>=x);

console.log(y<=x);
console.log(z<=x);

x==y?console.log("Same"):console.log("Not Same");
x==z?console.log("Same"):console.log("Not Same");


console.log("Logical Operator")
console.log(true && true);
console.log(true && false);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || false);

console.log(!true);
console.log(!false);


console.log("Type Operator");
console.log(typeof(100));
console.log(typeof(100.01));
console.log(typeof("Test"));

console.log("Bitwise Operator");
console.log(true & true);
console.log(true & false);
console.log(false & false);

console.log(true | true);
console.log(true | false);
console.log(false | false);

console.log(true ^ true);
console.log(true ^ false);
console.log(false ^ false);

console.log(~true);
console.log(~false);