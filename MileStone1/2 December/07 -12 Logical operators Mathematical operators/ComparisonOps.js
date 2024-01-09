let x = 10, y = 10;
let z = new Number(10);
let num = 100;


console.log(x,y,z);

console.log(x==y);
console.log(x===z);

console.log(x!=y);
console.log(x!==z);

console.log(x>num);
console.log(x<num);
console.log(x<y);
console.log(x>y);
console.log(x<=y);
console.log(x>=y);


console.log(x==y?"Yeas":"No");

let str1 = "A";
let str2 = "B";
console.log(str1,str2);

console.log(str1<str2);

str1 = "10"
str2 = "5"
console.log(str1<str2);
console.log(str1>str2);
// console.log(10<5);

console.log(str1+" "+str2);
console.log(str1+=str2);

str1 = "123"
str1 += 10;
console.log(str1);
console.log("Hello"+123);