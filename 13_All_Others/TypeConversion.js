// The global method Number() converts a variable (or a value) into a number.

let res="";

console.log("************************************************************");
console.log("String to Num");
let stringNum = "123.58";
res =  Number(stringNum);
console.log(res);
console.log(typeof(res));
console.log("--------------------------------------------------");
stringNum = Math.PI;
res =  Number(stringNum);
console.log(res);
console.log(typeof(res));
console.log("--------------------------------------------------");
stringNum = "";
res =  Number(stringNum);
console.log(res);
console.log(typeof(res));
console.log("--------------------------------------------------");
stringNum = " ";
res =  Number(stringNum);
console.log(res);
console.log(typeof(res));

console.log("************************************************************");

let strRes = "";
console.log("Num to String");
let numString = "123.58";
strRes =  String(numString);
console.log(strRes);
console.log(typeof(strRes));
console.log("--------------------------------------------------");
numString = (10 + 30).toString();
strRes =  String(numString);
console.log(strRes);
console.log(typeof(strRes));

console.log("************************************************************");

let dateRes;
console.log("Date conversion");
let d = new Date();
dateRes =  Number(d);
console.log(dateRes);
console.log(typeof(dateRes));
console.log("--------------------------------------------------");
console.log("Date conversion");
d = new Date().toString();
dateRes =  String(d);
console.log(dateRes);
console.log(typeof(dateRes));

console.log("************************************************************");

console.log("Booleans to Numbers");
let boolRes;
let booleanVal = false;
boolRes = Number(booleanVal);
console.log(boolRes);
booleanVal = true;
boolRes = Number(booleanVal);
console.log(boolRes);
console.log("--------------------------------------------------");
console.log("Booleans to Strings");
boolRes;
booleanVal = false;
boolRes = String(booleanVal);
console.log(boolRes);
console.log("--------------------------------------------------");
booleanVal = true;
boolRes = String(booleanVal);
console.log(boolRes);

console.log("************************************************************");

console.log("Automatic Type Conversion");
res = 5+null;
console.log(res);
console.log(typeof(res));
console.log("--------------------------------------------------");
res = "5"+null;
console.log(res);
console.log(typeof(res));
console.log("--------------------------------------------------");
res = 5+null;
console.log(res);
console.log(typeof(res));
console.log("--------------------------------------------------");
res = "5"+"2";
console.log(res);
console.log(typeof(res));
console.log("--------------------------------------------------");
res = "5"-"2";
console.log(res);
console.log(typeof(res));
console.log("--------------------------------------------------");
res = "5"*"2";
console.log(res);
console.log(typeof(res));