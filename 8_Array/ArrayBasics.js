// We can't reassign array, we can update only
// Way of createing array
const cars = ["TATA", "Mahindra", "JEEP", "AUDI"];
console.log(cars);


const fruits = []
fruits[0] = "Apple";
fruits[1] = "Strowberry";
fruits[2] = "Banana";
fruits[3] = "Pinapple";
console.log(fruits);


const animals = new Array("Tiger", "Lion", "Dog", "Cat");
console.log(animals);
console.log(animals[0]);


animals[1] = "Fox";
console.log(animals);


console.log(animals.toString());


// Array first and last element
console.log(animals[0]);
console.log(animals[animals.length-1]);


console.log("************Fruits************")
animals.forEach(myFun);
function myFun(value){
    console.log(value);
}

animals.push("Elephant");
console.log(animals);
// animals.push("Panthar");         //Creates empty holes in array

const arr1 = new Array(40);
console.log(arr1)
const arr2 = [40];
console.log(arr2)