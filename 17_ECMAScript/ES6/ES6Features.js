// let keyword allows you to declare a variable with block scope.
{
    let x = 2;
    console.log(x);
}
// console.log(x);



// The const keyword allows you to declare a constant.
// Constants are similar to let variables, except that the value cannot be changed.
{
    const num = 10
    console.log(num);
    // num = 12;
    // console.log(num);
}

// const add = (a,b)=>a+b;
const add = (a,b)=>{return a+b};
console.log("Addition-",add(10,20));


// Destructuring assignment makes it easy to assign array values and object properties to variables.
const user = {
    fName : "Sambhaji",
    lName : "Pandhare",
    age : 20
}
let {fName, lName} = user;
console.log(fName, lName);


// Destructuring assignment makes it easy to assign array values and object properties to variables.
const fruits = ["Apple", "Banana","Strawberry","Lemon","Mango"];
const [f1,f2,f3] = fruits;
console.log(f1,f2,f3);


// console.log(fruits)
// console.log(...fruits)

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(q1, q2, q3, q4);
console.log(year);


let numbers = [23,55,21,87,56];
let maxValue = Math.max(...numbers);
console.log(maxValue);


const animals = new Map([]);
animals.set(1,"Lion");
animals.set(2,"Tiger");
console.log(animals);

for(let a of animals){
    console.log(a);
}

const birds = new Set();
birds.add("Peacock")
birds.add("Parrot")
birds.add("Crock")
birds.add("Peacock")
birds.add("Sparrow")

console.log(birds);


// ES6 allows function parameters to have default values.
function arithmeticOps(a,b=0){
    console.log(a+b);
}
arithmeticOps(10,2);


function test(...args){
    for(let a of args){
        console.log(a)
    }
}
test(1,2,3,4,5,6)
console.log()
test(1,2,3,)


let str = "I can do it";
console.log(str.includes("do"));
console.log(str.startsWith("I"));
console.log(str.endsWith("it"));


numbers = [23,55,21,87,56];
let nums = numbers.entries();
for(let num of nums){
    console.log(num);
}

let keys = numbers.keys();
// let keys = numbers.values();
for(let key of keys){
    console.log(key);
}

let fArray = numbers.find(myFunc);
let fArrayIndex = numbers.findIndex(myFunc);
function myFunc(value){
    return value > 50;
}
console.log(fArray);
console.log(fArrayIndex);