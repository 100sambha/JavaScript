let str = ",Bharat Jay Ho Bharatiy Army, Bharatiy Rat";
console.log(str);

console.log(str.indexOf("Army"));
console.log(str.indexOf("Bharat",10));
console.log(str.lastIndexOf("Bharat"));
console.log(str.lastIndexOf("Bharat",37));

console.log(str.search("Jay"));
console.log(str.search(/jay/ig));

console.log(str.match("rat"));
console.log(str.match(/rat/i));
console.log(str.match(/rat/gi));

console.log(Array.from(str.matchAll("rat")));
console.log(Array.from(str.matchAll(/rat/g)));
console.log(Array.from(str.matchAll(/rat/gi)));

console.log(str.includes("Jay"));
console.log(str.includes("Army",15));

console.log(str.startsWith("Bharat"));
console.log(str.startsWith("Jay",8));
console.log(str.startsWith("Jay",7));


console.log(str.endsWith("Rat"));
console.log(str.endsWith("Jay",11));