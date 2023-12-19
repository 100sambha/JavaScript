// JavaScript strings are for storing and manipulating text.
// A JavaScript string is zero or more characters written inside quotes.

const fName = "Sambhaji";
const lName = 'Pandhare';
console.log("Fname - ",fName);
console.log("LName - ",lName);

console.log("Length Of LName and FName",fName.length+lName.length);

console.log("\'Sambhaji\'");
console.log("\"Pandhare\"");
console.log("'Don't Fear to dare'");
console.log('"Don\'t Fear to dare"');
console.log("\\I am the best\\");
console.log("Intt\bro");
console.log("\nIntro");
console.log("How \rare you doing?");
console.log("\vYeah!Good");
console.log("Yeah!\tGood");

console.log("Hey \
I am fine. \
How are you doing \
");

console.log("Hey"+
"I am fine."+
"How are you");

let collegeaName = new String("DVVP COE A.Nagar");
console.log(collegeaName);

const str1 = "Sambhaji";
const str2 = new String("Sambhaji");
const str3 = new String("Sambhaji");

console.log("\n");
console.log("str1 = ", str1);
console.log("str2 =", str2);
console.log("str3 =", str3);
let res = str1==str2;
console.log("str1==str2",res);

res = str1===str2;
console.log("str1===str2",res);

res = str2==str3;
console.log("str2==str3",res);

res = str2===str3;
console.log("str2===str3",res);