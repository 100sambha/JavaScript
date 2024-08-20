for(let i = 0; i<10; i++){
    console.log(i+1);
}

const user = {
    id : 1,
    fName : "Sambhaji",
    age : 20
}

for(let key in user){
    console.log(key, ":", user[key]);
}

console.log("**********Fruits*************");
let fruits = ["Apple", "Grapes", "Strowberry"];
for(let fruit in fruits){
    console.log(fruits[fruit]);
}

console.log("************Numbers*************")
let nums = [454,65,46,987,3,312,654];
nums.forEach(myFunction);
// function myFunction(value){
function myFunction(value, index, array){
    console.log(index+1,value);
}

console.log("************cars**********");
const cars = ["TATA", "Mahindra", "Toyato"];
for(let car of cars){
    console.log(car);
}

let myName = "Sarkar";
for(let word of myName){
    console.log(word);
}