let num = 212.351651;

console.log("toString");
console.log(num.toString());

console.log("Exponential");
console.log(num.toExponential(2));
console.log(num.toExponential(4));
console.log(num.toExponential(8));
console.log(num.toExponential(100));

console.log("Fixed");
console.log(num.toFixed(0));
console.log(num.toFixed(2));
console.log(num.toFixed(4));
console.log(num.toFixed(8));
console.log(num.toFixed(16));


console.log("Precision");
console.log(num.toPrecision());
console.log(num.toPrecision(2));
console.log(num.toPrecision(3));
console.log(num.toPrecision(4));
console.log(num.toPrecision(5));
console.log(num.toPrecision(6));

console.log("ValueOf");
console.log(num.valueOf());
num = "123 test";
console.log(num.valueOf());


console.log("Number Method");
console.log(Number(true));
console.log(Number("10"));
console.log(Number(10.23));
console.log(Number("10.23"));
console.log(Number("John"));
console.log(Number(new Date(126564351)));


console.log("ParseInt");
console.log(parseInt("10"));
console.log(parseInt("10.30"));
console.log(parseInt("-10"));
console.log(parseInt("-10.30"));
console.log(parseInt("10 30"));
console.log(parseInt("10 years"));
console.log(parseInt("years 10"));


console.log("parseFloat");
console.log(parseFloat("10.10"));
console.log(parseFloat("10.30"));
console.log(parseFloat("-10.30"));
console.log(parseFloat("-10.30"));
console.log(parseFloat("10.2 30"));
console.log(parseFloat("10.30 years"));
console.log(parseFloat("years 10"));


console.log("Number Parse");
console.log(Number.parseInt("10"));
console.log(Number.parseInt("10.30"));
console.log(Number.parseInt("-10"));
console.log(Number.parseInt("-10.30"));
console.log(Number.parseInt("10 30"));
console.log(Number.parseInt("10 years"));
console.log(Number.parseInt("years 10"));


console.log("Number Float");
console.log(Number.parseFloat("10.10"));
console.log(Number.parseFloat("10.30"));
console.log(Number.parseFloat("-10.30"));
console.log(Number.parseFloat("-10.30"));
console.log(Number.parseFloat("10.2 30"));
console.log(Number.parseFloat("10.30 years"));
console.log(Number.parseFloat("years 10"));


console.log("IsInteger");
console.log(Number.isInteger(12));
console.log(Number.isInteger("12"));
console.log(Number.isInteger("-12"));
console.log(Number.isInteger(12.20));
console.log(Number.isInteger("test"));
console.log(Number.isInteger("10 test"));


console.log("IsSafeInteger");
console.log(Number.isSafeInteger(10));
console.log(Number.isSafeInteger(65465131646316416310384510));
console.log(Number.isSafeInteger("10"));
console.log(Number.isSafeInteger("-10"));
console.log(Number.isSafeInteger("10 year"));

console.log("JS Number Properties");
console.log(Number.EPSILON);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);

//we can't use JS number propertie value to num variable
let x = 10;
// x.MAX_VALUE
x = Number.MAX_VALUE;
console.log(x);