const fruits = ["Apple", "Orange", "Apple", "Mango"];

let position = fruits.indexOf("Apple") + 1;
console.log(position);

position = fruits.lastIndexOf("Apple")+1;
console.log(position);

position = fruits.includes("Mango");
console.log(position);

position = fruits.includes("Banana");
console.log(position);


position = fruits.find(myFun)
function myFun(fruit){
    return fruit=="Apple";
}
console.log(fruits.includes(position));

console.log(fruits);
position = fruits.findIndex(fruit => fruit=="Mango");
console.log(position);


position = fruits.findLast(myFun)
function myFun(fruit){
    return fruit=="Orange";
}
console.log(fruits.includes(position));

console.log(fruits);
position = fruits.findLastIndex(fruit => fruit=="Orange");
console.log(position);