const rollNumbers = [34,23,53,77,45,74,22];
console.log(rollNumbers);

console.log("forEach Methods");
rollNumbers.forEach(myFunc1);
function myFunc1(value) {         //function myFunc1(value,index,arr) {
    console.log(value);
}

console.log("map Methods");
rollNumbers.map(myFunc2);
function myFunc2(value,index,arr) {     //function myFunc2(value) {
    console.log(index,value*2);
}

console.log(rollNumbers.flatMap((num)=>num*3));

console.log(rollNumbers.filter(myFunc3));
function myFunc3(value){
    return value>50;
}

let sum = rollNumbers.reduce(myFunc4)
function myFunc4(total,value,index,arr){        //function myFunc4(total,value){
    return total+value;
}
console.log(sum);

sum = rollNumbers.reduce(myFunc5,100);
function myFunc5(total,value){
    return total+value;
}
console.log(sum);

sum = rollNumbers.reduceRight(myFunc6)
function myFunc6(total,value,index,arr){        //function myFunc4(total,value){
    return total+value;
}
console.log(sum);

sum = rollNumbers.reduceRight(myFunc7,100);
function myFunc7(total,value){
    return total+value;
}
console.log(sum);


console.log(rollNumbers.every(myFunc8));
function myFunc8(value, index, arr){        //function myFunc8(value){
    // return value<50;                     //all values over 50
    return value>5;                         //all values over 5
}

console.log(rollNumbers.some(myFunc9));
function myFunc9(value, index, arr){        //function some(value){
    // return value<50;                        //all values over 50
    return value<5;                         //some values less than 5
}


let myName = "Sambhaji";
console.log(Array.from(myName))
// console.log(object);

const fruits = ["Banana", "Mango", "Strawberry"];
console.log(fruits);

for(let x of fruits.keys()){
    console.log(x, fruits[x]);
}

for(let fruit of fruits.entries()){
    console.log(fruit);
}

// const months = ["Januar", "Februar", "Mar", "April"];
// const myMonths = months.with(2, "March");

const myArrays = [...rollNumbers, ...fruits];
console.log(myArrays);