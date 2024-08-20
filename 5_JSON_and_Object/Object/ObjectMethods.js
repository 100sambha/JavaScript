// Copies properties from a source object to a target object
// Object.assign(target, source)
const person1 = {
    id : 100,
    fName : "Sarkar",
    designation : "QA",
    salary : 54561.231
}

const person2 = {}
Object.assign(person2,person1);
console.log(person2);

const person3 = {fName : "Raj"}
Object.assign(person1,person3);
console.log(person1);


// Creates an object from an existing object
// Object.create(object)
const user1 = {
    id : 101,
    uName : "Sambhaji",
    pass : 123123
}
const user2 = Object.create(user1);
// console.log(user2);                         //   Why empty print?
console.log(user2.id);
console.log(user2.uName);
console.log(user2.pass);


// Creates an object from a list of keys/values
// Object.fromEntries()
const fruits = [
    ["apple",100],
    ["banana",50],
    ["Strowberry",623],
    ["Lemon",20]
]
const fruitObj = Object.fromEntries(fruits);
console.log(fruitObj);


// Returns an array of the key/value pairs of an object
// Object.entries(object)
const population = {
    men : 3000,
    women : 1000,
    kids : 500,
    young : 1500,
    older : 2000
}
const populationArray = Object.entries(population);
console.log(populationArray);


// Returns an array of the keys of an object
// Object.keys(object)
const populationKeys = Object.keys(population);
console.log(populationKeys);

// Returns an array of the property values of an object
// Object.values(object)
const populationValues = Object.values(population);
console.log(populationValues);


// Groups object elements according to a function
// Object.groupBy(object, callback)
// const fruitsObj = [
//     {name:"apples", quantity:300},
//     {name:"bananas", quantity:500},
//     {name:"oranges", quantity:200},
//     {name:"kiwi", quantity:150}
//   ];

//   function myCallback({quantity}){
//     return quantity > 200 ? "OK" : "LOW";
//   }
//   const result = Object.groupBy(fruitsObj, myCallback);
//   console.log("OK Fruits");
//   for(let[x,y] of result.ok.entries()){
//     console.log(x,y);
//   }

//   console.log("Low Fruits");
//   for(let[x,y] of result.low.entries()){
//     console.log(x,y);
//   }