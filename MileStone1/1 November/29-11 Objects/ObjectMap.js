// Map holds key-value pairs where the keys can be any datatype.
// Map remembers the original insertion order of the keys.
// Map has a property that represents the size of the map.

const fruits = new Map([
    ["Apple",100],
    ["Mango",80],
    ["Lemon",200]
])

console.log(fruits);
console.log(fruits.size);
console.log(typeof fruits);
console.log(fruits instanceof Map);
console.log(fruits.has("Banana"));

// Add new values
fruits.set("Strowberry", 210);
fruits.set("Banana", 60);
console.log(fruits);

// update existing values
fruits.set("Apple",250);
fruits.set("Lemon",10);
console.log(fruits);

console.log(fruits.get("Apple"));
console.log(fruits.get("Lemon"));


fruits.forEach(function(value,key){
    console.log(key+ ":"+ value);
})


for(const fruit of fruits.entries()){
    console.log(fruit);
}


for(const fruitKey of fruits.keys()){
    console.log(fruitKey+" : "+fruits.get(fruitKey));
}


for(const fruit of fruits.values()){
    console.log(fruit);
}


const apple = {name:"Apples"};
const mango = {name:"Mango"};
const newFruits = new Map();
newFruits.set(apple,200);
newFruits.set(mango,250);

console.log(newFruits);
console.log(newFruits.get(apple));


// fruits.delete("Lemon");
// console.log(fruits);
// fruits.clear();
// console.log(fruits);