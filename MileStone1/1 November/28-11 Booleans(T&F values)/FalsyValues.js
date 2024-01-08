let num = 0;
console.log(Boolean(num));

num = -0;
console.log(Boolean(num));

let str = "";
console.log(Boolean(str));

let val;
console.log(Boolean(val));

val = null;
console.log(Boolean(val));

val = false;
console.log(Boolean(val));

val = NaN;
console.log(val);

let val1 = false;
let val2 = new Boolean(false);
let val3 = new Boolean(false);
console.log(val1, val2, val1==val2);
console.log(val1, val2, val1===val2);
console.log(val2, val3, val2==val3);
console.log(val2, val3, val2===val3);