const nums = [4,5,6,9,7,8,2,3];
console.log("**************forEach**************");
nums.forEach(myFun1);
function myFun1(val,index,nums){
    console.log(index,val);
}

console.log("**************map**************");
const newNums1 = nums.map(myFun2);
function myFun2(val){
    return val*val;
}
console.log(newNums1);

console.log("**************faltMap**************");
const newNums2 = nums.flatMap((num)=>num*2);
console.log(newNums2);

console.log("**************filter**************");
const newFilter = nums.filter(myFun3);
function myFun3(val){
    return val > 5;
}
console.log(newFilter);

console.log("**************reduce**************");
const newNums3 = nums.reduce(myFun4);
function myFun4(total, val, index, nums){               // bydefault total is 0, we can pass as well
    return total + val;
}
console.log(newNums3);


const newNums4 = nums.reduce(myFun5, 100);
function myFun5(total, val){
    return total + val;
}
console.log(newNums4);

console.log("**************reduceRight**************");
const newNums6 = nums.reduceRight(myFun6);
function myFun6(total, val, index, nums){
    return total + val;
}
console.log(newNums6);

const newNums7 = nums.reduceRight(myFun7, 100);
function myFun7(total, val){
    return total + val;
}
console.log(newNums7);

console.log("**************every**************");
const newNums8 = nums.every(myFun8);
function myFun8(val, index, nums){
    return val>5;
}
console.log(newNums8);

const newNums9 = nums.every(myFun9);
function myFun9(val){
    return val>0;
}
console.log(newNums9);


console.log("**************some**************");
const newNums10 = nums.some(myFun10);
function myFun10(val){
    return val>5;
}
console.log(newNums10);


console.log("**************from**************");
console.log(Array.from("TEST"));

console.log("**************keys**************");
const fruits = ["Banana", "Apple", "Mango"];
const keys = fruits.keys();
for(let key of keys){
    console.log(key);
}

console.log("**************entries**************");
const fruitEntries = fruits.entries();
for(let fruit of fruitEntries){
    console.log(fruit);
}

console.log("**************with**************");
console.log(fruits);
const myFruits = fruits.with(1,"Grapes");
console.log(myFruits);

console.log("**************spread operator**************");
const b1 = [1,2,3];
const b2 = [4,5,6];
const b3 = [7,8,9];

const box = [...b1, ...b2, ...b3];
console.log(box);