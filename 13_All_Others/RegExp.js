// A regular expression is a sequence of characters that forms a search pattern.
// A regular expression can be a single character, or a more complicated pattern.
// regular expressions are often used with the two string methods: search() and replace().

let myString = "My Name is Sambhaji, my God is Krishna";
let res = myString.search("Sambhaji");
console.log(res);
console.log("-----------------------------------------");
res = myString.search(/Sambhaji/i);
console.log(res);
console.log("-----------------------------------------");
res = myString.replace("Sambhaji","Sarkar");
console.log(res);
console.log("-----------------------------------------");
res = res.replace(/Sarkar/, "Sarkar Raj");
// res = res.replace(/sarkar/, "Sarkar Raj");
// res = res.replace(/sarkar/i, "Sarkar Raj");
console.log(res);
console.log("-----------------------------------------");
console.log(myString);
res = myString.match(/My/ig);                                   //  global matching
console.log(res);
// res = myString.match(/My/g);
// console.log(res);
// res = myString.match(/My/i);
// console.log(res);
console.log("-----------------------------------------");
myString = "My 1 Name is Sambhaji,\nmy God is Krishna2";
res = myString.match(/^My/m);                                   //  myString.match(/^My/m(i,g));        //Multiline matching
console.log(res);
console.log("-----------------------------------------");
// perform start to end matching
res = myString.match(/(Sambha)(ji)/d);
console.log(res);
console.log("-----------------------------------------");
res = myString.match(/[h]/g);
console.log(res);
console.log("-----------------------------------------");
res = myString.match(/[1-4]/g);
console.log(res);
console.log("-----------------------------------------");
res = myString.match(/(Sambhaji|Krishna)/g);
console.log(res);
console.log("-----------------------------------------");
res = myString.match(/\d/g);
console.log(res);
console.log("-----------------------------------------");
res = myString.match(/\s/g);
console.log(res);
console.log("-----------------------------------------");
res = myString.match(/\bNa/g);
console.log(res);
res = myString.match(/ji\b/g);
console.log(res);
console.log("-----------------------------------------");
res = myString.match(/\u0053/g);
console.log(res);
console.log("-----------------------------------------");
res = myString.match(/\u0053/g);
console.log(res);
console.log("-----------------------------------------");
res = myString.match(/i+/g);
console.log(res);
console.log("-----------------------------------------");
res = myString.match(/m*/g);
console.log(res);
console.log("-----------------------------------------");
res = myString.match(/m?/g);
console.log(res);
console.log("-----------------------------------------");


let pattern = /e/i
res = pattern.test(myString);
console.log(res);
res = /e/.test(myString);
console.log(res);
console.log("-----------------------------------------");
pattern = /ji/
res = pattern.exec(myString);
console.log(res);
res = /e/.exec(myString);
console.log(res);