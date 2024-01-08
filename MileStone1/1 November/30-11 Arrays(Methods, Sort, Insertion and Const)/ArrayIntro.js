// storing the multiple values in single variable

const animals = ["cat", "dog", "elphant", "Lion"];
console.log(animals);
const fruits = new Array("Apple", "Orange", "Mango", "Lemon");
console.log(fruits);


console.log(Array.isArray(fruits));
console.log(typeof animals);
console.log(animals instanceof Array);
console.log(fruits instanceof Array);


console.log(animals.toString());


console.log(fruits.length);                                     //Length of Array
console.log(fruits[0]);                                         //First Array element
console.log(fruits[fruits.length-1]);                           //Last Array element


const cars = [];
cars[0] = "TATA";
cars[1] = "HONDA";
cars[2] = "TOYATO";
cars[3] = "SKODA";
console.log(cars);
console.log(cars[0]);
console.log(cars[1]);
console.log(animals[0]);
console.log(fruits[0]);


const userData = {
    uName : "Sambhaji",
    uPassword : "123456"
}
function userDataFun() {
    return userData;
}
const uData = [userData, userDataFun, Date.now()];
console.log(uData);


console.log(animals);
for (let i = 0; i<animals.length; i++) {
    console.log(animals[i]);
}
for(let animal of animals) {
    console.log(animal);
}
animals.forEach(myFun);
function myFun(animal){
    console.log(animal);
}


// Adding new values to array
animals.push("tiger");
console.log(animals);
animals[animals.length]="Rabbit";
console.log(animals);
animals[10] = "Wolf";                   //Chance of adding undefined or empty holes in array
console.log(animals);

// literal array and using new keyword created array never same
//Sometimes with new keyword created array gives unexpected results