"use strict"

const car = { type: "Fiat", model: "500", color: "white" };
console.log(car);
car.price = 452130;
console.log(car);

let res = Object.isExtensible(car);
console.log(res);

Object.preventExtensions(car);          //  Not Allowing add new property like below seatCapacity

res = Object.isExtensible(car);
console.log(res);

// car.seatCapacity = 6;
// console.log(car);

// similar wwe can do with array as well


delete car.price;
console.log(car);
Object.seal(car);
// delete car.type
console.log(Object.isSealed(car));

try{
    delete car.type
    console.log("............");
    console.log(car);
}catch(err){
    console.log("error");
    console.log(err);
}
console.log("check 1");


// Not allowed to modify, add, del property
car.color="red";
console.log(car);
console.log(Object.isFrozen(car));
Object.freeze(car);
// car.color="White";
// console.log(car);
console.log(Object.isFrozen(car));